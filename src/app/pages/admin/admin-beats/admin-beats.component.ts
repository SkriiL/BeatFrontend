import {Component, Input, OnInit} from '@angular/core';
import {BeatService} from '../../../services/beat.service';
import {Observable} from 'rxjs';
import {Beat} from '../../../models/beat';
import {map} from 'rxjs/internal/operators';
import {FormControl} from '@angular/forms';
import {BeatTypeService} from '../../../services/beat-type.service';
import {File} from '../../../models/file';

@Component({
  selector: 'app-admin-beats',
  templateUrl: './admin-beats.component.html',
  styleUrls: ['./admin-beats.component.css']
})
export class AdminBeatsComponent implements OnInit {
  @Input('standalone')
  set _standalone(value: boolean | undefined) {
    if (value === false) {
      this.standalone = false;
      this.beats$ = this.beatService.getAll().pipe(
        map((bs: Beat[]) => {
          return bs.slice(0, 10);
        })
      );
    }
  }

  public nameControl = new FormControl();
  public pathControl = new FormControl();
  public urlControl = new FormControl();
  public bpmControl = new FormControl(0);
  public priceControl = new FormControl();
  public typeControl = new FormControl();
  public file: string | undefined;

  public standalone = true;
  public beats$: Observable<Beat[]>;
  public selectedBeat: Beat | undefined;
  public beatTypes$ = this.beatTypeService.getAll();

  constructor(
    private beatService: BeatService,
    private beatTypeService: BeatTypeService,
  ) {
    if (this.standalone === true) {
      this.beats$ = this.beatService.getAll();
      this.beatTypes$ = this.beatTypeService.getAll();
    }
  }

  ngOnInit() {
  }

  fileInput(files: FileList) {
    const reader = new FileReader();
    const file = files.item(0);
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.file = reader.result;
      console.log(this.file);
    };
  }

  selectBeat(beat: Beat) {
    this.selectedBeat = beat;
    this.nameControl.setValue(beat.name);
    this.pathControl.setValue(beat.path);
    this.urlControl.setValue(beat.url);
    this.bpmControl.setValue(beat.bpm);
    this.priceControl.setValue(beat.price);
    this.typeControl.setValue(beat.type.id);
  }

  save() {
    const beat: Beat = {
      id: -1,
      name: this.nameControl.value,
      path: this.pathControl.value,
      url: this.urlControl.value,
      bpm: this.bpmControl.value,
      price: this.priceControl.value,
      type: undefined,
      typeId: this.typeControl.value,
      file: this.file,
    };
    if (this.selectedBeat == null) {
      this.beatService.create(beat);
    } else {
      this.beatService.edit(beat);
    }
  }

  delete(beat: Beat) {
    this.beatService.deleteById(beat.id);
  }

}

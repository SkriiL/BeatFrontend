import {Component, OnInit} from '@angular/core';
import {BeatsService} from '../../services/beats.service';
import {Observable} from 'rxjs';
import {Beat} from '../../models/beat';
import {DomSanitizer} from '@angular/platform-browser';
import {FormControl} from '@angular/forms';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-free-beats',
  templateUrl: './free-beats.component.html',
  styleUrls: ['./free-beats.component.css']
})
export class FreeBeatsComponent implements OnInit {
  public beats$: Observable<Beat[]>;
  public selectionsLeft = 3;

  private selectedBeats: Beat[] = [];

  name = new FormControl('');
  email = new FormControl('');

  constructor(
    private beatsService: BeatsService,
    private userService: UserService,
    public sanitizer: DomSanitizer,
  ) {
    this.beats$ = this.beatsService.getAll();
  }

  ngOnInit() {
  }

  signUp() {
    const user: User = {
      id: -1,
      name: this.name.value,
      email: this.email.value,
    };
    this.userService.create(user);
  }

  selectBeat(beat) {
    if (this.selectedBeats.find(b => b.id === beat.id) == null) {
      if (this.selectionsLeft > 0) {
        document.getElementById(beat.id.toString()).classList.remove('card-selectable');
        document.getElementById(beat.id.toString()).classList.add('card-selected');
        this.selectedBeats.push(beat);
        this.selectionsLeft--;
      }
    } else {
      document.getElementById(beat.id.toString()).classList.remove('card-selected');
      document.getElementById(beat.id.toString()).classList.add('card-selectable');
      this.selectedBeats = this.selectedBeats.filter(b => b.id !== beat.id);
      this.selectionsLeft++;
    }
  }

}

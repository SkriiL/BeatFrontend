import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBeatsComponent } from './admin-beats.component';

describe('AdminBeatsComponent', () => {
  let component: AdminBeatsComponent;
  let fixture: ComponentFixture<AdminBeatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBeatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

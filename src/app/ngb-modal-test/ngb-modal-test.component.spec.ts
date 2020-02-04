import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbModalTestComponent } from './ngb-modal-test.component';

describe('NgbModalTestComponent', () => {
  let component: NgbModalTestComponent;
  let fixture: ComponentFixture<NgbModalTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbModalTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbModalTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

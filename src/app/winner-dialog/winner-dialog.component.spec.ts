import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerDialogComponent } from './winner-dialog.component';

describe('WinnerDialogComponent', () => {
  let component: WinnerDialogComponent;
  let fixture: ComponentFixture<WinnerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinnerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

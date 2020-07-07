import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C3CommParentComponent } from './c3-comm-parent.component';

describe('C3CommParentComponent', () => {
  let component: C3CommParentComponent;
  let fixture: ComponentFixture<C3CommParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C3CommParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C3CommParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C3CommPartial1Component } from './c3-comm-partial1.component';

describe('C3CommPartial1Component', () => {
  let component: C3CommPartial1Component;
  let fixture: ComponentFixture<C3CommPartial1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C3CommPartial1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C3CommPartial1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

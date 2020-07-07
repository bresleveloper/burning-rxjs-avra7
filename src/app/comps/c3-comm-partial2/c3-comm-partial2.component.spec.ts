import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C3CommPartial2Component } from './c3-comm-partial2.component';

describe('C3CommPartial2Component', () => {
  let component: C3CommPartial2Component;
  let fixture: ComponentFixture<C3CommPartial2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C3CommPartial2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C3CommPartial2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

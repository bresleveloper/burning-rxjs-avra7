import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C2OperatorsComponent } from './c2-operators.component';

describe('C2OperatorsComponent', () => {
  let component: C2OperatorsComponent;
  let fixture: ComponentFixture<C2OperatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C2OperatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C2OperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

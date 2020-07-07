import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C1ExampleComponent } from './c1-example.component';

describe('C1ExampleComponent', () => {
  let component: C1ExampleComponent;
  let fixture: ComponentFixture<C1ExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C1ExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C1ExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

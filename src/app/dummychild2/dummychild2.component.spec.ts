import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dummychild2Component } from './dummychild2.component';

describe('Dummychild2Component', () => {
  let component: Dummychild2Component;
  let fixture: ComponentFixture<Dummychild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dummychild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dummychild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

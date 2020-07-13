import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldirectiveComponent } from './alldirective.component';

describe('AlldirectiveComponent', () => {
  let component: AlldirectiveComponent;
  let fixture: ComponentFixture<AlldirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlldirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlldirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Routinghelpercomp2Component } from './routinghelpercomp2.component';

describe('Routinghelpercomp2Component', () => {
  let component: Routinghelpercomp2Component;
  let fixture: ComponentFixture<Routinghelpercomp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Routinghelpercomp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Routinghelpercomp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

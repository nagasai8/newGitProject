import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutinghelpercompComponent } from './routinghelpercomp.component';

describe('RoutinghelpercompComponent', () => {
  let component: RoutinghelpercompComponent;
  let fixture: ComponentFixture<RoutinghelpercompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutinghelpercompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutinghelpercompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingcompoComponent } from './routingcompo.component';

describe('RoutingcompoComponent', () => {
  let component: RoutingcompoComponent;
  let fixture: ComponentFixture<RoutingcompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingcompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingcompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

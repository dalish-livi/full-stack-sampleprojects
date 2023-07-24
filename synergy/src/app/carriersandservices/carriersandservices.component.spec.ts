import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarriersandservicesComponent } from './carriersandservices.component';

describe('CarriersandservicesComponent', () => {
  let component: CarriersandservicesComponent;
  let fixture: ComponentFixture<CarriersandservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarriersandservicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarriersandservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

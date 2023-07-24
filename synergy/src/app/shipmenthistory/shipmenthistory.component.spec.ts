import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmenthistoryComponent } from './shipmenthistory.component';

describe('ShipmenthistoryComponent', () => {
  let component: ShipmenthistoryComponent;
  let fixture: ComponentFixture<ShipmenthistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmenthistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipmenthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

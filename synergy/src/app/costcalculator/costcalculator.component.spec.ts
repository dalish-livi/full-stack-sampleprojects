import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostcalculatorComponent } from './costcalculator.component';

describe('CostcalculatorComponent', () => {
  let component: CostcalculatorComponent;
  let fixture: ComponentFixture<CostcalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostcalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostcalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

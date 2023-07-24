import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketnewComponent } from './ticketnew.component';

describe('TicketnewComponent', () => {
  let component: TicketnewComponent;
  let fixture: ComponentFixture<TicketnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketnewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

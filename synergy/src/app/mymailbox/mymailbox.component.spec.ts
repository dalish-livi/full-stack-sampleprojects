import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MymailboxComponent } from './mymailbox.component';

describe('MymailboxComponent', () => {
  let component: MymailboxComponent;
  let fixture: ComponentFixture<MymailboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MymailboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MymailboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

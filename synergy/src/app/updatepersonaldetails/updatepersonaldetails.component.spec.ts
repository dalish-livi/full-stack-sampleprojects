import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepersonaldetailsComponent } from './updatepersonaldetails.component';

describe('UpdatepersonaldetailsComponent', () => {
  let component: UpdatepersonaldetailsComponent;
  let fixture: ComponentFixture<UpdatepersonaldetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatepersonaldetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatepersonaldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

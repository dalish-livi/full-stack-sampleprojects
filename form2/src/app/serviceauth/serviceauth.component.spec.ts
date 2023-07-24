import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceauthComponent } from './serviceauth.component';

describe('ServiceauthComponent', () => {
  let component: ServiceauthComponent;
  let fixture: ComponentFixture<ServiceauthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceauthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

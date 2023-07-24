import { TestBed } from '@angular/core/testing';

import { AuthSelectbuttonCompoundTsService } from './auth.selectbutton.compound.ts.service';

describe('AuthSelectbuttonCompoundTsService', () => {
  let service: AuthSelectbuttonCompoundTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthSelectbuttonCompoundTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

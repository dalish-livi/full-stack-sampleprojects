import { TestBed } from '@angular/core/testing';

import { AuthSelectbuttonCompounentsTsService } from './auth.selectbutton.compounents.ts.service';

describe('AuthSelectbuttonCompounentsTsService', () => {
  let service: AuthSelectbuttonCompounentsTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthSelectbuttonCompounentsTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

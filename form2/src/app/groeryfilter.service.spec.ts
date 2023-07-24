import { TestBed } from '@angular/core/testing';

import { GroeryfilterService } from './groeryfilter.service';

describe('GroeryfilterService', () => {
  let service: GroeryfilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroeryfilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

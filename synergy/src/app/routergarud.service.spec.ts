import { TestBed } from '@angular/core/testing';

import { RoutergarudService } from './routergarud.service';

describe('RoutergarudService', () => {
  let service: RoutergarudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutergarudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

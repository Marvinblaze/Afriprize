import { TestBed } from '@angular/core/testing';

import { RRaffledrawService } from './r-raffledraw.service';

describe('RRaffledrawService', () => {
  let service: RRaffledrawService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RRaffledrawService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

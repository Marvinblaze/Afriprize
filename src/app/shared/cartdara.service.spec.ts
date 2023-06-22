import { TestBed } from '@angular/core/testing';

import { CartdaraService } from './cartdara.service';

describe('CartdaraService', () => {
  let service: CartdaraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartdaraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

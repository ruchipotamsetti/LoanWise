import { TestBed } from '@angular/core/testing';

import { SaveLoanServiceService } from './save-loan-service.service';

describe('SaveLoanServiceService', () => {
  let service: SaveLoanServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveLoanServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SharedHeaderFooterService } from './shared-header-footer.service';

describe('SharedHeaderFooterService', () => {
  let service: SharedHeaderFooterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedHeaderFooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

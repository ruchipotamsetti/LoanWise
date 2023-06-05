import { TestBed } from '@angular/core/testing';

import { HomedashboardService } from './homedashboard.service';

describe('HomedashboardService', () => {
  let service: HomedashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomedashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

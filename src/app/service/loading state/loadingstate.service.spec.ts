import { TestBed } from '@angular/core/testing';

import { LoadingService } from './loadingstate.service';

describe('LoadingstateService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

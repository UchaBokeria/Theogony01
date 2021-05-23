import { TestBed } from '@angular/core/testing';

import { TestDATAService } from './test-data.service';

describe('TestDATAService', () => {
  let service: TestDATAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestDATAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { HashCheckService } from './hash-check.service';

describe('HashCheckService', () => {
  let service: HashCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HashCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

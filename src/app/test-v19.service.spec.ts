import { TestBed } from '@angular/core/testing';

import { TestV19Service } from './test-v19.service';

describe('TestV19Service', () => {
  let service: TestV19Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestV19Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ArTargetService } from './ar-target-service';

describe('ArTargetService', () => {
  let service: ArTargetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArTargetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

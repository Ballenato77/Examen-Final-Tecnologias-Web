import { TestBed } from '@angular/core/testing';

import { ApigobService } from './apigob.service';

describe('ApigobService', () => {
  let service: ApigobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApigobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

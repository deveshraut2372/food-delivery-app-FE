import { TestBed } from '@angular/core/testing';

import { RestautantServiceService } from './restautant-service.service';

describe('RestautantServiceService', () => {
  let service: RestautantServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestautantServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

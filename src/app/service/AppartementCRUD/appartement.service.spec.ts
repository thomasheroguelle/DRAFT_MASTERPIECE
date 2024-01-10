import { TestBed } from '@angular/core/testing';

import { AppartementService } from './appartement.service';

describe('MasterpieceapiService', () => {
  let service: AppartementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppartementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

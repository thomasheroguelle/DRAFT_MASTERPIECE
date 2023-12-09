import { TestBed } from '@angular/core/testing';

import { MasterpieceapiService } from './masterpieceapi.service';

describe('MasterpieceapiService', () => {
  let service: MasterpieceapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterpieceapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

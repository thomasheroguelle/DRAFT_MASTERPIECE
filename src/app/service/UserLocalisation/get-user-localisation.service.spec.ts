import { TestBed } from '@angular/core/testing';

import { GetUserLocalisationService } from './get-user-localisation.service';

describe('GetUserLocalisationService', () => {
  let service: GetUserLocalisationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUserLocalisationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

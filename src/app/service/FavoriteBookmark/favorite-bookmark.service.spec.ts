import { TestBed } from '@angular/core/testing';

import { FavoriteBookmarkService } from './favorite-bookmark.service';

describe('FavoriteBookmarkService', () => {
  let service: FavoriteBookmarkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteBookmarkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

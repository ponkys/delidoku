import { TestBed } from '@angular/core/testing';

import { GoogleTagService } from './google-tag.service';

describe('GoogleTagService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleTagService = TestBed.get(GoogleTagService);
    expect(service).toBeTruthy();
  });
});

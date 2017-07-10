import { TestBed, inject } from '@angular/core/testing';

import { VideoBackgroundService } from './video-background.service';

describe('VideoBackgroundService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoBackgroundService]
    });
  });

  it('should be created', inject([VideoBackgroundService], (service: VideoBackgroundService) => {
    expect(service).toBeTruthy();
  }));
});

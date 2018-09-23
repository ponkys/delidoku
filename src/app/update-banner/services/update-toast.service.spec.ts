import { TestBed, inject } from '@angular/core/testing';

import { UpdateToastService } from './update-toast.service';

describe('UpdateToastService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateToastService]
    });
  });

  it('should be created', inject([UpdateToastService], (service: UpdateToastService) => {
    expect(service).toBeTruthy();
  }));
});

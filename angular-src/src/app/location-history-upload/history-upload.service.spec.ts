import { TestBed } from '@angular/core/testing';

import { HistoryUploadService } from './history-upload.service';

describe('LocationHistoryUploadService', () => {
  let service: HistoryUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

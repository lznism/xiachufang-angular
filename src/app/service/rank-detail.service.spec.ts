import { TestBed, inject } from '@angular/core/testing';

import { RankDetailService } from './rank-detail.service';

describe('RankDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RankDetailService]
    });
  });

  it('should be created', inject([RankDetailService], (service: RankDetailService) => {
    expect(service).toBeTruthy();
  }));
});

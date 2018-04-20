import { TestBed, inject } from '@angular/core/testing';

import { CategoryItemService } from './category-item.service';

describe('CategoryItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryItemService]
    });
  });

  it('should be created', inject([CategoryItemService], (service: CategoryItemService) => {
    expect(service).toBeTruthy();
  }));
});

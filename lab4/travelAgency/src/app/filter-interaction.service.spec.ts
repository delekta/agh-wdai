import { TestBed } from '@angular/core/testing';

import { FilterInteractionService } from './filter-interaction.service';

describe('FilterInteractionService', () => {
  let service: FilterInteractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterInteractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

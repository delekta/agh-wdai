import { TestBed } from '@angular/core/testing';

import { TrolleyInteractionService } from './trolley-interaction.service';

describe('TrolleyInteractionService', () => {
  let service: TrolleyInteractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrolleyInteractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

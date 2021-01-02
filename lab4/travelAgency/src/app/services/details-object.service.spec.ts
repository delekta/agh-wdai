import { TestBed } from '@angular/core/testing';

import { DetailsObjectService } from './details-object.service';

describe('DetailsObjectService', () => {
  let service: DetailsObjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsObjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

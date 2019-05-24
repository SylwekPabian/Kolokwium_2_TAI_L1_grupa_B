import { TestBed } from '@angular/core/testing';

import { SPDataService } from './sp-data.service';

describe('SPDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SPDataService = TestBed.get(SPDataService);
    expect(service).toBeTruthy();
  });
});

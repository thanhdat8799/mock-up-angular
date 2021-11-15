import { TestBed } from '@angular/core/testing';

import { PagenationService } from './pagenation.service';

describe('PagenationService', () => {
  let service: PagenationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagenationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

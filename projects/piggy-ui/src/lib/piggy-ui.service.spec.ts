import { TestBed } from '@angular/core/testing';

import { PiggyUiService } from './piggy-ui.service';

describe('PiggyUiService', () => {
  let service: PiggyUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PiggyUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

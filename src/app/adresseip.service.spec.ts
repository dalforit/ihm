import { TestBed } from '@angular/core/testing';

import { AdresseipService } from './adresseip.service';

describe('AdresseipService', () => {
  let service: AdresseipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdresseipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

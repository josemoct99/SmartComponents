import { TestBed } from '@angular/core/testing';

import { PasarTextoService } from './pasar-texto.service';

describe('PasarTextoService', () => {
  let service: PasarTextoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasarTextoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

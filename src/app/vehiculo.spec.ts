import { TestBed } from '@angular/core/testing';

import { Vehiculo } from './vehiculo.service';

describe('Vehiculo', () => {
  let service: Vehiculo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Vehiculo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

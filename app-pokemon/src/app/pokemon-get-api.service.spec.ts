import { TestBed } from '@angular/core/testing';

import { PokemonGetApiService } from './pokemon-get-api.service';

describe('PokemonGetApiService', () => {
  let service: PokemonGetApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonGetApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

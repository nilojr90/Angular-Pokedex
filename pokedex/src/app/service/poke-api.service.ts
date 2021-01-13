import { Injectable } from '@angular/core';
import { ditto } from './ditto';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {


  constructor() { }

  getPokemonByName(name: string) {
    return ditto;
  }
}

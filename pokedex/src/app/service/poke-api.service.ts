import { Injectable } from '@angular/core';
import { IPokedexEntry } from '../model/pokedex';
import { IPokemon } from '../model/pokemon';
import { ditto } from './ditto';
import { pokemonList } from './pokemon-list';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {


  constructor() { }

  getPokemonByName(name: string): IPokemon {
    return ditto;
  }

  getPokemonById(id: number): IPokemon {
    return ditto;
  }

  getPokemonList(limit: number, offset: number): IPokedexEntry[] {
    return pokemonList.results;
  }
}

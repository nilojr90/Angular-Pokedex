import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { IPokedexEntry } from '../model/pokedex';
import { IPokemon } from '../model/pokemon';

import { ditto } from './ditto';
import { pokemonList } from './pokemon-list';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private url: string = "https://pokeapi.co/api/v2/";


  constructor(private http: HttpClient) { }

  getPokemonByName(name: string): Observable<IPokemon> {
    return this.http.get<IPokemon>(this.url + "pokemon/" + name);
  }

  getPokemonById(id: number): IPokemon {
    return ditto;
  }

  getPokemonList(limit: number, offset: number): IPokedexEntry[] {
    return pokemonList.results;
  }
}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPokedexEntry } from 'src/app/model/pokedex';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'dex-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  pokemonName: string = "";
  sugestions: IPokedexEntry[] = [];
  pokemonList: IPokedexEntry[] = [];

  constructor(
    private pokeApi: PokeApiService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.pokemonList = this.pokeApi.getPokemonList(100, 0);
  }

  searchHandler() {

    if (this.pokemonName.length > 0) {
      this.router.navigateByUrl(`detail/${this.pokemonName}`);
    }
  }

  autoCompleteHandler(event: KeyboardEvent) {

    if ((event.key !== "Backspace") && (this.pokemonName.length > 0)) {
      this.sugestions = this.pokemonList.filter((item) => {
        return item.name.startsWith(this.pokemonName.toLowerCase());
      });
    } else {
      this.sugestions = [];
    }
  }

}

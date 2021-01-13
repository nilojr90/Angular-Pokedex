import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { IPokemon } from 'src/app/model/pokemon';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'dex-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  name: string = "";
  pokemon!: IPokemon;

  constructor(
    private pokeApi: PokeApiService,
    private route: ActivatedRoute) {

    this.name = route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.pokemon = this.pokeApi.getPokemonByName(this.name);
  }

}

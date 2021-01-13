import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dex-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  pokemonName: String = "";

  constructor() { }

  ngOnInit(): void {
  }

  searchHandler() {
    console.log(this.pokemonName);
  }

  autoCompleteHandler() {
    console.log(this.pokemonName);
  }

}

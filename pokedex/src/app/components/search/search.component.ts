import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dex-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  pokemonName: string = "";
  sugestions: string[] = [];
  list: string[] = ["ditto", "pikachu", "ratata"];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  searchHandler() {
    console.log(this.pokemonName);

    if (this.sugestions.length > 0) {
      this.router.navigateByUrl(`detail/${this.pokemonName}`);
    }
  }

  autoCompleteHandler() {
    if (this.pokemonName.length > 0) {
      this.sugestions = this.list.filter((item) => {
        return item.startsWith(this.pokemonName);
      });
    }
  }

}

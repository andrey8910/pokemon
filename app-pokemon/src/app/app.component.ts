import { Component, OnInit } from '@angular/core';
import { PokemonGetApiService } from './pokemon-get-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PokemonGetApiService]
})
export class AppComponent implements OnInit {

  public pokemons: any;

  private urlApi = 'https://pokeapi.co/api/v2/pokemon/';

  constructor (private srv: PokemonGetApiService){}

  getPokemons():void{
    this.srv.getData(this.urlApi).subscribe(data => {
      this.pokemons = data,
      console.log(data)
    })
   
  }

  ngOnInit(): void {
    this.getPokemons()
  }
}

import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';//adds the service we made in pokemon ts

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{//runs on initialization
  myPokemon:any[]=[];
//same method from other pages
  constructor(private serv:PokemonService) {}
  ngOnInit(): void {
    this.serv.GetPokemonData().subscribe(
      (data)=>{ console.log(data);
        this.myPokemon = data.results;
       });
  }
 
}

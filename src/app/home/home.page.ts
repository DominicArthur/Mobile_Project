import { Component,OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
// Define an array to hold story data
stories:any[]=[];
  constructor(private navCtrl:NavController, private serv:PokemonService) { }

  myPokemon:any[]=[];
   // Implement the OnInit interface to define the component initialization behavior
  ngOnInit(): void {
    this.serv.GetPokemonData().subscribe(
       // Log the data received from the service to the console
      (data)=>{ console.log(data);
        this.myPokemon = data.results;// Assign the results from the data received to the myPokemon array
       });
  }
}

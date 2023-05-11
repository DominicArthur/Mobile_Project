import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs'; // Add obserable
import { NavController } from '@ionic/angular';
import { PokemonService } from '../pokemon.service';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-directors',
  templateUrl: './directors.page.html',
  styleUrls: ['./directors.page.scss'],
})
export class DirectorsPage implements OnInit {
  //Using this constructor declares an instance of HttpClient
  constructor(private hc: HttpClient,private navCtrl:NavController, private serv:PokemonService) { }
  myPokemon:any[]=[];
  ngOnInit(): void {
    this.serv.GetPokemonData().subscribe(
      (data)=>{ console.log(data);
        this.myPokemon = data.results;
       });
  }
  
  // Declare a method to open a browser with the Pokemon URL
  async openPokePage(pokename:string){
    await Browser.open({url: 'https://pokemondb.net/pokedex/'+pokename});
  }
}


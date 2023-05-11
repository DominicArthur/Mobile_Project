import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {Storage} from '@ionic/storage-angular'

@Component({
  selector: 'app-fav-poki',
  templateUrl: './fav-poki.page.html',
  styleUrls: ['./fav-poki.page.scss'],
})
export class FavPokiPage implements OnInit {
  favPokemon: string= "";
  constructor(private navCtrl:NavController, private str:Storage) { }
  
  ngOnInit() {
  }

// Declare an async function to save the favorite Pokemon
  async onSave(){
      // Create a new instance of the storage engine
    await this.str.create();
    
    // Set the favorite Pokemon in the storage engine
    await this.str.set("Pokemon",this.favPokemon);
  }
}

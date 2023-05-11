import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavPokiPageRoutingModule } from './fav-poki-routing.module';

import { FavPokiPage } from './fav-poki.page';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavPokiPageRoutingModule
  ],
  declarations: [FavPokiPage]
})
export class FavPokiPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavPokiPage } from './fav-poki.page';

const routes: Routes = [
  {
    path: '',
    component: FavPokiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavPokiPageRoutingModule {}

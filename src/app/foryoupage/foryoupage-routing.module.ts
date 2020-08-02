import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForyoupagePage } from './foryoupage.page';

const routes: Routes = [
  {
    path: '',
    component: ForyoupagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForyoupagePageRoutingModule {}

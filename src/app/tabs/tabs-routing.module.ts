import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:
      [
        {
          path: 'postpage',
          loadChildren: () => import('../postpage/postpage.module').then(m => m.PostpagePageModule)
        },

 {
          path: 'foryoupage',
          loadChildren: () => import('../foryoupage/foryoupage.module').then(m => m.ForyoupagePageModule)
        },
        

      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForyoupagePageRoutingModule } from './foryoupage-routing.module';

import { ForyoupagePage } from './foryoupage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForyoupagePageRoutingModule
  ],
  declarations: [ForyoupagePage]
})
export class ForyoupagePageModule {}

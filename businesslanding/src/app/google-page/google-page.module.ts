import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GooglePagePageRoutingModule } from './google-page-routing.module';

import { GooglePagePage } from './google-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GooglePagePageRoutingModule
  ],
  declarations: [GooglePagePage]
})
export class GooglePagePageModule {}

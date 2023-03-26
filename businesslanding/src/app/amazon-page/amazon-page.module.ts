import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmazonPagePageRoutingModule } from './amazon-page-routing.module';

import { AmazonPagePage } from './amazon-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmazonPagePageRoutingModule
  ],
  declarations: [AmazonPagePage]
})
export class AmazonPagePageModule {}

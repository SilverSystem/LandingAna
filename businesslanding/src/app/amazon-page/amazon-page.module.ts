import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TooltipModule } from 'ng2-tooltip-directive-ngfix';

import { AmazonPagePageRoutingModule } from './amazon-page-routing.module';

import { AmazonPagePage } from './amazon-page.page';
import { LandingPageModule } from '../landing/landing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmazonPagePageRoutingModule,
    LandingPageModule,
    TooltipModule
  ],
  declarations: [AmazonPagePage]
})
export class AmazonPagePageModule {}

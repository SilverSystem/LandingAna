import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TooltipModule } from 'ng2-tooltip-directive-ngfix';
import { IonicModule } from '@ionic/angular';

import { GooglePagePageRoutingModule } from './google-page-routing.module';

import { GooglePagePage } from './google-page.page';
import { LandingPageModule } from '../landing/landing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GooglePagePageRoutingModule,
    LandingPageModule,
    TooltipModule
  ],
  declarations: [GooglePagePage]
})
export class GooglePagePageModule {}

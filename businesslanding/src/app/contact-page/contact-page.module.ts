import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TooltipModule } from 'ng2-tooltip-directive-ngfix';
import { IonicModule } from '@ionic/angular';

import { ContactPagePageRoutingModule } from './contact-page-routing.module';

import { ContactPagePage } from './contact-page.page';

import { LandingPageModule } from '../landing/landing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactPagePageRoutingModule,
    LandingPageModule,
    TooltipModule
  ],
  declarations: [ContactPagePage]
})
export class ContactPagePageModule {}

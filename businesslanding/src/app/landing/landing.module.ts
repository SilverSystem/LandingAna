import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
import { IonicModule } from '@ionic/angular';

import { LandingPageRoutingModule } from './landing-routing.module';

import { LandingPage } from './landing.page';
import { HeaderComponent } from './components/header/header.component';

const LANDING_COMPONENTS = [
  LandingPage,
  HeaderComponent
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperModule,
    LandingPageRoutingModule
  ],
  declarations: [...LANDING_COMPONENTS]
})
export class LandingPageModule {}

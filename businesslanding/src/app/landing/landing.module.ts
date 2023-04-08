import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
import { IonicModule } from '@ionic/angular';
import { TooltipModule } from 'ng2-tooltip-directive-ngfix';
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
    TooltipModule,
    LandingPageRoutingModule
  ],
  exports: [...LANDING_COMPONENTS],
  declarations: [...LANDING_COMPONENTS]
})
export class LandingPageModule {}

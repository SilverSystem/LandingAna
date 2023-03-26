import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GooglePagePage } from './google-page.page';

const routes: Routes = [
  {
    path: '',
    component: GooglePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GooglePagePageRoutingModule {}

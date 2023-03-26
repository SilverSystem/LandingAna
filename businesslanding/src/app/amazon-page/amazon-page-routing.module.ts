import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmazonPagePage } from './amazon-page.page';

const routes: Routes = [
  {
    path: '',
    component: AmazonPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmazonPagePageRoutingModule {}

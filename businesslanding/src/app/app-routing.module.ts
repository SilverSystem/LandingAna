import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LandingPage } from './landing/landing.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: '**',
    component: LandingPage

  },
  {
    path: 'google-page',
    loadChildren: () => import('./google-page/google-page.module').then( m => m.GooglePagePageModule)
  },
  {
    path: 'contact-page',
    loadChildren: () => import('./contact-page/contact-page.module').then( m => m.ContactPagePageModule)
  },
  {
    path: 'amazon-page',
    loadChildren: () => import('./amazon-page/amazon-page.module').then( m => m.AmazonPagePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

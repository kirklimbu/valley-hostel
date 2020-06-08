// Angular
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { GallaryComponent } from './pages/gallary/gallary.component';
//Project
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
   {
    path: 'services',
    component: ServicesComponent
  },
   {
    path: 'gallery',
    component: GallaryComponent
  },{
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

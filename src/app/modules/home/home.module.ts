import { AboutComponent } from './pages/about/about.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { GallaryComponent } from './pages/gallary/gallary.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MapComponent } from './pages/map/pages/map.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
// Third-party
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServicesComponent } from './pages/services/services.component';

@NgModule({
  declarations: [HomeComponent, NavBarComponent, ServicesComponent, MapComponent, GallaryComponent, AboutComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule


  ]
})
export class HomeModule { }

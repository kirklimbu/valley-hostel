import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
// Third-party
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServicesComponent } from './pages/services/services.component';

@NgModule({
  declarations: [HomeComponent, NavBarComponent, ServicesComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule,
    FontAwesomeModule,


  ]
})
export class HomeModule { }

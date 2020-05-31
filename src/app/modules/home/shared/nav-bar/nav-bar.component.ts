import { Component, OnInit } from '@angular/core';
import { faBars, faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  // props
  active = 1;
  faCoffee= faCoffee;
  fabars=faBars;
  constructor() { }

  ngOnInit(): void {
  }

}

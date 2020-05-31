import { Component, OnInit } from '@angular/core';
import { faAtom, faFilm } from '@fortawesome/free-solid-svg-icons';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Props
  faAtom = faAtom;
  isAnimated='';
  filmIcon = faFilm;

  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/1950/600`);
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 3000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
  ngOnInit(): void {
  }
}

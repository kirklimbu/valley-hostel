import { AfterViewInit, Component, OnInit } from '@angular/core';

import { Geo } from '../model/geo.model';
import Map from 'ol/Map';

// Third-party



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit, OnInit {

  latitude: number = 28.3949;
  longitude: number = 84.1240;
  ol: any;
  map: Map;

  geo: Geo;
  geolocation;

  constructor() {
  }

  ngOnInit() {
    this.geo = new Geo();
    this.geolocation = navigator.geolocation;
  }

  ngAfterViewInit() {
    this.geo.map.updateSize();
  }

  locate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.geo.setView(10, [position.coords.longitude, position.coords.latitude]);
      });
    }
  }
}


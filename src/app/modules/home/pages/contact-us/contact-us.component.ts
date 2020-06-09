import { Component, OnInit } from '@angular/core';
// import { facebook } from '@fortawesome/free-brands-svg-icons';
import { faAtom, faBook, faFilm, faMap } from '@fortawesome/free-solid-svg-icons';

import { faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  facebook=faFacebook

  constructor() { }

  ngOnInit(): void {
  }

}

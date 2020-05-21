import { Component, OnInit } from '@angular/core';

import { faFacebook, faLinkedin, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  icon1 = faFacebook;
  icon2 = faLinkedin;
  icon3 = faYoutube;
  icon4 = faGithub;
  constructor() { }

  ngOnInit(): void {
  }

}

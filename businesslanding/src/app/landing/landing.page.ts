import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  img = {
    'background-color': '#E6D5B8',
    'padding-top':'20px',
    'padding-bottom': '20px',
  };
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  img = {
    'background-image': 'url("../../assets/homepage-header.jpg")',
  };
  constructor() { }

  ngOnInit() {
  }

}

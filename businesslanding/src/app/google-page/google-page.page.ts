import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-page',
  templateUrl: './google-page.page.html',
  styleUrls: ['./google-page.page.scss'],
})
export class GooglePagePage implements OnInit {
  imageMoney='../../assets/dinero.jpg'
  actions: Array<string> = [
    '• Search Ads',
    '• Remarketing',
    '• Local Service Ads',
    '• Shopping Ads',
    '• Display Ads',
    '• Dynamic Campaigns',
    '• Video Ads',
    '• Mobile App Ads',
    '• Smart Campaigns'
  ]
  constructor() { }

  ngOnInit() {
  }

}

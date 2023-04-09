import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amazon-page',
  templateUrl: './amazon-page.page.html',
  styleUrls: ['./amazon-page.page.scss'],
})
export class AmazonPagePage implements OnInit {
  imageMoney = '../../assets/dinero.jpg'
  imageGraphic = '../../assets/grafico.jpg'
  actions: Array<string> = [
    '• Sponsored Products',
    '• Sponsored Brands',
    '• Sponsored Display',
    '• Stores',
    '• Audio ads',
    '• Video ads',
    '• Custom advertising',
    '• Amazon DSP',
    '• Amazon Attribution'
  ]
  constructor() { }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  quantity: number = 1;
  Likes = [
  {src: "https://smartdata.tonytemplates.com/electrician-v2/wp-content/uploads/2013/06/prod7-375x491.jpg", title:"Intermatic Outdoor Portable Timer", price:"21.99"},
  {src: "https://smartdata.tonytemplates.com/electrician-v2/wp-content/uploads/2013/06/prod9-375x491.jpg", title:"General Purpose Indoor Extension Cord in Various Sizes", price:"34.99"},
  {src: "https://smartdata.tonytemplates.com/electrician-v2/wp-content/uploads/2013/06/prod6-375x491.jpg", title:"Rotary Fan Speed Control", price:"27.99"},
  {src: "https://smartdata.tonytemplates.com/electrician-v2/wp-content/uploads/2013/06/prod3-375x491.jpg", title:"Eveready® AAA Super Battery", price:"28.16"},
];
}

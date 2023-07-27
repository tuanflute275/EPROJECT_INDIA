import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit{
  avatar = '../../../assets/img/avatar_admin.jpg';
  favorites = [
    {image:"https://hecico.com.vn/wp-content/uploads/2021/12/bong-bulb-tru-than-nhom-shining-life-bn40w-300x300.jpg", name:"light bulb", price: 27},
    {image:"https://hecico.com.vn/wp-content/uploads/2021/09/aptomat-schneider-a9f94316-300x300.jpg", name:"light bulb", price: 30},
    {image:"https://hecico.com.vn/wp-content/uploads/2023/01/ong-luon-day-dien-ruot-ga-sino-sp9025cm-300x300.jpg", name:"light bulb", price: 50},
    {image:"https://hecico.com.vn/wp-content/uploads/2022/10/hop-noi-day-mpe-a240-32-4-300x300.jpg", name:"light bulb", price: 25},
  ]

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    //ngx-spinner
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }
}

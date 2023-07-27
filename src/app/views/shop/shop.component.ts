import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit{
  check: any;
  page: number = 1;
  searchText: string = '';
  userFilter: any = { name: '' };
  productFormSearch: any;
  products = [
    {id: 1, image:"https://hecico.com.vn/wp-content/uploads/2022/08/cau-dao-dong-ro-mpe-rcbo-30-225-300x300.jpg", name: "Aptomat Compact NSXm 4P 32A ", price: 27},
    {id: 2, image:"https://hecico.com.vn/wp-content/uploads/2022/08/cau-dao-dong-ro-mpe-rcbo-15-216-300x300.jpg", name: "Aptomat Compact NSXm 4P 32A ", price: 27},
    {id: 3, image:"https://hecico.com.vn/wp-content/uploads/2021/12/cau-dao-aptomat-rcbo-ls-rkp-1pn-20a-30ma-300x300.jpg", name: "Aptomat Compact NSXm 4P 32A ", price: 27},
    {id: 4, image:"https://hecico.com.vn/wp-content/uploads/2021/10/aptomat-schneider-lv426469-300x300.jpg", name: "Aptomat Compact NSXm 4P 32A ", price: 27},
    {id: 5, image:"https://hecico.com.vn/wp-content/uploads/2021/10/aptomat-schneider-lv426563-300x300.jpg", name: "Aptomat Compact NSXm 4P 32A ", price: 27},

    {id: 6, image:"https://hecico.com.vn/wp-content/uploads/2023/06/nanoco-nwf1611be-300x300.jpg", name: "Ching Hai wall fan without W615B2", price: 30},
    {id: 7, image:"https://hecico.com.vn/wp-content/uploads/2023/06/nanoco-nwf1612rc-g-300x300.jpg", name: "Ching Hai wall fan without W615B2", price: 30},
    {id: 8, image:"https://hecico.com.vn/wp-content/uploads/2023/06/quat-tich-dien-yh-128-300x300.jpg", name: "Ching Hai wall fan without W615B2", price: 30},
    {id: 9, image:"https://hecico.com.vn/wp-content/uploads/2023/04/quat-treo-cong-nghiep-ching-hai-w18cd-300x300.jpg", name: "Ching Hai wall fan without W615B2", price: 30},
    {id: 10, image:"https://hecico.com.vn/wp-content/uploads/2023/04/quat-dien-co-91-qd-cn450f-300x300.jpg", name: "Ching Hai wall fan without W615B2", price: 30},

    {id: 11, image:"https://hecico.com.vn/wp-content/uploads/2023/04/cadigold-cv-1x16-1-300x300.jpg", name: "Cadigold CXV 4-core armored 0.6/1kv", price: 69},
    {id: 12, image:"https://hecico.com.vn/wp-content/uploads/2023/02/day-dien-don-tran-phu-vcm-1x1-5-300x300.jpg", name: "Cadigold CXV 4-core armored 0.6/1kv", price: 69},
    {id: 13, image:"https://hecico.com.vn/wp-content/uploads/2022/03/cvv-s-3x0-300x300.jpg", name: "Cadigold CXV 4-core armored 0.6/1kv", price: 69},
    {id: 14, image:"https://hecico.com.vn/wp-content/uploads/2021/06/day-dien-cv-100-do-cadivi-300x300.jpg", name: "Cadigold CXV 4-core armored 0.6/1kv", price: 69},
    {id: 15, image:"https://hecico.com.vn/wp-content/uploads/2022/02/day-cap-dien-300x250.jpg", name: "Cadigold CXV 4-core armored 0.6/1kv", price: 69},


    {id: 16, image:"https://hecico.com.vn/wp-content/uploads/2023/02/den-led-tube-thuy-tinh-mpe-gt3-120t-300x300.jpg", name: "MPE GT2-120T 20W white glass led light", price: 27},
    {id: 17, image:"https://hecico.com.vn/wp-content/uploads/2023/02/den-led-tube-thuy-tinh-mpe-gt8-120t-300x300.jpg", name: "MPE GT2-120T 20W white glass led light", price: 27},
    {id: 18, image:"https://hecico.com.vn/wp-content/uploads/2023/01/den-led-downlight-am-tran-paragon-prdoo157l12-300x300.jpeg", name: "MPE GT2-120T 20W white glass led light", price: 27},
    {id: 19, image:"https://hecico.com.vn/wp-content/uploads/2023/01/den-downligh-am-tran-vien-bac-paragon-f110-90-9cct-300x300.jpg", name: "MPE GT2-120T 20W white glass led light", price: 27},
    {id: 20, image:"https://hecico.com.vn/wp-content/uploads/2023/02/den-led-tube-thuy-tinh-mpe-gt2-120t-300x300.jpg", name: "MPE GT2-120T 20W white glass led light", price: 27},
    {id: 21, image:"https://hecico.com.vn/wp-content/uploads/2023/02/den-led-tube-thuy-tinh-mpe-gt2-120t-300x300.jpg", name: "MPE GT2-120T 20W white glass led light", price: 27},
  ];

  brands = [
    {name: "Altek Kabel"},
    {name: "Anfaco"},
    {name: "ASIA"},
    {name: "Chefman"},
    {name: "Hichiko"},
    {name: "Ledvance"},
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

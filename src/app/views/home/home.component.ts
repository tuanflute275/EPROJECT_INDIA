import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  categories: any = [
    {image:"https://hecico.com.vn/wp-content/uploads/2020/10/den-led-panel-op-tran-noi-vien-den-3-mau-srplb-18w-300x300.jpg", name:"lamp"},
    {image:"https://hecico.com.vn/wp-content/uploads/2021/01/quat-dien-img-300x300.jpg", name:"the fan"},
    {image:"https://hecico.com.vn/wp-content/uploads/2022/08/cau-dao-dong-ro-rcbo-30-216-300x300.jpg", name:"Aptomat"},
    {image:"https://hecico.com.vn/wp-content/uploads/2021/01/day-dien-img-300x300.jpg", name:"Wire"},
    {image:"https://hecico.com.vn/wp-content/uploads/2022/10/phich-cam-loai-di-dong-co-kep-giu-day-mpe-mpn-013-300x300.jpg", name:"equipment"},
    {image:"https://hecico.com.vn/wp-content/uploads/2021/05/ss20c2-1-300x300.jpg", name:"switch"},
  ];

  devices = [
    {image: "https://hecico.com.vn/wp-content/uploads/2022/07/cau-dao-tu-dong-mpe-mp6-c125-300x300.jpg", name: "Automatic circuit breaker MCB 3P 32A 6KA MPE code MP6-C332", price: 248},
    {image: "https://hecico.com.vn/wp-content/uploads/2022/08/cau-dao-dong-ro-mpe-mel-30_4-300x300.jpg", name: "Automatic circuit breaker MCB 3P 32A 6KA MPE code MP6-C332", price: 248},
    {image: "https://hecico.com.vn/wp-content/uploads/2022/10/phich-cam-loai-di-dong-co-kep-giu-day-mpe-mpn-013-300x300.jpg", name: "Automatic circuit breaker MCB 3P 32A 6KA MPE code MP6-C332", price: 248},
    {image: "https://hecico.com.vn/wp-content/uploads/2022/07/cau-dao-tu-dong-mpe-mp6-c263-300x300.jpg", name: "Automatic circuit breaker MCB 3P 32A 6KA MPE code MP6-C332", price: 248},
    {image: "https://hecico.com.vn/wp-content/uploads/2022/07/cau-dao-tu-dong-mpe-mp6-c325-300x300.jpg", name: "Automatic circuit breaker MCB 3P 32A 6KA MPE code MP6-C332", price: 248},
    {image: "https://hecico.com.vn/wp-content/uploads/2023/04/schneider-lc1e0910m5-300x300.jpg", name: "Automatic circuit breaker MCB 3P 32A 6KA MPE code MP6-C332", price: 248},
  ];
  aptomats = [
    {image: "https://hecico.com.vn/wp-content/uploads/2021/10/aptomat-schneider-lv510952-300x300.jpg", name: "Aptomat Easy CVS100 4P 25A 25kA 380V Schneider LV510952", price: 275},
    {image: "https://hecico.com.vn/wp-content/uploads/2021/08/pic2-300x300.jpg", name: "Aptomat Easy CVS100 4P 25A 25kA 380V Schneider LV510952", price: 275},
    {image: "https://hecico.com.vn/wp-content/uploads/2022/08/cau-dao-dong-ro-rcbo-30-216-300x300.jpg", name: "Aptomat Easy CVS100 4P 25A 25kA 380V Schneider LV510952", price: 275},
    {image: "https://hecico.com.vn/wp-content/uploads/2021/10/aptomat-schneider-lv510955-300x300.jpg", name: "Aptomat Easy CVS100 4P 25A 25kA 380V Schneider LV510952", price: 275},
    {image: "https://hecico.com.vn/wp-content/uploads/2021/09/aptomat-mitsubishi-nf125-sv-3p-50a-300x300.jpg", name: "Aptomat Easy CVS100 4P 25A 25kA 380V Schneider LV510952", price: 275},
    {image: "https://hecico.com.vn/wp-content/uploads/2021/09/aptomat-schneider-ezc100f3075-300x300.jpg", name: "Aptomat Easy CVS100 4P 25A 25kA 380V Schneider LV510952", price: 275},
  ];
  lamp = [
    {image: "https://hecico.com.vn/wp-content/uploads/2021/11/den-op-tran-22w-afc-555-300x300.jpg", name: "Downlight âm trần Anfaco AFC 417 9W 1C", price: 248},
    {image: "https://hecico.com.vn/wp-content/uploads/2021/01/den-led-downlight-day-doi-mau-14w-ndl14c-goc-chieu-90-do-sao-chep-300x300.png", name: "Downlight âm trần Anfaco AFC 417 9W 1C", price: 248},
    {image: "https://hecico.com.vn/wp-content/uploads/2022/09/den-downlight-vuong-noi-tran-vien-mpe-ssdl-16-3c-300x300.jpg", name: "Downlight âm trần Anfaco AFC 417 9W 1C", price: 248},
    {image: "https://hecico.com.vn/wp-content/uploads/2022/01/den-downlight-am-tran-anfaco-afc-417-9w-1c-300x300.jpg", name: "Downlight âm trần Anfaco AFC 417 9W 1C", price: 248},
    {image: "https://hecico.com.vn/wp-content/uploads/2022/11/den-led-op-tran-noi-tron-panasonic-nnnc7633188-300x300.jpg", name: "Downlight âm trần Anfaco AFC 417 9W 1C", price: 248},
    {image: "https://hecico.com.vn/wp-content/uploads/2022/09/den-downlight-vuong-noi-tran-vien-mpe-ssdl-16-3c-300x300.jpg", name: "Downlight âm trần Anfaco AFC 417 9W 1C", price: 248},
  ];
  wires = [
    {image: "https://hecico.com.vn/wp-content/uploads/2021/06/day-dien-300x300.png", name: "General Purpose Indoor Extension Cord in Various Sizes", price: 159},
    {image: "https://hecico.com.vn/wp-content/uploads/2021/07/cadivi-cxv-3x1-300x300.jpg", name: "General Purpose Indoor Extension Cord in Various Sizes", price: 159},
    {image: "https://hecico.com.vn/wp-content/uploads/2021/05/data-1x-300x300.png", name: "General Purpose Indoor Extension Cord in Various Sizes", price: 159},
    {image: "https://hecico.com.vn/wp-content/uploads/2021/05/cxv-4x-300x300.png", name: "General Purpose Indoor Extension Cord in Various Sizes", price: 159},
    {image: "https://hecico.com.vn/wp-content/uploads/2022/07/cap-tivi-mpe-rg6-112-300x300.jpg", name: "General Purpose Indoor Extension Cord in Various Sizes", price: 159},
    {image: "https://hecico.com.vn/wp-content/uploads/2021/06/day-dien-cv-100-do-cadivi-300x300.jpg", name: "General Purpose Indoor Extension Cord in Various Sizes", price: 159},
  ];
  theFans = [
    {image: "https://hecico.com.vn/wp-content/uploads/2021/05/quat-thong-gio-gale-svf-2-300x300.jpg", name: "Cầu dao tự động MCB 3P 32A 6KA MPE có mã MP6-C332", price: 248},
    {image: "https://hecico.com.vn/wp-content/uploads/2021/01/f-56mzg-gos-300x300.jpg", name: "Cầu dao tự động MCB 3P 32A 6KA MPE có mã MP6-C332", price: 248},
    {image: "https://hecico.com.vn/wp-content/uploads/2023/04/quat-dung-dien-co-91-qd-cn450p5-300x300.jpg", name: "Cầu dao tự động MCB 3P 32A 6KA MPE có mã MP6-C332", price: 248},
    {image: "https://hecico.com.vn/wp-content/uploads/2020/12/model-d450-5c-300x300.jpg", name: "Cầu dao tự động MCB 3P 32A 6KA MPE có mã MP6-C332", price: 248},
    {image: "https://hecico.com.vn/wp-content/uploads/2021/04/dt400-300x300.jpg", name: "Cầu dao tự động MCB 3P 32A 6KA MPE có mã MP6-C332", price: 248},
    {image: "https://hecico.com.vn/wp-content/uploads/2023/06/nanoco-nwf1612rc-be-300x300.jpg", name: "Cầu dao tự động MCB 3P 32A 6KA MPE có mã MP6-C332", price: 248},
  ];
  switchs = [
    {image: "https://hecico.com.vn/wp-content/uploads/2022/10/cong-tac-2-chieu-co-lon-mpe-a7m-2l-300x300.jpg", name: "Combination Toggle Switch", price: 200},
    {image: "https://hecico.com.vn/wp-content/uploads/2021/05/ss20c2-1-300x300.jpg", name: "Combination Toggle Switch", price: 200},
    {image: "https://hecico.com.vn/wp-content/uploads/2021/05/ss69b-1-300x300.png", name: "Combination Toggle Switch", price: 200},
    {image: "https://hecico.com.vn/wp-content/uploads/2023/03/cong-tac-kawasan-rf02pn-300x300.jpg", name: "Combination Toggle Switch", price: 200},
    {image: "https://hecico.com.vn/wp-content/uploads/2022/07/mat-3-cong-tac-1-chieu-16a-250v-mpe-s703-300x300.jpg", name: "Combination Toggle Switch", price: 200},
    {image: "https://hecico.com.vn/wp-content/uploads/2021/05/ss20c2-1-300x300.jpg", name: "Combination Toggle Switch", price: 200},
  ];
  blogs = [
    {image: "https://hecico.com.vn/wp-content/uploads/2023/06/vua-dung-vua-sac-quat-tich-dien-co-sao-khong.jpg", name: 'Giải đáp vừa dùng vừa sạc quạt tích điện có sao không?'},
    {image: "https://hecico.com.vn/wp-content/uploads/2023/07/sua-quat-tich-dien-bi-hong-tai-nha.jpg", name: 'Hướng dẫn cách sửa quạt tích điện bị hỏng đơn giản tại nhà'},
    {image: "https://hecico.com.vn/wp-content/uploads/2023/06/cach-dung-quat-tich-dien-duoc-lau.jpg", name: 'Giải đáp từ A-Z cách dùng quạt tích điện được lâu'},
  ];

  constructor(private app: AppService, private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    //ngx-spinner
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);

    this.app.getProduct().subscribe(response => {
      console.log('Home component response:', response);
    })
  }
}


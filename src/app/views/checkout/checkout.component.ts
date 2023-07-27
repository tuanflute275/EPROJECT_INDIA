import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  carts: any = [
    {image: "https://smartdata.tonytemplates.com/electrician-v2/wp-content/uploads/2013/06/prod1.jpg", name:"Woods WiOn 15 amps Receptacle and USB Charger", price:"27", quantity:"2"},
    {image: "https://smartdata.tonytemplates.com/electrician-v2/wp-content/uploads/2013/06/prod7-375x491.jpg", name:"Intermatic Outdoor Portable Timer", price:"21.99", quantity:"3"},
  ];
  // totalQuantity: number = this.userService.getCartTotalQuantity()
  // totalPrice: number = this.userService.getCartTotalPrice()

  logo = '../../../assets/images/logo.jpg';
  avatar = '../../../assets/img/avatars/avatar_admin.jpg'
  home1 = '../../../assets/images/home1.jpg'
  home2 = '../../../assets/images/home2.jpg'
  home3 = '../../../assets/images/home3.jpg'

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    //ngx-spinner
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);

    // this.carts = this.userService.getCarts()
    console.log(this.carts);
  }
  subtotal(item: any) {
    return item.quantity * item.price
  }
  pay() {
    Swal.fire(
      '',
      'successfully purchase !',
      'success'
    )
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  heart: any = 1;
  logo = '../../../assets/img/logo.jpg';

  constructor() {}


  search() {
    // this.toastr.error('developing !!');
  }
  upload() {
    // this.toastr.error('developing !!');
  }
  logout() {
    // localStorage.removeItem("token");
    // this.toastr.success('Logout Successfully !')
    // this.router.navigate(['/login'])
  }
}

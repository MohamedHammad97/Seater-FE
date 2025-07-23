import { Component, HostListener } from '@angular/core';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLoggedIn: boolean = false;
  isScrolled = false;


  constructor(private _authService: AuthService) {

    this._authService.userData.subscribe((res) => {
      if (this._authService.userData.getValue()) {
        this.isLoggedIn = true
      } else {
        this.isLoggedIn = false
      }
    })

  }

  logOut() {
    this._authService.logOut()
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollTop > 50;
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-commerceApp';

  constructor(public router: Router) { }
  hideNavbar(): boolean {
    return !['/signIn', '/signUp','/forgotPassword'].includes(this.router.url);
  }
}

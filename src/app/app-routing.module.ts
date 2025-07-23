import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { authGuard } from './auth.guard';
import { OrdersComponent } from './orders/orders.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { SchoolsComponent } from './schools/schools.component';
import { BusnissesComponent } from './busnisses/busnisses.component';
import { BussinessBookingComponent } from './bussiness-booking/bussiness-booking.component';
import { ServicesBookingComponent } from './services-booking/services-booking.component';
import { SpecialRequestComponent } from './special-request/special-request.component';
import { TestComponent } from './test/test.component';
import { SchoolBookingComponent } from './school-booking/school-booking.component';
import { CommingsoonComponent } from './commingsoon/commingsoon.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent, title: "Home" },
  { path: "service", component: ServicesComponent, title: "service" },
  { path: "contact", component: ContactComponent, title: "Contact" },
  { path: "about", component: AboutComponent, title: "About" },
  { path: "school",  component: SchoolsComponent, title: "school" },
  { path: "test",  component: TestComponent, title: "test" },
  { path: "bussnisses", canActivate: [authGuard], component: BusnissesComponent, title: "Busnisses" },
  { path: "specialRequest", canActivate: [authGuard], component: SpecialRequestComponent, title: "specialRequest" },
  { path: "servicesBooking", component: ServicesBookingComponent, title: "servicesBooking" },
  { path: "bussiness-booking", canActivate: [authGuard], component: BussinessBookingComponent, title: "Bussiness-booking" },
  { path: "school-booking", component: SchoolBookingComponent, title: "School-booking" },
  { path: "commingSoon", canActivate: [authGuard], component: CommingsoonComponent, title: "Comming-Soon" },
  // { path: "about", canActivate: [authGuard], loadComponent: () => import('./about/about.component').then(c => c.AboutComponent), title: "About" },
  // { path: "service", canActivate: [authGuard], loadComponent: () => import('./services/services.component').then(c => c.ServicesComponent), title: "services" },
  // { path: "contact", canActivate: [authGuard], loadComponent: () => import('./contact/contact.component').then(c => c.ContactComponent), title: "Contact" },
  // { path: "productDetails/:id", canActivate: [authGuard], component: ProductDeatilsComponent, title: "product Details" },
  // { path: "checkout/:cartId", component: CheckoutComponent, title: "payment" },
  // { path: "allorders", component: OrdersComponent },
  // { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },

  { path: "signIn", component: SigninComponent, title: "SignIn" },
  { path: "signUp", component: SignUpComponent, title: "SignUp" },
  { path: "forgotPassword", loadComponent: () => import('./forgotpassword/forgotpassword.component').then(c => c.ForgotpasswordComponent), title: "forgotpassword" },

  { path: "**", component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

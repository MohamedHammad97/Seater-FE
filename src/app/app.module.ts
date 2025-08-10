import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { DropdownModule } from 'primeng/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SigninComponent } from './signin/signin.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SearchPipe } from './search.pipe';
import { OrdersComponent } from './orders/orders.component';
import { HttpInterceptorInterceptor } from './http-interceptor.interceptor';
import { LoaderComponent } from './loader/loader.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { SchoolsComponent } from './schools/schools.component';
import { BusnissesComponent } from './busnisses/busnisses.component';
import { SpecialRequestComponent } from './special-request/special-request.component';
import { TrackingComponent } from './tracking/tracking.component';
import { BussinessBookingComponent } from './bussiness-booking/bussiness-booking.component';
import { CalendarModule } from 'primeng/calendar';
import { ServicesBookingComponent } from './services-booking/services-booking.component';
import { TestComponent } from './test/test.component';
import { SchoolBookingComponent } from './school-booking/school-booking.component';
import { CommingsoonComponent } from './commingsoon/commingsoon.component';
import { AboutHomeComponent } from './about-home/about-home.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    SignUpComponent,
    SigninComponent,
    NotfoundComponent,
    SearchPipe,
    OrdersComponent,
    LoaderComponent,
    CheckoutComponent,
    ContactComponent,
    ServicesComponent,
    SchoolsComponent,
    BusnissesComponent,
    SpecialRequestComponent,
    TrackingComponent,
    BussinessBookingComponent,
    ServicesBookingComponent,
    TestComponent,
    SchoolBookingComponent,
    CommingsoonComponent,
    AboutHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    DropdownModule,
    CalendarModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

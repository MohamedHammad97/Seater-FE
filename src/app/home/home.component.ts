import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import Typed from 'typed.js';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnDestroy {

  typed!: Typed;
  
 @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;
   ngAfterViewInit() {
      const options = {
        strings: [' Studens', ' Corperate', ' Family'],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
      };
  
      this.typed = new Typed(this.typedElement.nativeElement, options);
    }
  
    ngOnDestroy(): void {
      this.typed.destroy();
    }
  
  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: true,
  //   touchDrag: false,
  //   pullDrag: false,
  //   dots: false,
  //   margin: 20,
  //   navSpeed: 700,
  //   navText: ['', ''],
  //   responsive: {
  //     0: {
  //       items: 2
  //     }
  //   },
  //   nav: true
  // }

  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    nav: false,
    autoplayTimeout:1500,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
  }
}

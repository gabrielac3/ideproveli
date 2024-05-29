import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  isMobile: boolean = false;
  isTablet: boolean = false;
  isLaptop: boolean = false;
  isHandset: boolean = false;

  sidenavMovil: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const mobile = screenWidth < 768;
    const tablet = screenWidth >= 768 && screenWidth < 992;
    const laptop = screenWidth >= 992;

    if (mobile) {
      this.isMobile = true;
    } else if (tablet) {
      this.isTablet = true;
    } else {
      this.isLaptop = true;
    }
  }

  openSidenavMobil(){
    this.sidenavMovil = true;
  }

  showMenu(){
    this.isHandset = !this.isHandset;
  }

}

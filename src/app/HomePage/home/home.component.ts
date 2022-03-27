import { Component, OnInit } from '@angular/core';
import { LinkService } from 'src/app/services/links/link.service';

import {
  Location
} from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
links: any;
  load: boolean = false;
  domainAndApp: any;
  screenHeight: any;
  screenWidth: any;
   constructor(private linkService: LinkService, private loc: Location) {}
  async getData() {
    this.links = await this.linkService.getLinks();
    this.load = true;
    const angularRoute = this.loc.path();
    const url = window.location.href;
    this.domainAndApp = url.replace(angularRoute, '');
  }
  ngOnInit() {
    this.getData();
    this.toggleNavbar();
  }
  toggleNavbar() {
    const button = document.querySelector('#menu-button');
    const menu = document.querySelector('#menu');
    if (button != null && menu != null) {
      button.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
    }
    
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from './app-routing.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public topNavLinks: Array<{
      path: string,
      name: string
    }> = [];
    // @ViewChild(IgxNavigationDrawerComponent) public navdrawer: IgxNavigationDrawerComponent;

    constructor(private router: Router) {
      for (const route of routes) {
        if (route.path && route.data && route.path.indexOf('*') === -1) {
          this.topNavLinks.push({
            name: route.data.text,
            path: '/' + route.path
          });
        }
      }
    }
  }

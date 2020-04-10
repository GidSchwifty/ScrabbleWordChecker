import { Component, OnInit } from '@angular/core';
import {
  CHECK_ROUTE,
  FINDER_ROUTE,
  ABOUT_ROUTE,
  DONATE_ROUTE,
  MENU_ROUTE,
  CHECK_TITLE,
  FINDER_TITLE,
  ABOUT_TITLE,
  DONATE_TITLE,
  MENU_TITLE,
  MENU_NOTE
} from 'src/app/core/strings';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.page.html',
  styleUrls: ['./main-menu.page.scss'],
})
export class MainMenuPage implements OnInit {
  public selectedIndex = 0;
  title = MENU_TITLE;
  note = MENU_NOTE;

  public appPages = [
    {
      title: CHECK_TITLE,
      url: `/${MENU_ROUTE}/${CHECK_ROUTE}`,
      icon: 'checkmark-circle'
    }, {
      title: FINDER_TITLE,
      url: `/${MENU_ROUTE}/${FINDER_ROUTE}`,
      icon: 'search'
    }, {
      title: ABOUT_TITLE,
      url: `/${MENU_ROUTE}/${ABOUT_ROUTE}`,
      icon: 'information-circle'
    }, {
      title: DONATE_TITLE,
      url: `/${MENU_ROUTE}/${DONATE_ROUTE}`,
      icon: 'happy'
    }
  ];

  constructor() { }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
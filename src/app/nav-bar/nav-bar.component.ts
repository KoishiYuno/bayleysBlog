import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

import { LoginPathService } from '../loginPath.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  access_token;
  path = 'login';

  constructor(
    private loginService: LoginService,
    private data: LoginPathService
  ) {}

  async ngOnInit(): Promise<void> {
    (await this.loginService.LoginByAccessToken()).subscribe((arg) => {
      localStorage.clear();
      if (arg) {
        this.access_token = { access_token: arg };
        localStorage.setItem('access_token', JSON.stringify(this.access_token));
        this.data.changeMessage('admin');
        this.data.currentMessage.subscribe((path) => (this.path = path));
        console.log(this.path);
      } else {
        this.data.changeMessage('login');
        this.data.currentMessage.subscribe((path) => (this.path = path));
      }
    });
  }

  checkPath() {
    this.data.currentMessage.subscribe((path) => (this.path = path));
  }
}

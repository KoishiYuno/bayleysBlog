import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { LoginPathService } from '../loginPath.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router,
    private data: LoginPathService
  ) {}

  async ngOnInit(): Promise<void> {
    this.data.currentMessage.subscribe((path) => console.log(path));
    (await this.loginService.LoginByAccessToken()).subscribe((arg) => {
      localStorage.clear();
      if (arg) {
        var access_token = { access_token: arg };
        localStorage.setItem('access_token', JSON.stringify(access_token));
        this.router.navigate(['admin']);
        this.data.changeMessage('admin');
      }
    });
  }

  async login() {
    console.log(this.password);
    (await this.loginService.getUsers(this.username, this.password)).subscribe(
      (arg) => {
        localStorage.clear();
        if (arg) {
          var access_token = { access_token: arg };
          localStorage.setItem('access_token', JSON.stringify(access_token));
          this.router.navigate(['admin']);

          this.data.changeMessage('admin');
        }
      }
    );
  }
}

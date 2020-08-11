import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from './Article';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  async getUsers(
    username: string,
    password: string
  ): Promise<Observable<string>> {
    const markup = `{
        "name":"benwei lu",
        "username": "meiyoukaigua",
        "password": "qwertyuiop",
        "email": "gzdhy9905@gmail.com"
    }`;

    const data = JSON.parse(markup);
    console.log(data);
    const response = await fetch(`http://localhost:80/Blog_API/v2/login`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
    });
    const json = await response.json();
    console.log(json);
    const message = json.data.access_token;

    return of(message);
  }

  async LoginByAccessToken(): Promise<Observable<string>> {
    const access_token = localStorage.getItem('access_token');
    const access_token1 =
      '{"access_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE1OTY1NTYyNDYsIm5iZiI6MTU5NjU1NjI1NiwiZXhwIjoxNTk2NTY3MDQ2LCJhdWQiOiJ1c2VycyIsImRhdGEiOnsiaWQiOjEsInVzZXJuYW1lIjoibWVpeW91a2FpZ3VhIiwiZW1haWwiOiJnemRoeTk5MDVAZ21haWwuY29tIn19.LmnYHCVzZQg_SaKQ_Z9Lc18ktNnWnKOcyLcmcRdYDC8"}';

    const response = await fetch(`http://localhost:80/Blog_API/v2/login`, {
      method: 'PATCH',
      body: access_token,
      headers: {
        'content-type': 'application/json',
      },
    });

    console.log(2);
    const json = await response.json();
    console.log(json);
    const message = json.data.access_token;

    return of(message);
  }
}

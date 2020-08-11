import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from './Article';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor() {}

  async getAllArticles(): Promise<Observable<Article[]>> {
    const response = await fetch(`http://localhost:80/Blog_API/v2/blog`, {});
    const json = await response.json();

    const articleList: Article[] = json.data.data;
    console.log(json);
    return of(articleList);
  }

  async deleteArticles(id: number): Promise<Observable<Article>> {
    const response = await fetch(`http://localhost:80/Blog_API/v2/blog/${id}`, {
      method: 'DELETE',
    });
    const json = await response.json();

    const message: Article = json.data;
    console.log(json);
    return of(message);
  }

  async updateArticles(article: Article): Promise<Observable<Article[]>> {
    const response = await fetch(
      `http://localhost:80/Blog_API/v2/blog/${article.id}`,
      {
        method: 'PATCH',
        body: JSON.stringify(article),
        headers: {
          'content-type': 'application/json',
        },
      }
    );
    const json = await response.json();

    console.log(json);
    const articleList: Article[] = json.data.data;
    return of(articleList);
  }

  async createArticles(article: Article): Promise<Observable<Article[]>> {
    const response = await fetch(`http://localhost:80/Blog_API/v2/blog`, {
      method: 'POST',
      body: JSON.stringify(article),
      headers: {
        'content-type': 'application/json',
      },
    });
    const json = await response.json();

    console.log(json);
    const articleList: Article[] = json.data.data;
    return of(articleList);
  }
}

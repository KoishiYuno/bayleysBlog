import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from './Article';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  async getArticles(page: number): Promise<Observable<Article[]>> {
    const response = await fetch(
      `http://localhost:80/Blog_API/v2/blog/page/${page}`,
      {}
    );
    const json = await response.json();

    const articleList: Article[] = json.data.data;
    console.log(json);
    return of(articleList);
  }

  async getArticle(id: number): Promise<Observable<Article>> {
    const response = await fetch(
      `http://localhost:80/Blog_API/v2/blog/${id}`,
      {}
    );

    const json = await response.json();

    const article: Article[] = json.data.data;

    console.log(article[0]);
    return of(article[0]);
  }

  async getPopularArticles(): Promise<Observable<Article[]>> {
    const response = await fetch(
      'http://localhost:80/Blog_API/v2/blog/popular',
      {}
    );
    const json = await response.json();

    const articleList: Article[] = json.data.data;
    console.log(json);
    return of(articleList);
  }

  async getArticlesByTitle(title: string) {
    const response = await fetch(
      `http://localhost:80/Blog_API/v2/blog/search/${title}`,
      {}
    );
    const json = await response.json();

    const articleList: Article[] = json.data.data;
    console.log(json);
    return of(articleList);
  }

  async getArticleCounts(): Promise<Observable<number>> {
    const response = await fetch(
      'http://localhost:80/Blog_API/v2/blog/allPage',
      {}
    );
    const json = await response.json();

    const allPage = json.data.count;
    return of(allPage);
  }
}

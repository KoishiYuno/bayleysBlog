import { Component, OnInit } from '@angular/core';
import { Article } from '../Article';
import { Title } from '@angular/platform-browser';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-homePage',
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.css'],
})
export class HomePageComponent implements OnInit {
  Articles: Article[] = [];

  constructor(
    private articleService: ArticleService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.getArticles();
    this.titleService.setTitle(`Bayleys Blog`);
  }

  async getArticles(): Promise<void> {
    (await this.articleService.getPopularArticles()).subscribe(
      (articles) => (this.Articles = articles)
    );
  }
}

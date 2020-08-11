import { Component, OnInit } from '@angular/core';
import { Article } from '../Article';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ArticleService } from '../article.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  article: Article = null;
  articleList: Article[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService,
    private titleService: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.getArticles();
    this.route.params.subscribe(async (parms) => {
      const id = parms.id;
      (await this.articleService.getArticle(id)).subscribe((article) => {
        this.article = article;

        if (article === undefined) {
          this.router.navigateByUrl('404-error');
          return;
        }

        this.article.content = this.article.content.replace(/\r\n\r\n/g, '<p>');
        this.article.content = this.article.content.replace(
          /<img/g,
          '<img width="50%" height="auto" margin-left="10rem"'
        );

        this.titleService.setTitle(`${this.article.title} - Bayleys Blog`);
        this.meta.addTags([
          { name: 'description', content: this.article.description },
        ]);
      });
    });
  }

  async getArticles(): Promise<void> {
    (await this.articleService.getArticles(3)).subscribe(
      (articles) => (this.articleList = articles)
    );
  }
}

import { Component, OnInit, Inject } from '@angular/core';
import { Article } from '../Article';
import { ArticleService } from '../article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit {
  Articles: Article[] = [];
  allPage: number = 1;
  page: number = 1;
  temp: number = 1;
  pageList = [1];
  innerHTML: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService,
    private titleService: Title,
    @Inject(DOCUMENT) private _document: Document
  ) {}

  ngOnInit(): void {
    this.getAllPage();

    this.route.params.subscribe(async (parms) => {
      if (parms.id) {
        const id = parms.id;
        (await this.articleService.getArticles(id)).subscribe((article) => {
          this.Articles = article;

          if (article === undefined) {
            this.router.navigateByUrl('404-error');
            return;
          }
        });
      } else if (parms.title) {
        const title = parms.title;
        console.log('NMSL');
        (await this.articleService.getArticlesByTitle(title)).subscribe(
          (article) => {
            this.Articles = article;

            if (article === undefined) {
              this.router.navigateByUrl('404-error');
              return;
            }
          }
        );
        document.querySelector('.bottom').innerHTML = '';
      } else {
        (await this.articleService.getArticles(1)).subscribe((article) => {
          this.Articles = article;
        });
      }
    });
  }

  // async getArticles(): Promise<void> {
  //   (await this.articleService.getArticles(this.page)).subscribe(
  //     (articles) => (this.Articles = articles)
  //   );
  // }

  async getAllPage(): Promise<void> {
    (await this.articleService.getArticleCounts()).subscribe((allPage) => {
      this.allPage = allPage;
    });
    for (let i = 1; i < this.allPage / 5; i++) {
      this.pageList[i] = i + 1;
    }
  }

  goToPage(): void {
    const title = (<HTMLInputElement>document.querySelector('.search_input'))
      .value;
    this.router.navigate(['articles', 'search', title]);
  }
  // searchBlog(): void {
  //   console.log(this.allPage);
  //   this.page = this.page + 1;
  //   this.getArticles();

  //   console.log(this.Articles);
  //   // //this.refreshPage();
  //   // console.log(this.Articles);
  // }

  // changePage(): void {
  //   if (this.temp !== this.page) {
  //     this.getArticles();
  //     this.temp === this.page;
  //   }
  // }

  refreshPage() {
    this._document.defaultView.location.reload();
  }
}

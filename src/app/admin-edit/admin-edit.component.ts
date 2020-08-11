import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { ArticleService } from '../article.service';
import { Title } from '@angular/platform-browser';
import { Article } from '../Article';
import { MatDialog } from '@angular/material/dialog';
import { CancelArticleBialogComponent } from '../cancel-article-bialog/cancel-article-bialog.component';
import { UpdateArticleBialogComponent } from '../update-article-bialog/update-article-bialog.component';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css'],
})
export class AdminEditComponent implements OnInit {
  article: Article = null;
  articleList: Article[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService,
    private adminService: AdminService,
    private titleService: Title,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
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
      });
    });
  }

  async updateArticles(): Promise<void> {
    (await this.adminService.updateArticles(this.article)).subscribe(
      (articles) => (this.articleList = articles)
    );
  }

  preview(): void {}

  checkUpdate(): void {
    let result = this.dialog.open(UpdateArticleBialogComponent);
    result.afterClosed().subscribe((result) => {
      console.log(result);
      if (result == 'true') {
        this.updateArticles();
        this.router.navigate(['admin']);
      }
    });
  }

  goToPage(): void {
    let result = this.dialog.open(CancelArticleBialogComponent);
    result.afterClosed().subscribe((result) => {
      console.log(result);
      if (result == 'true') {
        this.router.navigate(['admin']);
      }
    });
  }
}

// const title = (<HTMLInputElement>(
//   document.querySelector('.cancel_button')
// )).value;

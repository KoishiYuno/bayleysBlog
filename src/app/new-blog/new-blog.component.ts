import { Component, OnInit } from '@angular/core';
import { Article } from '../Article';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../article.service';
import { AdminService } from '../admin.service';
import { Title } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { CancelArticleBialogComponent } from '../cancel-article-bialog/cancel-article-bialog.component';
import { UpdateArticleBialogComponent } from '../update-article-bialog/update-article-bialog.component';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css'],
})
export class NewBlogComponent implements OnInit {
  article: Article = new Article(1, '', '', new Date(), '', '', '', '');

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private adminService: AdminService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  async createArticles(): Promise<void> {
    await this.adminService.createArticles(this.article);
  }

  checkUpdate(): void {
    let result = this.dialog.open(UpdateArticleBialogComponent);
    result.afterClosed().subscribe((result) => {
      console.log(result);
      console.log(this.article.date);
      this.createArticles();
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

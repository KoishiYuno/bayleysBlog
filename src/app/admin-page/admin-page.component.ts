import { Component, OnInit, Inject } from '@angular/core';
import { AdminService } from '../admin.service';
import { Article } from '../Article';
import { MatDialog } from '@angular/material/dialog';
import { DOCUMENT } from '@angular/common';
import { DeleteArticleBialogComponent } from '.././delete-article-bialog/delete-article-bialog.component';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
})
export class AdminPageComponent implements OnInit {
  Articles: Article[] = [];

  constructor(
    private AdminService: AdminService,
    public dialog: MatDialog,
    @Inject(DOCUMENT) private _document: Document
  ) {}

  ngOnInit(): void {
    this.getAllArticles();
  }

  async getAllArticles() {
    (await this.AdminService.getAllArticles()).subscribe((article) => {
      this.Articles = article;
      console.log(this.Articles);
    });
  }

  delete(id: number) {
    this.AdminService.deleteArticles(id);
  }

  openDialog(id: number) {
    let result = this.dialog.open(DeleteArticleBialogComponent);
    result.afterClosed().subscribe((result) => {
      console.log(result);
      console.log(id);
      if (result == 'true') {
        this.delete(id);
        console.log('deleted');
        this.refreshPage();
      }
    });
  }

  refreshPage() {
    this._document.defaultView.location.reload();
  }
}

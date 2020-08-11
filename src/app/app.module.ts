import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FootBarComponent } from './foot-bar/foot-bar.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { AboutComponent } from './about/about.component';
import { NewBlogComponent } from './new-blog/new-blog.component';
import { ArticleComponent } from './article/article.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './homePage/homePage.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DeleteArticleBialogComponent } from './delete-article-bialog/delete-article-bialog.component';
import { CancelArticleBialogComponent } from './cancel-article-bialog/cancel-article-bialog.component';
import { UpdateArticleBialogComponent } from './update-article-bialog/update-article-bialog.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FootBarComponent,
    ArticleListComponent,
    AboutComponent,
    ArticleComponent,
    NotFoundComponent,
    HomePageComponent,
    AdminPageComponent,
    AdminEditComponent,
    DeleteArticleBialogComponent,
    CancelArticleBialogComponent,
    UpdateArticleBialogComponent,
    NewBlogComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

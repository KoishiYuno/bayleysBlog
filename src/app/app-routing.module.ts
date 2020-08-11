import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomePageComponent } from './homePage/homePage.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CommonModule } from '@angular/common';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { NewBlogComponent } from './new-blog/new-blog.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'articles', component: ArticleListComponent },
  { path: 'articles/:id', component: ArticleListComponent },
  { path: 'articles/search/:title', component: ArticleListComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'addNew', component: NewBlogComponent },
  { path: 'admin/:id', component: AdminEditComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: HomePageComponent },
  { path: '404-error', component: NotFoundComponent },
  { path: ':id', component: ArticleComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

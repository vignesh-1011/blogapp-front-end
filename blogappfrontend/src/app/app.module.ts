import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PostlistComponent } from './component/postlist/postlist.component';
import { SinglepostComponent } from './component/singlepost/singlepost.component';
import { AddpostComponent } from './component/addpost/addpost.component';
import { AddcommentComponent } from './component/addcomment/addcomment.component';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { SearchPostResultComponent } from './component/search-post-result/search-post-result.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsByCategoryComponent } from './component/posts-by-category/posts-by-category.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    PostlistComponent,
    SinglepostComponent,
    AddpostComponent,
    AddcommentComponent,
    SigninComponent,
    SignupComponent,
    SearchPostResultComponent,
    PostsByCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

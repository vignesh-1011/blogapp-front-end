import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcommentComponent } from './component/addcomment/addcomment.component';
import { AddpostComponent } from './component/addpost/addpost.component';
import { PostlistComponent } from './component/postlist/postlist.component';
import { PostsByCategoryComponent } from './component/posts-by-category/posts-by-category.component';
import { SearchPostResultComponent } from './component/search-post-result/search-post-result.component';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { SinglepostComponent } from './component/singlepost/singlepost.component';
import { AuthGuard } from './security/auth.guard';

const routes: Routes = [
 {
   path:'',
   component:PostlistComponent,
   
 },
 {
  path:'posts',
  component:PostlistComponent,
  
},
 {
  path:'single-post',
  component:SinglepostComponent
},
{
  path:'category',
  component:PostsByCategoryComponent
},

{
  path:'search',
  component:SearchPostResultComponent,
 
},

{
  path:'signup',
  component:SignupComponent
},

{
  path:'signin',
  component:SigninComponent
},
{
  path:'add-post',
  component:AddpostComponent
  //canActivate: [AuthGuard]
},

{
  path:'add-comment',
  component:AddcommentComponent,
  canActivate: [AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/model/Post';
import { AuthService } from 'src/app/service/auth.service';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent {

  userId:string | null=localStorage.getItem("userid");
  post:any=new Post();

  constructor(private postService:PostService, private router:Router) { }

  addPostFormProcess(data:any)
  {
     this.post.id=data.value.id;
     this.post.title=data.value.title;
     this.post.content=data.value.content;
     this.post.categoryId=data.value.categoryId;
     this.post.userId=data.value.userId;
     this.post.image=data.value.file;
    console.log(data.value);

  this.postService.addPost(this.post).subscribe(
    response => {
      console.log(response);
      alert('Post added');
    }
  );
 
  }
}

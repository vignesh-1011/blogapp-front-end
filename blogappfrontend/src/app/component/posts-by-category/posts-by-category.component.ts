import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-posts-by-category',
  templateUrl: './posts-by-category.component.html',
  styleUrls: ['./posts-by-category.component.css']
})
export class PostsByCategoryComponent {

  constructor(private postService:PostService, private router:Router) { }

posts:any;

  ngOnInit(): void {

    this.postService.getPosts().subscribe(
      response => {
       
        console.log(response.content);
        this.posts=response.content;
      }
    );

  }
}

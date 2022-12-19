import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent {
  currentDate = new Date();

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

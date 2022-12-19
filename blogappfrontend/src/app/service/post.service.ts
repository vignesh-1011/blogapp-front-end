import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseURL:string="http://localhost:8080/api/post/category/";
  getpostsURL:string="http://localhost:8080/api/post/"
  private userId:any;
  private categoryId:any;
  constructor(private http: HttpClient) { }

  addPost(postDetail:Post):Observable<any>
  {
    this.categoryId=postDetail.categoryId;
    this.userId=postDetail.userId;

    const headers={'content-type':'application/json'}
    const body=JSON.stringify(postDetail);
    return this.http.post(this.baseURL+this.categoryId+'/user/'+this.userId,body,{'headers':headers});
    
  }


  getPosts():Observable<any>
  {
    return this.http.get(this.getpostsURL);
  }
}

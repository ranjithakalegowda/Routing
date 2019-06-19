import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/post';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postsUrl = "https://jsonplaceholder.typicode.com/posts";


  constructor(private http : HttpClient) { }
  getPosts() : Observable<Post[]>{
    return this.http.get<Post[]>(this.postsUrl);
  }

  savePost(post : Post) : Observable<Post>{
    return this.http.post<Post>(this.postsUrl, post, httpOptions);
  }
  onupdatepost(post: Post): Observable<Post>{
    const url = `${this.postsUrl}/${post.id}`;
    return this.http.put<Post>(url,post, httpOptions);
  }
}

import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:Post[];
  currentPost: Post = {
    id: 0,
    title: '',
    body: ''
  }
  isEdit: boolean = false;

  constructor(private postService : PostService) { }
  ngOnInit() {
   this.postService.getPosts().subscribe(posts =>{
     console.log(this.posts = posts);
     this
   })
  }
  addPost(post: Post){
    this.posts.unshift(post);
  }

  onEditPost(post: Post){ 
    this.isEdit = true;
    this.currentPost = post;
  }

  updatethePost(post:Post){
    this.posts.forEach((cur, index)=>{
      if(post.id === cur.id){
        this.posts.splice(index,1);
        this.posts.unshift(post);
        this.isEdit = false;
        this.currentPost = {
          id: 0,
          title: '',
          body: ''
        }
      }
    });
  }
  onDeletePost(post){
    if(confirm('Are you sure?')){
      this.postService.deletePost(post.id).subscribe(()=>{
        this.posts.forEach((cur,index)=>{
          if(post.id === cur.id){
            this.posts.splice(index,1);
          }
        })
      })
    }
  }
}

import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  post:Post;

  @Output() addPost: EventEmitter<Post> = new EventEmitter();
  @Input() isEdit : boolean;
  @Input() currentPost: Post;

  constructor(private postService : PostService) { }

  ngOnInit() {
  }

  onAddPost(title,body){
    // console.log(title, body);
    if(!title || !body){
      alert("Please add post")
    }
    else{
      // console.log(123);
      this.postService.savePost({title,body} as Post).subscribe(
        post => {
          //console.log(post);
          this.addPost.emit(post);
        }
      )
    }
  }

  updatingPost(){
    this.postService.onupdatepost(this.currentPost).subscribe(
      post => {
        console.log(post);
      }
    );
  }

}

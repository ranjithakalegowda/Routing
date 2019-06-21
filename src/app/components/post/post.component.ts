import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post:Post;

  constructor(private route: ActivatedRoute, private postSerive: PostService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    //console.log(id);
    this.postSerive.getPost(id).subscribe(post =>{
      this.post = post;
    })
  }
}

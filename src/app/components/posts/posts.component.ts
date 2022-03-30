import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/models/postModel';
import { PostService } from 'src/app/services/Post/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: PostModel[] = [];
  constructor(private postsService: PostService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postsService.getPosts().subscribe((response) => {
      this.posts = response;
    });
  }

  delete(post: PostModel) {
    this.posts = this.posts.filter((p) => p.id !== post.id);
    this.postsService.deletePosts(post).subscribe();
  }
}

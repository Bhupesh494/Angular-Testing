import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostModel } from 'src/app/models/postModel';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  url = 'https://jsonplaceholder.typicode.com/posts';

  getPosts() {
    return this.http.get<PostModel[]>(this.url);
  }

  deletePosts(post: PostModel) {
    return this.http.delete(this.url + '/' + post.id);
  }
}

import { of } from 'rxjs';
import { PostModel } from 'src/app/models/postModel';
import { PostsComponent } from './posts.component';

describe('PostsComponent', () => {
  let mockPostService: any;
  let postsComponent: PostsComponent;
  let POSTS: PostModel[];

  beforeEach(() => {
    POSTS = [
      {
        id: 1,
        title: 'title 1',
        body: 'body 1',
      },
      {
        id: 2,
        title: 'title 2',
        body: 'body 2',
      },
      {
        id: 3,
        title: 'title 3',
        body: 'body 3',
      },
    ];
    mockPostService = jasmine.createSpyObj(['deletePosts', 'getPosts']);
    postsComponent = new PostsComponent(mockPostService);
  });

  it('should create', () => {
    expect(true).toBeTruthy();
  });

  describe('delete', () => {
    beforeEach(() => {
      mockPostService.deletePosts.and.returnValue(of(true));
      postsComponent.posts = POSTS;
    });
    it('should delete the selected Post from the posts', () => {
      postsComponent.delete(POSTS[1]);

      expect(postsComponent.posts.length).toBe(2);
    });
    it('should delete the actual selected Post in Posts', () => {
      postsComponent.delete(POSTS[1]);

      for (let post of postsComponent.posts) {
        expect(post).not.toEqual(POSTS[1]);
      }
    });

    it('should call the delete method in Post Service only once', () => {
      postsComponent.delete(POSTS[1]);
      expect(mockPostService.deletePosts).toHaveBeenCalledTimes(1);
    });
  });
});

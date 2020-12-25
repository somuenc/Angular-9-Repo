import { BadRequestError } from './../common/bad-request.error';
import { NotFoundError } from './../common/not-found.error';
import { AppError } from './../common/app.error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Array<any>;

  constructor(private readonly postService: PostService) { }

  ngOnInit(): void {
    this.postService
      .getPosts()
      .subscribe(
        (response: Array<any>) => {
          this.posts = response;
        }, this.handleError);
  }

  createPost(input: HTMLInputElement) {
    const post: any = {
      title: input.value
    };
    this.postService
      .createPost(post)
      .subscribe((resp: any) => {
        console.log(resp);
        post.id = resp.id;
        this.posts.splice(0, 0, post);
        input.value = '';
      }, this.handleError);
  }

  updatePost(post: any) {
    this.postService
      .updatePost(post)
      .subscribe(resp => {
        console.log(resp);
      }, this.handleError);
  }

  handleError(error: AppError) {
    if (error instanceof NotFoundError) {
      console.log('not found error');
    } else if (error instanceof BadRequestError) {
      console.log('Bad request');
    } else {
      throw error;
    }
  }

  deletePost(post: any) {
    this.postService.deletePost('abc')
      .subscribe(resp => {
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        console.log(resp);
      }, this.handleError);
  }
}

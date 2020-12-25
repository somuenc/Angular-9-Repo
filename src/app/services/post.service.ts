import { AppError } from './../common/app.error';
import { NotFoundError } from './../common/not-found.error';
import { BadRequestError } from './../common/bad-request.error';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private readonly http: HttpClient) { }

  getPosts(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.url)
      .pipe(catchError(this.handleError));
  }

  createPost(post: any): Observable<any> {
    return this.http.post(this.url, JSON.stringify(post))
      .pipe(catchError(this.handleError));
  }

  updatePost(post: any): Observable<any> {
    return this.http
      .patch(`${this.url}/${post.id}`, JSON.stringify({ isRead: true }))
      .pipe(catchError(this.handleError));
  }

  deletePost(id): Observable<any> {
    return this.http.delete(`${this.url}/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 400) {
      return throwError(new BadRequestError(error));
    } else if (error.status === 404) {
      return throwError(new NotFoundError(error));
    }
    return throwError(new AppError(error));
  }
}

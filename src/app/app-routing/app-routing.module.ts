import { SignupFormComponent } from './../signup-form/signup-form.component';
import { TestPage1Component } from './../test-page1/test-page1.component';
import { ContactFormComponent } from './../contact-form/contact-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseFormComponent } from '../course-form/course-form.component';
import { NewCourseFormComponent } from '../new-course-form/new-course-form.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { PostsComponent } from '../posts/posts.component';

const routes: Routes = [
  {
    path: 'contact-form',
    component: ContactFormComponent
  },
  {
    path: 'test-page1',
    component: TestPage1Component
  },
  {
    path: 'course-form',
    component: CourseFormComponent
  },
  {
    path: 'signup-form',
    component: SignupFormComponent
  },
  {
    path: 'new-form',
    component: NewCourseFormComponent
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: '',
    redirectTo: '/contact-form',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

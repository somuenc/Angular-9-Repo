import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  categories = [
    { id: 101, name: 'Development' },
    { id: 102, name: 'Art' },
    { id: 103, name: 'Language' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  submit(f) {
    console.log(f.value);
  }
}

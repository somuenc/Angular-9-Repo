import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactMethods = [
    { id: 1, type: 'Email' },
    { id: 2, type: 'Fax' },
    { id: 3, type: 'Phone' },
  ];


  constructor() { }

  ngOnInit(): void {
  }

  submit(x) {
    console.log(x);
  }

  log(x){
    console.log(x);
  }
}

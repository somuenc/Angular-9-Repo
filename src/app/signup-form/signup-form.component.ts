import { UsernameValidators } from './username.validators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl(null,
        [ Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
          UsernameValidators.cannotContainSpace
        ],
        UsernameValidators.shouldBeUnique),
      password: new FormControl(null, [Validators.required])
    })
  });

  get username() {
    return this.form.get('account.username');
  }

  get password() {
    return this.form.get('account.password');
  }

  onSubmit() {
    console.log(this.form.value);
    this.form.setErrors({
      invalidLogin: true
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}

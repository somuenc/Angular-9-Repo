import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  form: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: fb.control('', [Validators.required], [PasswordValidators.invalidPassword]),
      newPassword: fb.control('', [Validators.required]),
      confirmPassword: fb.control('', [Validators.required]),
    }, {
      asyncValidators: PasswordValidators.passwordsShouldMatch
    });
  }

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  onSubmit() {
    console.log(this.form.value);
  }

  ngOnInit(): void {
  }

}

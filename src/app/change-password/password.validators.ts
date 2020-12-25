import { AbstractControl, ValidationErrors } from '@angular/forms';
export class PasswordValidators {
  static invalidPassword(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === '1234') {
          resolve(null);
        } else {
          resolve({ invalidPassword: true });
        }
      }, 2000);
    });
  }

  static passwordsShouldMatch(control: AbstractControl): Promise<ValidationErrors | null>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const newPassword = control.get('newPassword');
        const confirmPassword = control.get('confirmPassword');
        if (newPassword.value !== confirmPassword.value)  {
          resolve({ passwordsShouldMatch: true });
        }
      }, 500);
    });
  }
}

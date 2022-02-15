import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loginForm = this.fb.group(
    {
      name: ['', [Validators.required, Validators.pattern(/^[A-Za-z_ ]*$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(5)],
      ],
      confirmPassword: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(5)],
      ],
    }
    // { validator: confirmPasswordValidator }
  );

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  isInvalid(control: any) {
    return control && control.touched && control.invalid;
  }
  isValid(control: any) {
    return control && control.touched && control.valid;
  }
}

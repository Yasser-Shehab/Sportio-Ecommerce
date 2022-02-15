import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  registerForm = this.fb.group(
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

  get name() {
    return this.registerForm.get('name');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  isInvalid(control: any) {
    return control && control.touched && control.invalid;
  }
  isValid(control: any) {
    return control && control.touched && control.valid;
  }
}

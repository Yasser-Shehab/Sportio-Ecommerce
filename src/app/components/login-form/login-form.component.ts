import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, pluck } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  // isAdmin = new BehaviorSubject<boolean>(false);
  loginForm = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    }
    // { validator: confirmPasswordValidator }
  );

  constructor(
    private fb: FormBuilder,
    private _usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.loginForm.value);

    this._usersService.login(this.loginForm.value).subscribe((token: any) => {
      localStorage.setItem('token', token);
    });
    this.router.navigate(['/']);
  }

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

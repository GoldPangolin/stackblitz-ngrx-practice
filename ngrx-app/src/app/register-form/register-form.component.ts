import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { formAction } from './store/form-actions';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
  registerForm: FormGroup = this.fb.group({
    username: ['Username', Validators.required],
    email: ['email', Validators.required],
    password: ['password', Validators.required],
  });

  public formVal: any;

  constructor(private fb: FormBuilder, private store : Store) {}

  sendForm(): void {
    this.formVal = this.registerForm.value;
    JSON.parse(this.formVal);
    console.log(this.formVal);
    this.store.dispatch(formAction.Register);

  }
}

import { Component, OnInit , Inject } from '@angular/core';
import { Validators, AbstractControl, FormBuilder, FormGroup, FormControl , Validator , FormsModule} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  processing: Boolean = false;
  error: Boolean = false;


  constructor(
    private router: Router,
  ) { 
    this.loginForm = new FormGroup({
      username: new FormControl('', [ Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmitButtonClicked() {
    this.error  = false;
    this.processing  = false;
    if (this.loginForm.valid) {
      this.login();
    }
  }

  private login() {
    this.processing  = true;
  }
}
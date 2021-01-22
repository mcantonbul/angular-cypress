import { Component, OnInit, Inject } from '@angular/core';
import { Validators, AbstractControl, FormBuilder, FormGroup, FormControl, Validator, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';


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
    private authService: AuthService,
    private spinner: NgxSpinnerService,
    private toastrService: ToastrService
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    this.error = false;
    this.processing = false;
    if (this.loginForm.valid) {
      this.login();
    }
  }

  private login() {
    this.toastrService.clear();
    this.spinner.show();
    this.authService.login(this.loginForm.value).subscribe((result) => {
      this.spinner.hide();
      if (result.status) {
        this.router.navigate(['/dashboard']);
      } else {
        this.toastrService.error(result.message, undefined, { progressBar: true, progressAnimation: "increasing" });
      }
    })
  }
}
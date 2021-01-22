import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";


@Injectable()
export class AuthService {

    constructor(private router: Router, private spinner: NgxSpinnerService) {
    }

    login({ username, password }: any): Observable<LoginModel> {
        const randomMs = Math.floor((Math.random() * 1900) + 100)
        if (username === 'admin' && password === '1234') {
            const token = "admin#token";
            localStorage.setItem("token", token);
            return of({ status: true, username: username, token: token }).pipe(delay(randomMs));
        } else {
            return of({ status: false, message: 'Kullanıcı adı veya şifreyi yanlış girdiniz' }).pipe(delay(randomMs));
        }
    }

    logout() {
        localStorage.removeItem("token");
        const randomMs = Math.floor((Math.random() * 900) + 100)
        this.spinner.show();
        setTimeout(() => {
            this.spinner.hide();
            this.router.navigate(["/login"])
        }, randomMs);
    }
}

export interface LoginModel {
    status: boolean;
    username?: string;
    token?: string;
    message?: string;
}
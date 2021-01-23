import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
    selector: 'pages-layout',
    templateUrl: './pages-layout.component.html',
    styleUrls: ['./pages-layout.component.css']
})
export class PagesLayoutComponent implements OnInit {

    constructor(private authService: AuthService) {

    }

    ngOnInit(): void {
    }

    logout() {
        this.authService.logout();
    }
}
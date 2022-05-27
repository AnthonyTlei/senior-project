import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/services/authentication.service';
import { CookieService } from 'app/cookie.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    test: Date = new Date();
    focus;
    focus1;
    loggedInUser: string = "";
    email: string = "";
    password: string = "";
    incorrectInput: boolean = false;
    constructor(private authService: AuthenticationService, public cookie: CookieService, private router: Router) { }

    ngOnInit() {

    }
    login() {
        this.authService.login(this.email, this.password).subscribe((response) => {
            if (response.length > 0) {
                let user = response[0];
                this.authService.isAuthenticated = true;
                this.authService.user.m_email = user.email;
                this.authService.user.m_password = user.password;
                this.authService.user.m_username = user.username;
                this.authService.user.m_user_id = user.user_id;
                this.incorrectInput = false;

                this.cookie.setCookie({
                    name: 'UID',
                    value: user.user_id,
                    session: true,
                });

                this.cookie.setCookie({
                    name: 'username',
                    value: user.username,
                    session: true,
                });
                this.loggedInUser = this.cookie.getCookie('UID');
                this.router.navigate(['/']);
            }
        })
    }

}
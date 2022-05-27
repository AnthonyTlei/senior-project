import { Component, OnInit } from '@angular/core';
import { CookieService } from 'app/cookie.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/services/authentication.service';
@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

    username = '';
    password = '';
    Psuccess:boolean=false;
    Usuccess:boolean=false;
    constructor(public cookie: CookieService, private router: Router, private authService: AuthenticationService) { }

    ngOnInit() { }

    SignOut() {
        this.cookie.deleteCookie('UID');
        this.router.navigate(['/login']);
    }

    DeleteAccount() {
        let userId = this.cookie.getCookie('UID');
        this.authService.deleteAccount(userId).subscribe((response) => {
            this.cookie.deleteCookie('UID');
            this.authService.isAuthenticated = false;
            this.router.navigate(['/login']);
            console.log('User Deleted');
        })
    }

    ChangeUsername() {
        this.Usuccess=true;
        let userId = this.cookie.getCookie('UID');
        this.authService.changeUsername(userId, this.username).subscribe((response) => {
        console.log('Username Updated');        
        })
    }

    ChangePassword() {
        this.Psuccess=true;
        let userId = this.cookie.getCookie('UID');
        this.authService.changePassword(userId, this.password).subscribe((response) => {
            console.log('Pass Updated');
        })
    }
        StatNav() {
            this.router.navigate(['/statistics']);
    }
}

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'app/cookie.service';
@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
    useremail:string="";
  focus: any;
  focus1: any;

  constructor(public cookie: CookieService) { }

  ngOnInit() {
  this.useremail = this.cookie.getCookie('emailC');}

}

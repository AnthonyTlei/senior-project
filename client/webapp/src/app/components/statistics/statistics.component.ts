import { Component, OnInit } from '@angular/core';
import { CookieService } from 'app/cookie.service';
import { AuthenticationService } from 'app/services/authentication.service';
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  constructor(public cookie: CookieService, private authService: AuthenticationService) { }
  scoresArray: any=[];
  topArray: any=[];
  userN:string= '';
  userId:string= '';
  ngOnInit(): void {
   this.userN = this.cookie.getCookie('username');
   this.userId = this.cookie.getCookie('UID');

    this.authService.getScoreById(this.userId).subscribe((response) => {
        this.scoresArray=response;

  })
      this.authService.getTopScores("15","score","descending").subscribe((response) => {
        this.topArray=response;

  })
}
}
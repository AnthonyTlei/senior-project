import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/user';
import { Observable } from 'rxjs';
import { ExitStatus } from 'typescript';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isAuthenticated = false;
  user: User = new User();

  url = 'http://localhost:3000/api/';

  constructor(private http : HttpClient) { }

  login(email:string, password:string) : Observable<any>
  {
    let formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    let loginUrl = this.url+'login';

    return this.http.post(loginUrl, formData);
  }

  register(email:string, password:string, username:string) : Observable<any>
  {
    let formData = new FormData();
    formData.append('email', email);
    formData.append('username', username);
    formData.append('password', password);
    let loginUrl = this.url+'register';

    return this.http.post(
      loginUrl, 
      formData,
      {responseType: 'text'}
      );
  }

  changeUsername(userid: string, username:string) : Observable<any>
  {
    let formData = new FormData();
    formData.append('userid', userid);
    formData.append('username', username);
    let loginUrl = this.url + 'updateUsername';

    return this.http.post(loginUrl, formData);
  }

  changePassword(userid: string, password:string) : Observable<any>
  {
    let formData = new FormData();
    formData.append('userid', userid);
    formData.append('password', password);
    let loginUrl = this.url + 'updatePassword';

    return this.http.post(loginUrl, formData);
  }

  deleteAccount(userid: string) : Observable<any>
  {
    let formData = new FormData();
    formData.append('userid', userid);
    let loginUrl = this.url + 'deleteUserByUserID';

    return this.http.post(
      loginUrl, 
      formData,
      {responseType: 'text'}
      );
  }
    getScoreById(userid: string) : Observable<any>
  {
    let formData = new FormData();
    formData.append('userid', userid);
    let ScoreUrl = this.url + 'getUserScoreByUserID';

    return this.http.post(
      ScoreUrl, 
      formData,
      //{responseType: 'text'}
      );
  }
    getTopScores(count: string, sortby: string, direction: string) : Observable<any>
  {
    let formData = new FormData();
      formData.append('count', count);
      formData.append('sortby', sortby);
      formData.append('direction', direction);
      let AScore = this.url + 'getTopUserScore';

    return this.http.post(
      AScore, 
      formData,
      );
  }
}

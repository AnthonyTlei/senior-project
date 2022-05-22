import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/services/authentication.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email:string = "";
  password:string = "";
  username:string = "";


  constructor(private authService : AuthenticationService, private router: Router) { }

  ngOnInit(): void {

  }
  register()
  {
      this.authService.register(this.email, this.password, this.username).subscribe((response) => {
        this.router.navigate(['/login']);
      })
  }

}

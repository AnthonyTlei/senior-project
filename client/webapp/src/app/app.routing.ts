import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { ChatComponent } from './components/chat/chat.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardGuard } from './auth-guard.guard';
const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: LandingComponent },
    { path: 'chat',             component: ChatComponent, canActivate: [AuthGuardGuard] },
    { path: 'profile',     component: ProfileComponent, canActivate: [AuthGuardGuard]},
    { path: 'profile',     component: ProfileComponent, canActivate: [AuthGuardGuard]},
    { path: 'login',           component: LoginComponent },
    { path: 'statistics',           component: StatisticsComponent },
    { path: 'register',           component: RegisterComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }

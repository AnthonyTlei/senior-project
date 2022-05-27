import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from '../components/landing/landing.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { LoginComponent } from '../components/login/login.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
    ],
    declarations: [
        LandingComponent,
        LoginComponent,
        ProfileComponent
    ]
})
export class ExamplesModule { }

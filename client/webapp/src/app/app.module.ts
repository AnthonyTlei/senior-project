import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CookieService } from 'app/cookie.service';
import { ExamplesModule } from './examples/examples.module';
import { ChatComponent } from './components/chat/chat.component';
import { RegisterComponent } from './register/register.component';

import {HttpClientModule} from '@angular/common/http';
import { MessageComponent } from './components/message/message.component';
import { StatisticsComponent } from './components/statistics/statistics.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ChatComponent,
    RegisterComponent,
    MessageComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ExamplesModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

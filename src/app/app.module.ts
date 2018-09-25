import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { DogsComponent } from './dogs/dogs.component';
import { HoundComponent } from './dogs/hound/hound.component';
import { BoxerComponent } from './dogs/boxer/boxer.component';
import { DogsService } from './dogs.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthenticationService } from './authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DogsComponent,
    HoundComponent,
    BoxerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('token')
      }
    })
  ],
  providers: [
    DogsService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

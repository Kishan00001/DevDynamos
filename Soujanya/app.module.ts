import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StudentLoginComponent } from './Components/student-login/student-login.component';
import { RegistrationComponent } from './Components/registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentLoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

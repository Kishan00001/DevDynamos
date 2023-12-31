import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './Components/home/home.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import {HttpClientModule} from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegistrationComponent } from './Components/registration/registration.component';
import { QuestionComponent } from './Components/question/question.component';
import { ChangeBgDirective } from './change-bg.directive';
import { AddQuestionComponent } from './Components/add-question/add-question.component';
import { DeleteQuestionComponent } from './Components/delete-question/delete-question.component';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { LoginStudentComponent } from './Components/login-student/login-student.component';
import { LoginEducatorComponent } from './Components/login-educator/login-educator.component';
import { LoginAdminComponent } from './Components/login-admin/login-admin.component';
import { ActionAdminComponent } from './Components/action-admin/action-admin.component';
import { ActionEducatorComponent } from './Components/action-educator/action-educator.component';
import { ActionStudentComponent } from './Components/action-student/action-student.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    RegistrationComponent,
    QuestionComponent,
    ChangeBgDirective,
    AddQuestionComponent,
    DeleteQuestionComponent,
    AboutusComponent,
    LoginStudentComponent,
    LoginEducatorComponent,
    LoginAdminComponent,
    ActionAdminComponent,
    ActionEducatorComponent,
    ActionStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

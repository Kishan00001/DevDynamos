import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { StudentLoginComponent } from './Components/student-login/student-login.component';
import { RegistrationComponent } from './Components/registration/registration.component';

const routes: Routes = [
  
    {path: '', redirectTo: "Login", pathMatch:'full'},
    {path:'Login',component:LoginComponent},
    {path:'studentLogin',component:StudentLoginComponent},
    {path:'Registration',component:RegistrationComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

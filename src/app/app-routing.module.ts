import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';


const routes: Routes = [
  { path: "", loadChildren:()=> import('./home/home.module').then(m => m.HomeModule)},
{ path: "login", loadChildren:()=> import('./login/login.module').then(m => m.LoginModule)},
{ path: "employeedetails/:id", loadChildren:()=> import('./employeedetails/employeedetails.module').then(m => m.EmployeedetailsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  id:any;
  password:any;
  constructor(private router:Router,private authService:AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):any{
    if(this.authService.checkUser()){
      let checking = this.authService.checkUser()
      console.log(checking[0].TeamNumber);
      let id = route.paramMap.get('id')
      console.log(id);
      
      
      if(((checking[0].EmployeeId===id)||checking[0].TeamNumber===7) || (checking[0].TeamNumber===8)){
        
        return true
      }

      else {
        alert("Access denied to view details!")
        return false
      }
      
    }
    else return false
    
   
  }
}

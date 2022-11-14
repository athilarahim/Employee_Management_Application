import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IEmployee } from 'src/app/interface';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  invalidLogin:boolean | undefined;
  getEmpData:IEmployee[] = []
  loglist:any[] = []
   constructor(private router:Router,private authService:AuthService) { }
   v:number=0;

  ngOnInit(): void {
    
  }

  addUserForm = new FormGroup(
    {
    EmployeeId: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required]),
  }

  );

  public newID:any;
  public newPass:any;

  saveUser(){
    this.authService.saveUser(this.newID,this.newPass)
  }
}

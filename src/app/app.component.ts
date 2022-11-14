import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IEmployee } from './interface';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui-router';
  Emplist: IEmployee[] = []
  list: IEmployee[] = []

  constructor(private authService:AuthService,private router:Router){}

  ngOnInit(): void {
    this.Emplist.push({ EmployeeId: "1", EmployeeName: "Athila", TeamNumber: 1, PhoneNumber: "789654123", Address: "dyjgukihi", Password: "athila123" },
      { EmployeeId: "2", EmployeeName: "Azhar", TeamNumber: 2, PhoneNumber: "782354123", Address: "vjhbkjhnlk", Password: "azhar123" },
      { EmployeeId: "3", EmployeeName: "Hanan", TeamNumber: 5, PhoneNumber: "795154123", Address: "srdjgkyh", Password: "hanan123" },
      { EmployeeId: "4", EmployeeName: "Sharron", TeamNumber: 7, PhoneNumber: "326598741", Address: "fjgfkj", Password: "shgfjv" },
      { EmployeeId: "5", EmployeeName: "Aysha", TeamNumber: 8, PhoneNumber: "546123789", Address: "cjgvv", Password: "aysha123" },
      { EmployeeId: "6", EmployeeName: "Fawaz", TeamNumber: 3, PhoneNumber: "862475931", Address: "xgjfcbv", Password: "chjgfhjgk" },
      { EmployeeId: "7", EmployeeName: "Akshay", TeamNumber: 4, PhoneNumber: "654789321", Address: "fjcjg", Password: "djyfyiti" })

    localStorage.setItem('emplist', JSON.stringify(this.Emplist))

    this.list = JSON.parse(localStorage.getItem('emplist') || '{}')
    
  localStorage.removeItem('currentUser')
  }
  
  authChecking(){
    if(this.authService.checkUser()) return true;
    return false
  }

  deleteDetails(){
    this.authService.deleteUser()
  }
}

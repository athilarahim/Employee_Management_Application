import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from 'src/app/interface';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
 
 list:IEmployee[]=[]
 teamlist:any[]=[]


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.list=JSON.parse(localStorage.getItem('emplist') || '{}')
    this.teamlist=JSON.parse(localStorage.getItem('teamlist') || '{}')

  }

  
  showDetails(object:any) {

    let data = JSON.parse(localStorage.getItem('currentUser') || '{}')
    if (Object.keys(data).length === 0) {
      this.router.navigate(['/login'])
    }
    else {
      
      this.router.navigate(['/employeedetails',object.EmployeeId])
    }



  }

}

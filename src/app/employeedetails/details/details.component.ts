import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEmployee } from 'src/app/interface';
import { LoginComponentComponent } from 'src/app/login/login-component/login-component.component';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  getEmpData:IEmployee[]=[]
  teamlist:any[]=[]

  loggedData:any
  constructor(private route:ActivatedRoute) { 
    
  }

  ngOnInit(): void {  
    this.route.paramMap.subscribe(params=>{
    var det= params.get("id");
    this.getEmpData=JSON.parse(localStorage.getItem('emplist')||'{}')
      for(var i=0;i<this.getEmpData.length;i++){
        if(det==this.getEmpData[i].EmployeeId){
          this.loggedData=this.getEmpData[i]

        }
      }
      console.log(this.loggedData);
      
      
    })
    this.teamlist=JSON.parse(localStorage.getItem('teamlist') || '{}')
    
  }
    
}


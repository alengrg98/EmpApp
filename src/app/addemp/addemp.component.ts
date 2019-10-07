import { Component, OnInit } from '@angular/core';
import { EmpService } from "../emp.service";
import { Router } from "@angular/router";

declare var jQuery: any;

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {
  
  myDate = new Date();
  empdata = {
    eid: 'E'+Math.round(this.myDate.getTime()/1000),
    fname:'',
    lname:'',
    phone:null,
    email:'',
    gender:'',
    employment:'',
    dept:'',
    post:'',
    joindate:'',
    dob:''
  }
  constructor(private emp: EmpService, private router: Router) { }

  ngOnInit() {
    (function ($) {
      $('select').formSelect();
    })(jQuery);
  }

  add(){
    this.emp.addEmp(this.empdata).subscribe();
    this.router.navigateByUrl("/home");
  }

}

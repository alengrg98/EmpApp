import { Component, OnInit } from '@angular/core';
import { EmpService } from "../emp.service";
import { ActivatedRoute, Router } from "@angular/router";
import { DatePipe } from '@angular/common';

declare var jQuery: any;

@Component({
  selector: 'app-editemp',
  templateUrl: './editemp.component.html',
  styleUrls: ['./editemp.component.css'],
  providers: [DatePipe]
})
export class EditempComponent implements OnInit {

  constructor(private emp: EmpService, private router: Router, private route: ActivatedRoute, private datePipe: DatePipe){
  }

  empid;
  empdata={
    eid: '',
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

  ngOnInit() {
    (function ($) {
      $('select').formSelect();
    })(jQuery);

    this.empid = this.route.snapshot.paramMap.get("id");
    this.emp.getEmp1(this.empid).subscribe(data => {
      this.empdata = data[0];
      this.empdata['dob'] = this.datePipe.transform(data[0].dob, 'yyyy-MM-dd');
      this.empdata['joindate'] = this.datePipe.transform(data[0].joindate, 'yyyy-MM-dd');

    })
    
  }

  edit(){
    this.emp.editEmp(this.empdata).subscribe();
    this.router.navigateByUrl("/home");
    
  }

}

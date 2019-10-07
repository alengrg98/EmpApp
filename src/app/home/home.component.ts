import { Component, OnInit } from '@angular/core';
import { EmpService } from "../emp.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private emp: EmpService) { }

  empdata;

  ngOnInit() {
    this.emp.getEmp().subscribe(data => {
      this.empdata = data;
    })
  }

  delete(eid){
    this.emp.deleteEmp(eid).subscribe(data => {
      this.empdata = data;
    })
  }

}

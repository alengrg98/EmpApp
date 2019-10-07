import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { EmpService } from "../emp.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private emp: EmpService) { }
  username;
  password;
  ngOnInit() {
  }

  login(){
    this.emp.login(this.username,this.password).subscribe(data => {
      if(data['found']==true){
        localStorage.setItem("Username",this.username)
        this.router.navigateByUrl("/home");
      }
      else {
        this.router.navigateByUrl("");
      } 
    })
  }

}

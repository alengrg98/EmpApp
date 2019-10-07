import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private http: HttpClient) { }

  addEmp(emp){
    return this.http.post("https://empserver.herokuapp.com/emp/addemp", emp)
  }

  getEmp(){
    return this.http.get("https://empserver.herokuapp.com/emp/getemp")
  }

  getEmp1(eid){
    return this.http.get("https://empserver.herokuapp.com/emp/getemp/"+eid)
  }

  editEmp(emp){
    return this.http.post("https://empserver.herokuapp.com/emp/editemp", emp)
  }

  deleteEmp(eid){
    return this.http.get("https://empserver.herokuapp.com/emp/deleteemp/"+eid)
  }

  login(uname,pwd){
    var log = {username: uname, password: pwd}
    return this.http.post("https://empserver.herokuapp.com/login", log)
  }
}

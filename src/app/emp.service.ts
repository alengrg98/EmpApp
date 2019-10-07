import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private http: HttpClient) { }

  addEmp(emp){
    return this.http.post("http://localhost:8080/emp/addemp", emp)
  }

  getEmp(){
    return this.http.get("http://localhost:8080/emp/getemp")
  }

  getEmp1(eid){
    return this.http.get("http://localhost:8080/emp/getemp/"+eid)
  }

  editEmp(emp){
    return this.http.post("http://localhost:8080/emp/editemp", emp)
  }

  deleteEmp(eid){
    return this.http.get("http://localhost:8080/emp/deleteemp/"+eid)
  }

  login(uname,pwd){
    var log = {username: uname, password: pwd}
    return this.http.post("http://localhost:8080/login", log)
  }
}

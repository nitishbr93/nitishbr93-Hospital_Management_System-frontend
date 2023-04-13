import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { query } from '@angular/animations';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
baseUrl="/api/security"
// baseUrl="http://localhost:8080/api/security"
// baseUrl1="http://localhost:8080"

  constructor(private http:HttpClient,private router:Router) { }

  // dologin(data:any){
  //   return this.http.post("http://localhost:8080/",data)
  // }
  dologin(data:any){
   return  this.http.post(this.baseUrl+"/authenticate",data);
   
    
  }

  signUp(data:any){
    return this.http.post(this.baseUrl+"/updatenew",data)
    
  }

  getAllData() :Observable<any>{
    console.log("service class");
    
    return this.http.get(this.baseUrl+"/admin/getAllData");
  }
  isLogin(){
    if(localStorage.getItem("token")==null || localStorage.getItem("token")===''){
      return true;
    }else{
      return false;
    }
  }
  logout(){
    localStorage.removeItem("token")
    this.router.navigate(["/"]);
  }

  forgetPassword(email:string,phone:number,password:string){
    // return this.http.post(this.baseUrl+"/resetPassword?email=manoj@123&phone=989876787&password=manoj1234567")
    return this.http.post(`${this.baseUrl}/resetPassword?email=${email}&phone=${phone}&password=${password}`,{})
  }
  insertVisitor(data:any){
    return this.http.post(`${this.baseUrl}/insertvisitor`,data);
  }

  getAllPosts(page:number,tableSize:number,field:string): Observable<any> {
    console.log("service page");
    let value=this.http.get(this.baseUrl+"/paginationwithsort?pageNumber="+page+"&pageSize="+tableSize+"&field="+field)
    
    return value;
  }
  advancedSaerch(name:any,email:any,phone:any,city:any,purpose:any,doctor:any,visitingdate:any,appointmentdate:any){
   return this.http.get(`${this.baseUrl}/advanceSearch?name=${name}&email=${email}&phone=${phone}&city=${city}&purpose=${purpose}&doctor=${doctor}&visitingdate=${visitingdate}&appointmentdate=${appointmentdate}`);
  }
  deleteById(id:number,pageNumber:any,pageSize:any,field:any){
    console.log("id id service class:" +id);
    
   return this.http.delete(`${this.baseUrl}/deleteById/${id}/${pageNumber}/${pageSize}/${field}`);
  }
  updateById(id:any,data:any){
    return this.http.put(`${this.baseUrl}/updateById/${id}`,data);
  }
  getById(id:any){
    return this.http.get(`${this.baseUrl}/getById/${id}`);
  }
  globalSearch(data:any){
    return this.http.get(`${this.baseUrl}/getByNameEmail/${data}`)
  }

  sendMail(data:any){
    return this.http.post(`${this.baseUrl}/send`,data);
  }

  loginWithotp(data:any){
    return this.http.post(`${this.baseUrl}/OtpsendwithEmail`,data);
  }
  otpsendByMail(data:any){
    return this.http.post(`${this.baseUrl}/Otpsend`,data);
  }
  fogetPassword(email:any,password:any){
    return this.http.post(`${this.baseUrl}/resetPassword?email=${email}&password=${password}`,'');
  }
}

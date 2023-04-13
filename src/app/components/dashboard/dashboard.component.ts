import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import {MatDrawerMode} from '@angular/material/sidenav';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
 constructor(private http:HttpClient,private router:Router) { }
 name:any;
 rol=false;
 ngOnInit(): void {
   this.name=localStorage.getItem("name");
   if(localStorage.getItem("role")==="ROLE_ADMIN"){
       this.rol=true
   }
   else{
    this.rol=false;
   }
 }

 removeToken(){
  localStorage.removeItem("token");
  localStorage.removeItem("name");
  this.router.navigate([""]);

 }
 opened=true;
}

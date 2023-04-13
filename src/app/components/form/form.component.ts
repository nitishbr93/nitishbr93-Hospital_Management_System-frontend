import { Component,OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { LoginServiceService } from 'src/app/login-service.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor(private service:LoginServiceService){ }

  ngOnInit(): void {

    
    
  }
  userdata:any;
  getData(data:NgForm){
    console.log(data);
    // this.userdata=data;
 let resp= this.service.signUp(data);
resp.subscribe(value=>this.userdata=value)


  }
values:any
  getDataAll(){
    console.log("form class");
    
let res=this.service.getAllData();
res.subscribe((data1:any)=>{
  this.values=data1;
  
})
console.log(this.values);

  }
  
}

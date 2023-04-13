import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginServiceService } from 'src/app/login-service.service';
// import {NgForm } from '@angular/forms'
@Component({
  selector: 'app-updatevisiter',
  templateUrl: './updatevisiter.component.html',
  styleUrls: ['./updatevisiter.component.css']
})
export class UpdatevisiterComponent implements OnInit {
  id:any;
  // data: typeof NgForm | undefined;
  constructor(private service:LoginServiceService, private route:ActivatedRoute){ }
// ngForm:any
users:any;
 ngOnInit(): void {

  this.id=this.route.snapshot.params['id'];
  console.log(this.id);
  
  this.service.getById(this.id).subscribe((data:any)=>{
    console.log(data);
    
    this.users=data;
    console.log(this.users);
    
    console.log(this.users.firstname);
    
    // console.log(this.user.firstname);
    
    // this.data=NgForm;
  })

 }
 message:any

//       getData(data:NgForm)
// {
// console.log(data);
// let res=this.service.insertVisitor(data);
// res.subscribe(data=>this.message=data)

// }
// users:any;
onSubmit(){
  console.log(this.users);
  
  this.service.updateById(this.id,this.users).subscribe((data:any)=>this.message=data.message)
}
}

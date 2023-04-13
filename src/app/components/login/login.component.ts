import { Component,OnInit } from '@angular/core';
// import { NgForm } from "@angular/forms";
import { LoginServiceService } from 'src/app/login-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {FormControl,FormGroup,NgForm,Validators } from '@angular/forms'
import{MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition,MatSnackBarRef}from '@angular/material/snack-bar'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:LoginServiceService,private http:HttpClient,private router:Router,
    private snackBar:MatSnackBar) { }

    registerForm=new FormGroup({

      username:new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
      password:new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")])
    })
    get UserName(): FormControl{
      return this.registerForm.get("username") as FormControl;
    }
    get Password(): FormControl{
      return this.registerForm.get("password") as FormControl;
    }


    signUp=new FormGroup({

      name:new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
          email:new FormControl("",[Validators.required,Validators.email]),
          phone:new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("[0-9]*")]),
          password:new FormControl("",[Validators.required]),
          conformpassword:new FormControl("",[Validators.required]),
           
    })

    get Name(): FormControl{
      return this.signUp.get("name") as FormControl;
    }
    get Email(): FormControl{
      return this.signUp.get("email") as FormControl;
    }
    get Phone(): FormControl{
      return this.signUp.get("phone") as FormControl;
    }
    get Password1(): FormControl{
      return this.signUp.get("password") as FormControl;
    }
    get ConformPassword(): FormControl{
      return this.signUp.get("conformpassword") as FormControl;
    }
    

    reset=new FormGroup({
          email:new FormControl("",[Validators.required,Validators.email]),
          password:new FormControl("",[Validators.required]),
          conformpassword:new FormControl("",[Validators.required]),
           
    })

    get Email1(): FormControl{
      return this.reset.get("email") as FormControl;
    }
    get Password2(): FormControl{
      return this.reset.get("password") as FormControl;
    }
    get ConformPassword1(): FormControl{
      return this.reset.get("conformpassword") as FormControl;
    }

    generatedPassword(){
      console.log(this.reset.value);
      
      if(this.reset.value.password===this.reset.value.conformpassword){
      this.service.fogetPassword(this.reset.value.email,this.reset.value.password).subscribe((data:any)=>{
        this.message=data.message;
      })
      clearTimeout(this.timeup);
      this.timeup=setTimeout(()=>{
      this.notification();
        },2000)
    }else{
      this.message="password not matched";
      this.notification();
    }
    }
    



  ngOnInit(): void {
    
  }
  value:any
 name:any;
 message3:any;

 horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  
 verticalPosition: MatSnackBarVerticalPosition = 'top';
 durationInSeconds = 5;

 notification(){
  this.snackBar.open(this.message,'close', {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition,
    duration: this.durationInSeconds * 1000,
  });
 }
 
  dologin(){
    this.value=this.registerForm.value;
    console.log("value :"+this.value);
    
    this.name=this.value.username;
    localStorage.setItem("name",this.name);
  let res=this.service.dologin(this.value);  
 res.subscribe((value:any)=>{
    if(value.token!==null) {
    localStorage.setItem("token",value.token);
    localStorage.setItem("role",value.role)
    this.router.navigate(["/dashboard/home"]);
   }
   else{
   this.message="user not exist";
   this.notification();
   }
  
  } )
  
  }
  
otp=false;
pass=false;
  userdata:any;
  value1:any
  value2={
    name:"",
    email:"",
    phone:0,
    password:""
  }
  timeup:any;
  message:string="";

  getData(){

    console.log(this.signUp.value.password+","+this.signUp.value.conformpassword);
    if(this.signUp.value.password===this.signUp.value.conformpassword){
this.value2.name=String(this.signUp.value.name)
this.value2.email=String(this.signUp.value.email)
this.value2.phone=Number(this.signUp.value.phone);
this.value2.password=String(this.signUp.value.password);
console.log(this.value2);

    let res= this.service.signUp(this.value2);
    res.subscribe((data:any)=>{
      this.message=data.message;
    })
    clearTimeout(this.timeup);
  this.timeup=setTimeout(()=>{
  this.notification();
    },2000)
      
    }
    else{
      this.message="password not matched";
      this.notification();
      }
  }

//   forgetData:any
//   message1:any
//   resetPassword(data:NgForm){
// this.forgetData=data;
// if(this.forgetData.password===this.forgetData.confirmpassword){
// let res=this.service.forgetPassword(this.forgetData.email,this.forgetData.phone,this.forgetData.password);
// res.subscribe((data:any)=>{
//   this.message=data.message;
//   this.notification();
// })
// }
// else{
//   this.message="password not match";
//   this.notification();
  
// }
//   }


 otpLogin={
    from:"sinhasuresh763@gmail.com",
    to:"",
    subject:"Otp", 
    "mobile":""
}
email1:any;
EmailOtp:number=0;
MobileOtp:number=0;
timer:any
display:any;
otptimer=false;

loginWithotp(email:any,Mobile:any){
  console.log(`email:${email}, mobile:${Mobile}`);
  this.email1=email;
  this.otpLogin.to=this.email1;
  this.otpLogin.mobile=`+91${Mobile}`;
  console.log(this.otpLogin.mobile+","+this.otpLogin.to);
  
  if(this.otpLogin.to !='' && this.otpLogin.mobile !=''){
  this.otp=true;
  // this.message="otp genetated successfully"
 let res =this.service.loginWithotp(this.otpLogin);
 this.timer1(1)
//  this.notification();  
    res.subscribe((data:any)=>{
      this.EmailOtp=data.emailOtp;
      this.MobileOtp=data.mobileOtp;
      console.log(`return email otp: ${this.EmailOtp}, mobile otp ${this.MobileOtp}`);
     
        
     
})  
  }else{
    this.message="email mobile should not be null";
    this.notification();
  }  

  
  
}
enabelButton=true;
generateButton=false
timer1(minute:number) {
  this.enabelButton=true;
  this.otptimer=true;
  this.generateButton=true;
  let seconds: number = minute * 60;
  let textSec: any = "0";
  let statSec: number = 60;

  const prefix = minute < 10 ? "0" : "";

  const timer = setInterval(() => {
    seconds--;
    if (statSec != 0) statSec--;
    else statSec = 59;

    if (statSec < 10) {
      textSec = "0" + statSec;
    } else textSec = statSec;

    this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;

    if (seconds == 0) {
      console.log("finished");
      clearInterval(timer);
      this.otptimer=false;
      this.generateButton=false;
      this.enabelButton=false;
    }
  }, 1000);
}

otpVarify(data1:any,data2:any){
  if(data1==this.EmailOtp && data2==this.MobileOtp){
        this.pass=true;
  }
  else{
    this.message="Otp not match";
    this.notification();
  }
}

SendMail={
  from:"sinhasuresh763@gmail.com",
  to:"",
  subject:"otp verifaction",
  message:""
}
otpmessage:any;
otpbox=false;
emailotpdata:string="";
emaildata:any;
loginWithemailOtp(data:any){
this.emaildata=data
  console.log(data);
  
  this.SendMail.to=this.emaildata;

  console.log("email data"+this.emaildata);
  console.log("email data"+this.SendMail.to);
  if(this.SendMail.to!=""){
  
  let res=this.service.otpsendByMail(this.SendMail);
  res.subscribe((data:any)=>{
    this.otpmessage=data.mobile;
    this.emailotpdata=data.otp;
    console.log("emailotp data = "+this.emailotpdata);


    
  })
  clearTimeout(this.timeup);
  this.timeup=setTimeout(()=>{
    if(this.emailotpdata===""){
      this.message="user not exist";
      this.notification();
    }
    else{
      this.otp=true;
      this.otp2=true;
      this.timer1(1)
    }
    },6000)
  }
  else{
    this.message="email should be reduired";
    this.notification();
  }

}
otp2=false
resetpassfooret=false;
emailotpVarify(value:any){
  console.log(value);
  console.log("email otp"+this.emailotpdata);
  let localotp=String(value);
  
  if(localotp===this.emailotpdata){
    console.log(value);
    
  //  this.resetpassfooret=true
  this.pass=true;
  this.otp=false;
  this.otp2=false;
  this.generateOtp=false;
  this.otptimre1=false;
  this.resetpassfooret=true;
  
 }else{
  this.message="otp not matched";
  this.notification();
 }
}
generateOtp=true;
otptimre1=true;
}
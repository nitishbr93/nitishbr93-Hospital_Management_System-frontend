import { Component,OnInit } from '@angular/core';
import {FormControl,FormGroup,NgForm,Validators } from '@angular/forms'
import { LoginServiceService } from 'src/app/login-service.service';
import{MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition,MatSnackBarRef}from '@angular/material/snack-bar'
@Component({
  selector: 'app-registation',
  templateUrl: './registation.component.html',
  styleUrls: ['./registation.component.css']
})
export class RegistationComponent implements OnInit{
  
     
      constructor(private service:LoginServiceService,
        private snackBar:MatSnackBar){ }


        registerForm=new FormGroup({

          firstname:new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
          lastname:new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
              email:new FormControl("",[Validators.required,Validators.email]),
              phone:new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("[0-9]*")]),
              address:new FormControl("",[Validators.required]),
              gender:new FormControl("",[Validators.required]),
              visitingdate:new FormControl("",[Validators.required]),
              city:new FormControl("",[Validators.required]),
              age:new FormControl(0,[Validators.required]),
              state:new FormControl("",[Validators.required]),
              fee:new FormControl("",[Validators.required]),
              doctor:new FormControl("",[Validators.required]),
              purpose:new FormControl("",[Validators.required]),
              appointmenttime:new FormControl("",[Validators.required]),
              appointmentdate:new FormControl("",[Validators.required])
             
      
        })

        get Firstname(): FormControl{
          return this.registerForm.get("firstname") as FormControl;
        }
        get Lastname(): FormControl{
          return this.registerForm.get("lastname") as FormControl;
        }
        get Email(): FormControl{
          return this.registerForm.get("email") as FormControl;
        }
        get Phone(): FormControl{
          return this.registerForm.get("phone") as FormControl;
        }
        get Address(): FormControl{
          return this.registerForm.get("address") as FormControl;
        }
        get State(): FormControl{
          return this.registerForm.get("state") as FormControl;
        }
        get Age(): FormControl{
          return this.registerForm.get("age") as FormControl;
        }
        
        get Gender(): FormControl{
          return this.registerForm.get("gender") as FormControl;
        }
        get City(): FormControl{
          return this.registerForm.get("city") as FormControl;
        }
        get Visitingdate(): FormControl{
          return this.registerForm.get("visitingdate") as FormControl;
        }
        get Appointmenttime(): FormControl{
          return this.registerForm.get("appointmenttime") as FormControl;
        }
       
        get Appointmentdate(): FormControl{
          return this.registerForm.get("appointmentdate") as FormControl;
        }
       
        get Purpose(): FormControl{
          return this.registerForm.get("purpose") as FormControl;
        }
        get Doctor(): FormControl{
          return this.registerForm.get("doctor") as FormControl;
        }
        get Fee(): FormControl{
          return this.registerForm.get("fee") as FormControl;
        }
        message:any;

        SendMail={
          from:"sinhasuresh763@gmail.com",
          to:"",
          subject:"Registration Information",
          message:""
        }
        email:any;
        emailResponse:any;
message1:any;
  onSubmit(){
    // this.message="data inserted successfully"
console.log(this.registerForm.value);
let res=this.service.insertVisitor(this.registerForm.value);
res.subscribe((data:any)=>{
  console.log(data);
  
this.message1=data.message
  });


console.log("message1 :"+this.message);

    this.SendMail.message="Hii "+this.registerForm.value.firstname +"your registration is completed successfully on dated : "+this.registerForm.value.visitingdate +"and your appoinment date is : "+this.registerForm.value.appointmentdate+" and appointment timing :"+this.registerForm.value.appointmenttime+" and your fee status :"+this.registerForm.value.fee+" and assign doctor "+this.registerForm.value.doctor +"for "+this.registerForm.value.purpose;

    this.email=this.registerForm.value.email;
    this.SendMail.to=this.email;
    console.log(this.SendMail.message);
    

  let res1= this.service.sendMail(this.SendMail);
  res1.subscribe((data:any)=>{
    this.emailResponse=data.message;

  })
  this.notification();
  


        }
        


      ngOnInit(): void {
        
      }

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
}


// ------------------------------------------------------------------------------------------

// import { Component,OnInit } from '@angular/core';
// import {FormControl,FormGroup,NgForm,Validators } from '@angular/forms'
// import { LoginServiceService } from 'src/app/login-service.service';
// import{MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition,MatSnackBarRef}from '@angular/material/snack-bar'
// @Component({
//   selector: 'app-registation',
//   templateUrl: './registation.component.html',
//   styleUrls: ['./registation.component.css']
// })
// export class RegistationComponent implements OnInit{
  
     
//       constructor(private service:LoginServiceService,
//         private snackBar:MatSnackBar){ }

//       ngOnInit(): void {
        
//       }
// message:any
// horizontalPosition: MatSnackBarHorizontalPosition = 'right';
//  verticalPosition: MatSnackBarVerticalPosition = 'top';
//  durationInSeconds = 5;

//       getData(data:NgForm)
// {
// console.log(data);
// let res=this.service.insertVisitor(data);
// res.subscribe((data:any)=>this.message=data.message);
// this.notification();

// }
// notification(){
//   this.snackBar.open(this.message,'close', {
//     horizontalPosition: this.horizontalPosition,
//     verticalPosition: this.verticalPosition,
//     duration: this.durationInSeconds * 1000,
//   });
//  }
// }


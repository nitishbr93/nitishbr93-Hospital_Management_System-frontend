import { Component,OnInit,TemplateRef } from '@angular/core';
import { LoginServiceService } from 'src/app/login-service.service';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-lagout',
  templateUrl: './lagout.component.html',
  styleUrls: ['./lagout.component.css']
})
export class LagoutComponent implements OnInit {
constructor(private service:LoginServiceService,private router :Router,private modalService: BsModalService){}
pageSize:number=5;
pageNumber:number=0;
totalElement:any;
totalpage:any
fieldname:string="firstname";
allData:any;
ngOnInit(): void {
let res= this.service.getAllPosts(this.pageNumber,this.pageSize,this.fieldname);
res.subscribe((data:any)=>{
  this.allData=data.content;
  this.totalElement=data.totalElements;
  this.totalpage=data.totalPages
})

}
pagination(value:any){
console.log("hiii");

console.log(value);
this.pageSize=value;
this.ngOnInit();
}
nextprev(type:string){
if(type==='add' && this.pageNumber<this.totalpage){
  this.pageNumber++;
  this.ngOnInit();
}
if(type==='minus' && this.pageNumber>0){
  this.pageNumber--;
  this.ngOnInit();
}
if(type==='add' && this.pageNumber==this.totalpage){
  this.pageNumber=0;
  this.ngOnInit()
}


}


advanceSearch(name:any,email:any,phone:any,city:any,purpose:any,doctor:any,visitingdate:any,appointmentdate:any){
  console.log(name);
  
this.service.advancedSaerch(name,email,phone,city,purpose,doctor,visitingdate,appointmentdate).subscribe(data=>{
  this.allData=data;
})
// this.ngOnInit();

}
timer:any
pageWithData(event:any){
 console.log("event :"+event);
 clearTimeout(this.timer);
  this.timer=setTimeout(()=>{
   this.pageNumber=event-1
   this.ngOnInit();
   
    
  },1000)

 
}
deleteData(){
  // console.log("id :"+id );
  
  this.service.deleteById(this.data,this.pageNumber,this.pageSize,this.fieldname).subscribe((data:any)=>{
    this.allData=data.content;
    this.allData=data.content;
    this.totalElement=data.totalElements;
    this.totalpage=data.totalPages
  })

  // this.ngOnInit();
}
// deleteData(id:number){
//   console.log("id :"+id );
  
//   this.service.deleteById(id,this.pageNumber,this.pageSize,this.fieldname).subscribe((data:any)=>this.allData=data.content)

// }
update(id:any){
// this.router.navigate
console.log("id :"+id);

this.router.navigate(['dashboard/update',id] );
}
opened=false;

globalSearch(data:any){
  console.log("data ="+data);
  
if(data !=='' ){
  clearTimeout(this.timer);
  this.timer=setTimeout(()=>{
    this.service.globalSearch(data).subscribe(value=>{
    
      this.allData=value
    })
   
    
  },1000)
}
else{
  console.log("else work");
  
  this.ngOnInit();
}
}

modalRef?: BsModalRef | null;
modalRef2?: BsModalRef;
data:any;
openModal(template: TemplateRef<any>,id:any) {
  this.data=id;
  this.modalRef = this.modalService.show(template, { id: 1, class: 'modal-lg' });
}

closeModal(){
  this.modalService.hide();
  console.log("hiii");
  
}
closeModal1(){
  this.modalService.hide();
  console.log(this.data);
  this.deleteData();
  
}


}

import { Component,OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginServiceService } from 'src/app/login-service.service';
@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent implements OnInit {
  
  constructor(private service:LoginServiceService, private route:ActivatedRoute){ }
  id:any;
  users:any;
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
  this.service.getById(this.id).subscribe((data:any)=>{
    this.users=data;
  })

  }

}


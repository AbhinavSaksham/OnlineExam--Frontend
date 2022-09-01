import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Report } from '../Models/Report';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  
  constructor(private activatedrouter: ActivatedRoute,private _service: UserServiceService) { }

  tid: number=0;

  name?:string;
  ngOnInit(): void {

    this.tid=this.activatedrouter.snapshot.params["user-id"];
    this._service.getUserbyId(this.tid).subscribe(res=>{console.log(res);
    this.name=res.firstname+" "+res.lastname;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-transferfunds',
  templateUrl: './transferfunds.component.html',
  styleUrls: ['./transferfunds.component.css']
})
export class TransferfundsComponent implements OnInit {
funds:any;
  updateddata: any;
  constructor(private router:Router,private httpService:HttpClient) { }

  ngOnInit() {
    this.funds=localStorage.getItem("accountnum");
    if(this.funds ==null || this.funds ==undefined)
   this.router.navigateByUrl('/login');
  
  }
  transferFunds(){
    this.httpService.post("","").subscribe((data:any)=>{
      this.updateddata=data;
      console.log(this.updateddata);
    })
  }
}

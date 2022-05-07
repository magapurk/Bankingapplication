import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'
import { transferfunds } from 'src/app/models/transferfunds';
@Component({
  selector: 'app-transferfunds',
  templateUrl: './transferfunds.component.html',
  styleUrls: ['./transferfunds.component.css']
})
export class TransferfundsComponent implements OnInit {

  updateddata: any;
  fundsmodal:transferfunds = {
    fromfunds :0,
    toaccount:0,
    amount:0
  };

  constructor(private router:Router,private httpService:HttpClient) { 
  }

  ngOnInit() {
    this.fundsmodal.fromfunds=localStorage.getItem("accountnum");
    //if(this.fundsmodal.funds ==null || this.fundsmodal.funds ==undefined)
   //this.router.navigateByUrl('/login');
  
  }
  transferFunds(){
    this.httpService.post("http://localhost:5000/api/Account/fundTranser",this.fundsmodal).subscribe((data:any)=>{
      this.updateddata=data;
      console.log(this.updateddata);
    })
    console.log(this.fundsmodal)
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-transferfunds',
  templateUrl: './transferfunds.component.html',
  styleUrls: ['./transferfunds.component.css']
})
export class TransferfundsComponent implements OnInit {
funds:any;
  constructor(private router:Router) { }

  ngOnInit() {
    this.funds=localStorage.getItem("accountnum");
    if(this.funds ==null || this.funds ==undefined)
   this.router.navigateByUrl('/login');
  
  }
 
}

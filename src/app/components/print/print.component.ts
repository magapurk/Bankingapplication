import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {

  constructor(private router:Router) { }
  accountvalue:any;
  ngOnInit() {
    this.accountvalue=localStorage.getItem("accountnum");
   if(this.accountvalue ==null || this.accountvalue ==undefined){
    this.router.navigateByUrl('/login');
   }
  }

}

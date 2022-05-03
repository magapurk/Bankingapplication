import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-showbal',
  templateUrl: './showbal.component.html',
  styleUrls: ['./showbal.component.css']
})
export class ShowbalComponent implements OnInit {
accountvalue:any
  info: any;
  updateddata: any;
  
  constructor(private router:Router,private httpService:HttpClient) { }

  ngOnInit() {
  
   this.accountvalue=localStorage.getItem("accountnum");
   if(this.accountvalue ==null || this.accountvalue ==undefined)
   this.router.navigateByUrl('/login');
   this.showBal();
  }

  counter(i: number) {
    return new Array(i);
}
showBal(){
  this.httpService.get(`/showbal?accountnum=${this.accountvalue}`).subscribe((data:any)=>{
    this.info=data;
    console.log(this.info);
  })
}
// updateData(){
//   this.httpService.post("","").subscribe((data:any)=>{
//     this.updateddata=data;
//     console.log(this.updateddata);
//   })
// }
}

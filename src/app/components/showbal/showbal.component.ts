import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-showbal',
  templateUrl: './showbal.component.html',
  styleUrls: ['./showbal.component.css']
})
export class ShowbalComponent implements OnInit {
accountvalue:any
  constructor(private router:Router) { }

  ngOnInit() {
  
   this.accountvalue=localStorage.getItem("accountnum");
   if(this.accountvalue ==null || this.accountvalue ==undefined)
   this.router.navigateByUrl('/login');
  }

  counter(i: number) {
    return new Array(i);
}

}

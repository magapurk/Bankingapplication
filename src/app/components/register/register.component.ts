import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  accno: any;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  onSubmit(){   

    localStorage.setItem('accountnum', "123456789");
    localStorage.getItem("accountnum");
    this.router.navigateByUrl('/showbal');
  }
  onCancel(){
    this.router.navigateByUrl('/login');
  }
}

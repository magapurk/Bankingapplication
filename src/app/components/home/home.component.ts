import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Bankingapplication';
  constructor(private router:Router) { }
  
  ngOnInit() {    
  }
  
  showbal()
  {
    this.router.navigateByUrl('/showbal')
  }
  trnsfund()
  {
    this.router.navigateByUrl('/transferfunds')
  }
  payment()
  {
    this.router.navigateByUrl('/payment')
  }
  print()
  {
    this.router.navigateByUrl('/print')
  }
  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/login');   
  }
}

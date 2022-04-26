import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ShowbalComponent } from './components/showbal/showbal.component';
import { TransferfundsComponent } from './components/transferfunds/transferfunds.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PrintComponent } from './components/print/print.component';
const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'showbal',
    component:ShowbalComponent
  },
  {
    path:'transferfunds',
    component:TransferfundsComponent
  },
  {
    path:'payment',
    component:PaymentComponent
  },
  {
    path:'print',
    component:PrintComponent
  },
  {
    path:'**',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ShowbalComponent } from './components/showbal/showbal.component';
import { TransferfundsComponent } from './components/transferfunds/transferfunds.component';
import { PrintComponent } from './components/print/print.component';
import { PaymentComponent } from './components/payment/payment.component';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DxButtonModule } from 'devextreme-angular';
import {DxDataGridModule} from 'devextreme-angular';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ShowbalComponent,
    TransferfundsComponent,    
    PrintComponent,
    PaymentComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DxButtonModule,
    DxDataGridModule,
    HttpClientModule,
    BackButtonDisableModule.forRoot({
      preserveScrollPosition: true
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

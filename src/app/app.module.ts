import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IntercepInterceptor } from './intercep.interceptor';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
// import {MatToolbarModule  } from "@angular/material/toolbar";
// import {MatSidenavModule  } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import {MatListModule } from "@angular/material/list";
import {MatButtonModule } from "@angular/material/button";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import { LagoutComponent } from './components/lagout/lagout.component';
import { RegistationComponent } from './components/registation/registation.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import{ReactiveFormsModule} from '@angular/forms';
import { UpdatevisiterComponent } from './components/updatevisiter/updatevisiter.component';
import { ViewDataComponent } from './components/view-data/view-data.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SingupComponent } from './components/singup/singup.component';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent,
    LoginComponent,
    ForgetPasswordComponent,
   DashboardComponent,
   LagoutComponent,
   RegistationComponent,
   UpdatevisiterComponent,
   ViewDataComponent,
   SingupComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSnackBarModule, 
    MatSelectModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatDialogModule,
    ModalModule.forRoot()
    
   
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,useClass:IntercepInterceptor,
    multi:true  
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }


//-----------------------------------------------------------------

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from "@angular/forms";
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { NavbarComponent } from './components/navbar/navbar.component';
// import { FormComponent } from './components/form/form.component';
// import { HomeComponent } from './components/home/home.component';
// import { LoginComponent } from './components/login/login.component';
// import { HttpClientModule } from '@angular/common/http';
// import { DashboardComponent } from './dashboard/dashboard.component';


// @NgModule({
//   declarations: [
//     AppComponent,
//     NavbarComponent,
//     FormComponent,
//     HomeComponent,
//     LoginComponent,
//     DashboardComponent,
    
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule,
//     HttpClientModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

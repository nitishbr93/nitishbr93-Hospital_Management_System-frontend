import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { AuthGuardComponent } from './components/auth-guard/auth-guard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { LagoutComponent } from './components/lagout/lagout.component';
import { LoginComponent } from './components/login/login.component';
import { RegistationComponent } from './components/registation/registation.component';
import { SingupComponent } from './components/singup/singup.component';
import { UpdatevisiterComponent } from './components/updatevisiter/updatevisiter.component';
import { ViewDataComponent } from './components/view-data/view-data.component';

// import { DashboardComponent } from './components/dashboard.component';

const routes: Routes = [
  
  {
    path:'form',
    component:FormComponent,pathMatch:'full'
  },{
    path:'',component:LoginComponent,pathMatch:'full'
  },{
    path:'login',component:LoginComponent,pathMatch:'full'
  },{
    path:'signup',component:SingupComponent,pathMatch:'full'
  }

  ,{
    path:'forgetPassword',component:ForgetPasswordComponent,pathMatch:'full'
  },{
    path:'dashboard',component:DashboardComponent,canActivate: [AuthGuardService],
    children:[
      {
        path:'home',component:HomeComponent
      },
      {
        path:'lagout',component:LagoutComponent
      },
      {
        path:'regisrtation',component:RegistationComponent
      },
      {
        path:'lagout/update/:id',component:UpdatevisiterComponent
      }
      ,
      {
        path:'lagout/view/:id',component:ViewDataComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Routes } from '@angular/router';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { AlertComponent } from './alert/alert.component';
import { MonitorComponent } from './monitor/monitor.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TransactionPreviewComponent } from './transaction-preview/transaction-preview.component';

export const routes: Routes = [
    {path: '', component: HomeComponent },
    {path:'login', component: LoginComponent },
    {path:'dashboard', component: MainDashboardComponent},
    {path:"alert", component:AlertComponent},
    {path:"monitor", component:MonitorComponent},
    {path:"transactions/:transactionId", component:TransactionPreviewComponent}
];

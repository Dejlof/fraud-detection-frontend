import { Routes } from '@angular/router';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { AlertComponent } from './alert/alert.component';
import { MonitorComponent } from './monitor/monitor.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactSuccessComponent } from './transact-success/transact-success.component';
import { TransactFailedComponent } from './transact-failed/transact-failed.component';

export const routes: Routes = [
    {path: '', component: HomeComponent },
    {path:'login', component: LoginComponent },
    {path:'dashboard', component: MainDashboardComponent},
    {path:"alert", component:AlertComponent},
    {path:"monitor", component:MonitorComponent},
    {path:"transaction", component:TransactionComponent},
    {path:"transaction-successful", component:TransactSuccessComponent},
    {path:"transaction-failed", component:TransactFailedComponent}
];

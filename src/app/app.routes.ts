import { Routes } from '@angular/router';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { AlertComponent } from './alert/alert.component';
import { MonitorComponent } from './monitor/monitor.component';

export const routes: Routes = [
    {path:"", component:MainDashboardComponent},
    {path:"alert", component:AlertComponent},
    {path:"monitor", component:MonitorComponent}
];

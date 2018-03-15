import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./components/auth/auth.component";
import {CuratorComponent} from "./components/curator/curator.component";
import {ElderCuratorComponent} from "./components/elder-curator/elder-curator.component";
import {NavbarComponent} from "./components/admin/navbar.component";
import {CuratorScheduleComponent} from "./components/curator/pages/curator-schedule/curator-schedule.component";
import {CuratorDeadlinesComponent} from "./components/curator/pages/curator-deadlines/curator-deadlines.component";
import {CuratorProfileComponent} from "./components/curator/pages/curator-profile/curator-profile.component";

const routes: Routes = [
  { path: '', redirectTo: '/curator', pathMatch: 'full' },
  {path: 'auth', component: AuthComponent},
  {path: 'curator', component: CuratorComponent, children:[
    { path: '', redirectTo: 'profile', pathMatch: "full"},
    {path: 'schedule', component: CuratorScheduleComponent},
    {path: 'deadlines', component: CuratorDeadlinesComponent},
    {path: 'profile', component: CuratorProfileComponent}
  ]},
  {path: 'elder', component: ElderCuratorComponent},
  {path: 'admin', component: NavbarComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

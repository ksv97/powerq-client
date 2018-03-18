import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./components/auth/auth.component";
import {CuratorComponent} from "./components/curator/curator.component";
import {ElderCuratorComponent} from "./components/elder-curator/elder-curator.component";
import {NavbarComponent} from "./components/admin/navbar.component";
import {CuratorScheduleComponent} from "./components/curator/pages/curator-schedule/curator-schedule.component";
import {CuratorDeadlinesComponent} from "./components/curator/pages/curator-deadlines/curator-deadlines.component";
import {CuratorProfileComponent} from "./components/curator/curator-profile/curator-profile.component";
import {MyFeedbacksComponent} from "./components/curator/pages/my-feedbacks/my-feedbacks.component";
import {AllFeedbacksComponent} from "./components/curator/pages/all-feedbacks/all-feedbacks.component";
import {ElderProfileComponent} from "./components/elder-curator/elder-profile/elder-profile.component";
import {FacultyProfileComponent} from "./components/elder-curator/pages/faculty-profile/faculty-profile.component";
import {FacultyCuratorsComponent} from "./components/elder-curator/pages/faculty-curators/faculty-curators.component";
import {CuratorProfilePageComponent} from "./components/curator/pages/curator-profile-page/curator-profile-page.component";
import {ElderProfilePageComponent} from "./components/elder-curator/pages/elder-profile-page/elder-profile-page.component";
import {ElderSchedulePageComponent} from "./components/elder-curator/pages/elder-schedule-page/elder-schedule-page.component";
import {FacultySchedulePageComponent} from "./components/elder-curator/pages/faculty-schedule-page/faculty-schedule-page.component";

const routes: Routes = [
  { path: '', redirectTo: '/elder', pathMatch: 'full' },
  {path: 'auth', component: AuthComponent},
  {path: 'curator', component: CuratorComponent, children:[
    { path: '', redirectTo: 'profile', pathMatch: "full"},
    {path: 'schedule', component: CuratorScheduleComponent},
    {path: 'deadlines', component: CuratorDeadlinesComponent},
    {path: 'profile', component: CuratorProfilePageComponent},
    {path: 'my-feedbacks', component: MyFeedbacksComponent},
    {path: 'all-feedbacks', component: AllFeedbacksComponent}
  ]},
  {path: 'elder', component: ElderCuratorComponent, children: [
    { path: '', redirectTo: 'profile', pathMatch: "full"},
    {path: 'profile', component: ElderProfilePageComponent},
    {path: 'faculty-profile', component: FacultyProfileComponent},
    {path: 'faculty-curators', component: FacultyCuratorsComponent},
    {path: 'faculty-schedule', component: FacultySchedulePageComponent},
    {path: 'schedule', component: ElderSchedulePageComponent},
  ]},
  {path: 'admin', component: NavbarComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

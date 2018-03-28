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
import {AllFeedbacksComponent} from "./components/all-feedbacks/all-feedbacks.component";
import {ElderProfileComponent} from "./components/elder-curator/elder-profile/elder-profile.component";
import {FacultyProfileComponent} from "./components/elder-curator/pages/faculty-profile/faculty-profile.component";
import {FacultyCuratorsComponent} from "./components/elder-curator/pages/faculty-curators/faculty-curators.component";
import {CuratorProfilePageComponent} from "./components/curator/pages/curator-profile-page/curator-profile-page.component";
import {ElderProfilePageComponent} from "./components/elder-curator/pages/elder-profile-page/elder-profile-page.component";
import {ElderSchedulePageComponent} from "./components/elder-curator/pages/elder-schedule-page/elder-schedule-page.component";
import {FacultySchedulePageComponent} from "./components/elder-curator/pages/faculty-schedule-page/faculty-schedule-page.component";
import {ElderDeadlinesPageComponent} from "./components/elder-curator/pages/elder-deadlines-page/elder-deadlines-page.component";
import {FacultyDeadlinesPageComponent} from "./components/elder-curator/pages/faculty-deadlines-page/faculty-deadlines-page.component";
import {ElderFeedbacksPageComponent} from "./components/elder-curator/pages/elder-feedbacks-page/elder-feedbacks-page.component";
import {CuratorFeedbacksPageComponent} from "./components/curator/pages/curator-feedbacks-page/curator-feedbacks-page.component";
import {FacultyFeedbacksPageComponent} from "./components/elder-curator/pages/faculty-feedbacks-page/faculty-feedbacks-page.component";
import {UsersPageComponent} from "./components/admin/pages/users-page/users-page.component";
import {AdminSchedulePageComponent} from "./components/admin/pages/admin-schedule-page/admin-schedule-page.component";
import {AdminDeadlinesPageComponent} from "./components/admin/pages/admin-deadlines-page/admin-deadlines-page.component";
import {FacultyListPageComponent} from "./components/admin/pages/faculty-list-page/faculty-list-page.component";
import {FeedbackFormsPageComponent} from "./components/admin/pages/feedback-forms-page/feedback-forms-page.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import  {RegisterCuratorComponent} from "./components/register-curator/register-curator.component"

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  {path: 'auth', component: AuthComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'register-curator', component: RegisterCuratorComponent},
  {path: 'curator', component: CuratorComponent, children:[
    { path: '', redirectTo: 'profile', pathMatch: "full"},
    {path: 'schedule', component: CuratorScheduleComponent},
    {path: 'deadlines', component: CuratorDeadlinesComponent},
    {path: 'profile', component: CuratorProfilePageComponent},
    {path: 'my-feedbacks', component: MyFeedbacksComponent},
    {path: 'all-feedbacks', component: CuratorFeedbacksPageComponent}
  ]},
  {path: 'elder', component: ElderCuratorComponent, children: [
    { path: '', redirectTo: 'profile', pathMatch: "full"},
    {path: 'profile', component: ElderProfilePageComponent},
    {path: 'faculty-profile', component: FacultyProfileComponent},
    {path: 'faculty-curators', component: FacultyCuratorsComponent},
    {path: 'faculty-schedule', component: FacultySchedulePageComponent},
    {path: 'faculty-deadlines', component: FacultyDeadlinesPageComponent},
    {path: 'faculty-feedbacks', component: FacultyFeedbacksPageComponent},
    {path: 'schedule', component: ElderSchedulePageComponent},
    {path: 'deadlines', component: ElderDeadlinesPageComponent},
    {path: 'all-feedbacks', component: ElderFeedbacksPageComponent}
  ]},
  {path: 'admin', component: NavbarComponent, children: [
    {path: 'users', component: UsersPageComponent},
    {path: 'schedule', component: AdminSchedulePageComponent},
    {path: 'deadlines', component: AdminDeadlinesPageComponent},
    {path: 'faculties', component: FacultyListPageComponent},
    {path: 'feedback-forms', component: FeedbackFormsPageComponent},
  ]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

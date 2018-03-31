import { BrowserModule } from '@angular/platform-browser';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import  {HttpClientModule} from '@angular/common/http'
import  {registerLocaleData} from '@angular/common'
import  localeRu from '@angular/common/locales/ru'

registerLocaleData(localeRu, 'ru');

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/admin/navbar.component';
import { AuthComponent } from './components/auth/auth.component';
import { CuratorComponent } from './components/curator/curator.component';
import { ElderCuratorComponent } from './components/elder-curator/elder-curator.component';
import { CuratorProfileComponent } from './components/curator/curator-profile/curator-profile.component';
import { CuratorScheduleComponent } from './components/curator/pages/curator-schedule/curator-schedule.component';
import { CuratorDeadlinesComponent } from './components/curator/pages/curator-deadlines/curator-deadlines.component';
import {FormsModule} from "@angular/forms";
import { AddEventComponent } from './components/add-event/add-event.component';
import { AddFeedbackComponent } from './components/add-feedback/add-feedback.component';
import { AppRoutingModule } from './app-routing.module';
import { AddDeadlineComponent } from './components/add-deadline/add-deadline.component';
import { MyFeedbacksComponent } from './components/curator/pages/my-feedbacks/my-feedbacks.component';
import { EditFeedbackComponent } from './components/edit-feedback/edit-feedback.component';
import { AllFeedbacksComponent } from './components/all-feedbacks/all-feedbacks.component';
import { ElderProfileComponent } from './components/elder-curator/elder-profile/elder-profile.component';
import { FacultyProfileComponent } from './components/elder-curator/pages/faculty-profile/faculty-profile.component';
import { FacultyCuratorsComponent } from './components/elder-curator/pages/faculty-curators/faculty-curators.component';
import { CuratorProfilePageComponent } from './components/curator/pages/curator-profile-page/curator-profile-page.component';
import { ElderProfilePageComponent } from './components/elder-curator/pages/elder-profile-page/elder-profile-page.component';
import { ElderSchedulePageComponent } from './components/elder-curator/pages/elder-schedule-page/elder-schedule-page.component';
import { FacultySchedulePageComponent } from './components/elder-curator/pages/faculty-schedule-page/faculty-schedule-page.component';
import { ScheduleElementComponent } from './components/schedule-element/schedule-element.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { DeadlineElementComponent } from './components/deadline-element/deadline-element.component';
import { DeadlinesComponent } from './components/deadlines/deadlines.component';
import { ElderDeadlinesPageComponent } from './components/elder-curator/pages/elder-deadlines-page/elder-deadlines-page.component';
import { FacultyDeadlinesPageComponent } from './components/elder-curator/pages/faculty-deadlines-page/faculty-deadlines-page.component';
import { ElderFeedbacksPageComponent } from './components/elder-curator/pages/elder-feedbacks-page/elder-feedbacks-page.component';
import { CuratorFeedbacksPageComponent } from './components/curator/pages/curator-feedbacks-page/curator-feedbacks-page.component';
import { FacultyFeedbacksPageComponent } from './components/elder-curator/pages/faculty-feedbacks-page/faculty-feedbacks-page.component';
import { UsersPageComponent } from './components/admin/pages/users-page/users-page.component';
import { AdminSchedulePageComponent } from './components/admin/pages/admin-schedule-page/admin-schedule-page.component';
import { AdminDeadlinesPageComponent } from './components/admin/pages/admin-deadlines-page/admin-deadlines-page.component';
import { FacultyListPageComponent } from './components/admin/pages/faculty-list-page/faculty-list-page.component';
import { FeedbackFormsPageComponent } from './components/admin/pages/feedback-forms-page/feedback-forms-page.component';
import { AddFeedbackFormComponent } from './components/add-feedback-form/add-feedback-form.component';
import { RegistrationComponent } from './components/registration/registration.component';
import {HttpService} from "./services/http.service";
import { MessagesComponent } from './components/messages/messages.component';
import {MessageService} from "./services/message.service";
import {NgSelectModule} from "@ng-select/ng-select";
import { RegisterCuratorComponent } from './components/register-curator/register-curator.component';
import { ShareService } from './services/share.service';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { RegisterElderComponent } from './components/register-elder/register-elder.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthComponent,
    CuratorComponent,
    ElderCuratorComponent,
    CuratorProfileComponent,
    CuratorScheduleComponent,
    CuratorDeadlinesComponent,
    AddEventComponent,
    AddFeedbackComponent,
    AddDeadlineComponent,
    MyFeedbacksComponent,
    EditFeedbackComponent,
    AllFeedbacksComponent,
    ElderProfileComponent,
    FacultyProfileComponent,
    FacultyCuratorsComponent,
    CuratorProfilePageComponent,
    ElderProfilePageComponent,
    ElderSchedulePageComponent,
    FacultySchedulePageComponent,
    ScheduleElementComponent,
    ScheduleComponent,
    DeadlineElementComponent,
    DeadlinesComponent,
    ElderDeadlinesPageComponent,
    FacultyDeadlinesPageComponent,
    ElderFeedbacksPageComponent,
    CuratorFeedbacksPageComponent,
    FacultyFeedbacksPageComponent,
    UsersPageComponent,
    AdminSchedulePageComponent,
    AdminDeadlinesPageComponent,
    FacultyListPageComponent,
    FeedbackFormsPageComponent,
    AddFeedbackFormComponent,
    RegistrationComponent,
    MessagesComponent,
    RegisterCuratorComponent,
    EditEventComponent,
    RegisterElderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    NgSelectModule,
    Angular2FontawesomeModule
  ],
  providers: [HttpService, MessageService, ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }

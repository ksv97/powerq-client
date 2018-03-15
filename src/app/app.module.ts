import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/admin/navbar.component';
import { AuthComponent } from './components/auth/auth.component';
import { CuratorComponent } from './components/curator/curator.component';
import { ElderCuratorComponent } from './components/elder-curator/elder-curator.component';
import { CuratorProfileComponent } from './components/curator/pages/curator-profile/curator-profile.component';
import { CuratorScheduleComponent } from './components/curator/pages/curator-schedule/curator-schedule.component';
import { CuratorDeadlinesComponent } from './components/curator/pages/curator-deadlines/curator-deadlines.component';
import {FormsModule} from "@angular/forms";
import { AddEventComponent } from './components/curator/add-event/add-event.component';
import { AddFeedbackComponent } from './components/curator/add-feedback/add-feedback.component';
import { AppRoutingModule } from './/app-routing.module';


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
    AddFeedbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

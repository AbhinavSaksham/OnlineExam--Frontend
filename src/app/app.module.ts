import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestListComponent } from './test-list/test-list.component';
import{HttpClient, HttpClientModule} from '@angular/common/http';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortalComponent } from './portal/portal.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ReportComponent } from './report/report.component';
import { SubjectsListComponent } from './subjects-list/subjects-list.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { UserForgotPasswordComponent } from './user-forgot-password/user-forgot-password.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { UserReportCardComponent } from './user-report-card/user-report-card.component';
import { AdminSearchUsersComponent } from './admin-search-users/admin-search-users.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminModifyQuestionsComponent } from './admin-modify-questions/admin-modify-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    TestListComponent,
    PortalComponent,
    WelcomeComponent,
    ReportComponent,
    SubjectsListComponent,
    UserDashboardComponent,
    UserHomepageComponent,
    UserNavbarComponent,
    AddQuestionsComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    UserForgotPasswordComponent,
    AdminNavbarComponent,
    HomeNavbarComponent,
    UserReportCardComponent,
    AdminSearchUsersComponent,
    AboutusComponent,
    ContactusComponent,
    AdminModifyQuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

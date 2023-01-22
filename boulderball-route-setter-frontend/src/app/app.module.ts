import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './views/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './views/register/register.component';
import { ResetPasswordComponent } from './views/reset-password/reset-password.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersComponent } from './components/users/users.component';
import { DisplayBoardComponent } from './components/display-board/display-board.component';
import { TestComponent } from './components/test/test.component';
import { RouteSetterComponent } from './views/route-setter/route-setter.component';
import { StartpageComponent } from './views/startpage/startpage.component';
import { RemoveAccountComponent } from './views/remove-account/remove-account.component';
import { SelectColorComponent } from './components/select-color/select-color.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    ResetPasswordComponent,
    UsersComponent,
    DisplayBoardComponent,
    TestComponent,
    RouteSetterComponent,
    StartpageComponent,
    RemoveAccountComponent,
    SelectColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

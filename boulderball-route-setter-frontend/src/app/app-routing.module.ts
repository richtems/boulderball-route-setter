import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteEntryComponent } from './components/route-entry/route-entry.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { RouteSetterComponent } from './views/route-setter/route-setter.component';
import { StartpageComponent } from './views/startpage/startpage.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '',
    component: TopMenuComponent,
    children: [
      {
        path: 'set-route',
        component: RouteSetterComponent,
      },
      {
        path: 'favorites',
        component: RouteEntryComponent,
      },
      {
        path: 'search',
        component: LoginComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

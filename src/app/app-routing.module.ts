import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './module/login/login.component';
import { RobotComponent } from './robots.component';

const routes: Routes = [
  {
    path: 'cms',
    component: AppComponent,
    loadChildren: () =>
      import('./module/cms/cms.module').then((m) => m.CmsModule),
  },
  {
    path: '',
    component: AppComponent,
    loadChildren: () =>
      import('./module/web/web.module').then((m) => m.WebModule),
  },
  {
    path: 'dang-nhap',
    component: LoginComponent,
  },
  { path: 'robots.txt', component: RobotComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

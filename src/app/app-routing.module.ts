import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

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
    path: 'admin',
    component: AppComponent,
    loadChildren: () =>
      import('./module/login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

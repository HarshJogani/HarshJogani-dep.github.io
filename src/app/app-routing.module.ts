import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { LayoutModule } from './layout/layout.module';
import { LoginModule } from './login/login.module';
import { UsersModule } from './users/users.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LayoutModule,
    LoginModule,
    DashboardModule,
    UsersModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

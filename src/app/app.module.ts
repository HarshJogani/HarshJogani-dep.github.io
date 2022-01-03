import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { LayoutModule } from './layout/layout.module';
import { LoginModule } from './login/login.module';
import { MainModule } from './main/main.module';
import { UsersModule } from './users/users.module';
import { Main2Module } from './main2/main2.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    LoginModule,
    DashboardModule,
    UsersModule,
    MainModule,
    Main2Module,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

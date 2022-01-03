import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { Main2Component } from './main2.component';

const routes: Routes = [
  {
    path: 'main2',
    component: MainLayoutComponent,
    children: [{ path: '', component: Main2Component }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Main2RoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MyCommonModule } from 'src/app/my-common/my-common.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MyCommonModule,
  ],
  declarations: [
    HomeComponent,
  ],
  entryComponents: [
  ]
})
export class HomeModule { }

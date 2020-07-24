import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { MainPageComponent } from './mainpage.component';

import { CourseModule } from '../courses/course.module';

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CourseModule,

    RouterModule.forChild([
      {
        path: '', redirectTo: 'mainpage', pathMatch: 'full'
      },
      {
        path: 'mainpage', component: MainPageComponent
      }
    ])
  ]
})
export class MainPageModule { }

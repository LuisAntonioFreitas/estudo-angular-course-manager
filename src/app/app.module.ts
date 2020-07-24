import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainPageModule } from './mainpage/mainpage.module';
import { CoreModule } from './core/core.module';

import { CourseModule } from './courses/course.module';

import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    CommonModule, 
    FormsModule,
    HttpClientModule, 

    CourseModule, 

    MainPageModule,
    CoreModule, 
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'mainpage', pathMatch: 'full'
      },
      {
        path: 'mainpage', component: MainPageModule
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

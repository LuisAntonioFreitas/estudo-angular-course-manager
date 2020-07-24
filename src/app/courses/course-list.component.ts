import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.services';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
    
  filteredCourses: Course[] = [];

  _courses: Course[] = [];

  _filterBy: string;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.retrieveAll();
  }

  // ngOnInit(): void {
  //   this._courses = this.courseService.retrieveAll();
  //   this.filteredCourses = this._courses;
  // }

  retrieveAll(): void {
    this.courseService.retrieveAll().subscribe({
      next: courses => {
        this._courses = courses;
        this.filteredCourses = this._courses;
      },
      error: err => {
        console.log('Error', err);
      }
    })
  }

  deleteById(courseId: number): void {
    this.courseService.deleteById(courseId).subscribe({
      next: course => {
        console.log('Deleted with success');
        this.retrieveAll();
      },
      error: err => {
        console.log('Error', err);
      }
    })
  }

  set filter(value: string) {
    this._filterBy = value;

    this.filteredCourses = this._courses.filter(
      (course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1
    );

  }

  get filter() {
    return this._filterBy;
  }

}
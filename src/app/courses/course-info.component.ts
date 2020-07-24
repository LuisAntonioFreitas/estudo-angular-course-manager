import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Course } from './course';
import { CourseService } from './course.services';

@Component({
    selector: 'app-course-info',
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

    course: Course;

    constructor(private activateRoute: ActivatedRoute, 
                private courseService: CourseService,
                private location: Location) {}

    ngOnInit(): void {
        this.courseService.retrieveById(+this.activateRoute.snapshot.paramMap.get('id')).subscribe({
            next: course => {
                this.course = course;
              },
              error: err => {
                console.log('Error', err);
              }
        });
    }

    save(): void {
        this.courseService.save(this.course).subscribe({
            next: course => {
                console.log('Save with success', course);
                this.location.back();
              },
              error: err => {
                console.log('Error', err);
              }
        });
    }

    // ngOnInit(): void {
    //     this.course = this.courseService.retrieveById(+this.activateRoute.snapshot.paramMap.get('id'));
    // }

    // save(): void {
    //     this.courseService.save(this.course);
    // }

}

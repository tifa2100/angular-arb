import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'single-course-component',
    templateUrl: 'template/single-course.component.html'
})

export class SingleCourseComponent {
    courses:string[];
    id:number;

    constructor(private route : ActivatedRoute, private _router: Router) {
        this.courses = ["CS101", "MG505", "IT555"]
        
    }

    ngOnInit(){
        this.id = this.route.snapshot.params['id'];
        this.id -= 1;
        if (this.courses.length <= this.id){
            this._router.navigate(['/courses']);
        }
    }
}
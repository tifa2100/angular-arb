import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
    selector: 'courses-component',
    templateUrl: 'template/courses.component.html'
})

export class CoursesComponent {
    courses:string[];

    constructor(private _router:Router) {
        this.courses = ["CS101", "MG505", "IT555"]
        
    }

    goToCourse(index:number){
        this._router.navigate(['/courses', index+1]);
    }
}
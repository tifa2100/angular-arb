import { Component } from '@angular/core';
import { course, friend } from './interfaces.module';

@Component({
    selector: 'first-component',
    templateUrl: 'template/first.component.html'
})

export class FirstComponent {
    name:string;
    country: string;
    courses: any[];

    constructor() {
        this.name="Mostafa";
        this.courses = ["Physics", "Sience"];
        this.country = "Turkey";
    }

    click_me(value: string){
        this.name = value;
        console.log("==========");
        console.log(value);
    }

    add_course(value: string){
        this.courses.push(value);
    }
}
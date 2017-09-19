import { Component } from '@angular/core';
import { course, friend } from './interfaces.module';

@Component({
    selector: 'first-component',
    templateUrl: 'template/first.component.html'
})

export class FirstComponent {
    name:   string;
    age:    number;
    friends: friend[];
    courses: course[];

    constructor() {
        this.name = "Abu Bakr";
        this.age = 35;
        this.friends = [
            {
            name: "Mostafa",
            age: 31
        },
        {
            name: "Yassir",
            age: 32
        }]

        this.courses = [
            {
                course_code: "CS101",
                course_GPA: 3.5
            },
            {
                course_code: "CS505",
                course_GPA: 3.7
            }
        ]
    }
}
import { Component } from '@angular/core';
import { course, friend } from './interfaces.module';

@Component({
    selector: 'first-component',
    templateUrl: 'template/first.component.html'
})

export class FirstComponent {
    childData:string = "";

    constructor() {
        
    }
}
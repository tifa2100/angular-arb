import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'child-component',
    templateUrl: 'template/child.component.html',
    inputs: ['name'],
    outputs: ['childEvent']
})

export class ChildComponent {
    name: string;
    childEvent = new EventEmitter<string>();

    constructor() {
        this.name = "";
    }

    sendToParent(value:string){
        this.childEvent.emit(value);
    }
}
import { Component, OnInit,Input } from '@angular/core';
import { FormsModule } from '@angular/forms'


@Component({
    selector: 'student-register',
    templateUrl: 'student-register.component.html'
})

export class StudentRegisterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
    onSubmit(value){
        console.log(value)
    }
}
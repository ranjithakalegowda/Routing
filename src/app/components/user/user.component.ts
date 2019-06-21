import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users';

@Component({
    selector: 'app-user',
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit {

    user: User;

    constructor() {
    }
    ngOnInit() {
        this.user = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com'
          }
    }
}


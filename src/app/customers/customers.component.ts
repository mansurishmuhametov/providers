import { Component, OnInit } from '@angular/core';

import { CustomersService } from './customers.service';
import { UserService } from '../greeting/user.service';

@Component({
    template: `
        <h2>Customers of {{userName}}</h2>
        <router-outlet></router-outlet>
    `,
    providers: [UserService]
})
export class CustomersComponent implements OnInit {
    userName = '';
    constructor(
        private readonly userService: UserService
    ) {
        this.userName = userService.userName;
    }

    ngOnInit() {
        // console.log(`--- CustomersComponent -> UserService (${this.userService.Id}, ${this.userService.ModuleName})`);
    }
}


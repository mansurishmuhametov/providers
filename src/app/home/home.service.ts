import { Injectable, OnInit } from '@angular/core';
import { UserService } from '../greeting/user.service';

/** Simulate a data service that retrieves contacts from a server */
@Injectable()
export class HomeService implements OnInit {
    constructor(
        private readonly userService: UserService
    ) { 
        // console.log('ContactService instance created.');
    }

    public ngOnInit(): void {
        // console.log(`--- HomeService -> UserService (${this.userService.Id}, ${this.userService.ModuleName})`);
    }
}



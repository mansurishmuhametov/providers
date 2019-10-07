// Exact copy except import UserService from greeting
import { Component, OnInit } from '@angular/core';
import { UserService } from '../greeting/user.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    constructor(
        private readonly userService: UserService
    ) {
        //
    }

    public ngOnInit(): void {
        // console.log(`--- HomeComponent -> UserService (${this.userService.Id}, ${this.userService.ModuleName})`);
    }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from './home/user.service';
import { EventService } from './event/event.service';

/**
 * Корневой компонент
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    constructor(
        private readonly userService: UserService,
        private readonly eventService: EventService
    ) {
        console.log(`--- AppComponent created`);
    }

    public ngOnInit(): void {
        // console.log(`--- AppComponent -> UserService (${this.userService.Id}, ${this.userService.ModuleName})`);
        
        console.log(`--- AppComponent -> increment`);
        this.eventService.increment();
    }
}

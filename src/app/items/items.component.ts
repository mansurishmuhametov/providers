import { Component, OnInit, Injector } from '@angular/core';

import { UserService } from '../greeting/user.service';
import { EventService } from '../event/event.service';

@Component({
    selector: 'app-items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
    constructor(
        private readonly userService: UserService,
        //private readonly eventService: EventService
    ) { }

    ngOnInit() {
        //console.log(`--- ItemsComponent -> UserService (${this.userService.Id}, ${this.userService.ModuleName})`);
        //console.log(`--- ItemsComponent -> EventService (${this.eventService.Id}, ${this.eventService.ModuleName})`);
    }
}

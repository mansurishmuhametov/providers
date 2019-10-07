import { Component, OnInit } from '@angular/core';
import { EventService } from './event.service';

/**
 * Компонент событий
 */
@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
})
export class EventComponent implements OnInit {
    constructor(
        //private readonly event: EventService
    ) {
        console.log(`--- EventComponent created`);
    }
    
    ngOnInit(): void {
        console.log(`--- EventComponent -> increment`);
        //this.event.increment();
    }
}

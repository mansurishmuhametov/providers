import { Component, OnInit, Injector } from '@angular/core';
import { EventService } from '../event/event.service';

/**
 * Компонент событий
 */
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    constructor(
        private readonly eventService: EventService,
        private readonly injector: Injector
    ) {
        console.log(`--- DashboardComponent created`);
    }
    
    ngOnInit(): void {
        console.log(`--- DashboardComponent -> increment`);
        this.eventService.increment();
    }
}

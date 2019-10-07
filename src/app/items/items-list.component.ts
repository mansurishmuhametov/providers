import { Component, OnInit, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { UserService } from '../greeting/user.service';

import {
    Item,
    ItemService
} from './items.service';
import { EventService } from '../event/event.service';

@Component({
    template: `
    <h3 highlight>Items List</h3>
    <div *ngFor='let item of items | async'>
      <a routerLink="{{'../' + item.id}}">{{item.id}} - {{item.name}}</a>
    </div>
  `
})
export class ItemsListComponent implements OnInit {
    items: Observable<Item[]>;

    constructor(
        private itemService: ItemService,
        private readonly userService: UserService,
        private readonly eventService: EventService,
        private readonly injector: Injector
    ) {
        this.items = this.itemService.getItems();
    }

    ngOnInit() {
        console.log(`--- ItemsListComponent -> UserService (${this.userService.Id}, ${this.userService.ModuleName})`);
        //console.log(`--- ItemsListComponent -> EventService (${this.eventService.Id}, ${this.eventService.ModuleName})`);
        console.log(`--- ItemsListComponent -> increment`);
        this.eventService.increment();
    }
}


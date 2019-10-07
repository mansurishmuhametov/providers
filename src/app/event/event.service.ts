
import { Injectable } from '@angular/core';

import { EventModule } from './event.module';

let nextId = 1;

@Injectable({
    providedIn: EventModule
})
export class EventService {
    private iter: number = 0;
    private id = nextId++;
    private moduleName: string = 'EventModule';
    
    public get Iter(): number {
        return this.iter;
    }
    
    public get Id(): number {
        return this.id;
    }
    
    public get ModuleName(): string {
        return this.moduleName;
    }

    constructor() {
        console.log(`--- EventService created (${this.Id}, ${this.ModuleName})`);
    }
    
    public increment(): void {
        this.iter++;

        console.log(`--- EventService (${this.Id}, ${this.ModuleName}) -> increment: ${this.iter}`);
    }
}

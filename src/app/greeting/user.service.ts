
import { Injectable, Optional } from '@angular/core';

let nextId = 1;

export class UserServiceConfig {
    userName = 'Philip Marlowe';
}

@Injectable()
export class UserService {
    userName = 'Martin';
    private id = nextId++;
    private moduleName: string = 'GreetingModule';
    
    public get Id(): number {
        return this.id;
    }
    
    public get ModuleName(): string {
        return this.moduleName;
    }

    constructor() {
        //console.log(`--- UserService created (${this.id}, ${this.ModuleName})`);
    }
}

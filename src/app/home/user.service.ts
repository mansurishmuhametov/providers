
import { Injectable, Optional } from '@angular/core';

let nextId = 1;

@Injectable()
export class UserService {
    userName = 'Martin';
    private id = nextId++;
    private moduleName: string = 'HomeModule';
    
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

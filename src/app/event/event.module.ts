import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventComponent } from './event.component';
import { EventService } from './event.service';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        EventComponent
    ],
    exports: [
        EventComponent
    ],
    providers: [
        //EventService
    ]
})
export class EventModule {
    constructor(
        @Optional()
        @SkipSelf()
        parentModule: EventModule
    ) {
        // if (parentModule) {
        //     throw new Error('EventModule is already loaded. Import it in the AppModule only');
        // }
    }
}

import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { EventModule } from '../event/event.module';


@NgModule({
    imports: [
        CommonModule,
        EventModule
    ],
    declarations: [
        DashboardComponent
    ],
    exports: [
        DashboardComponent
    ]
})
export class DashboardModule {
    constructor(
        @Optional()
        @SkipSelf()
        parentModule: DashboardModule
    ) {
        if (parentModule) {
            throw new Error('DashboardModule is already loaded. Import it in the AppModule only');
        }
    }

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: DashboardModule,
            providers: []
        };
    }
}

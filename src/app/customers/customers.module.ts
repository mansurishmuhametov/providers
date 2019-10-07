import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { CustomersComponent } from './customers.component';
import { CustomersDetailComponent } from './customers-detail.component';
import { CustomersListComponent } from './customers-list.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersService } from './customers.service';
import { GreetingModule } from '../greeting/greeting.module';


@NgModule({
    imports: [
        SharedModule,
        CustomersRoutingModule,
        //GreetingModule.forRoot({ userName: 'Miss Marple' })
    ],
    declarations: [
        CustomersComponent,
        CustomersDetailComponent,
        CustomersListComponent
    ],
    providers: [
        CustomersService
    ]
})
export class CustomersModule { }

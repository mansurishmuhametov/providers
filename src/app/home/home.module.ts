import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
import { HomeRoutingModule } from './home-routing.module';
import { GreetingModule } from '../greeting/greeting.module';
import { UserService } from './user.service';

@NgModule({
    imports: [
        SharedModule,
        HomeRoutingModule,
        ReactiveFormsModule,
        //GreetingModule.forRoot({ userName: 'Miss Marple' }),
    ],
    declarations: [HomeComponent],
    providers: [
        HomeService,
        UserService
    ]
})
export class HomeModule { }

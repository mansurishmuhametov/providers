import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactComponent } from './contact.component';
import { ContactService } from './contact.service';
import { ContactRoutingModule } from './contact-routing.module';
import { GreetingModule } from './../greeting/greeting.module';

@NgModule({
    imports: [
        SharedModule,
        ContactRoutingModule,
        ReactiveFormsModule,
        GreetingModule.forRoot({ userName: 'Miss Marple' }),
    ],
    declarations: [ContactComponent],
    providers: [ContactService]
})
export class ContactModule { }

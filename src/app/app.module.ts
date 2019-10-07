
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactModule } from './contact/contact.module';
import { HomeModule } from './home/home.module';
import { GreetingModule } from './greeting/greeting.module';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
    imports: [
        BrowserModule,
        ContactModule,
        HomeModule,
        GreetingModule.forRoot({ userName: 'Miss Marple' }),
        AppRoutingModule,
        DashboardModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

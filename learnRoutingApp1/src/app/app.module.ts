import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { RoutinghelpercompComponent } from './routinghelpercomp/routinghelpercomp.component';
import { Routinghelpercomp2Component } from './routinghelpercomp2/routinghelpercomp2.component';


@NgModule({
  declarations: [
    AppComponent,
    RoutinghelpercompComponent,
    Routinghelpercomp2Component
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([

    {
      path: 'routinghelpercomp',
      component: RoutinghelpercompComponent
    },
    {
      path: 'routinghelpercomp2',
      component: Routinghelpercomp2Component
    },


      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

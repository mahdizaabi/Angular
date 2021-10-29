import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {ServerUnitComponent} from './server-unit/server-unit.component';
import {DisplayServerComponent} from './display-server/display-server.component';
import {TestComponentComponent} from "./test-component/test-component.component";

@NgModule({
  declarations: [
    AppComponent,ServerUnitComponent,DisplayServerComponent,TestComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

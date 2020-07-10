import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//
import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './app.component';
import { Dummy1Component } from './dummy1/dummy1.component';
import { Dummychild2Component } from './dummychild2/dummychild2.component';
import { HometownComponent } from './family/hometown/hometown.component';
import { ParentsComponent } from './family/parents/parents.component';
import { Child1Component } from './family/child1/child1.component';
import { Child2Component } from './family/child2/child2.component';

@NgModule({
  declarations: [
    RootComponent,
    Dummy1Component,
    Dummychild2Component,
    HometownComponent,
    ParentsComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }

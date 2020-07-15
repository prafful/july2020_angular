import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";   //needed for template driven forms
import {  ReactiveFormsModule} from "@angular/forms"; //needed for reactive forms

//
import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './app.component';
import { Dummy1Component } from './dummy1/dummy1.component';
import { Dummychild2Component } from './dummychild2/dummychild2.component';
import { HometownComponent } from './family/hometown/hometown.component';
import { ParentsComponent } from './family/parents/parents.component';
import { Child1Component } from './family/child1/child1.component';
import { Child2Component } from './family/child2/child2.component';
import { ForComponent } from './directives/for/for.component';
import { IfComponent } from './directives/if/if.component';
import { SwitchcaseComponent } from './directives/switchcase/switchcase.component';
import { ClassComponent } from './directives/class/class.component';
import { StyleComponent } from './directives/style/style.component';
import { AlldirectiveComponent } from './directives/alldirective/alldirective.component';
import { AllpipesComponent } from './pipes/allpipes/allpipes.component';
import { InbuiltComponent } from './pipes/inbuilt/inbuilt.component';
import { CustomComponent } from './pipes/custom/custom.component';
import { SortstringPipe } from './custompipe/sortstring.pipe';
import { AllformsComponent } from './forms/allforms/allforms.component';
import { TemplateComponent } from './forms/template/template.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';

@NgModule({
  declarations: [
    RootComponent,
    Dummy1Component,
    Dummychild2Component,
    HometownComponent,
    ParentsComponent,
    Child1Component,
    Child2Component,
    ForComponent,
    IfComponent,
    SwitchcaseComponent,
    ClassComponent,
    StyleComponent,
    AlldirectiveComponent,
    AllpipesComponent,
    InbuiltComponent,
    CustomComponent,
    SortstringPipe,
    AllformsComponent,
    TemplateComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Dummy1Component } from './dummy1/dummy1.component';
import { HometownComponent } from './family/hometown/hometown.component';
import { AlldirectiveComponent } from './directives/alldirective/alldirective.component';
import { ForComponent } from './directives/for/for.component';
import { IfComponent } from "./directives/if/if.component";
import { SwitchcaseComponent } from './directives/switchcase/switchcase.component';
import { ClassComponent } from './directives/class/class.component';
import { StyleComponent } from './directives/style/style.component';


const routes: Routes = [
  {
    path:'dummy',
    component:Dummy1Component
  },
  {
    path:'family',
    component:HometownComponent
  }, 
  {
    path:'alldirective',
    component:AlldirectiveComponent,
    children:[
      {
        path:'for-direc',
        component:ForComponent
      },
      {
        path:'if-direc',
        component:IfComponent
      },
      {
        path:'switchcase-direc',
        component:SwitchcaseComponent
      },
      {
        path:'class-direc',
        component:ClassComponent
      },
      {
        path:'style-direc',
        component:StyleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

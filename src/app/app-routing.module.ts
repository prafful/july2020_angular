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
import { AllpipesComponent } from './pipes/allpipes/allpipes.component';
import { InbuiltComponent } from './pipes/inbuilt/inbuilt.component';
import { CustomComponent } from './pipes/custom/custom.component';
import { AllformsComponent } from './forms/allforms/allforms.component';
import { TemplateComponent } from './forms/template/template.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { ConsumeserviceComponent } from './consume/consumeservice/consumeservice.component';
import { RemoteComponent } from './consume/remote/remote.component';


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
  },
  {
    path:'pipes',
    component:AllpipesComponent,
    children:[
      {
        path:'inbuilt',
        component:InbuiltComponent
      },
      {
        path:'custom',
        component:CustomComponent
      }
    ],
   
  }, 
  {
    path:'forms',
    component: AllformsComponent,
    children:[
      {
        path:'template',
        component:TemplateComponent
      },
      {
        path:'reactive',
        component:ReactiveComponent
      }
    ]
  },
  {
    path:'service',
    component:ConsumeserviceComponent
  },
  {
    path:'remote',
    component:RemoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

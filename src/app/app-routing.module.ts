import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Dummy1Component } from './dummy1/dummy1.component';
import { HometownComponent } from './family/hometown/hometown.component';


const routes: Routes = [
  {
    path:'dummy',
    component:Dummy1Component
  },
  {
    path:'family',
    component:HometownComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

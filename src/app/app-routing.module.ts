import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { C1ExampleComponent } from './comps/c1-example/c1-example.component';
import { C2OperatorsComponent } from './comps/c2-operators/c2-operators.component';
import { C3CommParentComponent } from './comps/c3-comm-parent/c3-comm-parent.component';


const routes: Routes = [
  { path:'example', component:C1ExampleComponent },
  { path:'ajaxing', component:C2OperatorsComponent },
  { path:'comm', component:C3CommParentComponent },



  { path:'', redirectTo:'example', pathMatch: 'full'},
  { path:'**', redirectTo:'example', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

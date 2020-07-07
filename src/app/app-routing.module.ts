import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { C1ExampleComponent } from './comps/c1-example/c1-example.component';
import { C2OperatorsComponent } from './comps/c2-operators/c2-operators.component';


const routes: Routes = [
  { path:'example', component:C1ExampleComponent },
  { path:'operators', component:C2OperatorsComponent },



  { path:'', redirectTo:'example', pathMatch: 'full'},
  { path:'**', redirectTo:'example', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

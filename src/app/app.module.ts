import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './mat-module/mat-module.module';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C1ExampleComponent } from './comps/c1-example/c1-example.component';
import { C2OperatorsComponent } from './comps/c2-operators/c2-operators.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { C3CommParentComponent } from './comps/c3-comm-parent/c3-comm-parent.component';
import { C3CommPartial1Component } from './comps/c3-comm-partial1/c3-comm-partial1.component';
import { C3CommPartial2Component } from './comps/c3-comm-partial2/c3-comm-partial2.component';

@NgModule({
  declarations: [
    AppComponent,
    C1ExampleComponent,
    C2OperatorsComponent,
    C3CommParentComponent,
    C3CommPartial1Component,
    C3CommPartial2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { FormsModule } from '@angular/forms'
import { MyHighlighterDirective } from 'src/app/directives/color.directive'
@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    MyHighlighterDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

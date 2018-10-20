import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/component';
import { reducers } from './reducers';

@NgModule({
  declarations: [AppComponent, TodosComponent],
  imports: [BrowserModule, StoreModule.forRoot(reducers)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

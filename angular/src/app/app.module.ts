import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/component';
import { reducers, States } from './reducers';
import { Actions } from './actions';

@NgModule({
  declarations: [AppComponent, TodosComponent],
  imports: [BrowserModule, FormsModule, StoreModule.forRoot<States, Actions>(reducers)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

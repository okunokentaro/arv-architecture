import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/component';
import { reducers, States } from './reducers';
import { Actions } from './actions';
import { TodoEffects } from './shared/models/todo/effect';

@NgModule({
  declarations: [AppComponent, TodosComponent],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot<States, Actions>(reducers),
    EffectsModule.forRoot([TodoEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

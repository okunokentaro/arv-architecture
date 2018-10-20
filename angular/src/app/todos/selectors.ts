import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { States } from '../reducers';
import { TodoState } from '../shared/models/todo/reducer';
import { Todo } from '../shared/models/todo/todo';

const featureSelector = createFeatureSelector<States, TodoState>('todo');

@Injectable({ providedIn: 'root' })
export class TodosSelectors {
  constructor(private store: Store<States>) {}

  get todos$(): Observable<Todo[]> {
    return this.store.pipe(select(createSelector(featureSelector, state => state.todos)));
  }
}

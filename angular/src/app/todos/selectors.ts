import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { States } from '../reducers';
import { TodoState } from '../shared/models/todo/reducer';
import { TodoViewModel } from './view-model';

const featureSelector = createFeatureSelector<States, TodoState>('todo');

const activeTodosSelector = createSelector(featureSelector, state => {
  return state.todos.filter(todo => todo.status === 'active');
});

@Injectable({ providedIn: 'root' })
export class TodosSelectors {
  constructor(private store: Store<States>) {}

  get todos$(): Observable<TodoViewModel[]> {
    return this.store.pipe(
      select(
        createSelector(activeTodosSelector, todos => {
          return todos.map(todo => new TodoViewModel(todo));
        }),
      ),
    );
  }
}

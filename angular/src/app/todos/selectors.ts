import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';

import { States } from '../reducers';
import { TodoState } from '../shared/models/todo/reducer';
import { Observable } from 'rxjs';

const featureSelector = createFeatureSelector<TodoState>('todo');

@Injectable({ providedIn: 'root' })
export class TodosSelectors {
  constructor(private store: Store<States>) {}

  todos$(): Observable<Object[]> {
    return this.store.pipe(createSelector(featureSelector, state => state.todos));
  }
}

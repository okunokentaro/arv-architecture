import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import { States } from '../reducers';
import { add, AddAction, remove, RemoveAction } from '../shared/models/todo/actions';

@Injectable({ providedIn: 'root' })
export class TodosDispatcher {
  constructor(private store: Store<States>) {}

  add(title: string) {
    this.store.dispatch({ type: add, payload: { title } } as AddAction);
  }

  remove(id: number) {
    this.store.dispatch({ type: remove, payload: { id } } as RemoveAction);
  }
}

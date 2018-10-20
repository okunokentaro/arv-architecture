import { Action, Store } from '@ngrx/store';

import { States } from '../../reducers';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Dispatcher {
  constructor(private store: Store<States>) {}

  dispatch<V extends Action = Action>(v: V) {
    this.store.dispatch<V>(v);
  }
}

import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { add } from '../shared/models/todo/actions';
import { States } from '../reducers';

@Component({
  selector: 'app-todos',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class TodosComponent {
  message = 'it works';

  constructor(public store: Store<States>) {
    store.subscribe(v => console.log(v.todo));
  }

  add() {
    this.store.dispatch({ type: add });
  }
}

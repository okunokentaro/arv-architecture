import { Component } from '@angular/core';

import { add } from '../shared/models/todo/actions';
import { TodosSelectors } from './selectors';
import { Dispatcher } from '../shared/lib/dispatcher';

@Component({
  selector: 'app-todos',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class TodosComponent {
  message = 'it works';

  constructor(public selectors: TodosSelectors, private dispatcher: Dispatcher) {}

  add() {
    this.dispatcher.dispatch({ type: add });
  }
}

import { Component } from '@angular/core';
import { TodosSelectors } from './selectors';
import { TodosDispatcher } from './dispatcher';

@Component({
  selector: 'app-todos',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class TodosComponent {
  inputValue = '';

  constructor(public selectors: TodosSelectors, private dispatcher: TodosDispatcher) {}

  onClickAdd(title: string) {
    this.dispatcher.add(title);
    this.inputValue = '';
  }

  onClickRemove(id: number) {
    this.dispatcher.remove(id);
  }
}

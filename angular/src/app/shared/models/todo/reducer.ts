import { Action } from '@ngrx/store';

import { add } from './actions';
import { Todo } from './todo';
import { todosMock } from '../../../../mocks/todo/todo.mock';

export interface TodoState {
  todos: Todo[];
  nextSequentialNumber: number;
}

const initialState = {
  todos: todosMock,
  nextSequentialNumber: 1,
};

export const todoReducer = (state: TodoState = initialState, action: Action) => {
  switch (action.type) {
    case add:
      return Object.assign({}, state, { nextSequentialNumber: state.nextSequentialNumber + 1 });
    default:
      return state;
  }
};

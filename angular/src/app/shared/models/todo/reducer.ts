import { Action } from '@ngrx/store';
import { add } from './actions';

export interface TodoState {
  todos: Object[];
  nextSequentialNumber: number;
}

const initialState = {
  todos: [],
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

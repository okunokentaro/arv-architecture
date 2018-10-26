import { ActionReducer } from '@ngrx/store';

import {
  add,
  AddAction,
  doneInitialFetch,
  DoneInitialFetchAction,
  remove,
  RemoveAction,
  TodoAction,
} from './actions';
import { Todo } from './todo';

export interface TodoState {
  todos: Todo[];
  nextSequentialNumber: number;
}

const initialState = {
  todos: [],
  nextSequentialNumber: 0,
} as TodoState;

const doneInitialFetchReducer = (state: TodoState, action: DoneInitialFetchAction): TodoState => {
  return {
    todos: action.payload.todos,
    nextSequentialNumber: action.payload.nextSequentialNumber,
  } as TodoState;
};

const addReducer = (state: TodoState, action: AddAction): TodoState => {
  const todos = state.todos.concat([
    {
      id: state.nextSequentialNumber,
      status: 'active',
      title: action.payload.title,
      created: new Date().valueOf(),
      modified: new Date().valueOf(),
    } as Todo,
  ]);

  return Object.assign({}, state, {
    todos,
    nextSequentialNumber: state.nextSequentialNumber + 1,
  });
};

const removeReducer = (state: TodoState, action: RemoveAction): TodoState => {
  const targetId = action.payload.id;

  const target = state.todos.find(v => v.id === targetId);
  if (!target) {
    throw new Error('該当のtodoが見つかりませんでした');
  }
  target.status = 'removed';

  const todos = state.todos.filter(v => v.id !== targetId).concat([target]);
  return Object.assign({}, state, { todos });
};

export const todoReducer = ((state: TodoState = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    case doneInitialFetch:
      return doneInitialFetchReducer(state, action);
    case add:
      return addReducer(state, action);
    case remove:
      return removeReducer(state, action);
    default:
      return state;
  }
}) as ActionReducer<TodoState, TodoAction>;

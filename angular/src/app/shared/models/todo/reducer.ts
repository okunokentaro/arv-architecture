import { add, AddAction, remove, RemoveAction, TodoAction } from './actions';
import { Todo } from './todo';
import { nextSequentialNumberMock, todosMock } from '../../../../mocks/todo/todo.mock';
import { ActionReducer, ActionReducerMap } from '@ngrx/store';

export interface TodoState {
  todos: Todo[];
  nextSequentialNumber: number;
}

const initialState = {
  todos: todosMock,
  nextSequentialNumber: nextSequentialNumberMock,
} as TodoState;

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
    case add:
      return addReducer(state, action);
    case remove:
      return removeReducer(state, action);
    default:
      return state;
  }
}) as ActionReducer<TodoState, TodoAction>;

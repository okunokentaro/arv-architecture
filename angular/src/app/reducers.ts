import { State as TodoState, todoReducer } from './shared/models/todo/reducer';

export interface States {
  todo: TodoState;
}

export const reducers = { todo: todoReducer };

import { Action } from '@ngrx/store';
import { Todo } from './todo';

export const doneInitialFetch = 'todo.doneInitialFetch';
export const add = 'todo.add';
export const remove = 'todo.remove';

export interface DoneInitialFetchAction extends Action {
  type: typeof doneInitialFetch;
  payload: { todos: Todo[]; nextSequentialNumber: number };
}

export interface AddAction extends Action {
  type: typeof add;
  payload: { title: string };
}

export interface RemoveAction extends Action {
  type: typeof remove;
  payload: { id: number };
}

export type TodoAction = DoneInitialFetchAction | AddAction | RemoveAction;

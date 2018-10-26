import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';

import { nextSequentialNumberMock, todosMock } from '../../../../mocks/todo/todo.mock';
import { DoneInitialFetchAction, doneInitialFetch } from './actions';

@Injectable({ providedIn: 'root' })
export class TodoEffects {
  constructor(private actions$: Actions) {}

  @Effect()
  get initFetch$(): Observable<DoneInitialFetchAction> {
    return this.actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      concatMap(() => of({ todos: todosMock, nextSequentialNumber: nextSequentialNumberMock })),
      map(v => ({ type: doneInitialFetch, payload: v } as DoneInitialFetchAction)),
    );
  }
}

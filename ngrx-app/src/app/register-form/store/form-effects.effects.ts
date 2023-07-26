import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { asyncScheduler, EMPTY, of } from 'rxjs';
import { catchError, debounceTime, exhaustMap, map } from 'rxjs/operators';
import { RegisterFormService } from '../register-form.service';
import { FormActions } from './index-actions';

@Injectable()
export class FormEffectsEffects {
  $formSubmit = createEffect(() =>
    this.actions$.pipe(
      ofType(FormActions.submitRegisterForm),
      debounceTime(300, asyncScheduler),
      exhaustMap(({ formData }) => {
        this.registerService.register(formData).pipe(
          map((user) => FormActions.registerSuccess({ user })),
          catchError((err) => of(FormActions.registerFailure({ err })))
        )
      })
    )
  );

  constructor(
    private actions$: Actions,
    private registerService: RegisterFormService
  ) {}
}

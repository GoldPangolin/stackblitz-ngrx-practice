import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
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
          catchError((err) => {
            FormActions.registerFailure(err);
          }),
          map((data) => {
            FormActions.registerSuccess(data);
          })
        );
      })
    )
  );

  constructor(
    private store: Store,
    private actions$: Actions,
    private registerService: RegisterFormService
  ) {}
}

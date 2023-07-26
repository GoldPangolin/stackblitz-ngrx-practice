import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";
import { ofType } from "@ngrx/effects/src/actions";
import { createEffect } from "@ngrx/effects/src/effect_creator";
import { exhaustMap, catchError, map, of } from "rxjs";
import { FormActions} from '../actions/index-actions';

@Injectable()
export class LoginEffects {
  login$ = createEffect(()=> {
    this.actions$.pipe(
      ofType(FormActions.login),
      exhaustMap(()=> {
        this.authService.login().pipe(
          catchError((error)=> {
            of(FormActions.loginFailure({error}));
          }),
          map((user)=> {
            FormAction.loginSuccess({user});
          })
        )
      })
    )
  })

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}
}
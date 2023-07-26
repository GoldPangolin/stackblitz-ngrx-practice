import {
  createActionGroup,
  emptyProps,
  props,
  createAction,
} from '@ngrx/store';

export const submitRegisterForm = createAction(
  '[Register Form] Submit Register Form',
  props<{ formData: any }>()
);

export const registerSuccess = createAction(
  '[Register Form] Submit Register Form Success',
  props<{ user: any }>()
);

export const registerFailure = createAction(
  '[Register Form] Submit Register Form Failure',
  props<{ err: any }>()
);

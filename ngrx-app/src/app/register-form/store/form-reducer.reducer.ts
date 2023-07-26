import { createReducer, on } from '@ngrx/store';
import { FormReducerActions } from './form-reducer.actions';

export const formReducerFeatureKey = 'formReducer';

export interface IUser {
  username: string;
}

export interface State {
  isLoggedIn: boolean;
  user: IUser;
}

export const initialState: State = {
  isLoggedIn: false,
  user: null,
};

export const reducer = createReducer(
  initialState,
  on(FormReducerActions.registerSucces, ({user}): State => ({
    user
    
  }))
  
  );

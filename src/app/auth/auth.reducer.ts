import {AuthActions, SET_AUTH_INVALID, SET_AUTH_VALID} from './auth.actions';

export interface State {
  isAuthenticated: boolean;
}

const initialState: State = {
  isAuthenticated: false,
};

export function authReducer(state = initialState, action: AuthActions): State {
  switch (action.type) {
    case SET_AUTH_VALID:
      return {
        isAuthenticated: true,
      };
    case SET_AUTH_INVALID:
      return {
        isAuthenticated: false,
      };
    default: {
      return state;
    }
  }
}

export const getIsAuth = (state: State) => state.isAuthenticated;

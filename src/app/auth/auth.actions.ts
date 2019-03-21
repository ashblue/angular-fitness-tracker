import {Action} from '@ngrx/store';

export const SET_AUTH_VALID = '[Auth] Set Authenticated';
export const SET_AUTH_INVALID = '[Auth] Set Unauthenticated';

export class SetAuthValid implements Action {
  readonly type = SET_AUTH_VALID;
}

export class SetAuthInvalid implements Action {
  readonly type = SET_AUTH_INVALID;
}

export type AuthActions = SetAuthValid | SetAuthInvalid;

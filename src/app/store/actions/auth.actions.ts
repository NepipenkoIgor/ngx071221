import { createAction, props } from '@ngrx/store';

export const loginPending = createAction(
	'[Auth] login pending',
	props<{ user: { username: string; password: string } }>(),
);
export const signUpPending = createAction('[Auth] signup pending', props<{ user: any }>());
export const authFail = createAction('[Auth] auth fail');
export const setUser = createAction('[Auth] set user', props<{ user: any }>());
export const logOut = createAction('[Auth] logout');
export const checkJWT = createAction('[Auth] check JWT');

import { Action, createReducer, on } from '@ngrx/store';
import { loginPending, setUser, signUpPending } from '../actions/auth.actions';

export interface IAuth {
	loading: boolean;
	user: any;
}

export const initialState: IAuth = {} as IAuth;

const _authReducer = createReducer(
	initialState,
	on(loginPending, (_state) => {
		return { ..._state, loading: true };
	}),
	on(signUpPending, (_state) => {
		return { ..._state, loading: true };
	}),
	on(setUser, (_state, { user }) => {
		return { ..._state, user, loading: false };
	}),
);

export function authReducer(state: IAuth | undefined, action: Action) {
	return _authReducer(state, action);
}

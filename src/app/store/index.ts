import { authReducer, IAuth } from './reducers/auth.reducers';
import { Action, ActionReducer, MetaReducer } from '@ngrx/store';
import { logOut } from './actions/auth.actions';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { IRouterState } from './reducers/router.reducers';

export interface IAppState {
	auth: IAuth;
	router: RouterReducerState<IRouterState>;
}

export const reducers = {
	auth: authReducer,
	router: routerReducer,
};

export function logoutAndClearState(reducer: ActionReducer<IAppState>): ActionReducer<IAppState> {
	return function (state: IAppState | undefined, action: Action): IAppState {
		let newState = state;
		if (action.type === logOut().type) {
			newState = undefined;
		}
		return reducer(newState, action);
	};
}

export const metaReducers: MetaReducer<IAppState>[] = [logoutAndClearState];

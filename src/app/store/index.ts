import { authReducer, IAuth } from './reducers/auth.reducers';

export interface IAppState {
	auth: IAuth;
}

export const reducers = {
	auth: authReducer,
};

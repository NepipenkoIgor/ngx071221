import { RouterStateSerializer } from '@ngrx/router-store';
import { NavigationExtras, Params, RouterStateSnapshot } from '@angular/router';

export interface IRouterPayload {
	commands: string[];
	query?: object;
	extras?: NavigationExtras;
}

export interface IRouterState {
	url: string;
	params: Params;
	queryParams: Params;
}

export class CustomSerializer implements RouterStateSerializer<IRouterState> {
	public serialize(routerState: RouterStateSnapshot): IRouterState {
		let route = routerState.root;

		while (route.firstChild) {
			route = route.firstChild;
		}

		const {
			url,
			root: { queryParams },
		} = routerState;
		const { params } = route;

		// Only return an object including the URL, params and query params
		// instead of the entire snapshot
		return { url, params, queryParams };
	}
}

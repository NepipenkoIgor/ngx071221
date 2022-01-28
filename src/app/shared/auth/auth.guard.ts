import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { filter, Observable, of, switchMap, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store';

@Injectable()
export class AuthGuard implements CanActivate {
	public constructor(private readonly router: Router, private readonly store: Store<IAppState>) {}

	public canActivate(
		_activatedRoute: ActivatedRouteSnapshot,
		router: RouterStateSnapshot,
	): Observable<boolean> {
		const { url } = router;

		return this.store.select('auth').pipe(
			filter(({ loading }) => !loading),
			take(1),
			switchMap(({ user }) => {
				const isLogIn = Boolean(user);
				if (!isLogIn && (url === '/login' || url === '/signup')) {
					return of(true);
				}
				if (isLogIn && (url === '/login' || url === '/signup')) {
					this.router.navigate(['/dashboard']);
					return of(false);
				}
				if (!isLogIn) {
					this.router.navigate(['/login']);
				}
				return of(isLogIn);
			}),
		);
	}
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
	public constructor(private readonly router: Router) {}

	public canActivate(
		_activatedRoute: ActivatedRouteSnapshot,
		router: RouterStateSnapshot,
	): Observable<boolean> {
		const { url } = router;
		return of(false) // res from server ....
			.pipe(
				switchMap((isLoggedIn: boolean) => {
					if (!isLoggedIn && (url === '/login' || url === '/signup')) {
						return of(true);
					}
					if (isLoggedIn && (url === '/login' || url === '/signup')) {
						this.router.navigate(['/dashboard']);
						return of(false);
					}
					if (!isLoggedIn) {
						this.router.navigate(['/login']);
					}
					return of(isLoggedIn);
				}),
			);
	}
}

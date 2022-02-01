import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, mergeMap, pipe, switchMap } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { checkJWT, loginPending, logOut, setUser, signUpPending } from '../actions/auth.actions';
import { AuthService } from '../../shared/auth/auth.service';
import { go } from '../actions/router.actions';

@Injectable()
export class AuthEffects {
	public logout$ = createEffect(() =>
		this.actions$.pipe(
			ofType(logOut),
			switchMap(() =>
				this.authService.removeTokenFromLocalStorage().pipe(
					map(() => go({ params: { commands: ['/login'] } })),
					catchError(() => {
						return EMPTY;
					}),
				),
			),
		),
	);

	public loginPending$ = createEffect(() =>
		this.actions$.pipe(
			ofType(loginPending),
			switchMap(({ user }) => this.authService.login(user).pipe(this.setUser())),
		),
	);

	public signUpPending$ = createEffect(() =>
		this.actions$.pipe(
			ofType(signUpPending),
			switchMap(({ user }) => this.authService.signup(user).pipe(this.setUser())),
		),
	);

	public checkJWT$ = createEffect(() =>
		this.actions$.pipe(
			ofType(checkJWT),
			switchMap(() => {
				return this.authService.checkUser().pipe(
					map((userWithData) => {
						return setUser({ user: userWithData });
					}),
					catchError((err) => {
						console.log(err);
						return EMPTY;
					}),
				);
			}),
		),
	);

	public constructor(
		private readonly actions$: Actions,
		private readonly authService: AuthService,
	) {}

	private setUser() {
		return pipe(
			switchMap((user) =>
				this.authService.tokenToLocalStorage(user).pipe(
					mergeMap((userWithData) => {
						return [setUser({ user: userWithData }), go({ params: { commands: ['/dashboard'] } })];
					}),
				),
			),
			catchError((err) => {
				console.log(err);
				return EMPTY;
			}),
		);
	}
}

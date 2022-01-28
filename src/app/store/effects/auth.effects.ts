import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, pipe, switchMap, tap } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { checkJWT, loginPending, setUser, signUpPending } from '../actions/auth.actions';
import { AuthService } from '../../shared/auth/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
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
		private readonly router: Router,
	) {}

	private setUser() {
		return pipe(
			switchMap((user) =>
				this.authService.tokenToLocalStorage(user).pipe(
					map((userWithData) => {
						return setUser({ user: userWithData });
					}),
					tap(() => {
						// TODO make pretty;
						this.router.navigate(['/dashboard']);
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

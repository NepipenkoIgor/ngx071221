import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { go } from '../actions/router.actions';

@Injectable()
export class RouterEffects {
	public go$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(go),
				tap(({ params: { commands } }) => {
					this.router.navigate(commands);
				}),
			),
		{ dispatch: false },
	);

	public back$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(go),
				tap(() => {
					this.location.back();
				}),
			),
		{ dispatch: false },
	);

	public forward$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(go),
				tap(() => {
					this.location.forward();
				}),
			),
		{ dispatch: false },
	);

	public constructor(
		private readonly actions$: Actions,
		private readonly location: Location,
		private readonly router: Router,
	) {}
}

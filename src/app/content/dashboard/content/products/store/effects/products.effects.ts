import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, switchMap } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { getProductsPending, getProductsSuccess } from '../actions/products.actions';
import { ProductsService } from '../../products.service';

@Injectable()
export class ProductsEffects {
	public getProductsPending$ = createEffect(() =>
		this.actions$.pipe(
			ofType(getProductsPending),
			switchMap(() =>
				this.productsService.getProducts().pipe(
					map((products) => {
						return getProductsSuccess({ products });
					}),
					catchError(() => EMPTY),
				),
			),
		),
	);

	public constructor(private actions$: Actions, private productsService: ProductsService) {}
}

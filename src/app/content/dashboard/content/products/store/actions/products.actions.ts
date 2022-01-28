import { createAction, props } from '@ngrx/store';
import { IProduct } from '../../products.service';

export const getProductsPending = createAction('[Products] get products pending');
export const getProductsSuccess = createAction(
	'[Products] get products success',
	props<{ products: IProduct[] }>(),
);
export const getProductsError = createAction('[Products] get products error');

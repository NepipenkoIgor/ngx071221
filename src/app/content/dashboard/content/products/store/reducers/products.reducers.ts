import { Action, createReducer, on } from '@ngrx/store';
import { IProduct } from '../../products.service';
import { getProductsSuccess } from '../actions/products.actions';

export const initialState: IProduct[] = [];

const _productsReducer = createReducer(
	initialState,
	on(getProductsSuccess, (_state, { products }) => {
		return products;
	}),
);

export function productsReducer(state: IProduct[] | undefined, action: Action) {
	return _productsReducer(state, action);
}

import { Component, OnInit } from '@angular/core';
import { Observable, pluck } from 'rxjs';
import { IProduct } from './products.service';
import { UnSubscriber } from '../../../../shared/utils/unsubscriber';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IProductState } from './store';
import { getProductsPending } from './store/actions/products.actions';

@Component({
	selector: 'ngx-classwork-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css'],
})
export class ProductsComponent extends UnSubscriber implements OnInit {
	public text = 'Galaxy 10';

	public products$: Observable<IProduct[]> = this.store.select('products');

	public onlyFavorites: boolean = false;

	public title$ = this.activatedRoute.data.pipe(pluck('title'));

	public constructor(
		private readonly activatedRoute: ActivatedRoute,
		private store: Store<IProductState>,
	) {
		super();
	}

	public ngOnInit() {
		this.store.dispatch(getProductsPending());
	}

	public changeText(text: string) {
		this.text = text;
	}
}

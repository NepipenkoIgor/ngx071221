import { Component } from '@angular/core';
import { Observable, pluck } from 'rxjs';
import { IProduct, ProductsService } from './products.service';
import { UnSubscriber } from '../../../../shared/utils/unsubscriber';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'ngx-classwork-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css'],
})
export class ProductsComponent extends UnSubscriber {
	public text = 'Galaxy 10';

	public products$: Observable<IProduct[]> = this.productsService.getProducts();

	public onlyFavorites: boolean = false;

	public title$ = this.activatedRoute.data.pipe(pluck('title'));

	public constructor(
		private readonly activatedRoute: ActivatedRoute,
		private productsService: ProductsService,
	) {
		super();
	}

	public changeText(text: string) {
		this.text = text;
	}
}

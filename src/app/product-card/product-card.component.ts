import { Component, Inject, Input } from '@angular/core';
import { IProduct } from '../data';
import { ProductsService } from '../products.service';
import { ModalService } from '../modal/modal.service';

@Component({
	selector: 'ngx-classwork-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.css'],
	providers: [
		{
			provide: ProductsService,
			useValue: 1,
		},
	],
})
export class ProductCardComponent {
	@Input()
	public product: IProduct = {} as IProduct;

	@Input()
	public isOdd: boolean = false;

	// public constructor(@Inject(ProductsService) public productsService: any) {
	public constructor(
		// @Host() public productsService: ProductsService,
		@Inject(ProductsService) public productsService: any,
		private readonly modalService: ModalService,
	) {
		console.log('ProductCardComponent==>', productsService);
	}

	public addToCart() {
		this.modalService.open(this.product);
	}
}

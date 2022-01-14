import { Component, Inject, Injector, Input } from '@angular/core';
import { IProduct, ProductsService } from '../products.service';
import { ModalService } from '../../../modal/modal.service';

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
		private readonly injector: Injector,
	) {
		console.log('ProductCardComponent==>', productsService);
	}

	public async addToCart() {
		const m = await import('./product-confirm/product-confirm.component');
		this.modalService.open({
			component: m.ProductConfirmComponent,
			injector: this.injector,
			context: {
				product: { ...this.product },
				add: () => {
					console.log('Add to cart');
					this.modalService.close();
				},
				close: () => {
					console.log('Add to cart');
					this.modalService.close();
				},
			},
		});
	}
}

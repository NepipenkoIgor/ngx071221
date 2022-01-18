import { Component, Inject, NgModule } from '@angular/core';
import { IProduct, ProductsService } from '../../products.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
	selector: 'ngx-classwork-product-confirm',
	templateUrl: './product-confirm.component.html',
	styleUrls: ['./product-confirm.component.css'],
})
export class ProductConfirmComponent {
	public product!: IProduct;

	public add!: Function;

	public close!: Function;

	public constructor(@Inject(ProductsService) public productsService: any) {
		console.log('ProductConfirmComponent ==>', productsService);
	}
}

@NgModule({
	declarations: [ProductConfirmComponent],
	imports: [MatCardModule, MatButtonModule],
})
export class ProductConfirmModule {}

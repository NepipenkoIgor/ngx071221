import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './products.service';

@Pipe({
	name: 'productsFilter',
	pure: false,
})
export class ProductsFilterPipe implements PipeTransform {
	public transform(products: IProduct[], text: string, onlyFavorites: boolean = false): IProduct[] {
		let result = products;
		if (onlyFavorites) {
			result = products.filter((product) => {
				return product.isFavorite === onlyFavorites;
			});
		}
		if (!text) {
			return result;
		}
		return result.filter((product) => {
			return `${product.title}${product.price}`.toLowerCase().includes(text.toLowerCase());
		});
	}
}

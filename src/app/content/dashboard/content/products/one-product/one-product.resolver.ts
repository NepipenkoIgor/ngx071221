import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { IProduct, ProductsService } from '../products.service';

@Injectable()
export class OneProductResolver implements Resolve<IProduct | null> {
	public constructor(
		private readonly router: Router,
		private readonly productsService: ProductsService,
	) {}

	public resolve(route: ActivatedRouteSnapshot): Observable<IProduct | null> {
		return this.productsService.getProduct(route.params['productId']).pipe(
			map((product: IProduct | null) => {
				if (!product) {
					this.router.navigate(['dashboard']);
				}
				return product;
			}),
			catchError(() => {
				this.router.navigate(['dashboard']);
				return of(null);
			}),
		);
	}
}

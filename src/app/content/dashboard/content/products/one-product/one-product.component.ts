import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, pluck } from 'rxjs';
import { IProduct } from '../products.service';

@Component({
	selector: 'ngx-classwork-one-product',
	templateUrl: './one-product.component.html',
	styleUrls: ['./one-product.component.css'],
})
export class OneProductComponent implements OnInit {
	public product$: Observable<IProduct> = this.activatedRoute.data.pipe(pluck('product'));

	public constructor(private readonly activatedRoute: ActivatedRoute) {}

	public ngOnInit(): void {
		console.log('init');
		// this.activatedRoute.data.subscribe((data) => {
		// 	console.log(data);
		// });
		// this.activatedRoute.queryParams.subscribe((p) => {
		// 	console.log(p);
		// });
		// this.activatedRoute.fragment.subscribe((f) => {
		// 	console.log(f);
		// });
		// this.activatedRoute.params.subscribe((p) => {
		// 	console.log(p.productId);
		// });
		// this.activatedRoute.paramMap
		// 	.pipe(
		// 		switchMap(() => {
		// 			return this.http;
		// 		}),
		// 	)
		// 	.subscribe((p) => {
		// 		console.log(p.get('productId'));
		// 	});
	}
}

import { ChangeDetectorRef, Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { IProduct, products$ } from './data';
import { UnSubscriber } from './unsubscriber';

@Component({
	selector: 'ngx-classwork-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent extends UnSubscriber {
	public title = 'Ngx Course';

	public drawer!: MatDrawer;

	public text = 'Galaxy 10';

	public products: IProduct[] = [];

	public products$ = products$;

	public onlyFavorites: boolean = false;

	public constructor(private changeDetectorRef: ChangeDetectorRef) {
		super();
	}

	// public ngOnInit() {
	// const s = new Subject();
	// s.subscribe((v) => {
	// 	console.log(v);
	// });
	//
	// setTimeout(() => {
	// 	s.next('Angular is awesome');
	// }, 5000);
	// this.products$.pipe(takeUntil(this.unSubscriber)).subscribe((p: IProduct[]) => {
	// 	this.products = p;
	// });
	//}

	// public override ngOnDestroy() {
	//   // do something
	//   super.ngOnDestroy();
	// }

	public changeText(text: string) {
		this.text = text;
	}

	public setDrawer(drawer: MatDrawer) {
		this.drawer = drawer;
		this.changeDetectorRef.detectChanges();
	}

	// public filteredProducts(products: IProduct[]) {
	// 	console.log('CALC');
	// 	return products.filter((product) => {
	// 		return `${product.title}${product.price}`.toLowerCase().includes(this.text.toLowerCase());
	// 	});
	// }
}

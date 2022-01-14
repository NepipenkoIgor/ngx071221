import { ChangeDetectorRef, Component } from '@angular/core';
import { UnSubscriber } from '../../shared/utils/unsubscriber';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { IProduct, ProductsService } from './products.service';

@Component({
	selector: 'ngx-classwork-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent extends UnSubscriber {
	public title = 'Ngx Course';

	public drawer!: MatDrawer;

	public text = 'Galaxy 10';

	public products$: Observable<IProduct[]> = this.productsService.getProducts();

	public onlyFavorites: boolean = false;

	public constructor(
		private productsService: ProductsService,
		private changeDetectorRef: ChangeDetectorRef,
	) {
		super();
	}

	public changeText(text: string) {
		this.text = text;
	}

	public setDrawer(drawer: MatDrawer) {
		this.drawer = drawer;
		this.changeDetectorRef.detectChanges();
	}
}

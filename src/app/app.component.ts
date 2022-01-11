import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { IProduct } from './data';
import { UnSubscriber } from './unsubscriber';
import { Observable } from 'rxjs';

@Component({
	selector: 'ngx-classwork-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent extends UnSubscriber {
	public title = 'Ngx Course';

	public drawer!: MatDrawer;

	public text = 'Galaxy 10';

	public products$: Observable<IProduct[]> = this.productsService.getProducts();

	public onlyFavorites: boolean = false;

	public constructor(
		@Inject('Products') private productsService: any,
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

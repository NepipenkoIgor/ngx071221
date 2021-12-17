import { ChangeDetectorRef, Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
@Component({
	selector: 'ngx-classwork-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	public title = 'Ngx Course';

	public drawer!: MatDrawer;

	public text = 'Galaxy 10';

	public person1 = { name: 'Ihor' };

	public constructor(
		// private applicationRef: ApplicationRef
		private changeDetectorRef: ChangeDetectorRef,
	) {
		console.log(this.changeDetectorRef);
		setTimeout(() => {
			// this.applicationRef.tick();
			this.person1 = { name: 'Lena' };
		}, 5000);
	}

	public changeText(text: string) {
		this.text = text;
	}

	public setDrawer(drawer: MatDrawer) {
		// Promise.resolve().then(() => {
		// 	this.drawer = drawer;
		// });
		// setTimeout(() => {
		// 	this.drawer = drawer;
		// });
		this.drawer = drawer;
		this.changeDetectorRef.detectChanges();
	}
}

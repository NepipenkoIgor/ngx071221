import { ChangeDetectorRef, Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
	selector: 'ngx-classwork-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
	public title = 'Ngx Course';

	public drawer!: MatDrawer;

	public constructor(private changeDetectorRef: ChangeDetectorRef) {}

	public setDrawer(drawer: MatDrawer) {
		this.drawer = drawer;
		this.changeDetectorRef.detectChanges();
	}
}

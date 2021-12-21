/* eslint-disable @angular-eslint/no-conflicting-lifecycle */
import { Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
	selector: 'ngx-classwork-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
	@Input()
	public title: string = '';

	@Input()
	public drawer!: MatDrawer;

	public constructor() {
		console.log('constructor', this.title);
	}

	public toggle() {
		this.drawer.toggle();
	}
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'ngx-classwork-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
	@Input()
	public title: string = '';

	@Output()
	public toggleSideNav = new EventEmitter();

	public toggle() {
		this.toggleSideNav.emit({ ngx: 'Angular is awesome' });
	}
}

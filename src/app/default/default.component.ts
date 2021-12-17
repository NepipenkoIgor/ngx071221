import { Component, Input } from '@angular/core';

@Component({
	selector: 'ngx-classwork-default',
	templateUrl: './default.component.html',
	styleUrls: ['./default.component.css'],
})
export class DefaultComponent {
	@Input()
	public person: any;

	public getTimeStamp() {
		return Date.now();
	}
}

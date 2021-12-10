import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'ngx-classwork-root',
	templateUrl: './app.component.html',
	// template: '<div></div>',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	public title = 'Ngx Course';

	private salary = 3000;

	public arr = [1, 2, 3];

	public myWidth = 50;

	public span = this.domSanitizer.bypassSecurityTrustHtml('<span style="color: red">My tag</span>');

	public imgSrc =
		'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png';

	public user = { info: { male: true } } as any;

	public getSalary() {
		return Math.round(this.salary);
	}

	public constructor(private readonly domSanitizer: DomSanitizer) {}

	public myClick(ref: HTMLElement, e: Event) {
		console.log('CLICK', ref);
		console.log('CLICK', e);
	}

	public search(e: Event) {
		const { value } = e.target as HTMLInputElement;
		this.title = value;
	}

	public toggle(myObject: { ngx: string }) {
		console.log(myObject);
	}
}

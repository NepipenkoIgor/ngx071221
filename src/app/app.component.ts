import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
	selector: 'ngx-classwork-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
	public constructor(private readonly router: Router) {}

	public ngOnInit() {
		this.router.events
			.pipe(
				// tap((e) => console.log(e)),
				filter((e) => e instanceof NavigationStart && e?.id === 1),
			)
			.subscribe(() => {
				//console.log(e);
			});
	}
}

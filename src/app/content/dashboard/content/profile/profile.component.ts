import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'ngx-classwork-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
	public title!: string;

	public constructor(private readonly activatedRoute: ActivatedRoute) {}

	public ngOnInit(): void {
		console.log(this.activatedRoute);
		console.log(this.activatedRoute.snapshot);
		this.title = this.activatedRoute.snapshot.data['title'];
	}
}

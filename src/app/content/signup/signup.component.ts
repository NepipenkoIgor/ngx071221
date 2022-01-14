import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'ngx-classwork-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
	public constructor(public router: Router) {}

	public goToLogin(): void {
		this.router.navigate(['/login']);
	}
}

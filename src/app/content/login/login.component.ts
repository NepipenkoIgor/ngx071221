import { Component } from '@angular/core';

@Component({
	selector: 'ngx-classwork-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent {
	public login(user: { username: string; password: string }) {
		console.log(user);
	}
}

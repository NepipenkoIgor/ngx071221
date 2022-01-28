import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
	public constructor(private readonly http: HttpClient) {}

	public login(user: any): Observable<any> {
		return this.http.post('/auth/signin', { ...user });
	}

	public signup(user: any): Observable<any> {
		return this.http.post('/auth/signup', { ...user });
	}

	public checkUser(): Observable<any> {
		return this.http.get('/auth/checkuser');
	}

	public tokenToLocalStorage(user: any) {
		if (!user || !user.accessToken) {
			return of(null);
		}
		localStorage.setItem('accessToken', user.accessToken);
		return of(user);
	}

	public getTokenFromLocalStorage() {
		return of(localStorage.getItem('accessToken'));
	}

	public removeTokenFromLocalStorage() {
		return of(localStorage.removeItem('accessToken'));
	}
}

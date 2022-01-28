import { Inject, Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
	HttpResponse,
} from '@angular/common/http';
import { catchError, filter, map, Observable, switchMap, throwError } from 'rxjs';
import { BASE_URL } from '../token/tokens';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	public constructor(
		@Inject(BASE_URL) private readonly baseUrl: string,
		private readonly authService: AuthService,
	) {}

	public intercept(
		request: HttpRequest<unknown>,
		next: HttpHandler,
	): Observable<HttpEvent<unknown>> {
		return this.authService.getTokenFromLocalStorage().pipe(
			switchMap((accessToken: string | null) => {
				const headers = request.headers
					.append('Content-Type', 'application/json')
					.append('Authorization', `Bearer ${accessToken} `);
				const url = request.url;

				const req = request.clone({
					url: `${this.baseUrl}${url}`,
					headers,
				});
				return next.handle(req).pipe(
					filter((event: HttpEvent<unknown>): event is HttpResponse<{ data: unknown }> => {
						return event instanceof HttpResponse;
					}),
					map((res: HttpResponse<{ data: unknown }>) => {
						return res.clone({ body: res.body && res.body.data });
					}),
					catchError((err) => {
						console.log(err);
						return throwError('');
					}),
				);
			}),
		);
	}
}

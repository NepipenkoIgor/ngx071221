import { Inject, Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
	HttpResponse,
} from '@angular/common/http';
import { catchError, filter, map, Observable, throwError } from 'rxjs';
import { BASE_URL } from '../token/tokens';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	public constructor(@Inject(BASE_URL) private readonly baseUrl: string) {}

	public intercept(
		request: HttpRequest<unknown>,
		next: HttpHandler,
	): Observable<HttpEvent<unknown>> {
		const url = request.url;
		const headers = request.headers
			.append('Content-Type', 'application/json')
			.append(
				'Authorization',
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImluZXBpcGVua28iLCJpYXQiOjE2MDA3MDg1MzJ9.Uch-jamBl7U9XF_m1riA9APROi_lO-mkDmnjjuv8Kv8',
			);
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
	}
}

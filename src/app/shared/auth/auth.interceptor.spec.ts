import {
	HttpClientTestingModule,
	HttpTestingController,
	TestRequest,
} from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { BASE_URL } from '../token/tokens';
import { environment } from '../../../environments/environment';
import { AuthService } from './auth.service';
import { of } from 'rxjs';

describe('[Auth] Interceptor', () => {
	let httpMock: HttpTestingController;
	const accessToken: string = '123123qsdasdasd123123asd';

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [
				{
					provide: BASE_URL,
					useValue: environment.baseUrl,
				},
				{
					provide: HTTP_INTERCEPTORS,
					useClass: AuthInterceptor,
					multi: true,
				},
				{
					provide: AuthService,
					useValue: {
						getTokenFromLocalStorage() {
							return of(accessToken);
						},
					},
				},
			],
		});

		httpMock = TestBed.inject(HttpTestingController);
	});

	it('Should have auth token ', inject(
		[BASE_URL, HttpClient],
		(baseUrl: string, http: HttpClient) => {
			const url = `${baseUrl}/some_end_point`;
			http.get('/some_end_point').subscribe();
			const httpReq: TestRequest = httpMock.expectOne({
				method: 'GET',
				url,
			});

			expect(httpReq.request.headers.has('Authorization')).toBeTruthy();
			expect(httpReq.request.headers.get('Authorization')).toEqual(`Bearer ${accessToken} `);
		},
	));

	it('Should replace body with data ', inject(
		[BASE_URL, HttpClient],
		(baseUrl: string, http: HttpClient) => {
			const resData = [1, 2, 3];
			const url = `${baseUrl}/some_end_point`;
			http.get('/some_end_point').subscribe((d) => {
				expect(d).toEqual(resData);
			});
			const httpReq: TestRequest = httpMock.expectOne({
				method: 'GET',
				url,
			});
			httpReq.flush({ data: resData });
		},
	));
});

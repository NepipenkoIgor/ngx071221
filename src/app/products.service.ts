import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';

export interface IProduct {
	_id: string;
	title: string;
	img: string;
	price: number;
	author: string;
	isFavorite: boolean;
}

@Injectable()
export class ProductsService {
	public constructor(private http: HttpClient) {}

	public getProducts() {
		return this.http.get<IProduct[]>('/products').pipe(
			catchError(() => {
				return of([]);
			}),
		);
	}
}

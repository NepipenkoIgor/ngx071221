import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

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
	public constructor(private http: HttpClient) {
		console.log(this.http);
	}

	public getProducts() {
		return this.http
			.get<{ data: IProduct[] }>('http://localhost:8090/products', {
				headers: {
					Authorization:
						'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImluZXBpcGVua28iLCJpYXQiOjE2MDA3MDg1MzJ9.Uch-jamBl7U9XF_m1riA9APROi_lO-mkDmnjjuv8Kv8',
				},
			})
			.pipe(
				map((res) => {
					return res.data;
				}),
			);
	}
}

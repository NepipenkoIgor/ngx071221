import { delay, Observable, of } from 'rxjs';

export interface IProduct {
	_id: string;
	title: string;
	img: string;
	price: number;
	author: string;
	isFavorite: boolean;
}

export const products: IProduct[] = [
	{
		_id: '61c200dc8532d2c0ec8a9dc2',
		title: 'Moto 2X',
		img: 'assets/img/product-2.jpg',
		price: 221,
		author: 'Motorola',
		isFavorite: false,
	},
	{
		_id: '61c200dc8532d2c0ec8a9dc3',
		title: 'Galaxy S3',
		img: 'assets/img/product-5.jpg',
		price: 23,
		author: 'Samsung',
		isFavorite: true,
	},
	{
		_id: '61c200dc8532d2c0ec8a9dc4',
		title: 'IPad 12 pro',
		img: 'assets/img/product-6.jpg',
		price: 2344,
		author: 'Apple',
		isFavorite: false,
	},
	{
		_id: '61c200dc8532d2c0ec8a9dc5',
		title: 'Moto 31',
		img: 'assets/img/product-7.jpg',
		price: 334,
		author: 'Motorola',
		isFavorite: false,
	},
	{
		_id: '61c200dc8532d2c0ec8a9dc6',
		title: 'Galaxy A',
		img: 'assets/img/product-3.jpg',
		price: 333,
		author: 'Samsung',
		isFavorite: true,
	},
	{
		_id: '61c200dc8532d2c0ec8a9dc7',
		title: 'IPad 8',
		img: 'assets/img/product-8.jpg',
		price: 22,
		author: 'Apple',
		isFavorite: false,
	},
	{
		_id: '61c200dc8532d2c0ec8a9dc8',
		title: 'IPad 10',
		img: 'assets/img/product-9.jpg',
		price: 1200,
		author: 'Apple',
		isFavorite: true,
	},
	{
		_id: '61c200dc8532d2c0ec8a9dc9',
		title: 'Moto 11',
		img: 'assets/img/product-4.jpg',
		price: 2345,
		author: 'Motorola',
		isFavorite: false,
	},
	{
		_id: '61c200dc8532d2c0ec8a9dca',
		title: 'Galaxy 10',
		img: 'assets/img/product-1.jpg',
		price: 200,
		author: 'Samsung',
		isFavorite: true,
	},
];

export const products$: Observable<IProduct[]> = of(products).pipe(delay(3000));

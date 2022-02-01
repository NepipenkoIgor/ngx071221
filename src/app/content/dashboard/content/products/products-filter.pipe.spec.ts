import { IProduct } from './products.service';
import { ProductsFilterPipe } from './products-filter.pipe';

const mockedProducts: IProduct[] = [
	{
		_id: '61f961243b0dd6737201ad20',
		title: 'Moto 11',
		img: 'assets/img/product-4.jpg',
		price: 2345,
		author: 'Motorola',
		isFavorite: false,
	},
	{
		_id: '61f961243b0dd6737201ad21',
		title: 'Galaxy S3',
		img: 'assets/img/product-5.jpg',
		price: 23,
		author: 'Samsung',
		isFavorite: true,
	},
	{
		_id: '61f961243b0dd6737201ad22',
		title: 'IPad 12 pro',
		img: 'assets/img/product-6.jpg',
		price: 2344,
		author: 'Apple',
		isFavorite: false,
	},
	{
		_id: '61f961243b0dd6737201ad23',
		title: 'Moto 31',
		img: 'assets/img/product-7.jpg',
		price: 334,
		author: 'Motorola',
		isFavorite: false,
	},
	{
		_id: '61f961243b0dd6737201ad24',
		title: 'IPad 8',
		img: 'assets/img/product-8.jpg',
		price: 22,
		author: 'Apple',
		isFavorite: false,
	},
	{
		_id: '61f961243b0dd6737201ad25',
		title: 'Galaxy 10',
		img: 'assets/img/product-1.jpg',
		price: 200,
		author: 'Samsung',
		isFavorite: true,
	},
	{
		_id: '61f961243b0dd6737201ad26',
		title: 'Galaxy A',
		img: 'assets/img/product-3.jpg',
		price: 333,
		author: 'Samsung',
		isFavorite: true,
	},
	{
		_id: '61f961243b0dd6737201ad27',
		title: 'IPad 10',
		img: 'assets/img/product-9.jpg',
		price: 1200,
		author: 'Apple',
		isFavorite: true,
	},
	{
		_id: '61f961243b0dd6737201ad28',
		title: 'Moto 2X',
		img: 'assets/img/product-2.jpg',
		price: 221,
		author: 'Motorola',
		isFavorite: false,
	},
];

describe('[Products] Products Filter Pipe', () => {
	let productsFilterPipe: ProductsFilterPipe;

	beforeEach(() => {
		productsFilterPipe = new ProductsFilterPipe();
	});

	it('Should transform right ', () => {
		expect(productsFilterPipe.transform(mockedProducts, '')).toEqual(mockedProducts);
		const product = mockedProducts.find((p) => p.title === 'Galaxy A');
		const products = mockedProducts.filter((p) => p.isFavorite);
		expect(productsFilterPipe.transform(mockedProducts, 'Galaxy A')).toEqual([product!]);
		expect(productsFilterPipe.transform(mockedProducts, '', true)).toEqual(products);
	});
});

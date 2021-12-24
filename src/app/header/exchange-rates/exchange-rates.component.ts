import { Component } from '@angular/core';
import { IRateMode } from './exchange-rates.directive';

@Component({
	selector: 'ngx-classwork-exchange-rates',
	templateUrl: './exchange-rates.component.html',
	styleUrls: ['./exchange-rates.component.css'],
})
export class ExchangeRatesComponent {
	public rates = [
		{
			currency: 'EUR',
			value: 10,
		},
		{
			currency: 'USD',
			value: 100,
		},
		{
			currency: 'RUB',
			value: 1,
		},
	];

	public mode: IRateMode = IRateMode.ON;

	public ms: number = 5000;
}

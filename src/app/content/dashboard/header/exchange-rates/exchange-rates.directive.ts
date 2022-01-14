/* eslint-disable @angular-eslint/no-input-rename */
import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

export interface IRate {
	currency: string;
	value: number;
}

export enum IRateMode {
	ON = 'on',
	OFF = 'off',
}

@Directive({
	selector: '[ngxClassworkExchangeRates]',
})
export class ExchangeRatesDirective implements OnInit {
	@Input('ngxClassworkExchangeRatesFrom')
	public rates!: IRate[];

	@Input('ngxClassworkExchangeRatesAutoplay')
	public autoplay: IRateMode = IRateMode.ON;

	@Input('ngxClassworkExchangeRatesDelay')
	public delay: number = 2000;

	public context: any = {};

	private index: number = 0;

	private intervalId!: number | null;

	public constructor(
		private readonly templateRef: TemplateRef<any>,
		private readonly viewContainerRef: ViewContainerRef,
	) {}

	public ngOnInit(): void {
		this.context = {
			$implicit: this.rates[this.index],
			next: () => {
				this.next();
			},
			prev: () => {
				this.prev();
			},
		};
		// for (let rate of this.rates) {
		//   const context = { ...this.context, $implicit: rate };
		//   this.viewContainerRef.createEmbeddedView(this.templateRef, context);
		// }
		this.viewContainerRef.createEmbeddedView(this.templateRef, this.context);
		this.resetInterval();
	}

	private prev() {
		this.index--;
		if (this.index < 0) {
			this.index = this.rates.length - 1;
		}
		this.context.$implicit = this.rates[this.index];
		this.resetInterval();
	}

	private next() {
		this.index++;
		if (this.index >= this.rates.length) {
			this.index = 0;
		}
		this.context.$implicit = this.rates[this.index];
		this.resetInterval();
	}

	private resetInterval(): void {
		if (this.autoplay == IRateMode.OFF) {
			return;
		}
		this.clearInterval().initInterval();
	}

	private initInterval(): void {
		this.intervalId = setInterval(() => {
			this.next();
		}, this.delay);
	}

	private clearInterval(): this {
		if (this.intervalId) {
			clearInterval(this.intervalId);
		}
		return this;
	}
}

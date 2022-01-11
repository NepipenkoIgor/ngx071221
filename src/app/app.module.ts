import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { DrawerComponent } from './drawer/drawer.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { SharedModule } from './shared/shared.module';
import { ExchangeRatesComponent } from './header/exchange-rates/exchange-rates.component';
import { ExchangeRatesDirective } from './header/exchange-rates/exchange-rates.directive';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { BASE_URL } from './tokens';
import { ProductsService } from './products.service';
import { ModalModule } from './modal/modal.module';
import { of } from 'rxjs';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		SearchComponent,
		DrawerComponent,
		ProductCardComponent,
		ProductsFilterPipe,
		ExchangeRatesComponent,
		ExchangeRatesDirective,
	],
	imports: [BrowserModule, BrowserAnimationsModule, SharedModule, HttpClientModule, ModalModule],
	providers: [
		{
			provide: ProductsService,
			useFactory: () => {
				const width = window.innerWidth;
				console.log(width);
				if (width > 500) {
					return {
						getProducts() {
							return of([
								{
									_id: '61c200dc8532d2c0ec8a9dc3',
									title: 'Galaxy S3',
									img: 'assets/img/product-5.jpg',
									price: 23,
									author: 'Samsung',
									isFavorite: true,
								},
							]);
						},
					};
				}
				return {
					getProducts() {
						return of([
							{
								_id: '61c200dc8532d2c0ec8a9dc3',
								title: 'Galaxy S15',
								img: 'assets/img/product-5.jpg',
								price: 23,
								author: 'Samsung',
								isFavorite: true,
							},
						]);
					},
				};
			},
		},
		{
			provide: 'Products',
			useExisting: ProductsService,
		},
		{
			provide: BASE_URL,
			useValue: environment.baseUrl,
			multi: true,
		},
		{
			provide: 'baseUrl',
			useValue: 'localhost:3000',
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { DrawerComponent } from './drawer/drawer.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { ExchangeRatesComponent } from './header/exchange-rates/exchange-rates.component';
import { ExchangeRatesDirective } from './header/exchange-rates/exchange-rates.directive';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { ProductsService } from './products.service';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
	declarations: [
		HeaderComponent,
		SearchComponent,
		DrawerComponent,
		ProductCardComponent,
		ProductsFilterPipe,
		ExchangeRatesComponent,
		ExchangeRatesDirective,
		DashboardComponent,
	],
	imports: [SharedModule, DashboardRoutingModule],
	providers: [ProductsService],
})
export class DashboardModule {}

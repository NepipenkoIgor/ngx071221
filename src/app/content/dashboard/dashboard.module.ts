import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { DrawerComponent } from './drawer/drawer.component';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ExchangeRatesComponent } from './header/exchange-rates/exchange-rates.component';
import { ExchangeRatesDirective } from './header/exchange-rates/exchange-rates.directive';

@NgModule({
	declarations: [
		HeaderComponent,
		DrawerComponent,
		DashboardComponent,
		ExchangeRatesComponent,
		ExchangeRatesDirective,
	],
	imports: [SharedModule, DashboardRoutingModule],
})
export class DashboardModule {}

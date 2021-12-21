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

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		SearchComponent,
		DrawerComponent,
		ProductCardComponent,
		ProductsFilterPipe,
	],
	imports: [BrowserModule, BrowserAnimationsModule, SharedModule],
	bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchComponent } from './search/search.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DrawerComponent } from './drawer/drawer.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { DefaultComponent } from './default/default.component';
import { OnPushComponent } from './on-push/on-push.component';
import { FormsModule } from '@angular/forms';

/*
 *  NgModule  => es6 Modules
 *  Directive (Component)
 *  Pipe
 *  Service
 * */

/**
 *  declarations => let/const
 *  imports => import
 *  exports => export
 */

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		SearchComponent,
		DrawerComponent,
		DefaultComponent,
		OnPushComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatButtonModule,
		MatIconModule,
		MatInputModule,
		MatFormFieldModule,
		MatSidenavModule,
		MatListModule,
		FlexLayoutModule,
		FormsModule,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}

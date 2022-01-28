import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ModalModule } from './modal/modal.module';
import { AppRoutingModule } from './app-routing.module';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store';
import { checkJWT } from './store/actions/auth.actions';
import { AuthEffects } from './store/effects/auth.effects';

export function initApp(store: Store) {
	return () => {
		//TODO show dynamic config
		store.dispatch(checkJWT());
	};
}

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		SharedModule.forRoot(),
		ModalModule.forRoot(),
		StoreModule.forRoot(reducers),
		EffectsModule.forRoot([AuthEffects]),
		StoreDevtoolsModule.instrument({
			maxAge: 25, // Retains last 25 states
			logOnly: environment.production, // Restrict extension to log-only mode
			autoPause: true, // Pauses recording actions and state changes when the extension window is not open
		}),
	],
	providers: [
		{
			provide: APP_INITIALIZER,
			useFactory: initApp,
			deps: [Store],
			multi: true,
		},
	],
	// entryComponents: [ProductConfirmComponent],
	bootstrap: [AppComponent],
})
export class AppModule {}

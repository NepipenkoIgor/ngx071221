import { ModuleWithProviders, NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HiddenDirective } from './hidden/hidden.directive';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';
import { BASE_URL } from './token/tokens';
import { environment } from '../../environments/environment';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './auth/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserNameValidatorDirective } from './validators/user-name-validator.directive';
import { ValidatorsService } from './validators/validators.service';

const declarations = [HiddenDirective, UserNameValidatorDirective];

@NgModule({
	declarations,
	exports: [
		CommonModule,
		MatToolbarModule,
		MatButtonModule,
		MatIconModule,
		MatInputModule,
		MatFormFieldModule,
		MatSidenavModule,
		MatListModule,
		MatCardModule,
		MatCheckboxModule,
		FlexLayoutModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		...declarations,
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true,
		},
	],
})
export class SharedModule {
	public static forRoot(): ModuleWithProviders<SharedModule> {
		return {
			ngModule: SharedModule,
			providers: [
				ValidatorsService,
				AuthGuard,
				{
					provide: BASE_URL,
					useValue: environment.baseUrl,
					multi: true,
				},
			],
		};
	}
}

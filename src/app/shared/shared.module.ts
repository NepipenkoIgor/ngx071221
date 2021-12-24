import { NgModule } from '@angular/core';
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

const declarations = [HiddenDirective];

@NgModule({
	declarations,
	exports: [
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
		...declarations,
	],
})
export class SharedModule {}

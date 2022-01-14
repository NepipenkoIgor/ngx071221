import { NgModule } from '@angular/core';
import { SignupComponent } from './signup.component';
import { SharedModule } from '../../shared/shared.module';
import { SignupRoutingModule } from './signup-routing.module';

@NgModule({
	declarations: [SignupComponent],
	imports: [SharedModule, SignupRoutingModule],
})
export class SignupModule {}

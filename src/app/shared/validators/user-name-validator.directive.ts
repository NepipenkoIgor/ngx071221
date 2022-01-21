import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { ValidatorsService } from './validators.service';

// function validate({ value }: AbstractControl): ValidationErrors | null {
// 	const valid = /^[a-zA-Z]*$/.test(value);
// 	return valid
// 		? null
// 		: {
// 				withoutSpecialCharacters: 'Field should be without  special symbols. $,% .....',
// 		  };
// }

@Directive({
	selector: '[ngxClassworkUserNameValidator]',
	providers: [
		{
			provide: NG_VALIDATORS,
			// useValue: validate,
			useExisting: UserNameValidatorDirective,
			multi: true,
		},
	],
})
export class UserNameValidatorDirective implements Validator {
	public constructor(private readonly validatorsService: ValidatorsService) {}

	public validate(control: AbstractControl): ValidationErrors | null {
		return this.validatorsService.withoutSpecialSymbols(control);
	}
}

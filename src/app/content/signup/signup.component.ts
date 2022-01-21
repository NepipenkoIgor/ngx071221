import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ValidatorsService } from '../../shared/validators/validators.service';

@Component({
	selector: 'ngx-classwork-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
	public signUpForm = this.fb.group({
		username: [
			'Igor',
			{
				validators: [
					Validators.required,
					Validators.minLength(5),
					this.validatorsService.withoutSpecialSymbols,
				],
				asyncValidators: this.validatorsService.uniqueName.bind(this.validatorsService),
				updateOn: 'change',
			},
		],
		emails: this.fb.array([this.fb.control('', Validators.required)]),
		password: this.fb.group(
			{
				password: ['', Validators.required],
				cpassword: ['', Validators.required],
			},
			{
				validators: [this.validatorsService.equalFields],
			},
		),
	});

	public constructor(
		private readonly router: Router,
		private readonly fb: FormBuilder,
		private readonly validatorsService: ValidatorsService,
	) {
		// this.signUpForm.patchValue({ password: { password: '' } }, { emitEvent: false });
	}

	public goToLogin(): void {
		this.router.navigate(['/login']);
	}

	public signup() {
		console.log(this.signUpForm.value);
	}

	public getControls(control: AbstractControl, path: string): AbstractControl[] {
		return (control.get(path) as FormArray).controls;
	}

	public addEmail() {
		(this.signUpForm.get('emails') as FormArray).push(this.fb.control('', Validators.required));
	}

	public removeEmail(index: number) {
		(this.signUpForm.get('emails') as FormArray).removeAt(index);
	}
}

import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, timer } from 'rxjs';

@Injectable()
export class ValidatorsService {
	public constructor(private readonly http: HttpClient) {}

	public withoutSpecialSymbols(this: this, { value }: AbstractControl): ValidationErrors | null {
		const valid = /^[a-zA-Z]*$/.test(value);
		return valid
			? null
			: {
					withoutSpecialCharacters: 'Field should be without  special symbols. $,% .....',
			  };
	}

	public equalFields(this: this, { value }: FormGroup): ValidationErrors | null {
		const [password, cpassword] = Object.values(value);
		return password === cpassword
			? null
			: {
					equal: true,
			  };
	}

	public uniqueName(
		this: this,
		{ value: username }: FormControl,
	): Observable<ValidationErrors | null> {
		console.log(username);
		return timer(3000).pipe(switchMap(() => this.http.post('/auth/checkUsername', { username })));
	}
}

import { Component, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'ngx-classwork-switcher',
	templateUrl: './switcher.component.html',
	styleUrls: ['./switcher.component.css'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: SwitcherComponent,
			multi: true,
		},
	],
})
export class SwitcherComponent implements ControlValueAccessor {
	public checked: boolean = true;

	private onChange: Function = () => {};

	@HostListener('click')
	public toggle() {
		this.checked = !this.checked;
		this.onChange(this.checked);
	}

	public writeValue(checked: boolean) {
		console.log('VALUE ==> ', checked);
		this.checked = checked;
	}

	public registerOnChange(fn: any) {
		this.onChange = fn;
	}

	public registerOnTouched(_fn: any) {}
}

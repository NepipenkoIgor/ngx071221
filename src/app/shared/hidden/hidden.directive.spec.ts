import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HiddenDirective } from './hidden.directive';
import { By } from '@angular/platform-browser';

@Component({
	selector: 'ngx-classwork-test',
	template: `
		<div ngxClassworkHidden #c="ngwh"></div>
		<div class="hide" (click)="c.hide()">Hide</div>
		<div class="show" (click)="c.show()">Show</div>
	`,
})
class TestComponent {}

describe('[Shared] Hidden Directive', () => {
	let fixture: ComponentFixture<TestComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [TestComponent, HiddenDirective],
		});
		// .overrideTemplate(TestComponent, '<div></div>');
		fixture = TestBed.createComponent(TestComponent);
		fixture.detectChanges();
	});

	it('Should hide and show element', () => {
		const el: DebugElement = fixture.debugElement.query(By.css('[ngxClassworkHidden]'));
		const hideControl: DebugElement = fixture.debugElement.query(By.css('.hide'));
		const showControl: DebugElement = fixture.debugElement.query(By.css('.show'));
		hideControl.triggerEventHandler('click', {});
		fixture.detectChanges();
		expect(el.styles['visibility']).toEqual('hidden');
		showControl.triggerEventHandler('click', {});
		fixture.detectChanges();
		expect(el.styles['visibility']).toEqual('visible');
	});
});

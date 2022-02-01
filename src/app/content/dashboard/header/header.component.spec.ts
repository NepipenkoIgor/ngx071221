import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { MatDrawer } from '@angular/material/sidenav';

describe('[Header] component', () => {
	let fixture: ComponentFixture<HeaderComponent>;
	let componentInstance: HeaderComponent;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [HeaderComponent],
		}).overrideTemplate(HeaderComponent, '<div></div>');
		fixture = TestBed.createComponent(HeaderComponent);
		componentInstance = fixture.componentInstance;
		componentInstance.drawer = {
			toggle: () => {},
		} as MatDrawer;
		fixture.detectChanges();
		spyOn(componentInstance.drawer, 'toggle').and.callThrough();
	});
	it('Should toggle drawer ', () => {
		componentInstance.toggle();
		expect(componentInstance.drawer.toggle).toHaveBeenCalled();
	});
});

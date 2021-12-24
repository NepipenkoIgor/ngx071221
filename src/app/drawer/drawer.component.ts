/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import {
	AfterViewInit,
	Component,
	OnInit,
	TemplateRef,
	ContentChild,
	ViewChild,
	AfterContentInit,
	ViewContainerRef,
	Output,
	EventEmitter,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
	selector: 'ngx-classwork-drawer',
	templateUrl: './drawer.component.html',
	styleUrls: ['./drawer.component.css'],
})
export class DrawerComponent implements OnInit, AfterViewInit, AfterContentInit {
	@ViewChild('drawer', { static: true })
	public drawer!: MatDrawer;

	@ContentChild('contentTmpl', { static: true })
	public tmpl!: TemplateRef<any>;

	@ViewChild('contentPlace', { read: ViewContainerRef, static: true })
	public contentPlace!: ViewContainerRef;

	@Output()
	public setDrawerControl: EventEmitter<MatDrawer> = new EventEmitter<MatDrawer>();

	public ngOnInit(): void {
		this.contentPlace.createEmbeddedView(this.tmpl);
		this.setDrawerControl.emit(this.drawer);
	}

	public ngAfterContentInit() {}

	public ngAfterViewInit() {
		// this.contentPlace.createEmbeddedView(this.tmpl);
	}
}

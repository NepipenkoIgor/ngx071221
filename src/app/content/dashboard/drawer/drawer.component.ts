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
import { Store } from '@ngrx/store';
import { IAppState } from '../../../store';
import { logOut } from '../../../store/actions/auth.actions';

@Component({
	selector: 'ngx-classwork-drawer',
	templateUrl: './drawer.component.html',
	styleUrls: ['./drawer.component.css'],
	// providers: [{ provide: ProductsService, useValue: 'drawer' }],
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

	public constructor(private readonly store: Store<IAppState>) {}

	public ngOnInit(): void {
		this.contentPlace.createEmbeddedView(this.tmpl);
		this.setDrawerControl.emit(this.drawer);
	}

	public ngAfterContentInit() {}

	public ngAfterViewInit() {
		// this.contentPlace.createEmbeddedView(this.tmpl);
	}

	public logout() {
		this.store.dispatch(logOut());
	}
}

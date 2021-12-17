/* eslint-disable @angular-eslint/no-conflicting-lifecycle */
import {
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	Component,
	DoCheck,
	Input,
	OnChanges,
	OnInit,
	SimpleChanges,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
	selector: 'ngx-classwork-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
})
export class HeaderComponent
	implements
		OnInit,
		OnChanges,
		DoCheck,
		AfterContentInit,
		AfterContentChecked,
		AfterViewInit,
		AfterViewChecked
{
	@Input()
	public title: string = '';
	// public set title(text: string) {
	// 	console.log('CHANGE', text);
	// 	this.internalTitle = text;
	// }
	//
	// public internalTitle: string = '';

	@Input()
	public drawer!: MatDrawer;

	public constructor() {
		console.log('constructor', this.title);
	}

	public ngOnInit() {
		console.log('ngOnInit');
	}

	public ngOnChanges(changes: SimpleChanges) {
		console.log('ngOnChanges', changes);
	}

	public ngDoCheck() {
		console.log('ngDoCheck');
	}

	public ngAfterContentInit() {
		console.log('ngAfterContentInit');
	}

	public ngAfterContentChecked() {
		console.log('ngAfterContentChecked');
	}

	public ngAfterViewInit() {
		console.log('ngAfterViewInit');
	}

	public ngAfterViewChecked() {
		console.log('ngAfterViewzChecked');
	}

	public toggle() {
		this.drawer.toggle();
	}
}

/*
 DoCheck
    -
    -
    -
    -

 */

import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	Input,
	OnInit,
} from '@angular/core';

@Component({
	selector: 'ngx-classwork-on-push',
	templateUrl: './on-push.component.html',
	styleUrls: ['./on-push.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnPushComponent implements OnInit {
	@Input()
	public person: any;

	public constructor(private changeDetectorRef: ChangeDetectorRef) {}

	public ngOnInit() {
		setTimeout(() => {
			this.changeDetectorRef.detach();
		});

		setTimeout(() => {
			this.changeDetectorRef.reattach();
		}, 10000);
	}

	public getTimeStamp() {
		return Date.now();
	}
}

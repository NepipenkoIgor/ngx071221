import { Subject } from 'rxjs';
import { Injectable, OnDestroy } from '@angular/core';

@Injectable()
export class UnSubscriber implements OnDestroy {
	public unSubscriber = new Subject();

	public ngOnDestroy() {
		this.unSubscriber.next(null);
		this.unSubscriber.complete();
	}
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ModalService {
	private sequence = new Subject();

	public get modalSequence() {
		return this.sequence.asObservable();
	}

	public open(data: any): void {
		this.sequence.next(data);
	}

	public close(): void {}
}

import { Injectable, Injector, Type } from '@angular/core';
import { Subject } from 'rxjs';

export interface IModalData {
	component: Type<any>;
	injector?: Injector;
	context: { [key: string]: any };
}

@Injectable()
export class ModalService {
	private sequence = new Subject<IModalData | null>();

	public get modalSequence() {
		return this.sequence.asObservable();
	}

	public open(data: IModalData): void {
		this.sequence.next(data);
	}

	public close(): void {
		this.sequence.next(null);
	}
}

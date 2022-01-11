import { Component, OnInit } from '@angular/core';
import { ModalService } from './modal.service';
import { UnSubscriber } from '../unsubscriber';
import { takeUntil } from 'rxjs';

@Component({
	selector: 'ngx-classwork-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.css'],
})
export class ModalComponent extends UnSubscriber implements OnInit {
	public value: any;

	public constructor(private readonly modalService: ModalService) {
		super();
	}

	public ngOnInit(): void {
		this.modalService.modalSequence.pipe(takeUntil(this.unSubscriber)).subscribe((value) => {
			this.value = value;
		});
	}
}

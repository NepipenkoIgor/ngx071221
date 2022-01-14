import {
	Component,
	ComponentFactory,
	ComponentRef,
	HostListener,
	Injector,
	OnInit,
	ViewChild,
	ViewContainerRef,
} from '@angular/core';
import { IModalData, ModalService } from './modal.service';
import { UnSubscriber } from '../shared/utils/unsubscriber';
import { takeUntil } from 'rxjs';

@Component({
	selector: 'ngx-classwork-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.css'],
})
export class ModalComponent extends UnSubscriber implements OnInit {
	public value: any;

	public isOpen: boolean = false;

	public componentFactory!: ComponentFactory<any>;

	public componentRef!: ComponentRef<any>;

	@ViewChild('modalContent', { read: ViewContainerRef })
	public modalContent!: ViewContainerRef;

	public constructor(
		private readonly injector: Injector,
		// private readonly cfr: ComponentFactoryResolver,
		private readonly modalService: ModalService, // private readonly injector: Injector,
	) {
		super();
	}

	public ngOnInit(): void {
		this.modalService.modalSequence
			.pipe(takeUntil(this.unSubscriber))
			.subscribe((modalData: IModalData | null) => {
				if (!modalData) {
					this.close();
					return;
				}
				this.isOpen = true;
				//	this.componentFactory = this.cfr.resolveComponentFactory(modalData.component);
				//	this.componentRef = this.modalContent.createComponent(this.componentFactory);
				this.componentRef = this.modalContent.createComponent(modalData.component, {
					injector: modalData.injector ?? this.injector,
				});
				Object.keys(modalData.context).forEach((key: string) => {
					this.componentRef.instance[key] = modalData.context[key];
				});
				this.componentRef.changeDetectorRef.detectChanges();
				console.log(modalData);
			});
	}

	@HostListener('window:keyup', ['$event.keyCode'])
	public close(code: number = 27) {
		if (code !== 27) {
			return;
		}
		if (this.componentRef) {
			this.componentRef.destroy();
		}
		this.isOpen = false;
	}
}

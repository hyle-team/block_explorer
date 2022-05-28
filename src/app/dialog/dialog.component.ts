import {
    HostListener,
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    AfterViewInit,
    OnDestroy,
    Renderer2,
    OnChanges,
    ElementRef
} from '@angular/core'
import { trigger, style, animate, transition } from '@angular/animations'

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
    animations: [
        trigger('dialog', [
            transition('void => *', [style({ opacity: '0' }), animate(100)])
        ])
    ]
})
export class DialogComponent
    implements OnInit, AfterViewInit, OnDestroy, OnChanges
{
    @Input() closable = true
    @Input() visible: boolean
    @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>()
    constructor(private renderer: Renderer2, public el: ElementRef) {}

    ngOnInit() {}

    ngAfterViewInit() {}

    ngOnDestroy() {}

    ngOnChanges(change) {
        if (change.visible.currentValue === true) {
            this.renderer.addClass(document.body, 'dialog-open')
            window.location.hash = '#modalOpen'
            setTimeout(() => {
                const dialog = this.el.nativeElement.querySelector('.dialog')
                if (dialog.clientHeight > window.innerHeight) {
                    this.renderer.addClass(dialog, 'dialog-top')
                } else {
                    this.renderer.addClass(dialog, 'dialog-center')
                }
            }, 50)
        } else {
            this.renderer.removeClass(document.body, 'dialog-open')
        }
    }

    @HostListener('window:hashchange', ['$event'])
    hashchangeFunc(event) {
        if (event.type === 'hashchange') {
            window.location.hash === '#modalOpen'
                ? (this.visible = true)
                : (this.visible = false)
        }
    }
    close() {
        this.visible = false
        this.visibleChange.emit(this.visible)
        window.location.hash = ''
    }
}

import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
    selector: 'app-trailer-full-screen',
    templateUrl: './trailer-full-screen.component.html',
    styleUrls: ['./trailer-full-screen.component.css']
})
export class TrailerFullScreenComponent implements OnInit {
    @Input() videoUrl = '';
    @Output() closeFullScreen = new EventEmitter<null>();

    ESCAPE_KEYCODE = 27;

    @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
        if (event.keyCode === this.ESCAPE_KEYCODE) {
            this.closeFullScreen.emit();
        }
    }

    constructor() { }

    ngOnInit() {
    }

}

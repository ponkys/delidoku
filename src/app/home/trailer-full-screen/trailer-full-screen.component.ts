import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-trailer-full-screen',
    templateUrl: './trailer-full-screen.component.html',
    styleUrls: ['./trailer-full-screen.component.css']
})
export class TrailerFullScreenComponent {
    @Input() videoUrl: SafeResourceUrl;
    @Output() closeFullScreen = new EventEmitter<null>();

    ESCAPE_KEYCODE = 27;

    @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
        if (event.keyCode === this.ESCAPE_KEYCODE) {
            this.closeFullScreen.emit();
        }
    }

}

import { SwUpdate } from '@angular/service-worker';
import { Injectable } from '@angular/core';
import { UpdateToastService } from './update-toast.service';

@Injectable({
    providedIn: 'root'
})
export class LogUpdateService {
    init = true;

    constructor(updates: SwUpdate,
        private updateToastService: UpdateToastService) {
        updates.available.subscribe(() => {
            this.updateToastService.dispatch();
        });
    }
}

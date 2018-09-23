import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateToastService {
    public toastEvents: BehaviorSubject<boolean>;

    constructor() {
        this.toastEvents = new BehaviorSubject(null);
    }

    dispatch() {
        this.toastEvents.next(true);
    }
}

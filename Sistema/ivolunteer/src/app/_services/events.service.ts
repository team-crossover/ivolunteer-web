﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User, Event } from '../_models';
import { AuthenticationService } from './authentication.service';

@Injectable({ providedIn: 'root' })
export class EventsService {

    constructor(
        private http: HttpClient,
        private authenticationService: AuthenticationService) {

    }

    getEvent(eventId: number) {
        return this.http.get<Event>(`${environment.apiUrl}/events/${eventId}`);
    }

    // /**
    //  * Checa se o evento com determinado ID pertence ao usuário atual.
    //  * @param ongId
    //  */
    // isOwnedByCurrentUser(eventId: number): boolean {
    //     const currentUser = this.authenticationService.currentUserValue;
    //     if (!currentUser)
    //         return false;

    //     const event = this.http.get<Event>(`${environment.apiUrl}/events/${eventId}`);
    //     event.pipe(e => {

    //     });
    //     return true;
    // }

}
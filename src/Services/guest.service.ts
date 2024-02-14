import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Guest} from "../Model/Guest";
import {Observable} from "rxjs";
import {take} from "rxjs/operators";
import {FormControl, ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";

@Injectable({
    providedIn: 'root'
})
export class GuestService {


    baseURL = 'https://localhost:7156/api/Guest';

    constructor(private http: HttpClient) {
    }

    public getGuest(): Observable<Guest[]> {
        return this.http.get<Guest[]>(this.baseURL);
    }

    public deleteGuest(id: number): Observable<Guest> {
        return this.http.delete<Guest>(`${this.baseURL}/${id}`);
    }

    public getGuestById(id: number): Observable<Guest> {
        return this.http.get<Guest>(`${this.baseURL}/${id}`);
    }

    public addGuest(client: ɵTypedOrUntyped<{
        confirm: FormControl<boolean | null>;
        name: FormControl<string | null>;
        email: FormControl<string | null>
    }, ɵFormGroupValue<{
        confirm: FormControl<boolean | null>;
        name: FormControl<string | null>;
        email: FormControl<string | null>
    }>, any>): Observable<Guest> {
        const options = {
            headers: new HttpHeaders().set('Content-Type', 'application/json'),
        };
        return this.http.post<Guest>(this.baseURL, client, options).pipe(take(1));
    }

}

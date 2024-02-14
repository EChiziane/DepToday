import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Driver} from "../Model/driver";
import {take} from "rxjs/operators";
import {FormControl, ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";

@Injectable({
    providedIn: 'root'
})
export class DriverService {
    baseURL = 'https://localhost:7156/api/Driver';

    constructor(private http: HttpClient) {
    }

    public getDriver(): Observable<Driver[]> {
        return this.http.get<Driver[]>(this.baseURL)
    }

    public deleteDriver(id: number): Observable<Driver> {
        return this.http.delete<Driver>(`${this.baseURL}/${id}`)
    }

    public getDriverById(id: number): Observable<Driver> {
        return this.http.get<Driver>(`${this.baseURL}/${id}`);
    }

    public addDriver(driver: ɵTypedOrUntyped<{
        phoneNumber: FormControl<string | null>;
        vehiclePlate: FormControl<string | null>;
        name: FormControl<string | null>;
        vehicleModel: FormControl<string | null>;
        id: FormControl<string | null>;
        birthDate: FormControl<string | null>
    }, ɵFormGroupValue<{
        phoneNumber: FormControl<string | null>;
        vehiclePlate: FormControl<string | null>;
        name: FormControl<string | null>;
        vehicleModel: FormControl<string | null>;
        id: FormControl<string | null>;
        birthDate: FormControl<string | null>
    }>, any>): Observable<Driver> {
        return this.http.post<Driver>(this.baseURL, driver).pipe(take(1))
    }

    public getDriveById(id: number): Observable<Driver> {
        return this.http.get<Driver>(`${this.baseURL}/${id}`);
    }

}

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Station} from "./station";
import {Travel} from "./travel";
import {environment} from "../environments/environment";

@Injectable()
export class TravelService {

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient) {
    }

    getStations(): Observable<Station[]> {
        return this.http.get<Station[]>(environment.apiUrl + '/stations')
    }

    search(departure: string, arrival: string): Observable<Travel[]> {
        return this.http.post<Travel[]>(environment.apiUrl + '/travel', `{"departureId": "${departure}", "arrivalId": "${arrival}"}`, this.httpOptions)
    }
}

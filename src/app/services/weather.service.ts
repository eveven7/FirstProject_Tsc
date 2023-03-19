import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';
import { environment } from '../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    constructor(private http: HttpClient) { }

    getWeatherData(location: string): Observable<WeatherData> {
        return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
            headers: new HttpHeaders()
                .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
                .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
            params: new HttpParams()
                .set('location', location)
                .set('u', 'c')
        })
    }
}
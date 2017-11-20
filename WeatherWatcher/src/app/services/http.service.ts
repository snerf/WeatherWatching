import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class HTTPService {
    showChanged$: Observable<boolean>;
    show: Subject<boolean>;

    BASE_API_URL = '//192.168.0.101/';//'https://snerf.github.io/WeatherWatching/WeatherWatcher/';
    CITIES = 'cities.json';

    constructor(private http: Http) {
        this.show = new Subject<boolean>();
        this.showChanged$ = this.show.asObservable();
    }

    getCities() {
        return this.http.get(this.BASE_API_URL + this.CITIES)
            .map(res => res.json())
            .catch(error => this.handleError(error));
    }

    getWeather(city: string)
    {
        return this.http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text=%27' + city + ',%20uz%27)&format=json')
            .map(res => res.json())
            .catch(error => this.handleError(error));
    }

    private handleError(error: Response) { this.show.next(false); return Observable.throw(error["error"] || "Server error"); }
}


import { Component, NgModule } from '@angular/core';
import { HTTPService } from './services/http.service';
import { CitiesObject } from './utils/classes';
import { UtilsMethods } from './utils/methods';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HTTPService, UtilsMethods]
})
export class AppComponent {
    title = 'Weather Watching';
    choosecity = 'Выберите город';
    show: boolean = false;
    cities: CitiesObject[];
    city: string;
    weather: any;

    constructor(private http: HTTPService, private utilsMethods: UtilsMethods) {
        this.http.showChanged$.subscribe(show => this.show = show);
    }

    ngOnInit()
    {
        this.show = true;
        this.http.getCities().subscribe(response => { this.show = false; this.cities = response.data;});
    }

    cityChoosed(event) {
        if (event == null) return false;
        this.show = true
        this.http.getWeather(event).subscribe(response => {
            this.show = false;
            if (response.query.count == 0) return;
            this.weather = response.query.results.channel;
            this.weather.wind.direction = this.utilsMethods.defineDirection(this.weather.wind.direction);
            this.weather.item.condition.date = this.utilsMethods.yahooCurrentDateToCommonDate(this.weather.item.condition.date);
            this.weather.astronomy.sunrise = this.utilsMethods.twelveHoursToTwentyFourHoursString(this.weather.astronomy.sunrise);
            this.weather.astronomy.sunset = this.utilsMethods.twelveHoursToTwentyFourHoursString(this.weather.astronomy.sunset);
            this.weather.atmosphere.visibility = this.utilsMethods.milesToKmString(this.weather.atmosphere.visibility);
            this.weather.wind.speed = this.utilsMethods.milesToKmString(this.weather.wind.speed);
        });
    }
}

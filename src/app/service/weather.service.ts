import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey: string = environment.weatherApiKey;
  //fullString: string = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=34e4861a005ca3dcec2193bbacfbf069"
  constructor(
    private http: HttpClient
  ) { }

  getWeatherInfo(city: string) {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + this.apiKey)
  }
}

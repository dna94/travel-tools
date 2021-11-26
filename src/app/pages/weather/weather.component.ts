import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WeatherInfo } from 'src/app/domain/weatherInfo';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weatherForm = new FormGroup({
    city: new FormControl('', [Validators.required])
  });

  weatherJSON = {}

  constructor(
    private weatherService: WeatherService
  ) { }

  weatherFormSubmit(): void {
    let city = this.weatherForm.get('city')?.value;
    this.weatherService.getWeatherInfo(city).subscribe((data: any) => {
      console.log(data);
      this.weatherJSON = data;
    })
  }

  ngOnInit(): void {
  }

}

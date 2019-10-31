import { Component, OnInit } from '@angular/core';
import { WeatherbitService } from '../weatherbit.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})

export class CitiesComponent implements OnInit {
  cities = ['Torino','Milano','Genova'];
  selezionata: string;
  temperatura: string;
  constructor(private wbs: WeatherbitService) { }
  clean() {
    this.selezionata=undefined;
  }
  update(x) {
    this.temperatura = x.data[0].temp;
  }
  refreshTemperature(itemName: string) {
    this.selezionata=itemName;
    this.wbs.getData(itemName).subscribe(
      x => this.update(x),
      err => console.error('Observer got an error: ' + err)
    );
//debugger
  }
  addCity(newCity: string) {
    if (newCity) {
      this.cities.push(newCity);
    }
  }
  ngOnInit() {
  }
}

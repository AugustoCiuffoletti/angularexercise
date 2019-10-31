import { Component } from '@angular/core';
import { WeatherbitService } from './weatherbit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Esercizio Angular';
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
}

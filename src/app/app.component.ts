import { Component } from '@angular/core';
import { WeatherbitService } from './weatherbit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Esercizio Angular';
  cities = [
    {
      nome: 'Torino',
      temperatura: '14'
    }, {
      nome: 'Milano',
      temperatura: '15'
    }, {
      nome: 'Genova',
      temperatura: '18'
    }
  ];
  selezionata;
  constructor(private wbs: WeatherbitService) { }
  clean() {
    this.selezionata=undefined;
  }
  update(x) {
    this.selezionata.temperatura = x.data[0].temp;
  }
  refreshTemperature(itemName: string) {
	var trovato = this.cities.filter(
      function(el) { return el.nome === itemName; }
	);
    this.selezionata = trovato[0];
    this.wbs.getData(this.selezionata.nome).subscribe(
      x => this.update(x),
      err => console.error('Observer got an error: ' + err)
    );
//debugger
  }
}

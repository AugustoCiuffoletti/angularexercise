import { Component } from '@angular/core';

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
  seleziona(name: string) {
    this.selezionata = name;
  }
  clean() {
    this.selezionata=undefined;
  }
}

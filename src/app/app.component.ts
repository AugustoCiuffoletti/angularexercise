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
  clean() {
    this.selezionata=undefined;
  }
  seleziona(itemName: string) {
    var trovato = this.cities.filter(
      function(el) { return el.nome === itemName; }
    );
    this.selezionata = trovato[0];
  }
}

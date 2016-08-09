import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
  <h3>{{keg.name}} | {{keg.brand}} | $\{{keg.price}} | {{keg.alcohol}}%\ | Pints: {{(keg.pints/124)*100}}</h3>
  `
})
export class KegComponent {
  public keg: Keg;
}

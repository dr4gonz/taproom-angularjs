import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
  <div class="col-md-12">
    <h3>{{keg.name}} | {{keg.brand}} | $\{{keg.price}} | {{keg.alcohol}}%\ | Pints: {{keg.pints}}</h3>
  </div>
  <div class="col-md-12">
    <div class="progress">
      <div class="progress-bar-warning progress-bar-striped" role="progressbar" style="width: {{(keg.pints/124)*100}}\%;">
        {{((keg.pints/124)*100).toFixed(1)}}\%
      </div>
    </div>
  </div>
  `
})
export class KegComponent {
  public keg: Keg;
}

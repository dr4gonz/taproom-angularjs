import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'pint-display',
  inputs: ['keg'],
  template: `
  <div class="col-md-12">
    <button class="btn btn-warning btn-lg btn-block"(click)="servePint()">Beer Me!</button>
    <h4>Total: $\{{total}}</h4>
  </div>
  `
})
export class PintComponent {
  public keg: Keg;
  public total: number = 0;
  servePint(){
    this.keg.pints -= 1;
    this.total += this.keg.price;
    console.log(this.total);
  }
}

import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'pint-display',
  inputs: ['keg'],
  template: `
  <button (click)="servePint()">Serve</button>
  `
})
export class PintComponent {
  public keg: Keg;
  servePint(){
    this.keg.pints -= 1;
  }
}

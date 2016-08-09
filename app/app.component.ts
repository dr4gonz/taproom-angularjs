import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { KegListComponent } from './keg-list.component';


@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
      <h1>TapRoom</h1>
      <keg-list
        [kegList]="kegs"
        (onKegSelect)="kegWasSelected($event)">
      </keg-list>
    </div>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg("Strong Beer", "Joey's Finest", 4.50, 5.00),
      new Keg("Pliny the Elder", "Russian River Brewing", 6.00, 5.25),
      new Keg("Coors Light", "Coors", 1.00, 2.00),
      new Keg("High Life", "Miller", 3.25, 4.65),
      new Keg("Pale Ale","Sierra Nevada",5.25,6.1)
    ];
    this.kegs[3].pints = 10;
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log(clickedKeg);
  }
}

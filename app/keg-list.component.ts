import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { KegComponent } from './keg.component';
import { NewKegComponent } from './new-keg.component';
import { EditKegDetailsComponent } from './edit-keg-details.component';
import { PintComponent } from './pint.component';
import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  pipes: [FilterPipe],
  directives: [KegComponent, NewKegComponent, EditKegDetailsComponent, PintComponent],
  template: `
  <div class="row">
    <h3>Current Tapped Kegs: </h3>
    <div class="col-md-10">
      <keg-display *ngFor="#currentKeg of kegList"
        (click)="kegClicked(currentKeg)"
        [class.selected]="currentKeg === selectedKeg"
        [class.expensive-keg]="currentKeg.price > 5"
        [class.strong-keg]="currentKeg.alcohol > 6"
        [keg]="currentKeg">
      </keg-display>
    </div>
  </div>
  <div class="row">
    <div class="col-md-10">
      <pint-display *ngIf="selectedKeg"
        [keg]="selectedKeg">
      </pint-display>
    </div>
  </div>
  <div class="row">
    <div class="col-md-4">
      <edit-keg-details *ngIf="selectedKeg" [keg]="selectedKeg"></edit-keg-details>
    </div>
  </div>
  <div class="row">
    <div class="col-md-4">
      <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
    </div>
  </div>
  <div class="row">
    <div class="col-md-10">
      <h3>Low Kegs: </h3>
      <keg-display *ngFor="#currentKeg of kegList | filter:filterLow"
        [class.low-keg]="currentKeg"
        [keg]="currentKeg">
      </keg-display>
    </div>
  </div>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public filterLow: number = 10;
  public expensiveLimit: number = 5;
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(parameters): void {
    this.kegList.push(
      new Keg(parameters[0], parameters[1], parseFloat(parameters[2]), parseFloat(parameters[3]))
    );
  }
}

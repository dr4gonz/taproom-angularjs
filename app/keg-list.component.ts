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
  <keg-display *ngFor="#currentKeg of kegList"
    (click)="kegClicked(currentKeg)"
    [class.selected]="currentKeg === selectedKeg"
    [keg]="currentKeg">
  </keg-display>
  <pint-display *ngIf="selectedKeg"
    [keg]="selectedKeg">
  </pint-display>
  <div>
    <edit-keg-details *ngIf="selectedKeg" [keg]="selectedKeg"></edit-keg-details>
  </div>
  <div>
    <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  </div>
  <keg-display *ngFor="#currentKeg of kegList | filter:filterLow"
    (click)="kegClicked(currentKeg)"
    [class.selected]="currentKeg === selectedKeg"
    [keg]="currentKeg">
  </keg-display>

  `
})
export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public filterLow: number = 10;
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

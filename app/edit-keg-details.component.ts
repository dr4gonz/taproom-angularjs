import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
  <div class="keg-form-details form-group">
    <h3>Edit Keg: </h3>
    <input [(ngModel)]="keg.name" class="col-sm-12 input-lg keg-form-details"/>
    <input [(ngModel)]="keg.brand" class="col-sm-12 input-lg keg-form-details"/>
    <input [(ngModel)]="keg.price" class="col-sm-12 input-lg keg-form-details"/>
    <input [(ngModel)]="keg.alcohol" class="col-sm-12 input-lg keg-form-details"/>
    <input [(ngModel)]="keg.pints" class="col-sm-12 input-lg keg-form-details"/>
  </div>
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}

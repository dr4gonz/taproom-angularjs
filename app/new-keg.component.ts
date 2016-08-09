import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template:`
    <div class="row keg-form form-group">
      <h3>Add a Keg</h3>
      <input placeholder="Name" class="col-sm-12 input-lg" #newName required>
      <input placeholder="Brand" class="col-sm-12 input-lg" #newBrand required>
      <input placeholder="Price" type="number" class="col-sm-12 input-lg" #newPrice required>
      <input placeholder="Alcohol" type="number" class="col-sm-12 input-lg" #newAlcohol requred>
      <button (click)="addKeg(newName, newBrand, newPrice, newAlcohol)" class="btn-danger btn-lg">Add</button>
    </div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<string[]>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(kegName: HTMLInputElement, kegBrand: HTMLInputElement, kegPrice: HTMLInputElement, kegAlcohol: HTMLInputElement) {
    var model: string[] = [kegName.value, kegBrand.value, kegPrice.value, kegAlcohol.value];
    this.onSubmitNewKeg.emit(model);
    kegName.value = "";
    kegBrand.value = "";
    kegPrice.value = "";
    kegAlcohol.value = "";
  }
}

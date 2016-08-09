import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template:`
    <div class="keg-form form-group">
      <h3>Keg Template</h3>
      <input placeholder="Name" class="col-sm-8 input-lg" #newName required>
      <input placeholder="Brand" class="col-sm-8 input-lg" #newBrand required>
      <input placeholder="Price" type="number" class="col-sm-8 input-lg" #newPrice required>
      <input placeholder="Alcohol" type="number" class="col-sm-8 input-lg" #newAlcohol requred>
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

import { Pipe, PipeTransform } from 'angular2/core';
import { Keg } from './keg.model';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(input: Keg[], args) {
    var lowKegLimit = args[0];
    var kegs = [];
    for(var i=0; i<input.length; i++) {
      if(lowKegLimit >= input[i].pints) {
        kegs.push(input[i]);
      }
    }
    return kegs;
  }
}

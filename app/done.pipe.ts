import {Pipe, PipeTransform} from 'angular2/core';
import {Army} from './army.model';

@Pipe({
  name: "broken",
  pure: false
})
export class DonePipe implements PipeTransform {
  transform(input: Army[], args) {
    var desiredBrokenState = args[0];
    if(desiredBrokenState === "broken") {
      return input.filter((army) => {
        return army.broken;
      });
    } else if (desiredBrokenState === "notBroken") {
      return input.filter((army) => {
        return !army.broken;
      });
    } else {
      return input;
    }
  }
}

import { Component } from 'angular2/core';
import { Army } from './army.model';

@Component({
    selector: 'army-display',
    inputs: ['army'],
  template: `
  <div>
    <label>Unit Name: {{ army.unitName }}</label>
    <label>Unit Name: {{ army.unitGeneral }}</label>
    <label>Unit Size: {{ army.unitSize }}</label>

  </div>
  `
  })
  export class ArmyComponent {
    public army: Army;
    toggleBroken(setState: boolean){
    if(this.army.unitSize < 11){
    this.army.broken = true;
    }
  }
}

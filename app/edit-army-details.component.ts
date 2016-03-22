import {Component} from 'angular2/core';
import {Army} from './army.model';

@Component({
  selector: 'edit-army-details',
  inputs: ['army'],
  template: `
    <div class="army-form">
      <h3>Edit Unit Name: </h3>
      <input [(ngModel)]="army.unitName" class="col-sm-8 input-lg army-form"/>
      <h3>Edit General Name: </h3>
      <input [(ngModel)]="army.generalName" class="col-sm-8 input-lg army-form"/>
    </div>
  `
})
export class EditArmyDetailsComponent {
  public army: Army;
}

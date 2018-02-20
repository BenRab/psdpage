import {Component, EventEmitter, Input, Output} from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-body-element',
  templateUrl: 'body-element.html',

})
export class BodyElement {

  @Output()
  elementEvent: any = new EventEmitter();

  constructor(public navCtrl: NavController) {

  }
}

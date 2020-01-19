import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as moment from 'moment';
moment.locale('pt-br')
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  now;
  constructor(public navCtrl: NavController) {
    this.getToday();
  }

  getToday(){
    this.now = moment().format('LLLL');
  }

}

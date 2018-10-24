import { PEOPLE } from './../../mocks/person.mock';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {

    name: string;
    pplList = PEOPLE;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = navParams.get('data');
	console.log(this.name);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
  }

    //catching data from previous page
    //this.name = navParams.get('data');
    //NavParams is a catcher
    //NavController is a pusher

}

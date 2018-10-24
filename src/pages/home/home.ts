import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SecondPage } from './../second/second';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  name: 'Vuyo';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  Navigate(name){
    //this.navCtrl.setRoot('SecondPage'); // delete info from previous page
    //this.navCtrl.push('SecondPage'); comes with arrow, put another page on top and save curr info
    this.navCtrl.push(SecondPage, { data: this.name });
	console.log(this.name);
    //^^^^^sending data to the next page^^^

  }

}

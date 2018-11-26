import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BoiskoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-boisko',
  templateUrl: 'boisko.html',
})
export class BoiskoPage {
  public x = 0;

  images = ['zdj1.jpg', 'zdj2.jpg', 'zdj3.jpg', 'zdj4.jpg', 'zdj5.jpg']

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BoiskoPage');
  }


}

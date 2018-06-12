import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PerfilPage } from '../perfil/perfil';
import { AboutPage } from '../about/about';
import { LoginPage } from '../login/login';


/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = PerfilPage;
  tab3Root = AboutPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    let modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}

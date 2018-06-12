import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { TerceraPage } from '../tercera/tercera';
import { lugaresService } from '../../services/lugares.service';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the LugarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lugar',
  templateUrl: 'lugar.html',
})
export class LugarPage {
  lugar: any = {};
  image: string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, public lugaresService: lugaresService, private camera: Camera){
    this.lugar = navParams.get('lugar');
  }

  guardarLugar(){
    if(!this.lugar.id){
      this.lugar.id = Date.now();
    };
    this.lugaresService.createLugar(this.lugar);
    this.navCtrl.pop();
    alert("lugar guardado con exito");
    console.log(this.lugar);
  };

  getPicture(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    };
    this.camera.getPicture( options )
    .then(imageData => {
      this.image = `data:image/jpeg;base64,${imageData}`;
    })
    .catch(error =>{
      console.error( error );
    });
    this.lugaresService.editLugar(this.lugar);
  };
};

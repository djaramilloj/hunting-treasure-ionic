import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LugarPage } from '../lugar/lugar';
import { lugaresService } from '../../services/lugares.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lugares: any =  [];
  constructor(public navCtrl: NavController, public lugaresService: lugaresService) {
    this.lugaresService.getLugares().valueChanges().subscribe((lugaresFB)=>{
      this.lugares = lugaresFB;
    })
  }

  navegarALugar(name){
    this.navCtrl.push(LugarPage, {nombre: name});
  };

  irAVistaDeDetalle(){
    this.navCtrl.push(LugarPage, {lugar: {}});
  };

  irAVistaDeDetalleExistente(lugar){
    this.navCtrl.push(LugarPage, {lugar: lugar});
  };

  eliminarLugar(lugar){
    if(confirm("seguro quiere borrar este lugar?")){
      return this.lugaresService.deleteLugar(lugar).then(()=>{
        alert("lugar ha sido borrado");
      });
    }
  }
}

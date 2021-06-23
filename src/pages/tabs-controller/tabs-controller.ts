import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { CarrinhoPage } from '../carrinho/carrinho';
import { ConfiguraEsPage } from '../configura-es/configura-es';
import { DataBase } from '../../db';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = InicioPage;
  tab2Root: any = CarrinhoPage;
  tab3Root: any = ConfiguraEsPage;
  constructor(public navCtrl: NavController, native: Storage) {
    new DataBase(native);
  }
  
  selected(){
    new CarrinhoPage(this.navCtrl).ngOnInit();
  }

}

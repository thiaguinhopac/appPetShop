import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { CarrinhoPage } from '../carrinho/carrinho';
import { CloudTabDefaultPagePage } from '../cloud-tab-default-page/cloud-tab-default-page';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = InicioPage;
  tab2Root: any = CarrinhoPage;
  tab3Root: any = CloudTabDefaultPagePage;
  constructor(public navCtrl: NavController) {
  }
  
}

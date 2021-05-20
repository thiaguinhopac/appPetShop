import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CarrinhoPage } from '../carrinho/carrinho';


@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html'
})
export class ProdutoPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToCarrinho(params){
    if (!params) params = {};
    this.navCtrl.push(CarrinhoPage);
  }goToProduto(params){
    if (!params) params = {};
    this.navCtrl.push(ProdutoPage);
  }
}

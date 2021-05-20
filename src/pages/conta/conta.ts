import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConfiguraEsPage } from '../configura-es/configura-es';
import { LoginPage } from '../login/login';
import { InicioPage } from '../inicio/inicio';
import { ProdutoPage } from '../produto/produto';
import { CarrinhoPage } from '../carrinho/carrinho';
import { CartOPage } from '../cart-o/cart-o';
import { FinalizarPage } from '../finalizar/finalizar';

@Component({
  selector: 'page-conta',
  templateUrl: 'conta.html'
})
export class ContaPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToConfiguraEs(params){
    if (!params) params = {};
    this.navCtrl.push(ConfiguraEsPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToInicio(params){
    if (!params) params = {};
    this.navCtrl.push(InicioPage);
  }goToProduto(params){
    if (!params) params = {};
    this.navCtrl.push(ProdutoPage);
  }goToCarrinho(params){
    if (!params) params = {};
    this.navCtrl.push(CarrinhoPage);
  }goToCartO(params){
    if (!params) params = {};
    this.navCtrl.push(CartOPage);
  }goToFinalizar(params){
    if (!params) params = {};
    this.navCtrl.push(FinalizarPage);
  }
}

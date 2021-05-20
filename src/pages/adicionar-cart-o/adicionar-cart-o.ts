import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CartOPage } from '../cart-o/cart-o';
import { FinalizarPage } from '../finalizar/finalizar';
import { InicioPage } from '../inicio/inicio';
import { ProdutoPage } from '../produto/produto';
import { CarrinhoPage } from '../carrinho/carrinho';
import { PagamentoPage } from '../pagamento/pagamento';
import { BoletoPage } from '../boleto/boleto';

@Component({
  selector: 'page-adicionar-cart-o',
  templateUrl: 'adicionar-cart-o.html'
})
export class AdicionarCartOPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToCartO(params){
    if (!params) params = {};
    this.navCtrl.push(CartOPage);
  }goToFinalizar(params){
    if (!params) params = {};
    this.navCtrl.push(FinalizarPage);
  }goToInicio(params){
    if (!params) params = {};
    this.navCtrl.push(InicioPage);
  }goToProduto(params){
    if (!params) params = {};
    this.navCtrl.push(ProdutoPage);
  }goToCarrinho(params){
    if (!params) params = {};
    this.navCtrl.push(CarrinhoPage);
  }goToPagamento(params){
    if (!params) params = {};
    this.navCtrl.push(PagamentoPage);
  }goToBoleto(params){
    if (!params) params = {};
    this.navCtrl.push(BoletoPage);
  }
}

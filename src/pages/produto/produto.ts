import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CarrinhoPage } from '../carrinho/carrinho';
import { PagamentoPage } from '../pagamento/pagamento';
import { CartOPage } from '../cart-o/cart-o';
import { FinalizarPage } from '../finalizar/finalizar';
import { InicioPage } from '../inicio/inicio';
import { BoletoPage } from '../boleto/boleto';
import { DataBase } from '../../db';

@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html'
})
export class ProdutoPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page


  nomeDoProduto: string;

  constructor(public navCtrl: NavController) {
    this.init();
  }
  init(){
    
  }

  goToCarrinho(params){
    if (!params) params = {};
    this.navCtrl.push(CarrinhoPage);
  }goToProduto(params){
    if (!params) params = {};
    DataBase.detalharProduto(this.nomeDoProduto);
    this.navCtrl.push(ProdutoPage);
  }goToPagamento(params){
    if (!params) params = {};
    this.navCtrl.push(PagamentoPage);
  }goToCartO(params){
    if (!params) params = {};
    this.navCtrl.push(CartOPage);
  }goToFinalizar(params){
    if (!params) params = {};
    this.navCtrl.push(FinalizarPage);
  }goToInicio(params){
    if (!params) params = {};
    this.navCtrl.push(InicioPage);
  }goToBoleto(params){
    if (!params) params = {};
    this.navCtrl.push(BoletoPage);
  }
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FinalizarPage } from '../finalizar/finalizar';
import { InicioPage } from '../inicio/inicio';
import { ProdutoPage } from '../produto/produto';
import { CarrinhoPage } from '../carrinho/carrinho';
import { PagamentoPage } from '../pagamento/pagamento';
import { BoletoPage } from '../boleto/boleto';
import { AdicionarCartOPage } from '../adicionar-cart-o/adicionar-cart-o';
import { DataBase } from '../../db';

@Component({
  selector: 'page-cart-o',
  templateUrl: 'cart-o.html'
})
export class CartOPage {
  
  numeroDoCartao: string;

  constructor(public navCtrl: NavController) {
    this.init();
  }
  init(){
    let cartao = DataBase.listarCartoes();
  }
  goToFinalizar(params){
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
  }goToCartO(params){
    if (!params) params = {};
    this.navCtrl.push(CartOPage);
  }goToBoleto(params){
    if (!params) params = {};
    this.navCtrl.push(BoletoPage);
  }goToAdicionarCartao(params){
    if (!params) params = {};
    this.navCtrl.push(AdicionarCartOPage);
  }
}

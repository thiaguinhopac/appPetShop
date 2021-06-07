import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConfiguraEsPage } from '../configura-es/configura-es';
import { LoginPage } from '../login/login';
import { InicioPage } from '../inicio/inicio';
import { ProdutoPage } from '../produto/produto';
import { CarrinhoPage } from '../carrinho/carrinho';
import { PagamentoPage } from '../pagamento/pagamento';
import { CartOPage } from '../cart-o/cart-o';
import { FinalizarPage } from '../finalizar/finalizar';
import { BoletoPage } from '../boleto/boleto';
import { CadastrarPage } from '../cadastrar/cadastrar';
import { DataBase } from '../../db'

@Component({
  selector: 'page-conta',
  templateUrl: 'conta.html'
})
export class ContaPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  nome: string;
  dataNasc: string;
  endereco: string;

  constructor(public navCtrl: NavController) {
    this.init();
  }

  init(){

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
  }goToPagamento(params){
    if (!params) params = {};
    this.navCtrl.push(PagamentoPage);
  }goToCartO(params){
    if (!params) params = {};
    this.navCtrl.push(CartOPage);
  }goToFinalizar(params){
    if (!params) params = {};
    this.navCtrl.push(FinalizarPage);
  }goToBoleto(params){
    if (!params) params = {};
    this.navCtrl.push(BoletoPage);
  }goToCadastrar(params){
    if (!params) params = {};
    this.navCtrl.push(CadastrarPage);
  }goToConta(params){
    if (!params) params = {};
    this.navCtrl.push(ContaPage);
  }
}

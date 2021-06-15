import { Component, OnInit } from '@angular/core';
import { Item, NavController } from 'ionic-angular';
import { ProdutoPage } from '../produto/produto';
import { PagamentoPage } from '../pagamento/pagamento';
import { CartOPage } from '../cart-o/cart-o';
import { FinalizarPage } from '../finalizar/finalizar';
import { InicioPage } from '../inicio/inicio';
import { BoletoPage } from '../boleto/boleto';
import { IonicNativePlugin } from '@ionic-native/core';
import { DataBase } from '../../db';
import { format } from 'path';

@Component({
  selector: 'page-carrinho',
  templateUrl: 'carrinho.html'
})
export class CarrinhoPage implements OnInit {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  
  items: Map<ImageBitmap,string>;
  urlImage: string;
  totalValor: string;
  preco: string;

  listCarrinho = [];

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    this.urlImage = DataBase.getIconCart();
    let aux = DataBase.listarCarrinho();
    let preco = parseFloat(this.totalValor) > 0 ? parseFloat(this.totalValor) : 0.0;
    for(let element in aux){
      this.listCarrinho.push({name: aux[element].nome, image: aux[element].urlImage, preco: aux[element].preco});
      preco += parseFloat(aux[element].preco.replace(',','.'));
    }
    this.totalValor =  (Math.round(preco*100)/100).toString();
  }

  goToProduto(params){
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
  }goToInicio(params){
    if (!params) params = {};
    this.navCtrl.push(InicioPage);
  }goToBoleto(params){
    if (!params) params = {};
    this.navCtrl.push(BoletoPage);
  }  
}

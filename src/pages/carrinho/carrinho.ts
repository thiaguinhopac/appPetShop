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
    this.listItens();
  }

  listItens(){
    this.urlImage = DataBase.getIconCart();
    let aux = DataBase.listarCarrinho();
    let preco = 0.0;
    this.listCarrinho = [];
    aux.forEach(element=>{
      if(element.prod != undefined){
        this.listCarrinho.push({name: element.prod.nome, image: element.prod.urlImage, preco: element.prod.preco, qtd: element['qtd']});
        preco += parseFloat(element.prod.preco) * (Math.round(parseInt(element['qtd'])*100)/100);
      }
    });
    this.totalValor =  (Math.round(preco*100)/100).toString();
    
  }

  removeItem(ev: any){
    DataBase.removeQtdCarrinho(ev.currentTarget.id);
    this.listItens();
  }

  addItem(ev: any){
    DataBase.addQtdCarrinho(ev.srcElement.nextElementSibling.id);
    this.listItens();
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

import { Component, OnInit } from '@angular/core';
import { Item, NavController } from 'ionic-angular';
import { ProdutoPage } from '../produto/produto';
import { PagamentoPage } from '../pagamento/pagamento';
import { CartOPage } from '../cart-o/cart-o';
import { FinalizarPage } from '../finalizar/finalizar';
import { InicioPage } from '../inicio/inicio';
import { BoletoPage } from '../boleto/boleto';
import { IonicNativePlugin } from '@ionic-native/core';

@Component({
  selector: 'page-carrinho',
  templateUrl: 'carrinho.html'
})
export class CarrinhoPage implements OnInit {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  
  items: Map<ImageBitmap,string>;

  listCarrinho = [
    {image: '', name: ''},
    {image: '', name: ''},
    {image: '', name: ''},
    {image: '', name: ''},
    {image: '', name: ''},
    {image: '', name: ''},
    {image: '', name: ''},
    {image: '', name: ''},
    {image: '', name: ''},
  ]
  constructor(public navCtrl: NavController) {

  }
  ngOnInit() {
    this.listCarrinho[0].image = "assets/img/iyzG1s1SRVSImOybwhYg_racao.jpg";
    this.listCarrinho[0].name = "TESTE";
    this.listCarrinho[1].image = "assets/img/iyzG1s1SRVSImOybwhYg_racao.jpg";
    this.listCarrinho[1].name = "TESTE";
    this.listCarrinho[2].image = "assets/img/iyzG1s1SRVSImOybwhYg_racao.jpg";
    this.listCarrinho[2].name = "TESTE";
    this.listCarrinho[3].image = "assets/img/iyzG1s1SRVSImOybwhYg_racao.jpg";
    this.listCarrinho[3].name = "TESTE";
    this.listCarrinho[4].image = "assets/img/iyzG1s1SRVSImOybwhYg_racao.jpg";
    this.listCarrinho[4].name = "TESTE";
    this.listCarrinho[5].image = "assets/img/iyzG1s1SRVSImOybwhYg_racao.jpg";
    this.listCarrinho[5].name = "TESTE";
    this.listCarrinho[6].image = "assets/img/iyzG1s1SRVSImOybwhYg_racao.jpg";
    this.listCarrinho[6].name = "TESTE";
    
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

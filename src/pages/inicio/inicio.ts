import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProdutoPage } from '../produto/produto';
import { CarrinhoPage } from '../carrinho/carrinho';
import { PagamentoPage } from '../pagamento/pagamento';
import { CartOPage } from '../cart-o/cart-o';
import { FinalizarPage } from '../finalizar/finalizar';
import { BoletoPage } from '../boleto/boleto';


@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  listInicio = [
    {image: '', name: ''},
    {image: '', name: ''},
    {image: '', name: ''},
    {image: '', name: ''},
    {image: '', name: ''},
    {image: '', name: ''},
    {image: '', name: ''},
    {image: '', name: ''},
    {image: '', name: ''},
  ];

  listLoc = [
  "São Paulo São Paulo",
  "Rio de Janeiro Rio de Janeiro",
  "Brasília Distrito Federal",
  "Salvador Bahia Bahia",
  "Fortaleza Ceará",
  "Belo Horizonte Minas Gerais",
  "Manaus Amazonas",
  "Curitiba Paraná",
  "Recife Pernambuco",
  "Goiânia Goiás",
  "Belém Pará Pará",
  "Porto Alegre Rio Grande do Sul",
  "Guarulhos São Paulo"
  ];

  constructor(public navCtrl: NavController) {
  }

  onMapClick = ()=>{

  }

  ngOnInit() {
    this.listInicio[0].image = "assets/img/iyzG1s1SRVSImOybwhYg_racao.jpg";
    this.listInicio[0].name = "TESTE";
    this.listInicio[1].image = "assets/img/iyzG1s1SRVSImOybwhYg_racao.jpg";
    this.listInicio[1].name = "TESTE";
    this.listInicio[2].image = "assets/img/iyzG1s1SRVSImOybwhYg_racao.jpg";
    this.listInicio[2].name = "TESTE";
    this.listInicio[3].image = "assets/img/iyzG1s1SRVSImOybwhYg_racao.jpg";
    this.listInicio[3].name = "TESTE";
    this.listInicio[4].image = "assets/img/iyzG1s1SRVSImOybwhYg_racao.jpg";
    this.listInicio[4].name = "TESTE";
    this.listInicio[5].image = "assets/img/iyzG1s1SRVSImOybwhYg_racao.jpg";
    this.listInicio[5].name = "TESTE";
    this.listInicio[6].image = "assets/img/iyzG1s1SRVSImOybwhYg_racao.jpg";
    this.listInicio[6].name = "TESTE";

    
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

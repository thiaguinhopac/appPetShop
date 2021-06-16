
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProdutoPage } from '../produto/produto';
import { CarrinhoPage } from '../carrinho/carrinho';
import { PagamentoPage } from '../pagamento/pagamento';
import { CartOPage } from '../cart-o/cart-o';
import { FinalizarPage } from '../finalizar/finalizar';
import { BoletoPage } from '../boleto/boleto';
import { DataBase } from '../../db';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  listInicio = [
  ];
  
  sobre : String;
  listLoc = DataBase.getLocals();
  isItemAvailable = false;
  id = [];
  items = [];

  constructor(public navCtrl: NavController) {
  }

  onMapClick = ()=>{

  }

  initializeItems(){
      this.items = DataBase.listarPesquisa();
  }

  ngOnInit() {
    let aux = DataBase.listarProdutos();
    console.log(aux);
    for(let name in aux){
      for(let element in aux[name]) {
        let ful = aux[name][element];
        this.listInicio.push({name:ful.nome, image: ful.urlImage, id: element});
     }
    }

    let aux1 = DataBase.getAbout();
    this.sobre = aux1.desc;


  }

  itemClick(ev: any){
    
    ProdutoPage.id = DataBase.getId(ev.currentTarget.innerText);
    ProdutoPage.nome = ev.currentTarget.innerText;
    this.navCtrl.push(ProdutoPage);
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
        this.isItemAvailable = true;
        this.items = this.items.filter((item) => {
            return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
    } else {
        this.isItemAvailable = false;
    }
  }

  goToProduto(params){
    ProdutoPage.id = params.currentTarget.id;
    ProdutoPage.nome = params.currentTarget.innerText;
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

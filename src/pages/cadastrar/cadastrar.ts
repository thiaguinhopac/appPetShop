import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { InicioPage } from '../inicio/inicio';
import { ProdutoPage } from '../produto/produto';
import { CarrinhoPage } from '../carrinho/carrinho';
import { PagamentoPage } from '../pagamento/pagamento';
import { CartOPage } from '../cart-o/cart-o';
import { FinalizarPage } from '../finalizar/finalizar';
import { BoletoPage } from '../boleto/boleto';
import { DataBase } from '../../db';
@Component({
  selector: 'page-cadastrar',
  templateUrl: 'cadastrar.html'
})
export class CadastrarPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  
  emailCadastro: string;
  nomeCadastro: string;
  senha: string;

  goToLogin(params){
    if (!params) params = {};
    DataBase.cadastrarUsuario(this.emailCadastro, this.nomeCadastro, this.senha)
    this.navCtrl.pop();
  }
}

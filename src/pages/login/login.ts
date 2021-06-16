import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { ProdutoPage } from '../produto/produto';
import { CarrinhoPage } from '../carrinho/carrinho';
import { PagamentoPage } from '../pagamento/pagamento';
import { CartOPage } from '../cart-o/cart-o';
import { FinalizarPage } from '../finalizar/finalizar';
import { BoletoPage } from '../boleto/boleto';
import { CadastrarPage } from '../cadastrar/cadastrar';
import { DataBase } from '../../db';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
    
  }

  ngOnInit() {
    
  }
  
  emailLogin: string;
  senhaLogin: string;
  
  goToInicio(params){
    let alert = this.alertCtrl.create({
      title: 'Login nao encontrado',
      message: 'Certifique as informaçoes',
      buttons: [
        {
          text: 'Ok',
          role: 'ok',
          handler: () => {
  
          }
        }
      ]
    });
    if (!params) params = {};
    if(this.emailLogin && this.senhaLogin){
      if(DataBase.verificaLogin(this.emailLogin, this.senhaLogin)){
        this.navCtrl.push(InicioPage);
      } else {
      alert.present();
      }
    } else {
      alert.present();
    }
  }goToCadastrar(params){
    if (!params) params = {};
    this.navCtrl.push(CadastrarPage);
  }
}

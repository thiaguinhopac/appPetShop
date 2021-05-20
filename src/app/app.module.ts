import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { CarrinhoPage } from '../pages/carrinho/carrinho';
import { ConfiguraEsPage } from '../pages/configura-es/configura-es';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { PagePage } from '../pages/page/page';
import { LoginPage } from '../pages/login/login';
import { CadastrarPage } from '../pages/cadastrar/cadastrar';
import { ProdutoPage } from '../pages/produto/produto';
import { PagamentoPage } from '../pages/pagamento/pagamento';
import { CartOPage } from '../pages/cart-o/cart-o';
import { FinalizarPage } from '../pages/finalizar/finalizar';
import { BoletoPage } from '../pages/boleto/boleto';
import { AdicionarCartOPage } from '../pages/adicionar-cart-o/adicionar-cart-o';
import { PesquisarPage } from '../pages/pesquisar/pesquisar';
import { ContaPage } from '../pages/conta/conta';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    CarrinhoPage,
    ConfiguraEsPage,
    TabsControllerPage,
    PagePage,
    LoginPage,
    CadastrarPage,
    ProdutoPage,
    PagamentoPage,
    CartOPage,
    FinalizarPage,
    BoletoPage,
    AdicionarCartOPage,
    PesquisarPage,
    ContaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    CarrinhoPage,
    ConfiguraEsPage,
    TabsControllerPage,
    PagePage,
    LoginPage,
    CadastrarPage,
    ProdutoPage,
    PagamentoPage,
    CartOPage,
    FinalizarPage,
    BoletoPage,
    AdicionarCartOPage,
    PesquisarPage,
    ContaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

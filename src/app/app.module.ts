import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { CarrinhoPage } from '../pages/carrinho/carrinho';
import { CloudTabDefaultPagePage } from '../pages/cloud-tab-default-page/cloud-tab-default-page';
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


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    CarrinhoPage,
    CloudTabDefaultPagePage,
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
    PesquisarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    CarrinhoPage,
    CloudTabDefaultPagePage,
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
    PesquisarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
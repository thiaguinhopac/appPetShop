
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProdutoPage } from '../produto/produto';
import { CarrinhoPage } from '../carrinho/carrinho';
import { PagamentoPage } from '../pagamento/pagamento';
import { CartOPage } from '../cart-o/cart-o';
import { FinalizarPage } from '../finalizar/finalizar';
import { BoletoPage } from '../boleto/boleto';
import { DataBase } from '../../db';
import { Storage } from '@ionic/storage';

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
  listLoc: any;
  isItemAvailable = false;
  id = [];
  items = [];

  constructor(public navCtrl: NavController, public nativeStorage: Storage) {

    var dataJsonInitial = {
      "system": {
        "locals": [
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
        ],
        "about": " Definimos um tipo elevado de tratamento com seu pet, tanto em produtos quanto em higiene ( tosa, banho, etc. ).\nCriamos uma logistica unica que nos traz a certeza de que seremos o destaque em termo de eficiencia e qualidade.\nFundada em 2003, cada vez vem ganhando mais forma dentro do mercado, tem se destacado como uma das principais pet shops em questão a satisfação do cliente",
        "aboutImage": "assets/img/jKWqyoBEQrarD9AgcljT_loja.jpg",
      },
      "produtos" :{
        "racao" : {
          "0" : {"urlImage" : "assets/imagesBd/golden.jpg", "nome" : "Ração Golden Fórmula Mini Bits para Cães Adultos de Pequeno Porte Sabor Frango e Arroz", "preco": "18,90", "descricao": "- Indicada para cães de pequeno porte;- Desenvolvido para cães adultos com paladar exigente;- Apresenta grãos de tamanho adequado para animais de pequeno porte,"},
          "1" : {"urlImage" : "assets/imagesBd/royal.jpg", "nome" : "Ração Royal Canin Club Performance Cães Adultos", "preco": "63,98", "descricao": "- Indicada para cães;- Ideal para cães adultos de raças de porte médio e grandes;- Proporciona alta palatabilidade e boa digestão;"},
        },
        "antipulgas" : {
          "0" : {"urlImage" : "assets/imagesBd/simparic.jpg", "nome" : "Antipulgas Simparic 40 mg para cães 10,1 a 20 kg - Zoetis", "preco": "102,84", "descricao": "- Indicado para cães de 10,1 a 20kg;- Proteção contra Pulgas, Carrapatos, Sarnas;- Comprimido Mastigável;"},
          "1" : {"urlImage" : "assets/imagesBd/kiltix.jpg", "nome" : "Coleira Kiltix Grande", "preco": "88,90", "descricao": "- Indicada para cães de porte grande;- Ideal no tratamento e controle de infestações;- Atua contra carrapatos e pulgas;"}
        }
      },
      "perfil" :{
        "teste@teste.com.br" : { "nome" : "Teste", "senha" : "t", "urlImagem": "assets/img/pOQKYujfS2WBxYvlBmkt_person.jpg"}
      },
      "carrinho" : {
        "icone": "assets/img/knTzFWINROSD2JgCRu5R_Bispg5DQCyOby9869Wvj_carrinho_de_compras.jpg",
        "produtos":{
          "antipulgas" : []
        } 
      },
      "cartao" : [
        {"nome": "Teste", "numero": "055500555055","validade": "12/27"}
      ]};

    this.nativeStorage.get('data')
    .then(
      data => {
        DataBase.db = data;
        if(!data || data['system'] == undefined){
          DataBase.setDb(dataJsonInitial); 
          DataBase.db = dataJsonInitial;
        }
        this.listLoc = DataBase.getLocals();
        this.items = DataBase.listarPesquisa();
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
      },
      error => console.error(error)
      );

  }
  onMapClick = ()=>{

  }

  initializeItems(){
  }
  
  ngOnInit() {

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

import { Component, Injectable } from '@angular/core';
import { notImplemented } from '@angular/core/src/render3/util';

import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.ts'
})
export class DataBase {

  private _storage: Storage | null = null;

  static perfil = {
    urlImage: '',
    nome : '', 
    endereco : '',
    dataNasc : ''
  }
  static detalharProduto: any;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Create and expose methods that users of this service can
  // call, for example:
  public set(key: string, value: any) {
    this._storage.set(key, value);
  }

  public verificaLogin(user: string, pass: string){

    return true;
  }

  public cadastrarUsuario(user: string, email: string,pass: string){

  }

  // carrinho
  public listarCarrinho(){
    //servidor local
    return [
      {urlImagem: '', nome: '', preco: ''}
    ]
  }
  // carrinho
  public adicionarCarrinho(produto: JSON){

  }
  //pesquisar
  public listarPesquisa(filtro: string){

    return [
      {urlImagem: '', nome: '', preco: ''}
    ]
  }
  //adicionarCartao
  public adicionarCartao(nome: string, numero: string,validade: string,ccv: string){

  }
  //cartoes
  public listarCartoes(){

  }
  //produto
  public detalharProduto(id){
  asa
    return {urlImage : '', nome : '', preco: '', descricao: ''}
  }

}

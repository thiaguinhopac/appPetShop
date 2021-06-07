import { Component, Injectable } from '@angular/core';
import { notImplemented } from '@angular/core/src/render3/util';
var fs = require('fs');
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.ts'
})
export class DataBase {
  private _storage: Storage | null = null;

  static db = {};

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;

    this.getDb();
  }

  private getDb(){
    fs.readFile('dbOffline.json', 'utf8', function (err, data) {
      if (err) throw err;
      this.db = JSON.parse(data);
    });
  }

  static saveDb(){
    fs.writeFile('dbOffline.json', this.db, function (err) {
      if (err) return console.log(err);
    });
  }

  // Create and expose methods that users of this service can
  // call, for example:
  public set(key: string, value: any) {
    this._storage.set(key, value);
  }

  static verificaLogin(email: string, senha: string){
    return this.db["perfil"][email].senha == senha;
  }

  static cadastrarUsuario(user: string, email: string,pass: string){
    this.db["perfil"][email].nome = user;
    this.db["perfil"][email].senha = pass;
    this.saveDb();
  }

  // carrinho
  static listarCarrinho(){
    //servidor local
    return [
      {urlImagem: '', nome: '', preco: ''}
    ]
  }
  // carrinho
  static adicionarCarrinho(produto: JSON){

  }
  //pesquisar
  static listarPesquisa(filtro: string){

    return [
      {urlImagem: '', nome: '', preco: ''}
    ]
  }
  //adicionarCartao
  static adicionarCartao(nome: string, numero: string,validade: string,ccv: string){

  }
  //cartoes
  static listarCartoes(){

  }
  //produto
  static detalharProduto(tipo: string, id: string){
    return this.db["produtos"][tipo][id];
  }

  static listarProdutos(){

  }
}

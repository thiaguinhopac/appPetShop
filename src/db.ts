import { Storage } from '@ionic/storage';
import { isNull } from 'util';

export class DataBase {
  static listItens() {
    throw new Error('Method not implemented.');
  }
  
  static currentUser = "teste@teste.com.br";
  
  static db = {
  };
  static nativeStorage: Storage;
  static urlImage: any;
  static listCarrinho: any[];
  static totalValor: string;
  
  constructor(private nativeStorage: Storage) { 
    this.init();
    DataBase.nativeStorage = nativeStorage;
  }
  
  
  async init() {
    this.getDb();
  }
    
  static setDb(json){
      DataBase.nativeStorage.set('data', json)
      .then(
        () => console.log('Stored item!'),
        error => console.error('Error storing item', error)
      );
    }
  private getDb(){
    
  }

  static saveDb(){
    this.setDb(DataBase.db);
  }

  static getLocals() {
    return this.db['system']['locals'];
  }

  public set(key: string, value: any) {
  }

  static verificaLogin(email: string, senha: string){
    return this.db["perfil"][email] && this.db["perfil"][email].senha == senha;
  }

  static cadastrarUsuario(user: string, email: string,pass: string){
    this.db["perfil"] [email].nome = user;
    this.db["perfil"][email].senha = pass;
    this.saveDb();
  }

  static listarCarrinho(){
    let result = [];
    for(let produto in this.db["carrinho"]['produtos']){
      for(let res in this.db['carrinho']['produtos'][produto]){
        result.push({prod:this.db['produtos'][produto][res],qtd:this.db['carrinho']['produtos'][produto][res]['qtd']});
      }
    }
    return result;
  }

  static getIconCart(){
    return this.db['carrinho'].icone;
  }

  static adicionarCarrinho(nome){
    for(let id in this.db['produtos']){
      for(let nm in this.db['produtos'][id]){
        if(this.db['produtos'][id][nm].nome == nome){
          for(let ds in this.db['carrinho'].produtos[id]){
            if(ds == nm){
              this.addQtdCarrinho(nome);
              return;
            }
          }
          if(this.db['carrinho'].produtos[id] == undefined) this.db['carrinho'].produtos[id] = [];
          this.db['carrinho'].produtos[id].push({'id':nm, 'qtd':1});
          return;
        }
      }
    }
  }

  static removerCarrinho(produto){
    this.db['carrinho'].produtos
  }

  static addQtdCarrinho(nome){
    for(let id in this.db["produtos"]){
      for(let nm in this.db["produtos"][id]){
        if(this.db["produtos"][id][nm].nome == nome){
          for(let sw in this.db['carrinho'].produtos[id]){
            if(this.db['carrinho'].produtos[id][sw].id == nm){
              this.db['carrinho'].produtos[id][sw].qtd++;
            }
          } 
        }
      }
      
      DataBase.saveDb();
    }
    
  }
  static removeQtdCarrinho(nome){
    for(let id in this.db["produtos"]){
      for(let nm in this.db["produtos"][id]){
        if(this.db["produtos"][id][nm].nome == nome){
          for(let sw in this.db['carrinho'].produtos[id]){
            if(this.db['carrinho'].produtos[id][sw].id == nm){
              if(this.db['carrinho'].produtos[id][sw].qtd <= 1){
                delete this.db['carrinho'].produtos[id][sw];
              } else {
                this.db['carrinho'].produtos[id][sw].qtd--;
              }
            }
          } 
        }
      }
    DataBase.saveDb();
    }

    for(let id in this.db["produtos"]){
      for(let nm in this.db["produtos"][id]){
        if(this.db["produtos"][id][nm].nome == nome){

        }
      }
    }
  }

  static listarPesquisa(){
    let result = [];
    for(let prodTitle in this.db["produtos"]){
      for(let id in this.db["produtos"][prodTitle]){
        result.push(this.db["produtos"][prodTitle][id].nome);
      }
    }
    return result;
  }

  static getId(nome: string){
    let result = "";
    for(let prodTitle in this.db["produtos"]){
      for(let id in this.db["produtos"][prodTitle]){
        if(this.db["produtos"][prodTitle][id].nome == nome){
          result = id;
        }
      }
    }
    return result;
  }

  static adicionarCartao(nome: string, numero: string,validade: string){
    this.db['cartao'].push({"nome": nome, "numero": numero,"validade": validade})
  }

  static removerCartao(numero: string){

  }
  
  static listarCartoes(){
    return this.db['cartao'];
  }
  
  static detalharProduto(name:string, id: string){
    let res = {};
    for (let mc in this.db['produtos']){
      if(this.db['produtos'][mc][id] != undefined){
        if(this.db['produtos'][mc][id].nome == name){
          res = this.db['produtos'][mc][id];
        }
      }
    }
    return res;
  }

  static getAbout(){
    return {desc: this.db['system']['about'], image: this.db['system']['aboutImage']};
  }

  static listarProdutos(){
    return this.db["produtos"];
  }

  static getProfile(){
    return this.db['perfil'][this.currentUser];
  }
}

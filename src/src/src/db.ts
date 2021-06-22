export class DataBase {

  static currentUser = "teste@teste.com.br";

  static db = {
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
            "2" : {"urlImage" : "assets/imagesBd/simparic.jpg", "nome" : "Antipulgas Simparic 40 mg para cães 10,1 a 20 kg - Zoetis", "preco": "102,84", "descricao": "- Indicado para cães de 10,1 a 20kg;- Proteção contra Pulgas, Carrapatos, Sarnas;- Comprimido Mastigável;"},
            "3" : {"urlImage" : "assets/imagesBd/kiltix.jpg", "nome" : "Coleira Kiltix Grande", "preco": "88,90", "descricao": "- Indicada para cães de porte grande;- Ideal no tratamento e controle de infestações;- Atua contra carrapatos e pulgas;"}
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
    ]
  };

  constructor() {
    this.init();
  }

  async init() {
    this.getDb();
  }

  private getDb(){

  }

  static saveDb(){

  }

  static getLocals() {
    return this.db.system['locals'];
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
        result.push({prod:this.db.produtos[produto][res],qtd:this.db['carrinho']['produtos'][produto][res]['qtd']});
      }
    }
    return result;
  }

  static getIconCart(){
    return this.db['carrinho'].icone;
  }

  static adicionarCarrinho(nome){
    for(let id in this.db.produtos){
      for(let nm in this.db.produtos[id]){
        if(this.db.produtos[id][nm].nome == nome){
          for(let ds in this.db.carrinho.produtos[id]){
            if(ds == nm){
              this.addQtdCarrinho(nome);
              return;
            }
          }
          if(this.db.carrinho.produtos[id] == undefined) this.db.carrinho.produtos[id] = [];
          this.db.carrinho.produtos[id].push({'id':nm, 'qtd':1});
          return;
        }
      }
    }
  }

  static removerCarrinho(produto){
    this.db['carrinho'].produtos
  }

  static addQtdCarrinho(nome){
    for(let id in this.db.produtos){
      for(let nm in this.db.produtos[id]){
        if(this.db.produtos[id][nm].nome == nome){
          for(let sw in this.db.carrinho.produtos[id]){
            if(this.db.carrinho.produtos[id][sw].id == nm){
              this.db.carrinho.produtos[id][sw].qtd++;
            }
          } 
        }
      }
    }
  }

  static removeQtdCarrinho(nome){
    for(let id in this.db.produtos){
      for(let nm in this.db.produtos[id]){
        if(this.db.produtos[id][nm].nome == nome){
          for(let sw in this.db.carrinho.produtos[id]){
            if(this.db.carrinho.produtos[id][sw].id == nm){
              if(this.db.carrinho.produtos[id][sw].qtd <= 1){
                delete this.db.carrinho.produtos[id][sw];
              } else {
                this.db.carrinho.produtos[id][sw].qtd--;
              }
            }
          } 
        }
      }
    }

    for(let id in this.db.produtos){
      for(let nm in this.db.produtos[id]){
        if(this.db.produtos[id][nm].nome == nome){

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
    return this.db.cartao;
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

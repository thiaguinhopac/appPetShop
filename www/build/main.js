webpackJsonp([0],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguraEsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inicio_inicio__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__produto_produto__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__carrinho_carrinho__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pagamento_pagamento__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cart_o_cart_o__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__finalizar_finalizar__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__boleto_boleto__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cadastrar_cadastrar__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__conta_conta__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ConfiguraEsPage = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function ConfiguraEsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ConfiguraEsPage_1 = ConfiguraEsPage;
    ConfiguraEsPage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    ConfiguraEsPage.prototype.goToInicio = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__inicio_inicio__["a" /* InicioPage */]);
    };
    ConfiguraEsPage.prototype.goToProduto = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__produto_produto__["a" /* ProdutoPage */]);
    };
    ConfiguraEsPage.prototype.goToCarrinho = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    ConfiguraEsPage.prototype.goToPagamento = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pagamento_pagamento__["a" /* PagamentoPage */]);
    };
    ConfiguraEsPage.prototype.goToCartO = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__cart_o_cart_o__["a" /* CartOPage */]);
    };
    ConfiguraEsPage.prototype.goToFinalizar = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__finalizar_finalizar__["a" /* FinalizarPage */]);
    };
    ConfiguraEsPage.prototype.goToBoleto = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__boleto_boleto__["a" /* BoletoPage */]);
    };
    ConfiguraEsPage.prototype.goToCadastrar = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__cadastrar_cadastrar__["a" /* CadastrarPage */]);
    };
    ConfiguraEsPage.prototype.goToConta = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__conta_conta__["a" /* ContaPage */]);
    };
    ConfiguraEsPage.prototype.goToConfiguraEs = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(ConfiguraEsPage_1);
    };
    var ConfiguraEsPage_1;
    ConfiguraEsPage = ConfiguraEsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-configura-es',template:/*ion-inline-start:"/home/felipe/Desktop/appPetShop/src/pages/configura-es/configura-es.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Configurações\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n  <img src="assets/img/ru13jJrgSlyk1rqVTgVu_petshop.jpg" style="display:block;width:40%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="width:300px;height:26px;" id="configuraEs-spacer13"></div>\n  <ion-card id="configuraEs-card21">\n    <ion-list>\n      <ion-item color="none" on-click="goToConta()" id="configuraEs-list-item85">\n        <ion-icon name="person" item-left></ion-icon>\n        Conta\n      </ion-item>\n      <ion-item color="none" on-click="goToCartO()" id="configuraEs-list-item87">\n        <ion-icon name="card" item-left></ion-icon>\n        Cartões\n      </ion-item>\n      <ion-item color="none" on-click="goToLogin()" id="configuraEs-list-item88">\n        <ion-icon name="exit" item-left></ion-icon>\n        Sair\n      </ion-item>\n      <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n        <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n      </div>\n    </ion-list>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/home/felipe/Desktop/appPetShop/src/pages/configura-es/configura-es.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ConfiguraEsPage);
    return ConfiguraEsPage;
}());

//# sourceMappingURL=configura-es.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio_inicio__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cadastrar_cadastrar__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__db__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function LoginPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.goToInicio = function (params) {
        if (!params)
            params = {};
        if (this.emailLogin && this.senhaLogin) {
            if (__WEBPACK_IMPORTED_MODULE_4__db__["a" /* DataBase */].verificaLogin(this.emailLogin, this.senhaLogin)) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__inicio_inicio__["a" /* InicioPage */]);
            }
        }
    };
    LoginPage.prototype.goToCadastrar = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cadastrar_cadastrar__["a" /* CadastrarPage */]);
    };
    var _a;
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/felipe/Desktop/appPetShop/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page6">\n  <img src="assets/img/V3usKrbpRDqQd43qSuRY_petshop.jpg" style="display:block;width:40%;height:auto;margin-left:auto;margin-right:auto;" />\n  <form id="login-form1">\n    <div class="spacer" style="width:300px;height:35px;" id="login-spacer5"></div>\n    <ion-list id="login-list2">\n      <ion-item id="login-input1">\n        <ion-label stacked>\n          Email\n        </ion-label>\n        <ion-input type="email" placeholder="email@...." name = "emailLogin" [(ngModel)]="emailLogin" id="loginUsuario"></ion-input>\n      </ion-item>\n      <ion-item id="login-input2">\n        <ion-label stacked>\n          Senha\n        </ion-label>\n        <ion-input type="password" placeholder="******" name="senhaLogin" [(ngModel)]="senhaLogin"></ion-input>\n      </ion-item>\n    </ion-list>\n    <div class="spacer" style="height:40px;" id="login-spacer2"></div>\n    <button id="login-button2" ion-button color="energized" block on-click="goToInicio()">\n      Entrar\n    </button>\n    <button id="login-button3" ion-button clear color="positive" block on-click="goToCadastrar()">\n      criar conta\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"/home/felipe/Desktop/appPetShop/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" ? _a : Object])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__db__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CadastrarPage = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function CadastrarPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CadastrarPage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        __WEBPACK_IMPORTED_MODULE_2__db__["a" /* DataBase */].cadastrarUsuario(this.emailCadastro, this.nomeCadastro, this.senha);
        this.navCtrl.pop();
    };
    CadastrarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastrar',template:/*ion-inline-start:"/home/felipe/Desktop/appPetShop/src/pages/cadastrar/cadastrar.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Cadastrar\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page7">\n  <img src="assets/img/d21uIZVpQbWyskvV7AXZ_petshop.jpg" style="display:block;width:40%;height:auto;margin-left:auto;margin-right:auto;" />\n  <form id="cadastrar-form2">\n    <div class="spacer" style="width:300px;height:18px;" id="cadastrar-spacer3"></div>\n    <ion-list id="cadastrar-list3">\n      <ion-item id="cadastrar-input3">\n        <ion-label stacked>\n          Nome\n        </ion-label>\n        <ion-input type="text" placeholder="Martilda Vamiles" name="nomeCadastro"></ion-input>\n      </ion-item>\n      <ion-item id="cadastrar-input4">\n        <ion-label stacked>\n          Email\n        </ion-label>\n        <ion-input type="email" placeholder="email@.." name="emailCadastro"></ion-input>\n      </ion-item>\n      <ion-item id="cadastrar-input5">\n        <ion-label stacked>\n          Senha\n        </ion-label>\n        <ion-input type="password" placeholder="************" name="senhaCadastro"></ion-input>\n      </ion-item>\n    </ion-list>\n    <div class="spacer" style="width:300px;height:30px;" id="cadastrar-spacer4"></div>\n    <button id="cadastrar-button4" ion-button color="energized" block on-click="goToLogin()">\n      Cadastrar\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"/home/felipe/Desktop/appPetShop/src/pages/cadastrar/cadastrar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], CadastrarPage);
    return CadastrarPage;
}());

//# sourceMappingURL=cadastrar.js.map

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__produto_produto__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carrinho_carrinho__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pagamento_pagamento__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_o_cart_o__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__finalizar_finalizar__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__boleto_boleto__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__db__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var InicioPage = /** @class */ (function () {
    function InicioPage(navCtrl) {
        this.navCtrl = navCtrl;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.listInicio = [];
        this.listLoc = __WEBPACK_IMPORTED_MODULE_8__db__["a" /* DataBase */].getLocals();
        this.isItemAvailable = false;
        this.items = [];
        this.onMapClick = function () {
        };
    }
    InicioPage_1 = InicioPage;
    InicioPage.prototype.initializeItems = function () {
        this.items = ["Ram", "gopi", "dravid"];
    };
    InicioPage.prototype.ngOnInit = function () {
        var aux = __WEBPACK_IMPORTED_MODULE_8__db__["a" /* DataBase */].listarProdutos();
        console.log(aux);
        for (var name in aux) {
            for (var element in aux[name]) {
                var ful = aux[name][element];
                this.listInicio.push({ name: ful.nome, image: ful.urlImage });
            }
        }
        var aux1 = __WEBPACK_IMPORTED_MODULE_8__db__["a" /* DataBase */].getAbout();
        this.sobre = aux1.desc;
    };
    InicioPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() !== '') {
            this.isItemAvailable = true;
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.isItemAvailable = false;
        }
    };
    InicioPage.prototype.goToProduto = function (params) {
        if (!params)
            params = {};
        __WEBPACK_IMPORTED_MODULE_2__produto_produto__["a" /* ProdutoPage */].id = params[0];
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__produto_produto__["a" /* ProdutoPage */]);
    };
    InicioPage.prototype.goToCarrinho = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    InicioPage.prototype.goToPagamento = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pagamento_pagamento__["a" /* PagamentoPage */]);
    };
    InicioPage.prototype.goToCartO = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__cart_o_cart_o__["a" /* CartOPage */]);
    };
    InicioPage.prototype.goToFinalizar = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__finalizar_finalizar__["a" /* FinalizarPage */]);
    };
    InicioPage.prototype.goToInicio = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(InicioPage_1);
    };
    InicioPage.prototype.goToBoleto = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__boleto_boleto__["a" /* BoletoPage */]);
    };
    var InicioPage_1, _a;
    InicioPage = InicioPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inicio',template:/*ion-inline-start:"/home/felipe/Desktop/appPetShop/src/pages/inicio/inicio.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Inicio\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page2">\n  \n  <img src="assets/img/Pi672XjRcuQYSxGVYuWF_petshop.jpg" style="display:block;width:30%;height:auto;margin-left:auto;margin-right:auto;" />\n  <form id="inicio-form5">\n    <ion-searchbar showCancelButton="focus" cancelButtonText="Custom Cancel" type="text" debounce="500" placeholder="Pesquisar" (ionChange)="getItems($event)"></ion-searchbar>\n    <ion-list *ngIf="isItemAvailable">\n      <ion-item *ngFor="let item of items">{{ item }}</ion-item>\n    </ion-list>\n  </form>\n  <ion-card id="inicio-card" style="width: 90%;">\n    <div class="spacer" style="width:300px;height:30px;" id="cadastrar-spacer4"></div>\n    <div id="inicio-heading10" style="color:#000000;text-align: center;font-size: large;font-style: unset;">\n      Produtos\n    </div>\n    <div class="spacer" style="width:300px;height:30px;" id="cadastrar-spacer4"></div>\n    <ion-list>\n      <div id="carrinho-container1" style="overflow-y: auto;height: 200px;">\n        <ion-list id="carrinho-list1" *ngFor="let prod of listInicio; let i=index" style="height: min-content;">\n          <ion-item-sliding>\n            <ion-item color="none" on-click="goToProduto()" id="carrinho-list-item7" >\n              <ion-avatar item-left>\n                <img src={{prod.image}}/>\n              </ion-avatar>\n              <h2>\n                {{prod.name}}\n              </h2>\n            </ion-item>\n            <ion-item-options side="left">\n              <button ion-button color="light"></button>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n      </div>\n    </ion-list>\n  </ion-card>\n  <ion-card id="inicio-card">\n    <div class="spacer" style="width:300px;height:30px;" id="cadastrar-spacer4"></div>\n    <ion-list>\n      <div id="inicio-heading10" style="color:#000000;text-align: center;font-size: large;font-style: unset;">\n        Sobre nós\n      </div>\n      <div class="spacer" style="width:300px;height:30px;" id="cadastrar-spacer4"></div>\n      <div id="inicio-markdown21" class="show-list-numbers-and-dots">\n        <p style="color:#000000;">\n          {{sobre}}\n        </p>\n      </div>\n      <img src="assets/img/jKWqyoBEQrarD9AgcljT_loja.jpg" />\n    </ion-list>\n  </ion-card>\n  <ion-card id="inicio-card">\n    <ion-list>\n      <div class="spacer" style="width:300px;height:30px;" id="cadastrar-spacer4"></div>\n      <div id="inicio-heading10" style="color:#000000;text-align: center;font-size: large;font-style: unset;">\n        Localização\n      </div>\n    <div class="spacer" style="width:300px;height:30px;" id="cadastrar-spacer4"></div>\n      <div id="inicio-markdown20" class="show-list-numbers-and-dots">\n        <p style="color:#000000;">\n          Contamos com diversos filiados em diversas regiões do País, ache a mais perto de você.\n        </p>\n        <ul *ngFor="let loc of listLoc; let i=index">\n          <li>\n            {{loc}}\n          </li>\n        </ul>\n      </div>\n      <div class="spacer" style="width:300px;height:31px;" id="inicio-spacer25"></div>\n      <img src="assets/img/ZCVg3vLTaqHMJsV4IIRV_maps.jpg" onclick="this.onMapClick"/>\n      <div class="spacer" style="width:300px;height:42px;" id="inicio-spacer26"></div>\n    </ion-list>\n  </ion-card>\n  <div class="spacer" style="height:100px;" id="inicio-spacer28"></div>\n  <div class="spacer" style="height:100px;" id="inicio-spacer27"></div>\n</ion-content>'/*ion-inline-end:"/home/felipe/Desktop/appPetShop/src/pages/inicio/inicio.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" ? _a : Object])
    ], InicioPage);
    return InicioPage;
}());

//# sourceMappingURL=inicio.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrinhoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__produto_produto__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pagamento_pagamento__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_o_cart_o__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__finalizar_finalizar__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__inicio_inicio__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__boleto_boleto__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__db__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CarrinhoPage = /** @class */ (function () {
    function CarrinhoPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.listCarrinho = [];
    }
    CarrinhoPage_1 = CarrinhoPage;
    CarrinhoPage.prototype.ngOnInit = function () {
        this.urlImage = __WEBPACK_IMPORTED_MODULE_8__db__["a" /* DataBase */].getIconCart();
        var aux = __WEBPACK_IMPORTED_MODULE_8__db__["a" /* DataBase */].listarCarrinho();
        var preco = parseFloat(this.totalValor) > 0 ? parseFloat(this.totalValor) : 0.0;
        for (var element in aux) {
            this.listCarrinho.push({ name: aux[element].nome, image: aux[element].urlImage, preco: aux[element].preco });
            preco += parseFloat(aux[element].preco.replace(',', '.'));
        }
        this.totalValor = (Math.round(preco * 100) / 100).toString();
    };
    CarrinhoPage.prototype.goToProduto = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__produto_produto__["a" /* ProdutoPage */]);
    };
    CarrinhoPage.prototype.goToCarrinho = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(CarrinhoPage_1);
    };
    CarrinhoPage.prototype.goToPagamento = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pagamento_pagamento__["a" /* PagamentoPage */]);
    };
    CarrinhoPage.prototype.goToCartO = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cart_o_cart_o__["a" /* CartOPage */]);
    };
    CarrinhoPage.prototype.goToFinalizar = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__finalizar_finalizar__["a" /* FinalizarPage */]);
    };
    CarrinhoPage.prototype.goToInicio = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__inicio_inicio__["a" /* InicioPage */]);
    };
    CarrinhoPage.prototype.goToBoleto = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__boleto_boleto__["a" /* BoletoPage */]);
    };
    var CarrinhoPage_1, _a;
    CarrinhoPage = CarrinhoPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-carrinho',template:/*ion-inline-start:"/home/felipe/Desktop/appPetShop/src/pages/carrinho/carrinho.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Carrinho\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3">\n  <img src={{urlImage}} style="display:block;width:40%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="width:300px;height:26px;" id="carrinho-spacer1"></div>\n  <h4>Produtos</h4>\n  <div id="carrinho-container1" style="overflow-y: auto;height: 50%;">\n    <ion-list id="carrinho-list1" *ngFor="let prod of listCarrinho; let i=index" style="height: min-content;">\n      <ion-item-sliding>\n        <ion-item color="none" on-click="goToProduto()" id="carrinho-list-item7" >\n          <ion-avatar item-left>\n            <img src={{prod.image}}/>\n          </ion-avatar>\n          <h2>\n            {{prod.name}}\n          </h2>\n          <h3 style="text-align:center;">R$ {{prod.preco}}</h3>\n        </ion-item>\n        <ion-item-options side="left">\n          <button ion-button color="light"></button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </div>\n  <div class="spacer" style="width:300px;height:16px;" id="carrinho-spacer9"></div>\n  <div id="carrinho-markdown8" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Total: R$ {{totalValor}}\n    </p>\n  </div>\n  <div class="spacer" style="width:300px;height:22px;" id="carrinho-spacer12"></div>\n  <button id="carrinho-button1" ion-button color="energized" block on-click="goToPagamento()">\n    Finalizar compra\n  </button>\n  <div class="spacer" style="height:100px;" id="carrinho-spacer11"></div>\n</ion-content>'/*ion-inline-end:"/home/felipe/Desktop/appPetShop/src/pages/carrinho/carrinho.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" ? _a : Object])
    ], CarrinhoPage);
    return CarrinhoPage;
}());

//# sourceMappingURL=carrinho.js.map

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carrinho_carrinho__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pagamento_pagamento__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_o_cart_o__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__finalizar_finalizar__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__inicio_inicio__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__boleto_boleto__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__db__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProdutoPage = /** @class */ (function () {
    function ProdutoPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.init();
    }
    ProdutoPage_1 = ProdutoPage;
    ProdutoPage.prototype.init = function () {
        var aux = __WEBPACK_IMPORTED_MODULE_8__db__["a" /* DataBase */].detalharProduto(this.nomeDoProduto);
    };
    ProdutoPage.prototype.goToCarrinho = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    ProdutoPage.prototype.goToProduto = function (params) {
        if (!params)
            params = {};
        __WEBPACK_IMPORTED_MODULE_8__db__["a" /* DataBase */].detalharProduto(this.nomeDoProduto);
        this.navCtrl.push(ProdutoPage_1);
    };
    ProdutoPage.prototype.goToPagamento = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pagamento_pagamento__["a" /* PagamentoPage */]);
    };
    ProdutoPage.prototype.goToCartO = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cart_o_cart_o__["a" /* CartOPage */]);
    };
    ProdutoPage.prototype.goToFinalizar = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__finalizar_finalizar__["a" /* FinalizarPage */]);
    };
    ProdutoPage.prototype.goToInicio = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__inicio_inicio__["a" /* InicioPage */]);
    };
    ProdutoPage.prototype.goToBoleto = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__boleto_boleto__["a" /* BoletoPage */]);
    };
    var ProdutoPage_1, _a;
    ProdutoPage.id = "";
    ProdutoPage = ProdutoPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-produto',template:/*ion-inline-start:"/home/felipe/Desktop/appPetShop/src/pages/produto/produto.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Produto\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page8">\n  <img src="assets/img/f9zxKQJUR6CChhkaZDmp_racao.jpg" style="display:block;width:70%;height:auto;margin-left:auto;margin-right:auto;" />\n  <h1 id="produto-heading1" style="color:#000000;text-align:center;">\n    {{nomeDoProduto}}\n  </h1>\n  <h1 id="produto-heading2" style="color:#ABFFAA;text-align:center;">\n    {{valorDoProduto}}\n  </h1>\n  <div class="spacer" style="width:300px;height:58px;" id="produto-spacer6"></div>\n  <div id="produto-markdown1" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      descrição:\n    </p>\n  </div>\n  <div id="produto-markdown2" style="text-align:center;" class="show-list-numbers-and-dots">\n  </div>\n  <div class="spacer" style="width:300px;height:56px;" id="produto-spacer8"></div>\n  <button id="produto-button5" ion-button color="energized" block on-click="goToCarrinho()">\n    Adicionar ao carrinho\n  </button>\n  <div class="spacer" style="width:300px;height:100px;" id="produto-spacer7"></div>\n</ion-content>'/*ion-inline-end:"/home/felipe/Desktop/appPetShop/src/pages/produto/produto.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" ? _a : Object])
    ], ProdutoPage);
    return ProdutoPage;
}());

//# sourceMappingURL=produto.js.map

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagamentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_o_cart_o__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__finalizar_finalizar__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inicio_inicio__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__produto_produto__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__carrinho_carrinho__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__boleto_boleto__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PagamentoPage = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function PagamentoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PagamentoPage_1 = PagamentoPage;
    PagamentoPage.prototype.goToCartO = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cart_o_cart_o__["a" /* CartOPage */]);
    };
    PagamentoPage.prototype.goToFinalizar = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__finalizar_finalizar__["a" /* FinalizarPage */]);
    };
    PagamentoPage.prototype.goToInicio = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__inicio_inicio__["a" /* InicioPage */]);
    };
    PagamentoPage.prototype.goToProduto = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__produto_produto__["a" /* ProdutoPage */]);
    };
    PagamentoPage.prototype.goToCarrinho = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    PagamentoPage.prototype.goToPagamento = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(PagamentoPage_1);
    };
    PagamentoPage.prototype.goToBoleto = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__boleto_boleto__["a" /* BoletoPage */]);
    };
    var PagamentoPage_1;
    PagamentoPage = PagamentoPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pagamento',template:/*ion-inline-start:"/home/felipe/Desktop/appPetShop/src/pages/pagamento/pagamento.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Pagamento\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page9">\n  <img src="assets/img/rqwTTEm7QemfbTTeOAQq_petshop.jpg" style="display:block;width:70%;height:auto;margin-left:auto;margin-right:auto;" />\n  <h4 id="pagamento-heading6" style="color:#000000;font-weight:400;text-align:center;">\n    Selecione o tipo de pagamento\n  </h4>\n  <ion-card id="pagamento-card23">\n    <ion-list>\n      <ion-item color="none" on-click="goToCartO()" id="pagamento-list-item22">\n        <ion-icon name="card" item-left></ion-icon>\n        Débito/Crédito\n      </ion-item>\n      <ion-item color="none" on-click="goToBoleto()" id="pagamento-list-item24">\n        <ion-icon name="document" item-left></ion-icon>\n        Boleto Bancário\n      </ion-item>\n      <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n        <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n      </div>\n    </ion-list>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/home/felipe/Desktop/appPetShop/src/pages/pagamento/pagamento.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], PagamentoPage);
    return PagamentoPage;
}());

//# sourceMappingURL=pagamento.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartOPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__finalizar_finalizar__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inicio_inicio__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__produto_produto__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__carrinho_carrinho__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pagamento_pagamento__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__boleto_boleto__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__adicionar_cart_o_adicionar_cart_o__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__db__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CartOPage = /** @class */ (function () {
    function CartOPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.init();
    }
    CartOPage_1 = CartOPage;
    CartOPage.prototype.init = function () {
        var cartao = __WEBPACK_IMPORTED_MODULE_9__db__["a" /* DataBase */].listarCartoes();
    };
    CartOPage.prototype.goToFinalizar = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__finalizar_finalizar__["a" /* FinalizarPage */]);
    };
    CartOPage.prototype.goToInicio = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__inicio_inicio__["a" /* InicioPage */]);
    };
    CartOPage.prototype.goToProduto = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__produto_produto__["a" /* ProdutoPage */]);
    };
    CartOPage.prototype.goToCarrinho = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    CartOPage.prototype.goToPagamento = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pagamento_pagamento__["a" /* PagamentoPage */]);
    };
    CartOPage.prototype.goToCartO = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(CartOPage_1);
    };
    CartOPage.prototype.goToBoleto = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__boleto_boleto__["a" /* BoletoPage */]);
    };
    CartOPage.prototype.goToAdicionarCartao = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__adicionar_cart_o_adicionar_cart_o__["a" /* AdicionarCartOPage */]);
    };
    var CartOPage_1;
    CartOPage = CartOPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart-o',template:/*ion-inline-start:"/home/felipe/Desktop/appPetShop/src/pages/cart-o/cart-o.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Cartão\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page10">\n  <img src="assets/img/jBFmrEElSwOrNjZkDtqF_bank_card.jpg" style="display:block;width:70%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="width:300px;height:29px;" id="cartO-spacer14"></div>\n  <ion-card id="cartO-card24">\n    <ion-list>\n      <ion-item color="none" on-click="goToFinalizar()" id="cartO-list-item28">\n        {{numeroDoCartao}}\n        <ion-note item-right></ion-note>\n        <ion-icon name="card" item-right></ion-icon>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n  <button id="cartO-button6" ion-button clear color="gray" block small>\n    <ion-icon name="add-circle" onclick="this.goToAdicionarCartao"></ion-icon>\n    {{adicionarNovoCartao}}\n  </button>\n</ion-content>'/*ion-inline-end:"/home/felipe/Desktop/appPetShop/src/pages/cart-o/cart-o.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], CartOPage);
    return CartOPage;
}());

//# sourceMappingURL=cart-o.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsControllerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio_inicio__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carrinho_carrinho__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configura_es_configura_es__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsControllerPage = /** @class */ (function () {
    function TabsControllerPage(navCtrl) {
        this.navCtrl = navCtrl;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__inicio_inicio__["a" /* InicioPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__carrinho_carrinho__["a" /* CarrinhoPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__configura_es_configura_es__["a" /* ConfiguraEsPage */];
    }
    TabsControllerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs-controller',template:/*ion-inline-start:"/home/felipe/Desktop/appPetShop/src/pages/tabs-controller/tabs-controller.html"*/'<ion-tabs id="tabsController-tabs1">\n  <ion-tab [root]="tab1Root" tabTitle="Inicio" tabIcon="home" id="tabsController-tab1"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Carrinho" tabIcon="cart" id="tabsController-tab2"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Configurações" tabIcon="construct" id="tabsController-tab3"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/home/felipe/Desktop/appPetShop/src/pages/tabs-controller/tabs-controller.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], TabsControllerPage);
    return TabsControllerPage;
}());

//# sourceMappingURL=tabs-controller.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdicionarCartOPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_o_cart_o__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__finalizar_finalizar__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inicio_inicio__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__produto_produto__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__carrinho_carrinho__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pagamento_pagamento__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__boleto_boleto__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AdicionarCartOPage = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function AdicionarCartOPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AdicionarCartOPage.prototype.goToCartO = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cart_o_cart_o__["a" /* CartOPage */]);
    };
    AdicionarCartOPage.prototype.goToFinalizar = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__finalizar_finalizar__["a" /* FinalizarPage */]);
    };
    AdicionarCartOPage.prototype.goToInicio = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__inicio_inicio__["a" /* InicioPage */]);
    };
    AdicionarCartOPage.prototype.goToProduto = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__produto_produto__["a" /* ProdutoPage */]);
    };
    AdicionarCartOPage.prototype.goToCarrinho = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    AdicionarCartOPage.prototype.goToPagamento = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pagamento_pagamento__["a" /* PagamentoPage */]);
    };
    AdicionarCartOPage.prototype.goToBoleto = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__boleto_boleto__["a" /* BoletoPage */]);
    };
    AdicionarCartOPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adicionar-cart-o',template:/*ion-inline-start:"/home/felipe/Desktop/appPetShop/src/pages/adicionar-cart-o/adicionar-cart-o.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Adicionar Cartão\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page13">\n  <img src="assets/img/8N48tWGMSKaVZOIMjFqN_cartao.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="width:300px;height:36px;" id="adicionarCartO-spacer20"></div>\n  <form id="adicionarCartO-form4">\n    <ion-item id="adicionarCartO-input9">\n      <ion-label stacked>\n        Nome impresso no cartão\n      </ion-label>\n      <ion-input type="text" placeholder="Matailda Venila"></ion-input>\n    </ion-item>\n    <ion-item id="adicionarCartO-input10">\n      <ion-label stacked>\n        Numero do cartão\n      </ion-label>\n      <ion-input type="number" placeholder="5505 5055 0055 5500"></ion-input>\n    </ion-item>\n    <ion-item id="adicionarCartO-input11">\n      <ion-label stacked>\n        Validade\n      </ion-label>\n      <ion-input type="date" placeholder=""></ion-input>\n    </ion-item>\n    <div class="spacer" style="width:300px;height:52px;" id="adicionarCartO-spacer21"></div>\n    <button id="adicionarCartO-button10" ion-button color="energized" block on-click="goToCartO()">\n      Salvar cartão\n    </button>\n    <div class="spacer" style="height:100px;" id="adicionarCartO-spacer22"></div>\n  </form>\n</ion-content>'/*ion-inline-end:"/home/felipe/Desktop/appPetShop/src/pages/adicionar-cart-o/adicionar-cart-o.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], AdicionarCartOPage);
    return AdicionarCartOPage;
}());

//# sourceMappingURL=adicionar-cart-o.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configura_es_configura_es__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inicio_inicio__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__produto_produto__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__carrinho_carrinho__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pagamento_pagamento__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cart_o_cart_o__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__finalizar_finalizar__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__boleto_boleto__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__cadastrar_cadastrar__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__db__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ContaPage = /** @class */ (function () {
    function ContaPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.init();
    }
    ContaPage_1 = ContaPage;
    ContaPage.prototype.init = function () {
        var aux = __WEBPACK_IMPORTED_MODULE_12__db__["a" /* DataBase */].getProfile();
        this.nome = aux['nome'];
        this.email = __WEBPACK_IMPORTED_MODULE_12__db__["a" /* DataBase */].currentUser;
        this.urlImage = aux['urlImagem'];
    };
    ContaPage.prototype.goToConfiguraEs = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__configura_es_configura_es__["a" /* ConfiguraEsPage */]);
    };
    ContaPage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    ContaPage.prototype.goToInicio = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__inicio_inicio__["a" /* InicioPage */]);
    };
    ContaPage.prototype.goToProduto = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__produto_produto__["a" /* ProdutoPage */]);
    };
    ContaPage.prototype.goToCarrinho = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    ContaPage.prototype.goToPagamento = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pagamento_pagamento__["a" /* PagamentoPage */]);
    };
    ContaPage.prototype.goToCartO = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__cart_o_cart_o__["a" /* CartOPage */]);
    };
    ContaPage.prototype.goToFinalizar = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__finalizar_finalizar__["a" /* FinalizarPage */]);
    };
    ContaPage.prototype.goToBoleto = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__boleto_boleto__["a" /* BoletoPage */]);
    };
    ContaPage.prototype.goToCadastrar = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__cadastrar_cadastrar__["a" /* CadastrarPage */]);
    };
    ContaPage.prototype.goToConta = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(ContaPage_1);
    };
    var ContaPage_1, _a;
    ContaPage = ContaPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-conta',template:/*ion-inline-start:"/home/felipe/Desktop/appPetShop/src/pages/conta/conta.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Conta\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page15">\n  <div class="spacer" style="width:300px;height:19px;" id="conta-spacer30"></div>\n  <img src={{urlImage}} style="display:block;width:50%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="width:300px;height:50px;" id="conta-spacer29"></div>\n  <ion-list id="conta-list8">\n    <ion-item id="conta-input13">\n      <ion-label>\n        Nome\n      </ion-label>\n      <ion-input type="text" placeholder={{nome}} [(ngModel)]="nome">{{nome}}</ion-input>\n    </ion-item>\n    <ion-item id="conta-input14">\n      <ion-label>\n        Email\n      </ion-label>\n      <ion-input type="text" placeholder={{email}} [(ngModel)]="email">{{email}}</ion-input>\n    </ion-item>\n  </ion-list>\n  <button id="conta-button9" ion-button color="positive" block on-click="goToConfiguraEs()">\n    Salvar\n  </button>\n</ion-content>'/*ion-inline-end:"/home/felipe/Desktop/appPetShop/src/pages/conta/conta.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" ? _a : Object])
    ], ContaPage);
    return ContaPage;
}());

//# sourceMappingURL=conta.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinalizarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio_inicio__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__produto_produto__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__carrinho_carrinho__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pagamento_pagamento__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_o_cart_o__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__boleto_boleto__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FinalizarPage = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function FinalizarPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    FinalizarPage_1 = FinalizarPage;
    FinalizarPage.prototype.goToInicio = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__inicio_inicio__["a" /* InicioPage */]);
    };
    FinalizarPage.prototype.goToProduto = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__produto_produto__["a" /* ProdutoPage */]);
    };
    FinalizarPage.prototype.goToCarrinho = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    FinalizarPage.prototype.goToPagamento = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pagamento_pagamento__["a" /* PagamentoPage */]);
    };
    FinalizarPage.prototype.goToCartO = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cart_o_cart_o__["a" /* CartOPage */]);
    };
    FinalizarPage.prototype.goToFinalizar = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(FinalizarPage_1);
    };
    FinalizarPage.prototype.goToBoleto = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__boleto_boleto__["a" /* BoletoPage */]);
    };
    var FinalizarPage_1;
    FinalizarPage = FinalizarPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-finalizar',template:/*ion-inline-start:"/home/felipe/Desktop/appPetShop/src/pages/finalizar/finalizar.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Finalizar\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page11">\n  <div class="spacer" style="width:300px;height:61px;" id="finalizar-spacer16"></div>\n  <img src="assets/img/B1qQ8ceQH23CMeoBTddZ_check.jpg" style="display:block;width:30%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="width:300px;height:28px;" id="finalizar-spacer15"></div>\n  <h4 id="finalizar-heading7" style="color:#000000;font-weight:400;text-align:center;">\n    Compra realizada com sucesso\n  </h4>\n  <div id="finalizar-markdown15" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Obrigado por comprar conosco! Você pode acompanhar seu pedido nesse link https://linkDoRastreio.com.br ou falar com a gente através desse email suporte@petshop.com.br\n    </p>\n  </div>\n  <div class="spacer" style="width:300px;height:55px;" id="finalizar-spacer17"></div>\n  <button id="finalizar-button7" ion-button color="energized" block on-click="goToInicio()">\n    Inicio\n  </button>\n</ion-content>'/*ion-inline-end:"/home/felipe/Desktop/appPetShop/src/pages/finalizar/finalizar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], FinalizarPage);
    return FinalizarPage;
}());

//# sourceMappingURL=finalizar.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoletoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__finalizar_finalizar__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inicio_inicio__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__produto_produto__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__carrinho_carrinho__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pagamento_pagamento__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cart_o_cart_o__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BoletoPage = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function BoletoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    BoletoPage_1 = BoletoPage;
    BoletoPage.prototype.goToFinalizar = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__finalizar_finalizar__["a" /* FinalizarPage */]);
    };
    BoletoPage.prototype.goToInicio = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__inicio_inicio__["a" /* InicioPage */]);
    };
    BoletoPage.prototype.goToProduto = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__produto_produto__["a" /* ProdutoPage */]);
    };
    BoletoPage.prototype.goToCarrinho = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    BoletoPage.prototype.goToPagamento = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pagamento_pagamento__["a" /* PagamentoPage */]);
    };
    BoletoPage.prototype.goToCartO = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__cart_o_cart_o__["a" /* CartOPage */]);
    };
    BoletoPage.prototype.goToBoleto = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(BoletoPage_1);
    };
    var BoletoPage_1;
    BoletoPage = BoletoPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-boleto',template:/*ion-inline-start:"/home/felipe/Desktop/appPetShop/src/pages/boleto/boleto.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Boleto\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page12">\n  <img src="assets/img/YNrdwV6rSJuw5BdzsHcR_boleto.jpg" style="display:block;width:70%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:100px;" id="boleto-spacer18"></div>\n  <div id="boleto-markdown16" class="show-list-numbers-and-dots">\n    <ul>\n      <li>\n        O boleto pode levar o tempo de ate 3 dias uteis para compensar.\n      </li>\n    </ul>\n  </div>\n  <div class="spacer" style="width:300px;height:33px;" id="boleto-spacer19"></div>\n  <button id="boleto-button8" ion-button color="energized" block icon-left on-click="goToFinalizar()">\n    <ion-icon name="download"></ion-icon>\n    Gerar Boleto\n  </button>\n</ion-content>'/*ion-inline-end:"/home/felipe/Desktop/appPetShop/src/pages/boleto/boleto.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], BoletoPage);
    return BoletoPage;
}());

//# sourceMappingURL=boleto.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_inicio_inicio__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_carrinho_carrinho__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_configura_es_configura_es__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_controller_tabs_controller__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_page_page__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_cadastrar_cadastrar__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_produto_produto__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_pagamento_pagamento__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_cart_o_cart_o__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_finalizar_finalizar__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_boleto_boleto__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_adicionar_cart_o_adicionar_cart_o__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_pesquisar_pesquisar__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_conta_conta__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_services_firebase_services_firebase__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_carrinho_carrinho__["a" /* CarrinhoPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_configura_es_configura_es__["a" /* ConfiguraEsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_controller_tabs_controller__["a" /* TabsControllerPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_page_page__["a" /* PagePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_cadastrar_cadastrar__["a" /* CadastrarPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_produto_produto__["a" /* ProdutoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_pagamento_pagamento__["a" /* PagamentoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_cart_o_cart_o__["a" /* CartOPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_finalizar_finalizar__["a" /* FinalizarPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_boleto_boleto__["a" /* BoletoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_adicionar_cart_o_adicionar_cart_o__["a" /* AdicionarCartOPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_pesquisar_pesquisar__["a" /* PesquisarPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_conta_conta__["a" /* ContaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_carrinho_carrinho__["a" /* CarrinhoPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_configura_es_configura_es__["a" /* ConfiguraEsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_controller_tabs_controller__["a" /* TabsControllerPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_page_page__["a" /* PagePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_cadastrar_cadastrar__["a" /* CadastrarPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_produto_produto__["a" /* ProdutoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_pagamento_pagamento__["a" /* PagamentoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_cart_o_cart_o__["a" /* CartOPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_finalizar_finalizar__["a" /* FinalizarPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_boleto_boleto__["a" /* BoletoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_adicionar_cart_o_adicionar_cart_o__["a" /* AdicionarCartOPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_pesquisar_pesquisar__["a" /* PesquisarPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_conta_conta__["a" /* ContaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_21__providers_services_firebase_services_firebase__["a" /* ServicesFirebaseProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_controller_tabs_controller__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_controller_tabs_controller__["a" /* TabsControllerPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/felipe/Desktop/appPetShop/src/app/app.html"*/'<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"/home/felipe/Desktop/appPetShop/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PagePage = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function PagePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-page',template:/*ion-inline-start:"/home/felipe/Desktop/appPetShop/src/pages/page/page.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Page\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page5"></ion-content>'/*ion-inline-end:"/home/felipe/Desktop/appPetShop/src/pages/page/page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], PagePage);
    return PagePage;
}());

//# sourceMappingURL=page.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PesquisarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__produto_produto__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carrinho_carrinho__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pagamento_pagamento__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_o_cart_o__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__finalizar_finalizar__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__inicio_inicio__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__boleto_boleto__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PesquisarPage = /** @class */ (function () {
    function PesquisarPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.init();
    }
    PesquisarPage.prototype.init = function () {
        // let produto = DataBase.detalharProduto();
        // this.nomeDoProduto = produto.nome;
    };
    PesquisarPage.prototype.goToProduto = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__produto_produto__["a" /* ProdutoPage */]);
    };
    PesquisarPage.prototype.goToCarrinho = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    PesquisarPage.prototype.goToPagamento = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pagamento_pagamento__["a" /* PagamentoPage */]);
    };
    PesquisarPage.prototype.goToCartO = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__cart_o_cart_o__["a" /* CartOPage */]);
    };
    PesquisarPage.prototype.goToFinalizar = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__finalizar_finalizar__["a" /* FinalizarPage */]);
    };
    PesquisarPage.prototype.goToInicio = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__inicio_inicio__["a" /* InicioPage */]);
    };
    PesquisarPage.prototype.goToBoleto = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__boleto_boleto__["a" /* BoletoPage */]);
    };
    PesquisarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pesquisar',template:/*ion-inline-start:"/home/felipe/Desktop/appPetShop/src/pages/pesquisar/pesquisar.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Pesquisar\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page14">\n  <form id="pesquisar-form6">\n    <ion-searchbar placeholder="Pesquisar" name="" id="pesquisar-search2"></ion-searchbar>\n  </form>\n  <ion-card id="pesquisar-card211">\n    <ion-list>\n      <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n        <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n      </div>\n      <ion-list id="pesquisar-list6">\n        <ion-item color="none" on-click="goToProduto()" id="pesquisar-list-item81">\n          <ion-avatar item-left>\n            <img src="assets/img/JcOqvKalQCajqT2BbPMP_racao.jpg" />\n          </ion-avatar>\n          <h2>\n            {{nomeDoProduto}}\n          </h2>\n        </ion-item>\n      </ion-list>\n    </ion-list>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/home/felipe/Desktop/appPetShop/src/pages/pesquisar/pesquisar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], PesquisarPage);
    return PesquisarPage;
}());

//# sourceMappingURL=pesquisar.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesFirebaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ServicesFirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServicesFirebaseProvider = /** @class */ (function () {
    function ServicesFirebaseProvider(http) {
        this.http = http;
        console.log('Hello ServicesFirebaseProvider Provider');
    }
    ServicesFirebaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ServicesFirebaseProvider);
    return ServicesFirebaseProvider;
}());

//# sourceMappingURL=services-firebase.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataBase; });
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var DataBase = /** @class */ (function () {
    function DataBase() {
        this.init();
    }
    DataBase.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.getDb();
                return [2 /*return*/];
            });
        });
    };
    DataBase.prototype.getDb = function () {
    };
    DataBase.saveDb = function () {
    };
    DataBase.getLocals = function () {
        return this.db.system['locals'];
    };
    DataBase.prototype.set = function (key, value) {
    };
    DataBase.verificaLogin = function (email, senha) {
        return this.db["perfil"][email] && this.db["perfil"][email].senha == senha;
    };
    DataBase.cadastrarUsuario = function (user, email, pass) {
        this.db["perfil"][email].nome = user;
        this.db["perfil"][email].senha = pass;
        this.saveDb();
    };
    DataBase.listarCarrinho = function () {
        var _this = this;
        var result = [];
        var _loop_1 = function (produto) {
            this_1.db['carrinho']['produtos'][produto].forEach(function (element) {
                result.push(_this.db['produtos'][produto][element]);
            });
        };
        var this_1 = this;
        for (var produto in this.db["carrinho"]['produtos']) {
            _loop_1(produto);
        }
        return result;
    };
    DataBase.getIconCart = function () {
        return this.db['carrinho'].icone;
    };
    DataBase.adicionarCarrinho = function (produto) {
    };
    DataBase.listarPesquisa = function (filtro) {
        return [
            { urlImagem: '', nome: '', preco: '' },
            { urlImagem: '', nome: '', preco: '' },
            { urlImagem: '', nome: '', preco: '' },
            { urlImagem: '', nome: '', preco: '' }
        ];
    };
    DataBase.adicionarCartao = function (nome, numero, validade, ccv) {
    };
    DataBase.listarCartoes = function () {
    };
    DataBase.detalharProduto = function (name) {
        return;
    };
    DataBase.getAbout = function () {
        return { desc: this.db['system']['about'], image: this.db['system']['aboutImage'] };
    };
    DataBase.listarProdutos = function () {
        return this.db["produtos"];
    };
    DataBase.getProfile = function () {
        return this.db['perfil'][this.currentUser];
    };
    DataBase.currentUser = "teste@teste.com.br";
    DataBase.db = {
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
        "produtos": {
            "racao": {
                "0": { "urlImage": "assets/imagesBd/golden.jpg", "nome": "Ração Golden Fórmula Mini Bits para Cães Adultos de Pequeno Porte Sabor Frango e Arroz", "preco": "18,90", "descricao": "- Indicada para cães de pequeno porte;- Desenvolvido para cães adultos com paladar exigente;- Apresenta grãos de tamanho adequado para animais de pequeno porte," },
                "1": { "urlImage": "assets/imagesBd/royal.jpg", "nome": "Ração Royal Canin Club Performance Cães Adultos", "preco": "63,98", "descricao": "- Indicada para cães;- Ideal para cães adultos de raças de porte médio e grandes;- Proporciona alta palatabilidade e boa digestão;" },
                "2": { "urlImage": "assets/imagesBd/bravecto.jpg", "nome": "Antipulgas e Carrapatos Bravecto MSD para Cães de 4,5 a 10 kg", "preco": "204,90", "descricao": "- Indicado para cães;- Acaba com a infestação de carrapatos e pulgas;- Rápida ação;" },
                "3": { "urlImage": "assets/imagesBd/hills.jpg", "nome": "Ração Hills Science Diet Manutenção Saudável Pedaços Pequenos Para Cães Adultos De 1 A 6 Anos", "preco": "127,90", "descricao": "- Indicada para cães adultos entre 1 e 6 anos;- Específica para pets de pequeno porte;- Contém vitaminas C & E em sua fórmula;" },
                "4": { "urlImage": "assets/imagesBd/proplan.jpg", "nome": "Ração Proplan Exigent para Cães Adultos de Raças Pequenas Sabor Frango e Arroz - 1kg", "preco": "51,99", "descricao": "A Ração Nestlé Purina Proplan Exigent para Cães Adultos de Raças Pequenas Sabor Frango e Arroz é ideal para cães de raças pequenas seletivos na hora de comer." }
            },
            "antipulgas": {
                "0": { "urlImage": "assets/imagesBd/bravecto10kg.jpg", "nome": "Antipulgas e Carrapatos Bravecto MSD para Cães de 4,5 a 10 kg", "preco": "204,90", "descricao": "- Indicado para cães;- Acaba com a infestação de carrapatos e pulgas;- Rápida ação;" },
                "1": { "urlImage": "assets/imagesBd/dorax.jpg", "nome": "Dorax Pet Doramectina 1 Blister com 4 Comprimidos para Cães", "preco": "44,99", "descricao": "- Indicado para cães;- Comprimidos palatáveis e bissulcados;- Carrapaticida para o controle e tratamento contra carrapatos;- Indicado para filhotes à partir de 1 ano;" },
                "2": { "urlImage": "assets/imagesBd/simparic.jpg", "nome": "Antipulgas Simparic 40 mg para cães 10,1 a 20 kg - Zoetis", "preco": "102,84", "descricao": "- Indicado para cães de 10,1 a 20kg;- Proteção contra Pulgas, Carrapatos, Sarnas;- Comprimido Mastigável;" },
                "3": { "urlImage": "assets/imagesBd/kiltix.jpg", "nome": "Coleira Kiltix Grande", "preco": "88,90", "descricao": "- Indicada para cães de porte grande;- Ideal no tratamento e controle de infestações;- Atua contra carrapatos e pulgas;" }
            }
        },
        "perfil": {
            "teste@teste.com.br": { "nome": "Teste", "senha": "t", "urlImagem": "assets/img/pOQKYujfS2WBxYvlBmkt_person.jpg" }
        },
        "carrinho": {
            "icone": "assets/img/knTzFWINROSD2JgCRu5R_Bispg5DQCyOby9869Wvj_carrinho_de_compras.jpg",
            "produtos": {
                "antipulgas": ["0", "1"]
            }
        },
        "cartao": [
            { "nome": "Teste", "numero": "055500555055", "validade": "12/27", "ccv": "157" }
        ]
    };
    return DataBase;
}());

//# sourceMappingURL=db.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map
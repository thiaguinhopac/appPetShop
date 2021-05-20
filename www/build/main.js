webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartOPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__finalizar_finalizar__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inicio_inicio__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__produto_produto__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__carrinho_carrinho__ = __webpack_require__(14);
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
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function CartOPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
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
    CartOPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart-o',template:/*ion-inline-start:"/home/thiago/Desktop/app/src/pages/cart-o/cart-o.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Cartão\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page10">\n  <img src="assets/img/jBFmrEElSwOrNjZkDtqF_bank_card.jpg" style="display:block;width:70%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="width:300px;height:29px;" id="cartO-spacer14"></div>\n  <ion-card id="cartO-card24">\n    <ion-list>\n      <ion-item color="none" on-click="goToFinalizar()" id="cartO-list-item28">\n        Carão de Crédito\n        <ion-note item-right></ion-note>\n        <ion-icon name="card" item-right></ion-icon>\n      </ion-item>\n      <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n        <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n      </div>\n    </ion-list>\n  </ion-card>\n  <button id="cartO-button6" ion-button clear color="light" block small>\n    <ion-icon name="add-circle"></ion-icon>\n    Adicionar novo cartão\n  </button>\n</ion-content>'/*ion-inline-end:"/home/thiago/Desktop/app/src/pages/cart-o/cart-o.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], CartOPage);
    return CartOPage;
}());

//# sourceMappingURL=cart-o.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrinhoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__produto_produto__ = __webpack_require__(17);
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
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function CarrinhoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CarrinhoPage_1 = CarrinhoPage;
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
    CarrinhoPage = CarrinhoPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-carrinho',template:/*ion-inline-start:"/home/thiago/Desktop/app/src/pages/carrinho/carrinho.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Carrinho\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3">\n  <img src="assets/img/knTzFWINROSD2JgCRu5R_Bispg5DQCyOby9869Wvj_carrinho_de_compras.jpg" style="display:block;width:40%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="width:300px;height:26px;" id="carrinho-spacer1"></div>\n  <div id="carrinho-container1">\n    <ion-list id="carrinho-list1">\n      <ion-item-sliding>\n        <ion-item color="none" on-click="goToProduto()" id="carrinho-list-item7">\n          <ion-avatar item-left>\n            <img src="assets/img/iyzG1s1SRVSImOybwhYg_racao.jpg" />\n          </ion-avatar>\n          <h2>\n            Ração Pedigree\n          </h2>\n        </ion-item>\n        <ion-item-options side="left">\n          <button ion-button color="light"></button>\n        </ion-item-options>\n      </ion-item-sliding>\n      <ion-item-sliding>\n        <ion-item color="none" on-click="goToProduto()" id="carrinho-list-item18">\n          <ion-avatar item-left>\n            <img src="assets/img/iyzG1s1SRVSImOybwhYg_racao.jpg" />\n          </ion-avatar>\n          <h2>\n            Ração Pedigree\n          </h2>\n        </ion-item>\n        <ion-item-options side="left">\n          <button ion-button color="light"></button>\n        </ion-item-options>\n      </ion-item-sliding>\n      <ion-item-sliding>\n        <ion-item color="none" on-click="goToProduto()" id="carrinho-list-item19">\n          <ion-avatar item-left>\n            <img src="assets/img/iyzG1s1SRVSImOybwhYg_racao.jpg" />\n          </ion-avatar>\n          <h2>\n            Ração Pedigree\n          </h2>\n        </ion-item>\n        <ion-item-options side="left">\n          <button ion-button color="light"></button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n    <div class="spacer" style="width:300px;height:16px;" id="carrinho-spacer9"></div>\n    <div id="carrinho-markdown8" style="text-align:right;" class="show-list-numbers-and-dots">\n      <p style="color:#000000;">\n        Total: R$ 149.7\n      </p>\n    </div>\n  </div>\n  <div class="spacer" style="width:300px;height:22px;" id="carrinho-spacer10"></div>\n  <div id="carrinho-markdown9" style="text-align:right;" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Frete : Grátis\n    </p>\n  </div>\n  <div class="spacer" style="width:300px;height:22px;" id="carrinho-spacer12"></div>\n  <button id="carrinho-button1" ion-button color="energized" block>\n    Finalizar compra\n  </button>\n  <div class="spacer" style="height:100px;" id="carrinho-spacer11"></div>\n</ion-content>'/*ion-inline-end:"/home/thiago/Desktop/app/src/pages/carrinho/carrinho.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], CarrinhoPage);
    return CarrinhoPage;
    var CarrinhoPage_1;
}());

//# sourceMappingURL=carrinho.js.map

/***/ }),

/***/ 154:
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
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carrinho_carrinho__ = __webpack_require__(14);
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
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function ProdutoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ProdutoPage_1 = ProdutoPage;
    ProdutoPage.prototype.goToCarrinho = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    ProdutoPage.prototype.goToProduto = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(ProdutoPage_1);
    };
    ProdutoPage = ProdutoPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-produto',template:/*ion-inline-start:"/home/thiago/Desktop/app/src/pages/produto/produto.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Produto\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page8">\n  <img src="assets/img/f9zxKQJUR6CChhkaZDmp_racao.jpg" style="display:block;width:70%;height:auto;margin-left:auto;margin-right:auto;" />\n  <h1 id="produto-heading1" style="color:#000000;text-align:center;">\n    Ração Pedigree\n  </h1>\n  <h1 id="produto-heading2" style="color:#ABFFAA;text-align:center;">\n    R$ 49,90\n  </h1>\n  <div class="spacer" style="width:300px;height:58px;" id="produto-spacer6"></div>\n  <div id="produto-markdown1" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      descrição:\n    </p>\n  </div>\n  <div id="produto-markdown2" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Idade: Adulto\n    </p>\n    <p style="color:#000000;">\n      Linha: Premium\n    </p>\n    <p style="color:#000000;">\n      Pet: Cachorros\n    </p>\n    <p style="color:#000000;">\n      Porte de Raça: Pequeno\n    </p>\n    <p style="color:#000000;">\n      Sabor: Carne\n    </p>\n    <p style="color:#000000;">\n      Tipo: Ração seca\n    </p>\n    <p style="color:#000000;">\n      Apresentação: 1kg, 3kg, 10,1kg, 15kg e 20kg\n    </p>\n    <p style="color:#000000;">\n      Indicação: Alimentação diária de cães adultos de pequeno porte\n    </p>\n  </div>\n  <div class="spacer" style="width:300px;height:56px;" id="produto-spacer8"></div>\n  <button id="produto-button5" ion-button color="energized" block on-click="goToCarrinho()">\n    Adicionar ao carrinho\n  </button>\n  <div class="spacer" style="width:300px;height:100px;" id="produto-spacer7"></div>\n</ion-content>'/*ion-inline-end:"/home/thiago/Desktop/app/src/pages/produto/produto.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ProdutoPage);
    return ProdutoPage;
    var ProdutoPage_1;
}());

//# sourceMappingURL=produto.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsControllerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio_inicio__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carrinho_carrinho__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configura_es_configura_es__ = __webpack_require__(281);
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
            selector: 'page-tabs-controller',template:/*ion-inline-start:"/home/thiago/Desktop/app/src/pages/tabs-controller/tabs-controller.html"*/'<ion-tabs id="tabsController-tabs1">\n  <ion-tab [root]="tab1Root" tabTitle="Inicio" tabIcon="home" id="tabsController-tab1"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Carrinho" tabIcon="cart" id="tabsController-tab2"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Configurações" tabIcon="construct" id="tabsController-tab3"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/home/thiago/Desktop/app/src/pages/tabs-controller/tabs-controller.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], TabsControllerPage);
    return TabsControllerPage;
}());

//# sourceMappingURL=tabs-controller.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio_inicio__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__produto_produto__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__carrinho_carrinho__ = __webpack_require__(14);
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
    LoginPage.prototype.goToInicio = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__inicio_inicio__["a" /* InicioPage */]);
    };
    LoginPage.prototype.goToProduto = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__produto_produto__["a" /* ProdutoPage */]);
    };
    LoginPage.prototype.goToCarrinho = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/thiago/Desktop/app/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page6">\n  <img src="assets/img/V3usKrbpRDqQd43qSuRY_petshop.jpg" style="display:block;width:40%;height:auto;margin-left:auto;margin-right:auto;" />\n  <form id="login-form1">\n    <div class="spacer" style="width:300px;height:35px;" id="login-spacer5"></div>\n    <ion-list id="login-list2">\n      <ion-item id="login-input1">\n        <ion-label stacked>\n          Email\n        </ion-label>\n        <ion-input type="email" placeholder="email@...." name="emailLogin"></ion-input>\n      </ion-item>\n      <ion-item id="login-input2">\n        <ion-label stacked>\n          Senha\n        </ion-label>\n        <ion-input type="password" placeholder="******" name="senhaLogin"></ion-input>\n      </ion-item>\n    </ion-list>\n    <div class="spacer" style="height:40px;" id="login-spacer2"></div>\n    <button id="login-button2" ion-button color="energized" block on-click="goToInicio()">\n      Entrar\n    </button>\n    <button id="login-button3" ion-button clear color="positive" block href-inappbrowser="/signup">\n      Or create an account\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"/home/thiago/Desktop/app/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoletoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__finalizar_finalizar__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inicio_inicio__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__produto_produto__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__carrinho_carrinho__ = __webpack_require__(14);
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
    BoletoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-boleto',template:/*ion-inline-start:"/home/thiago/Desktop/app/src/pages/boleto/boleto.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Boleto\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page12">\n  <img src="assets/img/YNrdwV6rSJuw5BdzsHcR_boleto.jpg" style="display:block;width:70%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:100px;" id="boleto-spacer18"></div>\n  <div id="boleto-markdown16" class="show-list-numbers-and-dots">\n    <ul>\n      <li>\n        O boleto pode levar o tempo de ate 3 dias uteis para compensar.\n      </li>\n    </ul>\n  </div>\n  <div class="spacer" style="width:300px;height:33px;" id="boleto-spacer19"></div>\n  <button id="boleto-button8" ion-button color="energized" block icon-left on-click="goToFinalizar()">\n    <ion-icon name="download"></ion-icon>\n    Gerar Boleto\n  </button>\n</ion-content>'/*ion-inline-end:"/home/thiago/Desktop/app/src/pages/boleto/boleto.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], BoletoPage);
    return BoletoPage;
}());

//# sourceMappingURL=boleto.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_inicio_inicio__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_carrinho_carrinho__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_configura_es_configura_es__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_controller_tabs_controller__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_page_page__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_cadastrar_cadastrar__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_produto_produto__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_pagamento_pagamento__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_cart_o_cart_o__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_finalizar_finalizar__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_boleto_boleto__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_adicionar_cart_o_adicionar_cart_o__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_pesquisar_pesquisar__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_conta_conta__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__ = __webpack_require__(197);
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
                })
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
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__produto_produto__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carrinho_carrinho__ = __webpack_require__(14);
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
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function InicioPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    InicioPage.prototype.goToProduto = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__produto_produto__["a" /* ProdutoPage */]);
    };
    InicioPage.prototype.goToCarrinho = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    InicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inicio',template:/*ion-inline-start:"/home/thiago/Desktop/app/src/pages/inicio/inicio.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Inicio\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page2">\n  <img src="assets/img/Pi672XjRcuQYSxGVYuWF_petshop.jpg" style="display:block;width:30%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n    <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n  </div>\n  <form id="inicio-form5">\n    <div class="spacer" style="width:300px;height:21px;" id="inicio-spacer23"></div>\n    <ion-searchbar placeholder="Pesquisar" name="" id="inicio-search1"></ion-searchbar>\n  </form>\n  <div class="spacer" style="width:300px;height:39px;" id="inicio-spacer24"></div>\n  <ion-card id="inicio-card29">\n    <ion-list>\n      <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n        <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n      </div>\n      <h5 id="inicio-heading10" style="color:#000000;">\n        produtos\n      </h5>\n      <ion-card id="inicio-card210">\n        <ion-list>\n          <ion-list id="inicio-list5">\n            <ion-item color="none" on-click="goToProduto()" id="inicio-list-item68">\n              <ion-avatar item-left>\n                <img src="assets/img/LTFfckPfSxqm38OK7eq9_racao.jpg" />\n              </ion-avatar>\n              <h2>\n                Ração Pedigree\n              </h2>\n            </ion-item>\n            <ion-item color="none" on-click="goToProduto()" id="inicio-list-item69">\n              <ion-avatar item-left>\n                <img src="assets/img/LTFfckPfSxqm38OK7eq9_racao.jpg" />\n              </ion-avatar>\n              <h2>\n                Ração Pedigree\n              </h2>\n            </ion-item>\n            <ion-item color="none" on-click="goToProduto()" id="inicio-list-item70">\n              <ion-avatar item-left>\n                <img src="assets/img/LTFfckPfSxqm38OK7eq9_racao.jpg" />\n              </ion-avatar>\n              <h2>\n                Ração Pedigree\n              </h2>\n            </ion-item>\n          </ion-list>\n        </ion-list>\n      </ion-card>\n    </ion-list>\n  </ion-card>\n  <ion-card id="inicio-card27">\n    <ion-list>\n      <h5 id="inicio-heading9" style="color:#000000;">\n        sobre nós\n      </h5>\n      <div id="inicio-markdown21" class="show-list-numbers-and-dots">\n        <p style="color:#000000;">\n          Definimos um tipo elevado de tratamento com seu pet, tanto em produtos quanto em higiene ( tosa, banho, etc. ).\n        </p>\n        <p style="color:#000000;">\n          Criamos uma logistica unica que nos traz a certeza de que seremos o destaque em termo de eficiencia e qualidade.\n        </p>\n        <p style="color:#000000;">\n          Fundada em 2003, cada vez vem ganhando mais forma dentro do mercado, tem se destacado como uma das principais pet shops em questão a satisfação do cliente\n        </p>\n      </div>\n      <img src="assets/img/jKWqyoBEQrarD9AgcljT_loja.jpg" />\n    </ion-list>\n  </ion-card>\n  <ion-card id="inicio-card26">\n    <ion-list>\n      <h5 id="inicio-heading8" style="color:#000000;">\n        Localização\n      </h5>\n      <div id="inicio-markdown20" class="show-list-numbers-and-dots">\n        <p style="color:#000000;">\n          Contamos com diversos filiados em diversas regiões do País, ache a mais perto de você.\n        </p>\n        <ul>\n          <li>\n            1 São Paulo São Paulo\n          </li>\n          <li>\n            2 Rio de Janeiro Rio de Janeiro\n          </li>\n          <li>\n            3 Brasília Distrito Federal\n          </li>\n          <li>\n            4 Salvador Bahia Bahia\n          </li>\n          <li>\n            5 Fortaleza Ceará\n          </li>\n          <li>\n            6 Belo Horizonte Minas Gerais\n          </li>\n          <li>\n            7 Manaus Amazonas\n          </li>\n          <li>\n            8 Curitiba Paraná\n          </li>\n          <li>\n            9 Recife Pernambuco\n          </li>\n          <li>\n            10 Goiânia Goiás\n          </li>\n          <li>\n            11 Belém Pará Pará\n          </li>\n          <li>\n            12 Porto Alegre Rio Grande do Sul\n          </li>\n          <li>\n            13 Guarulhos São Paulo\n          </li>\n        </ul>\n      </div>\n      <div class="spacer" style="width:300px;height:31px;" id="inicio-spacer25"></div>\n      <img src="assets/img/ZCVg3vLTaqHMJsV4IIRV_maps.jpg" />\n      <div class="spacer" style="width:300px;height:42px;" id="inicio-spacer26"></div>\n    </ion-list>\n  </ion-card>\n  <div class="spacer" style="height:100px;" id="inicio-spacer28"></div>\n  <div class="spacer" style="height:100px;" id="inicio-spacer27"></div>\n</ion-content>'/*ion-inline-end:"/home/thiago/Desktop/app/src/pages/inicio/inicio.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], InicioPage);
    return InicioPage;
}());

//# sourceMappingURL=inicio.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_controller_tabs_controller__ = __webpack_require__(198);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/thiago/Desktop/app/src/app/app.html"*/'<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"/home/thiago/Desktop/app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 276:
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
            selector: 'page-page',template:/*ion-inline-start:"/home/thiago/Desktop/app/src/pages/page/page.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Page\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page5"></ion-content>'/*ion-inline-end:"/home/thiago/Desktop/app/src/pages/page/page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], PagePage);
    return PagePage;
}());

//# sourceMappingURL=page.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inicio_inicio__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__produto_produto__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__carrinho_carrinho__ = __webpack_require__(14);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    CadastrarPage.prototype.goToInicio = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__inicio_inicio__["a" /* InicioPage */]);
    };
    CadastrarPage.prototype.goToProduto = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__produto_produto__["a" /* ProdutoPage */]);
    };
    CadastrarPage.prototype.goToCarrinho = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    CadastrarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastrar',template:/*ion-inline-start:"/home/thiago/Desktop/app/src/pages/cadastrar/cadastrar.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Cadastrar\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page7">\n  <img src="assets/img/d21uIZVpQbWyskvV7AXZ_petshop.jpg" style="display:block;width:40%;height:auto;margin-left:auto;margin-right:auto;" />\n  <form id="cadastrar-form2">\n    <div class="spacer" style="width:300px;height:18px;" id="cadastrar-spacer3"></div>\n    <ion-list id="cadastrar-list3">\n      <ion-item id="cadastrar-input3">\n        <ion-label stacked>\n          Nome\n        </ion-label>\n        <ion-input type="text" placeholder="Martilda Vamiles" name="nomeCadastro"></ion-input>\n      </ion-item>\n      <ion-item id="cadastrar-input4">\n        <ion-label stacked>\n          Email\n        </ion-label>\n        <ion-input type="email" placeholder="email@.." name="emailCadastro"></ion-input>\n      </ion-item>\n      <ion-item id="cadastrar-input5">\n        <ion-label stacked>\n          Senha\n        </ion-label>\n        <ion-input type="password" placeholder="************" name="senhaCadastro"></ion-input>\n      </ion-item>\n    </ion-list>\n    <div class="spacer" style="width:300px;height:30px;" id="cadastrar-spacer4"></div>\n    <button id="cadastrar-button4" ion-button color="energized" block on-click="goToLogin()">\n      Cadastrar\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"/home/thiago/Desktop/app/src/pages/cadastrar/cadastrar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], CadastrarPage);
    return CadastrarPage;
}());

//# sourceMappingURL=cadastrar.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagamentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_o_cart_o__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__finalizar_finalizar__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inicio_inicio__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__produto_produto__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__carrinho_carrinho__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__boleto_boleto__ = __webpack_require__(201);
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
    PagamentoPage.prototype.goToBoleto = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__boleto_boleto__["a" /* BoletoPage */]);
    };
    PagamentoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pagamento',template:/*ion-inline-start:"/home/thiago/Desktop/app/src/pages/pagamento/pagamento.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Pagamento\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page9">\n  <img src="assets/img/rqwTTEm7QemfbTTeOAQq_petshop.jpg" style="display:block;width:70%;height:auto;margin-left:auto;margin-right:auto;" />\n  <h4 id="pagamento-heading6" style="color:#000000;font-weight:400;text-align:center;">\n    Selecione o tipo de pagamento\n  </h4>\n  <ion-card id="pagamento-card23">\n    <ion-list>\n      <ion-item color="none" on-click="goToCartO()" id="pagamento-list-item22">\n        <ion-icon name="card" item-left></ion-icon>\n        Débito/Crédito\n      </ion-item>\n      <ion-item color="none" on-click="goToBoleto()" id="pagamento-list-item24">\n        <ion-icon name="document" item-left></ion-icon>\n        Boleto Bancário\n      </ion-item>\n      <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n        <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n      </div>\n    </ion-list>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/home/thiago/Desktop/app/src/pages/pagamento/pagamento.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], PagamentoPage);
    return PagamentoPage;
}());

//# sourceMappingURL=pagamento.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdicionarCartOPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_o_cart_o__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__finalizar_finalizar__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inicio_inicio__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__produto_produto__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__carrinho_carrinho__ = __webpack_require__(14);
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
    AdicionarCartOPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adicionar-cart-o',template:/*ion-inline-start:"/home/thiago/Desktop/app/src/pages/adicionar-cart-o/adicionar-cart-o.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Adicionar Cartão\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page13">\n  <img src="assets/img/8N48tWGMSKaVZOIMjFqN_cartao.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="width:300px;height:36px;" id="adicionarCartO-spacer20"></div>\n  <form id="adicionarCartO-form4">\n    <ion-item id="adicionarCartO-input9">\n      <ion-label stacked>\n        Nome impresso no cartão\n      </ion-label>\n      <ion-input type="text" placeholder="Matailda Venila"></ion-input>\n    </ion-item>\n    <ion-item id="adicionarCartO-input10">\n      <ion-label stacked>\n        Numero do cartão\n      </ion-label>\n      <ion-input type="number" placeholder="5505 5055 0055 5500"></ion-input>\n    </ion-item>\n    <ion-item id="adicionarCartO-input11">\n      <ion-label stacked>\n        Validade\n      </ion-label>\n      <ion-input type="date" placeholder=""></ion-input>\n    </ion-item>\n    <div class="spacer" style="width:300px;height:52px;" id="adicionarCartO-spacer21"></div>\n    <button id="adicionarCartO-button10" ion-button color="energized" block on-click="goToCartO()">\n      Salvar cartão\n    </button>\n    <div class="spacer" style="height:100px;" id="adicionarCartO-spacer22"></div>\n  </form>\n</ion-content>'/*ion-inline-end:"/home/thiago/Desktop/app/src/pages/adicionar-cart-o/adicionar-cart-o.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], AdicionarCartOPage);
    return AdicionarCartOPage;
}());

//# sourceMappingURL=adicionar-cart-o.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PesquisarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__produto_produto__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carrinho_carrinho__ = __webpack_require__(14);
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
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function PesquisarPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
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
    PesquisarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pesquisar',template:/*ion-inline-start:"/home/thiago/Desktop/app/src/pages/pesquisar/pesquisar.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Pesquisar\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page14">\n  <form id="pesquisar-form6">\n    <ion-searchbar placeholder="Pesquisar" name="" id="pesquisar-search2"></ion-searchbar>\n  </form>\n  <ion-card id="pesquisar-card211">\n    <ion-list>\n      <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n        <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n      </div>\n      <ion-list id="pesquisar-list6">\n        <ion-item color="none" on-click="goToProduto()" id="pesquisar-list-item81">\n          <ion-avatar item-left>\n            <img src="assets/img/JcOqvKalQCajqT2BbPMP_racao.jpg" />\n          </ion-avatar>\n          <h2>\n            Ração Pedigree\n          </h2>\n        </ion-item>\n      </ion-list>\n    </ion-list>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/home/thiago/Desktop/app/src/pages/pesquisar/pesquisar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], PesquisarPage);
    return PesquisarPage;
}());

//# sourceMappingURL=pesquisar.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguraEsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inicio_inicio__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__produto_produto__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__carrinho_carrinho__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_o_cart_o__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__finalizar_finalizar__ = __webpack_require__(43);
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
    ConfiguraEsPage.prototype.goToCartO = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cart_o_cart_o__["a" /* CartOPage */]);
    };
    ConfiguraEsPage.prototype.goToFinalizar = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__finalizar_finalizar__["a" /* FinalizarPage */]);
    };
    ConfiguraEsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-configura-es',template:/*ion-inline-start:"/home/thiago/Desktop/app/src/pages/configura-es/configura-es.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Configurações\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n  <img src="assets/img/ru13jJrgSlyk1rqVTgVu_petshop.jpg" style="display:block;width:40%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="width:300px;height:26px;" id="configuraEs-spacer13"></div>\n  <ion-card id="configuraEs-card21">\n    <ion-list>\n      <ion-item color="none" id="configuraEs-list-item85">\n        <ion-icon name="person" item-left></ion-icon>\n        Conta\n      </ion-item>\n      <ion-item color="none" on-click="goToCartO()" id="configuraEs-list-item87">\n        <ion-icon name="card" item-left></ion-icon>\n        Cartões\n      </ion-item>\n      <ion-item color="none" on-click="goToLogin()" id="configuraEs-list-item88">\n        <ion-icon name="exit" item-left></ion-icon>\n        Sair\n      </ion-item>\n      <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n        <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n      </div>\n    </ion-list>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/home/thiago/Desktop/app/src/pages/configura-es/configura-es.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ConfiguraEsPage);
    return ConfiguraEsPage;
}());

//# sourceMappingURL=configura-es.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configura_es_configura_es__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inicio_inicio__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__produto_produto__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__carrinho_carrinho__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cart_o_cart_o__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__finalizar_finalizar__ = __webpack_require__(43);
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
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function ContaPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
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
    ContaPage.prototype.goToCartO = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__cart_o_cart_o__["a" /* CartOPage */]);
    };
    ContaPage.prototype.goToFinalizar = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__finalizar_finalizar__["a" /* FinalizarPage */]);
    };
    ContaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-conta',template:/*ion-inline-start:"/home/thiago/Desktop/app/src/pages/conta/conta.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Conta\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page15">\n  <div class="spacer" style="width:300px;height:19px;" id="conta-spacer30"></div>\n  <img src="assets/img/pOQKYujfS2WBxYvlBmkt_person.jpg" style="display:block;width:50%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="width:300px;height:50px;" id="conta-spacer29"></div>\n  <ion-list id="conta-list8">\n    <ion-item id="conta-input13">\n      <ion-label>\n        Nome\n      </ion-label>\n      <ion-input type="text" placeholder="Maria Dolores"></ion-input>\n    </ion-item>\n    <ion-item id="conta-input14">\n      <ion-label>\n        Endereço\n      </ion-label>\n      <ion-input type="text" placeholder="Rua Afonso Ricardo. 233"></ion-input>\n    </ion-item>\n    <ion-item id="conta-input15">\n      <ion-label>\n        Nascimento\n      </ion-label>\n      <ion-input type="date" placeholder="11/03/1988"></ion-input>\n    </ion-item>\n  </ion-list>\n  <button id="conta-button9" ion-button color="positive" block on-click="goToConfiguraEs()">\n    Salvar\n  </button>\n</ion-content>'/*ion-inline-end:"/home/thiago/Desktop/app/src/pages/conta/conta.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ContaPage);
    return ContaPage;
}());

//# sourceMappingURL=conta.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinalizarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio_inicio__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__produto_produto__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__carrinho_carrinho__ = __webpack_require__(14);
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
    FinalizarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-finalizar',template:/*ion-inline-start:"/home/thiago/Desktop/app/src/pages/finalizar/finalizar.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Finalizar\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page11">\n  <div class="spacer" style="width:300px;height:61px;" id="finalizar-spacer16"></div>\n  <img src="assets/img/B1qQ8ceQH23CMeoBTddZ_check.jpg" style="display:block;width:30%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="width:300px;height:28px;" id="finalizar-spacer15"></div>\n  <h4 id="finalizar-heading7" style="color:#000000;font-weight:400;text-align:center;">\n    Compra realizada com sucesso\n  </h4>\n  <div id="finalizar-markdown15" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Obrigado por comprar conosco! Você pode acompanhar seu pedido nesse link https://linkDoRastreio.com.br ou falar com a gente através desse email suporte@petshop.com.br\n    </p>\n  </div>\n  <div class="spacer" style="width:300px;height:55px;" id="finalizar-spacer17"></div>\n  <button id="finalizar-button7" ion-button color="energized" block on-click="goToInicio()">\n    Inicio\n  </button>\n</ion-content>'/*ion-inline-end:"/home/thiago/Desktop/app/src/pages/finalizar/finalizar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], FinalizarPage);
    return FinalizarPage;
}());

//# sourceMappingURL=finalizar.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map
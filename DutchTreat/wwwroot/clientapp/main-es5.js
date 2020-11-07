(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./ClientApp/app/app.component.ts":
    /*!****************************************!*\
      !*** ./ClientApp/app/app.component.ts ***!
      \****************************************/

    /*! exports provided: AppComponent */

    /***/
    function ClientAppAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Product List';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["the-shop"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'the-shop',
            templateUrl: "./app.component.html",
            styles: []
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./ClientApp/app/app.module.ts":
    /*!*************************************!*\
      !*** ./ClientApp/app/app.module.ts ***!
      \*************************************/

    /*! exports provided: AppModule */

    /***/
    function ClientAppAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "./ClientApp/app/app.component.ts");
      /* harmony import */


      var _shop_productList_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shop/productList.component */
      "./ClientApp/app/shop/productList.component.ts");
      /* harmony import */


      var _shop_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./shop/cart.component */
      "./ClientApp/app/shop/cart.component.ts");
      /* harmony import */


      var _shared_dataService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./shared/dataService */
      "./ClientApp/app/shared/dataService.ts");
      /* harmony import */


      var _shop_shop_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./shop/shop.component */
      "./ClientApp/app/shop/shop.component.ts");
      /* harmony import */


      var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./checkout/checkout.component */
      "./ClientApp/app/checkout/checkout.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [{
        path: "",
        component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_7__["Shop"]
      }, {
        path: "checkout",
        component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__["Checkout"]
      }];

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_shared_dataService__WEBPACK_IMPORTED_MODULE_6__["DataService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(routes, {
          useHash: true,
          enableTracing: false
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _shop_productList_component__WEBPACK_IMPORTED_MODULE_4__["ProductList"], _shop_cart_component__WEBPACK_IMPORTED_MODULE_5__["Cart"], _shop_shop_component__WEBPACK_IMPORTED_MODULE_7__["Shop"], _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__["Checkout"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _shop_productList_component__WEBPACK_IMPORTED_MODULE_4__["ProductList"], _shop_cart_component__WEBPACK_IMPORTED_MODULE_5__["Cart"], _shop_shop_component__WEBPACK_IMPORTED_MODULE_7__["Shop"], _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__["Checkout"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(routes, {
              useHash: true,
              enableTracing: false
            })],
            providers: [_shared_dataService__WEBPACK_IMPORTED_MODULE_6__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./ClientApp/app/checkout/checkout.component.ts":
    /*!******************************************************!*\
      !*** ./ClientApp/app/checkout/checkout.component.ts ***!
      \******************************************************/

    /*! exports provided: Checkout */

    /***/
    function ClientAppAppCheckoutCheckoutComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Checkout", function () {
        return Checkout;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/dataService */
      "./ClientApp/app/shared/dataService.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      function Checkout_tr_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var o_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "/img/", o_r1.productArtId, ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("", o_r1.productCategory, "(", o_r1.productSize, ") - ", o_r1.productArtist, ": ", o_r1.productTitle, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](o_r1.quantity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 8, o_r1.unitPrice, "USD", true));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](12, 12, o_r1.unitPrice * o_r1.quantity, "USD", true));
        }
      }

      var Checkout = /*#__PURE__*/function () {
        function Checkout(data) {
          _classCallCheck(this, Checkout);

          this.data = data;
        }

        _createClass(Checkout, [{
          key: "onCheckout",
          value: function onCheckout() {
            // TODO
            alert("Doing checkout");
          }
        }]);

        return Checkout;
      }();

      Checkout.ɵfac = function Checkout_Factory(t) {
        return new (t || Checkout)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"]));
      };

      Checkout.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Checkout,
        selectors: [["checkout"]],
        decls: 28,
        vars: 11,
        consts: [[1, "row"], [1, "table", "table-bordered", "table-hover"], [4, "ngFor", "ngForOf"], [1, "col-md-4", "col-md-offset-8", "text-right"], [1, "table", "table-condensed"], [1, "text-right"], [1, "btn", "btn-success", 3, "click"], ["routerLink", "/", 1, "btn", "btn-info"], ["alt", "o.productTitle", 1, "img-thumbnail", "checkout-thumb", 3, "src"]],
        template: function Checkout_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Confirm Order");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Checkout_tr_4_Template, 13, 16, "tr", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Subtotal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Shipping");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "$ 0.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Total:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Checkout_Template_button_click_24_listener() {
              return ctx.onCheckout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Complete Purchase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.order.items);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](12, 3, ctx.data.order.subtotal, "USD", true));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](23, 7, ctx.data.order.subtotal, "USD", true));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]],
        styles: [".checkout-thumb[_ngcontent-%COMP%] {\n  max-width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlY2tvdXQtdGh1bWIge1xuICBtYXgtd2lkdGg6IDEwMHB4O1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Checkout, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "checkout",
            templateUrl: "checkout.component.html",
            styleUrls: ['checkout.component.css']
          }]
        }], function () {
          return [{
            type: _shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./ClientApp/app/shared/dataService.ts":
    /*!*********************************************!*\
      !*** ./ClientApp/app/shared/dataService.ts ***!
      \*********************************************/

    /*! exports provided: DataService */

    /***/
    function ClientAppAppSharedDataServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataService", function () {
        return DataService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./order */
      "./ClientApp/app/shared/order.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var DataService = /*#__PURE__*/function () {
        function DataService(http) {
          _classCallCheck(this, DataService);

          this.http = http;
          this.order = new _order__WEBPACK_IMPORTED_MODULE_2__["Order"]();
          this.products = [];
        }

        _createClass(DataService, [{
          key: "loadProducts",
          value: function loadProducts() {
            var _this = this;

            return this.http.get("/api/products").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
              _this.products = data;
              return true;
            }));
          }
        }, {
          key: "AddToOrder",
          value: function AddToOrder(newProduct) {
            var item = this.order.items.find(function (i) {
              return i.productId == newProduct.id;
            });

            if (item != undefined) {
              item.quantity++;
            } else {
              var _item = new _order__WEBPACK_IMPORTED_MODULE_2__["OrderItem"]();

              _item.productId = newProduct.id;
              _item.productArtist = newProduct.artist;
              _item.productArtId = newProduct.artId;
              _item.productCategory = newProduct.category;
              _item.productSize = newProduct.size;
              _item.productTitle = newProduct.title;
              _item.unitPrice = newProduct.price;
              _item.quantity = 1;
              this.order.items.push(_item);
            }
          }
        }]);

        return DataService;
      }();

      DataService.ɵfac = function DataService_Factory(t) {
        return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DataService,
        factory: DataService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./ClientApp/app/shared/order.ts":
    /*!***************************************!*\
      !*** ./ClientApp/app/shared/order.ts ***!
      \***************************************/

    /*! exports provided: Order, OrderItem */

    /***/
    function ClientAppAppSharedOrderTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Order", function () {
        return Order;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderItem", function () {
        return OrderItem;
      });
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! lodash */
      "./node_modules/lodash/lodash.js");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

      var Order = /*#__PURE__*/function () {
        function Order() {
          _classCallCheck(this, Order);

          this.orderDate = new Date();
          this.items = new Array();
        }

        _createClass(Order, [{
          key: "subtotal",
          get: function get() {
            return lodash__WEBPACK_IMPORTED_MODULE_0__["sum"](lodash__WEBPACK_IMPORTED_MODULE_0__["map"](this.items, function (i) {
              return i.unitPrice * i.quantity;
            }));
          }
        }]);

        return Order;
      }();

      var OrderItem = function OrderItem() {
        _classCallCheck(this, OrderItem);
      };
      /***/

    },

    /***/
    "./ClientApp/app/shop/cart.component.ts":
    /*!**********************************************!*\
      !*** ./ClientApp/app/shop/cart.component.ts ***!
      \**********************************************/

    /*! exports provided: Cart */

    /***/
    function ClientAppAppShopCartComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Cart", function () {
        return Cart;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/dataService */
      "./ClientApp/app/shared/dataService.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      function Cart_tr_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var o_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", o_r2.productCategory, " - ", o_r2.productTitle, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](o_r2.quantity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](7, 5, o_r2.unitPrice, "ZAR", "symbol"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](10, 9, o_r2.unitPrice * o_r2.quantity, "ZAR", "symbol"));
        }
      }

      function Cart_a_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Checkout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var Cart = function Cart(data) {
        _classCallCheck(this, Cart);

        this.data = data;
      };

      Cart.ɵfac = function Cart_Factory(t) {
        return new (t || Cart)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"]));
      };

      Cart.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Cart,
        selectors: [["the-cart"]],
        decls: 21,
        vars: 8,
        consts: [[1, "table", "table-condensed", "table-hover"], [4, "ngFor", "ngForOf"], ["routerLink", "checkout", "class", "btn btn-success", 4, "ngIf"], ["routerLink", "checkout", 1, "btn", "btn-success"]],
        template: function Cart_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Shopping Cart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "R");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Total");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, Cart_tr_19_Template, 11, 13, "tr", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, Cart_a_20_Template, 2, 0, "a", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#/Items: ", ctx.data.order.items.length, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Subtotal: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](6, 4, ctx.data.order.subtotal, "ZAR", "symbol"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.order.items);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.order.items.length > 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Cart, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "the-cart",
            templateUrl: "cart.component.html",
            styleUrls: []
          }]
        }], function () {
          return [{
            type: _shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./ClientApp/app/shop/productList.component.ts":
    /*!*****************************************************!*\
      !*** ./ClientApp/app/shop/productList.component.ts ***!
      \*****************************************************/

    /*! exports provided: ProductList */

    /***/
    function ClientAppAppShopProductListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductList", function () {
        return ProductList;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/dataService */
      "./ClientApp/app/shared/dataService.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function ProductList_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Price:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Artist");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Title:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Description:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductList_div_1_Template_button_click_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var p_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.addProduct(p_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Buy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var p_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "/img/", p_r1.artId, ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", p_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", p_r1.category, " - ", p_r1.size, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](10, 8, p_r1.price, "ZAR", true), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", p_r1.artist, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r1.title, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r1.artDescription, "");
        }
      }

      var ProductList = /*#__PURE__*/function () {
        function ProductList(data) {
          _classCallCheck(this, ProductList);

          this.data = data;
          this.products = [];
        }

        _createClass(ProductList, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.data.loadProducts().subscribe(function (success) {
              if (success) {
                _this2.products = _this2.data.products;
              }

              _this2.products = _this2.data.products;
            });
          }
        }, {
          key: "addProduct",
          value: function addProduct(product) {
            this.data.AddToOrder(product);
          }
        }]);

        return ProductList;
      }();

      ProductList.ɵfac = function ProductList_Factory(t) {
        return new (t || ProductList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"]));
      };

      ProductList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductList,
        selectors: [["product-list"]],
        decls: 2,
        vars: 1,
        consts: [[1, "row"], ["class", "product-info col-md-4", 4, "ngFor", "ngForOf"], [1, "product-info", "col-md-4"], [1, "card", "bg-light", "p-1", "m-1"], [1, "img-fluid", 3, "src", "alt"], [1, "product-name"], [1, "products-props"], ["id", "buyButton", 1, "btn", "btn-success", "btn-sm", "pull-right", 3, "click"]],
        template: function ProductList_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductList_div_1_Template, 25, 12, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]],
        styles: [".product-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 100px;\r\n    float:left;\r\n    margin: 0 2px;\r\n    border: 1px solid black;\r\n}\r\n\r\n.product-info[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%]{\r\n    font-size:large;\r\n    font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvc2hvcC9wcm9kdWN0TGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL3Nob3AvcHJvZHVjdExpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWluZm8gaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgbWFyZ2luOiAwIDJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4ucHJvZHVjdC1pbmZvIC5wcm9kdWN0LW5hbWV7XHJcbiAgICBmb250LXNpemU6bGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductList, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "product-list",
            templateUrl: "productList.component.html",
            styleUrls: ["productList.component.css"]
          }]
        }], function () {
          return [{
            type: _shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./ClientApp/app/shop/shop.component.ts":
    /*!**********************************************!*\
      !*** ./ClientApp/app/shop/shop.component.ts ***!
      \**********************************************/

    /*! exports provided: Shop */

    /***/
    function ClientAppAppShopShopComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Shop", function () {
        return Shop;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _productList_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./productList.component */
      "./ClientApp/app/shop/productList.component.ts");
      /* harmony import */


      var _cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cart.component */
      "./ClientApp/app/shop/cart.component.ts");

      var Shop = function Shop() {
        _classCallCheck(this, Shop);
      };

      Shop.ɵfac = function Shop_Factory(t) {
        return new (t || Shop)();
      };

      Shop.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Shop,
        selectors: [["the-shop"]],
        decls: 6,
        vars: 0,
        consts: [[1, "row"], [1, "col-md-9"], [1, "col-md-3"], [1, "card", "bg-light", "p2"]],
        template: function Shop_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "product-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "the-cart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_productList_component__WEBPACK_IMPORTED_MODULE_1__["ProductList"], _cart_component__WEBPACK_IMPORTED_MODULE_2__["Cart"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Shop, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "the-shop",
            templateUrl: "shop.component.html"
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./ClientApp/environments/environment.ts":
    /*!***********************************************!*\
      !*** ./ClientApp/environments/environment.ts ***!
      \***********************************************/

    /*! exports provided: environment */

    /***/
    function ClientAppEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./ClientApp/main.ts":
    /*!***************************!*\
      !*** ./ClientApp/main.ts ***!
      \***************************/

    /*! no exports provided */

    /***/
    function ClientAppMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./ClientApp/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./ClientApp/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!*********************************!*\
      !*** multi ./ClientApp/main.ts ***!
      \*********************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\Code\DutchTreat\DutchTreat\ClientApp\main.ts */
      "./ClientApp/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map
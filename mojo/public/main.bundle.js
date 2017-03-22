webpackJsonp([1,4],{

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemService = (function () {
    function ItemService(http) {
        this.http = http;
    }
    //noinspection JSUnusedGlobalSymbols
    ItemService.prototype.load = function (id) {
        // return this.http.get('http://localhost:1080/items')
        //   .map((response: Response) => {
        //     let body = response.json();
        //     return body.data || { };
        //   });
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].of(ItemService.items.find(function (item) { return item.id === id; }));
    };
    ItemService.prototype.loadAll = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].of(ItemService.items);
    };
    ItemService.items = [
        { id: 1, description: 'Pop', price: 1.23 },
        { id: 2, description: 'Soda', price: 2.23 },
        { id: 3, description: 'Muffins', price: 4.23 },
        { id: 4, description: 'Pancakes', price: 5.33 },
        { id: 5, description: 'Waffles', price: 6.42 },
        { id: 6, description: 'Potato', price: 7.52 },
        { id: 7, description: 'Hash brown', price: 8.64 },
        { id: 8, description: 'Corn', price: 9.76 },
        { id: 9, description: 'Beets', price: 7.88 },
        { id: 10, description: 'Turnips', price: 6.67 },
        { id: 11, description: 'YellowBerries', price: 5.56 },
        { id: 12, description: 'Greenberries', price: 4.45 },
        { id: 13, description: 'Blueberries', price: 3.33 },
        { id: 14, description: 'StrawBerries', price: 2.21 },
        { id: 15, description: 'Wheat Bread', price: 4.92 },
        { id: 16, description: 'Rye Bread', price: 5.83 },
        { id: 17, description: 'White Bread', price: 6.24 },
    ];
    ItemService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], ItemService);
    return ItemService;
    var _a;
}());
//# sourceMappingURL=item.service.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_item_service__ = __webpack_require__(219);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
/* unused harmony export Order */
/* unused harmony export OrderDetail */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderService = (function () {
    function OrderService(itemService) {
        this.itemService = itemService;
    }
    OrderService.prototype.load = function (id) {
        var _this = this;
        var order = OrderService.orders.find(function (o) { return o.id === id; });
        order.detail = OrderService.orderLines.filter(function (ol) { return ol.orderId === id; });
        order.summaryDetail = this.summarizeDetail(order.detail);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].forkJoin(order.summaryDetail.map(function (detail) { return _this.itemService.load(detail.itemId).do(function (item) { return detail.item = item; }); })).map(function () { return order; }).do(function (order) { return order.total = order.summaryDetail.reduce(function (a, d) { return a + (d.item ? d.item.price : 0); }, 0); });
    };
    OrderService.prototype.summarizeDetail = function (detail) {
        return detail.reduce(function (summaryDetail, detail) {
            var summarizedDetail = summaryDetail.find(function (sd) { return sd.itemId === detail.itemId; });
            if (summarizedDetail) {
                summarizedDetail.quantity += detail.quantity;
            }
            else {
                summaryDetail.push(detail);
            }
            return summaryDetail;
        }, []).filter(function (sd) { return sd.quantity > 0; });
    };
    //noinspection JSMethodCanBeStatic,JSUnusedGlobalSymbols
    OrderService.prototype.addOrderDetail = function (orderDetail) {
        //  would send this via http
        console.log('want to add a new order detail:');
        console.log(orderDetail);
    };
    OrderService.orders = [
        { id: 1, po: 'Test Order number 1', detail: [], summaryDetail: [], total: 0 }
    ];
    OrderService.orderLines = [
        { id: 1, orderId: 1, itemId: 1, quantity: 1 },
        { id: 2, orderId: 1, itemId: 2, quantity: 10 },
        { id: 3, orderId: 1, itemId: 1, quantity: -1 },
        { id: 4, orderId: 1, itemId: 3, quantity: 3 },
    ];
    OrderService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__item_item_service__["a" /* ItemService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__item_item_service__["a" /* ItemService */]) === 'function' && _a) || Object])
    ], OrderService);
    return OrderService;
    var _a;
}());
var Order = (function () {
    function Order() {
    }
    return Order;
}());
var OrderDetail = (function () {
    function OrderDetail() {
    }
    return OrderDetail;
}());
//# sourceMappingURL=order.service.js.map

/***/ }),

/***/ 375:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 375;


/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(499);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(215);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        // Get from service, also see landing page.
        this.title = "Hoppe's Country Store";
        this.searchTerm = '';
    }
    AppComponent.prototype.search = function () {
        this.router.navigate(['/search', this.searchTerm]);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(557),
            styles: [__webpack_require__(553)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart_component__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__item_item_service__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_search_results_component__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__order_order_service__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__landing_page_landing_page_component__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__todo_todo_component__ = __webpack_require__(498);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__cart_cart_component__["a" /* CartComponent */],
                __WEBPACK_IMPORTED_MODULE_10__landing_page_landing_page_component__["a" /* LandingPageComponent */],
                __WEBPACK_IMPORTED_MODULE_8__search_search_results_component__["a" /* SearchResultsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__todo_todo_component__["a" /* TodoComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                    {
                        path: 'cart',
                        component: __WEBPACK_IMPORTED_MODULE_6__cart_cart_component__["a" /* CartComponent */],
                    },
                    {
                        path: 'search/:term',
                        component: __WEBPACK_IMPORTED_MODULE_8__search_search_results_component__["a" /* SearchResultsComponent */],
                    },
                    {
                        path: 'search',
                        component: __WEBPACK_IMPORTED_MODULE_8__search_search_results_component__["a" /* SearchResultsComponent */],
                    },
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_10__landing_page_landing_page_component__["a" /* LandingPageComponent */],
                        pathMatch: 'full',
                    },
                    {
                        path: 'todo',
                        component: __WEBPACK_IMPORTED_MODULE_11__todo_todo_component__["a" /* TodoComponent */],
                    }
                ]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__item_item_service__["a" /* ItemService */],
                __WEBPACK_IMPORTED_MODULE_9__order_order_service__["a" /* OrderService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__order_order_service__ = __webpack_require__(334);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartComponent = (function () {
    function CartComponent(orderService) {
        this.orderService = orderService;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        // need to get the cart id from url.
        // no need to send a customer id.
        this.orderService.load(1).subscribe(function (cart) {
            _this.order = cart;
        });
    };
    //noinspection JSMethodCanBeStatic
    CartComponent.prototype.remove = function (item) {
        console.log('Want to remove');
        console.log(item);
    };
    CartComponent.prototype.quickAdd = function () {
        console.log("Want to add " + this.quickAddQty + " of item: " + this.quickAddItem);
    };
    CartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'cart',
            template: __webpack_require__(558),
            styles: [__webpack_require__(554)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__order_order_service__["a" /* OrderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__order_order_service__["a" /* OrderService */]) === 'function' && _a) || Object])
    ], CartComponent);
    return CartComponent;
    var _a;
}());
//# sourceMappingURL=cart.component.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingPageComponent = (function () {
    function LandingPageComponent() {
        // TODO: load from a service  also get the name for the nav bar from service.
        this.storeName = 'Excelon Development General Store';
    }
    LandingPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'landing-page',
            template: "\nWelcome to {{storeName}}\n",
        }), 
        __metadata('design:paramtypes', [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());
//# sourceMappingURL=landing-page.component.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__item_item_service__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(215);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchResultsComponent = (function () {
    function SearchResultsComponent(activatedRoute, router, itemService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.itemService = itemService;
        this.items = [];
        this.unfiltered_items = [];
        this.loading = true;
        this.itemService = itemService;
    }
    SearchResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.switchMap(function (params) {
            _this.searchTerm = params['term'];
            _this.loading = true;
            return _this.itemService.loadAll().delay(500);
        })
            .subscribe(function (items) {
            _this.unfiltered_items = items;
            _this.applySearchFilter();
        });
    };
    SearchResultsComponent.prototype.add = function (item) {
        // TODO: figure out how to send this to the cart.  probably call a cart add service.
        console.log('Want to add an item to the cart:');
        console.log(item);
        this.router.navigate(['/cart']);
    };
    // This is a pretty naive filter.... failing tests can look for differences in capitalization or two search terms.
    SearchResultsComponent.prototype.applySearchFilter = function () {
        var _this = this;
        this.loading = false;
        this.items = this.unfiltered_items.filter(function (item) { return !_this.searchTerm || item.description.includes(_this.searchTerm); });
    };
    SearchResultsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'search-result',
            template: __webpack_require__(559),
            styles: [__webpack_require__(555)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__item_item_service__["a" /* ItemService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__item_item_service__["a" /* ItemService */]) === 'function' && _c) || Object])
    ], SearchResultsComponent);
    return SearchResultsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=search-results.component.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodoComponent = (function () {
    function TodoComponent() {
    }
    TodoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'todo',
            template: "\n<pre>\n\n- check on looking at page history. (it doesn't seem to work the way I remember)\n    - done, was looking at the wrong menu item.\n\nIN PROGRESS:\n- three amigos script and artifacts for a live 3 amigos demos.\n    - \"Mockup\n\nTODO:\n- check with Matt on the terminology here:  (Acceptance)\n- a few \"acceptance tests\" (non e2e and run FAST)\n        -- break out the order sumarizer from order.service.ts\n\n\n- service virtualization (finish mock hookup)\n    -- hook up mock service somewhere.\n\n- tests in more languages\n    -- add perl or some other tests\n    -- recreate the business logic from the order.service.ts and use the same table to test both\n        -- reuse the table  to showcase this ability.\n\n\n\nTODO:\n- Review this list, some items may be done already or in progress.\n- Login page\n- Search\n  - will need a list of results of the search\n  - will need some things to filter the search on\n  - add item to cart from search results\n  - submit cart for purchase.\n  - make it remember the stuff in the cart.\n\n- hook up to a server.\n- make a checkout page.\n- make it use the cart calculator logic directly\n    - js version \n    - and java version\n    - using the same table element (fitnesse table).\n- keep working towards an easier programming model for the e2e ui testing.\n\n- Make a script table\n    - link present\n    - text present\n    \nmore fixtures todo\n    LinkPresent | textOfLink | RegExpMatchOfLink\nTextPresent | text | \nClick_ok | xpath or css to element |\nWait_for_text_present_ok | text | timeout in ms |\nClick_and_wait | xpath or css |\n\n\nwait_for_text_regexp_ok | regexp | timeoutinms | optionalid |\nget_text_by_id | css or xpath | varname | \ncheck_variable_for_regexp | regexp | variable | \n\n\nSo for example:\n\n| wait_for_text_regexp_ok | | \n| regexp | imeoutinms |\n| /matt.*david/i | 30000 |\n\n| wait_for_text_regexp_ok | | |\n| regexp | imeoutinms | optionalid |\n| / \\ $6\\.46$ | 30000 | id=card-total |\n\n| get_text_by_id |\n| css or xpath | varname |\n|  id=card-total | v2 |\n\n| check_variable_for_regexp | |\n| regexp | varname |\n /\\$6\\.46$ | v2 |\n \n \n \n\n\n\n  - load and save cart to mock service.\n  - mock out the interactions to/from server\n  - control mocks from the test\n\n- add md?\n- mobile?\n- sauce labs integration\n- icon for the cart\n\n\nNotes:\nWhat needs to be installed/downloaded:\n- nodejs\n- fitnesse jar\n- npm modules (in two places, one for test framework, one for sample app)\n\nWhat needs to be running:\n  - sample app (to be moved to hopasaurus)\n- fitnesse\nc:devSeleniumDemosFitnesse_SlimJs> java -jar fitnesse-standalone.jar -v -p 8080\n- webdriver manager\n\n\njava -Dfile.encoding=UTF-8 -Dmockserver.logLevel=INFO -jar mockserver-netty-3.10.4-jar-with-dependencies.jar -serverPort 1080 -proxyPort 1090\n\n</pre>\n",
        }), 
        __metadata('design:paramtypes', [])
    ], TodoComponent);
    return TodoComponent;
}());
//# sourceMappingURL=todo.component.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(102)();
// imports


// module
exports.push([module.i, "\r\n.header-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 100%;\r\n          flex: 1 100%;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-flow: row nowrap;\r\n          flex-flow: row nowrap;\r\n\r\n  color: white;\r\n  background-color: #1c94c4;\r\n\r\n  -webkit-box-pack: start;\r\n\r\n      -ms-flex-pack: start;\r\n\r\n          justify-content: flex-start;\r\n\r\n  -webkit-box-align: start;\r\n\r\n      -ms-flex-align: start;\r\n\r\n          align-items: flex-start;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n}\r\n\r\n.header-item {\r\n  margin: auto;\r\n  padding: 5px;\r\n  width: 25%;\r\n  -webkit-box-flex: 0;\r\n      -ms-flex: 0 1 auto;\r\n          flex: 0 1 auto;\r\n}\r\n\r\n.search-term {\r\n  width: 40%;\r\n}\r\n\r\n.search-label {\r\n  padding: 5px;\r\n}\r\n\r\n.search-results-container {\r\n  margin: auto;\r\n  width: 80%;\r\n  padding: .5em;\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n\r\nth, td {\r\n  text-align: left;\r\n  padding: 8px;\r\n}\r\n\r\ntr:nth-child(even){background-color: #f2f2f2}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(102)();
// imports


// module
exports.push([module.i, "\r\n.cart {\r\n  margin: auto;\r\n  width: 80%;\r\n}\r\n\r\n.cart-detail {\r\n  border: 1px black solid;\r\n  padding: 50px;\r\n  margin: 10px;\r\n}\r\n\r\n.cart-checkout {\r\n\r\n}\r\n\r\n.quick-add-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  width: 100%;\r\n  height: 145px;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: reverse;\r\n      -ms-flex-direction: row-reverse;\r\n          flex-direction: row-reverse;\r\n}\r\n\r\n.quick-add-box {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  width: 200px;\r\n}\r\n\r\n.order-summary-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  width: 100%;\r\n  height: 145px;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: reverse;\r\n      -ms-flex-direction: row-reverse;\r\n          flex-direction: row-reverse;\r\n  margin-top: 20px;\r\n}\r\n\r\n.order-summary-box {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  width: 200px;\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n\r\nth, td {\r\n  text-align: left;\r\n  padding: 8px;\r\n}\r\n\r\ntr:nth-child(even){background-color: #f2f2f2}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(102)();
// imports


// module
exports.push([module.i, ".search-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 100%;\r\n          flex: 1 100%;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-flow: row nowrap;\r\n          flex-flow: row nowrap;\r\n  background-color: #1c94c4;\r\n\r\n  -webkit-box-pack: start;\r\n\r\n      -ms-flex-pack: start;\r\n\r\n          justify-content: flex-start;\r\n\r\n  -webkit-box-align: start;\r\n\r\n      -ms-flex-align: start;\r\n\r\n          align-items: flex-start;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n}\r\n\r\n.search-term {\r\n  margin: auto;\r\n  padding: 5px;\r\n  width: 40%;\r\n  background-color: #00ee00;\r\n  -webkit-box-flex: 0;\r\n      -ms-flex: 0 1 auto;\r\n          flex: 0 1 auto;\r\n}\r\n\r\n.search-label {\r\n  padding: 5px;\r\n}\r\n\r\n.search-results-container {\r\n  margin: auto;\r\n  width: 80%;\r\n  padding: .5em;\r\n}\r\n\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n\r\nth, td {\r\n  text-align: left;\r\n  padding: 8px;\r\n}\r\n\r\ntr:nth-child(even){background-color: #f2f2f2}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 557:
/***/ (function(module, exports) {

module.exports = "<div class=\"app\">\n  <div class=\"header-container\">\n    <div class=\"header-title header-item\">\n      {{title}}\n    </div>\n    <div class=\"nav-buttons header-item\">\n      <button routerLink=\"/cart\">Cart</button>\n      <button routerLink=\"/todo\">Todo</button>\n    </div>\n    <div class=\"search-term header-item\">\n      <label for=\"searchInput\" class=\"search-label\">Search</label>\n      <input id=\"searchInput\" type=\"text\" (keyup.enter)=\"search()\"  [(ngModel)]=\"searchTerm\"/>\n      <button id=\"searchButton\" (click)=\"search()\">Search</button>\n    </div>\n  </div>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 558:
/***/ (function(module, exports) {

module.exports = "<div class=\"cart\">\r\n  <div class=\"quick-add-container\">\r\n    <div class=\"quick-add-box\">\r\n      Quick add:\r\n      <label>\r\n        Item:\r\n        <input id=\"quick-add-item\" [(ngModel)]=\"quickAddItem\" (keyup.enter)=\"quickAdd()\"/>\r\n      </label>\r\n      <label>\r\n        Quantity:\r\n        <input id=\"quick-add-qty\" [(ngModel)]=\"quickAddQty\" (keyup.enter)=\"quickAdd()\"/>\r\n      </label>\r\n      <button (click)=\"quickAdd()\">Add item</button>\r\n\r\n    </div>\r\n  </div>\r\n  <table>\r\n    <tr>\r\n      <th>ID</th>\r\n      <th>Description</th>\r\n      <th>Price</th>\r\n      <th>Quantity</th>\r\n      <th>Remove</th>\r\n    </tr>\r\n    <tr class=\"cart-detail\" *ngFor=\"let order of order.summaryDetail\">\r\n      <td class=\"cart-detail-ids\">{{order.id}} {{order.itemId}}</td>\r\n      <td class=\"cart-detail-description\">{{order.item?.description}}</td>\r\n      <td class=\"cart-detail-price\">{{order.item?.price}}</td>\r\n      <td class=\"cart-detail-quantity\"><input [(ngModel)]=\"order.quantity\" title=\"quantity\"></td>\r\n      <td><button (click)=\"remove(item)\">Remove</button></td>\r\n    </tr>\r\n  </table>\r\n<div class=\"order-summary-container\">\r\n  <div class=\"order-summary-box\">\r\n    <div class=\"cart-checkout\">\r\n      <div>\r\n        Cart total  <span id=\"cart-total\">${{order.total}}</span>\r\n      </div>\r\n      <div>\r\n        <button (click)=\"checkout()\">Check out</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 559:
/***/ (function(module, exports) {

module.exports = "<div class=\"search-results-container\">\r\n  <div *ngIf=\"loading\">\r\n    Searching...\r\n  </div>\r\n  <div *ngIf=\"!loading\">\r\n    <div *ngIf=\"searchTerm\">\r\n      Displaying results matching: \"{{searchTerm}}\"\r\n    </div>\r\n    <table>\r\n      <tr>\r\n        <th>Description</th>\r\n        <th>Price</th>\r\n        <th>Add to cart</th>\r\n      </tr>\r\n      <tr class=\"search-result-row\" *ngFor=\"let item of items\">\r\n        <td class=\"search-result-description\">{{item.description}}</td>\r\n        <td class=\"search-result-price\">{{item.price}}</td>\r\n        <td><button (click)=\"add(item)\">Add to cart</button></td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 826:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(376);


/***/ })

},[826]);
//# sourceMappingURL=main.bundle.js.map
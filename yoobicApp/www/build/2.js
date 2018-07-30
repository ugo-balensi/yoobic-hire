webpackJsonp([2],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissionsPageModule", function() { return MissionsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__missions__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MissionsPageModule = /** @class */ (function () {
    function MissionsPageModule() {
    }
    MissionsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__missions__["a" /* MissionsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__missions__["a" /* MissionsPage */]),
            ],
        })
    ], MissionsPageModule);
    return MissionsPageModule;
}());

//# sourceMappingURL=missions.module.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MissionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_details__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MissionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MissionsPage = /** @class */ (function () {
    function MissionsPage(navCtrl, navParams, dataService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
    }
    MissionsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.dataService.getRandomItems().subscribe(function (data) {
            _this.items = data;
        });
    };
    MissionsPage.prototype.goToDetails = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__details_details__["a" /* DetailsPage */], {
            item: item
        });
    };
    MissionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-missions',template:/*ion-inline-start:"/mnt/d/Programs/wamp64/www/yoobicApp/src/pages/missions/missions.html"*/'<!--\n  Generated template for the MissionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Missions</ion-title>\n    <ion-buttons start>\n      <button ion-button menuToggle icon-only>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-list>\n    <ion-item class="item-card" *ngFor="let item of items">\n      <ion-card>\n        <ion-card-header>\n          <div style="display:flex;">\n            <ion-avatar item-start>\n              <img class="avatar" src="{{item.avatar}}">\n            </ion-avatar>\n            <div style="padding-top:8px;">\n              <h3>\n                <b>{{item.first_name}} {{item.last_name}}</b>\n              </h3>\n              <p>{{item.address}}</p>\n            </div>\n          </div>\n        </ion-card-header>\n\n        <ion-card-content text-wrap>\n          <img src="assets/imgs/image.png" />\n          <p style="padding: 8px 0px;">\n            <b>Posted : </b>{{item.date}}</p>\n          <div class="ellypsified">\n            <p>{{item.content}}</p>\n          </div>\n        </ion-card-content>\n\n        <ion-row>\n          <ion-col>\n          </ion-col>\n          <ion-col>\n            <button ion-button (click)="goToDetails(item)">Read more</button>\n          </ion-col>\n          <ion-col center text-center>\n          </ion-col>\n        </ion-row>\n\n      </ion-card>\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>'/*ion-inline-end:"/mnt/d/Programs/wamp64/www/yoobicApp/src/pages/missions/missions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */]])
    ], MissionsPage);
    return MissionsPage;
}());

//# sourceMappingURL=missions.js.map

/***/ })

});
//# sourceMappingURL=2.js.map
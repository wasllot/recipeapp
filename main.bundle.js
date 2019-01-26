webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_about_about_component__ = __webpack_require__("./src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_nueva_receta_nueva_receta_component__ = __webpack_require__("./src/app/components/nueva-receta/nueva-receta.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_details_details_component__ = __webpack_require__("./src/app/components/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_edit_edit_component__ = __webpack_require__("./src/app/components/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_admin_admin_component__ = __webpack_require__("./src/app/components/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_not_found_not_found_component__ = __webpack_require__("./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_search_search_component__ = __webpack_require__("./src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__components_about_about_component__["a" /* AboutComponent */] },
    { path: 'nueva', component: __WEBPACK_IMPORTED_MODULE_4__components_nueva_receta_nueva_receta_component__["a" /* NuevaRecetaComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_7__components_admin_admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'details/:id', component: __WEBPACK_IMPORTED_MODULE_5__components_details_details_component__["a" /* DetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_6__components_edit_edit_component__["a" /* EditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'search/:keyword', component: __WEBPACK_IMPORTED_MODULE_10__components_search_search_component__["a" /* SearchComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_9__components_not_found_not_found_component__["a" /* NotFoundComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_nueva_receta_nueva_receta_component__ = __webpack_require__("./src/app/components/nueva-receta/nueva-receta.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_admin_admin_component__ = __webpack_require__("./src/app/components/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_about_about_component__ = __webpack_require__("./src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_not_found_not_found_component__ = __webpack_require__("./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_details_details_component__ = __webpack_require__("./src/app/components/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_edit_edit_component__ = __webpack_require__("./src/app/components/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_search_search_component__ = __webpack_require__("./src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_storage__ = __webpack_require__("./node_modules/angularfire2/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_receta_service__ = __webpack_require__("./src/app/services/receta.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_uploadFile_service__ = __webpack_require__("./src/app/services/uploadFile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_nueva_receta_nueva_receta_component__["a" /* NuevaRecetaComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_details_details_component__["a" /* DetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_edit_edit_component__["a" /* EditComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_search_search_component__["a" /* SearchComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_22__environments_environment__["a" /* environment */].firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_storage__["a" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_19__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_20__services_receta_service__["a" /* RecetaService */], __WEBPACK_IMPORTED_MODULE_21__services_uploadFile_service__["a" /* UploadFileService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>About component</p>"

/***/ }),

/***/ "./src/app/components/about/about.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/components/about/about.component.html"),
            styles: [__webpack_require__("./src/app/components/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6 mx-auto mt-3\">\n    <h1>ADMIN</h1>\n    <p>Hello this is your dashboard</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/admin/admin.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin',
            template: __webpack_require__("./src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__("./src/app/components/admin/admin.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/components/details/details.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container mb-2\">\n\n  <div class=\"d-flex align-items-center justify-content-center py-4\">\n\n    <div class=\"btn-group pull-right mt-4 flex-inline \" *ngIf=\"idUsuarioLogado == receta.userId\">\n\n      <a routerLink=\"/edit/{{receta.id}}\" class=\"btn btn-dark mx-2\">Editar</a>\n\n      <a  class=\"btn btn-danger mx-2\" (click)=\"onClickDelete()\">Borrar</a>\n\n    </div>\n\n  </div>\n\n  <div class=\"card card-cascade wider reverse\">\n\n    <div class=\"view view-cascade overlay\">\n\n      <img class=\"card-img-top\" src=\"{{receta.url}}\" alt=\"Card image cap\">\n\n      <a href=\"#!\">\n\n        <div class=\"mask rgba-white-slight\"></div>\n\n      </a>\n\n    </div>\n\n    <div class=\"card-body card-body-cascade text-center\">\n\n      <h4 class=\"card-title\"><strong>{{receta.titulo}}</strong></h4>\n\n      <h6 class=\"font-weight-bold indigo-text py-2\">{{receta.fechaPublicacion | date: 'dd-MMM'}}</h6>\n\n      <p class=\"card-text\" style=\"white-space:pre-wrap;\">{{receta.descripcion}}\n      </p>\n\n      <hr>\n\n      <div class=\"container\">\n\n        <h2 class=\"h1-responsive text-center\">\n          Ingredients\n        </h2>\n\n        <p class=\"card-text text-left\" style=\"white-space:pre-wrap;\">{{receta.ingredientes}}</p>\n\n      </div>\n\n      <hr>    \n\n      <div class=\"container\">\n\n        <h2 class=\"h1-responsive text-center\">\n          Preparation\n        </h2>\n\n        <p class=\"card-text text-justify\" style=\"white-space:pre-wrap;\">{{receta.preparacion}}</p>\n\n      </div>\n\n      <hr>\n\n      <div class=\"container\">\n\n        <span class=\"badge badge-pil py-2\" *ngFor=\"let item of receta.tipo\">{{item}}</span>\n\n      </div>\n\n    </div>\n\n    <div class=\"div mt-2 mb-4 text-center\">\n\n      <a href=\"/\"><i class=\"fa fa-chevron-left fa-2x\"></i></a>   \n\n    </div>\n      \n    \n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/details/details.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/details/details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_receta_service__ = __webpack_require__("./src/app/services/receta.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_uploadFile_service__ = __webpack_require__("./src/app/services/uploadFile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(recetaService, uploadFileService, authService, router, route) {
        this.recetaService = recetaService;
        this.uploadFileService = uploadFileService;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.receta = {
            id: '',
            titulo: '',
            descripcion: '',
            preparacion: '',
            ingredientes: '',
            tipo: '',
            fechaPublicacion: '',
            userId: '',
            userNombre: ''
        };
    }
    DetailsComponent.prototype.ngOnInit = function () {
        this.onComprobarUserLogin();
        this.getDetallesReceta();
    };
    DetailsComponent.prototype.onComprobarUserLogin = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (user) {
            if (user) {
                _this.idUsuarioLogado = user.uid;
            }
        });
    };
    DetailsComponent.prototype.getDetallesReceta = function () {
        var _this = this;
        this.idReceta = this.route.snapshot.params['id'];
        this.recetaService.getOneReceta(this.idReceta).subscribe(function (receta) { return _this.receta = receta; });
    };
    DetailsComponent.prototype.onClickDelete = function () {
        if (confirm('Are you sure?')) {
            this.recetaService.deleteReceta(this.receta);
            this.uploadFileService.deleteFileStorage(this.receta.name);
            this.router.navigate(['/']);
        }
    };
    DetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-details',
            template: __webpack_require__("./src/app/components/details/details.component.html"),
            styles: [__webpack_require__("./src/app/components/details/details.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_receta_service__["a" /* RecetaService */],
            __WEBPACK_IMPORTED_MODULE_3__services_uploadFile_service__["a" /* UploadFileService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"row\">\n\n    <div class=\"col-md-10 mx-auto mt-2\">\n\n      <div class=\"card\">\n\n          <div class=\"card-header\">Edit recipe</div>\n\n          <div class=\"card-body\">\n\n            <form #formModificar=\"ngForm\" (ngSubmit)=\"onModificarReceta(formModificar)\">\n\n              <div class=\"form-group shadow-textarea\">\n\n                <label for=\"titulo\">Title</label>\n\n                <input type=\"text\" class=\"form-control z-depth-1\" id=\"titulo\" name=\"titulo\"\n                [(ngModel)]=\"receta.titulo\">\n\n              </div>\n\n              <div class=\"form-group shadow-textarea\">\n\n                <label for=\"descripcion\">Description</label>\n\n                <textarea type=\"text\" class=\"form-control z-depth-1\" id=\"descripcion\" rows=\"8\" name=\"descripcion\"\n                [(ngModel)]=\"receta.descripcion\"></textarea>\n\n              </div>\n\n              <div class=\"form-group shadow-textarea\">\n\n                <label for=\"ingredientes\">Ingredients</label>\n\n                <textarea type=\"text\" class=\"form-control z-depth-1\" id=\"ingredientes\" rows=\"8\" name=\"ingredientes\"\n                [(ngModel)]=\"receta.ingredientes\"></textarea>\n\n              </div>\n\n              <div class=\"form-group shadow-textarea\">\n\n                <label for=\"preparacion\">Preparation</label>\n\n                <textarea type=\"text\" class=\"form-control z-depth-1\" id=\"preparacion\" rows=\"8\" name=\"preparacion\"\n                [(ngModel)]=\"receta.preparacion\"></textarea>\n\n              </div>\n\n              <div class=\"form-group shadow-textarea\">\n\n                <label for=\"tipo\">Type</label>\n\n                <span class=\"badge badge-pill badge-dark\" *ngFor=\"let item of receta.tipo\">{{item}}</span>\n\n                <select multiple=\"\" name=\"tipo\" id=\"tipo\" class=\"form-control z-depth-1\"\n                [(ngModel)]=\"receta.tipo\">\n                  <option>Breakfast</option>\n                  <option>Dinner</option>\n                  <option>Dessert</option>\n                  <option>Lunch</option>\n                  <option>Snack</option>\n                  <option>Wedding</option>\n                  <option>Dressings</option>\n                  <option>Drinks</option>\n                  <option>Healthy</option>\n                </select>\n\n              </div>\n\n              <div class=\"input-group py-2\">\n\n                <div class=\"custom-file\">\n\n                  <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile01\" aria-describedby=\"inputGroupFileAddon01\" value=\"Upload an image\" (change)=\"upload($event)\" accept=\".png, .jpg, .jpeg\">\n\n                  <label class=\"custom-file-label\" for=\"inputGroupFile01\">Choose file</label>\n\n                </div>\n\n              </div>\n\n              <div class=\"container py-2 text-center\" *ngIf=\"loading\">\n\n                <img src=\"../../../assets/loading.gif\" alt=\"\">\n\n              </div>            \n\n              <div class=\"container py-2 text-center\" *ngIf=\"receta.url && !loading\">\n\n                <img src=\"{{receta.url}}\" alt=\"\" class=\"img-fluid\">\n\n              </div>              \n\n                <div *ngIf=\"url && !loading\" class=\"alert alert-info py-2\" role=\"alert\">\n                  \n                  File uploaded: <a [href]=\"{{receta.url}}\">{{receta.url}}</a>\n\n                </div>\n\n                <br><br>\n\n              <input type=\"submit\" value=\"Edit\" class=\"btn btn-primary btn-block\">\n\n            </form>\n         </div>\n\n         <div class=\"container py-2 text-center\">\n\n            <a href=\"/details/{{receta.id}}\"><i class=\"fa fa-chevron-left fa-2x\"></i></a>   \n\n         </div>\n\n      </div>\n\n    </div>\n    \n  </div>\n"

/***/ }),

/***/ "./src/app/components/edit/edit.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_receta_service__ = __webpack_require__("./src/app/services/receta.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("./node_modules/firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_storage__ = __webpack_require__("./node_modules/firebase/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditComponent = /** @class */ (function () {
    function EditComponent(route, router, recetaService) {
        this.route = route;
        this.router = router;
        this.recetaService = recetaService;
        this.receta = {
            id: '',
            titulo: '',
            descripcion: '',
            ingredientes: '',
            preparacion: '',
            tipo: '',
            fechaPublicacion: '',
            userId: '',
            userNombre: ''
        };
        this.progress = { percentage: 0 };
        this.basePath = '/recetas';
    }
    EditComponent.prototype.ngOnInit = function () {
        this.getDetallesReceta();
        this.loading = false;
    };
    EditComponent.prototype.getDetallesReceta = function () {
        var _this = this;
        this.idReceta = this.route.snapshot.params['id'];
        this.recetaService.getOneReceta(this.idReceta).subscribe(function (receta) { return _this.receta = receta; });
    };
    EditComponent.prototype.upload = function (event) {
        var _this = this;
        var file = event.target.files.item(0);
        if (event.target.files.item(0) == null) {
            this.selectedFiles = undefined;
        }
        else {
            this.loading = true;
            if (file.type.match('image.*')) {
                this.selectedFiles = event.target.files;
                var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["storage"]().ref();
                var uploadTask_1 = storageRef.child(this.basePath + "/" + file.name).put(file);
                uploadTask_1.on(__WEBPACK_IMPORTED_MODULE_3_firebase_app__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
                    // in progress
                    var snap = snapshot;
                    _this.progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
                }, function (error) {
                    // fail
                    console.log(error);
                    _this.loading = false;
                }, function () {
                    // success
                    uploadTask_1.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                        console.log('File available at', downloadURL);
                        // this.url = downloadURL;
                        // this.fileName = file.name;
                        _this.receta.url = downloadURL;
                        _this.receta.name = file.name;
                        _this.loading = false;
                        // this.addNewReceta(fileUpload);
                    });
                });
            }
            else {
                alert('invalid format!');
                this.loading = false;
            }
        }
    };
    EditComponent.prototype.onModificarReceta = function (_a) {
        var value = _a.value;
        value.id = this.idReceta;
        value.url = this.receta.url;
        value.name = this.receta.name;
        this.recetaService.updateReceta(value);
        this.router.navigate(['/details/' + this.idReceta]);
    };
    EditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit',
            template: __webpack_require__("./src/app/components/edit/edit.component.html"),
            styles: [__webpack_require__("./src/app/components/edit/edit.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_receta_service__["a" /* RecetaService */]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-4\">\n\n  <div class=\"row\">\n\n    <div class=\"col-12  py-0 featcard\">\n\n       <div id=\"featured\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\n\n       <div class=\"carousel-inner\">\n\n        <div class=\"carousel-item active\">        \n\n          <div class=\"card bg-dark text-white\">\n\n            <img class=\"card-img img-fluid\" src=\"https://images.tenplay.com.au/~/media/TV%20Shows/MasterChef%20Media%20Lib/Galleries%20Season%208/Food%20Of%20The%20Gods%20Heston%20Pop%20Up/MC8_Ep_43_8072.jpg\" alt=\"\">\n\n            <div class=\"card-img-overlay d-flex linkfeat\">\n\n              <a href=\"http://makro.id/review-gsp-amerika-ingin-perdagangan-saling-menguntungkan\" class=\"align-self-end\">\n\n                <h4 class=\"card-title\">Kitchen lover? </h4>\n\n              </a>\n\n            </div>\n\n          </div>\n\n         </div>\n\n        <div class=\"carousel-item\">       \n\n          <div class=\"card bg-dark text-white\">\n\n              <img class=\"card-img img-fluid\" src=\"https://images.tenplay.com.au/~/media/TV%20Shows/MasterChef%20Media%20Lib/Galleries%20Season%208/Food%20Of%20The%20Gods%20Heston%20Pop%20Up/MC8_Ep_43_8178.jpg\">\n\n                <a href=\"http://makro.id/dpr-setujui-penambahan-anggaran-bp-batam-rp565-miliar\" class=\"align-self-end\">\n\n                  <h4 class=\"card-title\">Upload new recipes!</h4>\n\n                </a>\n\n              </div>\n\n            </div>\n\n          </div>\n\n        <div class=\"carousel-item\">       \n\n          <div class=\"card bg-dark text-white\">\n\n              <img class=\"card-img img-fluid\" src=\"http://home.bt.com/images/inspired-by-masterchef-10-tips-for-making-really-great-sauces-136426259673902601-180405074019.jpg\" alt=\"\">\n\n              <div class=\"card-img-overlay d-flex linkfeat\">\n\n                <a href=\"http://makro.id/btn-targetkan-seribu-nasabah-valas-di-batam\" class=\"align-self-end\">\n\n                  <h4 class=\"card-title\">I think you can try something like this</h4>\n\n                </a>\n\n              </div>\n\n            </div>\n\n          </div>\n\n        <div class=\"carousel-item\">       \n\n          <div class=\"card bg-dark text-white\">\n\n              <img class=\"card-img img-fluid\" src=\"https://www.orkneyfoodanddrink.com/assets/images/enlargeable/news/masterchef-2014-141.jpg\" alt=\"\">\n\n              <div class=\"card-img-overlay d-flex linkfeat\">\n\n                <a href=\"http://makro.id/sistem-oss-resmi-diluncurkan\" class=\"align-self-end\">\n\n                  <h4 class=\"card-title\">Oh my godness!</h4>\n\n                </a>\n\n              </div>\n\n            </div>\n\n          </div>\n\n        <div class=\"carousel-item\">       \n\n          <div class=\"card bg-dark text-white\">\n\n              <img class=\"card-img img-fluid\" src=\"https://img.taste.com.au/sCrAlgRT/taste/2016/11/fork-tender-pork-leg-roast-with-caramelised-plum-vinaigrette-106008-1.jpeg\" alt=\"\">\n\n              <div class=\"card-img-overlay d-flex linkfeat\">\n\n                <a href=\"http://makro.id/grab-gandeng-samsung-telkomsel-dan-erafone\" class=\"align-self-end\">\n\n                  <h4 class=\"card-title\">Let us know how expert you are at kitchen</h4>\n\n                </a>\n\n              </div>\n\n            </div>\n\n          </div>\n\n      </div>\n\n  </div>\n\n</div>\n\n<br><br>\n\n<div class=\"row mb-2\">\n\n  <div class=\"container text-center\">\n\n    <div class=\"py-4\">\n\n      <h3 class=\"display-4\">Upload a recipe</h3>\n\n    </div>\n\n    <img src=\"../../../assets/load4.gif\" alt=\"\" *ngIf=\"loading\">\n\n      <div class=\"gal\">\n\n        <div *ngFor=\"let receta of recetas\">          \n\n          <div>\n\n            <a href=\"/details/{{receta.id}}\" class=\"link\">\n\n              <div class=\"view overlay zoom\">\n\n                <img src=\"{{receta.url}}\" alt=\"{{receta.name}}\">\n\n                  <div class=\"mask d-flex flex-column flex-center\">\n\n                    <h5 class=\"white-text\">{{receta.titulo}}</h5>\n\n                    <span class=\"badge badge-pill badge-success\" *ngFor=\"let item of receta.tipo\">{{item}}</span>\n\n                  </div> \n\n               </div>\n\n             </a> \n\n          </div>\n\n        </div>\n\n      </div>\n\n  </div>\n  \n</div>\n\n<script>\n  $(document).ready(function(){\n      $(\".linkfeat\").hover(\n        function () {\n            $(\".textfeat\").show(500);\n        },\n        function () {\n            $(\".textfeat\").hide(500);\n        }\n    );\n});\n\n</script>"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = "/*.row{\n    .col-md-6{\n        div.card-body{\n            min-height: 325px;\n        }\n    }\n}*/\nstrong span {\n  margin-right: 5px; }\na, a:focus, a:hover {\n  text-decoration: none;\n  color: inherit; }\na:hover, .btn {\n  outline: none !important; }\n/*ROUNDED CORNER*/\n* {\n  border-radius: 0 !important; }\n/*CATEGORIES BADGE*/\n.badge {\n  font-weight: 600;\n  font-size: 13px;\n  color: white;\n  background-color: #289dcc; }\n/*FEATURED*/\n.mg-2, .mg-4 {\n  margin-left: -20px; }\n.linkfeat {\n  background: rgba(76, 76, 76, 0);\n  background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(76, 76, 76, 0)), color-stop(49%, rgba(48, 48, 48, 0)), color-stop(100%, #131313));\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(76, 76, 76, 0)), color-stop(49%, rgba(48, 48, 48, 0)), to(#131313));\n  background: linear-gradient(to bottom, rgba(76, 76, 76, 0) 0%, rgba(48, 48, 48, 0) 49%, #131313 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4c4c4c', endColorstr='#131313', GradientType=0 ); }\n/*Masonry*/\n.gal {\n  -ms-column-count: 3;\n  -webkit-column-count: 3;\n  /* Chrome, Safari, Opera */\n  /* Firefox */\n  column-count: 3; }\n.gal img {\n  width: 100%;\n  padding: 7px 0; }\n@media (max-width: 500px) {\n  .gal {\n    -ms-column-count: 1;\n    -webkit-column-count: 1;\n    /* Chrome, Safari, Opera */\n    /* Firefox */\n    column-count: 1; } }\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_receta_service__ = __webpack_require__("./src/app/services/receta.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(recetaService, route) {
        this.recetaService = recetaService;
        this.route = route;
        this.startAt = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.endAt = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.loading = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.todasRecetas();
    };
    HomeComponent.prototype.todasRecetas = function () {
        var _this = this;
        this.recetaService.getAllRecetas().subscribe(function (recetas) { return _this.recetas = recetas; });
        this.loading = false;
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_receta_service__["a" /* RecetaService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-md-6 mx-auto mt-3\">\n\n    <div class=\"card\">\n\n      <div class=\"card-header\">\n\n        Login Google\n\n      </div>\n\n      <div class=\"card-body d-flex justify-content-around\">\n\n        <button class=\"btn btn-lg btn-google\" (click)=\"onClickGoogleLogin()\"><i class=\"fa fa-google-plus\"></i>Google</button>\n\n      </div>\n\n    </div>\n\n  </div>\n  \n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = ".btn-google {\n  background: #dd4b39;\n  color: #fff;\n  width: 33%; }\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onClickGoogleLogin = function () {
        var _this = this;
        this.authService.loginGoogle()
            .then(function (res) {
            _this.router.navigate(['/admin']);
        }).catch(function (err) { return console.log(err.message); });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n\n  <a class=\"navbar-brand\">Recipe app</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\n    <span class=\"navbar-toggler-icon\"></span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n\n    <ul class=\"navbar-nav mr-auto\">\n\n      <li class=\"nav-item active\">\n\n        <a class=\"nav-link\" routerLink=\"/\">Home <span class=\"sr-only\">(current)</span></a>\n\n      </li>\n\n      <li class=\"nav-item\" *ngIf=\"isLogin\">\n\n        <a class=\"nav-link\" routerLink=\"/nueva\">New recipe</a>\n\n      </li>\n\n    </ul>\n\n    <ul class=\"navbar-nav ml-auto\">\n\n      <li class=\"nav-item active\" *ngIf=\"!isLogin\">\n\n        <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n\n      </li>\n\n      <li class=\"nav-item\" *ngIf=\"isLogin\">\n\n        <img src=\"{{userPicture}}\" class=\"rounded-circle\">\n\n      </li>\n\n      <li class=\"nav-item\" *ngIf=\"isLogin\">\n\n         <span class=\"nav-link\">{{userNombre}}</span>\n\n      </li>\n\n      <li class=\"nav-item\" *ngIf=\"isLogin\">\n\n        <a class=\"nav-link\" href=\"#\" (click)=\"onLogout()\">Log out</a>\n\n      </li>\n\n    </ul>\n    \n  </div>\n\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports) {

module.exports = "nav li img {\n  width: 40px;\n  height: 40px; }\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.onComprobarUserLogin();
    };
    NavbarComponent.prototype.onComprobarUserLogin = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.isLogin = true;
                _this.userNombre = auth.displayName;
                _this.userEmail = auth.email;
                _this.userPicture = auth.photoURL;
                _this.userId = auth.uid;
            }
            else {
                _this.isLogin = false;
            }
        });
    };
    NavbarComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__("./src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__("./src/app/components/not-found/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/nueva-receta/nueva-receta.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"row\">\n\n    <div class=\"col-md-10 mx-auto mt-2\">\n\n      <div class=\"card\">\n\n        <div class=\"card-header\">New recipe</div>\n\n        <div class=\"card-body\">\n\n          <form #formGuardar=\"ngForm\" (ngSubmit)=\"onGuardarReceta(formGuardar)\">\n\n            <div class=\"form-group shadow-textarea\">\n\n              <label for=\"titulo\">Title</label>\n\n              <input type=\"text\" class=\"form-control z-depth-1\" id=\"titulo\" name=\"titulo\"\n              [(ngModel)]=\"receta.titulo\">\n\n            </div>\n\n            <div class=\"form-group shadow-textarea\">\n\n              <label for=\"descripcion\">Description</label>\n\n              <textarea type=\"text\" class=\"form-control z-depth-1\" id=\"descripcion\" rows=\"8\" name=\"descripcion\"\n              [(ngModel)]=\"receta.descripcion\"></textarea>\n\n            </div>\n\n            <div class=\"form-group shadow-textarea\">\n\n              <label for=\"ingredientes\">Ingredients</label>\n\n              <textarea type=\"text\" class=\"form-control z-depth-1\" id=\"ingredientes\" rows=\"8\" name=\"ingredientes\"\n              [(ngModel)]=\"receta.ingredientes\"></textarea>\n\n            </div>\n\n            <div class=\"form-group shadow-textarea\">\n\n              <label for=\"preparacion\">Preparation</label>\n\n              <textarea type=\"text\" class=\"form-control z-depth-1\" id=\"preparacion\" rows=\"8\" name=\"preparacion\"\n              [(ngModel)]=\"receta.preparacion\"></textarea>\n\n            </div>\n\n            <div class=\"form-group shadow-textarea\">\n\n              <label for=\"tipo\">Type</label>\n\n              <span class=\"badge badge-pill badge-dark\" *ngFor=\"let item of receta.tipo\">{{item}}</span>\n\n              <select multiple=\"\" name=\"tipo\" id=\"tipo\" class=\"form-control z-depth-1\"\n              [(ngModel)]=\"receta.tipo\">\n                <option>Breakfast</option>\n                <option>Dinner</option>\n                <option>Dessert</option>\n                <option>Lunch</option>\n                <option>Snack</option>\n                <option>Wedding</option>\n                <option>Dressings</option>\n                <option>Drinks</option>\n                <option>Healthy</option>\n              </select>\n\n            </div>\n\n            <div class=\"input-group py-2\">\n\n              <div class=\"custom-file\">\n\n                <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile01\" aria-describedby=\"inputGroupFileAddon01\" value=\"Upload an image\" (change)=\"upload($event)\" accept=\".png, .jpg, .jpeg\">\n\n                <label class=\"custom-file-label\" for=\"inputGroupFile01\">Choose file</label>\n\n              </div>\n\n            </div>\n\n            <div class=\"container py-2 text-center\" *ngIf=\"loading\">\n\n              <img src=\"../../../assets/loading.gif\" alt=\"\">\n\n            </div>            \n\n            <div class=\"container py-2 text-center\" *ngIf=\"url && !loading\">\n\n              <img src=\"{{url}}\" alt=\"\" class=\"img-fluid\">\n\n            </div>              \n\n            <br><br>\n\n            <input type=\"submit\" value=\"Upload recipe\" class=\"btn btn-primary btn-block\">\n\n          </form>\n\n        </div>\n\n        <div class=\"container py-2 text-center\">\n\n          <a href=\"/\"><i class=\"fa fa-chevron-left fa-2x\"></i></a>   \n\n        </div>\n\n      </div>\n      \n    </div>\n\n  </div>\n"

/***/ }),

/***/ "./src/app/components/nueva-receta/nueva-receta.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/nueva-receta/nueva-receta.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevaRecetaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_receta_service__ = __webpack_require__("./src/app/services/receta.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__("./node_modules/firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_storage__ = __webpack_require__("./node_modules/firebase/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NuevaRecetaComponent = /** @class */ (function () {
    function NuevaRecetaComponent(authService, recetaService, router) {
        this.authService = authService;
        this.recetaService = recetaService;
        this.router = router;
        this.receta = {
            id: '',
            titulo: '',
            descripcion: '',
            preparacion: '',
            ingredientes: '',
            tipo: '',
            fechaPublicacion: '',
            userId: '',
            userNombre: '',
            key: '',
            name: '',
            url: '',
        };
        this.url = 'http://ilsole.com.ar/wp-content/uploads/2016/07/Icon-Recipe.png';
        this.fileName = 'default';
        this.progress = { percentage: 0 };
        this.basePath = '/recetas';
    }
    NuevaRecetaComponent.prototype.ngOnInit = function () {
        this.loading = false;
    };
    NuevaRecetaComponent.prototype.onGuardarReceta = function (_a) {
        var _this = this;
        var value = _a.value;
        value.fechaPublicacion = (new Date()).getTime();
        this.authService.getAuth().subscribe(function (user) {
            value.userId = user.uid;
            value.userNombre = user.displayName;
            value.url = _this.url;
            value.name = _this.fileName;
            _this.recetaService.addNewReceta(value);
        });
        this.router.navigate(['/']);
    };
    NuevaRecetaComponent.prototype.upload = function (event) {
        var _this = this;
        var file = event.target.files.item(0);
        if (event.target.files.item(0) == null) {
            this.selectedFiles = undefined;
        }
        else {
            this.loading = true;
            if (file.type.match('image.*')) {
                this.selectedFiles = event.target.files;
                var storageRef = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["storage"]().ref();
                var uploadTask_1 = storageRef.child(this.basePath + "/" + file.name).put(file);
                uploadTask_1.on(__WEBPACK_IMPORTED_MODULE_4_firebase_app__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
                    // in progress
                    var snap = snapshot;
                    _this.progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
                }, function (error) {
                    // fail
                    console.log(error);
                    _this.loading = false;
                }, function () {
                    // success
                    uploadTask_1.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                        console.log('File available at', downloadURL);
                        _this.url = downloadURL;
                        _this.fileName = file.name;
                        _this.loading = false;
                        // this.addNewReceta(fileUpload);
                    });
                });
            }
            else {
                alert('invalid format!');
                this.loading = false;
            }
        }
    };
    NuevaRecetaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nueva-receta',
            template: __webpack_require__("./src/app/components/nueva-receta/nueva-receta.component.html"),
            styles: [__webpack_require__("./src/app/components/nueva-receta/nueva-receta.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_receta_service__["a" /* RecetaService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], NuevaRecetaComponent);
    return NuevaRecetaComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h2 class=\"h1-responsive\">\n\t\tResults\n\t</h2>\n\t<hr>\n</div>\n\n<div class=\"container\">\n\t\n\t<div class=\"d-flex justify-content-center align-items-center h-100\">\n\n\t\t<img src=\"../../../assets/load4.gif\" alt=\"\" *ngIf=\"loading\">\n\t\n\t\n\t<div *ngIf=\"recetas_filtered.length>0 && !loading\">\n\t\t<div class=\"gal\">\n\t\t\t<div *ngFor=\"let receta of recetas_filtered\">\n\t\t\t    <a href=\"/details/{{receta.id}}\" class=\"link\">\n\t\t            <div class=\"view overlay\">\n\t\t              <img src=\"{{receta.url}}\" alt=\"{{receta.name}}\">\n\t\t                <div class=\"mask flex-center rgba-stylish-light\">\n\t\t                  <p class=\"white-text\">{{receta.titulo}}</p>\n\n\t\t                </div> \n\t\t             </div>\n\t\t        </a>\n\t       \n\t            <div class=\"mb-1 text-muted\">\n\t              <span class=\"badge badge-pill badge-success\">{{receta.fechaPublicacion | date: 'dd-MMM'}}</span>\n\t            </div>\n\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t</div>\n\n\t<div *ngIf=\"!recetas_filtered\">\n\n\t\t<h2 class=\"h1-responsive\">\n\t\t\tNot found\n\t\t</h2>\n\t\t\n\t</div>\n\t<!-- <div *ngIf=\"!loading\">\n\t\t<div class=\"gal\">\n\t\t\t<div *ngFor=\"let receta of recetas\">\n\t\t\t    <a href=\"/details/{{receta.id}}\" class=\"link\">\n\t\t            <div class=\"view overlay\">\n\t\t              <img src=\"{{receta.url}}\" alt=\"{{receta.name}}\">\n\t\t                <div class=\"mask flex-center rgba-stylish-light\">\n\t\t                  <p class=\"white-text\">{{receta.titulo}}</p>\n\n\t\t                </div> \n\t\t             </div>\n\t\t        </a>\n\t       \n\t            <div class=\"mb-1 text-muted\">\n\t              <span class=\"badge badge-pill badge-success\">{{receta.fechaPublicacion | date: 'dd-MMM'}}</span>\n\t            </div>\n\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t</div> -->\n\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/search/search.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_receta_service__ = __webpack_require__("./src/app/services/receta.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(recetaService, route) {
        var _this = this;
        this.recetaService = recetaService;
        this.route = route;
        this.keyword = undefined;
        this.loading = true;
        this.getRecetas();
        this.route.params.subscribe(function (parameters) {
            _this.keyword = parameters['keyword'];
            console.log(_this.keyword);
            _this.searchReceta(_this.keyword);
        });
    }
    SearchComponent.prototype.getRecetas = function () {
        var _this = this;
        this.recetaService.getAllRecetas().subscribe(function (recetas) { return _this.recetas = recetas; });
    };
    SearchComponent.prototype.searchReceta = function (keyword) {
        var _this = this;
        keyword = keyword.toLowerCase();
        this.recetas.forEach(function (receta) {
            if (receta.descripcion.indexOf(keyword) >= 0 || receta.titulo.toLowerCase().indexOf(keyword) >= 0) {
                _this.recetas_filtered.push(receta);
            }
        });
        this.loading = false;
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("./src/app/components/search/search.component.html"),
            styles: [__webpack_require__("./src/app/components/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_receta_service__["a" /* RecetaService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.authService.afAuth.authState
            .take(1)
            .map(function (authState) { return !!authState; })
            .do(function (logado) {
            if (!logado) {
                _this.router.navigate(['/login']);
            }
        });
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("./node_modules/firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
    }
    AuthService.prototype.loginGoogle = function () {
        return this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.getAuth = function () {
        return this.afAuth.authState.map(function (auth) { return auth; });
    };
    AuthService.prototype.logout = function () {
        return this.afAuth.auth.signOut();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/receta.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecetaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecetaService = /** @class */ (function () {
    function RecetaService(afs) {
        this.afs = afs;
        this.recetaCollection = this.afs.collection('recetas', function (ref) { return ref.orderBy('fechaPublicacion'); });
    }
    RecetaService.prototype.addNewReceta = function (receta) {
        this.recetaCollection.add(receta);
    };
    RecetaService.prototype.search = function (keyword) {
        var _this = this;
        this.getAllRecetas().subscribe(function (rec) { return _this.allRecetas = rec; });
        keyword = keyword.toLowerCase();
        this.allRecetas.forEach(function (r) {
            if (r.tipo.indexOf(keyword) >= 0 || r.titulo.toLowerCase().indexOf(keyword) >= 0) {
                _this.recetas_filtered.push(r);
            }
        });
    };
    RecetaService.prototype.getAllRecetas = function () {
        this.recetas = this.recetaCollection.snapshotChanges()
            .map(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        });
        return this.recetas;
    };
    // getAllRecetas(){
    //  return this.recetaCollection.valueChanges(); 
    // }
    RecetaService.prototype.firequery = function (start, end) {
        return this.afs.collection('recetas', function (ref) { return ref.limit(4).orderBy('fechaPublicacion').startAt(start).endAt(end); }).valueChanges();
    };
    RecetaService.prototype.getOneReceta = function (idReceta) {
        this.recetaDoc = this.afs.doc("recetas/" + idReceta);
        this.receta = this.recetaDoc.snapshotChanges().map(function (action) {
            if (action.payload.exists === false) {
                return null;
            }
            else {
                var data = action.payload.data();
                data.id = action.payload.id;
                return data;
            }
        });
        return this.receta;
    };
    RecetaService.prototype.updateReceta = function (receta) {
        this.recetaDoc = this.afs.doc("recetas/" + receta.id);
        this.recetaDoc.update(receta);
    };
    RecetaService.prototype.deleteReceta = function (receta) {
        this.recetaDoc = this.afs.doc("recetas/" + receta.id);
        this.recetaDoc.delete();
    };
    RecetaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], RecetaService);
    return RecetaService;
}());



/***/ }),

/***/ "./src/app/services/uploadFile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadFileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("./node_modules/firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_storage__ = __webpack_require__("./node_modules/firebase/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UploadFileService = /** @class */ (function () {
    function UploadFileService(db, afs) {
        this.db = db;
        this.afs = afs;
        this.basePath = '/recetas';
        this.recetaCollection = this.afs.collection('recetas', function (ref) { return ref; });
    }
    UploadFileService.prototype.pushFileToStorage = function (fileUpload, file) {
        var _this = this;
        if (file != null) {
            var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["storage"]().ref();
            var uploadTask_1 = storageRef.child(this.basePath + "/" + file.name).put(file);
            uploadTask_1.on(__WEBPACK_IMPORTED_MODULE_3_firebase_app__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
                // in progress
                var snap = snapshot;
            }, function (error) {
                // fail
                console.log(error);
            }, function () {
                // success
                uploadTask_1.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    console.log('File available at', downloadURL);
                    fileUpload.url = downloadURL;
                    fileUpload.name = file.name;
                    _this.addNewReceta(fileUpload);
                    // this.addNewReceta(fileUpload);
                });
            });
        }
        else {
            this.addNewReceta(fileUpload);
        }
    };
    UploadFileService.prototype.addNewReceta = function (fileUpload) {
        console.log(fileUpload);
        this.recetaCollection.add(fileUpload);
    };
    UploadFileService.prototype.deleteFileStorage = function (name) {
        var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["storage"]().ref();
        storageRef.child(this.basePath + "/" + name).delete();
    };
    UploadFileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], UploadFileService);
    return UploadFileService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyBTYilrh8tS2PK9URpEfhqG32I9aCul4H8",
        authDomain: "recipeapp-a620e.firebaseapp.com",
        databaseURL: "https://recipeapp-a620e.firebaseio.com",
        projectId: "recipeapp-a620e",
        storageBucket: "recipeapp-a620e.appspot.com",
        messagingSenderId: "765180820956"
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
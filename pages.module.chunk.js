webpackJsonp(["pages.module"],{

/***/ "./src/app/pages/lock/lock.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-full-page\">\n    <nav class=\"navbar navbar-primary navbar-transparent navbar-fixed-top\">\n        <div class=\"container\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#menu-example\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n                <a class=\"navbar-brand\" href=\"/#/dashboard\">MD Pro Angular</a>\n            </div>\n            <div class=\"collapse navbar-collapse\" id=\"menu-example\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li>\n                        <a href=\"/dashboard\">\n                            <i class=\"material-icons\">dashboard</i> Dashboard\n                        </a>\n                    </li>\n                    <li class=\"\">\n                        <a href=\"/pages/register\">\n                            <i class=\"material-icons\">person_add</i> Register\n                        </a>\n                    </li>\n                    <li class=\"\">\n                        <a href=\"/pages/login\">\n                            <i class=\"material-icons\">fingerprint</i> Login\n                        </a>\n                    </li>\n                    <li class=\" active \">\n                        <a href=\"/pages/lock\">\n                            <i class=\"material-icons\">lock_open</i> Lock\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n    <div class=\"full-page lock-page\" filter-color=\"black\">\n        <!--   you can change the color of the filter page using: data-color=\"blue | green | orange | red | purple\" -->\n        <div class=\"content\">\n            <form method=\"#\" action=\"#\">\n                <div class=\"card card-profile card-hidden\">\n                    <div class=\"card-avatar\">\n                        <a href=\"#pablo\">\n                            <img class=\"avatar\" src=\"../assets/img/faces/avatar.jpg\" alt=\"...\">\n                        </a>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">Tania Andrew</h4>\n                        <div class=\"form-group label-floating\">\n                            <label class=\"control-label\">Enter Password</label>\n                            <input type=\"password\" class=\"form-control\">\n                        </div>\n                    </div>\n                    <div class=\"card-footer\">\n                        <button type=\"button\" class=\"btn btn-rose btn-round\">Unlock</button>\n                    </div>\n                </div>\n            </form>\n        </div>\n        <footer class=\"footer\">\n            <div class=\"container\">\n                <nav class=\"pull-left\">\n                    <ul>\n                        <li>\n                            <a href=\"#\">\n                                Home\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                Company\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                Portfolio\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                Blog\n                            </a>\n                        </li>\n                    </ul>\n                </nav>\n                <p class=\"copyright pull-right\">\n                    &copy;\n                    {{test | date: 'yyyy'}}\n                    <a href=\"https://www.creative-tim.com\">Creative Tim</a>, made with love for a better web\n                </p>\n            </div>\n        </footer>\n        <div class=\"full-page-background\" style=\"background-image: url(../../../assets/img/lock.jpeg) \"></div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/lock/lock.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LockComponent = /** @class */ (function () {
    function LockComponent() {
        this.test = new Date();
    }
    LockComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    };
    LockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lock-cmp',
            template: __webpack_require__("./src/app/pages/lock/lock.component.html")
        })
    ], LockComponent);
    return LockComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\r\n    .footer-text {\r\n        background-color: white;\r\n        color: #e91e63;\r\n        font-weight: 400;\r\n        font-size: 12px;\r\n    }\r\n\r\n    .full-page:before {\r\n        background-color: white;\r\n    }\r\n</style>\r\n<title>Aspect Login</title>\r\n<div class=\"wrapper wrapper-full-page\">\r\n    <!--<nav class=\"navbar navbar-primary navbar-transparent navbar-fixed-top\">\r\n        <div class=\"container\">\r\n            <div class=\"navbar-header\">\r\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#menu-example\">\r\n                    <span class=\"sr-only\">Toggle navigation</span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                </button>\r\n                <a class=\"navbar-brand\" href=\"/#/dashboard\">MD Pro Angular</a>\r\n            </div>\r\n            <div class=\"collapse navbar-collapse\" id=\"menu-example\">\r\n                <ul class=\"nav navbar-nav navbar-right\">\r\n                    <li>\r\n                        <a href=\"/dashboard\">\r\n                            <i class=\"material-icons\">dashboard</i> Dashboard\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"\">\r\n                        <a href=\"/pages/register\">\r\n                            <i class=\"material-icons\">person_add</i> Register\r\n                        </a>\r\n                    </li>\r\n                    <li class=\" active \">\r\n                        <a href=\"/pages/login\">\r\n                            <i class=\"material-icons\">fingerprint</i> Login\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"\">\r\n                        <a href=\"/pages/lock\">\r\n                            <i class=\"material-icons\">lock_open</i> Lock\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </nav>-->\r\n    <div class=\"full-page login-page\" filter-color=\"black\">\r\n        <!--  you can change the color of the filter page using: data-color=\"blue | purple | green | orange | red | rose \" -->\r\n        <div class=\"content\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\" style=\"margin-bottom:38px\">\r\n                        <img src=\"../../../assets/img/flags/Logo.png\" class=\"text-center img-responsive\" />\r\n                    </div><br />\r\n                    <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\">\r\n                        <form [formGroup]=\"login\">\r\n                            <div class=\"card card-login card-hidden\">\r\n                                <div class=\"card-header text-center\" data-background-color=\"rose\">\r\n                                    <h4 class=\"card-title\">Login</h4>\r\n                                    <!--<div class=\"social-line\">\r\n                                        <a href=\"#btn\" class=\"btn btn-just-icon btn-simple\">\r\n                                            <i class=\"fa fa-facebook-square\"></i>\r\n                                        </a>\r\n                                        <a href=\"#pablo\" class=\"btn btn-just-icon btn-simple\">\r\n                                            <i class=\"fa fa-twitter\"></i>\r\n                                        </a>\r\n                                        <a href=\"#eugen\" class=\"btn btn-just-icon btn-simple\">\r\n                                            <i class=\"fa fa-google-plus\"></i>\r\n                                        </a>\r\n                                    </div>-->\r\n                                </div>\r\n                                <p class=\"category text-center\">\r\n                                    <!--Or Be Classical-->\r\n                                </p>\r\n                                <div class=\"card-content\">\r\n                                    <!--<div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                            <i class=\"material-icons\">face</i>\r\n                                        </span>\r\n                                        <div class=\"form-group label-floating\">\r\n                                            <label class=\"control-label\">First Name</label>\r\n                                            <input type=\"text\" class=\"form-control\">\r\n                                        </div>\r\n                                    </div>-->\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                            <i class=\"material-icons\">email</i>\r\n                                        </span>\r\n                                        <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(login, 'email')\">\r\n                                            <label class=\"control-label\">Email address</label>\r\n                                            <input type=\"email\" class=\"form-control\" formControlName=\"email\"\r\n                                                   pattern=\"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$\">\r\n                                            <app-field-error-display [displayError]=\"isFieldValid(login, 'email')\" errorMsg=\"Email is required and format should be name@companyname.com.au\">\r\n                                            </app-field-error-display>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                            <i class=\"material-icons\">lock_outline</i>\r\n                                        </span>\r\n                                        <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(login, 'password')\">\r\n                                            <label class=\"control-label\">Password</label>\r\n                                            <input type=\"password\" class=\"form-control\" formControlName=\"password\">\r\n                                            <app-field-error-display [displayError]=\"isFieldValid(login, 'password')\" errorMsg=\"Enter a valid password.\">\r\n                                            </app-field-error-display>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div style=\"color:#a94442;\" class=\"left\">{{loginErr}}</div>\r\n                                </div>\r\n                                <div class=\"footer pull-right\">\r\n                                    <div class=\"loader\" style=\"display: none;\">\r\n                                        <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                                            <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\"></circle>\r\n                                        </svg>\r\n                                    </div>\r\n                                    <button type=\"submit\" class=\"btn btn-rose btn-simple btn-wd btn-lg chkloader\" (click)=\"employeeLogin()\" style=\"min-width:inherit;\">Let's go</button>\r\n                                    <!--<button type=\"submit\" class=\"btn btn-rose btn-simple btn-wd btn-lg\" style=\"min-width:inherit;\">RESET PASSWORD</button>-->\r\n                                    <a href=\"/index.html#/reset-password\" class=\"btn btn-rose btn-simple btn-wd btn-lg\" style=\"min-width:inherit;\">RESET PASSWORD</a>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--<footer class=\"footer\">\r\n            <div class=\"container\">\r\n                <nav class=\"pull-left\">\r\n                    <ul>\r\n                        <li>\r\n                            <a href=\"#\">\r\n                                Home\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#\">\r\n                                Company\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#\">\r\n                                Portfolio\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#\">\r\n                                Blog\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </nav>\r\n                <p class=\"copyright pull-right\">\r\n                    &copy;\r\n                    {{test | date: 'yyyy'}}\r\n                    <a href=\"https://www.creative-tim.com\">Creative Tim</a>, made with love for a better web\r\n                </p>\r\n            </div>\r\n        </footer>-->\r\n        <footer class=\"footer\">\r\n            <div class=\"container\">\r\n                <nav>\r\n                    <div class=\"text-center\">\r\n                        <span class=\"footer-text\">\r\n                            Powered by Frontline Operations &copy; 2018\r\n                            <p>Version 0.1.17</p>\r\n                        </span>\r\n                    </div>\r\n                </nav>\r\n                <!--<p class=\"copyright pull-right\">\r\n                    &copy;\r\n                    {{test | date: 'yyyy'}}\r\n                    <a href=\"https://www.creative-tim.com\">Creative Tim</a>, made with love for a better web\r\n                </p>-->\r\n            </div>\r\n        </footer>\r\n        <!--<div class=\"full-page-background\" style=\"background-image: url(../../../assets/img/login.jpeg) \"></div>-->\r\n        <div class=\"full-page-background\"></div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_commonService__ = __webpack_require__("./src/app/services/commonService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_loginService__ = __webpack_require__("./src/app/services/loginService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_roleService__ = __webpack_require__("./src/app/services/roleService.ts");
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
    function LoginComponent(element, formBuilder, http, router, loginService, commonService, roleService) {
        this.element = element;
        this.formBuilder = formBuilder;
        this.http = http;
        this.router = router;
        this.loginService = loginService;
        this.commonService = commonService;
        this.roleService = roleService;
        this.test = new Date();
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    LoginComponent.prototype.isFieldValid = function (form, field) {
        return !form.get(field).valid && form.get(field).touched;
    };
    LoginComponent.prototype.displayFieldCss = function (form, field) {
        return {
            'has-error': this.isFieldValid(form, field),
            'has-feedback': this.isFieldValid(form, field)
        };
    };
    LoginComponent.prototype.employeeLogin = function () {
        var _this = this;
        $('.loader').show();
        if (this.login.valid) {
            var empEmail = this.login.controls["email"].value;
            var empPassword = this.login.controls["password"].value;
            this.loginService.EmployeeLogin(this.commonService.baseApiUrl, empEmail, empPassword).subscribe(function (data) {
                var dataEmp = JSON.stringify(data);
                var empParse = JSON.parse(dataEmp);
                var eplDetail = JSON.parse(empParse["_body"]);
                if (empParse["_body"] != 'null') {
                    sessionStorage.setItem('LogEmployee', JSON.stringify(eplDetail));
                    if (eplDetail.RoleId != null) {
                        _this.getUserAccessRole(eplDetail.RoleId);
                    }
                    else {
                        $('.loader').hide();
                        _this.router.navigate(['dashboard']);
                    }
                }
                else {
                    $('.loader').hide();
                    _this.loginErr = "Invalid Email or Password!";
                }
            });
        }
        else {
            $('.loader').hide();
            this.validateAllFormFields(this.login);
        }
    };
    LoginComponent.prototype.getUserAccessRole = function (roleId) {
        var _this = this;
        this.roleService.GetUserAccessRole(this.commonService.baseApiUrl, roleId).subscribe(function (data) {
            var dataEmp = JSON.stringify(data);
            var empParse = JSON.parse(dataEmp);
            var eplDetail = JSON.parse(empParse["_body"]);
            if (empParse["_body"] != 'null') {
                sessionStorage.setItem('AccessRole', JSON.stringify(eplDetail));
                _this.router.navigate(['dashboard']);
            }
        });
    };
    LoginComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            console.log(field);
            var control = formGroup.get(field);
            if (control instanceof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
        this.login = this.formBuilder.group({
            email: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$")]],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
        //$(document).ready(function () {
        //    $('.chkloader').click(function (e) {
        //        $('.loader').show();
        //    });
        //});
    };
    LoginComponent.prototype.sidebarToggle = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-cmp',
            template: __webpack_require__("./src/app/pages/login/login.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_commonService__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_6__services_loginService__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_7__services_roleService__["a" /* RoleService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__services_loginService__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_5__services_commonService__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_7__services_roleService__["a" /* RoleService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_routing__ = __webpack_require__("./src/app/pages/pages.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register_component__ = __webpack_require__("./src/app/pages/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pricing_pricing_component__ = __webpack_require__("./src/app/pages/pricing/pricing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lock_lock_component__ = __webpack_require__("./src/app/pages/lock/lock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("./src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__field_error_display_field_error_display_module__ = __webpack_require__("./src/app/field-error-display/field-error-display.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { MdIconModule, MdCardModule, MdInputModule, MdCheckboxModule, MdButtonModule } from '@angular/material';

// import { FlexLayoutModule } from '@angular/flex-layout';






var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__pages_routing__["a" /* PagesRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_9__field_error_display_field_error_display_module__["a" /* FieldErrorDisplayModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_5__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pricing_pricing_component__["a" /* PricingComponent */],
                __WEBPACK_IMPORTED_MODULE_7__lock_lock_component__["a" /* LockComponent */]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__register_register_component__ = __webpack_require__("./src/app/pages/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pricing_pricing_component__ = __webpack_require__("./src/app/pages/pricing/pricing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lock_lock_component__ = __webpack_require__("./src/app/pages/lock/lock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("./src/app/pages/login/login.component.ts");




var PagesRoutes = [
    {
        path: '',
        children: [{
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */]
            }, {
                path: 'lock',
                component: __WEBPACK_IMPORTED_MODULE_2__lock_lock_component__["a" /* LockComponent */]
            }, {
                path: 'register',
                component: __WEBPACK_IMPORTED_MODULE_0__register_register_component__["a" /* RegisterComponent */]
            }, {
                path: 'pricing',
                component: __WEBPACK_IMPORTED_MODULE_1__pricing_pricing_component__["a" /* PricingComponent */]
            }]
    }
];


/***/ }),

/***/ "./src/app/pages/pricing/pricing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-full-page\">\n    <nav class=\"navbar navbar-primary navbar-transparent navbar-absolute\">\n        <div class=\"container\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#menu-example\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n                <a class=\"navbar-brand\" href=\"/#/dashboard\">MD Pro Angular</a>\n            </div>\n            <div class=\"collapse navbar-collapse\" id=\"menu-example\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li>\n                        <a href=\"/dashboard\">\n                            <i class=\"material-icons\">dashboard</i> Dashboard\n                        </a>\n                    </li>\n                    <li class=\"\">\n                        <a href=\"/pages/register\">\n                            <i class=\"material-icons\">person_add</i> Register\n                        </a>\n                    </li>\n                    <li class=\"\">\n                        <a href=\"/pages/login\">\n                            <i class=\"material-icons\">fingerprint</i> Login\n                        </a>\n                    </li>\n                    <li class=\"\">\n                        <a href=\"/pages/lock\">\n                            <i class=\"material-icons\">lock_open</i> Lock\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n    <div class=\"full-page pricing-page\">\n        <div class=\"content\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-6 col-md-offset-3 text-center\">\n                        <h2 class=\"title\">Pick the best plan for you</h2>\n                        <h5 class=\"description\">You have Free Unlimited Updates and Premium Support on each package.</h5>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-3\">\n                        <div class=\"card card-pricing card-plain\">\n                            <div class=\"card-content\">\n                                <h6 class=\"category\">Freelancer</h6>\n                                <div class=\"icon\">\n                                    <i class=\"material-icons\">weekend</i>\n                                </div>\n                                <h3 class=\"card-title\">FREE</h3>\n                                <p class=\"card-description\">\n                                    This is good if your company size is between 2 and 10 Persons.\n                                </p>\n                                <a href=\"#pablo\" class=\"btn btn-white btn-round\">Choose Plan</a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"card card-pricing card-raised\">\n                            <div class=\"card-content\">\n                                <h6 class=\"category\">Small Company</h6>\n                                <div class=\"icon icon-rose\">\n                                    <i class=\"material-icons\">home</i>\n                                </div>\n                                <h3 class=\"card-title\">$29</h3>\n                                <p class=\"card-description\">\n                                    This is good if your company size is between 2 and 10 Persons.\n                                </p>\n                                <a href=\"#pablo\" class=\"btn btn-rose btn-round\">Choose Plan</a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"card card-pricing card-plain\">\n                            <div class=\"card-content\">\n                                <h6 class=\"category\">Medium Company</h6>\n                                <div class=\"icon\">\n                                    <i class=\"material-icons\">business</i>\n                                </div>\n                                <h3 class=\"card-title\">$69</h3>\n                                <p class=\"card-description\">\n                                    This is good if your company size is between 11 and 99 Persons.\n                                </p>\n                                <a href=\"#pablo\" class=\"btn btn-white btn-round\">Choose Plan</a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"card card-pricing card-plain\">\n                            <div class=\"card-content\">\n                                <h6 class=\"category\">Enterprise</h6>\n                                <div class=\"icon\">\n                                    <i class=\"material-icons\">account_balance</i>\n                                </div>\n                                <h3 class=\"card-title\">$159</h3>\n                                <p class=\"card-description\">\n                                    This is good if your company size is 99+ persons.\n                                </p>\n                                <a href=\"#pablo\" class=\"btn btn-white btn-round\">Choose Plan</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <footer class=\"footer\">\n            <div class=\"container\">\n                <nav class=\"pull-left\">\n                    <ul>\n                        <li>\n                            <a href=\"#\">\n                                Home\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                Company\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                Portfolio\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                Blog\n                            </a>\n                        </li>\n                    </ul>\n                </nav>\n                <p class=\"copyright pull-right\">\n                    &copy;\n                    {{test | date: 'yyyy'}}\n                    <a href=\"https://www.creative-tim.com\">Creative Tim</a>, made with love for a better web\n                </p>\n            </div>\n        </footer>\n        <div class=\"full-page-background\" style=\"background-image: url(../../../assets/img/bg-pricing.jpeg) \"></div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/pricing/pricing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PricingComponent = /** @class */ (function () {
    function PricingComponent() {
        this.test = new Date();
    }
    PricingComponent.prototype.ngOnInit = function () {
    };
    PricingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pricing-cmp',
            template: __webpack_require__("./src/app/pages/pricing/pricing.component.html")
        })
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "./src/app/pages/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-full-page\">\n    <nav class=\"navbar navbar-primary navbar-transparent navbar-absolute\">\n        <div class=\"container\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#menu-example\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n                <a class=\"navbar-brand\" href=\"/#/dashboard\">MD Pro Angular</a>\n            </div>\n            <div class=\"collapse navbar-collapse\" id=\"menu-example\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li>\n                        <a href=\"/dashboard\">\n                            <i class=\"material-icons\">dashboard</i> Dashboard\n                        </a>\n                    </li>\n                    <li class=\" active \">\n                        <a href=\"/pages/register\">\n                            <i class=\"material-icons\">person_add</i> Register\n                        </a>\n                    </li>\n                    <li class=\"\">\n                        <a href=\"/pages/login\">\n                            <i class=\"material-icons\">fingerprint</i> Login\n                        </a>\n                    </li>\n                    <li class=\"\">\n                        <a href=\"/pages/lock\">\n                            <i class=\"material-icons\">lock_open</i> Lock\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n    <div class=\"full-page register-page\" filter-color=\"black\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-10 col-md-offset-1\">\n                    <div class=\"card card-signup\">\n                        <h2 class=\"card-title text-center\">Register</h2>\n                        <div class=\"row\">\n                            <div class=\"col-md-5 col-md-offset-1\">\n                                <div class=\"card-content\">\n                                    <div class=\"info info-horizontal\">\n                                        <div class=\"icon icon-rose\">\n                                            <i class=\"material-icons\">timeline</i>\n                                        </div>\n                                        <div class=\"description\">\n                                            <h4 class=\"info-title\">Marketing</h4>\n                                            <p class=\"description\">\n                                                We've created the marketing campaign of the website. It was a very interesting collaboration.\n                                            </p>\n                                        </div>\n                                    </div>\n                                    <div class=\"info info-horizontal\">\n                                        <div class=\"icon icon-primary\">\n                                            <i class=\"material-icons\">code</i>\n                                        </div>\n                                        <div class=\"description\">\n                                            <h4 class=\"info-title\">Fully Coded in HTML5</h4>\n                                            <p class=\"description\">\n                                                We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub.\n                                            </p>\n                                        </div>\n                                    </div>\n                                    <div class=\"info info-horizontal\">\n                                        <div class=\"icon icon-info\">\n                                            <i class=\"material-icons\">group</i>\n                                        </div>\n                                        <div class=\"description\">\n                                            <h4 class=\"info-title\">Built Audience</h4>\n                                            <p class=\"description\">\n                                                There is also a Fully Customizable CMS Admin Dashboard for this product.\n                                            </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-5\">\n                                <div class=\"social text-center\">\n                                    <button class=\"btn btn-just-icon btn-round btn-twitter\">\n                                        <i class=\"fa fa-twitter\"></i>\n                                    </button>\n                                    <button class=\"btn btn-just-icon btn-round btn-dribbble\">\n                                        <i class=\"fa fa-dribbble\"></i>\n                                    </button>\n                                    <button class=\"btn btn-just-icon btn-round btn-facebook\">\n                                        <i class=\"fa fa-facebook\"> </i>\n                                    </button>\n                                    <h4> or be classical </h4>\n                                </div>\n                                <form class=\"form\" method=\"\" action=\"\">\n                                    <div class=\"card-content\">\n                                        <div class=\"input-group\">\n                                            <span class=\"input-group-addon\">\n                                                <i class=\"material-icons\">face</i>\n                                            </span>\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\">\n                                        </div>\n                                        <div class=\"input-group\">\n                                            <span class=\"input-group-addon\">\n                                                <i class=\"material-icons\">email</i>\n                                            </span>\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Email...\">\n                                        </div>\n                                        <div class=\"input-group\">\n                                            <span class=\"input-group-addon\">\n                                                <i class=\"material-icons\">lock_outline</i>\n                                            </span>\n                                            <input type=\"password\" placeholder=\"Password...\" class=\"form-control\" />\n                                        </div>\n                                        <!-- If you want to add a checkbox to this form, uncomment this code -->\n                                        <div class=\"checkbox\">\n                                            <label>\n                                                <input type=\"checkbox\" name=\"optionsCheckboxes\" checked> I agree to the\n                                                <a href=\"#something\">terms and conditions</a>.\n                                            </label>\n                                        </div>\n                                    </div>\n                                    <div class=\"footer text-center\">\n                                        <a href=\"#pablo\" class=\"btn btn-primary btn-round\">Get Started</a>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <footer class=\"footer\">\n            <div class=\"container\">\n                <nav class=\"pull-left\">\n                    <ul>\n                        <li>\n                            <a href=\"#\">\n                                Home\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                Company\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                Portfolio\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                Blog\n                            </a>\n                        </li>\n                    </ul>\n                </nav>\n                <p class=\"copyright pull-right\">\n                    &copy;\n                    {{test | date: 'yyyy'}}\n                    <a href=\"https://www.creative-tim.com\">Creative Tim</a>, made with love for a better web\n                </p>\n            </div>\n        </footer>\n        <div class=\"full-page-background\" style=\"background-image: url(../../../assets/img/register.jpeg) \"></div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
        this.test = new Date();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register-cmp',
            template: __webpack_require__("./src/app/pages/register/register.component.html")
        })
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ })

});
//# sourceMappingURL=pages.module.chunk.js.map
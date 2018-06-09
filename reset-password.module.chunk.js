webpackJsonp(["reset-password.module"],{

/***/ "./src/app/reset-password/reset-password.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\r\n    .footer-text {\r\n        background-color: white;\r\n        color: #e91e63;\r\n        font-weight: 400;\r\n        font-size: 12px;\r\n    }\r\n\r\n    .full-page:before {\r\n        background-color: white;\r\n    }\r\n</style>\r\n<title>Aspect Reset Your Password</title>\r\n<div class=\"wrapper wrapper-full-page\" *ngIf=\"isRequest == true\">\r\n    <div class=\"full-page login-page\" filter-color=\"black\">\r\n        <!--  you can change the color of the filter page using: data-color=\"blue | purple | green | orange | red | rose \" -->\r\n        <div class=\"content\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\" style=\"margin-bottom:38px\">\r\n                        <img src=\"../../../assets/img/flags/Logo.png\" class=\"text-center img-responsive\" />\r\n                    </div><br />\r\n                    <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\">\r\n                        <form [formGroup]=\"resetReq\">\r\n                            <div class=\"card card-login card-hidden\">\r\n                                <div class=\"card-header text-center\" data-background-color=\"rose\">\r\n                                    <h4 class=\"card-title\">Enter your email here</h4>\r\n                                </div>\r\n                                <p class=\"category text-center\">\r\n                                    <!--Or Be Classical-->\r\n                                </p>\r\n                                <div class=\"card-content\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                            <i class=\"material-icons\">email</i>\r\n                                        </span>\r\n                                        <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(resetReq, 'email')\">\r\n                                            <label class=\"control-label\">Email address</label>\r\n                                            <input type=\"email\" class=\"form-control\"\r\n                                                   pattern=\"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$\" formControlName=\"email\">\r\n                                            <app-field-error-display [displayError]=\"isFieldValid(resetReq, 'email')\" errorMsg=\"Email is required and format should be name@companyname.com.au\">\r\n                                            </app-field-error-display>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"footer pull-right\">\r\n                                    <button type=\"submit\" class=\"btn btn-rose btn-simple btn-wd btn-lg\" (click)=\"resetRequest()\" style=\"min-width:inherit;\">Send Email</button>\r\n                                </div><br /><br />\r\n                                <div class=\"col-md-1\"></div>\r\n                                <div class=\"col-md-2 pull-left\">\r\n                                    <a href=\"index.html#/pages/login\" class=\"btn btn-behance btn-simple btn-sm\" style=\"text-transform:none;font-size:13px\">Go back to login</a>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <footer class=\"footer\">\r\n            <div class=\"container\">\r\n                <nav>\r\n                    <div class=\"text-center\">\r\n                        <span class=\"footer-text\">\r\n                            Powered by Frontline Operations &copy; 2018\r\n                            <p>Version 0.1.19</p>\r\n                        </span>\r\n                    </div>\r\n                </nav>\r\n                <!--<p class=\"copyright pull-right\">\r\n                    &copy;\r\n                    {{test | date: 'yyyy'}}\r\n                    <a href=\"https://www.creative-tim.com\">Creative Tim</a>, made with love for a better web\r\n                </p>-->\r\n            </div>\r\n        </footer>\r\n        <!--<div class=\"full-page-background\" style=\"background-image: url(../../../assets/img/login.jpeg) \"></div>-->\r\n        <div class=\"full-page-background\"></div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"wrapper wrapper-full-page\" *ngIf=\"isRequest == false\">\r\n    <div class=\"full-page login-page\" filter-color=\"black\">\r\n        <div class=\"content\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\" style=\"margin-bottom:38px\">\r\n                        <img src=\"../../../assets/img/flags/Logo.png\" class=\"text-center img-responsive\" />\r\n                    </div><br />\r\n                    <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\">\r\n                        <form [formGroup]=\"resetPwd\">\r\n                            <div class=\"card card-login card-hidden\">\r\n                                <div class=\"card-header text-center\" data-background-color=\"rose\">\r\n                                    <h4 class=\"card-title\">Reset Your Password</h4>\r\n                                </div>\r\n                                <p class=\"category text-center\">\r\n                                    <!--Or Be Classical-->\r\n                                </p>\r\n                                <div class=\"card-content\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                            <i class=\"material-icons\">lock_outline</i>\r\n                                        </span>\r\n                                        <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(resetPwd, 'password')\">\r\n                                            <label class=\"control-label\">Password</label>\r\n                                            <input type=\"password\" class=\"form-control\" formControlName=\"password\">\r\n                                            <app-field-error-display [displayError]=\"isFieldValid(resetPwd, 'password')\" errorMsg=\"Enter a valid password.\">\r\n                                            </app-field-error-display>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                            <i class=\"material-icons\">lock_outline</i>\r\n                                        </span>\r\n                                        <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(resetPwd, 'confirmPassword')\">\r\n                                            <label class=\"control-label\">Confirmed Password</label>\r\n                                            <input type=\"password\" class=\"form-control\" formControlName=\"confirmPassword\">\r\n                                            <app-field-error-display [displayError]=\"isFieldValid(resetPwd, 'confirmPassword')\" errorMsg=\"These passwords don't match. Try again!\">\r\n                                            </app-field-error-display>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"footer pull-right\">\r\n                                    <button type=\"submit\" class=\"btn btn-rose btn-simple btn-wd btn-lg\" (click)=\"resetPassword()\" style=\"min-width:inherit;\">Submit</button>\r\n                                </div><br /><br />\r\n                                <div class=\"col-md-1\"></div>\r\n                                <div class=\"col-md-2 pull-left\">\r\n                                    <a href=\"index.html#/pages/login\" class=\"btn btn-behance btn-simple btn-sm\" style=\"text-transform:none;font-size:13px\">Go to Login</a>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <footer class=\"footer\">\r\n            <div class=\"container\">\r\n                <nav>\r\n                    <div class=\"text-center\">\r\n                        <span class=\"footer-text\">\r\n                            Powered by Frontline Operations &copy; 2018\r\n                            <p>Version 0.1.19</p>\r\n                        </span>\r\n                    </div>\r\n                </nav>\r\n                {{test | date: 'yyyy'}}\r\n            </div>\r\n        </footer>\r\n        <!--<div class=\"full-page-background\" style=\"background-image: url(../../../assets/img/login.jpeg) \"></div>-->\r\n        <div class=\"full-page-background\"></div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/reset-password/reset-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forms_validationforms_password_validator_component__ = __webpack_require__("./src/app/forms/validationforms/password-validator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_commonService__ = __webpack_require__("./src/app/services/commonService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_userService__ = __webpack_require__("./src/app/services/userService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(element, activatedRoute, formBuilder, http, commonService, userService, router) {
        this.element = element;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.http = http;
        this.commonService = commonService;
        this.userService = userService;
        this.router = router;
        this.test = new Date();
        this.resetReq = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]()
        });
        this.resetPwd = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            confirmPassword: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]()
        });
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    ResetPasswordComponent.prototype.isFieldValid = function (form, field) {
        return !form.get(field).valid && form.get(field).touched;
    };
    ResetPasswordComponent.prototype.displayFieldCss = function (form, field) {
        return {
            'has-error': this.isFieldValid(form, field),
            'has-feedback': this.isFieldValid(form, field)
        };
    };
    ResetPasswordComponent.prototype.showSwal = function (text) {
        __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()({
            type: 'success',
            //title: 'Good job!',
            text: text,
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-success'
        }).catch(__WEBPACK_IMPORTED_MODULE_7_sweetalert2___default.a.noop);
    };
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            if (params['token'] == undefined) {
                _this.isRequest = true;
            }
            else {
                _this.requestToken = params['token'];
                _this.isRequest = false;
                _this.isValidPasswordToken();
            }
        });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
        this.resetReq = this.formBuilder.group({
            email: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$")]]
        });
        this.resetPwd = this.formBuilder.group({
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
        }, {
            validator: __WEBPACK_IMPORTED_MODULE_3__forms_validationforms_password_validator_component__["a" /* PasswordValidation */].MatchPassword // your validation method
        });
    };
    ResetPasswordComponent.prototype.resetRequest = function () {
        var _this = this;
        $('.loader').show();
        if (this.resetReq.valid) {
            var empEmail = this.resetReq.controls["email"].value;
            return this.userService.ResetPasswordRequest(this.commonService.baseApiUrl, empEmail).subscribe(function (data) {
                var dataEmp = JSON.stringify(data);
                var empParse = JSON.parse(dataEmp);
                var empSts = JSON.parse(empParse["_body"]);
                if (empSts == true) {
                    _this.showSwal("Please check your email!");
                    $('.loader').hide();
                }
                else {
                    _this.showSwal("Email not linked!");
                }
            });
        }
        else {
            this.validateAllFormFields(this.resetReq);
        }
    };
    ResetPasswordComponent.prototype.resetPassword = function () {
        var _this = this;
        $('.loader').show();
        if (this.resetPwd.valid) {
            var password = this.resetPwd.controls["password"].value;
            return this.userService.ResetPassword(this.commonService.baseApiUrl, password, this.requestToken).subscribe(function (data) {
                var dataEmp = JSON.stringify(data);
                var empParse = JSON.parse(dataEmp);
                var empSts = JSON.parse(empParse["_body"]);
                if (empSts == true) {
                    $('.loader').hide();
                    _this.showSwal("Password updated successfully!");
                    _this.router.navigate(['pages/login']);
                }
                else {
                    _this.showSwal("Password not updated!");
                }
            });
        }
        else {
            this.validateAllFormFields(this.resetPwd);
        }
    };
    ResetPasswordComponent.prototype.isValidPasswordToken = function () {
        var _this = this;
        return this.userService.IsValidPasswordToken(this.commonService.baseApiUrl, this.requestToken).subscribe(function (data) {
            var dataEmp = JSON.stringify(data);
            var empParse = JSON.parse(dataEmp);
            var empSts = JSON.parse(empParse["_body"]);
            if (empSts == false) {
                _this.showSwal("Invalid request!");
                _this.router.navigate(['pages/login']);
            }
        });
    };
    ResetPasswordComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            console.log(field);
            var control = formGroup.get(field);
            if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    ResetPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__("./src/app/reset-password/reset-password.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_commonService__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_5__services_userService__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_4__services_commonService__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_5__services_userService__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/reset-password/reset-password.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordModule", function() { return ResetPasswordModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reset_password_routing__ = __webpack_require__("./src/app/reset-password/reset-password.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reset_password_component__ = __webpack_require__("./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__field_error_display_field_error_display_module__ = __webpack_require__("./src/app/field-error-display/field-error-display.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ResetPasswordModule = /** @class */ (function () {
    function ResetPasswordModule() {
    }
    ResetPasswordModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__reset_password_routing__["a" /* ResetPasswordRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__field_error_display_field_error_display_module__["a" /* FieldErrorDisplayModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__reset_password_component__["a" /* ResetPasswordComponent */]
            ]
        })
    ], ResetPasswordModule);
    return ResetPasswordModule;
}());



/***/ }),

/***/ "./src/app/reset-password/reset-password.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reset_password_component__ = __webpack_require__("./src/app/reset-password/reset-password.component.ts");

var ResetPasswordRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__reset_password_component__["a" /* ResetPasswordComponent */]
            }]
    }
];


/***/ })

});
//# sourceMappingURL=reset-password.module.chunk.js.map
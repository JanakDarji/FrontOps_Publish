webpackJsonp(["dashboard.module"],{

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<title>Aspect Dashboard</title>-->\r\n<style>\r\n    .dropdownview {\r\n        -webkit-appearance: menulist-button;\r\n    }\r\n</style>\r\n<title>Dashboard</title>\r\n<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <!--<div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                <div class=\"card card-stats\">\r\n                    <div class=\"card-header\" data-background-color=\"green\">\r\n                        <i class=\"material-icons\">store</i>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <p class=\"category\" style=\"text-align:left; height:40px;\">Total Jobs Completed</p>\r\n                        <h3 class=\"card-title\">3,245</h3>\r\n                    </div>\r\n                    <div class=\"card-footer\">\r\n                        <div class=\"stats\">\r\n                            <i class=\"material-icons\">date_range</i> Last 24 Hours\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                <div class=\"card card-stats\">\r\n                    <div class=\"card-header\" data-background-color=\"orange\">\r\n                        <i class=\"material-icons\">weekend</i>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <p class=\"category\" style=\"text-align:left; height:40px;\">Total Work Orders Completed</p>\r\n                        <h3 class=\"card-title\">184</h3>\r\n                    </div>\r\n                    <div class=\"card-footer\">\r\n                        <div class=\"stats\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                <div class=\"card card-stats\">\r\n                    <div class=\"card-header\" data-background-color=\"red\">\r\n                        <i class=\"material-icons\">equalizer</i>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <p class=\"category\" style=\"text-align:left; height:40px;\">Total Time Sheet Hours Approved</p>\r\n                        <h3 class=\"card-title\">75,521</h3>\r\n                    </div>\r\n                    <div class=\"card-footer\">\r\n                        <div class=\"stats\">\r\n                            <i class=\"material-icons\">local_offer</i> Google Analytics\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                <div class=\"card card-stats\">\r\n                    <div class=\"card-header\" data-background-color=\"green\">\r\n                        <i class=\"material-icons\">store</i>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <p class=\"category\" style=\"text-align:left; height:40px;\">Maintenance Tasks Completed</p>\r\n                        <h3 class=\"card-title\">3,245</h3>\r\n                    </div>\r\n                    <div class=\"card-footer\">\r\n                        <div class=\"stats\">\r\n                            <i class=\"material-icons\">date_range</i> Last 24 Hours\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n                <form [formGroup]=\"dashJPage\">\r\n                    <div class=\"card\" style=\"margin:10px 0px;\">\r\n                        <h4 class=\"card-title\" style=\"padding:15px;\">Jobs Map</h4>\r\n                        <div class=\"col-lg-4 col-md-4 col-sm-4\">\r\n                            <div class=\"form-group label-floating\">\r\n                                <label class=\"control-label\">\r\n                                    Status\r\n                                    <small>(required)</small>\r\n                                </label>\r\n                                <select name=\"company\" formControlName=\"jobStatus\" class=\"form-control dropdownview\">\r\n                                    <option disabled=\"\" selected=\"\"></option>\r\n                                    <option value=\"1\">Not Started</option>\r\n                                    <option value=\"2\">Assigned Jobs</option>\r\n                                    <option value=\"3\">Pending Jobs (Time sheet Hours Booked)</option>\r\n                                    <option value=\"4\">Completed Jobs</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-md-4 col-sm-4\">\r\n                            <div class=\"form-group label-floating\">\r\n                                <label class=\"control-label\">\r\n                                    Division\r\n                                    <small>(required)</small>\r\n                                </label>\r\n                                <select name=\"company\" formControlName=\"dateType\" class=\"form-control dropdownview\" id=\"divsn\">\r\n                                    <option disabled=\"\" selected=\"\"></option>\r\n                                    <option value=\"1\">All</option>\r\n                                    <option value=\"2\">Aspect Toowoomba</option>\r\n                                    <option value=\"3\">Toowoomba Bench Tops</option>\r\n                                    <option value=\"4\">Bradbec</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-md-4 col-sm-4\">\r\n                            <div class=\"form-group label-floating\">\r\n                                <label class=\"control-label\">\r\n                                   Date\r\n                                    <small>(required)</small>\r\n                                </label>\r\n                                <md2-datepicker placeholder=\"Date\" formControlName=\"jobDate\" type=\"datetime\" format=\"dd/MM/y HH:mm A\" startView=\"month\"></md2-datepicker>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"mt50\" style=\"margin-top:100px;\">\r\n                            <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"card-content col-md-12\">\r\n                                        <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"true\" [zoom]=\"zoom\" style=\"height:320px; position:relative; top:-35px;\">\r\n                                            <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\r\n                                        </agm-map>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    </form>\r\n                </div>\r\n            <div class=\"col-sm-6\">\r\n                <form [formGroup]=\"dashMPage\">\r\n                    <div class=\"card\" style=\"margin:10px 0px;\">\r\n                        <h4 class=\"card-title\" style=\"padding:15px;\">Maintenance Map</h4>\r\n                        <div class=\"col-lg-6 col-md-6 col-sm-6\">\r\n                            <div class=\"form-group label-floating\">\r\n                                <label class=\"control-label\">\r\n                                    Division\r\n                                    <small>(required)</small>\r\n                                </label>\r\n                                <select name=\"company\" formControlName=\"mtStatus\" class=\"form-control dropdownview\" id=\"divsn\">\r\n                                    <option disabled=\"\" selected=\"\"></option>\r\n                                    <option value=\"1\">Not Started</option>\r\n                                    <option value=\"2\">Assigned Jobs</option>\r\n                                    <option value=\"3\">Pending Jobs (Time sheet Hours Booked)</option>\r\n                                    <option value=\"4\">Completed Jobs</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-6 col-md-6 col-sm-6\">\r\n                            <div class=\"form-group label-floating\">\r\n                                <label class=\"control-label\">\r\n                                    Division\r\n                                    <small>(required)</small>\r\n                                </label>\r\n                                <select name=\"company\" formControlName=\"mtType\" class=\"form-control dropdownview\" id=\"divsn\">\r\n                                    <option disabled=\"\" selected=\"\"></option>\r\n                                    <option value=\"1\">All</option>\r\n                                    <option value=\"2\">Aspect Toowoomba</option>\r\n                                    <option value=\"3\">Toowoomba Bench Tops</option>\r\n                                    <option value=\"4\">Bradbec</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"mt50\" style=\"margin-top:100px;\">\r\n                            <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"card-content col-md-12\">\r\n                                        <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"true\" [zoom]=\"zoom\" style=\"height:320px; position:relative; top:-35px;\">\r\n                                            <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\r\n                                        </agm-map>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                 </form>\r\n            </div>\r\n        </div>-->\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.dashJPage = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            jobStatus: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            dateType: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            jobDate: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]()
        });
        this.dashMPage = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            mtStatus: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            mtType: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]()
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.latitude = -33.865143;
        this.longitude = 151.209900;
        this.zoom = 10;
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__md_md_module__ = __webpack_require__("./src/app/md/md.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_routing__ = __webpack_require__("./src/app/dashboard/dashboard.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_md2__ = __webpack_require__("./node_modules/md2/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_7__dashboard_routing__["a" /* DashboardRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__md_md_module__["a" /* MdModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_module__["b" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_8__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyALhBWvI6EuL2Vul0ykYis51D_ckKtxVCc',
                    libraries: ["places"]
                }),
                __WEBPACK_IMPORTED_MODULE_9_md2__["a" /* Md2DatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_9_md2__["b" /* MdNativeDateModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__dashboard_component__["a" /* DashboardComponent */]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");

var DashboardRoutes = [
    {
        path: '',
        children: [{
                path: 'dashboard',
                component: __WEBPACK_IMPORTED_MODULE_0__dashboard_component__["a" /* DashboardComponent */]
            }]
    }
];


/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map
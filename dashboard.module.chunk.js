webpackJsonp(["dashboard.module"],{

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<title>Aspect Dashboard</title>-->\r\n<style>\r\n    .dropdownview {\r\n        -webkit-appearance: menulist-button;\r\n    }\r\n    .md2-date{margin-top:6px;}\r\n    \r\n</style>\r\n<title>Dashboard</title>\r\n<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                <div class=\"card card-stats\">\r\n                    <div class=\"card-header\" data-background-color=\"green\">\r\n                        <i class=\"material-icons\">store</i>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <p class=\"category\" style=\"text-align:left; height:40px;\">Total Jobs Completed</p>\r\n                        <h3 class=\"card-title\">3,245</h3>\r\n                    </div>\r\n                    <div class=\"card-footer\">\r\n                        <div class=\"stats\">\r\n                            <i class=\"material-icons\">date_range</i> Last 24 Hours\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                <div class=\"card card-stats\">\r\n                    <div class=\"card-header\" data-background-color=\"orange\">\r\n                        <i class=\"material-icons\">weekend</i>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <p class=\"category\" style=\"text-align:left; height:40px;\">Total Work Orders Completed</p>\r\n                        <h3 class=\"card-title\">184</h3>\r\n                    </div>\r\n                    <div class=\"card-footer\">\r\n                        <div class=\"stats\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                <div class=\"card card-stats\">\r\n                    <div class=\"card-header\" data-background-color=\"red\">\r\n                        <i class=\"material-icons\">equalizer</i>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <p class=\"category\" style=\"text-align:left; height:40px;\">Total Time Sheet Hours Approved</p>\r\n                        <h3 class=\"card-title\">75,521</h3>\r\n                    </div>\r\n                    <div class=\"card-footer\">\r\n                        <div class=\"stats\">\r\n                            <i class=\"material-icons\">local_offer</i> Google Analytics\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                <div class=\"card card-stats\">\r\n                    <div class=\"card-header\" data-background-color=\"green\">\r\n                        <i class=\"material-icons\">store</i>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <p class=\"category\" style=\"text-align:left; height:40px;\">Maintenance Tasks Completed</p>\r\n                        <h3 class=\"card-title\">3,245</h3>\r\n                    </div>\r\n                    <div class=\"card-footer\">\r\n                        <div class=\"stats\">\r\n                            <i class=\"material-icons\">date_range</i> Last 24 Hours\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n                <form [formGroup]=\"dashJPage\">\r\n                    <div class=\"card\" style=\"margin:10px 0px;\">\r\n                        <h4 class=\"card-title\" style=\"padding:15px;\">Jobs Map</h4>\r\n                        <div class=\"col-lg-3 col-md-3 col-sm-3\">\r\n                            <div class=\"form-group label-floating\">\r\n                                <label class=\"control-label\">\r\n                                    Status\r\n                                    <small>(required)</small>\r\n                                </label>\r\n                                <select name=\"company\" formControlName=\"jobStatus\" (change)=\"getJobMapForDashboard()\" class=\"form-control dropdownview\">\r\n                                    <option disabled=\"\" selected=\"\"></option>\r\n                                    <option value=\"Created\">Not Started</option>\r\n                                    <option value=\"Created\">Assigned Jobs</option>\r\n                                    <option value=\"Created\">Pending Jobs (Time sheet Hours Booked)</option>\r\n                                    <option value=\"Completed\">Completed Jobs</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-md-4 col-sm-4\">\r\n                            <div class=\"form-group label-floating\">\r\n                                <label class=\"control-label\">\r\n                                    Date Type\r\n                                    <small>(required)</small>\r\n                                </label>\r\n                                <select name=\"company\" formControlName=\"dateType\" class=\"form-control dropdownview\" id=\"divsn\">\r\n                                    <option disabled=\"\" selected=\"\"></option>\r\n                                    <option value=\"1\">Date Select for Day</option>\r\n                                    <option value=\"2\">Date Select for Week</option>\r\n                                    <option value=\"3\">Date Select for Month</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-5 col-md-5 col-sm-5\">\r\n                            <div class=\"md2-date\">\r\n                                <md2-datepicker placeholder=\"Date\" formControlName=\"jobDate\" type=\"datetime\" (change)=\"getJobMapForDashboard()\" format=\"dd/MM/y HH:mm A\" startView=\"month\"></md2-datepicker>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"mt50\" style=\"margin-top:100px;\">\r\n                            <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"card-content col-md-12\">\r\n                                        <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"true\" [zoom]=\"zoom\" style=\"height:325px;\">\r\n                                            <agm-marker-cluster *ngFor=\"let point of latlongList\">\r\n                                                    <agm-marker [latitude]=\"point.latitude\" [longitude]=\"point.longitude\" iconUrl=\"../../assets/img/endwo.png\">\r\n                                                    </agm-marker>\r\n                                            </agm-marker-cluster>\r\n                                        </agm-map>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n                </div>\r\n            <div class=\"col-sm-6\">\r\n                <form [formGroup]=\"dashMPage\">\r\n                    <div class=\"card\" style=\"margin:10px 0px;\">\r\n                        <h4 class=\"card-title\" style=\"padding:15px;\">Maintenance Map</h4>\r\n                        <div class=\"col-lg-3 col-md-3 col-sm-3\">\r\n                            <div class=\"form-group label-floating\">\r\n                                <label class=\"control-label\">\r\n                                    Status\r\n                                    <small>(required)</small>\r\n                                </label>\r\n                                <select name=\"company\" formControlName=\"mtStatus\" class=\"form-control dropdownview\" id=\"divsn\">\r\n                                    <option disabled=\"\" selected=\"\"></option>\r\n                                    <option value=\"1\">Created</option>\r\n                                    <option value=\"2\">Assigned</option>\r\n                                    <option value=\"3\">Pending Jobs (Time sheet Hours Booked)</option>\r\n                                    <option value=\"4\">Completed Tasks</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-md-4 col-sm-4\">\r\n                            <div class=\"form-group label-floating\">\r\n                                <label class=\"control-label\">\r\n                                    Date Type\r\n                                    <small>(required)</small>\r\n                                </label>\r\n                                <select name=\"company\" formControlName=\"mtType\" class=\"form-control dropdownview\" id=\"divsn\">\r\n                                    <option disabled=\"\" selected=\"\"></option>\r\n                                    <option value=\"1\">Date Select for Day</option>\r\n                                    <option value=\"2\">Date Select for Week</option>\r\n                                    <option value=\"3\">Date Select for Month</option>\r\n                                    <option value=\"4\">Date Select for Year</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-5 col-md-5 col-sm-5\">\r\n                            <div class=\"md2-date\">\r\n                                <md2-datepicker placeholder=\"Date\" formControlName=\"mapDate\" type=\"datetime\" format=\"dd/MM/y HH:mm A\" startView=\"month\"></md2-datepicker>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"mt50\" style=\"margin-top:100px;\">\r\n                            <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"card-content col-md-12\">\r\n                                        <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"true\" [zoom]=\"zoom\" style=\"height:320px; position:relative; top:-35px;\">\r\n                                            <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\r\n                                        </agm-map>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                 </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_commonService__ = __webpack_require__("./src/app/services/commonService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_workOrderService__ = __webpack_require__("./src/app/services/workOrderService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
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
    function DashboardComponent(formBuilder, commonService, workOrderService, datepipe, router, http) {
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.workOrderService = workOrderService;
        this.datepipe = datepipe;
        this.router = router;
        this.http = http;
        this.latlongList = [];
        this.dashJPage = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            jobStatus: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            dateType: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            jobDate: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]()
        });
        this.dashMPage = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            mtStatus: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            mtType: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            mapDate: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]()
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        if (JSON.parse(sessionStorage.getItem('LogEmployee')) != null) {
            this.userProfile = JSON.parse(sessionStorage.getItem('LogEmployee'));
            this.latitude = -33.865143;
            this.longitude = 151.209900;
            this.zoom = 10;
        }
        else {
            this.router.navigate(['pages/login']);
        }
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
    };
    DashboardComponent.prototype.getJobMapForDashboard = function () {
        var _this = this;
        $('.loader').show();
        var jobDate = null;
        if (this.dashJPage.controls["jobDate"].value != null) {
            jobDate = this.datepipe.transform(this.dashJPage.controls["jobDate"].value, 'yyyy/MM/dd HH:mm:ss');
        }
        var contact = {
            UserID: this.userProfile.ID,
            Status: this.dashJPage.controls["jobStatus"].value,
            FromDate: jobDate,
            ToDate: null
        };
        this.workOrderService.GetJobMapForDashboard(this.commonService.baseApiUrl, contact).subscribe(function (data) {
            var dataUsers = JSON.stringify(data);
            var userParse = JSON.parse(dataUsers);
            var userInfo = JSON.parse(userParse["_body"]);
            _this.jobMapList = null;
            _this.latlongList = [];
            if (userInfo != null) {
                console.log(userInfo);
                _this.jobMapList = userInfo;
                $('.loader').hide();
                for (var _i = 0, _a = _this.jobMapList; _i < _a.length; _i++) {
                    var mapData = _a[_i];
                    _this.getLocation(mapData.AddressLine);
                }
            }
        });
    };
    DashboardComponent.prototype.getLocation = function (address) {
        var _this = this;
        this.latitude = null;
        this.longitude = null;
        if (address != null) {
            this.http.get("https://maps.google.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyDvC4D3B6FJvtMZLOfUsIUnpUxpET_uc-w").subscribe(function (data) {
                var dataMap = JSON.stringify(data);
                var mapParse = JSON.parse(dataMap);
                var mapList = JSON.parse(mapParse["_body"]);
                if (mapList != null) {
                    _this.latitude = mapList["results"][0]["geometry"]["location"]["lat"];
                    _this.longitude = mapList["results"][0]["geometry"]["location"]["lng"];
                    _this.zoom = 10;
                    var datalist = {
                        "latitude": _this.latitude,
                        "longitude": _this.longitude
                    };
                    _this.latlongList.push(datalist);
                }
            });
        }
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_commonService__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_3__services_workOrderService__["a" /* WorkOrderService */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["DatePipe"]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_2__services_commonService__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_3__services_workOrderService__["a" /* WorkOrderService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agm_js_marker_clusterer__ = __webpack_require__("./node_modules/@agm/js-marker-clusterer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_md2__ = __webpack_require__("./node_modules/md2/index.js");
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
                __WEBPACK_IMPORTED_MODULE_10_md2__["a" /* Md2DatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_10_md2__["b" /* MdNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_9__agm_js_marker_clusterer__["a" /* AgmJsMarkerClustererModule */]
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
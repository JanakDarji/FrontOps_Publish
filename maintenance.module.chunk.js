webpackJsonp(["maintenance.module"],{

/***/ "./src/app/maintenance/maintenance.component.html":
/***/ (function(module, exports) {

module.exports = "<title>Maintenance</title>\n<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-content\">\r\n                        <h3 class=\"card-title\">Maintenance</h3>\r\n                        <a class=\"btn btn-info pull-right\" href=\"/index.html#/create-maintenance\">Create Maintenance</a>\r\n                        <div class=\"row\"></div>\r\n                        <div class=\"toolbar\">\r\n                        </div>\r\n                        <div class=\"material-datatables table-responsive\">\r\n                            <table id=\"mTanceDatatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>{{ mTanceDataTable.mTanceHeaderRow[0] }}</th>\r\n                                        <th>{{ mTanceDataTable.mTanceHeaderRow[1] }}</th>\r\n                                        <th>{{ mTanceDataTable.mTanceHeaderRow[2] }}</th>\r\n                                        <th>{{ mTanceDataTable.mTanceHeaderRow[3] }}</th>\r\n                                        <th>{{ mTanceDataTable.mTanceHeaderRow[4] }}</th>\r\n                                        <th>{{ mTanceDataTable.mTanceHeaderRow[5] }}</th>\r\n                                        <th class=\"disabled-sorting text-right\">{{ mTanceDataTable.mTanceHeaderRow[6] }}</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let mTance of mTanceDataTable.mTanceDataRows\">\r\n                                        <td>{{ mTance.ID }}</td>\r\n                                        <td>{{ mTance.WorkOrderNo }}</td>\r\n                                        <td>{{ mTance.MTypeTitle }}</td>\r\n                                        <td>{{ mTance.Username }}</td>\r\n                                        <td>\r\n                                            <div *ngIf=\"mTance.MaintenanceDate\">{{ mTance.MaintenanceDate | date: 'dd/MM/yyyy'}} </div>\r\n                                            <div *ngIf=\"!mTance.MaintenanceDate\">{{ mTance.MaintenanceDate }} </div>\r\n                                        </td>\r\n                                        <td>{{ mTance.Status }}</td>\r\n                                        <td class=\"text-right\">\r\n                                            <button class=\"btn btn-simple btn-warning btn-icon edit\" (click)=\"goToCreateMaintenance(mTance.ID)\">\r\n                                                <i class=\"material-icons\">dvr</i>\r\n                                            </button>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\n"

/***/ }),

/***/ "./src/app/maintenance/maintenance.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/maintenance/maintenance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaintenanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_commonService__ = __webpack_require__("./src/app/services/commonService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_maintenanceService__ = __webpack_require__("./src/app/services/maintenanceService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MaintenanceComponent = /** @class */ (function () {
    function MaintenanceComponent(http, router, commonService, maintenanceService, activatedRoute) {
        this.http = http;
        this.router = router;
        this.commonService = commonService;
        this.maintenanceService = maintenanceService;
        this.activatedRoute = activatedRoute;
    }
    MaintenanceComponent.prototype.ngOnInit = function () {
        if (JSON.parse(sessionStorage.getItem('LogEmployee')) != null) {
            this.getMaintenanceDetails();
            this.mTanceDataTable = {
                mTanceHeaderRow: ['MT#', 'Job-Wo', 'Type', 'Raised By', 'Date', 'Status', 'Actions'],
                mTanceFooterRow: ['MT#', 'Job-Wo', 'Type', 'Raised By', 'Date', 'Status', 'Actions'],
                mTanceDataRows: this.maintenanceList
            };
        }
        else {
            this.router.navigate(['pages/login']);
        }
    };
    MaintenanceComponent.prototype.getMaintenanceDetails = function () {
        var _this = this;
        $('.loader').show();
        this.maintenanceService.GetMaintenanceDetails(this.commonService.baseApiUrl).subscribe(function (data) {
            var dataMtance = JSON.stringify(data);
            var mtanceParse = JSON.parse(dataMtance);
            var mTanceList = JSON.parse(mtanceParse["_body"]);
            _this.maintenanceList = null;
            if (mTanceList != null) {
                $("#mTanceDatatables").dataTable().fnDestroy();
                _this.maintenanceList = mTanceList;
                _this.mTanceDataTable = {
                    mTanceHeaderRow: ['MT#', 'Job-Wo', 'Type', 'Raised By', 'Date', 'Status', 'Actions'],
                    mTanceFooterRow: ['MT#', 'Job-Wo', 'Type', 'Raised By', 'Date', 'Status', 'Actions'],
                    mTanceDataRows: _this.maintenanceList
                };
                setTimeout(function () {
                    $("#mTanceDatatables").dataTable().fnDestroy();
                    $('#mTanceDatatables').DataTable({
                        'pagingType': 'full_numbers',
                        'lengthMenu': [[10, 25, 50, -1], [10, 25, 50, 'All']],
                        responsive: true,
                        language: {
                            search: '_INPUT_',
                            searchPlaceholder: 'Search records',
                        }
                    });
                    var tableWO = $('#mTanceDatatables').DataTable();
                    // Edit record
                    tableWO.on('click', '.edit', function () {
                    });
                    // Delete a record
                    tableWO.on('click', '.remove', function (e) {
                        var $trWO = $(this).closest('tr');
                        tableWO.row($trWO).remove().draw();
                        e.preventDefault();
                    });
                    // Like record
                    tableWO.on('click', '.like', function () {
                        alert('You clicked on Like button');
                    });
                }, 10);
                $('.loader').hide();
            }
        });
    };
    MaintenanceComponent.prototype.goToCreateMaintenance = function (mtId) {
        this.router.navigate(['create-maintenance'], { queryParams: { mtid: mtId } });
    };
    MaintenanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-maintenance',
            template: __webpack_require__("./src/app/maintenance/maintenance.component.html"),
            styles: [__webpack_require__("./src/app/maintenance/maintenance.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_commonService__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_5__services_maintenanceService__["a" /* MaintenanceService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_commonService__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_5__services_maintenanceService__["a" /* MaintenanceService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], MaintenanceComponent);
    return MaintenanceComponent;
}());



/***/ }),

/***/ "./src/app/maintenance/maintenance.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceModule", function() { return MaintenanceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__maintenance_routing__ = __webpack_require__("./src/app/maintenance/maintenance.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__maintenance_component__ = __webpack_require__("./src/app/maintenance/maintenance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_module__ = __webpack_require__("./src/app/app.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MaintenanceModule = /** @class */ (function () {
    function MaintenanceModule() {
    }
    MaintenanceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__maintenance_routing__["a" /* MaintenanceRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__app_module__["b" /* MaterialModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__maintenance_component__["a" /* MaintenanceComponent */]
            ]
        })
    ], MaintenanceModule);
    return MaintenanceModule;
}());



/***/ }),

/***/ "./src/app/maintenance/maintenance.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaintenanceRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__maintenance_component__ = __webpack_require__("./src/app/maintenance/maintenance.component.ts");

var MaintenanceRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__maintenance_component__["a" /* MaintenanceComponent */]
            }]
    }
];


/***/ })

});
//# sourceMappingURL=maintenance.module.chunk.js.map
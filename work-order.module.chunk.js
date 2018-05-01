webpackJsonp(["work-order.module"],{

/***/ "./src/app/work-order/work-order.component.html":
/***/ (function(module, exports) {

module.exports = "<title>Aspect Work-Order</title>\r\n<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-content\">\r\n                        <h3 class=\"card-title\">Work Orders For Job {{workOrdJobID}}</h3>\r\n                        <div class=\"toolbar\">\r\n                        </div>\r\n                        <div class=\"material-datatables table-responsive\">\r\n                            <table id=\"workDatatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>{{ workOrdDataTable.workOrdHeaderRow[0] }}</th>\r\n                                        <th>{{ workOrdDataTable.workOrdHeaderRow[1] }}</th>\r\n                                        <th>{{ workOrdDataTable.workOrdHeaderRow[2] }}</th>\r\n                                        <th>{{ workOrdDataTable.workOrdHeaderRow[3] }}</th>\r\n                                        <th>{{ workOrdDataTable.workOrdHeaderRow[4] }}</th>\r\n                                        <th class=\"disabled-sorting text-right\">{{ workOrdDataTable.workOrdHeaderRow[5] }}</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let workOrd of workOrdDataTable.workOrdDataRows\">\r\n                                        <td>{{ workOrd.WorkOrderNo }}</td>\r\n                                        <td>\r\n                                            <div *ngIf=\"workOrd.DateDue\">{{ workOrd.DateDue | date: 'dd/MM/yyyy'}} </div>\r\n                                            <div *ngIf=\"!workOrd.DateDue\">{{ workOrd.DateDue }} </div>\r\n                                        </td>\r\n                                        <td>{{ workOrd.Description }}</td>\r\n                                        <td>{{ workOrd.Status }}</td>\r\n                                        <td>\r\n                                            <div *ngIf=\"workOrd.IsAssigned == true;else isNO\">Y</div>\r\n                                            <ng-template #isNO>N</ng-template>\r\n                                        </td>\r\n                                        <td class=\"text-right\">\r\n                                            <span *ngIf=\"workOrd.IsRework == true\">\r\n                                                <button class=\"btn btn-behance btn-icon edit btn-xs\">\r\n                                                    M\r\n                                                </button>\r\n                                            </span>\r\n                                            <button class=\"btn btn-simple btn-warning btn-icon edit\" (click)=\"goToWorkAssignment(workOrd.WorkOrderNo)\">\r\n                                                <i class=\"material-icons\">dvr</i>\r\n                                            </button>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                            <div class=\"col-lg-12\">\r\n                                <div *ngIf=\"lastSyncDate == 'No Sync'\">\r\n                                    <label class=\"pull-right\">last Sync: {{wOlastSyncDate }}</label>\r\n                                </div>\r\n                                <div *ngIf=\"lastSyncDate != 'No Sync'\">\r\n                                    <label class=\"pull-right\">last Sync: {{wOlastSyncDate | date: 'dd/MM/yyyy HH:mm:ss' }}</label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/work-order/work-order.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/work-order/work-order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkOrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_commonService__ = __webpack_require__("./src/app/services/commonService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_workOrderService__ = __webpack_require__("./src/app/services/workOrderService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WorkOrderComponent = /** @class */ (function () {
    function WorkOrderComponent(http, router, commonService, workOrderService, activatedRoute) {
        this.http = http;
        this.router = router;
        this.commonService = commonService;
        this.workOrderService = workOrderService;
        this.activatedRoute = activatedRoute;
    }
    WorkOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (JSON.parse(sessionStorage.getItem('LogEmployee')) != null) {
            this.activatedRoute.queryParams.subscribe(function (params) {
                if (params['jobID'] == undefined) {
                    _this.router.navigate(['jobs']);
                }
                else {
                    _this.workOrdJobID = params['jobID'];
                    _this.getWorkOrderDetails(_this.workOrdJobID);
                    _this.workOrdDataTable = {
                        workOrdHeaderRow: ['WOs', 'Date Due', 'Description', 'Status', 'Assigned', 'Actions'],
                        workOrdFooterRow: ['WOs', 'Date Due', 'Description', 'Status', 'Assigned', 'Actions'],
                        workOrdDataRows: _this.workOrderList
                    };
                }
            });
        }
        else {
            this.router.navigate(['pages/login']);
        }
    };
    WorkOrderComponent.prototype.getWorkOrderDetails = function (jobID) {
        var _this = this;
        $('.loader').show();
        this.workOrderService.GetWorkOrdersByJobId(this.commonService.baseApiUrl, jobID).subscribe(function (data) {
            var dataWorkOrders = JSON.stringify(data);
            var workParse = JSON.parse(dataWorkOrders);
            var workOrderList = JSON.parse(workParse["_body"]);
            localStorage.removeItem("WorkOrdersList");
            _this.workOrderList = null;
            if (workOrderList != null) {
                if (workOrderList.length > 0) {
                    _this.wOlastSyncDate = workOrderList[0].WOSyncDate != null ? workOrderList[0].WOSyncDate : "No Sync";
                }
                $("#workDatatables").dataTable().fnDestroy();
                localStorage.setItem("WorkOrdersList", JSON.stringify(workOrderList));
                _this.workOrderList = workOrderList;
                _this.workOrdDataTable = {
                    workOrdHeaderRow: ['WOs', 'Date Due', 'Description', 'Status', 'Assigned', 'Actions'],
                    workOrdFooterRow: ['WOs', 'Date Due', 'Description', 'Status', 'Assigned', 'Actions'],
                    workOrdDataRows: _this.workOrderList
                };
                setTimeout(function () {
                    $("#workDatatables").dataTable().fnDestroy();
                    $('#workDatatables').DataTable({
                        'pagingType': 'full_numbers',
                        'lengthMenu': [[10, 25, 50, -1], [10, 25, 50, 'All']],
                        responsive: true,
                        language: {
                            search: '_INPUT_',
                            searchPlaceholder: 'Search records',
                        }
                    });
                    var tableWO = $('#workDatatables').DataTable();
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
    WorkOrderComponent.prototype.goToWorkAssignment = function (WorkId) {
        this.router.navigate(['job-assignment'], { queryParams: { workID: WorkId } });
    };
    WorkOrderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-work-order',
            template: __webpack_require__("./src/app/work-order/work-order.component.html"),
            styles: [__webpack_require__("./src/app/work-order/work-order.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_commonService__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_5__services_workOrderService__["a" /* WorkOrderService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_commonService__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_5__services_workOrderService__["a" /* WorkOrderService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], WorkOrderComponent);
    return WorkOrderComponent;
}());



/***/ }),

/***/ "./src/app/work-order/work-order.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkOrderModule", function() { return WorkOrderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__work_order_routing__ = __webpack_require__("./src/app/work-order/work-order.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__work_order_component__ = __webpack_require__("./src/app/work-order/work-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_module__ = __webpack_require__("./src/app/app.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var WorkOrderModule = /** @class */ (function () {
    function WorkOrderModule() {
    }
    WorkOrderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__work_order_routing__["a" /* WorkOrderRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__app_module__["b" /* MaterialModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__work_order_component__["a" /* WorkOrderComponent */]
            ]
        })
    ], WorkOrderModule);
    return WorkOrderModule;
}());



/***/ }),

/***/ "./src/app/work-order/work-order.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkOrderRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__work_order_component__ = __webpack_require__("./src/app/work-order/work-order.component.ts");

var WorkOrderRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__work_order_component__["a" /* WorkOrderComponent */]
            }]
    }
];


/***/ })

});
//# sourceMappingURL=work-order.module.chunk.js.map
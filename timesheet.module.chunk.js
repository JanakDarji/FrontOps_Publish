webpackJsonp(["timesheet.module"],{

/***/ "./src/app/timesheet/timesheet.component.html":
/***/ (function(module, exports) {

module.exports = "<title>Aspect Timesheet</title>\r\n\r\n<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-content\">\r\n                        <h3 class=\"card-title\">Timesheet</h3>\r\n                         <button class=\"btn btn-success\" (click)=\"approvedTimeSheet(true)\">Approve</button>\r\n                        <button class=\"btn btn-danger\" (click)=\"approvedTimeSheet(false)\">Reject</button>\r\n                        <div class=\"toolbar\">\r\n                        </div>\r\n                        <form [formGroup]=\"tSheetTrackrForm\">\r\n                            <div class=\"material-datatables table-responsive\">\r\n                                <table id=\"tSheetDatatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>{{ tSheetDataTable.tSheetHeaderRow[0] }}</th>\r\n                                            <th class=\"disabled-sorting\">\r\n                                                <div class=\"checkbox form-horizontal-checkbox\" style=\"top:-10px;left:10px;\">\r\n                                                    <label>\r\n                                                        <input type=\"checkbox\" formControlName=\"checkAll\" name=\"chkAll\" id=\"chkAll\" >\r\n                                                    </label>\r\n                                                </div>\r\n                                            </th>\r\n                                            <th>{{ tSheetDataTable.tSheetHeaderRow[1] }}</th>\r\n                                            <th>{{ tSheetDataTable.tSheetHeaderRow[2] }}</th>\r\n                                            <th>{{ tSheetDataTable.tSheetHeaderRow[3] }}</th>\r\n                                            <th class=\"disabled-sorting text-right\">{{ tSheetDataTable.tSheetHeaderRow[4] }}</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let tSheetTrack of tSheetDataTable.tSheetDataRows\">\r\n                                            <td>\r\n                                                {{ tSheetTrack.TimeTrackId }}\r\n                                                </td>\r\n                                            <td>\r\n                                                <div class=\"checkbox form-horizontal-checkbox\" style=\"top:-10px;left:10px;\">\r\n                                                    <label>\r\n                                                        <input type=\"checkbox\" formControlName=\"trackChk\" name=\"trackChk\" [id]=\"tSheetTrack.WorkOrderAssignmentId\" [value]=\"tSheetTrack.WorkOrderAssignmentId\">\r\n                                                        <!--[attr.disabled]=\"tSheetTrack.ApprovalStatus == null ? disabled :''\"-->\r\n                                                    </label>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td>{{ tSheetTrack.UserName }}</td>\r\n                                            <td>{{ tSheetTrack.WorkOrderNo }}</td>\r\n                                            <td>{{tSheetTrack.TotalWorkTime}}</td>\r\n                                            <td class=\"text-right\">\r\n                                                    <ng-container *ngIf=\"tSheetTrack.ApprovalStatus == true\">\r\n                                                        <button class=\"btn btn-success btn-icon edit btn-xs\">\r\n                                                            Approve\r\n                                                        </button>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"tSheetTrack.ApprovalStatus == false\">\r\n                                                        <button class=\"btn btn-danger btn-icon edit btn-xs\">\r\n                                                            Reject\r\n                                                        </button>\r\n                                                    </ng-container>\r\n                                                <button class=\"btn btn-simple btn-warning btn-icon edit\" (click)=\"goToViewTimesheet(tSheetTrack.WorkOrderAssignmentId)\">\r\n                                                    <i class=\"material-icons\">dvr</i>\r\n                                                </button>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </form>                        \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/timesheet/timesheet.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/timesheet/timesheet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimesheetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_commonService__ = __webpack_require__("./src/app/services/commonService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_timesheetService__ = __webpack_require__("./src/app/services/timesheetService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TimesheetComponent = /** @class */ (function () {
    function TimesheetComponent(http, router, commonService, timesheetService, activatedRoute) {
        this.http = http;
        this.router = router;
        this.commonService = commonService;
        this.timesheetService = timesheetService;
        this.activatedRoute = activatedRoute;
        this.tSheetTrackrForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            trackChk: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            checkAll: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]()
        });
    }
    TimesheetComponent.prototype.ngOnInit = function () {
        if (JSON.parse(sessionStorage.getItem('LogEmployee')) != null) {
            this.getWorkOrderDetails();
            this.tSheetDataTable = {
                tSheetHeaderRow: ['#', 'Name', 'Work Order', 'Hours', 'Actions'],
                tSheetFooterRow: ['#', 'Name', 'Work Order', 'Hours', 'Actions'],
                tSheetDataRows: this.timesheetTrackList
            };
            $(document).ready(function () {
                $("#chkAll").click(function () {
                    $('input:checkbox').not(this).prop('checked', this.checked);
                    //$('input:checkbox:not(:checked)').prop('disabled', true);
                });
            });
        }
        else {
            this.router.navigate(['pages/login']);
        }
    };
    TimesheetComponent.prototype.selectAll = function (isChecked) {
        alert(isChecked);
        this.tSheetTrackrForm.controls["trackChk"].value.every(function (x) { return x.value == isChecked; });
    };
    TimesheetComponent.prototype.approvedTimeSheet = function (status) {
        var _this = this;
        $('.loader').show();
        var chckeValue = [];
        $('input[name="trackChk"]:checked').each(function () {
            chckeValue.push(this.id);
        });
        if (chckeValue.length > 0) {
            this.userProfile = JSON.parse(sessionStorage.getItem('LogEmployee'));
            var contact = {
                ApprovedBy: this.userProfile.ID,
                ApprovalStatus: status
            };
            this.timesheetService.UpdateTimesheetTrack(this.commonService.baseApiUrl, chckeValue, contact).subscribe(function (data) {
                var datatSheet = JSON.stringify(data);
                var tSheetParse = JSON.parse(datatSheet);
                var tSheetList = JSON.parse(tSheetParse["_body"]);
                if (tSheetList != null) {
                    $('.loader').hide();
                    _this.tSheetTrackrForm.reset();
                    _this.getWorkOrderDetails();
                }
            });
        }
        else {
            $('.loader').hide();
        }
    };
    TimesheetComponent.prototype.goToViewTimesheet = function (WorkId) {
        this.router.navigate(['view-timesheet'], { queryParams: { woasgtID: WorkId } });
    };
    TimesheetComponent.prototype.getWorkOrderDetails = function () {
        var _this = this;
        $('.loader').show();
        this.timesheetService.GetTimesheetTrackList(this.commonService.baseApiUrl).subscribe(function (data) {
            var dataWorkOrders = JSON.stringify(data);
            var workParse = JSON.parse(dataWorkOrders);
            var workOrderList = JSON.parse(workParse["_body"]);
            localStorage.removeItem("WorkOrdersList");
            _this.timesheetTrackList = null;
            if (workOrderList != null) {
                $("#tSheetDatatables").dataTable().fnDestroy();
                localStorage.setItem("WorkOrdersList", JSON.stringify(workOrderList));
                _this.timesheetTrackList = workOrderList;
                console.log(_this.timesheetTrackList);
                _this.tSheetDataTable = {
                    tSheetHeaderRow: ['#', 'Name', 'Work Order', 'Hours', 'Actions'],
                    tSheetFooterRow: ['#', 'Name', 'Work Order', 'Hours', 'Actions'],
                    tSheetDataRows: _this.timesheetTrackList
                };
                setTimeout(function () {
                    $("#tSheetDatatables").dataTable().fnDestroy();
                    $('#tSheetDatatables').DataTable({
                        'pagingType': 'full_numbers',
                        'lengthMenu': [[10, 25, 50, -1], [10, 25, 50, 'All']],
                        responsive: true,
                        language: {
                            search: '_INPUT_',
                            searchPlaceholder: 'Search records',
                        }
                    });
                    var tableTSheet = $('#tSheetDatatables').DataTable();
                    // Edit record
                    tableTSheet.on('click', '.edit', function () {
                    });
                    // Delete a record
                    tableTSheet.on('click', '.remove', function (e) {
                        var $trTT = $(this).closest('tr');
                        tableTSheet.row($trTT).remove().draw();
                        e.preventDefault();
                    });
                    // Like record
                    tableTSheet.on('click', '.like', function () {
                        alert('You clicked on Like button');
                    });
                }, 10);
                $('.loader').hide();
            }
        });
    };
    TimesheetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-timesheet',
            template: __webpack_require__("./src/app/timesheet/timesheet.component.html"),
            styles: [__webpack_require__("./src/app/timesheet/timesheet.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_commonService__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_6__services_timesheetService__["a" /* TimesheetService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_commonService__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_6__services_timesheetService__["a" /* TimesheetService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], TimesheetComponent);
    return TimesheetComponent;
}());



/***/ }),

/***/ "./src/app/timesheet/timesheet.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesheetModule", function() { return TimesheetModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__timesheet_routing__ = __webpack_require__("./src/app/timesheet/timesheet.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__timesheet_component__ = __webpack_require__("./src/app/timesheet/timesheet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_module__ = __webpack_require__("./src/app/app.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TimesheetModule = /** @class */ (function () {
    function TimesheetModule() {
    }
    TimesheetModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__timesheet_routing__["a" /* TimesheetRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__app_module__["b" /* MaterialModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__timesheet_component__["a" /* TimesheetComponent */]
            ]
        })
    ], TimesheetModule);
    return TimesheetModule;
}());



/***/ }),

/***/ "./src/app/timesheet/timesheet.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimesheetRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timesheet_component__ = __webpack_require__("./src/app/timesheet/timesheet.component.ts");

var TimesheetRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__timesheet_component__["a" /* TimesheetComponent */]
            }]
    }
];


/***/ })

});
//# sourceMappingURL=timesheet.module.chunk.js.map
webpackJsonp(["timesheet.module"],{

/***/ "./src/app/timesheet/timesheet.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<title>Aspect Timesheet</title>-->\n<title>Timesheet</title>\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-content\">\n                        <h3 class=\"card-title\">Timesheet</h3>\n                        <div class=\"row\">\n                            <div class=\"col-md-3\" [hidden]=\"hidebuttons\">\n                                <!--<button class=\"btn btn-success\" (click)=\"approvedTimeSheet(true)\">Approve</button>\n                                <button class=\"btn btn-danger\" (click)=\"approvedTimeSheet(false)\">Reject</button>-->\n                                <button class=\"btn btn-success\" (click)=\"approveRejectTimesheet(1)\">Approve</button>\n                                <button class=\"btn btn-danger\" (click)=\"approveRejectTimesheet(2)\">Reject</button>\n                            </div>\n                            <div class=\"col-md-3\">\n                                <select id=\"Id\" #Id=\"ngModel\" class=\"form-control  dropdownview\" [(ngModel)]=\"selectedDivision\" (change)=\"getFilterRecord();\">\n                                    <option [ngValue]=\"undefined\" selected=\"\">--- Select Division ---</option>\n                                    <option *ngFor=\"let k of divisionList\" value={{k.ID}}>\n                                        {{k.Name}}\n                                    </option>\n                                </select>\n                            </div>\n                            <div class=\"col-md-3\">\n                                <md2-datepicker placeholder=\"Weekend Date\" name=\"weekenddate\" [(ngModel)]=\"selectedDate\" (change)=\"getFilterRecord();\" format=\"dd-MM-y\" type=\"date\" startView=\"month\"></md2-datepicker>\n                            </div>\n                            <div class=\"col-md-3\">\n                                <select id=\"Id\" #Id=\"ngModel\" class=\"form-control  dropdownview\" [(ngModel)]=\"selectedStatusId\" (change)=\"getFilterRecord();\">\n                                    <option [ngValue]=\"0\" selected=\"\">All</option>\n                                    <option [ngValue]=\"k.Id\" *ngFor=\"let k of statusList\">\n                                        {{k.Name}}\n                                    </option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"toolbar\">\n                        </div>\n                        <form [formGroup]=\"tSheetTrackrForm\">\n                            <div class=\"material-datatables table-responsive\">\n                                <table id=\"tSheetDatatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                                    <thead>\n                                        <tr>\n                                            <th>{{ tSheetDataTable.tSheetHeaderRow[0] }}</th>\n                                            <th class=\"disabled-sorting\">\n                                                <div class=\"checkbox form-horizontal-checkbox\" style=\"top:-10px;left:10px;\">\n                                                    <label>\n                                                        <input type=\"checkbox\" formControlName=\"checkAll\" name=\"chkAll\" id=\"chkAll\">\n                                                    </label>\n                                                </div>\n                                            </th>\n                                            <th>{{ tSheetDataTable.tSheetHeaderRow[1] }}</th>\n                                            <th>{{ tSheetDataTable.tSheetHeaderRow[2] }}</th>\n                                            <th>{{ tSheetDataTable.tSheetHeaderRow[3] }}</th>\n                                            <th>{{ tSheetDataTable.tSheetHeaderRow[4] }}</th>\n                                            <th class=\"disabled-sorting text-right\">{{ tSheetDataTable.tSheetHeaderRow[5] }}</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let tSheetTrack of tSheetDataTable.tSheetDataRows\">\n                                            <td>\n                                                {{ tSheetTrack.TimeTrackId }}\n                                            </td>\n                                            <td>\n                                                <div class=\"checkbox form-horizontal-checkbox\" style=\"top:-10px;left:10px;\">\n                                                    <label>\n                                                        <input type=\"checkbox\" formControlName=\"trackChk\" name=\"trackChk\" [id]=\"tSheetTrack.TimeTrackId\" [value]=\"tSheetTrack.TimeTrackId\">\n                                                        <!--[attr.disabled]=\"tSheetTrack.ApprovalStatus == null ? disabled :''\"-->\n                                                    </label>\n                                                </div>\n                                            </td>\n                                            <td>{{ tSheetTrack.UserName }}</td>\n                                            <td>{{ tSheetTrack.WorkOrderNo }}</td>\n                                            <td>{{tSheetTrack.TotalWorkTime}}</td>\n                                            <td>\r\n                                                <ng-container *ngIf=\"tSheetTrack.IsCompleted == true\">Completed</ng-container>\r\n                                                <ng-container *ngIf=\"!tSheetTrack.IsCompleted\">Not Completed</ng-container>\r\n                                            </td>\n                                            <td class=\"text-right\">\n                                                <ng-container *ngIf=\"tSheetTrack.ApprovalStatus == 1\">\n                                                    <button class=\"btn btn-success btn-icon edit btn-xs\">\n                                                        Approved\n                                                    </button>\n                                                </ng-container>\n                                                <ng-container *ngIf=\"tSheetTrack.ApprovalStatus == 2\">\n                                                    <button class=\"btn btn-danger btn-icon edit btn-xs\">\n                                                        Rejected\n                                                    </button>\n                                                </ng-container>\n                                                <ng-container *ngIf=\"tSheetTrack.ApprovalStatus == 3\">\n                                                    <button class=\"btn btn-warning btn-icon edit btn-xs\">\n                                                        Pending\n                                                    </button>\n                                                </ng-container>\n\n                                                <button class=\"btn btn-simple btn-warning btn-icon edit\" (click)=\"goToViewTimesheet(tSheetTrack.WorkOrderAssignmentId,tSheetTrack.TimeTrackId)\">\n                                                    <i class=\"material-icons\">dvr</i>\n                                                </button>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_divisionService__ = __webpack_require__("./src/app/services/divisionService.ts");
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
    function TimesheetComponent(http, router, commonService, timesheetService, divisionService, activatedRoute) {
        this.http = http;
        this.router = router;
        this.commonService = commonService;
        this.timesheetService = timesheetService;
        this.divisionService = divisionService;
        this.activatedRoute = activatedRoute;
        this.selectedStatusId = 3;
        this.hidebuttons = true;
        this.tSheetTrackrForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            trackChk: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            checkAll: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]()
        });
    }
    TimesheetComponent.prototype.ngOnInit = function () {
        if (JSON.parse(sessionStorage.getItem('LogEmployee')) != null) {
            this.getStatusList();
            this.getDivisions();
            // this.getWorkOrderDetails();
            this.getFilterRecord();
            this.tSheetDataTable = {
                tSheetHeaderRow: ['#', 'Name', 'Work Order', 'Hours', 'WO Status', 'Actions'],
                tSheetFooterRow: ['#', 'Name', 'Work Order', 'Hours', 'WO Status', 'Actions'],
                tSheetDataRows: this.timesheetTrackList
            };
            $(document).ready(function () {
                $("#chkAll").click(function () {
                    $('input:checkbox').not(this).prop('checked', this.checked);
                    //$('input:checkbox:not(:checked)').prop('disabled', true);
                });
            });
            var loggedinUserRoleId = JSON.parse(sessionStorage.getItem('LogEmployee')).RoleId;
            if (loggedinUserRoleId == 6 || loggedinUserRoleId == 1) {
                this.hidebuttons = false;
            }
            else {
                this.hidebuttons = true;
            }
        }
        else {
            this.router.navigate(['pages/login']);
        }
    };
    TimesheetComponent.prototype.selectAll = function (isChecked) {
        //alert(isChecked);
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
    TimesheetComponent.prototype.goToViewTimesheet = function (WorkId, ID) {
        this.router.navigate(['view-timesheet'], { queryParams: { woasgtID: WorkId, tsheetDailyID: ID } });
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
                    tSheetHeaderRow: ['#', 'Name', 'Work Order', 'Hours', 'WO Status', 'Actions'],
                    tSheetFooterRow: ['#', 'Name', 'Work Order', 'Hours', 'WO Status', 'Actions'],
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
    TimesheetComponent.prototype.getDivisions = function () {
        var _this = this;
        this.userProfile = JSON.parse(sessionStorage.getItem('LogEmployee'));
        return this.divisionService.GetDivisionByUser(this.commonService.baseApiUrl, this.userProfile.ID).subscribe(function (data) {
            var dataEmp = JSON.stringify(data);
            var empParse = JSON.parse(dataEmp);
            _this.divisionList = JSON.parse(empParse["_body"]);
        });
    };
    TimesheetComponent.prototype.getStatusList = function () {
        this.data = [
            {
                "Id": 1,
                "Name": "Approved"
            },
            {
                "Id": 2,
                "Name": "Rejected"
            },
            {
                "Id": 3,
                "Name": "Pending"
            }
        ];
        this.statusList = this.data;
    };
    TimesheetComponent.prototype.getFilterRecord = function () {
        var _this = this;
        var lastdate;
        this.userProfile = JSON.parse(sessionStorage.getItem('LogEmployee'));
        if (this.selectedDate != null) {
            lastdate = this.selectedDate.toDateString();
        }
        $('.loader').show();
        this.timesheetService.GetTimesheetTrackFilteredList(this.commonService.baseApiUrl, this.selectedStatusId + "-" + this.userProfile.ID, lastdate, this.selectedDivision).subscribe(function (data) {
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
                    tSheetHeaderRow: ['#', 'Name', 'Work Order', 'Hours', 'WO Status', 'Actions'],
                    tSheetFooterRow: ['#', 'Name', 'Work Order', 'Hours', 'WO Status', 'Actions'],
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
    TimesheetComponent.prototype.approveRejectTimesheet = function (status) {
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
                ApprovedStatus: status,
            };
            this.timesheetService.ApproveRejectTimesheet(this.commonService.baseApiUrl, chckeValue, contact).subscribe(function (data) {
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
    TimesheetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-timesheet',
            template: __webpack_require__("./src/app/timesheet/timesheet.component.html"),
            styles: [__webpack_require__("./src/app/timesheet/timesheet.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_commonService__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_6__services_timesheetService__["a" /* TimesheetService */], __WEBPACK_IMPORTED_MODULE_7__services_divisionService__["a" /* DivisionService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_commonService__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_6__services_timesheetService__["a" /* TimesheetService */],
            __WEBPACK_IMPORTED_MODULE_7__services_divisionService__["a" /* DivisionService */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_md2__ = __webpack_require__("./node_modules/md2/index.js");
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
                __WEBPACK_IMPORTED_MODULE_6__app_module__["b" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_7_md2__["a" /* Md2DatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_7_md2__["b" /* MdNativeDateModule */]
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
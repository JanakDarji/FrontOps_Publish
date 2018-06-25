webpackJsonp(["maintenance.module"],{

/***/ "./src/app/maintenance/maintenance.component.html":
/***/ (function(module, exports) {

module.exports = "<title>Maintenance</title>\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-content\">\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <h3 class=\"card-title\">Maintenance</h3>\r\n                            </div>\r\n                        </div>\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\" *ngIf=\"userProfile.RoleId == 1 || userProfile.RoleId == 2 || userProfile.RoleId == 6\">\r\n                                    <button class=\"btn btn-success\" (click)=\"approvedMaintenance('Approved')\">Approve</button>\r\n                                    <button class=\"btn btn-danger\" (click)=\"approvedMaintenance('Rejected')\">Reject</button>\r\n                                    <button class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"resetMaintenance()\">Complete</button>\r\n                                </div>\r\n                                <div *ngIf=\"isAddAccess == true\" [ngClass]=\"userProfile.RoleId == 1 || userProfile.RoleId == 2 || userProfile.RoleId == 6?'col-md-6':'col-md-12'\">\r\n                                    <a class=\"btn btn-facebook btn-round btn-success pull-right\" href=\"/index.html#/create-maintenance\">Create Maintenance</a>\r\n                                </div>\r\n                            </div>\n                        <div class=\"row\"></div>\n                        <div class=\"toolbar\">\n                        </div>\n                        <form [formGroup]=\"mTanceForm\">\r\n                            <div class=\"material-datatables table-responsive\">\r\n                                <table id=\"mTanceDatatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>{{ mTanceDataTable.mTanceHeaderRow[0] }}</th>\r\n                                            <th class=\"disabled-sorting\" *ngIf=\"userProfile.RoleId == 1 || userProfile.RoleId == 2 || userProfile.RoleId == 6\">\r\n                                                <div class=\"checkbox form-horizontal-checkbox\" style=\"top:-10px;left:10px;\">\r\n                                                    <label>\r\n                                                        <input type=\"checkbox\" formControlName=\"checkAll\" name=\"chkAll\" id=\"chkAll\">\r\n                                                    </label>\r\n                                                </div>\r\n                                            </th>\r\n                                            <th>{{ mTanceDataTable.mTanceHeaderRow[1] }}</th>\r\n                                            <th>{{ mTanceDataTable.mTanceHeaderRow[2] }}</th>\r\n                                            <th>{{ mTanceDataTable.mTanceHeaderRow[3] }}</th>\r\n                                            <th>{{ mTanceDataTable.mTanceHeaderRow[4] }}</th>\r\n                                            <th>{{ mTanceDataTable.mTanceHeaderRow[5] }}</th>\r\n                                            <th class=\"disabled-sorting text-right\">{{ mTanceDataTable.mTanceHeaderRow[6] }}</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let mTance of mTanceDataTable.mTanceDataRows\">\r\n                                            <td>{{ mTance.ID }}</td>\r\n                                            <td *ngIf=\"userProfile.RoleId == 1 || userProfile.RoleId == 2 || userProfile.RoleId == 6\">\r\n                                                <div class=\"checkbox form-horizontal-checkbox\" style=\"top:-10px;left:10px;\">\r\n                                                    <label>\r\n                                                        <input type=\"checkbox\" formControlName=\"trackChk\" [attr.disabled]=\"mTance.Status != 'Draft'? disabled: ''\" name=\"trackChk\" [id]=\"mTance.ID\" [value]=\"mTance.ID\">\r\n                                                    </label>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td>{{ mTance.WorkOrderNo }}</td>\r\n                                            <td>{{ mTance.MTypeTitle }}</td>\r\n                                            <td>{{ mTance.Username }}</td>\r\n                                            <td>\r\n                                                <div *ngIf=\"mTance.MaintenanceDate\">{{ mTance.MaintenanceDate | date: 'dd/MM/yyyy'}} </div>\r\n                                                <div *ngIf=\"!mTance.MaintenanceDate\">{{ mTance.MaintenanceDate }} </div>\r\n                                            </td>\r\n                                            <td>{{ mTance.Status }}</td>\r\n                                            <td class=\"text-right\">\r\n                                                <button *ngIf=\"isEditAccess == true\" class=\"btn btn-simple btn-warning btn-icon edit\" (click)=\"goToCreateMaintenance(mTance.ID)\">\r\n                                                    <i class=\"material-icons\">dvr</i>\r\n                                                </button>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </form>\r\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n        <form [formGroup]=\"mtComPage\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"> <i class=\"material-icons\">clear</i> </button>\r\n                    <h4 class=\"modal-title\">Complete Maintenance</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-12\">\r\n                            <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(mtComPage, 'comDesc')\">\r\n                                <label class=\"control-label\">Description</label>\r\n                                <textarea class=\"form-control\" rows=\"4\" cols=\"50\" id=\"comDesc\" formControlName=\"comDesc\"></textarea>\r\n                                <app-field-error-display [displayError]=\"isFieldValid(mtComPage, 'comDesc')\" errorMsg=\"Description is required.\"> </app-field-error-display>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <br />\r\n                        <div class=\"pull-right\">\r\n                            <button type=\"submit\" id=\"btnSubmit\" class=\"btn btn-success\" (click)=\"completeMaintenance('Completed')\">Submit</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_commonService__ = __webpack_require__("./src/app/services/commonService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_maintenanceService__ = __webpack_require__("./src/app/services/maintenanceService.ts");
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








var MaintenanceComponent = /** @class */ (function () {
    function MaintenanceComponent(http, router, commonService, maintenanceService, activatedRoute, formBuilder) {
        this.http = http;
        this.router = router;
        this.commonService = commonService;
        this.maintenanceService = maintenanceService;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.mTanceForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            trackChk: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            checkAll: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]()
        });
        this.mtComPage = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            comDesc: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
        });
    }
    MaintenanceComponent.prototype.isFieldValid = function (form, field) {
        return !form.get(field).valid && form.get(field).touched;
    };
    MaintenanceComponent.prototype.displayFieldCss = function (form, field) {
        return {
            'has-error': this.isFieldValid(form, field),
            'has-feedback': this.isFieldValid(form, field)
        };
    };
    MaintenanceComponent.prototype.ngOnInit = function () {
        if (JSON.parse(sessionStorage.getItem('LogEmployee')) != null) {
            this.userProfile = JSON.parse(sessionStorage.getItem('LogEmployee'));
            var userRoleAccess = JSON.parse(sessionStorage.getItem('AccessRole'));
            if (userRoleAccess != null) {
                var jobAccess = userRoleAccess.filter(function (job) { return job.ModuleName == "MAINTENANCE"; });
                if (jobAccess != null) {
                    this.isViewAccess = (jobAccess[0].AddAccess == true || jobAccess[0].EditAccess == true ? true : jobAccess[0].ViewAccess);
                    this.isAddAccess = jobAccess[0].AddAccess;
                    this.isEditAccess = jobAccess[0].EditAccess;
                    this.isSyncAccess = jobAccess[0].SyncAccess;
                }
            }
            this.getMaintenanceDetails();
            this.mTanceDataTable = {
                mTanceHeaderRow: ['MT#', 'Job-Wo', 'Type', 'Raised By', 'Date', 'Status', 'Actions'],
                mTanceFooterRow: ['MT#', 'Job-Wo', 'Type', 'Raised By', 'Date', 'Status', 'Actions'],
                mTanceDataRows: this.maintenanceList
            };
            $(document).ready(function () {
                $("#chkAll").click(function () {
                    $('input:checkbox').not(':disabled').prop('checked', this.checked);
                    //$('input:checkbox').not(this).prop('checked', this.checked);
                });
            });
            this.mtComPage = this.formBuilder.group({
                comDesc: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
            });
        }
        else {
            this.router.navigate(['pages/login']);
        }
    };
    MaintenanceComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    MaintenanceComponent.prototype.approvedMaintenance = function (status) {
        var _this = this;
        $('.loader').show();
        var chckeValue = [];
        $('input[name="trackChk"]:checked').each(function () {
            chckeValue.push(this.id);
        });
        if (chckeValue.length > 0) {
            //this.userProfile = JSON.parse(sessionStorage.getItem('LogEmployee'));
            var contact = {
                Status: status
            };
            this.maintenanceService.UpdateMaintenanceStatus(this.commonService.baseApiUrl, chckeValue, contact).subscribe(function (data) {
                var datatSheet = JSON.stringify(data);
                var tSheetParse = JSON.parse(datatSheet);
                var tSheetList = JSON.parse(tSheetParse["_body"]);
                if (tSheetList != null) {
                    $('.loader').hide();
                    _this.mTanceForm.reset();
                    _this.getMaintenanceDetails();
                }
            });
        }
        else {
            $('.loader').hide();
        }
    };
    MaintenanceComponent.prototype.resetMaintenance = function () {
        this.mtComPage.reset();
    };
    MaintenanceComponent.prototype.completeMaintenance = function (status) {
        var _this = this;
        if (this.mtComPage.valid) {
            __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()({
                title: 'Are you sure?',
                text: 'You will not be able to revert this!',
                type: 'warning',
                showCancelButton: true,
                confirmButtonClass: 'btn btn-success',
                cancelButtonClass: 'btn btn-danger',
                confirmButtonText: 'Yes, delete it!',
                buttonsStyling: false
            }).then(function () {
                $('.loader').show();
                var chckeValue = [];
                $('input[name="trackChk"]:checked').each(function () {
                    chckeValue.push(this.id);
                });
                if (chckeValue.length > 0) {
                    //this.userProfile = JSON.parse(sessionStorage.getItem('LogEmployee'));
                    var contact = {
                        Status: status,
                        CompleteDescription: _this.mtComPage.controls["comDesc"].value
                    };
                    _this.maintenanceService.UpdateMaintenanceStatus(_this.commonService.baseApiUrl, chckeValue, contact).subscribe(function (data) {
                        var datatSheet = JSON.stringify(data);
                        var tSheetParse = JSON.parse(datatSheet);
                        var tSheetList = JSON.parse(tSheetParse["_body"]);
                        if (tSheetList != null) {
                            $('#myModal').modal('toggle');
                            __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()({
                                title: 'Deleted!',
                                text: 'Maintenance has been complete.',
                                type: 'success',
                                confirmButtonClass: 'btn btn-success',
                                buttonsStyling: false
                            }).catch(__WEBPACK_IMPORTED_MODULE_7_sweetalert2___default.a.noop);
                            $('.loader').hide();
                            _this.mTanceForm.reset();
                            _this.getMaintenanceDetails();
                        }
                    });
                }
                else {
                    $('.loader').hide();
                }
            }).catch(__WEBPACK_IMPORTED_MODULE_7_sweetalert2___default.a.noop);
        }
        else {
            $('.loader').hide();
            this.validateAllFormFields(this.mtComPage);
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
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_commonService__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_6__services_maintenanceService__["a" /* MaintenanceService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_commonService__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_6__services_maintenanceService__["a" /* MaintenanceService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__field_error_display_field_error_display_module__ = __webpack_require__("./src/app/field-error-display/field-error-display.module.ts");
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
                __WEBPACK_IMPORTED_MODULE_6__app_module__["b" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_7__field_error_display_field_error_display_module__["a" /* FieldErrorDisplayModule */]
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
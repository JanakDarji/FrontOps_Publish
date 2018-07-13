webpackJsonp(["view-timesheet.module"],{

/***/ "./src/app/view-timesheet/view-timesheet.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<title>Aspect View Timesheet</title>-->\n<title>View Timesheet</title>\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-content\">\n                        <h3 class=\"card-title\">View Timesheet</h3>\n                        <div class=\"toolbar\">\n                        </div>\n                        <form [formGroup]=\"viewTimesheetPage\">\r\n                            <div class=\"tab-content form-group\">\r\n                                <div class=\"panel-body\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-5\">\r\n                                            \r\n                                            <div class=\"col-sm-3\" *ngIf=\"timesheetTrack.ApprovalStatus == 1\" style=\"padding-left:0px;\">\r\n                                                <button class=\"btn btn-success mat-raised-button\" style=\"margin-top:10px; box-shadow: none; cursor: default;\">\r\n                                                    <span class=\"mat-button-wrapper\">\r\n                                                        <span class=\"btn-label\">\r\n                                                            <i class=\"material-icons\">check</i>\r\n                                                        </span>\r\n                                                        Approved\r\n                                                    </span>\r\n                                                </button>\r\n                                            </div>\r\n                                            <div class=\"col-sm-2\" *ngIf=\"timesheetTrack.ApprovalStatus == 2\" style=\"padding-left:0px;\">\r\n                                                <button class=\"btn btn-danger mat-raised-button\" style=\"margin-top:10px;box-shadow: none; cursor: default;\">\r\n                                                    <span class=\"mat-button-wrapper\">\r\n                                                        <span class=\"btn-label\">\r\n                                                            <i class=\"material-icons\">close</i>\r\n                                                        </span>\r\n                                                        Rejected\r\n                                                     </span>\r\n                                                </button>\r\n                                                </div>\r\n                                                <div class=\"col-sm-2 pull-right\" [hidden]=\"!showhidecontrol\">\r\n                                                    <button class=\"btn btn-success\" (click)=\"saveTimesheet()\" data-target=\"#myModal\">Save</button>\r\n                                                </div>\r\n                                                <span [hidden]=\"hidebuttons\">\r\n                                                    <button class=\"btn pull-right\" [ngClass]=\"showhidecontrol ? 'btn-danger' : 'btn-blue-grey'\" (click)=\"toggleControl()\">{{showhidecontrol ? \"Cancel\" : \"Edit\"}}</button>\r\n                                                </span>\r\n                                                <table class=\"table table-responsive table-bordered table-hover\" style=\"float:left !important\">\r\n                                                    <tbody>\r\n                                                        <tr>\r\n                                                            <td>Name</td>\r\n                                                            <td>{{ timesheetTrack.UserName }} </td>\r\n                                                        </tr>\r\n                                                        <tr>\r\n                                                            <td>WorkOrder No <!--Job Number--></td>\r\n                                                            <td>\r\n                                                                {{timesheetTrack.WorkOrderNo }}\r\n                                                                <!--{{timesheetTrack.JobNumber }}-->\r\n                                                            </td>\r\n                                                        </tr>\r\n                                                        <!--<tr>\r\n                    <td> Site </td>\r\n                    <td>--</td>\r\n                </tr>-->\r\n                                                        <tr>\r\n                                                            <td>Start Time</td>\r\n                                                            <td id=\"showStartTime\" [hidden]=\"showhidecontrol\">{{timesheetTrack.StartTime | date: 'dd-MM-yyyy hh:mm a'}}</td>\r\n                                                            <td id=\"EditStartTime\" [hidden]=\"!showhidecontrol\">\r\n                                                                <!--<div class=\"label-floating\" [ngClass]=\"displayFieldCss(viewTimesheetPage, 'endtime')\">-->\r\n                                                                <md2-datepicker placeholder=\"{{timesheetTrack.StartTime | date: 'dd-MM-yyyy hh:mm a'}}\" formControlName=\"starttime\" name=\"starttime\" format=\"dd-MM-y HH:mm A\" type=\"datetime\" startView=\"month\"></md2-datepicker> <!---->\r\n                                                                <app-field-error-display [displayError]=\"isFieldValid(viewTimesheetPage, 'starttime')\" errorMsg=\"Start Time is required.\">\r\n                                                                </app-field-error-display>\r\n                                                                <!--</div>-->\r\n                                                            </td>\r\n                                                        </tr>\r\n                                                        <tr>\r\n                                                            <td>End Time</td>\r\n                                                            <td [hidden]=\"showhidecontrol\">{{timesheetTrack.EndTime | date: 'dd-MM-yyyy hh:mm a'}}</td>\r\n                                                            <td [hidden]=\"!showhidecontrol\">\r\n                                                                <!--<div class=\"label-floating\" [ngClass]=\"displayFieldCss(viewTimesheetPage, 'endtime')\">-->\r\n                                                                <md2-datepicker placeholder=\"{{timesheetTrack.EndTime | date: 'dd-MM-yyyy hh:mm a'}}\" formControlName=\"endtime\" name=\"endtime\" format=\"dd-MM-y HH:mm A\" type=\"datetime\" startView=\"month\"></md2-datepicker> <!---->\r\n                                                                <app-field-error-display [displayError]=\"isFieldValid(viewTimesheetPage, 'endtime')\" errorMsg=\"End Time should be greater than Start Time.\">\r\n                                                                </app-field-error-display>\r\n                                                                <!--</div>-->\r\n                                                            </td>\r\n                                                        </tr>\r\n                                                        <tr>\r\n                                                            <td>Break Time</td>\r\n                                                            <td [hidden]=\"showhidecontrol\">{{timesheetTrack.TotalBreakTime }}</td>\r\n                                                            <td [hidden]=\"!showhidecontrol\">\r\n                                                                <label #oldbrektime>{{timesheetTrack.TotalBreakTime}}</label>\r\n                                                                <span>\r\n                                                                    <input type=\"text\" placeholder=\"Hour(s)\" name=\"breakhour\" formControlName=\"breakhour\" id=\"txthour\" maxlength=\"2\" size=\"2\" style=\"width:100px;\" class=\"number-decimal-only\" /> <!---->\r\n                                                                    <input type=\"text\" placeholder=\"Minutes(s)\" name=\"breakminute\" formControlName=\"breakminute\" id=\"txtminute\" maxlength=\"2\" size=\"2\" style=\"width:100px;\" class=\"number-decimal-only\" /> <!---->\r\n                                                                    <app-field-error-display [displayError]=\"isFieldValid(viewTimesheetPage, 'breakhour')\" errorMsg=\"Break hour required.\">\r\n                                                                    </app-field-error-display>\r\n                                                                    <app-field-error-display [displayError]=\"isFieldValid(viewTimesheetPage, 'breakminute')\" errorMsg=\"Break minute required.\">\r\n                                                                    </app-field-error-display>\r\n                                                                </span>\r\n                                                                <!--<md2-datepicker placeholder=\"{{timesheetTrack.TotalBreakTime}}\" name=\"breaktime\" format=\"HH:mm\" type=\"time\" startView=\"clock\"></md2-datepicker>-->\r\n                                                            </td>\r\n                                                        </tr>\r\n                                                        <tr>\r\n                                                            <td>Total Time</td>\r\n                                                            <td>{{timesheetTrack.TotalWorkTime }}</td>\r\n                                                        </tr>\r\n                                                    </tbody>\r\n                                                </table>\r\n                                            </div>\r\n                                        <div class=\"col-sm-6\" style=\"margin-top:60px;\">\r\n                                            <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"true\" [zoom]=\"zoom\" style=\"height:325px;\">\r\n                                                <agm-marker-cluster *ngFor=\"let point of timesheetLatLong\">\r\n                                                    <ng-container *ngIf=\"point.StartLat != null || point.StartLong != null\">\r\n                                                        <agm-marker [latitude]=\"point.StartLat\" [longitude]=\"point.StartLong\" iconUrl=\"../../assets/img/startwo.png\">\r\n                                                            <agm-info-window>Start Time - {{point.StartTime | date: 'dd/MM/yyyy HH:mm:ss'}}</agm-info-window>\r\n                                                        </agm-marker>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"point.EndLat || point.EndLong\">\r\n                                                        <agm-marker [latitude]=\"point.EndLat\" [longitude]=\"point.EndLong\" iconUrl=\"../../assets/img/endwo.png\">\r\n                                                            <agm-info-window>End Time - {{point.EndTime | date: 'dd/MM/yyyy HH:mm:ss'}}</agm-info-window>\r\n                                                        </agm-marker>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"point.StartBreakLat || point.StartBreakLong\">\r\n                                                        <agm-marker [latitude]=\"point.StartBreakLat\" [longitude]=\"point.StartBreakLong\" iconUrl=\"../../assets/img/breakwo.png\">\r\n                                                            <agm-info-window>Break Start Time - {{point.BreakStartTime | date: 'dd/MM/yyyy HH:mm:ss'}}</agm-info-window>\r\n                                                        </agm-marker>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"point.EndBreakLat || point.EndBreakLong\">\r\n                                                        <agm-marker [latitude]=\"point.EndBreakLat\" [longitude]=\"point.EndBreakLong\" iconUrl=\"../../assets/img/endbreak.png\">\r\n                                                            <agm-info-window>Break End Time - {{point.BreakEndTime | date: 'dd/MM/yyyy HH:mm:ss'}}</agm-info-window>\r\n                                                        </agm-marker>\r\n                                                    </ng-container>\r\n                                                </agm-marker-cluster>\r\n                                            </agm-map>\r\n                                        </div>\r\n                                        <div class=\"col-sm-1\" style=\"margin-top:60px; padding-left:0px;\">\r\n                                            <h6><img src=\"../../assets/img/startwo.png\" style=\"height:22px;width:22px !important;\" /><b>Start</b></h6>\r\n                                            <h6><img src=\"../../assets/img/breakwo.png\" style=\"height:22px;width:22px !important;\" /><b>Break</b></h6>\r\n                                            <h6><img src=\"../../assets/img/endwo.png\" style=\"height:22px;width:22px !important;\" /><b>Stop</b></h6>\r\n                                            <h6><img src=\"../../assets/img/endbreak.png\" style=\"height:22px;width:22px !important;\" /><b>Job Site</b></h6>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-5\" [hidden]=\"hidebuttons\">\r\n                                            <div [hidden]=\"showhidecontrol\">\r\n                                                <button class=\"btn btn-success\" (click)=\"approveRejectTimesheet(1)\" data-target=\"#myModal\">Approve</button>\r\n                                                <button class=\"btn btn-danger\" (click)=\"approveRejectTimesheet(2)\">Reject</button>\r\n                                                <!--<button class=\"btn btn-blue-grey pull-right\" (click)=\"goToTimesheet()\">Back</button>-->\r\n                                            </div>\r\n                                            <!--<div class=\"dropdown\">\r\n                            <button href=\"javascript:void(0);\" class=\"dropdown-toggle btn btn-primary btn-round btn-block\" data-toggle=\"dropdown\">\r\n                                Approve/Reject\r\n                                <b class=\"caret\"></b>\r\n                            </button>\r\n                            <ul class=\"dropdown-menu dropdown-menu-left\">\r\n                                <li>\r\n                                    <a data-toggle=\"modal\" (click)=\"approvedTimeSheet(true)\" data-target=\"#myModal\">Approve</a>\r\n                                </li>\r\n                                <li>\r\n                                    <a id=\"synUsers\" (click)=\"approvedTimeSheet(false)\">Reject</a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>-->\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/view-timesheet/view-timesheet.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/view-timesheet/view-timesheet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewTimesheetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_commonService__ = __webpack_require__("./src/app/services/commonService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_timesheetService__ = __webpack_require__("./src/app/services/timesheetService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__forms_validationforms_password_validator_component__ = __webpack_require__("./src/app/forms/validationforms/password-validator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ViewTimesheetComponent = /** @class */ (function () {
    function ViewTimesheetComponent(http, router, commonService, timesheetService, activatedRoute, formBuilder, datepipe, dateAdapter) {
        this.http = http;
        this.router = router;
        this.commonService = commonService;
        this.timesheetService = timesheetService;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.datepipe = datepipe;
        this.dateAdapter = dateAdapter;
        this.timesheetTrack = {};
        this.showhidecontrol = false;
        this.hidebuttons = true;
        this.times = { year: 31557600, month: 2629746, day: 86400, hour: 3600, minute: 60, second: 1 };
        this.viewTimesheetPage = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            starttime: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            endtime: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            breakhour: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            breakminute: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]()
        });
        dateAdapter.setLocale('en-GB');
    }
    ViewTimesheetComponent.prototype.isFieldValid = function (form, field) {
        return !form.get(field).valid && form.get(field).touched;
    };
    ViewTimesheetComponent.prototype.displayFieldCss = function (form, field) {
        return {
            'has-error': this.isFieldValid(form, field),
            'has-feedback': this.isFieldValid(form, field)
        };
    };
    ViewTimesheetComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (JSON.parse(sessionStorage.getItem('LogEmployee')) != null) {
            this.activatedRoute.queryParams.subscribe(function (params) {
                if (params['woasgtID'] == undefined) {
                    _this.router.navigate(['timesheet']);
                }
                else {
                    //var woAsgtID = params['woasgtID'];
                    _this.workOrdAsgtID = params['woasgtID'];
                    _this.tsheetDailyId = params['tsheetDailyID'];
                    //this.getWorkOrderDetails(this.workOrdAsgtID);
                    //this.getTimesheetDaily(this.workOrdAsgtID);
                    _this.getWorkOrderDetails(_this.tsheetDailyId);
                    _this.getTimesheetDaily(_this.tsheetDailyId);
                    var loggedinUserRoleId = JSON.parse(sessionStorage.getItem('LogEmployee')).RoleId;
                    if (loggedinUserRoleId == 6 || loggedinUserRoleId == 1) {
                        _this.hidebuttons = false;
                    }
                    else {
                        _this.hidebuttons = true;
                    }
                    //this.latitude = -33.865143
                    //this.longitude = 151.209900;
                    _this.zoom = 10;
                }
            });
            this.viewTimesheetPage = this.formBuilder.group({
                starttime: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                endtime: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                breakhour: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                breakminute: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            }, {
                validator: __WEBPACK_IMPORTED_MODULE_7__forms_validationforms_password_validator_component__["a" /* PasswordValidation */].StartEndDateDiffValidation // your validation method
            });
            $(document).ready(function () {
                //$('#txthour').val('00');
                //$('#txtminute').val('00');
                $('.number-decimal-only').keypress(function (e) {
                    var keyCode = e.which ? e.which : e.keyCode;
                    if ((keyCode != 46 || $(this).val().indexOf('.') != -1) &&
                        (keyCode < 48 || keyCode > 57))
                        return false;
                    return true;
                });
                $('#txthour').keyup(function () {
                    if ($(this).val() > 24) {
                        alert("Hours must be less or equal to 24.");
                        $(this).val('24');
                    }
                });
                $('#txtminute').keyup(function () {
                    if ($(this).val() > 59) {
                        alert("Minutes must be less than 60.");
                        $(this).val('59');
                    }
                    if ($(this).val() == 59 && $('#txthour').val() > 23) {
                        alert("Could not allowed break more than 24 hours.");
                        $('#txthour').val('23');
                    }
                });
                $("#txtminute").blur(function () {
                    var wtime = this.worktime;
                    //alert(wtime);
                });
            });
        }
        else {
            this.router.navigate(['pages/login']);
        }
    };
    ViewTimesheetComponent.prototype.showSwal = function (text) {
        __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()({
            type: 'success',
            text: text,
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-success'
        }).then(function () {
            //location.reload();
        });
    };
    ViewTimesheetComponent.prototype.showSwalAR = function (text) {
        __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()({
            type: 'success',
            text: text,
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-success'
        }).catch(__WEBPACK_IMPORTED_MODULE_8_sweetalert2___default.a.noop);
    };
    ViewTimesheetComponent.prototype.approvedTimeSheet = function (status) {
        //alert();
        this.userProfile = JSON.parse(sessionStorage.getItem('LogEmployee'));
        var contact = {
            ApprovedBy: this.userProfile.ID,
            ApprovalStatus: status
        };
        this.timesheetService.UpdateTimesheetTrack(this.commonService.baseApiUrl, this.workOrdAsgtID, contact).subscribe(function (data) {
            var datatSheet = JSON.stringify(data);
            var tSheetParse = JSON.parse(datatSheet);
            var tSheetList = JSON.parse(tSheetParse["_body"]);
            if (tSheetList != null) {
                $('.loader').hide();
            }
        });
    };
    ViewTimesheetComponent.prototype.goToTimesheet = function () {
        this.router.navigate(['timesheet']);
    };
    ViewTimesheetComponent.prototype.getWorkOrderDetails = function (asgtID) {
        var _this = this;
        $('.loader').show();
        this.timesheetService.GetTimesheetTrack(this.commonService.baseApiUrl, asgtID).subscribe(function (data) {
            var dataTsheet = JSON.stringify(data);
            var tSheetParse = JSON.parse(dataTsheet);
            var tSheetList = JSON.parse(tSheetParse["_body"]);
            if (tSheetList != null) {
                _this.timesheetTrack = tSheetList;
                _this.viewTimesheetPage.controls["starttime"].setValue(tSheetList.StartTime);
                _this.viewTimesheetPage.controls["endtime"].setValue(tSheetList.EndTime);
                var spiltTime = tSheetList.TotalBreakTime.split(":");
                _this.viewTimesheetPage.controls["breakhour"].setValue(spiltTime != null ? spiltTime[0] : '00');
                _this.viewTimesheetPage.controls["breakminute"].setValue(spiltTime != null ? spiltTime[1] : '00');
                $('.loader').hide();
            }
            else {
                $('.loader').hide();
            }
        });
    };
    ViewTimesheetComponent.prototype.getTimesheetDaily = function (asgtID) {
        var _this = this;
        $('.loader').show();
        this.timesheetService.GetTimesheetDaily(this.commonService.baseApiUrl, asgtID).subscribe(function (data) {
            var dataTsheet = JSON.stringify(data);
            var tSheetParse = JSON.parse(dataTsheet);
            var tSheetList = JSON.parse(tSheetParse["_body"]);
            if (tSheetList != null && tSheetList.length > 0) {
                var logLat = tSheetList.filter(function (map) { return map.StartLat && map.StartLong; });
                _this.latitude = logLat[0].StartLat;
                _this.longitude = logLat[0].StartLong;
                _this.timesheetLatLong = tSheetList;
                $('.loader').hide();
            }
            else {
                $('.loader').hide();
            }
        });
    };
    ViewTimesheetComponent.prototype.toggleControl = function () {
        this.showhidecontrol = !this.showhidecontrol;
    };
    ViewTimesheetComponent.prototype.saveTimesheet = function () {
        var _this = this;
        var starttime = this.datepipe.transform(this.viewTimesheetPage.controls["starttime"].value, 'yyyy/MM/dd HH:mm:ss');
        var endtime = this.datepipe.transform(this.viewTimesheetPage.controls["endtime"].value, 'yyyy/MM/dd HH:mm:ss');
        if (this.viewTimesheetPage.valid) {
            var contact = {
                StartTime: starttime,
                EndTime: endtime,
                WorkOrderAssignmentID: this.workOrdAsgtID,
                ID: this.tsheetDailyId
            };
            //let breaktimeinseconds: any = this.transform((this.breakhour * 3600) + (this.breakminute * 60));
            var breaktimeinseconds = this.viewTimesheetPage.controls["breakhour"].value + '-' + this.viewTimesheetPage.controls["breakminute"].value;
            this.timesheetService.UpdateTimesheetDaily(this.commonService.baseApiUrl, this.workOrdAsgtID + ',' + breaktimeinseconds, contact).subscribe(function (data) {
                var datatSheet = JSON.stringify(data);
                var tSheetParse = JSON.parse(datatSheet);
                var tSheetList = JSON.parse(tSheetParse["_body"]);
                if (tSheetList == true) {
                    _this.showhidecontrol = false;
                    _this.getWorkOrderDetails(_this.tsheetDailyId);
                    _this.showSwal("Timesheet has been saved successfully");
                    $('.loader').hide();
                }
            });
        }
        else {
            $('.loader').hide();
            this.validateAllFormFields(this.viewTimesheetPage);
        }
    };
    ViewTimesheetComponent.prototype.approveRejectTimesheet = function (status) {
        var _this = this;
        this.userProfile = JSON.parse(sessionStorage.getItem('LogEmployee'));
        var contact = {
            ApprovedBy: this.userProfile.ID,
            ApprovedStatus: status,
            ID: this.tsheetDailyId
        };
        this.timesheetService.ApproveRejectTimesheet(this.commonService.baseApiUrl, this.tsheetDailyId, contact).subscribe(function (data) {
            var datatSheet = JSON.stringify(data);
            var tSheetParse = JSON.parse(datatSheet);
            var tSheetList = JSON.parse(tSheetParse["_body"]);
            if (tSheetList != null) {
                if (status == 1) {
                    _this.showSwalAR("Timesheet has been approved!!");
                }
                else {
                    _this.showSwalAR("Timesheet has been rejected!!");
                }
                $('.loader').hide();
            }
        });
    };
    ViewTimesheetComponent.prototype.validateAllFormFields = function (formGroup) {
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
    ViewTimesheetComponent.prototype.setTime = function () {
        //this.viewTimesheetPage = this.formBuilder.group({
        //    starttime: [this.datepipe.transform(this.viewTimesheetPage.controls["starttime"].value, 'yyyy/MM/dd HH:mm:ss'), Validators.required],
        //    endtime: [this.datepipe.transform(this.viewTimesheetPage.controls["endtime"].value, 'yyyy/MM/dd HH:mm:ss'), Validators.required]
        //}, {
        //        validator: PasswordValidation.StartEndDateValidation // your validation method
        //    });
        //alert(this.selectedstartdate);
        //alert(this.selectedenddate);
        if (this.selectedstartdate != "undefined" && this.selectedenddate != "undefined") {
            if (this.selectedstartdate > this.selectedenddate) {
            }
            else {
                this.worktime = (this.selectedenddate - this.selectedstartdate).toString();
                if (this.worktime != 'NaN') {
                }
            }
        }
    };
    ViewTimesheetComponent.prototype.transform = function (seconds) {
        var time_string = '';
        var plural = '';
        for (var key in this.times) {
            if (Math.floor(seconds / this.times[key]) > 0) {
                if (Math.floor(seconds / this.times[key]) > 1) {
                    plural = 's';
                }
                else {
                    plural = '';
                }
                time_string += Math.floor(seconds / this.times[key]).toString() + ' ' + key.toString() + plural + ' ';
                seconds = seconds - this.times[key] * Math.floor(seconds / this.times[key]);
            }
        }
        return time_string;
    };
    ViewTimesheetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-timesheet',
            template: __webpack_require__("./src/app/view-timesheet/view-timesheet.component.html"),
            styles: [__webpack_require__("./src/app/view-timesheet/view-timesheet.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_commonService__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_5__services_timesheetService__["a" /* TimesheetService */], __WEBPACK_IMPORTED_MODULE_9__angular_common__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_commonService__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_5__services_timesheetService__["a" /* TimesheetService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_9__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* DateAdapter */]])
    ], ViewTimesheetComponent);
    return ViewTimesheetComponent;
}());



/***/ }),

/***/ "./src/app/view-timesheet/view-timesheet.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTimesheetModule", function() { return ViewTimesheetModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_timesheet_routing__ = __webpack_require__("./src/app/view-timesheet/view-timesheet.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_timesheet_component__ = __webpack_require__("./src/app/view-timesheet/view-timesheet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__agm_js_marker_clusterer__ = __webpack_require__("./node_modules/@agm/js-marker-clusterer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_md2__ = __webpack_require__("./node_modules/md2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__field_error_display_field_error_display_module__ = __webpack_require__("./src/app/field-error-display/field-error-display.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











//import { TimeDurationPickerModule } from 'angular2-time-duration-picker';
var ViewTimesheetModule = /** @class */ (function () {
    function ViewTimesheetModule() {
    }
    ViewTimesheetModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__view_timesheet_routing__["a" /* ViewTimesheetRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__app_module__["b" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_7__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyALhBWvI6EuL2Vul0ykYis51D_ckKtxVCc',
                    libraries: ["places"]
                }),
                __WEBPACK_IMPORTED_MODULE_8__agm_js_marker_clusterer__["a" /* AgmJsMarkerClustererModule */],
                __WEBPACK_IMPORTED_MODULE_9_md2__["a" /* Md2DatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_9_md2__["b" /* MdNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_10__field_error_display_field_error_display_module__["a" /* FieldErrorDisplayModule */]
                //TimeDurationPickerModule
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__view_timesheet_component__["a" /* ViewTimesheetComponent */]
            ]
        })
    ], ViewTimesheetModule);
    return ViewTimesheetModule;
}());



/***/ }),

/***/ "./src/app/view-timesheet/view-timesheet.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewTimesheetRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view_timesheet_component__ = __webpack_require__("./src/app/view-timesheet/view-timesheet.component.ts");

var ViewTimesheetRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__view_timesheet_component__["a" /* ViewTimesheetComponent */]
            }]
    }
];


/***/ })

});
//# sourceMappingURL=view-timesheet.module.chunk.js.map
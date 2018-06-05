webpackJsonp(["settings.module"],{

/***/ "./src/app/settings/maintenance/maintenance.component.html":
/***/ (function(module, exports) {

module.exports = "<title>Aspect  Maintenance</title>\r\n<style>\r\n    .tab-pane .table tbody > tr > td:first-child {\r\n        width: 0px !important;\r\n    }\r\n    /* USER PROFILE PAGE */\r\n    .card {\r\n        margin-top: 20px;\r\n        /*padding: 30px;*/\r\n        background-color: rgba(214, 224, 226, 0.2);\r\n        -webkit-border-top-left-radius: 5px;\r\n        -moz-border-top-left-radius: 5px;\r\n        border-top-left-radius: 5px;\r\n        -webkit-border-top-right-radius: 5px;\r\n        -moz-border-top-right-radius: 5px;\r\n        border-top-right-radius: 5px;\r\n        -webkit-box-sizing: border-box;\r\n        -moz-box-sizing: border-box;\r\n        box-sizing: border-box;\r\n    }\r\n\r\n        .card.hovercard {\r\n            position: relative;\r\n            padding-top: 0;\r\n            overflow: hidden;\r\n            text-align: center;\r\n            background-color: #fff;\r\n            background-color: rgba(255, 255, 255, 1);\r\n        }\r\n\r\n            .card.hovercard .card-background {\r\n                height: 130px;\r\n            }\r\n\r\n    .card-background img {\r\n        -webkit-filter: blur(25px);\r\n        -moz-filter: blur(25px);\r\n        -o-filter: blur(25px);\r\n        -ms-filter: blur(25px);\r\n        filter: blur(25px);\r\n        margin-left: -100px;\r\n        margin-top: -200px;\r\n        min-width: 130%;\r\n    }\r\n\r\n    .dropdownview {\r\n        -webkit-appearance: menulist-button;\r\n    }\r\n\r\n    .card.hovercard .useravatar {\r\n        position: absolute;\r\n        top: 15px;\r\n        left: 0;\r\n        right: 0;\r\n    }\r\n\r\n        .card.hovercard .useravatar img {\r\n            width: 100px;\r\n            height: 100px;\r\n            max-width: 100px;\r\n            max-height: 100px;\r\n            -webkit-border-radius: 50%;\r\n            -moz-border-radius: 50%;\r\n            border-radius: 50%;\r\n            border: 5px solid rgba(255, 255, 255, 0.5);\r\n        }\r\n\r\n    .card.hovercard .card-info {\r\n        position: absolute;\r\n        bottom: 14px;\r\n        left: 0;\r\n        right: 0;\r\n    }\r\n\r\n        .card.hovercard .card-info .card-title {\r\n            padding: 0 5px;\r\n            font-size: 20px;\r\n            line-height: 1;\r\n            color: #e91e63;\r\n            background-color: rgba(255, 255, 255, 0.1);\r\n            -webkit-border-radius: 4px;\r\n            -moz-border-radius: 4px;\r\n            border-radius: 4px;\r\n        }\r\n\r\n    .card.hovercard .card-info {\r\n        overflow: hidden;\r\n        font-size: 12px;\r\n        line-height: 20px;\r\n        color: white;\r\n        text-overflow: ellipsis;\r\n    }\r\n\r\n    .card.hovercard .bottom {\r\n        padding: 0 20px;\r\n        margin-bottom: 17px;\r\n    }\r\n\r\n    .btn-pref .btn {\r\n        -webkit-border-radius: 0 !important;\r\n    }\r\n\r\n    .panel-group .panel {\r\n        border-radius: 0;\r\n        box-shadow: none;\r\n        border-color: #EEEEEE;\r\n    }\r\n\r\n    .panel-default > .panel-heading {\r\n        padding: 0;\r\n        border-radius: 0;\r\n        color: #212121;\r\n        background-color: #FAFAFA;\r\n        border-color: #EEEEEE;\r\n    }\r\n\r\n    .panel-title {\r\n        font-size: 14px;\r\n    }\r\n\r\n        .panel-title > a {\r\n            display: block;\r\n            padding: 15px;\r\n            text-decoration: none;\r\n        }\r\n\r\n    .more-less {\r\n        float: right;\r\n        color: #212121;\r\n    }\r\n\r\n    .panel-default > .panel-heading + .panel-collapse > .panel-body {\r\n        border-top-color: #EEEEEE;\r\n    }\r\n\r\n    .bradius {\r\n        border-radius: 5px !important;\r\n    }\r\n\r\n    ::ng-deep .cdk-overlay-container {\r\n        z-index: 1045 !important;\r\n    }\r\n\r\n    .nav > li {\r\n        margin-left: 12px;\r\n    }\r\n\r\n\r\n    .card-title {\r\n        margin-left: 12px;\r\n        padding-top: 5px;\r\n    }\r\n       .switch {\n        position: relative;\n        display: inline-block;\n        width: 60px;\n        height: 34px;\n    }\n\n        .switch input {\n            display: none;\n        }\n\n    .slider {\n        position: absolute;\n        cursor: pointer;\n        top: 11px;\n        left: 0;\n        right: 0;\n        bottom: -12px;\n        background-color: #ccc;\n        -webkit-transition: .4s;\n        transition: .4s;\n    }\n\n        .slider:before {\n            position: absolute;\n            content: \"\";\n            height: 26px;\n            width: 26px;\n            left: 4px;\n            bottom: 4px;\n            background-color: white;\n            -webkit-transition: .4s;\n            transition: .4s;\n        }\n\n    input:checked + .slider {\n        background-color: #4caf50;\n    }\n\n    input:focus + .slider {\n        box-shadow: 0 0 1px darkviolet;\n    }\n\n    input:checked + .slider:before {\n        -webkit-transform: translateX(26px);\n        -ms-transform: translateX(26px);\n        transform: translateX(26px);\n    }\n\n    /* Rounded sliders */\n    .slider.round {\n        border-radius: 34px;\n    }\n\n        .slider.round:before {\n            border-radius: 50%;\n        }\r\n\r\n         tr.strikeout td:before {\n        content: \" \";\n        position: absolute;\n        top: auto; margin-top:8px;\n        left: 16px;\n        border-bottom: 1px solid #ff0000;\n        width: 80%;\n    }\n\n    #td-actions:before {\n        content: \" \";\n        position: absolute;\n        top: auto; margin-top:8px;\n        left: 16px;\n        border-bottom: none;\n        width: 80%;\n    }\r\n     .strike-through-text {\n        color: #ff0000;\n    }\r\n      .btn-wo {padding:5px !important;}\n    .cust-table .table  tbody > tr > td{padding: 0px 8px;}\r\n</style>\r\n\r\n<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"col-lg-12\" style=\"margin-bottom:20px;\">\r\n            <div class=\"row\">\r\n                <div style=\"background-color:white;\">\r\n                    <div class=\"card\" style=\"background-color:transparent !important;-webkit-box-shadow:none !important\">\r\n                        <div class=\"card-content\">\r\n                            <ul class=\"nav nav-pills nav-pills-rose\">\r\n                                <li class=\"active\"> <a href=\"#pill1\" data-toggle=\"tab\" class=\"bradius\">Maintenance Type</a> </li>\r\n                                <li> <a href=\"#pill2\" data-toggle=\"tab\" class=\"bradius\">Maintenance Part Type</a> </li>\r\n                            </ul>\r\n                            <div class=\"tab-content\">\r\n                                <div class=\"tab-pane active\" id=\"pill1\">\r\n                                    <div class=\"panel-body\">\r\n                                        <div class=\"col-lg-12\" style=\"background-color:white;\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-6 col-sm-6 col-xs-10\">\r\n                                                    <h4 class=\"card-title pull-left\"><b>Maintenance Type</b></h4>\r\n                                                </div>\r\n                                                <div class=\"col-md-6 col-sm-6 col-xs-2\">\r\n                                                    <!--<ng-container *ngIf=\"userProfile.RoleId == 1 || userProfile.RoleId == 2 || userProfile.RoleId == 6\">-->\r\n                                                    <button data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"resetForm()\" class=\"btn btn-simple btn-icon pull-right\" matTooltip=\"Maintenance Type\" [matTooltipPosition]=\"'left'\"> <i class=\"more-less glyphicon glyphicon-plus\"></i> </button>\r\n                                                    <!--</ng-container>-->\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-12\">\r\n                                                <div class=\"table-responsive cust-table\">\r\n                                                    <table class=\"table table-bordered table-hover\" style=\"float:left !important;margin-bottom:0\">\r\n                                                        <tr>\r\n                                                            <th>Title</th>\r\n                                                            <th>Description</th>\r\n                                                            <th>Status</th>\r\n                                                            <th></th>\r\n                                                        </tr>\r\n                                                        <tr *ngFor=\"let mType of mTypeList\" [ngClass]=\"mType.IsActive == true ? '':'strikeout strike-through-text'\">\r\n                                                            <td>{{mType.Title}}</td>\r\n                                                            <td>{{mType.Description}}</td>\r\n                                                            <td>\r\n                                                                    <div *ngIf=\"mType.IsActive == true; else inactive\">Active</div>\r\n                                                                    <ng-template #inactive>InActive</ng-template>\r\n                                                            </td>\r\n                                                            <td class=\"text-center\" id=\"td-actions\">\r\n                                                              <button class=\"btn btn-simple btn-warning btn-wo btn-icon edit\" (click)=\"viewMaintenanceType(mType.ID)\" data-toggle=\"modal\" data-target=\"#myModal\"><i class=\"material-icons\">dvr</i> </button>\r\n                                                              <i class=\"fa fa-close\" style=\"cursor: pointer;\" (click)=\"deleteMaintenanceType(mType.ID)\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\"></i>\r\n                                                            </td>\r\n                                                        </tr>\r\n                                                    </table>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"tab-pane\" id=\"pill2\">\r\n                                    <div class=\"panel-body\">\r\n                                        <div class=\"col-lg-12\" style=\"background-color:white;\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-6 col-sm-6 col-xs-10\">\r\n                                                    <h4 class=\"card-title pull-left\"><b>Maintenance Part Type</b></h4>\r\n                                                </div>\r\n                                                <div class=\"col-md-6 col-sm-6 col-xs-2\">\r\n                                                    <!--<ng-container *ngIf=\"userProfile.RoleId == 1 || userProfile.RoleId == 2 || userProfile.RoleId == 6\">-->\r\n                                                    <button data-toggle=\"modal\" data-target=\"#myPartModal\" (click)=\"resetPartForm()\" class=\"btn btn-simple btn-icon pull-right\" matTooltip=\"Maintenance Part Type\" [matTooltipPosition]=\"'left'\"> <i class=\"more-less glyphicon glyphicon-plus\"></i> </button>\r\n                                                    <!--</ng-container>-->\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-12\">\r\n                                                <div class=\"table-responsive cust-table\">\r\n                                                    <table class=\"table table-bordered table-hover\" style=\"float:left !important;margin-bottom:0\">\r\n                                                        <tr>\r\n                                                            <th>Title</th>\r\n                                                            <th>Description</th>\r\n                                                            <th>Status</th>\r\n                                                            <th></th>\r\n                                                        </tr>\r\n                                                        <tr *ngFor=\"let mPType of mPartTypeList\" [ngClass]=\"mPType.IsActive == true ? '':'strikeout strike-through-text'\">\r\n                                                            <td>{{mPType.Title}}</td>\r\n                                                            <td>{{mPType.Description}}</td>\r\n                                                            <td>\r\n                                                                <div *ngIf=\"mPType.IsActive == true; else inactive\">Active</div>\r\n                                                                <ng-template #inactive>InActive</ng-template>\r\n                                                            </td>\r\n                                                            <td class=\"text-center\" id=\"td-actions\">\r\n                                                                <button class=\"btn btn-simple btn-warning btn-wo btn-icon edit\" (click)=\"viewMaintenancePartType(mPType.ID)\" data-toggle=\"modal\" data-target=\"#myPartModal\"><i class=\"material-icons\">dvr</i> </button>\r\n                                                                <i class=\"fa fa-close\" style=\"cursor: pointer;\" (click)=\"deleteMaintenancePartType(mPType.ID)\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\"></i>\r\n                                                            </td>\r\n                                                        </tr>\r\n                                                    </table>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Classic Modal -->\r\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n        <form [formGroup]=\"formMaintenance\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"> <i class=\"material-icons\">clear</i> </button>\r\n                    <h4 class=\"modal-title\">Add Maintenance Type</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-12\">\r\n                            <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(formMaintenance, 'title')\">\r\n                                <label class=\"control-label\">Title</label>\r\n                                <input type=\"text\" class=\"form-control\" formControlName=\"title\">\r\n                                <app-field-error-display [displayError]=\"isFieldValid(formMaintenance, 'title')\" errorMsg=\"Title is required.\">\r\n                                </app-field-error-display>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-12\">\r\n                            <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(formMaintenance, 'description')\">\r\n                                <label class=\"control-label\">Description</label>\r\n                                <textarea class=\"form-control\" rows=\"4\" cols=\"50\" formControlName=\"description\"></textarea>\r\n                                <app-field-error-display [displayError]=\"isFieldValid(formMaintenance, 'description')\" errorMsg=\"Description is required.\">\r\n                                </app-field-error-display>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"pull-left\">\r\n                            <label class=\"switch\">\r\n                                <input type=\"checkbox\" formControlName=\"chkActive\" id=\"chkAct\">\r\n                                <span class=\"slider round\"></span>\r\n                            </label>\r\n                            </div>\r\n                            <div class=\"pull-right\">\r\n                                <button type=\"submit\" id=\"btnSubmit\" class=\"btn btn-success\" (click)=\"createMaintenanceType()\">Submit</button> <!--[disabled]=\"(isWoStatus == 'Created' || isWoStatus == null)? '':true\"-->\r\n                            </div>\r\n                        </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n<!--  End Modal -->\r\n\r\n<!-- Classic Modal -->\r\n<div class=\"modal fade\" id=\"myPartModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n        <form [formGroup]=\"formPartMaintenance\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"> <i class=\"material-icons\">clear</i> </button>\r\n                    <h4 class=\"modal-title\">Add Maintenance Part Type</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-12\">\r\n                            <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(formPartMaintenance, 'title')\">\r\n                                <label class=\"control-label\">Title</label>\r\n                                <input type=\"text\" class=\"form-control\" formControlName=\"title\">\r\n                                <app-field-error-display [displayError]=\"isFieldValid(formPartMaintenance, 'title')\" errorMsg=\"Title is required.\">\r\n                                </app-field-error-display>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-12\">\r\n                            <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(formPartMaintenance, 'description')\">\r\n                                <label class=\"control-label\">Description</label>\r\n                                <textarea class=\"form-control\" rows=\"4\" cols=\"50\" formControlName=\"description\"></textarea>\r\n                                <app-field-error-display [displayError]=\"isFieldValid(formPartMaintenance, 'description')\" errorMsg=\"Description is required.\">\r\n                                </app-field-error-display>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"pull-left\">\r\n                            <label class=\"switch\">\r\n                                <input type=\"checkbox\" formControlName=\"chkActive\" id=\"chkAct\">\r\n                                <span class=\"slider round\"></span>\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"pull-right\">\r\n                            <button type=\"submit\" id=\"btnSubmit\" class=\"btn btn-success\" (click)=\"createMaintenancePartType()\">Submit</button> <!--[disabled]=\"(isWoStatus == 'Created' || isWoStatus == null)? '':true\"-->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n<!--  End Modal -->"

/***/ }),

/***/ "./src/app/settings/maintenance/maintenance.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/settings/maintenance/maintenance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaintenanceMasterComponent; });
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








var MaintenanceMasterComponent = /** @class */ (function () {
    function MaintenanceMasterComponent(http, router, commonService, maintenanceService, activatedRoute, formBuilder) {
        this.http = http;
        this.router = router;
        this.commonService = commonService;
        this.maintenanceService = maintenanceService;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.formMaintenance = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            title: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            description: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            chkActive: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]()
        });
        this.formPartMaintenance = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            title: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            description: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            chkActive: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]()
        });
    }
    MaintenanceMasterComponent.prototype.showSwal = function (text) {
        __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()({
            type: 'success',
            text: text,
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-success'
        }).catch(__WEBPACK_IMPORTED_MODULE_7_sweetalert2___default.a.noop);
    };
    MaintenanceMasterComponent.prototype.isFieldValid = function (form, field) {
        return !form.get(field).valid && form.get(field).touched;
    };
    MaintenanceMasterComponent.prototype.displayFieldCss = function (form, field) {
        return {
            'has-error': this.isFieldValid(form, field),
            'has-feedback': this.isFieldValid(form, field)
        };
    };
    MaintenanceMasterComponent.prototype.ngOnInit = function () {
        this.getMaintenanceType();
        this.getMaintenancePartType();
        this.formMaintenance = this.formBuilder.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            chkActive: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
        this.formPartMaintenance = this.formBuilder.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            chkActive: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
    };
    MaintenanceMasterComponent.prototype.resetForm = function () {
        localStorage.removeItem("MTypeID");
        this.formMaintenance.reset();
        this.formMaintenance.controls["chkActive"].setValue(true);
    };
    MaintenanceMasterComponent.prototype.resetPartForm = function () {
        localStorage.removeItem("MPTypeID");
        this.formPartMaintenance.controls["chkActive"].setValue(true);
        this.formPartMaintenance.reset();
    };
    MaintenanceMasterComponent.prototype.createMaintenanceType = function () {
        var _this = this;
        if (this.formMaintenance.valid) {
            $('.loader').show();
            var contact = {
                ID: localStorage.getItem("MTypeID"),
                Title: this.formMaintenance.controls["title"].value,
                Description: this.formMaintenance.controls["description"].value,
                IsActive: this.formMaintenance.controls["chkActive"].value
            };
            return this.maintenanceService.CreateMaintenanceType(this.commonService.baseApiUrl, contact).subscribe(function (data) {
                var dataMtp = JSON.stringify(data);
                var mTpParse = JSON.parse(dataMtp);
                var mTpList = JSON.parse(mTpParse["_body"]);
                if (mTpList == true) {
                    $('.loader').hide();
                    $('#myModal').modal('toggle');
                    _this.getMaintenanceType();
                    if (localStorage.getItem("MTypeID") != '' && localStorage.getItem("MTypeID") != null) {
                        _this.showSwal("Maintenance Type updated successfully!");
                    }
                    else {
                        _this.showSwal("Maintenance Type created successfully!");
                    }
                }
            });
        }
        else {
            $('.loader').hide();
            this.validateAllFormFields(this.formMaintenance);
        }
    };
    MaintenanceMasterComponent.prototype.createMaintenancePartType = function () {
        var _this = this;
        if (this.formPartMaintenance.valid) {
            $('.loader').show();
            var contact = {
                ID: localStorage.getItem("MPTypeID"),
                Title: this.formPartMaintenance.controls["title"].value,
                Description: this.formPartMaintenance.controls["description"].value,
                IsActive: this.formPartMaintenance.controls["chkActive"].value
            };
            return this.maintenanceService.CreateMaintenancePartType(this.commonService.baseApiUrl, contact).subscribe(function (data) {
                var dataMtp = JSON.stringify(data);
                var mTpParse = JSON.parse(dataMtp);
                var mTpList = JSON.parse(mTpParse["_body"]);
                if (mTpList == true) {
                    $('.loader').hide();
                    $('#myPartModal').modal('toggle');
                    _this.getMaintenancePartType();
                    if (localStorage.getItem("MPTypeID") != '' && localStorage.getItem("MPTypeID") != null) {
                        _this.showSwal("Maintenance Part Type updated successfully!");
                    }
                    else {
                        _this.showSwal("Maintenance Part Type created successfully!");
                    }
                }
            });
        }
        else {
            $('.loader').hide();
            this.validateAllFormFields(this.formPartMaintenance);
        }
    };
    MaintenanceMasterComponent.prototype.getMaintenanceType = function () {
        var _this = this;
        $('.loader').show();
        return this.maintenanceService.GetMaintenanceType(this.commonService.baseApiUrl).subscribe(function (data) {
            var dataMtp = JSON.stringify(data);
            var mTpParse = JSON.parse(dataMtp);
            var mTpList = JSON.parse(mTpParse["_body"]);
            if (mTpList != null) {
                _this.mTypeList = mTpList;
                $('.loader').hide();
            }
        });
    };
    MaintenanceMasterComponent.prototype.getMaintenancePartType = function () {
        var _this = this;
        $('.loader').show();
        return this.maintenanceService.GetMaintenancePartType(this.commonService.baseApiUrl).subscribe(function (data) {
            var dataMptp = JSON.stringify(data);
            var mpTpParse = JSON.parse(dataMptp);
            var mpTpList = JSON.parse(mpTpParse["_body"]);
            if (mpTpList != null) {
                _this.mPartTypeList = mpTpList;
                $('.loader').hide();
            }
        });
    };
    MaintenanceMasterComponent.prototype.viewMaintenanceType = function (mTypeID) {
        localStorage.removeItem("MTypeID");
        var elems = document.querySelectorAll(".label-floating");
        if (elems != null) {
            [].forEach.call(elems, function (el) {
                el.classList.remove("is-empty");
            });
        }
        var mType = this.mTypeList.filter(function (item) { return item.ID == mTypeID; });
        localStorage.setItem("MTypeID", mType[0].ID);
        this.formMaintenance.controls["title"].setValue(mType[0].Title);
        this.formMaintenance.controls["description"].setValue(mType[0].Description);
        this.formMaintenance.controls["chkActive"].setValue(mType[0].IsActive);
    };
    MaintenanceMasterComponent.prototype.viewMaintenancePartType = function (mPTypeID) {
        localStorage.removeItem("MPTypeID");
        var elems = document.querySelectorAll(".label-floating");
        if (elems != null) {
            [].forEach.call(elems, function (el) {
                el.classList.remove("is-empty");
            });
        }
        var mType = this.mPartTypeList.filter(function (item) { return item.ID == mPTypeID; });
        localStorage.setItem("MPTypeID", mType[0].ID);
        this.formPartMaintenance.controls["title"].setValue(mType[0].Title);
        this.formPartMaintenance.controls["description"].setValue(mType[0].Description);
        this.formPartMaintenance.controls["chkActive"].setValue(mType[0].IsActive);
    };
    MaintenanceMasterComponent.prototype.deleteMaintenanceType = function (mTypeID) {
        var _this = this;
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
            _this.maintenanceService.DeleteMaintenanceType(_this.commonService.baseApiUrl, mTypeID).subscribe(function (data) {
                var dataUsers = JSON.stringify(data);
                var userParse = JSON.parse(dataUsers);
                var userInfo = JSON.parse(userParse["_body"]);
                if (userInfo == true) {
                    _this.getMaintenanceType();
                    $('.loader').hide();
                    __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()({
                        title: 'Deleted!',
                        text: 'Maintenance Type been deleted.',
                        type: 'success',
                        confirmButtonClass: 'btn btn-success',
                        buttonsStyling: false
                    }).catch(__WEBPACK_IMPORTED_MODULE_7_sweetalert2___default.a.noop);
                }
            });
        }).catch(__WEBPACK_IMPORTED_MODULE_7_sweetalert2___default.a.noop);
    };
    MaintenanceMasterComponent.prototype.deleteMaintenancePartType = function (mTypeID) {
        var _this = this;
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
            _this.maintenanceService.DeleteMaintenancePartType(_this.commonService.baseApiUrl, mTypeID).subscribe(function (data) {
                var dataUsers = JSON.stringify(data);
                var userParse = JSON.parse(dataUsers);
                var userInfo = JSON.parse(userParse["_body"]);
                if (userInfo == true) {
                    _this.getMaintenancePartType();
                    $('.loader').hide();
                    __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()({
                        title: 'Deleted!',
                        text: 'Maintenance Part Type been deleted.',
                        type: 'success',
                        confirmButtonClass: 'btn btn-success',
                        buttonsStyling: false
                    }).catch(__WEBPACK_IMPORTED_MODULE_7_sweetalert2___default.a.noop);
                }
            });
        }).catch(__WEBPACK_IMPORTED_MODULE_7_sweetalert2___default.a.noop);
    };
    MaintenanceMasterComponent.prototype.validateAllFormFields = function (formGroup) {
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
    MaintenanceMasterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-maintenance',
            template: __webpack_require__("./src/app/settings/maintenance/maintenance.component.html"),
            styles: [__webpack_require__("./src/app/settings/maintenance/maintenance.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_commonService__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_6__services_maintenanceService__["a" /* MaintenanceService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_commonService__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_6__services_maintenanceService__["a" /* MaintenanceService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], MaintenanceMasterComponent);
    return MaintenanceMasterComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_routing__ = __webpack_require__("./src/app/settings/settings.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__maintenance_maintenance_component__ = __webpack_require__("./src/app/settings/maintenance/maintenance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__field_error_display_field_error_display_module__ = __webpack_require__("./src/app/field-error-display/field-error-display.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_module__ = __webpack_require__("./src/app/app.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__settings_routing__["a" /* SettingsRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_7__app_module__["b" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_6__field_error_display_field_error_display_module__["a" /* FieldErrorDisplayModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__maintenance_maintenance_component__["a" /* MaintenanceMasterComponent */],
            ]
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ }),

/***/ "./src/app/settings/settings.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__maintenance_maintenance_component__ = __webpack_require__("./src/app/settings/maintenance/maintenance.component.ts");

var SettingsRoutes = [
    {
        path: '',
        children: [{
                path: 'maintenance',
                component: __WEBPACK_IMPORTED_MODULE_0__maintenance_maintenance_component__["a" /* MaintenanceMasterComponent */]
            }]
    }
];


/***/ })

});
//# sourceMappingURL=settings.module.chunk.js.map
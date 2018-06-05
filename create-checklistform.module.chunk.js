webpackJsonp(["create-checklistform.module"],{

/***/ "./src/app/create-checklistform/create-checklistform.component.html":
/***/ (function(module, exports) {

module.exports = "\n<style>\n     .dropdownview {\n        -webkit-appearance: menulist-button;\n    }\n\n     /*Copied from user*/\n\n    :focus {\n        outline: none;\n    }\n\n    .radio {\n        -webkit-appearance: button;\n        -moz-appearance: button;\n        appearance: button;\n        border: 4px solid #ccc;\n        border-top-color: #bbb;\n        border-left-color: #bbb;\n        background: #fff;\n        width: 35px;\n        height: 35px;\n        border-radius: 50%;\n        outline: none !important;\n    }\n\n        .radio:checked {\n            border: 10px solid #e91e63;\n        }\n\n    .dropdownview {\n        -webkit-appearance: menulist-button;\n    }\n\n    #btnSync {\n        margin: 10px -17px;\n    }\n\n    .strike-through-text {\n        color: #ff0000;\n    }\n\n    td {\n        position: relative;\n    }\n\n    tr.strikeout td:before {\n        content: \" \";\n        position: absolute;\n        top: 47%;\n        left: 0;\n        border-bottom: 1px solid #ff0000;\n        width: 100%;\n    }\n\n    #td-actions:before {\n        content: \" \";\n        position: absolute;\n        top: 50%;\n        left: 0;\n        border-bottom: none;\n        width: 100%;\n    }\n\n    .switch {\n        position: relative;\n        display: inline-block;\n        width: 60px;\n        height: 34px;\n    }\n\n        .switch input {\n            display: none;\n        }\n\n    .slider {\n        position: absolute;\n        cursor: pointer;\n        top: 11px;\n        left: 0;\n        right: 0;\n        bottom: -12px;\n        background-color: #ccc;\n        -webkit-transition: .4s;\n        transition: .4s;\n    }\n\n        .slider:before {\n            position: absolute;\n            content: \"\";\n            height: 26px;\n            width: 26px;\n            left: 4px;\n            bottom: 4px;\n            background-color: white;\n            -webkit-transition: .4s;\n            transition: .4s;\n        }\n\n    input:checked + .slider {\n        background-color: #4caf50;\n    }\n\n    input:focus + .slider {\n        box-shadow: 0 0 1px darkviolet;\n    }\n\n    input:checked + .slider:before {\n        -webkit-transform: translateX(26px);\n        -ms-transform: translateX(26px);\n        transform: translateX(26px);\n    }\n\n    /* Rounded sliders */\n    .slider.round {\n        border-radius: 34px;\n    }\n\n        .slider.round:before {\n            border-radius: 50%;\n        }\n\n    .wizard-card .info-text {\n        text-align: center;\n        margin: -13px 0 30px !important;\n    }\n\n    .dropdown-menu li > a:hover {\n        background-color: #4caf50;\n        cursor: pointer;\n    }\n\n         /*Copied from user*/\n    .wizard-card {\n         min-height: auto;\n    }\n</style>\n\n<title>Create Form</title>\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-content\">\n                        <h3 class=\"card-title\">Create Form - {{chklistformStatus}}</h3>\n                        <div class=\"row\"> </div>\n                        <div class=\"toolbar\">\n                        </div>\n                        <form [formGroup]=\"chklistForm\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-3\">\n                                    <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(chklistForm, 'formname')\">\n                                        <label class=\"control-label\">\n                                            Form Name\n                                            <small>(required)</small>\n                                        </label>\n                                        <input name=\"formname\" class=\"form-control\" formControlName=\"formname\" />\n                                        <app-field-error-display [displayError]=\"isFieldValid(chklistForm, 'formname')\" errorMsg=\"Form Name is required\">\n                                        </app-field-error-display>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-3\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\">\n                                            Form Description\n                                        </label>\n                                        <input name=\"formDescription\" class=\"form-control\" formControlName=\"formDescription\" />\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-3\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\">\n                                            Select WO\n                                            <small>(if left blank will be available to all WOs)</small>\n                                        </label>\n                                        <input ngui-auto-complete formControlName=\"workOrdNo\" name=\"workOrdNo\" [source]=\"autoWorkOrdList\" value-property-name=\"ID\"\n                                               display-property-name=\"WorkOrderNo\" [list-formatter]=\"myListFormatter\" class=\"form-control\"\n                                               (valueChanged)=\"valueChanged($event)\" />\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-3 pull-right\">\n                                    <button class=\"btn btn-success\" (click)=\"createChecklistForm('3')\">Save</button>\n                                    <span [hidden]=\"hidebutton\">\n                                        <button class=\"btn btn-success\" (click)=\"createChecklistForm('1')\">Submit</button>\n                                    </span>\n                                </div>\n                            </div>\n\n                            <div class=\"row\" [hidden]=\"hideTask\">\n                                <div class=\"pull-right\">\n                                    <button data-toggle=\"modal\" data-target=\"#myModal\" class=\"btn btn-simple btn-icon pull-right\" matTooltip=\"Add new Task\" [matTooltipPosition]=\"'left'\"> <i class=\"more-less glyphicon glyphicon-plus\" style=\"color:black;\"></i> </button>\n                                </div>\n                               <div class=\"col-sm-12\" style=\"background-color:white;\">\n                                    <div class=\"table-responsive\">\n                                        <table class=\"table table-bordered  table-hover\" style=\"float:left !important;margin-bottom:0\">\n                                          <tr *ngFor=\"let task of checklistFormTaskList\">\n                                                <td>{{task.Task}}</td>\n                                                <td class=\"text-center\">\n                                                    <!--<button class=\"btn btn-simple btn-warning btn-icon edit\" (click)=\"viewWorkOrderAssignment(workAsg.ID)\" data-toggle=\"modal\" data-target=\"#myModal\">al i <i class=\"material-icons\">dvr</i> </button>-->\n                                                    <i class=\"fa fa-close\" style=\"cursor: pointer;color:red;\" (click)=\"deleteTask(task.ID)\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\"></i>\n                                                </td>\n                                            </tr>\n                                        </table>\n                                    </div>\n                                </div>\n                                <div class=\"pull-right\">\n                                    <label class=\"switch\">\n                                        <input type=\"checkbox\" [attr.disabled] =\"chklistformStatus == 'Draft' ? '' : null\" (change)=\"updateCheckListFormStatus()\" formControlName=\"chkActive\" id=\"chkAct\">\n                                        <span class=\"slider round\"></span>\n                                    </label>\n                                    <span class=\"switch-title\" style=\"font-size:18px;letter-spacing:1px;\">Form is <span id=\"divAct\">{{ chklistformStatus }}</span></span>\n                                   <br>\n                                </div>\n                                <br />\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Classic Modal -->\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\"  role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n        <form [formGroup]=\"formTask\">\n                    <div class=\"modal-content\">\n                        <div class=\"modal-header\">\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"> <i class=\"material-icons\">clear</i> </button>\n                            <h4 class=\"modal-title\">Add New Task</h4>\n                        </div>\n                        <div class=\"modal-body\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-12\">\n                                    <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(formTask, 'taskdetail')\">\n                                        <label class=\"control-label\">Add task details here</label>\n                                        <textarea class=\"form-control\" rows=\"4\" cols=\"50\" id=\"taskdetail\" formControlName=\"taskdetail\"></textarea>\n                                        <app-field-error-display [displayError]=\"isFieldValid(formTask, 'taskdetail')\" errorMsg=\"Task is required.\"> </app-field-error-display>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <br />\n                                <div class=\"pull-right\">\n                                    <button type=\"submit\" id=\"btnSubmit\" class=\"btn btn-success\" (click)=\"createNewTask()\">Submit</button> <!--[disabled]=\"(isWoStatus == 'Created' || isWoStatus == null)? '':true\"-->\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n            </form>\n    </div>\n</div>\n<!--  End Modal -->"

/***/ }),

/***/ "./src/app/create-checklistform/create-checklistform.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/create-checklistform/create-checklistform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateChecklistformComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_commonService__ = __webpack_require__("./src/app/services/commonService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_checklistformService__ = __webpack_require__("./src/app/services/checklistformService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_maintenanceService__ = __webpack_require__("./src/app/services/maintenanceService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CreateChecklistformComponent = /** @class */ (function () {
    function CreateChecklistformComponent(http, router, commonService, checklistformService, maintenanceService, activatedRoute, formBuilder) {
        this.http = http;
        this.router = router;
        this.commonService = commonService;
        this.checklistformService = checklistformService;
        this.maintenanceService = maintenanceService;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.chklistForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            formname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            formDescription: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            workOrdNo: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            taskdetail: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            chkActive: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]()
        });
        this.formTask = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            taskdetail: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]()
        });
        this.hidebutton = true;
        this.hideTask = true;
    }
    CreateChecklistformComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (JSON.parse(sessionStorage.getItem('LogEmployee')) != null) {
            this.userProfile = JSON.parse(sessionStorage.getItem('LogEmployee'));
            this.getWorkOrders();
            this.activatedRoute.queryParams.subscribe(function (params) {
                if (params['chkfomrid'] == undefined) {
                    _this.chklistformStatus = 'Draft';
                }
                else {
                    _this.chkfomrId = params['chkfomrid'];
                    _this.getChecklistForm(_this.chkfomrId);
                    _this.getTasks(_this.chkfomrId);
                    _this.hidebutton = false;
                    _this.hideTask = false;
                }
            });
            this.chklistForm = this.formBuilder.group({
                workOrdNo: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].nullValidator],
                formname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                formDescription: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                chkActive: null
            });
            this.formTask = this.formBuilder.group({
                taskdetail: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
            });
        }
        else {
            this.router.navigate(['pages/login']);
        }
    };
    CreateChecklistformComponent.prototype.ngAfterViewInit = function () {
    };
    CreateChecklistformComponent.prototype.addFieldValue = function () {
        this.fieldArray.push(this.newAttribute);
        this.newAttribute = {};
    };
    CreateChecklistformComponent.prototype.deleteFieldValue = function (index) {
        this.fieldArray.splice(index, 1);
    };
    CreateChecklistformComponent.prototype.isFieldValid = function (form, field) {
        return !form.get(field).valid && form.get(field).touched;
    };
    CreateChecklistformComponent.prototype.displayFieldCss = function (form, field) {
        return {
            'has-error': this.isFieldValid(form, field),
            'has-feedback': this.isFieldValid(form, field)
        };
    };
    CreateChecklistformComponent.prototype.showSwal = function (text) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()({
            type: 'success',
            text: text,
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-success'
        }).then(function () {
            _this.router.navigate(['checklist-form']);
        });
    };
    CreateChecklistformComponent.prototype.showStaySwal = function (text) {
        __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()({
            type: 'success',
            text: text,
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-success'
        }).catch(__WEBPACK_IMPORTED_MODULE_8_sweetalert2___default.a.noop);
    };
    CreateChecklistformComponent.prototype.getWorkOrders = function () {
        var _this = this;
        $('.loader').show();
        this.maintenanceService.GetWorkOrderForMaintenance(this.commonService.baseApiUrl, this.userProfile.ID).subscribe(function (data) {
            var dataUsers = JSON.stringify(data);
            var userParse = JSON.parse(dataUsers);
            var userInfo = JSON.parse(userParse["_body"]);
            if (userInfo != null) {
                _this.autoWorkOrdList = userInfo;
                $('.loader').hide();
            }
        });
    };
    CreateChecklistformComponent.prototype.createChecklistForm = function (status) {
        var _this = this;
        if (this.chklistForm.controls["workOrdNo"].value == undefined || this.chklistForm.controls["workOrdNo"].value == '') {
            this.selectedWOrd = undefined;
        }
        $('.loader').show();
        if (this.chklistForm.valid) {
            var crntUsr = JSON.parse(sessionStorage.getItem('LogEmployee'));
            var contact = {
                ID: this.chkfomrId == undefined ? '0' : this.chkfomrId,
                FormName: this.chklistForm.controls["formname"].value,
                Description: this.chklistForm.controls["formDescription"].value,
                WorkOrderID: this.selectedWOrd == undefined ? null : this.selectedWOrd.ID,
                LastUpdated: null,
                UpdatedBy: crntUsr.ID,
                Status: status
            };
            this.checklistformService.CreateCheckListForm(this.commonService.baseApiUrl, contact).subscribe(function (data) {
                var dataForm = JSON.stringify(data);
                var formParse = JSON.parse(dataForm);
                var formInfo = JSON.parse(formParse["_body"]);
                if (formInfo != -1) {
                    if (_this.chkfomrId != undefined) {
                        if (status == '1') {
                            var checkListData = {
                                ChecklistFormID: _this.chkfomrId,
                                WorkOrderID: _this.selectedWOrd == undefined ? null : _this.selectedWOrd.ID,
                                IsLatest: 1
                            };
                            _this.checklistformService.CreateChecklistFormWorkOrderAssignment(_this.commonService.baseApiUrl, _this.userProfile.ID, checkListData).subscribe(function (data) {
                                var dataAForm = JSON.stringify(data);
                                var formAParse = JSON.parse(dataAForm);
                                var formAInfo = JSON.parse(formAParse["_body"]);
                                if (formAInfo == true) {
                                    $('.loader').hide();
                                    _this.showSwal("Form updated successfully!!");
                                }
                            });
                        }
                    }
                    else {
                        _this.showSwal("Form created successfully!!");
                    }
                }
            });
        }
        else {
            $('.loader').hide();
            this.validateAllFormFields(this.chklistForm);
        }
    };
    CreateChecklistformComponent.prototype.updateCheckListFormStatus = function () {
        var _this = this;
        $('.loader').show();
        if (this.chklistForm.valid) {
            var crntUsr = JSON.parse(sessionStorage.getItem('LogEmployee'));
            var contact = {
                ID: this.chkfomrId,
                LastUpdated: null,
                UpdatedBy: crntUsr.ID,
                Status: this.chklistForm.controls["chkActive"].value == true ? 1 : 2
            };
            this.checklistformService.UpdateCheckListFormStatus(this.commonService.baseApiUrl, contact).subscribe(function (data) {
                var dataForm = JSON.stringify(data);
                var formParse = JSON.parse(dataForm);
                var formInfo = JSON.parse(formParse["_body"]);
                if (formInfo == true) {
                    $('.loader').hide();
                    _this.showSwal("Form updated successfully!!");
                }
            });
        }
        else {
            $('.loader').hide();
            this.validateAllFormFields(this.chklistForm);
        }
    };
    CreateChecklistformComponent.prototype.getChecklistForm = function (contact) {
        var _this = this;
        $('.loader').show();
        return this.checklistformService.GetCheckListFormByID(this.commonService.baseApiUrl, contact).subscribe(function (data) {
            var dataMt = JSON.stringify(data);
            var mTParse = JSON.parse(dataMt);
            var mTList = JSON.parse(mTParse["_body"]);
            if (mTList != null) {
                _this.checkformData = mTList;
                var elems = document.querySelectorAll(".label-floating");
                if (elems != null) {
                    [].forEach.call(elems, function (el) {
                        el.classList.remove("is-empty");
                    });
                }
                if (_this.checkformData.WorkOrderID != null) {
                    _this.filterItem(_this.checkformData.WorkOrderID);
                    _this.chklistForm.controls["workOrdNo"].setValue(_this.selectedWOrd.WorkOrderNo);
                }
                else {
                    _this.selectedWOrd = undefined;
                }
                _this.chklistForm.controls["formname"].setValue(_this.checkformData.FormName);
                _this.chklistForm.controls["formDescription"].setValue(_this.checkformData.Description);
                _this.chklistForm.controls["chkActive"].setValue(_this.checkformData.Status == 1 ? true : false);
                _this.chklistformStatus = _this.checkformData.Status == 1 ? "Active" : (_this.checkformData.Status == 2 ? "InActive" : "Draft");
                $('.loader').hide();
            }
        });
    };
    CreateChecklistformComponent.prototype.createNewTask = function () {
        var _this = this;
        $('.loader').show();
        if (this.formTask.valid) {
            var contact = {
                ID: 0,
                ChecklistFormVersionID: null,
                Task: this.formTask.controls["taskdetail"].value,
                TaskOrder: 0
            };
            console.log(contact);
            this.checklistformService.CreateNewTask(this.commonService.baseApiUrl, this.chkfomrId + '-' + JSON.parse(sessionStorage.getItem('LogEmployee')).ID, contact).subscribe(function (data) {
                var dataUsers = JSON.stringify(data);
                var userParse = JSON.parse(dataUsers);
                var userInfo = JSON.parse(userParse["_body"]);
                $('#myModal').modal('toggle');
                if (userInfo == 1) {
                    //this.getWorkOrderAssignment(localStorage.getItem("WorkOrderId"));
                    _this.showStaySwal("New Task Created.");
                    _this.getTasks(_this.chkfomrId);
                }
                else if (userInfo == "already") {
                    _this.showSwal("Work Order already assigned!!");
                }
                _this.formTask.reset();
                $('.loader').hide();
            });
        }
        else {
        }
    };
    CreateChecklistformComponent.prototype.deleteTask = function (taskId) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()({
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
            _this.checklistformService.DeleteCheckListFormTask(_this.commonService.baseApiUrl, taskId).subscribe(function (data) {
                var dataUsers = JSON.stringify(data);
                var userParse = JSON.parse(dataUsers);
                var userInfo = JSON.parse(userParse["_body"]);
                if (userInfo == true) {
                    _this.getTasks(_this.chkfomrId);
                    $('.loader').hide();
                    __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()({
                        title: 'Deleted!',
                        text: 'User has been deleted.',
                        type: 'success',
                        confirmButtonClass: 'btn btn-success',
                        buttonsStyling: false
                    }).catch(__WEBPACK_IMPORTED_MODULE_8_sweetalert2___default.a.noop);
                }
            });
        }).catch(__WEBPACK_IMPORTED_MODULE_8_sweetalert2___default.a.noop);
    };
    CreateChecklistformComponent.prototype.getTasks = function (chkformId) {
        var _this = this;
        $('.loader').show();
        this.checklistformService.GetTasksByFormID(this.commonService.baseApiUrl, chkformId).subscribe(function (data) {
            var datawAsg = JSON.stringify(data);
            var wAsgParse = JSON.parse(datawAsg);
            var wAsgList = JSON.parse(wAsgParse["_body"]);
            _this.checklistFormTaskList = null;
            if (wAsgList != null && wAsgList.length > 0) {
                _this.checklistFormTaskList = wAsgList;
            }
            else {
            }
        });
    };
    CreateChecklistformComponent.prototype.myListFormatter = function (data) {
        return data['WorkOrderNo'];
    };
    CreateChecklistformComponent.prototype.valueChanged = function (newVal) {
        this.selectedWOrd = newVal;
    };
    CreateChecklistformComponent.prototype.filterItem = function (value) {
        if (this.autoWorkOrdList == null) {
            this.getWorkOrders();
        }
        else {
            var dataMt = JSON.stringify(Object.assign([], this.autoWorkOrdList).filter(function (item) { return item.ID == value; }));
            var mTParse = JSON.parse(dataMt);
            this.selectedWOrd = mTParse[0];
            //this.selectedWOrd = mTParse[0].WorkOrderNo;
        }
    };
    CreateChecklistformComponent.prototype.validateAllFormFields = function (formGroup) {
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
    CreateChecklistformComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create-checklistform',
            template: __webpack_require__("./src/app/create-checklistform/create-checklistform.component.html"),
            styles: [__webpack_require__("./src/app/create-checklistform/create-checklistform.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_commonService__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_7__services_maintenanceService__["a" /* MaintenanceService */], __WEBPACK_IMPORTED_MODULE_6__services_checklistformService__["a" /* ChecklistFormService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_commonService__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_6__services_checklistformService__["a" /* ChecklistFormService */],
            __WEBPACK_IMPORTED_MODULE_7__services_maintenanceService__["a" /* MaintenanceService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], CreateChecklistformComponent);
    return CreateChecklistformComponent;
}());



/***/ }),

/***/ "./src/app/create-checklistform/create-checklistform.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateChecklistformModule", function() { return CreateChecklistformModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_checklistform_routing__ = __webpack_require__("./src/app/create-checklistform/create-checklistform.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_checklistform_component__ = __webpack_require__("./src/app/create-checklistform/create-checklistform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngui_auto_complete__ = __webpack_require__("./node_modules/@ngui/auto-complete/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngui_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__ngui_auto_complete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_auto_complete__ = __webpack_require__("./node_modules/ng2-auto-complete/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_auto_complete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__md_md_module__ = __webpack_require__("./src/app/md/md.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__field_error_display_field_error_display_module__ = __webpack_require__("./src/app/field-error-display/field-error-display.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var CreateChecklistformModule = /** @class */ (function () {
    function CreateChecklistformModule() {
    }
    CreateChecklistformModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__create_checklistform_routing__["a" /* CreateChecklistFormRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_9__md_md_module__["a" /* MdModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_module__["b" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_7__ngui_auto_complete__["NguiAutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_8_ng2_auto_complete__["Ng2AutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_10__field_error_display_field_error_display_module__["a" /* FieldErrorDisplayModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__create_checklistform_component__["a" /* CreateChecklistformComponent */]
            ]
        })
    ], CreateChecklistformModule);
    return CreateChecklistformModule;
}());



/***/ }),

/***/ "./src/app/create-checklistform/create-checklistform.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateChecklistFormRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__create_checklistform_component__ = __webpack_require__("./src/app/create-checklistform/create-checklistform.component.ts");

var CreateChecklistFormRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__create_checklistform_component__["a" /* CreateChecklistformComponent */]
            }]
    }
];


/***/ })

});
//# sourceMappingURL=create-checklistform.module.chunk.js.map
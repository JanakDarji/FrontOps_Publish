webpackJsonp(["checklist-form.module"],{

/***/ "./src/app/checklist-form/checklist-form.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\n     td {\n        position: relative;\n    }\n    tr.strikeout td:before {\n        content: \" \";\n        position: absolute;\n        top: 47%;\n        left: 0;\n        border-bottom: 1px solid #ff0000;\n        width: 100%;\n    }\n\n    #td-actions:before {\n        content: \" \";\n        position: absolute;\n        top: 50%;\n        left: 0;\n        border-bottom: none;\n        width: 100%;\n    }\n    .strike-through-text {\n        color: #ff0000;\n    }\n</style>\n<title>FORMS</title>\n\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-content\">\n                        <h3 class=\"card-title\">FORMS</h3>\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <a class=\"btn btn-success pull-right\" href=\"/index.html#/create-checklistform\">CREATE FORM</a>\n                            </div>\n                        </div>\n                        <div class=\"toolbar\">\n                        </div>\n                        <!--<form [formGroup]=\"chkListFormGroup\">-->\n                            <div class=\"material-datatables table-responsive\">\n                                <table id=\"chklistFormDataTable\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" style=\"width:100%\">\n                                    <thead>\n                                        <tr>\n                                            <th>{{ checklistFormDataTable.chklistFormHeaderRow[0] }}</th>\n                                            <th>{{ checklistFormDataTable.chklistFormHeaderRow[1] }}</th>\n                                            <th>{{ checklistFormDataTable.chklistFormHeaderRow[2] }}</th>\n                                            <th>{{ checklistFormDataTable.chklistFormHeaderRow[3] }}</th>\n                                            <th>{{ checklistFormDataTable.chklistFormHeaderRow[4] }}</th>\n                                            <th>{{ checklistFormDataTable.chklistFormHeaderRow[5] }}</th>\n                                            <th class=\"disabled-sorting text-right\">Actions</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let chkform of checklistFormDataTable.chklistFormDataRows\" [ngClass]=\"chkform.Status == 'InActive' ? 'strikeout strike-through-text' : ''\">\n                                            <td>{{ chkform.ID }}</td>\n                                            <td>{{ chkform.FormName }}</td>\n                                            <td>{{ chkform.FormDescription }}</td>\n                                            <td>{{chkform.LastUpdated | date: 'dd-MM-yyyy hh:mm a' }}</td>\n                                            <td>{{chkform.UpdatedBy}}</td>\n                                            <td>{{chkform.Status}}</td>\n                                            <td class=\"text-right\" id=\"td-actions\">\n                                                <button class=\"btn btn-simple btn-warning btn-icon edit\" (click)=\"goToCreateChecklistForm(chkform.ID)\">\n                                                    <i class=\"material-icons\">dvr</i> \n                                                </button>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        <!--</form>-->\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/checklist-form/checklist-form.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/checklist-form/checklist-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChecklistFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_commonService__ = __webpack_require__("./src/app/services/commonService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_checklistformService__ = __webpack_require__("./src/app/services/checklistformService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChecklistFormComponent = /** @class */ (function () {
    function ChecklistFormComponent(http, router, commonService, checklistService, activatedRoute) {
        this.http = http;
        this.router = router;
        this.commonService = commonService;
        this.checklistService = checklistService;
        this.activatedRoute = activatedRoute;
    }
    ChecklistFormComponent.prototype.ngOnInit = function () {
        if (JSON.parse(sessionStorage.getItem('LogEmployee')) != null) {
            this.getChecklistForms();
            this.checklistFormDataTable = {
                chklistFormHeaderRow: ['#', 'Form Name', 'Form Description', 'Last Updated', 'Updated By', 'Status'],
                chklistFormFooterRow: ['#', 'Form Name', 'Form Description', 'Last Updated', 'Updated By', 'Status'],
                chklistFormDataRows: this.checklistFormList
            };
        }
        else {
            this.router.navigate(['pages/login']);
        }
    };
    ChecklistFormComponent.prototype.getChecklistForms = function () {
        var _this = this;
        $('.loader').show();
        this.checklistService.GetCheckListFormList(this.commonService.baseApiUrl).subscribe(function (data) {
            var datachklistforms = JSON.stringify(data);
            var chklistformParse = JSON.parse(datachklistforms);
            var chklistformList = JSON.parse(chklistformParse["_body"]);
            localStorage.removeItem("chklistformList");
            _this.checklistFormList = null;
            if (chklistformList != null) {
                $("#chklistFormDataTable").dataTable().fnDestroy();
                localStorage.setItem("chklistformList", JSON.stringify(chklistformList));
                _this.checklistFormList = chklistformList;
                console.log(_this.checklistFormList);
                _this.checklistFormDataTable = {
                    chklistFormHeaderRow: ['#', 'Form Name', 'Form Description', 'Last Updated', 'Updated By', 'Status'],
                    chklistFormFooterRow: ['#', 'Form Name', 'Form Description', 'Last Updated', 'Updated By', 'Status'],
                    chklistFormDataRows: _this.checklistFormList
                };
                setTimeout(function () {
                    $("#chklistFormDataTable").dataTable().fnDestroy();
                    $('#chklistFormDataTable').DataTable({
                        'pagingType': 'full_numbers',
                        'lengthMenu': [[10, 25, 50, -1], [10, 25, 50, 'All']],
                        responsive: true,
                        language: {
                            search: '_INPUT_',
                            searchPlaceholder: 'Search records',
                        }
                    });
                    var tablechklistform = $('#chklistFormDataTable').DataTable();
                    // Edit record
                    tablechklistform.on('click', '.edit', function () {
                    });
                    // Delete a record
                    tablechklistform.on('click', '.remove', function (e) {
                        var $trTT = $(this).closest('tr');
                        tablechklistform.row($trTT).remove().draw();
                        e.preventDefault();
                    });
                    //Like record
                    tablechklistform.on('click', '.like', function () {
                        alert('You clicked on Like button');
                    });
                }, 10);
                $('.loader').hide();
            }
        });
    };
    ChecklistFormComponent.prototype.goToCreateChecklistForm = function (chkfomrid) {
        this.router.navigate(['create-checklistform'], { queryParams: { chkfomrid: chkfomrid } });
    };
    ChecklistFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-checklist-form',
            template: __webpack_require__("./src/app/checklist-form/checklist-form.component.html"),
            styles: [__webpack_require__("./src/app/checklist-form/checklist-form.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_commonService__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_5__services_checklistformService__["a" /* ChecklistFormService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_commonService__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_5__services_checklistformService__["a" /* ChecklistFormService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ChecklistFormComponent);
    return ChecklistFormComponent;
}());



/***/ }),

/***/ "./src/app/checklist-form/checklist-form.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistFormModule", function() { return ChecklistFormModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__checklist_form_routing__ = __webpack_require__("./src/app/checklist-form/checklist-form.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__checklist_form_component__ = __webpack_require__("./src/app/checklist-form/checklist-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_md2__ = __webpack_require__("./node_modules/md2/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ChecklistFormModule = /** @class */ (function () {
    function ChecklistFormModule() {
    }
    ChecklistFormModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__checklist_form_routing__["a" /* ChecklistFormRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__app_module__["b" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_7_md2__["a" /* Md2DatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_7_md2__["b" /* MdNativeDateModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__checklist_form_component__["a" /* ChecklistFormComponent */]
            ]
        })
    ], ChecklistFormModule);
    return ChecklistFormModule;
}());



/***/ }),

/***/ "./src/app/checklist-form/checklist-form.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChecklistFormRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__checklist_form_component__ = __webpack_require__("./src/app/checklist-form/checklist-form.component.ts");

var ChecklistFormRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__checklist_form_component__["a" /* ChecklistFormComponent */]
            }]
    }
];


/***/ })

});
//# sourceMappingURL=checklist-form.module.chunk.js.map
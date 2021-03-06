webpackJsonp(["jobs.module"],{

/***/ "./src/app/jobs/jobs.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\n    .user-alt{position:fixed; bottom:0; right:0; width:450px;z-index:9;}\n     .dropdownview {\n        -webkit-appearance: menulist-button;\n    }\n .date-cust.md2-datepicker-input{min-width: 135px !important;}\n</style>\n<!--<title>Aspect Jobs</title>-->\n<title>Jobs</title>\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-content\">\n                        <form [formGroup]=\"jobSrcForm\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-2\">\r\n                                    <ng-container *ngIf=\"isSyncAccess == true; else jobText\">\r\n                                        <button class=\"btn btn-facebook btn-round\" #jobSyncButton (click)=\"addNewSchedulerInQueue()\">Sync Jobs</button>\r\n                                    </ng-container>\r\n                                    <ng-template #jobText>\r\n                                        <h3>Jobs</h3>\r\n                                    </ng-template>\r\n                                </div>\r\n                                <div class=\"col-md-2\">\r\n                                    <select class=\"form-control  dropdownview\" formControlName=\"pManager\" (change)=\"getJobDetails();\">\r\n                                        <option selected=\"\" value=\"0\">--- Select ProjectManager ---</option>\r\n                                        <option *ngFor=\"let pm of projectManagerList\" value={{pm.ID}}>\r\n                                            {{pm.UserName}}\r\n                                        </option>\r\n                                    </select>\r\n                                </div>\r\n                                <div class=\"col-md-2\">\r\n                                    <select class=\"form-control  dropdownview\" formControlName=\"division\" (change)=\"getJobDetails();\">\r\n                                        <option selected=\"\" value=\"0\">--- Select Division ---</option>\r\n                                        <option *ngFor=\"let div of divisionList; let i = index\" [attr.selected]=\"i == '0' ? true : null\" value={{div.ID}}>\r\n                                            {{div.Name}}\r\n                                        </option>\r\n                                    </select>\r\n                                </div>\r\n                                <div class=\"col-md-2\">\r\n                                    <select class=\"form-control  dropdownview\" formControlName=\"clientName\" (change)=\"getJobDetails();\">\r\n                                        <option selected=\"\" value=\"0\">--- Select Clients ---</option>\r\n                                        <option *ngFor=\"let client of clientList;\" value={{client.ClientName}}>\r\n                                            {{client.ClientName}}\r\n                                        </option>\r\n                                    </select>\r\n                                </div>\r\n                                <div class=\"col-md-2\">\r\n                                    <select class=\"form-control  dropdownview\" formControlName=\"jobStatus\" (change)=\"getJobDetails();\">\r\n                                        <option selected=\"\" value=\"0\">--- Select Status ---</option>\r\n                                        <option *ngFor=\"let jStatus of statusList;\" value={{jStatus.Status}}>\r\n                                            {{jStatus.Status}}\r\n                                        </option>\r\n                                    </select>\r\n                                </div>\r\n                                <div class=\"col-md-2 \">\r\n                                    <md2-datepicker class=\"pd-btm date-cust\" placeholder=\"Date\" name=\"jobDate\" formControlName=\"jobDate\" (change)=\"getJobDetails();\" format=\"dd-MM-y\" type=\"date\" startView=\"month\"></md2-datepicker>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                            <div class=\"toolbar\">\r\n                            </div>\r\n                            <div class=\"material-datatables table-responsive\">\r\n                                <table id=\"jobDatatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>{{ jobDataTable.jobHeaderRow[0] }}</th>\r\n                                            <th>{{ jobDataTable.jobHeaderRow[1] }}</th>\r\n                                            <th>{{ jobDataTable.jobHeaderRow[2] }}</th>\r\n                                            <th>{{ jobDataTable.jobHeaderRow[3] }}</th>\r\n                                            <th>{{ jobDataTable.jobHeaderRow[4] }}</th>\r\n                                            <th>{{ jobDataTable.jobHeaderRow[5] }}</th>\r\n                                            <th>{{ jobDataTable.jobHeaderRow[6] }}</th>\r\n                                            <th class=\"disabled-sorting text-right\">{{ jobDataTable.jobHeaderRow[7] }}</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let job of jobDataTable.jobDataRows\">\r\n                                            <!--<td>{{ job.OldJobId }}</td>-->\r\n                                            <td>{{ job.JobNumber }}</td>\r\n                                            <td>\r\n                                                <div *ngIf=\"job.CreatedDate\">{{ job.CreatedDate | date: 'dd/MM/yyyy'}} </div>\r\n                                                <div *ngIf=\"!job.CreatedDate\">{{ job.CreatedDate }} </div>\r\n                                            </td>\r\n                                            <td>{{ job.Description }}</td>\r\n                                            <td>{{ job.ProjectManager }}</td>\r\n                                            <td>{{ job.ClientName }}</td>\r\n                                            <td>{{ job.WONumber }}</td>\r\n                                            <td>{{ job.Status }}</td>\r\n                                            <td class=\"text-right\">\r\n                                                <span *ngIf=\"job.IsNew == true\">\r\n                                                    <button class=\"btn btn-success btn-icon edit btn-xs\">\r\n                                                        New\r\n                                                    </button>\r\n                                                </span>\r\n                                                <!--<span *ngIf=\"job.IsNew == false\">\r\n                                <button class=\"btn btn-success btn-icon edit btn-xs\">\r\n                                    Updated\r\n                                </button>\r\n                            </span>-->\r\n                                                <button class=\"btn btn-simple btn-warning btn-icon edit\" *ngIf=\"isViewAccess == true\" (click)=\"goToWorkOrder(job.OldJobId)\">\r\n                                                    <i class=\"material-icons\">dvr</i>\r\n                                                </button>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                                <div class=\"col-lg-12 mtb30\">\r\n                                    <div *ngIf=\"joblastSyncDate\">\r\n                                        <div *ngIf=\"joblastSyncDate == 'No Sync'\">\r\n                                            <label class=\"pull-right\">last Sync: {{joblastSyncDate }}</label>\r\n                                        </div>\r\n                                        <div *ngIf=\"joblastSyncDate != 'No Sync'\">\r\n                                            <label class=\"pull-right\">last Sync: {{joblastSyncDate | date: 'dd/MM/yyyy HH:mm:ss' }}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n</div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"alert alert-info alert-with-icon user-alt\" data-notify=\"container\" id=\"syncStart\">\r\n    <i class=\"material-icons\" data-notify=\"icon\">notifications</i>\r\n    <button type=\"button\" aria-hidden=\"true\" class=\"close\">\r\n        <i class=\"material-icons\" (click)=\"closeStart();\">close</i>\r\n    </button>\r\n    <span data-notify=\"message\">Job Sync Currently In Progress - Please Wait.</span>\r\n</div>\r\n\r\n<div class=\"alert alert-success alert-with-icon user-alt\" data-notify=\"container\" id=\"syncCopm\">\r\n    <i class=\"material-icons\" data-notify=\"icon\">notifications</i>\r\n    <button type=\"button\" aria-hidden=\"true\" class=\"close\">\r\n        <i class=\"material-icons\" (click)=\"closeEnd();\">close</i>\r\n    </button>\r\n    <span data-notify=\"message\">Job sync completed. Job added: {{noOfJob}} </span><!--Job sync Completed There Are {{noOfJob}} new Job Added.-->\r\n</div>"

/***/ }),

/***/ "./src/app/jobs/jobs.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/jobs/jobs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_commonService__ = __webpack_require__("./src/app/services/commonService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_jobsService__ = __webpack_require__("./src/app/services/jobsService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_schedulerService__ = __webpack_require__("./src/app/services/schedulerService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_simple_timer__ = __webpack_require__("./node_modules/ng2-simple-timer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_simple_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_simple_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_divisionService__ = __webpack_require__("./src/app/services/divisionService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var JobsComponent = /** @class */ (function () {
    function JobsComponent(http, router, commonService, jobService, schedulerService, timer, formBuilder, divisionService, datepipe) {
        this.http = http;
        this.router = router;
        this.commonService = commonService;
        this.jobService = jobService;
        this.schedulerService = schedulerService;
        this.timer = timer;
        this.formBuilder = formBuilder;
        this.divisionService = divisionService;
        this.datepipe = datepipe;
        this.jobSrcForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            division: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            clientName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            jobStatus: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            jobDate: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            pManager: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
        });
    }
    JobsComponent.prototype.ngOnInit = function () {
        if (JSON.parse(sessionStorage.getItem('LogEmployee')) != null) {
            var userRoleAccess = JSON.parse(sessionStorage.getItem('AccessRole'));
            if (userRoleAccess != null) {
                var jobAccess = userRoleAccess.filter(function (job) { return job.ModuleName == "JOBINFORMATION"; });
                if (jobAccess != null) {
                    this.isViewAccess = (jobAccess[0].AddAccess == true || jobAccess[0].EditAccess == true ? true : jobAccess[0].ViewAccess);
                    this.isAddAccess = jobAccess[0].AddAccess;
                    this.isEditAccess = jobAccess[0].EditAccess;
                    this.isSyncAccess = jobAccess[0].SyncAccess;
                }
            }
            $(document).ready(function () {
                jQuery(".md2-datepicker-arrow").hide();
                $('#syncStart').hide();
                $('#syncCopm').hide();
            });
            if (this.isViewAccess == false) {
                this.router.navigate(['dashboard']);
            }
            this.timer.newTimer('1sec', 30);
            this.userProfile = JSON.parse(sessionStorage.getItem('LogEmployee'));
            this.getDivisions();
            this.getRoleBasedJobStatus();
            this.getJobsProjectManager();
            this.jobDataTable = {
                jobHeaderRow: ['Job#', 'Date', 'Description', 'Project Manager', 'Client', 'WOs', 'Status', 'Actions'],
                jobFooterRow: ['Job#', 'Date', 'Description', 'Project Manager', 'Client', 'WOs', 'Status', 'Actions'],
                jobDataRows: this.jobList
            };
            this.jobSrcForm.controls["division"].setValue("1");
            this.jobSrcForm.controls["clientName"].setValue("0");
            this.jobSrcForm.controls["jobStatus"].setValue("0");
            this.jobSrcForm.controls["pManager"].setValue("0");
            //this.jobSrcForm = this.formBuilder.group({
            //    division: null,
            //});
            this.getJobDetails();
        }
        else {
            this.router.navigate(['pages/login']);
        }
    };
    JobsComponent.prototype.isJobsAndWorkOrdersDone = function () {
        var _this = this;
        if (this.timerStart == "start") {
            this.timerStart = this.timer.subscribe('1sec', function () { return _this.GetSchedulerDoneStatus(); });
        }
    };
    JobsComponent.prototype.GetSchedulerDoneStatus = function () {
        var _this = this;
        $('.loader').show();
        $('#syncStart').show();
        this.schedulerService.GetSchedulerDoneStatus(this.commonService.baseApiUrl, "2").subscribe(function (data) {
            var dataScheduler = JSON.stringify(data);
            var schedulerParse = JSON.parse(dataScheduler);
            var schedulerList = JSON.parse(schedulerParse["_body"]);
            //localStorage.removeItem("JobList");
            if (schedulerList == true) {
                $('.loader').hide();
                _this.getJobDetails();
                _this.timerStart = "stop";
                $('#syncStart').hide();
                $('#syncCopm').show();
                _this.jobSyncButton.nativeElement.disabled = false;
            }
        });
    };
    JobsComponent.prototype.addNewSchedulerInQueue = function () {
        var _this = this;
        $('.loader').show();
        this.schedulerService.AddNewSchedulerInQueue(this.commonService.baseApiUrl, "2").subscribe(function (data) {
            var dataScheduler = JSON.stringify(data);
            var schedulerParse = JSON.parse(dataScheduler);
            var schedulerList = JSON.parse(schedulerParse["_body"]);
            //localStorage.removeItem("JobList");
            if (schedulerList == true) {
                _this.jobSyncButton.nativeElement.disabled = true;
                $('.loader').hide();
                _this.timerStart = "start";
                _this.isJobsAndWorkOrdersDone();
            }
        });
    };
    JobsComponent.prototype.getDivisions = function () {
        var _this = this;
        $('.loader').show();
        this.divisionList = null;
        this.divisionService.GetDivisionForCalendar(this.commonService.baseApiUrl, this.userProfile.ID).subscribe(function (data) {
            var dataEmp = JSON.stringify(data);
            var empParse = JSON.parse(dataEmp);
            if (empParse["_body"] != null) {
                _this.divisionList = JSON.parse(empParse["_body"]);
            }
            $('.loader').hide();
        });
    };
    JobsComponent.prototype.getJobsProjectManager = function () {
        var _this = this;
        $('.loader').show();
        this.projectManagerList = null;
        this.jobService.GetJobsProjectManager(this.commonService.baseApiUrl).subscribe(function (data) {
            var dataEmp = JSON.stringify(data);
            var empParse = JSON.parse(dataEmp);
            if (empParse["_body"] != null) {
                _this.projectManagerList = JSON.parse(empParse["_body"]);
            }
            $('.loader').hide();
        });
    };
    JobsComponent.prototype.getRoleBasedJobClient = function (divID) {
        var _this = this;
        $('.loader').show();
        this.jobService.GetRoleBasedJobClient(this.commonService.baseApiUrl, this.userProfile.ID, divID).subscribe(function (data) {
            var dataDiv = JSON.stringify(data);
            var divParse = JSON.parse(dataDiv);
            var divList = JSON.parse(divParse["_body"]);
            if (divList != null) {
                //for (let clt of divList) {
                //    var jobJson = { id: clt.ID, itemName: clt.ClientName }
                _this.clientList = divList;
                //}
            }
            $('.loader').hide();
        });
    };
    JobsComponent.prototype.getRoleBasedJobStatus = function () {
        var _this = this;
        $('.loader').show();
        this.jobService.GetRoleBasedJobStatus(this.commonService.baseApiUrl, this.userProfile.ID).subscribe(function (data) {
            var dataDiv = JSON.stringify(data);
            var divParse = JSON.parse(dataDiv);
            var divList = JSON.parse(divParse["_body"]);
            if (divList != null) {
                //for (let clt of divList) {
                //    var jobJson = { id: clt.ID, itemName: clt.ClientName }
                _this.statusList = divList;
                //}
            }
            $('.loader').hide();
        });
    };
    JobsComponent.prototype.getJobDetails = function () {
        var _this = this;
        $('.loader').show();
        this.getRoleBasedJobClient(this.jobSrcForm.controls["division"].value);
        var value = {
            DivisionID: this.jobSrcForm.controls["division"].value,
            Client: this.jobSrcForm.controls["clientName"].value,
            Status: this.jobSrcForm.controls["jobStatus"].value,
            jobDate: this.datepipe.transform(this.jobSrcForm.controls["jobDate"].value, 'yyyy-MM-dd'),
            ProjectManagerID: this.jobSrcForm.controls["pManager"].value
        };
        this.jobService.GetJobDetails(this.commonService.baseApiUrl, this.userProfile.ID, value).subscribe(function (data) {
            var dataJobs = JSON.stringify(data);
            var jobParse = JSON.parse(dataJobs);
            var jobLists = JSON.parse(jobParse["_body"]);
            //localStorage.removeItem("JobList");
            _this.jobList = null;
            if (jobLists != null) {
                if (jobLists.length > 0) {
                    _this.joblastSyncDate = jobLists[0].JobSyncDate != null ? jobLists[0].JobSyncDate : "No Sync";
                }
                else {
                    _this.joblastSyncDate = "No Sync";
                }
                $("#jobDatatables").dataTable().fnDestroy();
                //localStorage.setItem("JobList", JSON.stringify(jobLists));
                _this.jobList = jobLists;
                var newJobs = jobLists.filter(function (usr) { return usr.IsNew == true; });
                _this.noOfJob = newJobs.length;
                _this.jobDataTable = {
                    jobHeaderRow: ['Job#', 'Date', 'Description', 'Project Manager', 'Client', 'WOs', 'Status', 'Actions'],
                    jobFooterRow: ['Job#', 'Date', 'Description', 'Project Manager', 'Client', 'WOs', 'Status', 'Actions'],
                    jobDataRows: _this.jobList
                };
                setTimeout(function () {
                    $("#jobDatatables").dataTable().fnDestroy();
                    $('#jobDatatables').DataTable({
                        'pagingType': 'full_numbers',
                        'lengthMenu': [[10, 25, 50, -1], [10, 25, 50, 'All']],
                        responsive: true,
                        language: {
                            search: '_INPUT_',
                            searchPlaceholder: 'Search records',
                        }
                    });
                    var tableJob = $('#jobDatatables').DataTable();
                    // Edit record
                    tableJob.on('click', '.edit', function () {
                    });
                    // Delete a record
                    tableJob.on('click', '.remove', function (e) {
                        var $trJob = $(this).closest('tr');
                        tableJob.row($trJob).remove().draw();
                        e.preventDefault();
                    });
                    // Like record
                    tableJob.on('click', '.like', function () {
                        alert('You clicked on Like button');
                    });
                }, 10);
                $('.loader').hide();
            }
        });
    };
    JobsComponent.prototype.goToWorkOrder = function (jobId) {
        this.router.navigate(['work-order'], { queryParams: { jobID: jobId } });
    };
    JobsComponent.prototype.closeStart = function () {
        $('#syncStart').hide();
    };
    JobsComponent.prototype.closeEnd = function () {
        $('#syncCopm').hide();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jobSyncButton'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], JobsComponent.prototype, "jobSyncButton", void 0);
    JobsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-jobs',
            template: __webpack_require__("./src/app/jobs/jobs.component.html"),
            styles: [__webpack_require__("./src/app/jobs/jobs.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_commonService__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_6__services_jobsService__["a" /* JobsService */], __WEBPACK_IMPORTED_MODULE_7__services_schedulerService__["a" /* SchedulerService */], __WEBPACK_IMPORTED_MODULE_8_ng2_simple_timer__["SimpleTimer"], __WEBPACK_IMPORTED_MODULE_9__services_divisionService__["a" /* DivisionService */], __WEBPACK_IMPORTED_MODULE_10__angular_common__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_commonService__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_6__services_jobsService__["a" /* JobsService */],
            __WEBPACK_IMPORTED_MODULE_7__services_schedulerService__["a" /* SchedulerService */],
            __WEBPACK_IMPORTED_MODULE_8_ng2_simple_timer__["SimpleTimer"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_9__services_divisionService__["a" /* DivisionService */],
            __WEBPACK_IMPORTED_MODULE_10__angular_common__["DatePipe"]])
    ], JobsComponent);
    return JobsComponent;
}());



/***/ }),

/***/ "./src/app/jobs/jobs.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsModule", function() { return JobsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jobs_routing__ = __webpack_require__("./src/app/jobs/jobs.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jobs_component__ = __webpack_require__("./src/app/jobs/jobs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_md2__ = __webpack_require__("./node_modules/md2/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var JobsModule = /** @class */ (function () {
    function JobsModule() {
    }
    JobsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__jobs_routing__["a" /* JobsRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__app_module__["b" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_7_md2__["a" /* Md2DatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_7_md2__["b" /* MdNativeDateModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__jobs_component__["a" /* JobsComponent */]
            ]
        })
    ], JobsModule);
    return JobsModule;
}());



/***/ }),

/***/ "./src/app/jobs/jobs.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jobs_component__ = __webpack_require__("./src/app/jobs/jobs.component.ts");

var JobsRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__jobs_component__["a" /* JobsComponent */]
            }]
    }
];


/***/ })

});
//# sourceMappingURL=jobs.module.chunk.js.map
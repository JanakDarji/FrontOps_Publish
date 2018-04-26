webpackJsonp(["jobs.module"],{

/***/ "./node_modules/angular2-uuid/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var UUID = (function () {
    function UUID() {
        // no-op
    }
    UUID.UUID = function () {
        if (typeof (window) !== "undefined" && typeof (window.crypto) !== "undefined" && typeof (window.crypto.getRandomValues) !== "undefined") {
            // If we have a cryptographically secure PRNG, use that
            // http://stackoverflow.com/questions/6906916/collisions-when-generating-uuids-in-javascript
            var buf = new Uint16Array(8);
            window.crypto.getRandomValues(buf);
            return (this.pad4(buf[0]) + this.pad4(buf[1]) + "-" + this.pad4(buf[2]) + "-" + this.pad4(buf[3]) + "-" + this.pad4(buf[4]) + "-" + this.pad4(buf[5]) + this.pad4(buf[6]) + this.pad4(buf[7]));
        }
        else {
            // Otherwise, just use Math.random
            // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
            // https://stackoverflow.com/questions/11605068/why-does-jshint-argue-against-bitwise-operators-how-should-i-express-this-code
            return this.random4() + this.random4() + "-" + this.random4() + "-" + this.random4() + "-" +
                this.random4() + "-" + this.random4() + this.random4() + this.random4();
        }
    };
    UUID.pad4 = function (num) {
        var ret = num.toString(16);
        while (ret.length < 4) {
            ret = "0" + ret;
        }
        return ret;
    };
    UUID.random4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    return UUID;
}());
exports.UUID = UUID;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-simple-timer/index.js":
/***/ (function(module, exports, __webpack_require__) {

exports.SimpleTimer = __webpack_require__("./node_modules/ng2-simple-timer/lib/simple-timer.js").SimpleTimer;


/***/ }),

/***/ "./node_modules/ng2-simple-timer/lib/simple-timer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Rx_1 = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var angular2_uuid_1 = __webpack_require__("./node_modules/angular2-uuid/index.js");
var SimpleTimer = (function () {
    function SimpleTimer() {
        this.timer = {};
        this.subscription = {};
    }
    SimpleTimer.prototype.getTimer = function () {
        return Object.keys(this.timer);
    };
    SimpleTimer.prototype.getSubscription = function () {
        return Object.keys(this.subscription);
    };
    SimpleTimer.prototype.newTimer = function (name, sec) {
        if (name === undefined || sec === undefined || this.timer[name]) {
            return false;
        }
        var o = Rx_1.Observable.timer(0, sec * 1000);
        this.timer[name] = { second: sec, observable: o };
        return true;
    };
    SimpleTimer.prototype.delTimer = function (name) {
        var _this = this;
        if (name === undefined || !this.timer[name]) {
            return false;
        }
        var s = this.getSubscription();
        s.forEach(function (i) {
            if (_this.subscription[i].name === name) {
                _this.unsubscribe(i);
            }
        });
        delete this.timer[name].observable;
        delete this.timer[name];
    };
    SimpleTimer.prototype.subscribe = function (name, callback) {
        if (!this.timer[name]) {
            return '';
        }
        var id = name + '-' + angular2_uuid_1.UUID.UUID();
        this.subscription[id] = {
            name: name,
            subscription: this.timer[name].observable.subscribe(callback)
        };
        return id;
    };
    SimpleTimer.prototype.unsubscribe = function (id) {
        if (!id || !this.subscription[id]) {
            return false;
        }
        this.subscription[id].subscription.unsubscribe();
        delete this.subscription[id];
    };
    return SimpleTimer;
}());
SimpleTimer = __decorate([
    core_1.Injectable()
], SimpleTimer);
exports.SimpleTimer = SimpleTimer;
//# sourceMappingURL=simple-timer.js.map

/***/ }),

/***/ "./src/app/jobs/jobs.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<title>Aspect Jobs</title>\r\n<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-content\">\r\n                        <ng-container *ngIf=\"isSyncAccess == true; else jobText\">\r\n                            <button class=\"btn btn-facebook btn-round\" #jobSyncButton (click)=\"addNewSchedulerInQueue()\">Sync Jobs</button>\r\n                            </ng-container>\r\n                        <ng-template #jobText>\r\n                            <h3>Jobs</h3>\r\n                        </ng-template>\r\n                            <div class=\"toolbar\">\r\n                            </div>\r\n                            <div class=\"material-datatables table-responsive\">\r\n                                <table id=\"jobDatatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>{{ jobDataTable.jobHeaderRow[0] }}</th>\r\n                                            <th>{{ jobDataTable.jobHeaderRow[1] }}</th>\r\n                                            <th>{{ jobDataTable.jobHeaderRow[2] }}</th>\r\n                                            <th>{{ jobDataTable.jobHeaderRow[3] }}</th>\r\n                                            <th>{{ jobDataTable.jobHeaderRow[4] }}</th>\r\n                                            <th>{{ jobDataTable.jobHeaderRow[5] }}</th>\r\n                                            <th class=\"disabled-sorting text-right\">{{ jobDataTable.jobHeaderRow[6] }}</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let job of jobDataTable.jobDataRows\">\r\n                                            <td>{{ job.OldJobId }}</td>\r\n                                            <td>\r\n                                                <div *ngIf=\"job.CreatedDate\">{{ job.CreatedDate | date: 'dd/MM/yyyy'}} </div>\r\n                                                <div *ngIf=\"!job.CreatedDate\">{{ job.CreatedDate }} </div>\r\n                                            </td>\r\n                                            <td>{{ job.Description }}</td>\r\n                                            <td>{{ job.ClientName }}</td>\r\n                                            <td>{{ job.WONumber }}</td>\r\n                                            <td>{{ job.Status }}</td>\r\n                                            <td class=\"text-right\">\r\n                                                <span *ngIf=\"job.IsNew == true\">\r\n                                                    <button class=\"btn btn-success btn-icon edit btn-xs\">\r\n                                                        New\r\n                                                    </button>\r\n                                                </span>\r\n                                                <!--<span *ngIf=\"job.IsNew == false\">\r\n                                                    <button class=\"btn btn-success btn-icon edit btn-xs\">\r\n                                                        Updated\r\n                                                    </button>\r\n                                                </span>-->\r\n                                                <button class=\"btn btn-simple btn-warning btn-icon edit\" *ngIf=\"isViewAccess == true\" (click)=\"goToWorkOrder(job.OldJobId)\">\r\n                                                    <i class=\"material-icons\">dvr</i>\r\n                                                </button>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                                <div class=\"col-lg-12\">\r\n                                    <div *ngIf=\"!joblastSyncDate\">\r\n                                        <div *ngIf=\"lastSyncDate == 'No Sync'\">\r\n                                            <label class=\"pull-right\">last Sync: {{joblastSyncDate }}</label>\r\n                                        </div>\r\n                                        <div *ngIf=\"lastSyncDate != 'No Sync'\">\r\n                                            <label class=\"pull-right\">last Sync: {{joblastSyncDate | date: 'dd/MM/yyyy HH:mm:ss' }}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_commonService__ = __webpack_require__("./src/app/services/commonService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_jobsService__ = __webpack_require__("./src/app/services/jobsService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_schedulerService__ = __webpack_require__("./src/app/services/schedulerService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_simple_timer__ = __webpack_require__("./node_modules/ng2-simple-timer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_simple_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_simple_timer__);
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
    function JobsComponent(http, router, commonService, jobService, schedulerService, timer) {
        this.http = http;
        this.router = router;
        this.commonService = commonService;
        this.jobService = jobService;
        this.schedulerService = schedulerService;
        this.timer = timer;
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
        }
        else {
            this.router.navigate(['pages/login']);
        }
        if (this.isViewAccess == false) {
            this.router.navigate(['dashboard']);
        }
        this.timer.newTimer('1sec', 30);
        this.getJobDetails();
        this.jobDataTable = {
            jobHeaderRow: ['Job#', 'Date', 'Description', 'Client', 'WOs', 'Status', 'Actions'],
            jobFooterRow: ['Job#', 'Date', 'Description', 'Client', 'WOs', 'Status', 'Actions'],
            jobDataRows: this.jobList
        };
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
        this.schedulerService.GetSchedulerDoneStatus(this.commonService.baseApiUrl, "2").subscribe(function (data) {
            var dataScheduler = JSON.stringify(data);
            var schedulerParse = JSON.parse(dataScheduler);
            var schedulerList = JSON.parse(schedulerParse["_body"]);
            //localStorage.removeItem("JobList");
            if (schedulerList == true) {
                $('.loader').hide();
                _this.getJobDetails();
                _this.timerStart = "stop";
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
    JobsComponent.prototype.getJobDetails = function () {
        var _this = this;
        $('.loader').show();
        this.jobService.GetJobDetails(this.commonService.baseApiUrl).subscribe(function (data) {
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
                _this.jobDataTable = {
                    jobHeaderRow: ['Job#', 'Date', 'Description', 'Client', 'WOs', 'Status', 'Actions'],
                    jobFooterRow: ['Job#', 'Date', 'Description', 'Client', 'WOs', 'Status', 'Actions'],
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('jobSyncButton'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], JobsComponent.prototype, "jobSyncButton", void 0);
    JobsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-jobs',
            template: __webpack_require__("./src/app/jobs/jobs.component.html"),
            styles: [__webpack_require__("./src/app/jobs/jobs.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_commonService__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_5__services_jobsService__["a" /* JobsService */], __WEBPACK_IMPORTED_MODULE_6__services_schedulerService__["a" /* SchedulerService */], __WEBPACK_IMPORTED_MODULE_7_ng2_simple_timer__["SimpleTimer"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_commonService__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_5__services_jobsService__["a" /* JobsService */],
            __WEBPACK_IMPORTED_MODULE_6__services_schedulerService__["a" /* SchedulerService */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_simple_timer__["SimpleTimer"]])
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
                __WEBPACK_IMPORTED_MODULE_6__app_module__["b" /* MaterialModule */]
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


/***/ }),

/***/ "./src/app/services/jobsService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JobsService = /** @class */ (function () {
    function JobsService(http) {
        this.http = http;
    }
    JobsService.prototype.GetJobDetails = function (baseurl) {
        return this.http.get(baseurl + "GetJobDetails/");
    };
    ;
    JobsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], JobsService);
    return JobsService;
}());



/***/ }),

/***/ "./src/app/services/schedulerService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SchedulerService = /** @class */ (function () {
    function SchedulerService(http) {
        this.http = http;
    }
    SchedulerService.prototype.AddNewSchedulerInQueue = function (baseurl, contact) {
        return this.http.post(baseurl + "AddNewSchedulerInQueue/" + contact, null);
    };
    ;
    SchedulerService.prototype.GetSchedulerDoneStatus = function (baseurl, contact) {
        return this.http.get(baseurl + "GetSchedulerDoneStatus/" + contact);
    };
    ;
    SchedulerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], SchedulerService);
    return SchedulerService;
}());



/***/ })

});
//# sourceMappingURL=jobs.module.chunk.js.map
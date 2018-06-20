webpackJsonp(["wo-assignment.module"],{

/***/ "./src/app/services/activityService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityService; });
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


var ActivityService = /** @class */ (function () {
    function ActivityService(http) {
        this.http = http;
    }
    ActivityService.prototype.GetActivityTracker = function (baseurl, contact) {
        return this.http.get(baseurl + "GetActivityTracker/" + contact);
    };
    ;
    ActivityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], ActivityService);
    return ActivityService;
}());



/***/ }),

/***/ "./src/app/wo-assignment/wo-assignment.component.html":
/***/ (function(module, exports) {

module.exports = "<title>Aspect WO Assignment</title>\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<script src=\"https://maps.googleapis.com/maps/api/js?sensor=false\"></script>\n<style>\n    .tab-pane .table tbody > tr > td:first-child {\n        width: 0px !important;\n    }\n    /* USER PROFILE PAGE */\n    .card {\n        margin-top: 20px;\n        /*padding: 30px;*/\n        background-color: rgba(214, 224, 226, 0.2);\n        -webkit-border-top-left-radius: 5px;\n        -moz-border-top-left-radius: 5px;\n        border-top-left-radius: 5px;\n        -webkit-border-top-right-radius: 5px;\n        -moz-border-top-right-radius: 5px;\n        border-top-right-radius: 5px;\n        -webkit-box-sizing: border-box;\n        -moz-box-sizing: border-box;\n        box-sizing: border-box;\n    }\n\n        .card.hovercard {\n            position: relative;\n            padding-top: 0;\n            overflow: hidden;\n            text-align: center;\n            background-color: #fff;\n            background-color: rgba(255, 255, 255, 1);\n        }\n\n            .card.hovercard .card-background {\n                height: 130px;\n            }\n\n    .card-background img {\n        -webkit-filter: blur(25px);\n        -moz-filter: blur(25px);\n        -o-filter: blur(25px);\n        -ms-filter: blur(25px);\n        filter: blur(25px);\n        margin-left: -100px;\n        margin-top: -200px;\n        min-width: 130%;\n    }\n\n    .dropdownview {\n        -webkit-appearance: menulist-button;\n    }\n\n    .card.hovercard .useravatar {\n        position: absolute;\n        top: 15px;\n        left: 0;\n        right: 0;\n    }\n\n        .card.hovercard .useravatar img {\n            width: 100px;\n            height: 100px;\n            max-width: 100px;\n            max-height: 100px;\n            -webkit-border-radius: 50%;\n            -moz-border-radius: 50%;\n            border-radius: 50%;\n            border: 5px solid rgba(255, 255, 255, 0.5);\n        }\n\n    .card.hovercard .card-info {\n        position: absolute;\n        bottom: 14px;\n        left: 0;\n        right: 0;\n    }\n\n        .card.hovercard .card-info .card-title {\n            padding: 0 5px;\n            font-size: 20px;\n            line-height: 1;\n            color: #e91e63;\n            background-color: rgba(255, 255, 255, 0.1);\n            -webkit-border-radius: 4px;\n            -moz-border-radius: 4px;\n            border-radius: 4px;\n        }\n\n    .card.hovercard .card-info {\n        overflow: hidden;\n        font-size: 12px;\n        line-height: 20px;\n        color: white;\n        text-overflow: ellipsis;\n    }\n\n    .card.hovercard .bottom {\n        padding: 0 20px;\n        margin-bottom: 17px;\n    }\n\n    .btn-pref .btn {\n        -webkit-border-radius: 0 !important;\n    }\n\n    .panel-group .panel {\n        border-radius: 0;\n        box-shadow: none;\n        border-color: #EEEEEE;\n    }\n\n    .panel-default > .panel-heading {\n        padding: 0;\n        border-radius: 0;\n        color: #212121;\n        background-color: #FAFAFA;\n        border-color: #EEEEEE;\n    }\n\n    .panel-title {\n        font-size: 14px;\n    }\n\n        .panel-title > a {\n            display: block;\n            padding: 15px;\n            text-decoration: none;\n        }\n\n    .more-less {\n        float: right;\n        color: #212121;\n    }\n\n    .panel-default > .panel-heading + .panel-collapse > .panel-body {\n        border-top-color: #EEEEEE;\n    }\n\n    .bradius {\n        border-radius: 5px !important;\n    }\n\n    ::ng-deep .cdk-overlay-container {\n        z-index: 1045 !important;\n    }\n\n    .nav > li {\n        margin-left: 12px;\n    }\n\n\n    .card-title {\n        margin-left: 12px;\n        padding-top: 5px;\n    }\n    .btn-wo {padding:5px !important;}\r\n    .cust-table .table tbody > tr > td {\r\n        padding: 0px 8px;\r\n    }\n\n .cust-table-td {\r\n        padding: 0px 8px;\r\n    }\n\n      tr.strikeout td:before {\n        content: \" \";\n        position: absolute;\n        top: auto; margin-top:8px;\n        left: 16px;\n        border-bottom: 1px solid #ff0000;\n        width: 80%;\n    }\n\n    #td-actions:before {\n        content: \" \";\n        position: absolute;\n        top: auto; margin-top:8px;\n        left: 16px;\n        border-bottom: none;\n        width: 80%;\n    }\r\n     .strike-through-text {\n        color: #ff0000;\n    }\n     .padding21{\r\n         padding: 21px!important;\r\n     }\n\n</style>\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"col-lg-12\" style=\"margin-bottom:20px;\">\n            <div class=\"row\">\n                <div style=\"background-color:white;\">\n                    <div class=\"card\" style=\"background-color:transparent !important;-webkit-box-shadow:none !important\">\n\n                        <div class=\"card-content\">\n                            <ul class=\"nav nav-pills nav-pills-rose\">\n                                <li class=\"active\"> <a href=\"#pill1\" data-toggle=\"tab\" class=\"bradius\" (click)=\"activityDocHide()\">Assignment</a> </li>\n                                <li> <a href=\"#pill2\" data-toggle=\"tab\" class=\"bradius\" (click)=\"activityDocShow()\">Activity</a> </li>\n                            </ul>\n                            <div class=\"tab-content\">\n                                <div class=\"tab-pane active\" id=\"pill1\">\n                                    <div class=\"panel-body\">\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-6\">\n                                                <h4>Work Order Details - {{workOrderDetail.WorkOrderNo}} For {{workOrderDetail.ClientName}}</h4>\n                                                <input type=\"hidden\" style=\"display:none\" id=\"search\" #search />\n                                                <div class=\"table-responsive\">\n                                                    <table class=\"table table-bordered table-hover\" style=\"float:left !important\">\n                                                        <tbody>\n                                                            <tr>\n                                                                <td>Work Order Address</td>\n                                                                <td>{{wrokOrdAddress}} </td>\n                                                            </tr>\n                                                            <tr>\n                                                                <td>Work Order Description</td>\n                                                                <td>\n                                                                    <ng-container *ngIf=\"workOrderDetail.Description\">{{workOrderDetail.Description}}</ng-container>\n                                                                    <ng-container *ngIf=\"!workOrderDetail.Description\">{{workOrderDetail.JobDescription}}</ng-container>\n                                                                </td>\n                                                            </tr>\n                                                            <tr>\n                                                                <td>Project Manager</td>\n                                                                <td>{{ workOrderDetail.ProjectManager }}</td>\n                                                            </tr>\n                                                            <tr>\n                                                                <td>Due Date</td>\n                                                                <td>{{ workOrderDetail.DateDue }}</td>\n                                                            </tr>\n                                                        </tbody>\n                                                    </table>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-sm-6\">\n                                                <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"true\" [zoom]=\"zoom\" style=\"height:320px;\">\n                                                    <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\n                                                </agm-map>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n\n\n                                <div class=\"tab-pane\" id=\"pill2\">\n                                    <div class=\"panel-body\">\n                                        <div class=\"card card-plain\" style=\"padding:15px;\">\n                                            <h4>Activity for {{workOrderDetail.WorkOrderNo}}</h4>\n                                            <div class=\"card-content\">\n                                                <ul class=\"timeline\">\n                                                    <ng-container *ngFor=\"let actTrack of workOrdActTrackerList\">\n                                                        <ng-container *ngIf=\"actTrack.CategoryID == 1 || actTrack.CategoryID == 3 || actTrack.CategoryID == 11 || actTrack.CategoryID == 9 || actTrack.CategoryID == 20\">\n                                                            <li class=\"timeline-inverted\">\n                                                                <div class=\"timeline-badge info\"> <i class=\"material-icons\" matTooltip=\"{{actTrack.WoNumber}}\" [matTooltipPosition]=\"'above'\">fingerprint</i> </div>\n                                                                <div class=\"timeline-panel\">\n                                                                    <div class=\"timeline-heading\"> <span class=\"label label-info\">{{actTrack.CategoryTitle}}</span> </div>\n                                                                    <div class=\"timeline-body\">\n                                                                        <p>User: <strong>{{actTrack.UserName}}.</strong></p>\n                                                                        <p>{{actTrack.DescriptionFormat}}</p>\n                                                                    </div>\n                                                                    <h6>\n                                                                        <i class=\"ti-time\"></i> {{actTrack.TrackDatetime | date: 'dd/MM/yyyy HH:mm:ss'}} <!--11 hours ago via Twitter-->\n                                                                    </h6>\n                                                                </div>\n                                                            </li>\n                                                        </ng-container>\n                                                        <ng-container *ngIf=\"actTrack.CategoryID == 5 || actTrack.CategoryID == 6 || actTrack.CategoryID == 12 || actTrack.CategoryID == 16 || actTrack.CategoryID == 8 || actTrack.CategoryID == 15 || actTrack.CategoryID == 18 || actTrack.CategoryID == 22\">\n                                                            <li>\n                                                                <div class=\"timeline-badge success\"> <i class=\"material-icons\" matTooltip=\"{{actTrack.WoNumber}}\" [matTooltipPosition]=\"'above'\">fingerprint</i> </div>\n                                                                <div class=\"timeline-panel\">\n                                                                    <div class=\"timeline-heading\"> <span class=\"label label-success\">{{actTrack.CategoryTitle}}</span> </div>\n                                                                    <div class=\"timeline-body\">\n                                                                        <p>User: <strong>{{actTrack.UserName}}.</strong></p>\n                                                                        <p>{{actTrack.DescriptionFormat}}</p>\n                                                                    </div>\n                                                                    <h6>\n                                                                        <i class=\"ti-time\"></i> {{actTrack.TrackDatetime | date: 'dd/MM/yyyy HH:mm:ss'}} <!--11 hours ago via Twitter-->\n                                                                    </h6>\n                                                                </div>\n                                                            </li>\n                                                        </ng-container>\n                                                        <ng-container *ngIf=\"actTrack.CategoryID == 7 || actTrack.CategoryID == 4 || actTrack.CategoryID == 10 || actTrack.CategoryID == 13 || actTrack.CategoryID == 17 || actTrack.CategoryID == 19 || actTrack.CategoryID == 21\">\n                                                            <li class=\"timeline-inverted\">\n                                                                <div class=\"timeline-badge danger\"> <i class=\"material-icons\" matTooltip=\"{{actTrack.WoNumber}}\" [matTooltipPosition]=\"'above'\">fingerprint</i> </div>\n                                                                <div class=\"timeline-panel\">\n                                                                    <div class=\"timeline-heading\"> <span class=\"label label-danger\">{{actTrack.CategoryTitle}}</span> </div>\n                                                                    <div class=\"timeline-body\">\n                                                                        <p>User: <strong>{{actTrack.UserName}}.</strong></p>\n                                                                        <p>{{actTrack.DescriptionFormat}}</p>\n                                                                    </div>\n                                                                    <h6>\n                                                                        <i class=\"ti-time\"></i> {{actTrack.TrackDatetime | date: 'dd/MM/yyyy HH:mm:ss'}} <!--11 hours ago via Twitter-->\n                                                                    </h6>\n                                                                </div>\n                                                            </li>\n                                                        </ng-container>\n                                                        <ng-container *ngIf=\"actTrack.CategoryID == 2 || actTrack.CategoryID == 14 || actTrack.CategoryID == 23\">\n                                                            <li>\n                                                                <div class=\"timeline-badge warning\"> <i class=\"material-icons\" matTooltip=\"{{actTrack.WoNumber}}\" [matTooltipPosition]=\"'above'\">fingerprint</i> </div>\n                                                                <div class=\"timeline-panel\">\n                                                                    <div class=\"timeline-heading\"> <span class=\"label label-warning\">{{actTrack.CategoryTitle}}</span> </div>\n                                                                    <div class=\"timeline-body\">\n                                                                        <p>User: <strong>{{actTrack.UserName}}.</strong></p>\n                                                                        <p>{{actTrack.DescriptionFormat}}</p>\n                                                                    </div>\n                                                                    <h6>\n                                                                        <i class=\"ti-time\"></i> {{actTrack.TrackDatetime | date: 'dd/MM/yyyy HH:mm:ss'}} <!--11 hours ago via Twitter-->\n                                                                    </h6>\n                                                                </div>\n                                                            </li>\n                                                        </ng-container>\n                                                    </ng-container>\n                                                </ul>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n\n                    </div>\n                </div>\n            </div>\n        </div>\n        <br />\n        <br />\n\n\n        <div *ngIf=\"isActivity == false\">\n\n\n            <div class=\"col-lg-12\" style=\"background-color:white;\">\n                <!--margin-bottom:20px;-->\n                <!--<div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n                            <div class=\"panel panel-default\">-->\n                <div class=\"row\">\n                    <div class=\"col-md-6 col-sm-6 col-xs-10\">\n                        <h4 class=\"card-title pull-left\"><b>Work Orders {{workOrderDetail.WorkOrderNo}}</b></h4>\n                    </div>\n                    <div class=\"col-md-6 col-sm-6 col-xs-2\">\n                        <ng-container *ngIf=\"userProfile.RoleId == 1 || userProfile.RoleId == 2 || userProfile.RoleId == 6\">\n                            <button data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"getAutocompleteUser()\" class=\"btn btn-simple btn-icon pull-right\" matTooltip=\"Work Order Assignment\" [matTooltipPosition]=\"'left'\"> <i class=\"more-less glyphicon glyphicon-plus\"></i> </button>\n                        </ng-container>\n                    </div>\n                </div>\n                <!--<div data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"resetWorkOrderAssignment()\" class=\"btn pull-right btn-info\"><i class=\"fa fa-address-book\"></i></div>-->\n                <!--<div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\n                                    <h4 class=\"panel-title\">\n                                        <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                                            <i class=\"more-less glyphicon glyphicon-plus\"></i>\n                                            {{workOrderDetail.WorkOrderNo}}\n                                        </a>\n                                    </h4>\n                                </div>-->\n                <!--<div id=\"collapseOne\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\">-->\n                <div class=\"col-sm-12\">\n                    <!--style=\"background-color:#EEEEEE!important;\"-->\n                    <div class=\"table-responsive\" [ngClass]=\"userProfile.RoleId == 1 || userProfile.RoleId == 2 || userProfile.RoleId == 6? 'cust-table' : ''\">\n                        <table class=\"table table-bordered  table-hover\" style=\"float:left !important;margin-bottom:0\">\n                            <tr>\n                                <th>User</th>\n                                <th>Notes</th>\n                                <th>Status</th>\n                                <th></th>\n                            </tr>\n                            <tr *ngFor=\"let workAsg of workOrderAssignmentList\" [ngClass]=\"workAsg.IsDeleted == true ? 'strikeout strike-through-text':''\">\n                                <td>{{workAsg.UserName}}</td>\n                                <td>{{workAsg.Description}}</td>\n                                <td>\r\n                                    <ng-container *ngIf=\"workAsg.IsDeleted != true\">\r\n                                        {{workAsg.WorkOrderAssignmentStatus}}\r\n                                    </ng-container>\r\n                                    <ng-container *ngIf=\"workAsg.IsDeleted == true\">\r\n                                        Deleted\r\n                                    </ng-container>\r\n                                </td>\n                                <td class=\"text-center\" id=\"td-actions\" [ngClass]=\"workAsg.IsDeleted == true ? 'padding21':''\">\n                                    <ng-container *ngIf=\"(userProfile.RoleId == 1 || userProfile.RoleId == 2 || userProfile.RoleId == 6) && (workAsg.IsDeleted != true)\">\n                                        <button class=\"btn btn-simple btn-warning btn-icon btn-wo edit\" (click)=\"viewWorkOrderAssignment(workAsg.ID)\" data-toggle=\"modal\" data-target=\"#myModal\"><i class=\"material-icons\">dvr</i> </button>\n                                        <i class=\"fa fa-close\" style=\"cursor: pointer;\" (click)=\"deleteWorkOrderAssignment(workAsg.ID)\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\"></i>\n                                    </ng-container>\n</td>\n                            </tr>\n                        </table>\n                    </div>\n                    <button type=\"submit\" class=\"btn btn-info\" (click)=\"sendEmailWorkOrderAssignment()\" [disabled]=\"isSend\" style=\"float:left\">Send</button>\n                    <span *ngIf=\"sendDateTime\" style=\"float: left;padding: 20px 7px;\"> {{sendDateTime | date: 'dd/MM/yyyy HH:mm:ss' }} </span>\n                    <!--</div>\n                                    </div>\n                    </div>-->\n                </div><!--end--12-->\n            </div><!--end--row-->\n\n\n\n\n\n\n            <div class=\"col-lg-12\" style=\"background-color:white; margin-top:20px;\">\n                <div class=\"row\">\n                    <div class=\"col-md-6 col-sm-6 col-xs-10\">\n                        <h4 class=\"card-title\"> <b> Add Documents</b> </h4>\n                    </div>\n                    <div class=\"col-md-6 col-sm-6 col-xs-2\">\n                        <div class=\"picture-container\">\n                            <div class=\"picture\">\n                                <label for=\"woDocs\" class=\"btn btn-simple btn-icon  pull-right\" style=\"margin-right:10px;\">\n                                    <!--<i class=\"material-icons btn btn-info\">add_circle</i>-->\n                                    <i class=\"more-less glyphicon glyphicon-plus\" style=\"font-size:12px;cursor: pointer; \" matTooltip=\"Work Order Document\" [matTooltipPosition]=\"'left'\"></i>\n                                </label>\n                                <input type=\"file\" style=\"display:none\" id=\"woDocs\" (change)=\"handleUpload($event)\" ng2FileSelect [uploader]=\"uploader\" multiple />\n                                <!--accept=\".pdf,.doc,.docx\"-->\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-12\">\n                    <div class=\"table-responsive\">\n                        <table class=\"table table-bordered table-hover\" style=\"float:left !important\">\n                            <tr>\n                                <th>#</th>\n                                <th>Name</th>\n                                <th></th>\n                            </tr>\n                            <tr *ngFor=\"let wODoc of workOrderDocsList;let idx=index\">\n                                <td><strong>{{idx + 1}}.</strong></td>\n                                <td><strong><a href=\"{{wODoc.FilePath}}\" target=\"_blank\">{{ wODoc.FileName }}</a></strong></td>\n                                <td class=\"text-center\">\n                                    <ng-container *ngIf=\"userProfile.RoleId == 1 || userProfile.RoleId == 2 || userProfile.RoleId == 6 || wODoc.UploadBy == userProfile.ID\">\n                                        <i class=\"fa fa-close\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" style=\"cursor: pointer;\" (click)=\"deleteWorkOrderDocuments(wODoc.ID,wODoc.WorkOrderId, wODoc.WorkOrderNo, wODoc.FileName)\"></i>\n                                    </ng-container>\n                                </td>\n                            </tr>\n                            <tr *ngFor=\"let item of uploader.queue\">\n                                <td><strong></strong></td>\n                                <td><strong>{{ item?.file?.name }}</strong></td>\n                                <td class=\"text-center\">\n                                <i class=\"fa fa-close\" style=\"cursor: pointer;\" (click)=\"item.remove()\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\"></i>\n                                </td>\n                            </tr>\n                        </table>\n                    </div>\n\n                    <div class=\"progress\" style=\"\">\n                        <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n                    </div>\n\n                    <div class=\"pull-left\">\n                        <button class=\"btn btn-info\" (click)=\"addWorkOrderDocument();\" [disabled]=\"!uploader.getNotUploadedItems().length\"> Upload </button>\n                    </div>\n\n                </div>\n            </div>\n\n\n            <div class=\"col-lg-12\" style=\"background-color:white; margin-top:20px;\">\n                <h4 class=\"card-title\"> <b>Maintenance</b> </h4>\n                <div class=\"col-sm-12\">\n                    <div class=\"table-responsive\">\n                        <table class=\"table table-bordered  table-hover\" style=\"float:left !important\">\n                            <tr>\n                                <th>MT#</th>\n                                <th>Job-Wo</th>\n                                <th>Type</th>\n                                <th>Raised By</th>\n                                <th>Date</th>\n                                <th>Status</th>\n                                <th>Actions</th>\n                            </tr>\n                            <tr *ngFor=\"let mnt of maintenanceList\">\n                                <td>{{ mnt.ID }}</td>\n                                <td>{{ mnt.WorkOrderNo }}</td>\n                                <td>{{ mnt.MTypeTitle }}</td>\n                                <td>{{ mnt.Username }}</td>\n                                <td>\n                                    <div *ngIf=\"mnt.MaintenanceDate\">{{ mnt.MaintenanceDate | date: 'dd/MM/yyyy'}} </div>\n                                    <div *ngIf=\"!mnt.MaintenanceDate\">{{ mnt.MaintenanceDate }} </div>\n                                </td>\n                                <td>{{ mnt.Status }}</td>\n                                <td>\n                                    <ng-container *ngIf=\"userProfile.RoleId == 1 || userProfile.RoleId == 2 || userProfile.RoleId == 6\">\n                                        <button class=\"btn btn-simple btn-warning btn-icon edit\" (click)=\"goToCreateMaintenance(mnt.ID)\"> <i class=\"material-icons\">dvr</i> </button>\n                                    </ng-container>\n                                </td>\n                            </tr>\n                        </table>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-lg-12\" style=\"background-color:white; margin-top:20px;\">\n                <h4 class=\"card-title\"> <b>CheckList</b> </h4>\n                <div class=\"col-sm-12\">\n                    <div class=\"table-responsive\">\n                        <table class=\"table table-bordered  table-hover\" style=\"float:left !important\">\n                            <tr>\n                                <th>FM#</th>\n                                <th>Name</th>\n                                <th>Checked By</th>\n                                <th>Date</th>\n                                <th>Status</th>\n                                <th>Actions</th>\n                            </tr>\n                            <tr *ngFor=\"let chkFWo of chkFormWorkOrderList\">\n                                <td>{{ chkFWo.ID }}</td>\n                                <td>{{ chkFWo.FormName }}</td>\n                                <td>{{ chkFWo.UserName }}</td>\n                                <td>\n                                    <div *ngIf=\"chkFWo.SubmitedDate\">{{ chkFWo.SubmitedDate | date: 'dd/MM/yyyy'}} </div>\n                                    <div *ngIf=\"!chkFWo.SubmitedDate\">{{ chkFWo.SubmitedDate }} </div>\n                                </td>\n                                <td>{{ chkFWo.Status }}</td>\n                                <td>\n                                    <ng-container *ngIf=\"userProfile.RoleId == 1 || userProfile.RoleId == 2 || userProfile.RoleId == 6\">\n                                        <button class=\"btn btn-simple btn-warning btn-icon edit\" (click)=\"getChecklistFormWOAssignmentTaskAnswer(chkFWo.ID)\" data-toggle=\"modal\" data-target=\"#noticeModal\"> <i class=\"material-icons\">dvr</i> </button>\n                                    </ng-container>\n                                </td>\n                            </tr>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Classic Modal -->\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n        <div class=\"wizard-container\">\n            <div class=\"wizard-card\" data-color=\"rose\" id=\"wizardProfile\">\n                <form [formGroup]=\"workOrdAssPage\">\n                    <div class=\"modal-content\">\n                        <div class=\"modal-header\">\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"> <i class=\"material-icons\">clear</i> </button>\n                            <h4 class=\"modal-title\">Assign User</h4>\n                        </div>\n                        <div class=\"modal-body\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-12\">\n                                    <div class=\"form-group label-floating cntEmpty\" [ngClass]=\"displayFieldCss(workOrdAssPage, 'userName')\">\n                                        <label class=\"control-label\">Start typing to select user</label>\n                                        <input ngui-auto-complete formControlName=\"userName\" name=\"userName\" [source]=\"autoUsers\" value-property-name=\"ID\"\n                                               display-property-name=\"UserName\" [list-formatter]=\"myListFormatter\" class=\"form-control\"\n                                               (valueChanged)=\"valueChanged($event)\" />\n                                        <app-field-error-display [displayError]=\"isFieldValid(workOrdAssPage, 'userName')\" errorMsg=\"Select username.\"> </app-field-error-display>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-12\">\n                                    <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(workOrdAssPage, 'description')\">\n                                        <label class=\"control-label\">Add notes or information here</label>\n                                        <!--<input type=\"text\" formControlName=\"description\" name=\"description\" class=\"form-control\" />-->\n                                        <textarea class=\"form-control\" rows=\"4\" cols=\"50\" id=\"description\" formControlName=\"description\"></textarea>\n                                        <app-field-error-display [displayError]=\"isFieldValid(workOrdAssPage, 'description')\" errorMsg=\"Notes is required.\"> </app-field-error-display>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-6\">\n                                    <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(workOrdAssPage, 'ratetype')\">\n                                        <label class=\"control-label\">RateType</label>\n                                        <select placeholder=\"Assign rate\" formControlName=\"ratetype\" name=\"ratetype\" class=\"form-control dropdownview\">\n                                            <option value=\"1\" selected>Hourly</option>\n                                            <option value=\"2\">Fixed</option>\n                                            <option value=\"3\">Boxed</option>\n                                        </select>\n                                        <app-field-error-display [displayError]=\"isFieldValid(workOrdAssPage, 'ratetype')\" errorMsg=\"RateType is required.\"> </app-field-error-display>\n                                    </div>\n                                </div>\n                                <div class=\"col-lg-6\">\n                                    <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(workOrdAssPage, 'rate')\">\n                                        <label class=\"control-label\">Rate</label>\n                                        <input type=\"text\" formControlName=\"rate\" name=\"rate\" class=\"form-control number-decimal-only\" />\n                                        <app-field-error-display [displayError]=\"isFieldValid(workOrdAssPage, 'rate')\" errorMsg=\"Rate is required.\"> </app-field-error-display>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-6\">\n                                    <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(workOrdAssPage, 'fromdate')\">\n                                        <br />\n                                        <!--<mat-datepicker-toggle matSuffix [for]=\"datepickerYear1\">\n                                                            </mat-datepicker-toggle>\n                                                            <mat-input-container>\n                                                                <input matInput\n                                                                       [matDatepicker]=\"datepickerYear1\" name=\"fromdate\"\n                                                                       placeholder=\"From Date\" formControlName=\"fromdate\">\n                                                            </mat-input-container>\n                                                            <mat-datepicker #datepickerYear1\n                                                                            [startView]=\"'month'\">\n                                                            </mat-datepicker>-->\n                                        <md2-datepicker placeholder=\"From Date\" formControlName=\"fromdate\" name=\"fromdate\" format=\"dd/MM/y HH:mm A\" type=\"datetime\" startView=\"month\"></md2-datepicker>\n                                        <app-field-error-display [displayError]=\"isFieldValid(workOrdAssPage, 'fromdate')\" errorMsg=\"From Date is required.\"> </app-field-error-display>\n                                    </div>\n                                </div>\n                                <div class=\"col-lg-6\">\n                                    <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(workOrdAssPage, 'todate')\">\n                                        <br />\n                                        <!--<mat-datepicker-toggle matSuffix [for]=\"datepickerYear\">\n                                                            </mat-datepicker-toggle>\n                                                            <mat-input-container>\n                                                                <input matInput\n                                                                       [matDatepicker]=\"datepickerYear\" name=\"todate\"\n                                                                       placeholder=\"To Date\" formControlName=\"todate\">\n                                                            </mat-input-container>\n                                                            <mat-datepicker #datepickerYear\n                                                                            [startView]=\"'month'\">\n                                                            </mat-datepicker>-->\n                                        <md2-datepicker placeholder=\"To Date\" formControlName=\"todate\" name=\"todate\" format=\"dd/MM/y HH:mm A\" type=\"datetime\" startView=\"month\"></md2-datepicker>\n                                        <app-field-error-display [displayError]=\"isFieldValid(workOrdAssPage, 'todate')\" errorMsg=\"To date should be greater than From date\"> </app-field-error-display>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <br />\n                                <div class=\"pull-right\">\n                                    <button type=\"submit\" [disabled]=\"(isWoStatus == 'Created' || isWoStatus == null)? '':true\" id=\"btnSubmit\" class=\"btn btn-success\" (click)=\"createWorkOrderAssignment()\">Submit</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n<!--  End Modal -->\n\n<!-- notice modal -->\r\n<div class=\"modal fade\" id=\"noticeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <form>\r\n        <div class=\"modal-dialog modal-notice\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><i class=\"material-icons\">clear</i></button>\r\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">Task</h5>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <div class=\"instruction\">\r\n                        <div class=\"row\">\r\n                            <div class=\"table-responsive\">\r\n                                <table class=\"table table-bordered  table-hover\" style=\"float:left !important\">\r\n                                    <tr>\r\n                                        <th>Task</th>\r\n                                        <th>Checked By</th>\r\n                                        <th>Date</th>\r\n                                        <th>Answer</th>\r\n                                        <th>Status</th>\r\n                                    </tr>\r\n                                    <tr *ngFor=\"let chkFWo of chkFormWorkOrderTask\">\r\n                                        <td>{{ chkFWo.Task }}</td>\r\n                                        <td>{{ chkFWo.UserName }}</td>\r\n                                        <td>\r\n                                            <div *ngIf=\"chkFWo.AnswerDate\">{{ chkFWo.AnswerDate | date: 'dd/MM/yyyy'}} </div>\r\n                                            <div *ngIf=\"!chkFWo.AnswerDate\">{{ chkFWo.AnswerDate }} </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div *ngIf=\"chkFWo.IsAnswer == true\">YES</div>\r\n                                            <div *ngIf=\"chkFWo.IsAnswer == false\">NO</div>\r\n                                        </td>\r\n                                        <td>{{ chkFWo.Status }}</td>\r\n                                    </tr>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n<!-- end notice modal -->\n\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n<script>\n    $(document).ready(function () {\n        $('.loader').hide();\n    });\n    function toggleIcon(e) {\n        $(e.target)\n            .prev('.panel-heading')\n            .find(\".more-less\")\n            .toggleClass('glyphicon-plus glyphicon-minus');\n    }\n    $('.panel-group').on('hidden.bs.collapse', toggleIcon);\n    $('.panel-group').on('shown.bs.collapse', toggleIcon);\n</script>\n"

/***/ }),

/***/ "./src/app/wo-assignment/wo-assignment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WoAssignmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_commonService__ = __webpack_require__("./src/app/services/commonService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_userService__ = __webpack_require__("./src/app/services/userService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_workOrderService__ = __webpack_require__("./src/app/services/workOrderService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_activityService__ = __webpack_require__("./src/app/services/activityService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_maintenanceService__ = __webpack_require__("./src/app/services/maintenanceService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_checklistformService__ = __webpack_require__("./src/app/services/checklistformService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__forms_validationforms_password_validator_component__ = __webpack_require__("./src/app/forms/validationforms/password-validator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var WoAssignmentComponent = /** @class */ (function () {
    function WoAssignmentComponent(mapsAPILoader, ngZone, http, router, activatedRoute, commonService, workOrderService, activityService, maintenanceService, checklistformService, userService, _sanitizer, formBuilder, dateAdapter, datepipe) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.commonService = commonService;
        this.workOrderService = workOrderService;
        this.activityService = activityService;
        this.maintenanceService = maintenanceService;
        this.checklistformService = checklistformService;
        this.userService = userService;
        this._sanitizer = _sanitizer;
        this.formBuilder = formBuilder;
        this.dateAdapter = dateAdapter;
        this.datepipe = datepipe;
        this.workOrderDetail = {};
        this.uploadedFiles = [];
        this.isActivity = false;
        this.isWoStatus = null;
        this.workOrdAssPage = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            userName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            description: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            ratetype: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            rate: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            fromdate: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            todate: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
        });
        this.uploader = new __WEBPACK_IMPORTED_MODULE_14_ng2_file_upload__["FileUploader"]({ url: this.commonService.baseApiUrl + "AddWorkOrderDocuments/", itemAlias: 'file' });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
        dateAdapter.setLocale('en-GB');
    }
    WoAssignmentComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    WoAssignmentComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    WoAssignmentComponent.prototype.isFieldValid = function (form, field) {
        return !form.get(field).valid && form.get(field).touched;
    };
    WoAssignmentComponent.prototype.displayFieldCss = function (form, field) {
        return {
            'has-error': this.isFieldValid(form, field),
            'has-feedback': this.isFieldValid(form, field)
        };
    };
    WoAssignmentComponent.prototype.showSwal = function (text) {
        __WEBPACK_IMPORTED_MODULE_13_sweetalert2___default()({
            type: 'success',
            text: text,
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-success'
        }).catch(__WEBPACK_IMPORTED_MODULE_13_sweetalert2___default.a.noop);
    };
    WoAssignmentComponent.prototype.showConfirmSwal = function (text) {
        __WEBPACK_IMPORTED_MODULE_13_sweetalert2___default()({
            title: 'Are you sure?',
            text: text,
            type: 'warning',
            showCancelButton: true,
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            confirmButtonText: 'Yes, delete it!',
            buttonsStyling: false
        }).catch(__WEBPACK_IMPORTED_MODULE_13_sweetalert2___default.a.noop);
    };
    WoAssignmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (JSON.parse(sessionStorage.getItem('LogEmployee')) != null) {
            this.getAutocompleteUser();
            this.activatedRoute.queryParams.subscribe(function (params) {
                if (params['workID'] == undefined) {
                    _this.router.navigate(['jobs']);
                }
                else {
                    var workOrdID = params['workID'];
                    _this.userProfile = JSON.parse(sessionStorage.getItem('LogEmployee'));
                    _this.getWorkOrdersByWorkOrdID(workOrdID);
                    _this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
                    _this.uploader.onBuildItemForm = function (fileItem, form) {
                        form.append('WorkOrderId', localStorage.getItem("WorkOrderId"));
                        form.append('OldWorkOrderId', localStorage.getItem("OldWorkOrderId"));
                        form.append('WorkOrderNo', localStorage.getItem("WorkOrderNo"));
                        form.append('UploadBy', _this.userProfile.ID);
                    };
                    _this.uploader.onSuccessItem = function (item, response, status, headers) {
                        _this.showSwal("File has been uploaded successfully!");
                        _this.getWorkOrderDocuments(localStorage.getItem("WorkOrderId"));
                    };
                    _this.uploader.onCompleteAll = function () {
                        _this.uploader.clearQueue();
                    };
                }
            });
            $(document).ready(function () {
                $(".cntEmpty").removeClass("is-empty");
                $(".collapse").on('show.bs.collapse', function () {
                    $(this).parent().find(".glyphicon").removeClass("glyphicon-plus").addClass("glyphicon-minus");
                }).on('hide.bs.collapse', function () {
                    $(this).parent().find(".glyphicon").removeClass("glyphicon-minus").addClass("glyphicon-plus");
                });
                $('.number-decimal-only').keypress(function (e) {
                    var keyCode = e.which ? e.which : e.keyCode;
                    if ((keyCode != 46 || $(this).val().indexOf('.') != -1) &&
                        (keyCode < 48 || keyCode > 57))
                        return false;
                    return true;
                });
            });
            this.workOrdAssPage = this.formBuilder.group({
                userName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                ratetype: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                rate: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                fromdate: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                todate: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
            }, {
                validator: __WEBPACK_IMPORTED_MODULE_15__forms_validationforms_password_validator_component__["a" /* PasswordValidation */].DateValidation // your validation method
            });
        }
        else {
            this.router.navigate(['pages/login']);
        }
    };
    WoAssignmentComponent.prototype.getMaintenanceDetails = function (woNumber) {
        var _this = this;
        $('.loader').show();
        this.maintenanceService.GetMaintenanceByWONumber(this.commonService.baseApiUrl, woNumber).subscribe(function (data) {
            var dataMtance = JSON.stringify(data);
            var mtanceParse = JSON.parse(dataMtance);
            var mTanceList = JSON.parse(mtanceParse["_body"]);
            _this.maintenanceList = null;
            if (mTanceList != null) {
                _this.maintenanceList = mTanceList;
            }
        });
    };
    WoAssignmentComponent.prototype.getAutocompleteUser = function () {
        var _this = this;
        $('.loader').show();
        this.userService.GetAutocompleteUser(this.commonService.baseApiUrl).subscribe(function (data) {
            var dataUsers = JSON.stringify(data);
            var userParse = JSON.parse(dataUsers);
            var userInfo = JSON.parse(userParse["_body"]);
            _this.resetWorkOrderAssignment();
            if (userInfo != null) {
                _this.autoUsers = userInfo;
                $('.loader').hide();
            }
        });
    };
    WoAssignmentComponent.prototype.activityDocShow = function () {
        this.isActivity = true;
        this.getActivityTracker(localStorage.getItem("WorkOrderNo"));
    };
    WoAssignmentComponent.prototype.activityDocHide = function () {
        this.isActivity = false;
    };
    WoAssignmentComponent.prototype.sendEmailWorkOrderAssignment = function () {
        var _this = this;
        $('.loader').show();
        if (this.workOrderAssignmentList != null) {
            this.workOrderService.SendEmailWorkOrderAssignment(this.commonService.baseApiUrl, this.workOrderAssignmentList).subscribe(function (data) {
                var dataUsers = JSON.stringify(data);
                var userParse = JSON.parse(dataUsers);
                var userInfo = JSON.parse(userParse["_body"]);
                if (userInfo != null) {
                    _this.showSwal("Work order email has been sent successfully!");
                    _this.getWorkOrderAssignment(localStorage.getItem("WorkOrderId"));
                    _this.autoUsers = userInfo;
                    $('.loader').hide();
                }
            });
        }
    };
    WoAssignmentComponent.prototype.deleteWorkOrderAssignment = function (workAsgId) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_13_sweetalert2___default()({
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
            _this.workOrderService.DeleteWorkOrderAssignment(_this.commonService.baseApiUrl, workAsgId).subscribe(function (data) {
                var dataUsers = JSON.stringify(data);
                var userParse = JSON.parse(dataUsers);
                var userInfo = JSON.parse(userParse["_body"]);
                if (userInfo == true) {
                    _this.getWorkOrderAssignment(localStorage.getItem("WorkOrderId"));
                    $('.loader').hide();
                    __WEBPACK_IMPORTED_MODULE_13_sweetalert2___default()({
                        title: 'Deleted!',
                        text: 'User has been deleted.',
                        type: 'success',
                        confirmButtonClass: 'btn btn-success',
                        buttonsStyling: false
                    }).catch(__WEBPACK_IMPORTED_MODULE_13_sweetalert2___default.a.noop);
                }
            });
        }).catch(__WEBPACK_IMPORTED_MODULE_13_sweetalert2___default.a.noop);
    };
    WoAssignmentComponent.prototype.viewWorkOrderAssignment = function (woAstID) {
        for (var _i = 0, _a = this.workOrderAssignmentList; _i < _a.length; _i++) {
            var woa = _a[_i];
            if (woAstID == woa.ID) {
                var elems = document.querySelectorAll(".label-floating");
                if (elems != null) {
                    [].forEach.call(elems, function (el) {
                        el.classList.remove("is-empty");
                    });
                }
                this.workOrdAssPage.controls["description"].setValue(woa.Description);
                this.workOrdAssPage.controls["rate"].setValue(woa.Rate);
                this.workOrdAssPage.controls["ratetype"].setValue(woa.RateType);
                this.workOrdAssPage.controls["fromdate"].setValue(woa.FromDate);
                this.workOrdAssPage.controls["todate"].setValue(woa.ToDate);
                this.workOrdAssPage.controls["userName"].setValue(woa.UserName);
                this.isWoStatus = woa.WorkOrderAssignmentStatus;
                this.assUserID = woa.UserId;
            }
        }
    };
    WoAssignmentComponent.prototype.getWorkOrderAssignment = function (workOrdId) {
        var _this = this;
        $('.loader').show();
        this.workOrderService.GetWorkOrderAssignment(this.commonService.baseApiUrl, workOrdId).subscribe(function (data) {
            var datawAsg = JSON.stringify(data);
            var wAsgParse = JSON.parse(datawAsg);
            var wAsgList = JSON.parse(wAsgParse["_body"]);
            _this.workOrderAssignmentList = null;
            if (wAsgList != null && wAsgList.length > 0) {
                _this.workOrderAssignmentList = wAsgList;
                if (wAsgList[0].SendDateTime != null) {
                    _this.sendDateTime = wAsgList[0].SendDateTime;
                }
                else {
                    _this.sendDateTime = null;
                }
                $('.loader').hide();
                _this.isSend = false;
            }
            else {
                _this.sendDateTime = null;
                _this.isSend = true;
            }
        });
    };
    WoAssignmentComponent.prototype.getActivityTracker = function (workOrdNo) {
        var _this = this;
        $('.loader').show();
        this.activityService.GetActivityTracker(this.commonService.baseApiUrl, workOrdNo).subscribe(function (data) {
            var datawAct = JSON.stringify(data);
            var actParse = JSON.parse(datawAct);
            var actList = JSON.parse(actParse["_body"]);
            _this.workOrdActTrackerList = null;
            if (actList != null) {
                _this.workOrdActTrackerList = actList;
                console.log(_this.workOrdActTrackerList);
                $('.loader').hide();
            }
        });
    };
    WoAssignmentComponent.prototype.createWorkOrderAssignment = function () {
        var _this = this;
        $('.loader').show();
        if (this.workOrdAssPage.valid) {
            var fDate = this.datepipe.transform(this.workOrdAssPage.controls["fromdate"].value, 'yyyy/MM/dd HH:mm:ss');
            var tDate = this.datepipe.transform(this.workOrdAssPage.controls["todate"].value, 'yyyy/MM/dd HH:mm:ss');
            var contact = {
                UserId: this.assUserID,
                WorkOrderId: localStorage.getItem("WorkOrderId"),
                OldWorkOrderId: localStorage.getItem("OldWorkOrderId"),
                WorkOrderNo: localStorage.getItem("WorkOrderNo"),
                Description: this.workOrdAssPage.controls["description"].value,
                RateType: this.workOrdAssPage.controls["ratetype"].value,
                Rate: this.workOrdAssPage.controls["rate"].value,
                FromDate: fDate,
                ToDate: tDate,
                WorkOrderAssignmentStatus: "Created",
                AssignBy: this.userProfile.ID
            };
            this.workOrderService.CreateWorkOrderAssignment(this.commonService.baseApiUrl, contact).subscribe(function (data) {
                var dataUsers = JSON.stringify(data);
                var userParse = JSON.parse(dataUsers);
                var userInfo = JSON.parse(userParse["_body"]);
                $('#myModal').modal('toggle');
                if (userInfo == "Ok") {
                    _this.getWorkOrderAssignment(localStorage.getItem("WorkOrderId"));
                    _this.showSwal("Work order has been assigned.");
                }
                else if (userInfo == "already") {
                    _this.showSwal("Work order already assigned.");
                }
                _this.workOrdAssPage.reset();
                $('.loader').hide();
            });
        }
        else {
            this.validateAllFormFields(this.workOrdAssPage);
        }
    };
    WoAssignmentComponent.prototype.validateAllFormFields = function (formGroup) {
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
    WoAssignmentComponent.prototype.valueChanged = function (newVal) {
        this.assUserID = newVal.ID;
    };
    WoAssignmentComponent.prototype.resetWorkOrderAssignment = function () {
        this.workOrdAssPage.reset();
    };
    WoAssignmentComponent.prototype.myListFormatter = function (data) {
        return data['UserName'];
    };
    WoAssignmentComponent.prototype.getWorkOrdersByWorkOrdID = function (workOrdID) {
        var _this = this;
        $('.loader').show();
        this.workOrderService.GetWorkOrdersByWorkOrdID(this.commonService.baseApiUrl, workOrdID).subscribe(function (data) {
            var dataWorkOrders = JSON.stringify(data);
            var workParse = JSON.parse(dataWorkOrders);
            var workOrderInfo = JSON.parse(workParse["_body"]);
            localStorage.removeItem("WorkOrderId");
            localStorage.removeItem("OldWorkOrderId");
            localStorage.removeItem("WorkOrderNo");
            if (workOrderInfo != null) {
                _this.workOrderDetail = workOrderInfo;
                var wAddress = '';
                if (workOrderInfo.AddressLine1 != null && workOrderInfo.AddressLine1 != '') {
                    wAddress += workOrderInfo.AddressLine1.replace(/,\s*$/, "") + ",";
                }
                if (workOrderInfo.AddressLine2 != null && workOrderInfo.AddressLine2 != '') {
                    wAddress += workOrderInfo.AddressLine2.replace(/,\s*$/, "") + ",";
                }
                if (workOrderInfo.AddressLine3 != null && workOrderInfo.AddressLine3 != '') {
                    wAddress += workOrderInfo.AddressLine3.replace(/,\s*$/, "") + ",";
                }
                if (workOrderInfo.Town != null && workOrderInfo.Town != '') {
                    wAddress += workOrderInfo.Town.replace(/,\s*$/, "") + ",";
                }
                if (workOrderInfo.State != null && workOrderInfo.State != '') {
                    wAddress += workOrderInfo.State.replace(/,\s*$/, "") + ",";
                }
                if (workOrderInfo.PostalCode != null && workOrderInfo.PostalCode != '') {
                    wAddress += workOrderInfo.PostalCode.replace(/,\s*$/, "") + ",";
                }
                if (wAddress != null && wAddress != '') {
                    _this.wrokOrdAddress = wAddress.slice(0, -1);
                }
                else {
                    _this.wrokOrdAddress = "7 Peace St, Harlaxton QLD 4350";
                }
                localStorage.setItem("WorkOrderId", workOrderInfo.ID);
                localStorage.setItem("OldWorkOrderId", workOrderInfo.OldWorkOrderId);
                localStorage.setItem("WorkOrderNo", workOrderInfo.WorkOrderNo);
                _this.getWorkOrderAssignment(localStorage.getItem("WorkOrderId"));
                _this.getWorkOrderDocuments(localStorage.getItem("WorkOrderId"));
                _this.getMaintenanceDetails(workOrderInfo.WorkOrderNo);
                _this.getChecklistFormWorkOrderAssignment(localStorage.getItem("WorkOrderId"));
                $('.loader').hide();
                _this.getLocation(_this.wrokOrdAddress);
                _this.getLocation(_this.wrokOrdAddress);
            }
        });
    };
    WoAssignmentComponent.prototype.getLocation = function (address) {
        var _this = this;
        if (address != null) {
            this.http.get("https://maps.google.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyDvC4D3B6FJvtMZLOfUsIUnpUxpET_uc-w").subscribe(function (data) {
                var dataMap = JSON.stringify(data);
                var mapParse = JSON.parse(dataMap);
                var mapList = JSON.parse(mapParse["_body"]);
                if (mapList != null) {
                    console.log(mapList);
                    _this.latitude = mapList["results"][0]["geometry"]["location"]["lat"];
                    _this.longitude = mapList["results"][0]["geometry"]["location"]["lng"];
                    _this.zoom = 10;
                }
            });
        }
        else {
            this.latitude = -33.865143;
            this.longitude = 151.209900;
            this.zoom = 10;
        }
    };
    WoAssignmentComponent.prototype.addWorkOrderDocument = function () {
        this.uploader.uploadAll();
    };
    WoAssignmentComponent.prototype.getWorkOrderDocuments = function (workOrdId) {
        var _this = this;
        $('.loader').show();
        this.workOrderService.GetWorkOrderDocuments(this.commonService.baseApiUrl, workOrdId).subscribe(function (data) {
            var datawAsg = JSON.stringify(data);
            var wAsgParse = JSON.parse(datawAsg);
            var wAsgList = JSON.parse(wAsgParse["_body"]);
            _this.workOrderDocsList = null;
            if (wAsgList != null) {
                _this.workOrderDocsList = wAsgList;
                $('.loader').hide();
            }
        });
    };
    WoAssignmentComponent.prototype.getChecklistFormWorkOrderAssignment = function (workOrdId) {
        var _this = this;
        $('.loader').show();
        this.checklistformService.GetChecklistFormWorkOrderAssignment(this.commonService.baseApiUrl, workOrdId).subscribe(function (data) {
            var datawAsg = JSON.stringify(data);
            var wAsgParse = JSON.parse(datawAsg);
            var wAsgList = JSON.parse(wAsgParse["_body"]);
            _this.chkFormWorkOrderList = null;
            if (wAsgList != null) {
                _this.chkFormWorkOrderList = wAsgList;
                $('.loader').hide();
            }
        });
    };
    WoAssignmentComponent.prototype.getChecklistFormWOAssignmentTaskAnswer = function (chkFWoID) {
        var _this = this;
        $('.loader').show();
        this.checklistformService.GetChecklistFormWOAssignmentTaskAnswer(this.commonService.baseApiUrl, chkFWoID, localStorage.getItem("WorkOrderId")).subscribe(function (data) {
            var datawAsg = JSON.stringify(data);
            var wAsgParse = JSON.parse(datawAsg);
            var wAsgList = JSON.parse(wAsgParse["_body"]);
            _this.chkFormWorkOrderTask = null;
            if (wAsgList != null) {
                console.log(_this.chkFormWorkOrderTask);
                _this.chkFormWorkOrderTask = wAsgList;
                $('.loader').hide();
            }
        });
    };
    WoAssignmentComponent.prototype.deleteWorkOrderDocuments = function (workDocsID, workOrdId, workOrderNo, fileName) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_13_sweetalert2___default()({
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
            _this.workOrderService.DeleteWorkOrderDocuments(_this.commonService.baseApiUrl, workDocsID, workOrderNo, fileName).subscribe(function (data) {
                var datawAsg = JSON.stringify(data);
                var wAsgParse = JSON.parse(datawAsg);
                var wAsgList = JSON.parse(wAsgParse["_body"]);
                if (wAsgList == true) {
                    $('.loader').hide();
                    _this.getWorkOrderDocuments(workOrdId);
                    __WEBPACK_IMPORTED_MODULE_13_sweetalert2___default()({
                        title: 'Deleted!',
                        text: 'Your file has been deleted.',
                        type: 'success',
                        confirmButtonClass: 'btn btn-success',
                        buttonsStyling: false
                    }).catch(__WEBPACK_IMPORTED_MODULE_13_sweetalert2___default.a.noop);
                }
            });
        }).catch(__WEBPACK_IMPORTED_MODULE_13_sweetalert2___default.a.noop);
    };
    WoAssignmentComponent.prototype.handleUpload = function (data) {
        if (data && data.response) {
            data = JSON.parse(data.response);
            this.uploadedFiles.push(data);
        }
    };
    WoAssignmentComponent.prototype.goToCreateMaintenance = function (mtId) {
        this.router.navigate(['create-maintenance'], { queryParams: { mtid: mtId } });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], WoAssignmentComponent.prototype, "searchElementRef", void 0);
    WoAssignmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-wo-assignment',
            template: __webpack_require__("./src/app/wo-assignment/wo-assignment.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_commonService__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_6__services_workOrderService__["a" /* WorkOrderService */], __WEBPACK_IMPORTED_MODULE_5__services_userService__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_7__services_activityService__["a" /* ActivityService */], __WEBPACK_IMPORTED_MODULE_16__angular_common__["DatePipe"], __WEBPACK_IMPORTED_MODULE_8__services_maintenanceService__["a" /* MaintenanceService */], __WEBPACK_IMPORTED_MODULE_9__services_checklistformService__["a" /* ChecklistFormService */]],
            styles: ["md-calendar {\n      width: 300px;\n  }"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_11__agm_core__["c" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__services_commonService__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_6__services_workOrderService__["a" /* WorkOrderService */],
            __WEBPACK_IMPORTED_MODULE_7__services_activityService__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_8__services_maintenanceService__["a" /* MaintenanceService */],
            __WEBPACK_IMPORTED_MODULE_9__services_checklistformService__["a" /* ChecklistFormService */],
            __WEBPACK_IMPORTED_MODULE_5__services_userService__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["a" /* DateAdapter */],
            __WEBPACK_IMPORTED_MODULE_16__angular_common__["DatePipe"]])
    ], WoAssignmentComponent);
    return WoAssignmentComponent;
}());



/***/ }),

/***/ "./src/app/wo-assignment/wo-assignment.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WoAssignmentModule", function() { return WoAssignmentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wo_assignment_routing__ = __webpack_require__("./src/app/wo-assignment/wo-assignment.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wo_assignment_component__ = __webpack_require__("./src/app/wo-assignment/wo-assignment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngui_auto_complete__ = __webpack_require__("./node_modules/@ngui/auto-complete/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngui_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__ngui_auto_complete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_auto_complete__ = __webpack_require__("./node_modules/ng2-auto-complete/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_auto_complete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__field_error_display_field_error_display_module__ = __webpack_require__("./src/app/field-error-display/field-error-display.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_md2__ = __webpack_require__("./node_modules/md2/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var WoAssignmentModule = /** @class */ (function () {
    function WoAssignmentModule() {
    }
    WoAssignmentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__wo_assignment_routing__["a" /* WoAssignmentRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__app_module__["b" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_8__ngui_auto_complete__["NguiAutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_9_ng2_auto_complete__["Ng2AutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_10__field_error_display_field_error_display_module__["a" /* FieldErrorDisplayModule */],
                __WEBPACK_IMPORTED_MODULE_11_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_7__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyALhBWvI6EuL2Vul0ykYis51D_ckKtxVCc',
                    libraries: ["places"]
                }),
                __WEBPACK_IMPORTED_MODULE_12_md2__["a" /* Md2DatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_12_md2__["b" /* MdNativeDateModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__wo_assignment_component__["a" /* WoAssignmentComponent */]
            ]
        })
    ], WoAssignmentModule);
    return WoAssignmentModule;
}());



/***/ }),

/***/ "./src/app/wo-assignment/wo-assignment.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WoAssignmentRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wo_assignment_component__ = __webpack_require__("./src/app/wo-assignment/wo-assignment.component.ts");

var WoAssignmentRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__wo_assignment_component__["a" /* WoAssignmentComponent */]
            }]
    }
];


/***/ })

});
//# sourceMappingURL=wo-assignment.module.chunk.js.map
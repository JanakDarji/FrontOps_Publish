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

module.exports = "<title>Aspect WO Assignment</title>\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<script src=\"https://maps.googleapis.com/maps/api/js?sensor=false\"></script>\r\n<style>\r\n    .tab-pane .table tbody > tr > td:first-child {\r\n        width: 0px !important;\r\n    }\r\n    /* USER PROFILE PAGE */\r\n    .card {\r\n        margin-top: 20px;\r\n        padding: 30px;\r\n        background-color: rgba(214, 224, 226, 0.2);\r\n        -webkit-border-top-left-radius: 5px;\r\n        -moz-border-top-left-radius: 5px;\r\n        border-top-left-radius: 5px;\r\n        -webkit-border-top-right-radius: 5px;\r\n        -moz-border-top-right-radius: 5px;\r\n        border-top-right-radius: 5px;\r\n        -webkit-box-sizing: border-box;\r\n        -moz-box-sizing: border-box;\r\n        box-sizing: border-box;\r\n    }\r\n\r\n        .card.hovercard {\r\n            position: relative;\r\n            padding-top: 0;\r\n            overflow: hidden;\r\n            text-align: center;\r\n            background-color: #fff;\r\n            background-color: rgba(255, 255, 255, 1);\r\n        }\r\n\r\n            .card.hovercard .card-background {\r\n                height: 130px;\r\n            }\r\n\r\n    .card-background img {\r\n        -webkit-filter: blur(25px);\r\n        -moz-filter: blur(25px);\r\n        -o-filter: blur(25px);\r\n        -ms-filter: blur(25px);\r\n        filter: blur(25px);\r\n        margin-left: -100px;\r\n        margin-top: -200px;\r\n        min-width: 130%;\r\n    }\r\n\r\n    .dropdownview {\r\n        -webkit-appearance: menulist-button;\r\n    }\r\n\r\n    .card.hovercard .useravatar {\r\n        position: absolute;\r\n        top: 15px;\r\n        left: 0;\r\n        right: 0;\r\n    }\r\n\r\n        .card.hovercard .useravatar img {\r\n            width: 100px;\r\n            height: 100px;\r\n            max-width: 100px;\r\n            max-height: 100px;\r\n            -webkit-border-radius: 50%;\r\n            -moz-border-radius: 50%;\r\n            border-radius: 50%;\r\n            border: 5px solid rgba(255, 255, 255, 0.5);\r\n        }\r\n\r\n    .card.hovercard .card-info {\r\n        position: absolute;\r\n        bottom: 14px;\r\n        left: 0;\r\n        right: 0;\r\n    }\r\n\r\n        .card.hovercard .card-info .card-title {\r\n            padding: 0 5px;\r\n            font-size: 20px;\r\n            line-height: 1;\r\n            color: #e91e63;\r\n            background-color: rgba(255, 255, 255, 0.1);\r\n            -webkit-border-radius: 4px;\r\n            -moz-border-radius: 4px;\r\n            border-radius: 4px;\r\n        }\r\n\r\n    .card.hovercard .card-info {\r\n        overflow: hidden;\r\n        font-size: 12px;\r\n        line-height: 20px;\r\n        color: white;\r\n        text-overflow: ellipsis;\r\n    }\r\n\r\n    .card.hovercard .bottom {\r\n        padding: 0 20px;\r\n        margin-bottom: 17px;\r\n    }\r\n\r\n    .btn-pref .btn {\r\n        -webkit-border-radius: 0 !important;\r\n    }\r\n\r\n    .panel-group .panel {\r\n        border-radius: 0;\r\n        box-shadow: none;\r\n        border-color: #EEEEEE;\r\n    }\r\n\r\n    .panel-default > .panel-heading {\r\n        padding: 0;\r\n        border-radius: 0;\r\n        color: #212121;\r\n        background-color: #FAFAFA;\r\n        border-color: #EEEEEE;\r\n    }\r\n\r\n    .panel-title {\r\n        font-size: 14px;\r\n    }\r\n\r\n        .panel-title > a {\r\n            display: block;\r\n            padding: 15px;\r\n            text-decoration: none;\r\n        }\r\n\r\n    .more-less {\r\n        float: right;\r\n        color: #212121;\r\n    }\r\n\r\n    .panel-default > .panel-heading + .panel-collapse > .panel-body {\r\n        border-top-color: #EEEEEE;\r\n    }\r\n\r\n    .bradius {\r\n        border-radius: 5px !important;\r\n    }\r\n</style>\r\n<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"col-lg-12\" style=\"margin-bottom:20px;\">\r\n            <div class=\"row\">\r\n                <div style=\"background-color:white;\">\r\n                    <div class=\"card\" style=\"background-color:transparent !important;-webkit-box-shadow:none !important\">\r\n                        <div class=\"card-content\">\r\n                            <ul class=\"nav nav-pills nav-pills-rose\">\r\n                                <li class=\"active\">\r\n                                    <a href=\"#pill1\" data-toggle=\"tab\" class=\"bradius\" (click)=\"activityDocHide()\">Assignment</a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"#pill2\" data-toggle=\"tab\" class=\"bradius\" (click)=\"activityDocShow()\">Activity</a>\r\n                                </li>\r\n                            </ul>\r\n                            <div class=\"tab-content\">\r\n                                <div class=\"tab-pane active\" id=\"pill1\">\r\n                                    <div class=\"panel-body\">\r\n                                        <div class=\"col-sm-6\">\r\n                                            <h4>Work Order Details - {{workOrderDetail.WorkOrderNo}} For {{workOrderDetail.ClientName}}</h4>\r\n                                            <input type=\"hidden\" style=\"display:none\" id=\"search\" #search />\r\n                                            <table class=\"table table-responsive table-bordered table-hover\" style=\"float:left !important\">\r\n                                                <tbody>\r\n                                                    <tr>\r\n                                                        <td>Work Order Address</td>\r\n                                                        <td>{{wrokOrdAddress}} </td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td>Work Order Description</td>\r\n                                                        <td>\r\n                                                            <ng-container *ngIf=\"workOrderDetail.Description\">{{workOrderDetail.Description}}</ng-container>\r\n                                                            <ng-container *ngIf=\"!workOrderDetail.Description\">{{workOrderDetail.JobDescription}}</ng-container>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td>Project Manager</td>\r\n                                                        <td>{{ workOrderDetail.ProjectManager }}</td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td>Due Date</td>\r\n                                                        <td>{{ workOrderDetail.DateDue }}</td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </div>\r\n                                    <div class=\"col-sm-6\">\r\n                                        <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"true\" [zoom]=\"zoom\" style=\"height:400px;\">\r\n                                            <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\r\n                                        </agm-map>\r\n                                    </div>\r\n                                        </div>\r\n                                </div>\r\n                                <div class=\"tab-pane\" id=\"pill2\">\r\n                                    <div class=\"card card-plain\">\r\n                                        <h4>Activity for {{workOrderDetail.WorkOrderNo}}</h4>\r\n                                        <div class=\"card-content\">\r\n                                            <ul class=\"timeline\">\r\n                                                <ng-container *ngFor=\"let actTrack of workOrdActTrackerList\">\r\n                                                    <ng-container *ngIf=\"actTrack.CategoryTitle == 'Work Order Assigned'\">\r\n                                                        <li class=\"timeline-inverted\">\r\n                                                            <div class=\"timeline-badge info\">\r\n                                                                <i class=\"material-icons\" matTooltip=\"{{actTrack.WoNumber}}\" [matTooltipPosition]=\"'above'\">fingerprint</i>\r\n                                                            </div>\r\n                                                            <div class=\"timeline-panel\">\r\n                                                                <div class=\"timeline-heading\">\r\n                                                                    <span class=\"label label-info\">{{actTrack.CategoryTitle}}</span>\r\n                                                                </div>\r\n                                                                <div class=\"timeline-body\">\r\n                                                                    <p>User: <strong>{{actTrack.Username}}.</strong></p>\r\n                                                                    <p>{{actTrack.CategoryDesription}}</p>\r\n                                                                </div>\r\n                                                                <h6>\r\n                                                                    <i class=\"ti-time\"></i> {{actTrack.TrackDatetime | date: 'dd/MM/yyyy HH:mm:ss'}} <!--11 hours ago via Twitter-->\r\n                                                                </h6>\r\n                                                            </div>\r\n                                                        </li>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"actTrack.CategoryTitle == 'Work Order Accepted'\">\r\n                                                        <li>\r\n                                                            <div class=\"timeline-badge success\">\r\n                                                                <i class=\"material-icons\" matTooltip=\"{{actTrack.WoNumber}}\" [matTooltipPosition]=\"'above'\">extension</i>\r\n                                                            </div>\r\n                                                            <div class=\"timeline-panel\">\r\n                                                                <div class=\"timeline-heading\">\r\n                                                                    <span class=\"label label-success\">{{actTrack.CategoryTitle}}</span>\r\n                                                                </div>\r\n                                                                <div class=\"timeline-body\">\r\n                                                                    <p>User: <strong>{{actTrack.Username}}.</strong></p>\r\n                                                                    <p>{{actTrack.CategoryDesription}}</p>\r\n                                                                </div>\r\n                                                                <h6>\r\n                                                                    <i class=\"ti-time\"></i> {{actTrack.TrackDatetime | date: 'dd/MM/yyyy HH:mm:ss'}} <!--11 hours ago via Twitter-->\r\n                                                                </h6>\r\n                                                            </div>\r\n                                                        </li>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"actTrack.CategoryTitle == 'Work Order Decline'\">\r\n                                                        <li class=\"timeline-inverted\">\r\n                                                            <div class=\"timeline-badge danger\">\r\n                                                                <i class=\"material-icons\" matTooltip=\"{{actTrack.WoNumber}}\" [matTooltipPosition]=\"'above'\">card_travel</i>\r\n                                                            </div>\r\n                                                            <div class=\"timeline-panel\">\r\n                                                                <div class=\"timeline-heading\">\r\n                                                                    <span class=\"label label-danger\">{{actTrack.CategoryTitle}}</span>\r\n                                                                </div>\r\n                                                                <div class=\"timeline-body\">\r\n                                                                    <p>User: <strong>{{actTrack.Username}}.</strong></p>\r\n                                                                    <p>{{actTrack.CategoryDesription}}</p>\r\n                                                                </div>\r\n                                                                <h6>\r\n                                                                    <i class=\"ti-time\"></i> {{actTrack.TrackDatetime | date: 'dd/MM/yyyy HH:mm:ss'}} <!--11 hours ago via Twitter-->\r\n                                                                </h6>\r\n                                                            </div>\r\n                                                        </li>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"actTrack.CategoryTitle == 'Work Order Unassigned'\">\r\n                                                        <li>\r\n                                                            <div class=\"timeline-badge warning\">\r\n                                                                <i class=\"material-icons\"  matTooltip=\"{{actTrack.WoNumber}}\" [matTooltipPosition]=\"'above'\">flight_land</i>\r\n                                                            </div>\r\n                                                            <div class=\"timeline-panel\">\r\n                                                                <div class=\"timeline-heading\">\r\n                                                                    <span class=\"label label-warning\">{{actTrack.CategoryTitle}}</span>\r\n                                                                </div>\r\n                                                                <div class=\"timeline-body\">\r\n                                                                    <p>User: <strong>{{actTrack.Username}}.</strong></p>\r\n                                                                    <p>{{actTrack.CategoryDesription}}</p>\r\n                                                                </div>\r\n                                                                <h6>\r\n                                                                    <i class=\"ti-time\"></i> {{actTrack.TrackDatetime | date: 'dd/MM/yyyy HH:mm:ss'}} <!--11 hours ago via Twitter-->\r\n                                                                </h6>\r\n                                                            </div>\r\n                                                        </li>\r\n                                                    </ng-container>\r\n                                                    </ng-container>\r\n                                                <!--<li>\r\n                                                    <div class=\"timeline-badge success\">\r\n                                                        <i class=\"material-icons\">extension</i>\r\n                                                    </div>\r\n                                                    <div class=\"timeline-panel\">\r\n                                                        <div class=\"timeline-heading\">\r\n                                                            <span class=\"label label-success\">Another One</span>\r\n                                                        </div>\r\n                                                        <div class=\"timeline-body\">\r\n                                                            <p>Thank God for the support of my wife and real friends. I also wanted to point out that it’s the first album to go number 1 off of streaming!!! I love you Ellen and also my number one design rule of anything I do from shoes to music to homes is that Kim has to like it....</p>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </li>\r\n                                                <li class=\"timeline-inverted\">\r\n                                                    <div class=\"timeline-badge info\">\r\n                                                        <i class=\"material-icons\">fingerprint</i>\r\n                                                    </div>\r\n                                                    <div class=\"timeline-panel\">\r\n                                                        <div class=\"timeline-heading\">\r\n                                                            <span class=\"label label-info\">Another Title</span>\r\n                                                        </div>\r\n                                                        <div class=\"timeline-body\">\r\n                                                            <p>Called I Miss the Old Kanye That’s all it was Kanye And I love you like Kanye loves Kanye Famous viewing @ Figueroa and 12th in downtown LA 11:10PM</p>\r\n                                                            <p>What if Kanye made a song about Kanye Royère doesn't make a Polar bear bed but the Polar bear couch is my favorite piece of furniture we own It wasn’t any Kanyes Set on his goals Kanye</p>\r\n                                                            <hr>\r\n                                                            <div class=\"dropdown pull-left\">\r\n                                                                <button type=\"button\" class=\"btn btn-round btn-info dropdown-toggle\" data-toggle=\"dropdown\">\r\n                                                                    <i class=\"material-icons\">build</i>\r\n                                                                    <span class=\"caret\"></span>\r\n                                                                </button>\r\n                                                                <ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\">\r\n                                                                    <li>\r\n                                                                        <a href=\"#action\">Action</a>\r\n                                                                    </li>\r\n                                                                    <li>\r\n                                                                        <a href=\"#action\">Another action</a>\r\n                                                                    </li>\r\n                                                                    <li>\r\n                                                                        <a href=\"#here\">Something else here</a>\r\n                                                                    </li>\r\n                                                                    <li class=\"divider\"></li>\r\n                                                                    <li>\r\n                                                                        <a href=\"#link\">Separated link</a>\r\n                                                                    </li>\r\n                                                                </ul>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </li>\r\n                                                <li>\r\n                                                    <div class=\"timeline-badge warning\">\r\n                                                        <i class=\"material-icons\">flight_land</i>\r\n                                                    </div>\r\n                                                    <div class=\"timeline-panel\">\r\n                                                        <div class=\"timeline-heading\">\r\n                                                            <span class=\"label label-warning\">Another One</span>\r\n                                                        </div>\r\n                                                        <div class=\"timeline-body\">\r\n                                                            <p>Tune into Big Boy's 92.3 I'm about to play the first single from Cruel Winter Tune into Big Boy's 92.3 I'm about to play the first single from Cruel Winter also to Kim’s hair and makeup Lorraine jewelry and the whole style squad at Balmain and the Yeezy team. Thank you Anna for the invite thank you to the whole Vogue team</p>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </li>-->\r\n                                            </ul>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <br /><br />\r\n        <div *ngIf=\"isActivity == false\">\r\n            <div class=\"col-lg-12\" style=\"background-color:white;\"> <!--margin-bottom:20px;-->\r\n                <!--<div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\r\n                    <div class=\"panel panel-default\">-->\r\n                <header>\r\n                    <h4 style=\"float:left;margin-top:20px\"><b>Work Orders {{workOrderDetail.WorkOrderNo}}</b></h4>\r\n                    <button  data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"getAutocompleteUser()\" class=\"btn btn-simple btn-icon pull-right\" matTooltip=\"Work Order Assignment\" [matTooltipPosition]=\"'left'\">\r\n                        <i class=\"more-less glyphicon glyphicon-plus\"></i>\r\n                    </button>\r\n                    <!--<div data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"resetWorkOrderAssignment()\" class=\"btn pull-right btn-info\"><i class=\"fa fa-address-book\"></i></div>-->\r\n                </header>\r\n                \r\n                        <!--<div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\r\n                            <h4 class=\"panel-title\">\r\n                                <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n                                    <i class=\"more-less glyphicon glyphicon-plus\"></i>\r\n                                    {{workOrderDetail.WorkOrderNo}}\r\n                                </a>\r\n                            </h4>\r\n                        </div>-->\r\n                        <!--<div id=\"collapseOne\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\">-->\r\n                            <div class=\"panel-body\">  <!--style=\"background-color:#EEEEEE!important;\"-->\r\n                                <table class=\"table table-bordered  table-responsive table-hover\" style=\"float:left !important;margin-bottom:0\">\r\n                                    <tr>\r\n                                        <th>User</th>\r\n                                        <th>Notes</th>\r\n                                        <th></th>\r\n                                    </tr>\r\n                                    <tr *ngFor=\"let workAsg of workOrderAssignmentList\">\r\n                                        <td>{{workAsg.UserName}}</td>\r\n                                        <td>{{workAsg.Description}}</td>\r\n                                        <td class=\"text-center\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\"><i class=\"fa fa-close\" style=\"cursor: pointer;\" (click)=\"deleteWorkOrderAssignment(workAsg.ID)\"></i></td>\r\n                                    </tr>\r\n                                </table>\r\n                \r\n                                <button type=\"submit\" class=\"btn btn-info\" (click)=\"sendEmailWorkOrderAssignment()\" [disabled]=\"isSend\" style=\"float:left\">Send</button>\r\n                                <span *ngIf=\"sendDateTime\" style=\"float: left;padding: 20px 7px;\">\r\n                                    {{sendDateTime | date: 'dd/MM/yyyy HH:mm:ss' }}\r\n                                </span>\r\n                                \r\n                            </div>\r\n                        <!--</div>\r\n                        </div>\r\n        </div>-->\r\n</div>\r\n            <div class=\"row\"></div>\r\n            <br />\r\n            <div class=\"col-lg-12\" style=\"background-color:white\">\r\n                <header>\r\n                    <h4  style=\"float:left;margin-top:20px\">\r\n                        <b> Add Documents</b>\r\n                    </h4>\r\n                    <div class=\"pull-right\" style=\"padding: 19px 35px;\">\r\n                        <div class=\"picture-container\">\r\n                            <div class=\"picture\">\r\n                                <label for=\"woDocs\">\r\n                                    <!--<i class=\"material-icons btn btn-info\">add_circle</i>-->\r\n                                        <i class=\"more-less glyphicon glyphicon-plus\" style=\"font-size:12px;cursor: pointer;\" matTooltip=\"Work Order Document\" [matTooltipPosition]=\"'left'\"></i>\r\n                                </label>\r\n                                <input type=\"file\" style=\"display:none\" id=\"woDocs\" (change)=\"handleUpload($event)\" ng2FileSelect [uploader]=\"uploader\" multiple /><!--accept=\".pdf,.doc,.docx\"-->\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </header>\r\n                <div class=\"panel-body\">\r\n                    <table class=\"table table-bordered  table-responsive table-hover\" style=\"float:left !important\">\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>Name</th>\r\n                            <th></th>\r\n                        </tr>\r\n                        <tr *ngFor=\"let wODoc of workOrderDocsList;let idx=index\">\r\n                            <td><strong>{{idx + 1}}.</strong></td>\r\n                            <td><strong><a href=\"{{wODoc.FilePath}}\" target=\"_blank\">{{ wODoc.FileName }}</a></strong></td>\r\n                            <td class=\"text-center\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\"><i class=\"fa fa-close\" style=\"cursor: pointer;\" (click)=\"deleteWorkOrderDocuments(wODoc.ID,wODoc.WorkOrderId, wODoc.WorkOrderNo, wODoc.FileName)\"></i></td>\r\n                        </tr>\r\n                        <tr *ngFor=\"let item of uploader.queue\">\r\n                            <td><strong></strong></td>\r\n                            <td><strong>{{ item?.file?.name }}</strong></td>\r\n                            <td class=\"text-center\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\"><i class=\"fa fa-close\" style=\"cursor: pointer;\" (click)=\"item.remove()\"></i></td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n                <div class=\"progress\" style=\"\">\r\n                    <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\r\n                </div>\r\n                <div class=\"pull-left\">\r\n                    <button class=\"btn btn-info btn-round\" (click)=\"addWorkOrderDocument();\" [disabled]=\"!uploader.getNotUploadedItems().length\">\r\n                        Upload\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- Classic Modal -->\r\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"wizard-container\">\r\n            <div class=\"wizard-card\" data-color=\"rose\" id=\"wizardProfile\">\r\n                <form [formGroup]=\"workOrdAssPage\">\r\n\r\n                    <div class=\"modal-content\">\r\n                        <div class=\"modal-header\">\r\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\r\n                                <i class=\"material-icons\">clear</i>\r\n                            </button>\r\n                            <h4 class=\"modal-title\">Assign User</h4>\r\n                        </div>\r\n                        <div class=\"modal-body\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-12\">\r\n                                    <div class=\"form-group label-floating cntEmpty\" [ngClass]=\"displayFieldCss(workOrdAssPage, 'userName')\">\r\n                                        <label class=\"control-label\">Start typing to select user</label>\r\n                                        <input ngui-auto-complete formControlName=\"userName\" name=\"userName\" [source]=\"autoUsers\" value-property-name=\"ID\"\r\n                                               display-property-name=\"UserName\" [list-formatter]=\"myListFormatter\" class=\"form-control\"\r\n                                               (valueChanged)=\"valueChanged($event)\" />\r\n                                        <app-field-error-display [displayError]=\"isFieldValid(workOrdAssPage, 'userName')\" errorMsg=\"Select username.\">\r\n                                        </app-field-error-display>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-12\">\r\n                                    <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(workOrdAssPage, 'description')\">\r\n                                        <label class=\"control-label\">Add notes or information here</label>\r\n                                        <!--<input type=\"text\" formControlName=\"description\" name=\"description\" class=\"form-control\" />-->\r\n                                        <textarea class=\"form-control\" rows=\"4\" cols=\"50\" id=\"description\" formControlName=\"description\"></textarea>\r\n                                        <app-field-error-display [displayError]=\"isFieldValid(workOrdAssPage, 'description')\" errorMsg=\"Notes is required.\">\r\n                                        </app-field-error-display>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-6\">\r\n                                    <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(workOrdAssPage, 'ratetype')\">\r\n                                        <label class=\"control-label\">RateType</label>\r\n                                        <select placeholder=\"Assign rate\" formControlName=\"ratetype\" name=\"ratetype\" class=\"form-control dropdownview\">\r\n                                            <option value=\"1\" selected>Hourly</option>\r\n                                            <option value=\"2\">Fixed</option>\r\n                                            <option value=\"3\">Boxed</option>\r\n                                        </select>\r\n                                        <app-field-error-display [displayError]=\"isFieldValid(workOrdAssPage, 'ratetype')\" errorMsg=\"RateType is required.\">\r\n                                        </app-field-error-display>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-lg-6\">\r\n                                    <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(workOrdAssPage, 'rate')\">\r\n                                        <label class=\"control-label\">Rate</label>\r\n                                        <input type=\"number\" formControlName=\"rate\" name=\"rate\" class=\"form-control\" min=\"0\"/>\r\n                                        <app-field-error-display [displayError]=\"isFieldValid(workOrdAssPage, 'rate')\" errorMsg=\"Rate is required.\">\r\n                                        </app-field-error-display>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-6\">\r\n                                    <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(workOrdAssPage, 'fromdate')\">\r\n                                        <br />\r\n                                        <mat-datepicker-toggle matSuffix [for]=\"datepickerYear1\">\r\n                                        </mat-datepicker-toggle>\r\n                                        <mat-input-container>\r\n                                            <input matInput\r\n                                                   [matDatepicker]=\"datepickerYear1\" name=\"fromdate\"\r\n                                                   placeholder=\"From Date\" formControlName=\"fromdate\">\r\n                                        </mat-input-container>\r\n                                        <mat-datepicker #datepickerYear1\r\n                                                        [startView]=\"'month'\">\r\n                                        </mat-datepicker>\r\n                                        <app-field-error-display [displayError]=\"isFieldValid(workOrdAssPage, 'fromdate')\" errorMsg=\"From Date is required.\">\r\n                                        </app-field-error-display>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-lg-6\">\r\n                                    <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(workOrdAssPage, 'todate')\">\r\n                                        <br />\r\n                                        <mat-datepicker-toggle matSuffix [for]=\"datepickerYear\">\r\n                                        </mat-datepicker-toggle>\r\n                                        <mat-input-container>\r\n                                            <input matInput\r\n                                                   [matDatepicker]=\"datepickerYear\" name=\"todate\"\r\n                                                   placeholder=\"To Date\" formControlName=\"todate\">\r\n                                        </mat-input-container>\r\n                                        <mat-datepicker #datepickerYear\r\n                                                        [startView]=\"'month'\">\r\n                                        </mat-datepicker>\r\n                                        <app-field-error-display [displayError]=\"isFieldValid(workOrdAssPage, 'todate')\" errorMsg=\"To date should be greater than From date\">\r\n                                        </app-field-error-display>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <br />\r\n                                <div class=\"pull-right\">\r\n                                    <button type=\"submit\" id=\"btnSubmit\" class=\"btn btn-rose\" (click)=\"createWorkOrderAssignment()\">Submit</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--  End Modal -->\r\n\r\n\r\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\r\n<script>\r\n    $(document).ready(function () {\r\n        $('.loader').hide();\r\n    });\r\n    function toggleIcon(e) {\r\n        $(e.target)\r\n            .prev('.panel-heading')\r\n            .find(\".more-less\")\r\n            .toggleClass('glyphicon-plus glyphicon-minus');\r\n    }\r\n    $('.panel-group').on('hidden.bs.collapse', toggleIcon);\r\n    $('.panel-group').on('shown.bs.collapse', toggleIcon);\r\n</script>\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__forms_validationforms_password_validator_component__ = __webpack_require__("./src/app/forms/validationforms/password-validator.component.ts");
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
    function WoAssignmentComponent(mapsAPILoader, ngZone, http, router, activatedRoute, commonService, workOrderService, activityService, userService, _sanitizer, formBuilder, dateAdapter) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.commonService = commonService;
        this.workOrderService = workOrderService;
        this.activityService = activityService;
        this.userService = userService;
        this._sanitizer = _sanitizer;
        this.formBuilder = formBuilder;
        this.dateAdapter = dateAdapter;
        this.workOrderDetail = {};
        this.uploadedFiles = [];
        this.isActivity = false;
        this.workOrdAssPage = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            userName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            description: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            ratetype: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            rate: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            fromdate: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            todate: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
        });
        this.uploader = new __WEBPACK_IMPORTED_MODULE_12_ng2_file_upload__["FileUploader"]({ url: this.commonService.baseApiUrl + "AddWorkOrderDocuments/", itemAlias: 'file' });
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
        __WEBPACK_IMPORTED_MODULE_11_sweetalert2___default()({
            type: 'success',
            text: text,
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-success'
        }).catch(__WEBPACK_IMPORTED_MODULE_11_sweetalert2___default.a.noop);
    };
    WoAssignmentComponent.prototype.showConfirmSwal = function (text) {
        __WEBPACK_IMPORTED_MODULE_11_sweetalert2___default()({
            title: 'Are you sure?',
            text: text,
            type: 'warning',
            showCancelButton: true,
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            confirmButtonText: 'Yes, delete it!',
            buttonsStyling: false
        }).catch(__WEBPACK_IMPORTED_MODULE_11_sweetalert2___default.a.noop);
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
                    _this.getWorkOrdersByWorkOrdID(workOrdID);
                    _this.getWorkOrderAssignment(localStorage.getItem("WorkOrderId"));
                    _this.getWorkOrderDocuments(localStorage.getItem("WorkOrderId"));
                    _this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
                    _this.uploader.onBuildItemForm = function (fileItem, form) {
                        form.append('WorkOrderId', localStorage.getItem("WorkOrderId"));
                        form.append('OldWorkOrderId', localStorage.getItem("OldWorkOrderId"));
                        form.append('WorkOrderNo', localStorage.getItem("WorkOrderNo"));
                    };
                    _this.uploader.onSuccessItem = function (item, response, status, headers) {
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
            });
            this.workOrdAssPage = this.formBuilder.group({
                userName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                ratetype: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                rate: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                fromdate: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                todate: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
            }, {
                validator: __WEBPACK_IMPORTED_MODULE_13__forms_validationforms_password_validator_component__["a" /* PasswordValidation */].DateValidation // your validation method
            });
        }
        else {
            this.router.navigate(['pages/login']);
        }
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
            this.workOrderService.SendEmailWorkOrderAssignment(this.commonService.baseApiUrl, this.workOrderAssignmentList, this.wrokOrdAddress).subscribe(function (data) {
                var dataUsers = JSON.stringify(data);
                var userParse = JSON.parse(dataUsers);
                var userInfo = JSON.parse(userParse["_body"]);
                if (userInfo != null) {
                    _this.showSwal("Work Order send successfully!!");
                    _this.getWorkOrderAssignment(localStorage.getItem("WorkOrderId"));
                    _this.autoUsers = userInfo;
                    $('.loader').hide();
                }
            });
        }
    };
    WoAssignmentComponent.prototype.deleteWorkOrderAssignment = function (workAsgId) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_11_sweetalert2___default()({
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
                    __WEBPACK_IMPORTED_MODULE_11_sweetalert2___default()({
                        title: 'Deleted!',
                        text: 'User has been deleted.',
                        type: 'success',
                        confirmButtonClass: 'btn btn-success',
                        buttonsStyling: false
                    }).catch(__WEBPACK_IMPORTED_MODULE_11_sweetalert2___default.a.noop);
                }
            });
        }).catch(__WEBPACK_IMPORTED_MODULE_11_sweetalert2___default.a.noop);
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
            var contact = {
                UserId: this.assUserID,
                WorkOrderId: localStorage.getItem("WorkOrderId"),
                OldWorkOrderId: localStorage.getItem("OldWorkOrderId"),
                WorkOrderNo: localStorage.getItem("WorkOrderNo"),
                Description: this.workOrdAssPage.controls["description"].value,
                RateType: this.workOrdAssPage.controls["ratetype"].value,
                Rate: this.workOrdAssPage.controls["rate"].value,
                FromDate: this.workOrdAssPage.controls["fromdate"].value,
                ToDate: this.workOrdAssPage.controls["todate"].value,
                WorkOrderAssignmentStatus: "Created"
            };
            this.workOrderService.CreateWorkOrderAssignment(this.commonService.baseApiUrl, contact).subscribe(function (data) {
                var dataUsers = JSON.stringify(data);
                var userParse = JSON.parse(dataUsers);
                var userInfo = JSON.parse(userParse["_body"]);
                $('#myModal').modal('toggle');
                if (userInfo == "Ok") {
                    _this.getWorkOrderAssignment(localStorage.getItem("WorkOrderId"));
                    _this.showSwal("Work Order successfully assign!!");
                }
                else if (userInfo == "already") {
                    _this.showSwal("Work Order already assigned!!");
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
                    wAddress += workOrderInfo.AddressLine1 + ",";
                }
                if (workOrderInfo.AddressLine2 != null && workOrderInfo.AddressLine2 != '') {
                    wAddress += workOrderInfo.AddressLine2 + ",";
                }
                if (workOrderInfo.AddressLine3 != null && workOrderInfo.AddressLine3 != '') {
                    wAddress += workOrderInfo.AddressLine3 + ",";
                }
                if (workOrderInfo.Town != null && workOrderInfo.Town != '') {
                    wAddress += workOrderInfo.Town + ",";
                }
                if (workOrderInfo.State != null && workOrderInfo.State != '') {
                    wAddress += workOrderInfo.State + ",";
                }
                if (workOrderInfo.PostalCode != null && workOrderInfo.PostalCode != '') {
                    wAddress += workOrderInfo.PostalCode + ",";
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
    WoAssignmentComponent.prototype.deleteWorkOrderDocuments = function (workDocsID, workOrdId, workOrderNo, fileName) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_11_sweetalert2___default()({
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
                    __WEBPACK_IMPORTED_MODULE_11_sweetalert2___default()({
                        title: 'Deleted!',
                        text: 'Your file has been deleted.',
                        type: 'success',
                        confirmButtonClass: 'btn btn-success',
                        buttonsStyling: false
                    }).catch(__WEBPACK_IMPORTED_MODULE_11_sweetalert2___default.a.noop);
                }
            });
        }).catch(__WEBPACK_IMPORTED_MODULE_11_sweetalert2___default.a.noop);
    };
    WoAssignmentComponent.prototype.handleUpload = function (data) {
        if (data && data.response) {
            data = JSON.parse(data.response);
            this.uploadedFiles.push(data);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], WoAssignmentComponent.prototype, "searchElementRef", void 0);
    WoAssignmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-wo-assignment',
            template: __webpack_require__("./src/app/wo-assignment/wo-assignment.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_commonService__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_6__services_workOrderService__["a" /* WorkOrderService */], __WEBPACK_IMPORTED_MODULE_5__services_userService__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_7__services_activityService__["a" /* ActivityService */]],
            styles: ["md-calendar {\n      width: 300px;\n  }"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__services_commonService__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_6__services_workOrderService__["a" /* WorkOrderService */],
            __WEBPACK_IMPORTED_MODULE_7__services_activityService__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_5__services_userService__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* DateAdapter */]])
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
                })
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
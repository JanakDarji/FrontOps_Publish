webpackJsonp(["dashboard.module"],{

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<title>Aspect Dashboard</title>-->\r\n<style>\r\n    .dropdownview {\r\n        -webkit-appearance: menulist-button;\r\n    }\r\n\r\n    .md2-date {\r\n        margin-top: 6px;\r\n    }\r\n\r\n    md2-datepicker {\r\n        width: 100%;\r\n    }\r\n\r\n    .cst-input {\r\n        position: absolute;\r\n        right: 15px;\r\n        left: 60px;\r\n        top: 9px;\r\n    }\r\n\r\n    .pd15 {\r\n        padding: 15px;\r\n    }\r\n\r\n    .bradius {\r\n        border-radius: 5px !important;\r\n    }\r\n\r\n    @media screen and (min-width: 767px) {\r\n        .cst-input {\r\n            right: 0px !important;\r\n            top: 15px !important;\r\n        }\r\n    }\r\n</style>\r\n<title>Dashboard</title>\r\n<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div>\r\n                <div class=\"card\" style=\"margin-top:0px;background-color:transparent !important;-webkit-box-shadow:none !important\">\r\n                    <div class=\"card-content\">\r\n                        <ul class=\"nav nav-pills nav-pills-rose\">\r\n                            <li class=\"active\"> <a href=\"#pill1\" data-toggle=\"tab\" class=\"bradius\">Dashboard</a> </li>\r\n                            <li> <a href=\"#pill2\" data-toggle=\"tab\" class=\"bradius\">Jobs Map</a> </li>\r\n                            <li> <a href=\"#pill3\" data-toggle=\"tab\" class=\"bradius\">Maintenance Map</a> </li>\r\n                        </ul>\r\n                        <div class=\"tab-content\">\r\n                            <div class=\"tab-pane active\" id=\"pill1\">\r\n                                <div class=\"panel-body\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                                            <div class=\"card card-stats\">\r\n                                                <div class=\"card-header\" data-background-color=\"green\">\r\n                                                    <i class=\"material-icons\">store</i>\r\n                                                </div>\r\n                                                <div class=\"card-content\">\r\n                                                    <p class=\"category\" style=\"text-align:left; height:40px;\">Total Jobs Completed</p>\r\n                                                    <h3 class=\"card-title\">{{totalJobsCompleted}}</h3>\r\n                                                </div>\r\n                                                <div class=\"card-footer\">\r\n                                                    <div class=\"stats\">\r\n                                                        <i class=\"material-icons\">date_range</i> Last 24 Hours\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                                            <div class=\"card card-stats\">\r\n                                                <div class=\"card-header\" data-background-color=\"orange\">\r\n                                                    <i class=\"material-icons\">weekend</i>\r\n                                                </div>\r\n                                                <div class=\"card-content\">\r\n                                                    <p class=\"category\" style=\"text-align:left; height:40px;\">Total Work Orders Completed</p>\r\n                                                    <h3 class=\"card-title\">{{totalWorkOrders}}</h3>\r\n                                                </div>\r\n                                                <div class=\"card-footer\">\r\n                                                    <div class=\"stats\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                                            <div class=\"card card-stats\">\r\n                                                <div class=\"card-header\" data-background-color=\"red\">\r\n                                                    <i class=\"material-icons\">equalizer</i>\r\n                                                </div>\r\n                                                <div class=\"card-content\">\r\n                                                    <p class=\"category\" style=\"text-align:left; height:40px;\">Total Time Sheet Hours Approved</p>\r\n                                                    <h3 class=\"card-title\">{{totalTimeSheet}}</h3>\r\n                                                </div>\r\n                                                <div class=\"card-footer\">\r\n                                                    <div class=\"stats\">\r\n                                                        <i class=\"material-icons\">access_time</i> Just Updated\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                                            <div class=\"card card-stats\">\r\n                                                <div class=\"card-header\" data-background-color=\"green\">\r\n                                                    <i class=\"material-icons\">store</i>\r\n                                                </div>\r\n                                                <div class=\"card-content\">\r\n                                                    <p class=\"category\" style=\"text-align:left; height:40px;\">Maintenance Tasks Completed</p>\r\n                                                    <h3 class=\"card-title\">{{mainTaskCompleted}}</h3>\r\n                                                </div>\r\n                                                <div class=\"card-footer\">\r\n                                                    <div class=\"stats\">\r\n                                                        <i class=\"material-icons\">date_range</i> Last 24 Hours\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-lg-6 col-md-12 col-sm-12\">\r\n                                            <div class=\"card\">\r\n                                                <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\r\n                                                    <i class=\"material-icons\">assignment</i>\r\n                                                </div>\r\n                                                <div class=\"card-content\">\r\n                                                    <h4 class=\"card-title\">Work Order Completed Leader Board</h4>\r\n                                                    <div class=\"content table-responsive\">\r\n                                                        <table class=\"table\">\r\n                                                            <thead class=\"text-primary\">\r\n                                                                <tr>\r\n                                                                    <th>User Name</th>\r\n                                                                    <th>WorkOrder No</th>\r\n                                                                    <th>Description</th>\r\n                                                                    <th>Assign By</th>\r\n                                                                </tr>\r\n                                                            </thead>\r\n                                                            <tbody>\r\n                                                                <tr *ngFor=\"let row of workOrderCompleted\">\r\n                                                                    <td>{{row?.Username}}</td>\r\n                                                                    <td>{{row?.WorkOrderNo}}</td>\r\n                                                                    <td>{{row?.Description}}</td>\r\n                                                                    <td>{{row?.AssignBy}}</td>\r\n                                                                </tr>\r\n                                                                <tr *ngIf=\"workOrderCompleted?.length == 0\">\r\n                                                                    <td colspan=\"4\">No records found</td>\r\n                                                                </tr>\r\n                                                            </tbody>\r\n                                                        </table>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-lg-6 col-md-12 col-sm-12\">\r\n                                            <div class=\"card\">\r\n                                                <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\r\n                                                    <i class=\"material-icons\">assignment</i>\r\n                                                </div>\r\n                                                <div class=\"card-content\">\r\n                                                    <h4 class=\"card-title\">Work Order Rejected Leader Board</h4>\r\n                                                    <div class=\"content table-responsive\">\r\n                                                        <table class=\"table\">\r\n                                                            <thead class=\"text-primary\">\r\n                                                                <tr>\r\n                                                                    <th>User Name</th>\r\n                                                                    <th>WorkOrder No</th>\r\n                                                                    <th>Description</th>\r\n                                                                    <th>Assign By</th>\r\n                                                                </tr>\r\n                                                            </thead>\r\n                                                            <tbody>\r\n                                                                <tr *ngFor=\"let row of workOrderRejected\">\r\n                                                                    <td>{{row?.Username}}</td>\r\n                                                                    <td>{{row?.WorkOrderNo}}</td>\r\n                                                                    <td>{{row?.Description}}</td>\r\n                                                                    <td>{{row?.AssignBy}}</td>\r\n                                                                </tr>\r\n                                                                <tr *ngIf=\"workOrderRejected?.length == 0\">\r\n                                                                    <td colspan=\"4\">No records found</td>\r\n                                                                </tr>\r\n                                                            </tbody>\r\n                                                        </table>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                                            <div class=\"card pd15\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-lg-4 col-md-4 col-sm-4\">\r\n                                                        <div class=\"form-group label-floating\">\r\n                                                            <label class=\"control-label\">\r\n                                                                Select Division\r\n                                                                <small>(required)</small>\r\n                                                            </label>\r\n                                                            <select name=\"division\" class=\"form-control dropdownview\" id=\"division\">\r\n                                                                <option disabled=\"\" selected=\"\"></option>\r\n                                                                <option *ngFor=\"let division of divisionList\" value={{division.ID}}>\r\n                                                                    {{division.Name}}\r\n                                                                </option>\r\n                                                            </select>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-lg-4 col-md-4 col-sm-4\">\r\n                                                        <div class=\"form-group label-floating\">\r\n                                                            <label class=\"control-label\">\r\n                                                                Date Type\r\n                                                                <small>(required)</small>\r\n                                                            </label>\r\n                                                            <select name=\"date\" class=\"form-control dropdownview\" id=\"date\">\r\n                                                                <option disabled=\"\" selected=\"\"></option>\r\n                                                                <option value=\"1\">Date Select for Week</option>\r\n                                                                <option value=\"2\">Date Select for Month</option>\r\n                                                                <option value=\"3\">Date Select for Year</option>\r\n                                                            </select>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-lg-4 col-md-4 col-sm-4\">\r\n                                                        <div class=\"md2-date\">\r\n                                                            <md2-datepicker [placeholder]=\"chartPlaceHolder\" type=\"datetime\" format=\"dd/MM/y HH:mm A\" [startView]=\"chartStartView\"></md2-datepicker>\r\n                                                            <!-- <mat-form-field *ngIf=\"isWeekSelectForMaintenance\" class=\"cst-input\">\r\n                                                                <input matInput placeholder=\"\" [value]=\"maintenanceWeekDate\">\r\n                                                            </mat-form-field> -->\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\" style=\"margin-top: 30px;\">\r\n                                                    <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                                                        <div class=\"card card-chart\">\r\n                                                            <div class=\"card-header\" data-background-color=\"green\">\r\n                                                                <div id=\"straightLinesChart1\" class=\"ct-chart\"></div>\r\n                                                            </div>\r\n                                                            <div class=\"card-content\">\r\n                                                                <h4 class=\"card-title\">Total Job Complete vs Pending</h4>\r\n                                                                <p class=\"category\">\r\n                                                                    <span class=\"text-success\">\r\n                                                                        <i class=\"fa fa-long-arrow-up\"></i> 55%\r\n                                                                    </span> increase in today sales.\r\n                                                                </p>\r\n                                                            </div>\r\n                                                            <div class=\"card-footer\">\r\n                                                                <div class=\"stats\">\r\n                                                                    <i class=\"material-icons\">access_time</i> updated 4 minutes ago\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                                                        <div class=\"card card-chart\">\r\n                                                            <div class=\"card-header\" data-background-color=\"orange\">\r\n                                                                <div id=\"straightLinesChart2\" class=\"ct-chart\"></div>\r\n                                                            </div>\r\n                                                            <div class=\"card-content\">\r\n                                                                <h4 class=\"card-title\">Total Work Orders Complete vs Pending</h4>\r\n                                                                <p class=\"category\">Line Chart with Points</p>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                                                        <div class=\"card card-chart\">\r\n                                                            <div class=\"card-header\" data-background-color=\"blue\">\r\n                                                                <div id=\"straightLinesChart3\" class=\"ct-chart\"></div>\r\n                                                            </div>\r\n                                                            <div class=\"card-content\">\r\n                                                                <h4 class=\"card-title\">Total Timesheets Completed vs Pending</h4>\r\n                                                                <p class=\"category\">Last Campaign Completed vs Pending</p>\r\n                                                            </div>\r\n                                                            <div class=\"card-footer\">\r\n                                                                <div class=\"stats\">\r\n                                                                    <i class=\"material-icons\">access_time</i> Campaign sent 2 days ago\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                                                        <div class=\"card card-chart\">\r\n                                                            <div class=\"card-header\" data-background-color=\"green\">\r\n                                                                <div id=\"straightLinesChart4\" class=\"ct-chart\"></div>\r\n                                                            </div>\r\n                                                            <div class=\"card-content\">\r\n                                                                <h4 class=\"card-title\">Total Job Complete vs Pending</h4>\r\n                                                                <p class=\"category\">\r\n                                                                    <span class=\"text-success\">\r\n                                                                        <i class=\"fa fa-long-arrow-up\"></i> 55%\r\n                                                                    </span> increase in today sales.\r\n                                                                </p>\r\n                                                            </div>\r\n                                                            <div class=\"card-footer\">\r\n                                                                <div class=\"stats\">\r\n                                                                    <i class=\"material-icons\">access_time</i> updated 4 minutes ago\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-lg-3 col-md-6 col-sm-6\" *ngIf=\"showFirstPieChart\">\r\n                                            <div class=\"card\">\r\n                                                <div class=\"card-header card-header-icon\" data-background-color=\"red\">\r\n                                                    <i class=\"material-icons\">pie_chart</i>\r\n                                                </div>\r\n                                                <div class=\"card-content\">\r\n                                                    <h4 class=\"card-title\">All Work Orders</h4>\r\n                                                </div>\r\n                                                <div id=\"chartPreferences1\" class=\"ct-chart\"></div>\r\n                                                <div class=\"card-footer\">\r\n                                                    <h6>Legend</h6>\r\n                                                    <i class=\"fa fa-circle text-info\"></i> Scheduled\r\n                                                    <i class=\"fa fa-circle text-warning\"></i> Assigned\r\n                                                    <i class=\"fa fa-circle text-danger\"></i> Complete\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                                            <div class=\"card\">\r\n                                                <div class=\"card-header card-header-icon\" data-background-color=\"red\">\r\n                                                    <i class=\"material-icons\">pie_chart</i>\r\n                                                </div>\r\n                                                <div class=\"card-content\">\r\n                                                    <h4 class=\"card-title\">All Maintenance Tasks</h4>\r\n                                                </div>\r\n                                                <div id=\"chartPreferences2\" class=\"ct-chart\"></div>\r\n                                                <div class=\"card-footer\">\r\n                                                    <h6>Legend</h6>\r\n                                                    <i class=\"fa fa-circle text-info\"></i> Created\r\n                                                    <i class=\"fa fa-circle text-warning\"></i> Assigned (Pending)\r\n                                                    <i class=\"fa fa-circle text-danger\"></i> Complete\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                                            <div class=\"card\">\r\n                                                <div class=\"card-header card-header-icon\" data-background-color=\"red\">\r\n                                                    <i class=\"material-icons\">pie_chart</i>\r\n                                                </div>\r\n                                                <div class=\"card-content\">\r\n                                                    <h4 class=\"card-title\">All Timesheet Hours</h4>\r\n                                                </div>\r\n                                                <div id=\"chartPreferences3\" class=\"ct-chart\"></div>\r\n                                                <div class=\"card-footer\">\r\n                                                    <h6>Legend</h6>\r\n                                                    <i class=\"fa fa-circle text-info\"></i> Apple\r\n                                                    <i class=\"fa fa-circle text-warning\"></i> Samsung\r\n                                                    <i class=\"fa fa-circle text-danger\"></i> Windows Phone\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                                            <div class=\"card\">\r\n                                                <div class=\"card-header card-header-icon\" data-background-color=\"red\">\r\n                                                    <i class=\"material-icons\">pie_chart</i>\r\n                                                </div>\r\n                                                <div class=\"card-content\">\r\n                                                    <h4 class=\"card-title\">Pie Chart</h4>\r\n                                                </div>\r\n                                                <div id=\"chartPreferences4\" class=\"ct-chart\"></div>\r\n                                                <div class=\"card-footer\">\r\n                                                    <h6>Legend</h6>\r\n                                                    <i class=\"fa fa-circle text-info\"></i> Apple\r\n                                                    <i class=\"fa fa-circle text-warning\"></i> Samsung\r\n                                                    <i class=\"fa fa-circle text-danger\"></i> Windows Phone\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"tab-pane\" id=\"pill2\">\r\n                                <div class=\"panel-body\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                                            <form [formGroup]=\"dashJPage\">\r\n                                                <div class=\"card\" style=\"margin:10px 0px;\">\r\n                                                    <h4 class=\"card-title\" style=\"padding:15px;\">Jobs Map</h4>\r\n                                                    <div class=\"col-lg-4 col-md-4 col-sm-4\">\r\n                                                        <div class=\"form-group label-floating\">\r\n                                                            <label class=\"control-label\">\r\n                                                                Status\r\n                                                                <small>(required)</small>\r\n                                                            </label>\r\n                                                            <select name=\"company\" formControlName=\"jobStatus\" (change)=\"getJobMapForDashboard()\" class=\"form-control dropdownview\">\r\n                                                                <option disabled=\"\" selected=\"\"></option>\r\n                                                                <option value=\"Created\">Not Started</option>\r\n                                                                <option value=\"Created\">Assigned Jobs</option>\r\n                                                                <option value=\"Created\">Pending Jobs (Time sheet Hours Booked)</option>\r\n                                                                <option value=\"Completed\">Completed Jobs</option>\r\n                                                            </select>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-lg-4 col-md-4 col-sm-4\">\r\n                                                        <div class=\"form-group label-floating\">\r\n                                                            <label class=\"control-label\">\r\n                                                                Date Type\r\n                                                                <small>(required)</small>\r\n                                                            </label>\r\n                                                            <select name=\"company\" formControlName=\"dateType\" class=\"form-control dropdownview\" id=\"divsn\" (change)=\"getJobDateType()\">\r\n                                                                <option disabled=\"\" selected=\"\"></option>\r\n                                                                <option value=\"1\">Date Select for Day</option>\r\n                                                                <option value=\"2\">Date Select for Week</option>\r\n                                                                <option value=\"3\">Date Select for Month</option>\r\n                                                            </select>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-lg-4 col-md-4 col-sm-4\">\r\n                                                        <div class=\"md2-date\">\r\n                                                            <md2-datepicker [ngClass]=\"{'week-select': isWeekSelectForJob == true}\" [placeholder]=\"jobPlaceHolder\" formControlName=\"jobDate\"\r\n                                                                            type=\"datetime\" (change)=\"getJobMapForDashboard()\" format=\"dd/MM/y HH:mm A\" [startView]=\"startView\"></md2-datepicker>\r\n                                                            <mat-form-field *ngIf=\"isWeekSelectForJob\" class=\"cst-input\">\r\n                                                                <input matInput placeholder=\"\" formControlName=\"jobDate\" [value]=\"jobWeekDate\">\r\n                                                            </mat-form-field>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"mt50\" style=\"margin-top:100px;\">\r\n                                                        <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                                                            <div class=\"row\">\r\n                                                                <div class=\"card-content col-md-12\">\r\n                                                                    <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"true\" [zoom]=\"zoom\" style=\"height:400px;\">\r\n                                                                        <agm-marker-cluster *ngFor=\"let point of latlongList\">\r\n                                                                            <agm-marker [latitude]=\"point.latitude\" [longitude]=\"point.longitude\" iconUrl=\"../../assets/img/endwo.png\">\r\n                                                                            </agm-marker>\r\n                                                                        </agm-marker-cluster>\r\n                                                                    </agm-map>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </form>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"tab-pane\" id=\"pill3\">\r\n                                <div class=\"panel-body\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                                            <form [formGroup]=\"dashMPage\">\r\n                                                <div class=\"card\" style=\"margin:10px 0px;\">\r\n                                                    <h4 class=\"card-title\" style=\"padding:15px;\">Maintenance Map</h4>\r\n                                                    <div class=\"col-lg-4 col-md-4 col-sm-4\">\r\n                                                        <div class=\"form-group label-floating\">\r\n                                                            <label class=\"control-label\">\r\n                                                                Status\r\n                                                                <small>(required)</small>\r\n                                                            </label>\r\n                                                            <select name=\"company\" formControlName=\"mtStatus\" class=\"form-control dropdownview\" id=\"divsn\">\r\n                                                                <option disabled=\"\" selected=\"\"></option>\r\n                                                                <option value=\"1\">Created</option>\r\n                                                                <option value=\"2\">Assigned</option>\r\n                                                                <option value=\"3\">Pending Jobs (Time sheet Hours Booked)</option>\r\n                                                                <option value=\"4\">Completed Tasks</option>\r\n                                                            </select>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-lg-4 col-md-4 col-sm-4\">\r\n                                                        <div class=\"form-group label-floating\">\r\n                                                            <label class=\"control-label\">\r\n                                                                Date Type\r\n                                                                <small>(required)</small>\r\n                                                            </label>\r\n                                                            <select name=\"company\" formControlName=\"mtType\" class=\"form-control dropdownview\" id=\"divsn\" (change)=\"getMaintenanceDateType()\">\r\n                                                                <option disabled=\"\" selected=\"\"></option>\r\n                                                                <option value=\"1\">Date Select for Day</option>\r\n                                                                <option value=\"2\">Date Select for Week</option>\r\n                                                                <option value=\"3\">Date Select for Month</option>\r\n                                                                <option value=\"4\">Date Select for Year</option>\r\n                                                            </select>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-lg-4 col-md-4 col-sm-4\">\r\n                                                        <div class=\"md2-date\">\r\n                                                            <md2-datepicker [placeholder]=\"maintenancePlaceHolder\" formControlName=\"mapDate\" type=\"datetime\" format=\"dd/MM/y HH:mm A\"\r\n                                                                            [startView]=\"startViewMain\" (change)=\"getMaintenanceMapForDashboard()\"></md2-datepicker>\r\n                                                            <mat-form-field *ngIf=\"isWeekSelectForMaintenance\" class=\"cst-input\">\r\n                                                                <input matInput placeholder=\"\" [value]=\"maintenanceWeekDate\">\r\n                                                            </mat-form-field>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"mt50\" style=\"margin-top:100px;\">\r\n                                                        <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                                                            <div class=\"row\">\r\n                                                                <div class=\"card-content col-md-12\">\r\n                                                                    <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"true\" [zoom]=\"zoom\" style=\"height:400px;\">\r\n                                                                        <agm-marker-cluster *ngFor=\"let point of latlongmaintenanceList\">\r\n                                                                            <agm-marker [latitude]=\"point.latitude\" [longitude]=\"point.longitude\" iconUrl=\"../../assets/img/endwo.png\">\r\n                                                                            </agm-marker>\r\n                                                                        </agm-marker-cluster>\r\n                                                                    </agm-map>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </form>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_commonService__ = __webpack_require__("./src/app/services/commonService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_workOrderService__ = __webpack_require__("./src/app/services/workOrderService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chartist__ = __webpack_require__("./node_modules/chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_chartist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_divisionService__ = __webpack_require__("./src/app/services/divisionService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(commonService, workOrderService, datepipe, divisionService, router, http) {
        this.commonService = commonService;
        this.workOrderService = workOrderService;
        this.datepipe = datepipe;
        this.divisionService = divisionService;
        this.router = router;
        this.http = http;
        this.latlongList = [];
        this.latlongmaintenanceList = [];
        this.startView = 'month';
        this.isWeekSelectForJob = false;
        this.jobWeekDate = '';
        this.jobPlaceHolder = 'Date';
        this.isWeekSelectForMaintenance = false;
        this.startViewMain = 'month';
        this.maintenanceWeekDate = '';
        this.maintenancePlaceHolder = 'Date';
        this.chartPlaceHolder = 'Date';
        this.chartStartView = 'week';
        this.showFirstPieChart = true;
        this.totalJobsCompleted = 0;
        this.totalWorkOrders = 0;
        this.totalTimeSheet = 0;
        this.mainTaskCompleted = 0;
        this.dashJPage = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            jobStatus: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            dateType: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            jobDate: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]()
        });
        this.dashMPage = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            mtStatus: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            mtType: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            mapDate: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]()
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        if (JSON.parse(sessionStorage.getItem('LogEmployee')) != null) {
            this.userProfile = JSON.parse(sessionStorage.getItem('LogEmployee'));
            this.latitude = -33.865143;
            this.longitude = 151.209900;
            this.zoom = 10;
            this.getAllWorkCountForDashboards();
            this.getAssignWorkOrderForDashboard();
            this.getWorkDetailForPieChart();
            this.initLineChart();
            this.initPieChart();
            this.getDivision();
            $(document).ready(function () {
                jQuery(".md2-datepicker-arrow").hide();
            });
        }
        else {
            this.router.navigate(['pages/login']);
        }
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
    };
    //Get job list with filter for plot on map
    DashboardComponent.prototype.getJobMapForDashboard = function () {
        var _this = this;
        $('.loader').show();
        var jobDate = null;
        var ToDate = null;
        var IsWeek = null;
        var IsMonth = null;
        if (this.dashJPage.controls["jobDate"].value != null) {
            if (this.dashJPage.controls['dateType'].value == 2) {
                IsWeek = true;
                this.isWeekSelectForJob = true;
                //Get fisrt and last day of week from selected date 
                var curr = this.dashJPage.controls["jobDate"].value;
                var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
                var last = first + 6; // last day is the first day + 6
                var firstday = new Date(curr.setDate(first)).toUTCString();
                var lastday = new Date(curr.setDate(last)).toUTCString();
                jobDate = this.datepipe.transform(firstday, 'yyyy/MM/dd HH:mm:ss');
                ToDate = this.datepipe.transform(lastday, 'yyyy/MM/dd HH:mm:ss');
                this.jobWeekDate = this.datepipe.transform(firstday, 'dd/MM/yyyy') + ' - ' + this.datepipe.transform(lastday, 'dd/MM/yyyy');
                this.dashJPage.controls['jobDate'].setValue('');
                this.jobPlaceHolder = '';
            }
            else {
                if (this.dashJPage.controls['dateType'].value == 3) {
                    IsMonth = true;
                }
                this.jobWeekDate = '';
                jobDate = this.datepipe.transform(this.dashJPage.controls["jobDate"].value, 'yyyy/MM/dd HH:mm:ss');
            }
        }
        var contact = {
            UserID: this.userProfile.ID,
            Status: this.dashJPage.controls["jobStatus"].value,
            FromDate: jobDate,
            ToDate: ToDate,
            IsWeek: IsWeek,
            IsMonth: IsMonth
        };
        this.workOrderService.GetJobMapForDashboard(this.commonService.baseApiUrl, contact).subscribe(function (data) {
            var dataUsers = JSON.stringify(data);
            var userParse = JSON.parse(dataUsers);
            var userInfo = JSON.parse(userParse["_body"]);
            _this.jobMapList = null;
            _this.latlongList = [];
            if (userInfo != null) {
                console.log(userInfo);
                _this.jobMapList = userInfo;
                $('.loader').hide();
                for (var _i = 0, _a = _this.jobMapList; _i < _a.length; _i++) {
                    var mapData = _a[_i];
                    _this.getLocation(mapData.AddressLine);
                }
            }
        });
    };
    DashboardComponent.prototype.getLocation = function (address) {
        var _this = this;
        this.latitude = null;
        this.longitude = null;
        if (address != null) {
            this.http.get("https://maps.google.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyDvC4D3B6FJvtMZLOfUsIUnpUxpET_uc-w").subscribe(function (data) {
                var dataMap = JSON.stringify(data);
                var mapParse = JSON.parse(dataMap);
                var mapList = JSON.parse(mapParse["_body"]);
                if (mapList != null) {
                    _this.latitude = mapList["results"][0]["geometry"]["location"]["lat"];
                    _this.longitude = mapList["results"][0]["geometry"]["location"]["lng"];
                    _this.zoom = 10;
                    var datalist = {
                        "latitude": _this.latitude,
                        "longitude": _this.longitude
                    };
                    _this.latlongList.push(datalist);
                }
            });
        }
    };
    DashboardComponent.prototype.getJobDateType = function () {
        this.jobPlaceHolder = 'Date';
        if (this.dashJPage.controls['dateType'].value == 2) {
            this.isWeekSelectForJob = true;
        }
        else {
            this.isWeekSelectForJob = false;
        }
    };
    DashboardComponent.prototype.getMaintenanceDateType = function () {
        this.maintenancePlaceHolder = 'Date';
        if (this.dashMPage.controls['mtType'].value == 2) {
            this.isWeekSelectForMaintenance = true;
        }
        else {
            this.isWeekSelectForMaintenance = false;
        }
        if (this.dashMPage.controls['mtType'].value == 4) {
            this.startViewMain = 'year';
        }
        else {
            this.startViewMain = 'month';
        }
    };
    //Get maintenance list with filter for plot on map
    DashboardComponent.prototype.getMaintenanceMapForDashboard = function () {
        var _this = this;
        $('.loader').show();
        var FromDate = null;
        var ToDate = null;
        var IsWeek = null;
        var IsMonth = null;
        var IsYear = null;
        if (this.dashMPage.controls["mapDate"].value != null) {
            if (this.dashMPage.controls['mtType'].value == 2) {
                this.isWeekSelectForMaintenance = true;
                IsWeek = true;
                //Get fisrt and last day of week from selected date 
                var curr = this.dashMPage.controls["mapDate"].value;
                var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
                var last = first + 6; // last day is the first day + 6
                var firstday = new Date(curr.setDate(first)).toUTCString();
                var lastday = new Date(curr.setDate(last)).toUTCString();
                FromDate = this.datepipe.transform(firstday, 'yyyy/MM/dd HH:mm:ss');
                ToDate = this.datepipe.transform(lastday, 'yyyy/MM/dd HH:mm:ss');
                this.maintenanceWeekDate = this.datepipe.transform(firstday, 'dd/MM/yyyy') + ' - ' + this.datepipe.transform(lastday, 'dd/MM/yyyy');
                this.dashMPage.controls['mapDate'].setValue('');
                this.maintenancePlaceHolder = '';
            }
            else {
                if (this.dashMPage.controls['mtType'].value == 3) {
                    IsMonth = true;
                }
                else if (this.dashMPage.controls['mtType'].value == 4) {
                    IsYear = true;
                }
                this.maintenanceWeekDate = '';
                FromDate = this.datepipe.transform(this.dashMPage.controls["mapDate"].value, 'yyyy/MM/dd HH:mm:ss');
            }
        }
        var contact = {
            UserID: this.userProfile.ID,
            Status: this.dashMPage.controls["mtStatus"].value,
            FromDate: FromDate,
            ToDate: ToDate,
            IsWeek: IsWeek,
            IsMonth: IsMonth,
            IsYear: IsYear
        };
        this.workOrderService.getMaintenanceMapForDashboard(this.commonService.baseApiUrl, contact).subscribe(function (data) {
            var dataUsers = JSON.stringify(data);
            var userParse = JSON.parse(dataUsers);
            var userInfo = JSON.parse(userParse["_body"]);
            _this.maintenanceList = null;
            _this.latlongmaintenanceList = [];
            if (userInfo != null) {
                console.log(userInfo);
                _this.maintenanceList = userInfo;
                $('.loader').hide();
                for (var _i = 0, _a = _this.maintenanceList; _i < _a.length; _i++) {
                    var mapData = _a[_i];
                    _this.getMaintennaceLocation(mapData.AddressLine);
                }
            }
        });
    };
    DashboardComponent.prototype.getMaintennaceLocation = function (address) {
        var _this = this;
        this.latitude = null;
        this.longitude = null;
        if (address != null) {
            this.http.get("https://maps.google.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyDvC4D3B6FJvtMZLOfUsIUnpUxpET_uc-w").subscribe(function (data) {
                var dataMap = JSON.stringify(data);
                var mapParse = JSON.parse(dataMap);
                var mapList = JSON.parse(mapParse["_body"]);
                if (mapList != null) {
                    _this.latitude = mapList["results"][0]["geometry"]["location"]["lat"];
                    _this.longitude = mapList["results"][0]["geometry"]["location"]["lng"];
                    _this.zoom = 10;
                    var datalist = {
                        "latitude": _this.latitude,
                        "longitude": _this.longitude
                    };
                    _this.latlongmaintenanceList.push(datalist);
                }
            });
        }
    };
    //Draw line chart for orders/maintenance status
    DashboardComponent.prototype.initLineChart = function () {
        var dataStraightLinesChart1 = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [10, 16, 8, 13, 20, 15, 20, 34, 30],
                [8, 12, 19, 23, 10, 25, 10, 24, 20]
            ]
        };
        var dataStraightLinesChart2 = {
            labels: ['\'7', '\'8', '\'9', '\'10', '\'11', '\'12', '\'13', '\'14', '\'15'],
            series: [
                [10, 16, 8, 13, 20, 15, 20, 34, 30]
            ]
        };
        var dataStraightLinesChart3 = {
            labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
            series: [
                [10, 16, 8, 13, 20, 15, 20, 34, 30]
            ]
        };
        var optionsStraightLinesChart = {
            lineSmooth: __WEBPACK_IMPORTED_MODULE_5_chartist__["Interpolation"].cardinal({
                tension: 0
            }),
            axisY: {
                showGrid: true,
                offset: 40
            },
            axisX: {
                showGrid: false,
            },
            low: 0,
            high: 40,
            showPoint: true,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
            height: '200px'
        };
        var straightLinesChart1 = new __WEBPACK_IMPORTED_MODULE_5_chartist__["Line"]('#straightLinesChart1', dataStraightLinesChart1, optionsStraightLinesChart);
        var straightLinesChart2 = new __WEBPACK_IMPORTED_MODULE_5_chartist__["Line"]('#straightLinesChart2', dataStraightLinesChart2, optionsStraightLinesChart);
        var straightLinesChart3 = new __WEBPACK_IMPORTED_MODULE_5_chartist__["Line"]('#straightLinesChart3', dataStraightLinesChart3, optionsStraightLinesChart);
        var straightLinesChart4 = new __WEBPACK_IMPORTED_MODULE_5_chartist__["Line"]('#straightLinesChart4', dataStraightLinesChart1, optionsStraightLinesChart);
    };
    //Draw pie chart for orders/maintenance status
    DashboardComponent.prototype.initPieChart = function () {
        var dataPreferences = {
            labels: ['62%', '32%', '6%'],
            series: [62, 32, 6]
        };
        var optionsPreferences = {
            height: '230px'
        };
        new __WEBPACK_IMPORTED_MODULE_5_chartist__["Pie"]('#chartPreferences2', dataPreferences, optionsPreferences);
        new __WEBPACK_IMPORTED_MODULE_5_chartist__["Pie"]('#chartPreferences3', dataPreferences, optionsPreferences);
        new __WEBPACK_IMPORTED_MODULE_5_chartist__["Pie"]('#chartPreferences4', dataPreferences, optionsPreferences);
    };
    //Get list of division for filter
    DashboardComponent.prototype.getDivision = function () {
        var _this = this;
        return this.divisionService.GetAllDivisions(this.commonService.baseApiUrl).subscribe(function (data) {
            var dataEmp = JSON.stringify(data);
            var empParse = JSON.parse(dataEmp);
            _this.divisionList = JSON.parse(empParse["_body"]);
        });
    };
    //Getting work orders status for display in table list
    DashboardComponent.prototype.getAssignWorkOrderForDashboard = function () {
        var _this = this;
        this.workOrderService.getAssignWorkOrderForDashboard(this.commonService.baseApiUrl, this.userProfile.ID).subscribe(function (data) {
            var dataOrders = JSON.stringify(data);
            var ordersParse = JSON.parse(dataOrders);
            var ordersInfo = JSON.parse(ordersParse["_body"]);
            _this.workOrderCompleted = ordersInfo.filter(function (item) { return item.WorkOrderAssignmentStatus === 'Completed'; });
            _this.workOrderRejected = ordersInfo.filter(function (item) { return item.WorkOrderAssignmentStatus === 'Rejected'; });
        });
    };
    DashboardComponent.prototype.getAllWorkCountForDashboards = function () {
        //get total jobs completed count
        // this.workOrderService.GetCompleteWorkOrderAssignmentRoleBased(this.commonService.baseApiUrl, this.userProfile.ID).subscribe(
        // data => {
        //     let dataOrders = JSON.stringify(data);
        //     let ordersParse = JSON.parse(dataOrders);
        //     let ordersInfo = JSON.parse(ordersParse["_body"]);
        //     console.log(ordersInfo);               
        // }); 
        var _this = this;
        //get total work orders completed count
        this.workOrderService.GetCompleteWorkOrderAssignmentRoleBased(this.commonService.baseApiUrl, this.userProfile.ID).subscribe(function (data) {
            var dataOrders = JSON.stringify(data);
            var ordersParse = JSON.parse(dataOrders);
            var ordersInfo = JSON.parse(ordersParse["_body"]);
            _this.totalWorkOrders = ordersInfo['Complete'];
        });
        //get total time sheet hours approved count
        this.workOrderService.GetRoleBasedTimeSheetHours(this.commonService.baseApiUrl, this.userProfile.ID).subscribe(function (data) {
            var dataOrders = JSON.stringify(data);
            var ordersParse = JSON.parse(dataOrders);
            _this.totalTimeSheet = JSON.parse(ordersParse["_body"]);
        });
        //get total maintenance tasks completed count
        this.workOrderService.GetRoleBasedMaintenance(this.commonService.baseApiUrl, this.userProfile.ID).subscribe(function (data) {
            var dataOrders = JSON.stringify(data);
            var ordersParse = JSON.parse(dataOrders);
            _this.mainTaskCompleted = JSON.parse(ordersParse["_body"]);
        });
    };
    //Get data for pie chart
    DashboardComponent.prototype.getWorkDetailForPieChart = function () {
        var _this = this;
        var labels = [];
        var series = [];
        this.workOrderService.GetWorkOrderForPieChartForDashBoard(this.commonService.baseApiUrl, this.userProfile.ID).subscribe(function (data) {
            var dataOrders = JSON.stringify(data);
            var ordersParse = JSON.parse(dataOrders);
            var ordersInfo = JSON.parse(ordersParse["_body"]);
            console.log(ordersInfo);
            if (ordersInfo['Scheduled'] == 0 && ordersInfo['Complete'] == 0 && ordersInfo['Assigned'] == 0) {
                _this.showFirstPieChart = false;
            }
            labels.push(ordersInfo['Scheduled'] + '%');
            labels.push(ordersInfo['Complete'] + '%');
            labels.push(ordersInfo['Assigned'] + '%');
            series.push(ordersInfo['Scheduled']);
            series.push(ordersInfo['Complete']);
            series.push(ordersInfo['Assigned']);
            var dataPreferences = {
                labels: labels,
                series: series
            };
            var optionsPreferences = {
                height: '230px'
            };
            new __WEBPACK_IMPORTED_MODULE_5_chartist__["Pie"]('#chartPreferences1', dataPreferences, optionsPreferences);
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_commonService__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_3__services_workOrderService__["a" /* WorkOrderService */], __WEBPACK_IMPORTED_MODULE_6__angular_common__["DatePipe"], __WEBPACK_IMPORTED_MODULE_8__services_divisionService__["a" /* DivisionService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_commonService__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_3__services_workOrderService__["a" /* WorkOrderService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_8__services_divisionService__["a" /* DivisionService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["Http"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__md_md_module__ = __webpack_require__("./src/app/md/md.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_routing__ = __webpack_require__("./src/app/dashboard/dashboard.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agm_js_marker_clusterer__ = __webpack_require__("./node_modules/@agm/js-marker-clusterer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_md2__ = __webpack_require__("./node_modules/md2/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_7__dashboard_routing__["a" /* DashboardRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__md_md_module__["a" /* MdModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_module__["b" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_8__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyALhBWvI6EuL2Vul0ykYis51D_ckKtxVCc',
                    libraries: ["places"]
                }),
                __WEBPACK_IMPORTED_MODULE_10_md2__["a" /* Md2DatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_10_md2__["b" /* MdNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_9__agm_js_marker_clusterer__["a" /* AgmJsMarkerClustererModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__dashboard_component__["a" /* DashboardComponent */]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");

var DashboardRoutes = [
    {
        path: '',
        children: [{
                path: 'dashboard',
                component: __WEBPACK_IMPORTED_MODULE_0__dashboard_component__["a" /* DashboardComponent */]
            }]
    }
];


/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map
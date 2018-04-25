webpackJsonp(["users.module"],{

/***/ "./src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\r\n    :focus {\r\n        outline: none;\r\n    }\r\n\r\n    .radio {\r\n        -webkit-appearance: button;\r\n        -moz-appearance: button;\r\n        appearance: button;\r\n        border: 4px solid #ccc;\r\n        border-top-color: #bbb;\r\n        border-left-color: #bbb;\r\n        background: #fff;\r\n        width: 35px;\r\n        height: 35px;\r\n        border-radius: 50%;\r\n        outline: none !important;\r\n    }\r\n\r\n        .radio:checked {\r\n            border: 10px solid #e91e63;\r\n        }\r\n\r\n    .dropdownview {\r\n        -webkit-appearance: menulist-button;\r\n    }\r\n\r\n    #btnSync {\r\n        margin: 10px -17px;\r\n    }\r\n\r\n    .strike-through-text {\r\n        color: #ff0000;\r\n    }\r\n\r\n    td {\r\n        position: relative;\r\n    }\r\n\r\n    tr.strikeout td:before {\r\n        content: \" \";\r\n        position: absolute;\r\n        top: 47%;\r\n        left: 0;\r\n        border-bottom: 1px solid #ff0000;\r\n        width: 100%;\r\n    }\r\n\r\n    #td-actions:before {\r\n        content: \" \";\r\n        position: absolute;\r\n        top: 50%;\r\n        left: 0;\r\n        border-bottom: none;\r\n        width: 100%;\r\n    }\r\n\r\n    .switch {\r\n        position: relative;\r\n        display: inline-block;\r\n        width: 60px;\r\n        height: 34px;\r\n    }\r\n\r\n        .switch input {\r\n            display: none;\r\n        }\r\n\r\n    .slider {\r\n        position: absolute;\r\n        cursor: pointer;\r\n        top: 11px;\r\n        left: 0;\r\n        right: 0;\r\n        bottom: -12px;\r\n        background-color: #ccc;\r\n        -webkit-transition: .4s;\r\n        transition: .4s;\r\n    }\r\n\r\n        .slider:before {\r\n            position: absolute;\r\n            content: \"\";\r\n            height: 26px;\r\n            width: 26px;\r\n            left: 4px;\r\n            bottom: 4px;\r\n            background-color: white;\r\n            -webkit-transition: .4s;\r\n            transition: .4s;\r\n        }\r\n\r\n    input:checked + .slider {\r\n        background-color: darkviolet;\r\n    }\r\n\r\n    input:focus + .slider {\r\n        box-shadow: 0 0 1px darkviolet;\r\n    }\r\n\r\n    input:checked + .slider:before {\r\n        -webkit-transform: translateX(26px);\r\n        -ms-transform: translateX(26px);\r\n        transform: translateX(26px);\r\n    }\r\n\r\n    /* Rounded sliders */\r\n    .slider.round {\r\n        border-radius: 34px;\r\n    }\r\n\r\n        .slider.round:before {\r\n            border-radius: 50%;\r\n        }\r\n\r\n    .wizard-card .info-text {\r\n        text-align: center;\r\n        margin: -13px 0 30px !important;\r\n    }\r\n</style>\r\n<title>Aspect Users</title>\r\n\r\n<div class=\"main-content\">\r\n    <!--<button type=\"submit\" class=\"btn btn-rose pull-left\" (click)=\"getSyncEmployee()\" id=\"btnSync\">Sync Users</button>-->\r\n    <div class=\"col-md-2\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-10 col-md-6 col-sm-3\">\r\n                <div class=\"dropdown\">\r\n                    <button href=\"#pablo\" class=\"dropdown-toggle btn btn-primary btn-round btn-block\" data-toggle=\"dropdown\">\r\n                        ADD USER\r\n                        <b class=\"caret\"></b>\r\n                    </button>\r\n                    <ul class=\"dropdown-menu dropdown-menu-left\">\r\n                        <li *ngIf=\"isAddAccess == true\">\r\n                            <a data-toggle=\"modal\" (click)=\"resetForm()\" data-target=\"#myModal\">Add User</a>\r\n                        </li>\r\n                        <li *ngIf=\"isSyncAccess == true\">\r\n                            <a id=\"synUsers\" href=\"javascript:void(0);\" (click)=\"getSyncEmployee()\">Sync Users</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!--<button type=\"submit\" class=\"btn btn-primary btn-round pull-left\" (click)=\"getUser()\" id=\"btnSync\">Back</button>-->\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <!--<div class=\"card-header card-header-icon\" data-background-color=\"purple\">\r\n                        <i class=\"material-icons\">assignment</i>\r\n                    </div>-->\r\n                    <div class=\"card-content\">\r\n                        <h4 class=\"card-title\">Users</h4>\r\n                        <div class=\"toolbar\">\r\n                            <!--        Here you can write extra buttons/actions for the toolbar              -->\r\n                        </div>\r\n                        <div class=\"material-datatables table-responsive\">\r\n                            <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>{{ dataTable.headerRow[0] }}</th>\r\n                                        <th>{{ dataTable.headerRow[1] }}</th>\r\n                                        <th>{{ dataTable.headerRow[2] }}</th>\r\n                                        <th>{{ dataTable.headerRow[3] }}</th>\r\n                                        <!--<th>{{ dataTable.headerRow[4] }}</th>-->\r\n                                        <th class=\"disabled-sorting text-right\">{{ dataTable.headerRow[4] }}</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <!--<tfoot>\r\n                                    <tr>\r\n                                        <th>{{ dataTable.footerRow[0] }}</th>\r\n                                        <th>{{ dataTable.footerRow[1] }}</th>\r\n                                        <th>{{ dataTable.footerRow[2] }}</th>\r\n                                        <th>{{ dataTable.footerRow[3] }}</th>\r\n                                        <th>{{ dataTable.footerRow[4] }}</th>\r\n                                        <th class=\"text-right\">{{ dataTable.footerRow[5] }}</th>\r\n                                    </tr>\r\n                                </tfoot>-->\r\n                                <tbody>\r\n                                    <!--od-->\r\n                                    <tr *ngFor=\"let emp of dataTable.dataRows\" [ngClass]=\"emp.IsActive == false ? 'strikeout' : ''\">\r\n                                        <!--<td><div matTooltip=\"{{emp.OldEmpId}}\" [matTooltipPosition]=\"'above'\" [ngClass]=\"!emp.IsActive && !emp.IsSync ? 'strike-through-text' : ''\">{{emp.ID}}</div></td>-->\r\n                                        <td>\r\n                                            <div *ngIf=\"emp.UserStatus == 'New'\">\r\n                                                {{emp.Firstname}} {{emp.Lastname}}\r\n                                            </div>\r\n                                            <div *ngIf=\"emp.UserStatus == 'Updated'\">\r\n                                                <div [ngClass]=\"emp.IsActive == false ? 'strike-through-text' : ''\" matTooltip=\"{{emp.Firstname}} {{emp.Lastname}}\" [matTooltipPosition]=\"'above'\">\r\n                                                    {{emp.edFirstname}} {{emp.edLastname}}\r\n                                                </div>\r\n                                            </div>\r\n                                            <div *ngIf=\"emp.UserStatus == 'Exists' || emp.UserStatus == 'System User'\">\r\n                                                <div [ngClass]=\"emp.IsActive == false ? 'strike-through-text' : ''\">\r\n                                                    {{emp.edFirstname}} {{emp.edLastname}}\r\n                                                </div>\r\n                                            </div>\r\n                                            <!--<div style=\"color:red;\" *ngIf=\"emp.edLastname\" matTooltip=\"{{emp.edFirstname}} {{emp.edLastname}}\" [matTooltipPosition]=\"'above'\">\r\n                                                {{emp.Firstname}} {{emp.Lastname}}\r\n                                            </div>\r\n                                            <div *ngIf=\"!emp.edLastname\" [ngClass]=\"!emp.IsActive && !emp.IsSync ? 'strike-through-text' : ''\">\r\n                                                {{emp.Firstname}} {{emp.Lastname}}\r\n                                            </div>-->\r\n                                        </td>\r\n                                        <td>\r\n                                            <div *ngIf=\"emp.UserStatus == 'New'\">\r\n                                                {{emp.EmailAddress}}\r\n                                            </div>\r\n                                            <div *ngIf=\"emp.UserStatus == 'Updated'\">\r\n                                                <div [ngClass]=\"emp.IsActive == false ? 'strike-through-text' : ''\">\r\n                                                    {{emp.edEmailAddress}}\r\n                                                </div>\r\n                                            </div>\r\n                                            <div *ngIf=\"emp.UserStatus == 'Exists' || emp.UserStatus == 'System User'\">\r\n                                                <div [ngClass]=\"emp.IsActive == false ? 'strike-through-text' : ''\">\r\n                                                    {{emp.edEmailAddress}}\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <!--<div style=\"color:red;\" *ngIf=\"emp.edEmailAddress\" matTooltip=\"{{emp.edEmailAddress}}\" [matTooltipPosition]=\"'above'\">\r\n                                                {{emp.EmailAddress}}\r\n                                            </div>\r\n                                            <div *ngIf=\"!emp.edEmailAddress\" [ngClass]=\"!emp.IsActive && !emp.IsSync ? 'strike-through-text' : ''\">\r\n                                                {{emp.EmailAddress}}\r\n                                            </div>-->\r\n                                        </td>\r\n                                        <td>\r\n                                            <div *ngIf=\"emp.UserStatus == 'New'\">\r\n                                                {{emp.PhoneNumber}}\r\n                                            </div>\r\n                                            <div *ngIf=\"emp.UserStatus == 'Updated'\">\r\n                                                <div [ngClass]=\"emp.IsActive == false? 'strike-through-text' : ''\">\r\n                                                    {{emp.edPhoneNumber}}\r\n                                                </div>\r\n                                            </div>\r\n                                            <div *ngIf=\"emp.UserStatus == 'Exists' || emp.UserStatus == 'System User'\">\r\n                                                <div [ngClass]=\"emp.IsActive == false ? 'strike-through-text' : ''\">\r\n                                                    {{emp.edPhoneNumber}}\r\n                                                </div>\r\n                                            </div>\r\n                                            <!--<div style=\"color:red;\" *ngIf=\"emp.edPhoneNumber\" matTooltip=\"{{emp.edPhoneNumber}}\" [matTooltipPosition]=\"'above'\">\r\n                                                {{emp.PhoneNumber}}\r\n                                            </div>\r\n                                            <div *ngIf=\"!emp.edPhoneNumber\" [ngClass]=\"!emp.IsActive && !emp.IsSync ? 'strike-through-text' : ''\">\r\n                                                {{emp.PhoneNumber}}\r\n                                            </div>-->\r\n                                        </td>\r\n                                        <!--<td>\r\n                                            <div *ngIf=\"emp.UserStatus == 'New'\">\r\n                                                {{emp.datCommenced}}\r\n                                            </div>\r\n                                            <div *ngIf=\"emp.UserStatus == 'Updated'\">\r\n                                                <div [ngClass]=\"emp.IsActive == false? 'strike-through-text' : ''\">\r\n                                                    {{emp.edtCommenced}}\r\n                                                </div>\r\n                                            </div>\r\n                                            <div *ngIf=\"emp.UserStatus == 'Exists' || emp.UserStatus == 'System User'\">\r\n                                                <div [ngClass]=\"emp.IsActive == false ? 'strike-through-text' : ''\">\r\n                                                    {{emp.edtCommenced}}\r\n                                                </div>\r\n                                            </div>\r\n                                        </td>-->\r\n                                        <td>\r\n                                            <div [ngClass]=\"emp.IsActive == false ? 'strike-through-text' : ''\">\r\n                                                <div *ngIf=\"emp.IsActive == true; else inactive\">Active</div>\r\n                                                <ng-template #inactive>InActive</ng-template>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td class=\"text-right\" id=\"td-actions\">\r\n                                            <span *ngIf=\"emp.UserStatus == 'New'\">\r\n                                                <button class=\"btn btn-success btn-icon edit btn-xs\">\r\n                                                    New\r\n                                                </button>\r\n                                            </span>\r\n                                            <span style=\"color:red;\" *ngIf=\"emp.UserStatus == 'Updated'\">\r\n                                                <button class=\"btn btn-success btn-icon edit btn-xs\" data-toggle=\"modal\" (click)=\"getCurrentUser(emp.EmployeeId, emp.UserStatus)\" data-target=\"#noticeModal\">\r\n                                                    Updated\r\n                                                </button>\r\n                                                <!--<button class=\"btn btn-simple btn-warning btn-icon edit\" data-toggle=\"modal\" matTooltip=\"History\" [matTooltipPosition]=\"'left'\" (click)=\"getCurrentUser(emp.OldEmpId, emp.UserStatus)\" data-target=\"#noticeModal\">\r\n                                                    <i class=\"material-icons\">history</i>\r\n                                                </button>-->\r\n                                            </span>\r\n                                            <!--<button class=\"btn btn-simple btn-info btn-icon like\" matTooltip=\"Like\" [matTooltipPosition]=\"'left'\">\r\n                                                <i class=\"material-icons\">favorite</i>\r\n                                            </button>-->\r\n                                            <button class=\"btn btn-simple btn-warning btn-icon edit\" *ngIf=\"isEditAccess == true\" data-toggle=\"modal\" (click)=\"getCurrentUser(emp.UserStatus == 'New' ? emp.OldEmpId : emp.EmployeeId, emp.UserStatus)\" data-target=\"#myModal\">\r\n                                                <i class=\"material-icons\">dvr</i>\r\n                                            </button>\r\n                                            <!--<button class=\"btn btn-simple btn-danger btn-icon remove\" matTooltip=\"Remove\" [matTooltipPosition]=\"'left'\">\r\n                                                <i class=\"material-icons\">close</i>\r\n                                            </button>-->\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                            <div class=\"col-lg-12\">\r\n                                <div *ngIf=\"lastSyncDate == 'No Sync'\">\r\n                                    <label class=\"pull-right\">last Sync: {{lastSyncDate }}</label>\r\n                                </div>\r\n                                <div *ngIf=\"lastSyncDate != 'No Sync'\">\r\n                                    <label class=\"pull-right\">last Sync: {{lastSyncDate | date: 'dd/MM/yyyy HH:mm:ss' }}</label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- end content-->\r\n                </div>\r\n                <!--  end card  -->\r\n            </div>\r\n            <!-- end col-md-12 -->\r\n        </div>\r\n        <!-- end row -->\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"wizard-container\">\r\n            <div class=\"card wizard-card\" data-color=\"rose\" id=\"wizardProfile\">\r\n                <form [formGroup]=\"stageUser\">\r\n                    <!--        You can switch \" data-color=\"purple\" \"  with one of the next bright colors: \"green\", \"orange\", \"red\", \"blue\"       -->\r\n                    <div class=\"wizard-header\" style=\"padding: 25px 0 7px;\">\r\n                        <h3 class=\"wizard-title\">\r\n                            Add/Edit User\r\n                        </h3>\r\n                    </div>\r\n                    <div class=\"wizard-navigation\">\r\n                        <ul>\r\n                            <li>\r\n                                <a href=\"#about\" data-toggle=\"tab\">Name</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#account\" data-toggle=\"tab\">Info</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#address\" data-toggle=\"tab\">Role</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"tab-content\">\r\n                        <div class=\"tab-pane\" id=\"about\">\r\n                            <div class=\"row\">\r\n                                <h4 class=\"info-text\"> Let's start with the required information</h4>\r\n                                <div class=\"col-sm-4 col-sm-offset-1\">\r\n                                    <div class=\"picture-container\">\r\n                                        <div class=\"picture\">\r\n                                            <!--<img src=\"../../assets/img/default-avatar.png\" class=\"picture-src\" id=\"wizardPicturePreview\" title=\"\" />-->\r\n                                            <div *ngIf=\"profilePic\">\r\n                                                <img src=\"{{profilePic}}\" class=\"picture-src\" id=\"wizardPicturePreview\" title=\"\" />\r\n                                            </div>\r\n                                            <div *ngIf=\"!profilePic\">\r\n                                                <img src=\"../../assets/img/default-avatar.png\" class=\"picture-src\" id=\"wizardPicturePreview\" title=\"\" />\r\n                                            </div>\r\n                                            <input type=\"file\" id=\"flProfile\" (change)=\"onFileChange($event)\" formControlName=\"flProfile\" #fileInput>\r\n                                        </div>\r\n                                        <h6>Choose Picture</h6>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                            <i class=\"material-icons\">face</i>\r\n                                        </span>\r\n                                        <div class=\"form-group label-floating\">\r\n                                            <label class=\"control-label\">\r\n                                                First Name\r\n                                                <small>(required)</small>\r\n                                            </label>\r\n                                            <input name=\"firstname\" type=\"text\" class=\"form-control\" formControlName=\"firstname\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                            <i class=\"material-icons\">record_voice_over</i>\r\n                                        </span>\r\n                                        <div class=\"form-group label-floating\">\r\n                                            <label class=\"control-label\">\r\n                                                Last Name\r\n                                                <small>(required)</small>\r\n                                            </label>\r\n                                            <input name=\"lastname\" type=\"text\" class=\"form-control\" formControlName=\"lastname\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-lg-10 col-lg-offset-1\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                            <i class=\"material-icons\">email</i>\r\n                                        </span>\r\n                                        <div class=\"form-group label-floating\">\r\n                                            <label class=\"control-label\" id=\"lblEmail\">\r\n                                                Email\r\n                                                <small>(required)</small>\r\n                                            </label>\r\n                                            <input id=\"txtEmail\" name=\"email\" type=\"email\" (change)=\"userEmailExist($event)\" class=\"form-control\" formControlName=\"email\">\r\n                                            <div *ngIf=\"errorMsg\">\r\n                                                <label class=\"control-label\" style=\"color:red;\">\r\n                                                    {{ errorMsg }}\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"tab-pane\" id=\"account\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-5 col-sm-offset-1\">\r\n                                    <div class=\"form-group label-floating cntEmpty\">\r\n                                        <label class=\"control-label\">\r\n                                            Country\r\n                                            <small>(required)</small>\r\n                                        </label>\r\n                                        <select name=\"country\" class=\"form-control dropdownview\" formControlName=\"country\" (change)=\"getStatesByCountry($event.target.value)\">\r\n                                            <option disabled=\"\" selected=\"\">Select Country</option>\r\n                                            <option *ngFor=\"let country of countryList\" value={{country.ID}}>\r\n                                                {{country.Title}}\r\n                                            </option>\r\n                                            <!--<option value=\"1\">Aspect Toowoomba</option>\r\n                                            <option value=\"2\">Toowoomba Bench Tops</option>\r\n                                            <option value=\"3\">Bradbec</option>-->\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-5\">\r\n                                    <div class=\"input-group\">\r\n                                        <div class=\"form-group label-floating cntEmpty\">\r\n                                            <label class=\"control-label\">\r\n                                                State\r\n                                                <small>(required)</small>\r\n                                            </label>\r\n                                            <select name=\"state\" class=\"form-control dropdownview\" formControlName=\"state\" style=\"width:220px;\">\r\n                                                <option disabled=\"\" selected=\"\">Select State</option>\r\n                                                <option *ngFor=\"let state of stateList\" value={{state.ID}}>\r\n                                                    {{state.Title}}\r\n                                                </option>\r\n                                                <!--<option value=\"1\">Aspect Toowoomba</option>\r\n                                                <option value=\"2\">Toowoomba Bench Tops</option>\r\n                                                <option value=\"3\">Bradbec</option>-->\r\n                                            </select>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"col-sm-5 col-sm-offset-1\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">\r\n                                            Suburb\r\n                                            <small>(required)</small>\r\n                                        </label>\r\n                                        <input type=\"text\" class=\"form-control\" formControlName=\"town\" name=\"town\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-5\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">\r\n                                            PhoneNumber\r\n                                            <small>(required)</small>\r\n                                        </label>\r\n                                        <input id=\"txtPhoneNumber\" type=\"text\" class=\"form-control\" formControlName=\"phoneNumber\" name=\"phoneNumber\" maxlength=\"15\">\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"col-sm-3 col-sm-offset-1\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">\r\n                                            Password\r\n                                            <small>(required)</small>\r\n                                        </label>\r\n                                        <!--<i toggle=\"#password\" class=\"fa fa-fw fa-eye reveal pull-right\" style=\"margin: -13px 6px;\"></i>-->\r\n                                        <input type=\"password\" class=\"form-control pwd\" formControlName=\"password\" name=\"password\" id=\"password\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">\r\n                                            Confirm Password\r\n                                            <small>(required)</small>\r\n                                        </label>\r\n                                        <!--<i toggle=\"#cpassword\" class=\"fa fa-fw fa-eye creveal pull-right\" style=\"margin: -13px 6px;\"></i>-->\r\n                                        <input type=\"password\" class=\"form-control cpwd\" formControlName=\"cpassword\" name=\"cpassword\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">\r\n                                            Division\r\n                                            <small>(required)</small>\r\n                                        </label>\r\n                                        <select name=\"company\" class=\"form-control dropdownview\" formControlName=\"division\" id=\"divsn\">\r\n                                            <option disabled=\"\" selected=\"\"></option>\r\n                                            <option value=\"1\">Aspect Toowoomba</option>\r\n                                            <option value=\"2\">Toowoomba Bench Tops</option>\r\n                                            <option value=\"3\">Bradbec</option>\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-5 col-sm-offset-1\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">\r\n                                            Street\r\n                                            <small>(required)</small>\r\n                                        </label>\r\n                                        <input type=\"text\" class=\"form-control\" formControlName=\"street\" name=\"street\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-5\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">\r\n                                            PostCode\r\n                                            <small>(required)</small>\r\n                                        </label>\r\n                                        <input type=\"text\" class=\"form-control number-only\" formControlName=\"postCode\" name=\"postCode\" maxlength=\"4\" minlength=\"4\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"tab-pane\" id=\"address\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-12\">\r\n                                    <div class=\"row\">\r\n                                        <div *ngFor=\"let role of userRoleList;let isOdd = odd;\">\r\n                                            <div *ngIf=\"isOdd==true;else elseBlock\">\r\n                                                <div class=\"col-lg-6\">\r\n                                                    <div class=\"col-md-1\"></div>\r\n                                                    <div class=\"col-lg-1\">\r\n                                                        <input type=\"radio\" name=\"role\" [id]=\"role.ID\" [value]=\"role.ID\" formControlName=\"role\" class=\"radio\">\r\n                                                    </div>\r\n                                                    <div class=\"col-lg-8\" style=\"margin-top:12px;margin-left: 14px;\">\r\n                                                        <span style=\"color:black;font-size:14px;\">{{ role.Title }}</span>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <ng-template #elseBlock>\r\n                                                <div class=\"col-lg-6\">\r\n                                                    <div class=\"col-md-1\"></div>\r\n                                                    <div class=\"col-lg-1\">\r\n                                                        <input type=\"radio\" name=\"role\" [id]=\"role.ID\" [value]=\"role.ID\" formControlName=\"role\" class=\"radio\">\r\n                                                    </div>\r\n                                                    <div class=\"col-lg-8\" style=\"margin-top:12px;margin-left: 14px;\">\r\n                                                        <span style=\"color:black;font-size:14px;\">{{ role.Title }}</span>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </ng-template>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <!--<div class=\"col-lg-10 col-lg-offset-1\">\r\n                                    <div class=\"col-sm-4\">\r\n                                        <div class=\"choice\" data-toggle=\"wizard-checkbox\">\r\n                                            <input type=\"checkbox\" name=\"jobb\" value=\"Design\">\r\n                                            <div class=\"icon\">\r\n                                                <i class=\"fa fa-pencil\"></i>\r\n                                            </div>\r\n                                            <h6>Design</h6>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4\">\r\n                                        <div class=\"choice\" data-toggle=\"wizard-checkbox\">\r\n                                            <input type=\"checkbox\" name=\"jobb\" value=\"Code\">\r\n                                            <div class=\"icon\">\r\n                                                <i class=\"fa fa-terminal\"></i>\r\n                                            </div>\r\n                                            <h6>Code</h6>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4\">\r\n                                        <div class=\"choice\" data-toggle=\"wizard-checkbox\">\r\n                                            <input type=\"checkbox\" name=\"jobb\" value=\"Develop\">\r\n                                            <div class=\"icon\">\r\n                                                <i class=\"fa fa-laptop\"></i>\r\n                                            </div>\r\n                                            <h6>Develop</h6>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>-->\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"wizard-footer\">\r\n                        <div class=\"pull-right\">\r\n                            <input type='button' class='btn btn-next btn-fill btn-rose btn-wd' name='next' value='Next' />\r\n                            <input type='button' class='btn btn-finish btn-fill btn-rose btn-wd' (click)=\"createUser()\" name='finish' value='Finish' />\r\n                        </div>\r\n                        <div class=\"pull-left\">\r\n                            <label class=\"switch\">\r\n                                <input type=\"checkbox\" formControlName=\"isActive\" id=\"chkAct\">\r\n                                <span class=\"slider round\"></span>\r\n                            </label>\r\n                            <input type='button' class='btn btn-previous btn-fill btn-default btn-wd' name='previous' value='Previous' />\r\n                            <span class=\"switch-title\" style=\"font-size:18px;letter-spacing:1px;\">User is <span id=\"divAct\">{{ activeUser }}</span></span>\r\n\r\n                            <!--<label [(ngModel)]=\"{{activeUser}}\" ></label>\r\n                                <input type='text'\r\n                                      [(ngModel)]=\"{{activeUser}}\" />-->\r\n                            <br>\r\n\r\n\r\n                            <br>\r\n                        </div><br />\r\n                        <div class=\"clearfix\"></div>\r\n                    </div>\r\n\r\n\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- notice modal -->\r\n<div class=\"modal fade\" id=\"noticeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <form>\r\n        <div class=\"modal-dialog modal-notice\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><i class=\"material-icons\">clear</i></button>\r\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">History</h5>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <div class=\"instruction\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <strong>Manager softwares record</strong>\r\n                                <p>Firstname : {{mapUserList.Firstname}}</p>\r\n                                <p>Lastname: {{mapUserList.Lastname}}</p>\r\n                                <p>EmailAddress: {{mapUserList.EmailAddress}}</p>\r\n                                <p>PhoneNumber: {{mapUserList.PhoneNumber}}</p>\r\n                                <p>Address: {{mapUserList.AddressLine}}</p>\r\n                                <p>State: {{mapUserList.State}}</p>\r\n                                <p>Country: {{mapUserList.Country}}</p>\r\n                                <p>Street: {{mapUserList.Street}}</p>\r\n                                <p>Suburb: {{mapUserList.Town}}</p>\r\n                                <p>PostCode: {{mapUserList.PostCode}}</p>\r\n                                <p>DivisionId: {{mapUserList.DivisionId}}</p>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <strong>Frontops record</strong>\r\n                                <p>Firstname : {{mapUserList.edFirstname}}</p>\r\n                                <p>Lastname: {{mapUserList.edLastname}}</p>\r\n                                <p>EmailAddress: {{mapUserList.edEmailAddress}}</p>\r\n                                <p>PhoneNumber: {{mapUserList.edPhoneNumber}}</p>\r\n                                <p>Address: {{mapUserList.edAddressLine}}</p>\r\n                                <p>State: {{mapUserList.edState}}</p>\r\n                                <p>Country: {{mapUserList.edCountry}}</p>\r\n                                <p>Street: {{mapUserList.edStreet}}</p>\r\n                                <p>Suburb: {{mapUserList.edTown}}</p>\r\n                                <p>PostCode: {{mapUserList.edPostCode}}</p>\r\n                                <p>DivisionId: {{mapUserList.edDivisionId}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n<!-- end notice modal -->\r\n"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_commonService__ = __webpack_require__("./src/app/services/commonService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_userService__ = __webpack_require__("./src/app/services/userService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_countryService__ = __webpack_require__("./src/app/services/countryService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_roleService__ = __webpack_require__("./src/app/services/roleService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_sweetalert2__);
// IMPORTANT: this is a plugin which requires jQuery for initialisation and data manipulation
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var UsersComponent = /** @class */ (function () {
    function UsersComponent(http, router, commonService, userService, countryService, roleService) {
        this.http = http;
        this.router = router;
        this.commonService = commonService;
        this.userService = userService;
        this.countryService = countryService;
        this.roleService = roleService;
        this.activeUser = "InActive";
        this.mapUserList = {};
        this.errorMsg = null;
        this.stageUser = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            firstname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            lastname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            state: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            country: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            phoneNumber: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            division: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            postCode: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            town: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            street: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            cpassword: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            isActive: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            flProfile: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            role: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]()
        });
    }
    UsersComponent.prototype.showSwal = function (text) {
        __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({
            type: 'success',
            //title: 'Good job!',
            text: text,
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-success'
        }).catch(__WEBPACK_IMPORTED_MODULE_9_sweetalert2___default.a.noop);
    };
    UsersComponent.prototype.ngOnInit = function () {
        if (JSON.parse(sessionStorage.getItem('LogEmployee')) != null) {
            var userRoleAccess = JSON.parse(sessionStorage.getItem('AccessRole'));
            if (userRoleAccess != null) {
                var jobAccess = userRoleAccess.filter(function (job) { return job.ModuleName == "USERINFO"; });
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
        $('.loader').show();
        $("#lblEmail").html('Email <small>(required) </small>');
        this.getCountries();
        this.getUsersRoles();
        this.getAllEmployee();
        this.dataTable = {
            headerRow: ['User', 'Email Address', 'Phone Number', 'Status', 'Actions'],
            footerRow: ['User', 'Email Address', 'Phone Number', 'Status', 'Actions'],
            dataRows: this.stageEmployeeList
        };
        $(".creveal").on('click', function () {
            var $cpwd = $(".cpwd");
            if ($cpwd.attr('type') === 'password') {
                $cpwd.attr('type', 'text');
            }
            else {
                $cpwd.attr('type', 'password');
            }
        });
        $(".reveal").on('click', function () {
            var $pwd = $(".pwd");
            if ($pwd.attr('type') === 'password') {
                $pwd.attr('type', 'text');
            }
            else {
                $pwd.attr('type', 'password');
            }
        });
        // Code for the Validator
        var $validator = $('.wizard-card form').validate({
            rules: {
                firstname: {
                    required: true
                },
                lastname: {
                    required: true
                },
                email: {
                    required: true,
                    remote: {
                        url: this.commonService.baseApiUrl + "CheckUserEmailExist/",
                        type: "get",
                        data: {
                            contact: function () { return $("#txtEmail").val(); },
                            value: function () { return localStorage.getItem("EmployeeId"); }
                        }
                    }
                },
                state: {
                    required: true
                },
                country: {
                    required: true
                },
                town: {
                    required: true
                },
                password: "required",
                cpassword: {
                    required: true,
                    equalTo: "#password",
                },
                company: {
                    required: true,
                },
                street: {
                    required: true
                },
                postCode: {
                    required: true
                },
            },
            errorPlacement: function (error, element) {
                $(element).parent('div').addClass('has-error');
            }
        });
        // Wizard Initialization
        $('.wizard-card').bootstrapWizard({
            'tabClass': 'nav nav-pills',
            'nextSelector': '.btn-next',
            'previousSelector': '.btn-previous',
            onNext: function (tab, navigation, index) {
                var $valid = $('.wizard-card form').valid();
                if (!$valid) {
                    $validator.focusInvalid();
                    return false;
                }
            },
            onInit: function (tab, navigation, index) {
                // check number of tabs and fill the entire row
                var $total = navigation.find('li').length;
                var $wizard = navigation.closest('.wizard-card');
                var $first_li = navigation.find('li:first-child a').html();
                var $moving_div = $('<div class="moving-tab">' + $first_li + '</div>');
                $('.wizard-card .wizard-navigation').append($moving_div);
                console.log($moving_div);
                $total = $wizard.find('.nav li').length;
                var $li_width = 100 / $total;
                var total_steps = $wizard.find('.nav li').length;
                var move_distance = $wizard.width() / total_steps;
                var index_temp = index;
                var vertical_level = 0;
                var mobile_device = $(document).width() < 600 && $total > 3;
                if (mobile_device) {
                    move_distance = $wizard.width() / 2;
                    index_temp = index % 2;
                    $li_width = 50;
                }
                $wizard.find('.nav li').css('width', $li_width + '%');
                var step_width = move_distance;
                move_distance = move_distance * index_temp;
                var $current = index + 1;
                if ($current == 1 || (mobile_device == true && (index % 2 == 0))) {
                    move_distance -= 8;
                }
                else if ($current == total_steps || (mobile_device == true && (index % 2 == 1))) {
                    move_distance += 8;
                }
                if (mobile_device) {
                    var x = index / 2;
                    vertical_level = parseInt(x);
                    vertical_level = vertical_level * 38;
                }
                $wizard.find('.moving-tab').css('width', step_width);
                $('.moving-tab').css({
                    'transform': 'translate3d(' + move_distance + 'px, ' + vertical_level + 'px, 0)',
                    'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'
                });
                $('.moving-tab').css('transition', 'transform 0s');
            },
            onTabClick: function (tab, navigation, index) {
                var $valid = $('.wizard-card form').valid();
                if (!$valid) {
                    return false;
                }
                else {
                    return true;
                }
            },
            onTabShow: function (tab, navigation, index) {
                var $total = navigation.find('li').length;
                var $current = index + 1;
                var $wizard = navigation.closest('.wizard-card');
                // If it's the last tab then hide the last button and show the finish instead
                if ($current >= $total) {
                    $($wizard).find('.btn-next').hide();
                    $($wizard).find('.btn-finish').show();
                    $($wizard).find('.switch').hide();
                    $($wizard).find('.switch-title').hide();
                }
                else if ($current == 2) {
                    $($wizard).find('.switch').hide();
                    $($wizard).find('.switch-title').hide();
                    $($wizard).find('.btn-next').show();
                }
                else {
                    $($wizard).find('.btn-next').show();
                    $($wizard).find('.btn-finish').hide();
                    $($wizard).find('.switch').show();
                    $($wizard).find('.switch-title').show();
                }
                var button_text = navigation.find('li:nth-child(' + $current + ') a').html();
                setTimeout(function () {
                    $('.moving-tab').text(button_text);
                    $('.moving-tab').css("width", "200");
                }, 150);
                var checkbox = $('.footer-checkbox');
                if (index !== 0) {
                    $(checkbox).css({
                        'opacity': '0',
                        'visibility': 'hidden',
                        'position': 'absolute'
                    });
                }
                else {
                    $(checkbox).css({
                        'opacity': '1',
                        'visibility': 'visible'
                    });
                }
                $total = $wizard.find('.nav li').length;
                var $li_width = 100 / $total;
                var total_steps = $wizard.find('.nav li').length;
                var move_distance = $wizard.width() / total_steps;
                var index_temp = index;
                var vertical_level = 0;
                var mobile_device = $(document).width() < 600 && $total > 3;
                if (mobile_device) {
                    move_distance = $wizard.width() / 2;
                    index_temp = index % 2;
                    $li_width = 50;
                }
                $wizard.find('.nav li').css('width', $li_width + '%');
                var step_width = move_distance;
                move_distance = move_distance * index_temp;
                $current = index + 1;
                if ($current == 1 || (mobile_device == true && (index % 2 == 0))) {
                    move_distance -= 8;
                }
                else if ($current == total_steps || (mobile_device == true && (index % 2 == 1))) {
                    move_distance += 8;
                }
                if (mobile_device) {
                    var x = index / 2;
                    vertical_level = parseInt(x);
                    vertical_level = vertical_level * 38;
                }
                $wizard.find('.moving-tab').css('width', step_width);
                $('.moving-tab').css({
                    'transform': 'translate3d(' + move_distance + 'px, ' + vertical_level + 'px, 0)',
                    'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'
                });
            }
        });
        // Prepare the preview for profile picture
        $('[data-toggle="wizard-radio"]').click(function () {
            var wizard = $(this).closest('.wizard-card');
            wizard.find('[data-toggle="wizard-radio"]').removeClass('active');
            $(this).addClass('active');
            $(wizard).find('[type="radio"]').removeAttr('checked');
            $(this).find('[type="radio"]').attr('checked', 'true');
        });
        $('[data-toggle="wizard-checkbox"]').click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).find('[type="checkbox"]').removeAttr('checked');
            }
            else {
                $(this).addClass('active');
                $(this).find('[type="checkbox"]').attr('checked', 'true');
            }
        });
        $('.set-full-height').css('height', 'auto');
        $('.number-only').keypress(function (e) {
            var keyCode = e.which ? e.which : e.keyCode;
            var ret = ((keyCode >= 48 && keyCode <= 57));
            return ret;
        });
        $('#txtPhoneNumber').keypress(function (e) {
            var txt = $('#txtPhoneNumber').val();
            var re = /^[0-9\-\s ]*$/;
            if (re.test(txt)) {
                return true;
            }
        });
        //var validateEmail = function (elementValue) {
        //    var emailPattern = /^[a-zA-Z0-9._-]+\.+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        //    return emailPattern.test(elementValue);
        //}
        //$('#txtEmail').keyup(function () {
        //    var value = $(this).val();
        //    var valid = validateEmail(value);
        //    if (!valid) {
        //        $(this).css('color', 'red');
        //        return false;
        //    } else {
        //        $(this).css('color', '#000');
        //        return true;
        //    }
        //});
    };
    UsersComponent.prototype.resetForm = function () {
        localStorage.removeItem("OldEmpId");
        localStorage.removeItem("EmployeeId");
        this.stageUser.reset();
        this.profilePic = null;
        var elems = document.querySelectorAll(".cntEmpty");
        [].forEach.call(elems, function (el) {
            el.classList.remove("is-empty");
        });
        $('.wizard-card').bootstrapWizard('show', 0);
        //changes-- Patch
        this.activeUser = "Active";
        this.stageUser.controls["isActive"].setValue(true);
        this.stageUser.controls["country"].setValue("1");
        this.getStatesByCountry("1");
        this.stageUser.controls["state"].setValue("5");
    };
    UsersComponent.prototype.createUser = function () {
        var _this = this;
        $('.loader').show();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        var usrImg = null;
        if (this.profilePic != null) {
            usrImg = this.profilePic.split(",");
        }
        var contact = {
            Firstname: this.stageUser.controls["firstname"].value,
            Lastname: this.stageUser.controls["lastname"].value,
            EmailAddress: this.stageUser.controls["email"].value,
            State: this.stageUser.controls["state"].value,
            Country: this.stageUser.controls["country"].value,
            StateID: this.stageUser.controls["state"].value,
            CountryID: this.stageUser.controls["country"].value,
            Town: this.stageUser.controls["town"].value,
            PhoneNumber: this.stageUser.controls["phoneNumber"].value,
            PostCode: this.stageUser.controls["postCode"].value,
            Street: this.stageUser.controls["street"].value,
            DivisionId: this.stageUser.controls["division"].value,
            Password: this.stageUser.controls["password"].value,
            ID: localStorage.getItem("EmployeeId"),
            OldEmpId: localStorage.getItem("OldEmpId"),
            IsActive: this.stageUser.controls["isActive"].value,
            ProfileImage: usrImg != null ? usrImg[1] : "",
            RoleID: this.stageUser.controls["role"].value
        };
        this.userService.CreateUser(this.commonService.baseApiUrl, contact).subscribe(function (data) {
            var dataEmp = JSON.stringify(data);
            var empParse = JSON.parse(dataEmp);
            var eplDetail = JSON.parse(empParse["_body"]);
            $('.loader').hide();
            if (eplDetail == true) {
                _this.stageUser.reset();
                _this.getAllEmployee();
                $('#myModal').modal('toggle');
                _this.showSwal("User updated successfully!");
            }
            else {
                _this.stageUser.reset();
                $('#myModal').modal('toggle');
                _this.showSwal("There is some error while user creation/update!!");
            }
        }, function (error) {
            console.log(error.json());
        });
    };
    UsersComponent.prototype.getCurrentUser = function (oldEmpID, status) {
        $('.wizard-card').bootstrapWizard('show', 0);
        var userList = JSON.parse(localStorage.getItem("StagEmployeeList"));
        if (userList != null) {
            for (var _i = 0, userList_1 = userList; _i < userList_1.length; _i++) {
                var emp = userList_1[_i];
                var userID = "0";
                userID = status == "New" ? emp.OldEmpId : emp.EmployeeId;
                if (userID == oldEmpID) {
                    localStorage.removeItem("OldEmpId");
                    localStorage.removeItem("EmployeeId");
                    this.profilePic = null;
                    this.mapUserList.Firstname = emp.Firstname;
                    this.mapUserList.edFirstname = emp.edFirstname;
                    this.mapUserList.Lastname = emp.Lastname;
                    this.mapUserList.edLastname = emp.edLastname;
                    this.mapUserList.EmailAddress = emp.EmailAddress;
                    this.mapUserList.edEmailAddress = emp.edEmailAddress;
                    this.mapUserList.PhoneNumber = emp.PhoneNumber;
                    this.mapUserList.edPhoneNumber = emp.edPhoneNumber;
                    this.mapUserList.AddressLine = emp.AddressLine;
                    this.mapUserList.edAddressLine = emp.edAddressLine;
                    this.mapUserList.AddressLine2 = emp.AddressLine2;
                    this.mapUserList.edAddressLine2 = emp.edAddressLine2;
                    this.mapUserList.AddressLine3 = emp.AddressLine3;
                    this.mapUserList.edAddressLine3 = emp.edAddressLine3;
                    this.mapUserList.State = emp.State;
                    this.mapUserList.edState = emp.edState;
                    this.mapUserList.Country = emp.Country;
                    this.mapUserList.edCountry = emp.edCountry;
                    this.mapUserList.Street = emp.Street;
                    this.mapUserList.edStreet = emp.edStreet;
                    this.mapUserList.Town = emp.Town;
                    this.mapUserList.edTown = emp.edTown;
                    this.mapUserList.PostCode = emp.PostCode;
                    this.mapUserList.edPostCode = emp.edPostCode;
                    this.mapUserList.DivisionId = emp.DivisionId;
                    this.mapUserList.edDivisionId = emp.edDivisionId;
                    var elems = document.querySelectorAll(".label-floating");
                    [].forEach.call(elems, function (el) {
                        el.classList.remove("is-empty");
                    });
                    this.getStatesByCountry(emp.edCountry != null ? emp.edCountry : "1");
                    if (emp.UserStatus == "New") {
                        this.stageUser.controls["firstname"].setValue(emp.Firstname);
                        this.stageUser.controls["lastname"].setValue(emp.Lastname);
                        this.stageUser.controls["email"].setValue(emp.EmailAddress);
                        this.stageUser.controls["town"].setValue(emp.Town);
                        this.stageUser.controls["phoneNumber"].setValue(emp.PhoneNumber);
                        this.stageUser.controls["postCode"].setValue(emp.PostCode);
                        this.stageUser.controls["street"].setValue(emp.Street);
                        this.stageUser.controls["division"].setValue(emp.DivisionId);
                        this.stageUser.controls["isActive"].setValue(true);
                        this.activeUser = "Active";
                    }
                    else {
                        localStorage.setItem("EmployeeId", emp.EmployeeId);
                        this.stageUser.controls["firstname"].setValue(emp.edFirstname);
                        this.stageUser.controls["lastname"].setValue(emp.edLastname);
                        this.stageUser.controls["email"].setValue(emp.edEmailAddress);
                        this.stageUser.controls["town"].setValue(emp.edTown);
                        this.stageUser.controls["phoneNumber"].setValue(emp.edPhoneNumber);
                        this.stageUser.controls["postCode"].setValue(emp.edPostCode);
                        this.stageUser.controls["street"].setValue(emp.edStreet);
                        this.stageUser.controls["division"].setValue(emp.edDivisionId);
                        this.stageUser.controls["isActive"].setValue(emp.IsActive == 0 || emp.IsActive == null ? false : true);
                        this.activeUser = emp.IsActive == 0 || emp.IsActive == null ? "InActive" : "Active";
                        this.stageUser.controls["role"].setValue(emp.RoleId);
                    }
                    localStorage.setItem("OldEmpId", emp.OldEmpId);
                    this.stageUser.controls["password"].setValue(emp.Password);
                    this.stageUser.controls["cpassword"].setValue(emp.Password);
                    this.stageUser.controls["country"].setValue(emp.edCountry != null ? emp.edCountry : "1");
                    this.stageUser.controls["state"].setValue(emp.edState != null ? emp.edState : "5");
                    this.profilePic = emp.ProfileImage;
                }
            }
        }
    };
    UsersComponent.prototype.getSyncEmployee = function () {
        var _this = this;
        return this.userService.StageUserSync(this.commonService.baseApiUrl).subscribe(function (data) {
            var dataEmp = JSON.stringify(data);
            var empParse = JSON.parse(dataEmp);
            var empSts = JSON.parse(empParse["_body"]);
            if (empSts == true) {
                _this.getAllEmployee();
            }
        });
    };
    UsersComponent.prototype.onFileChange = function (event) {
        var _this = this;
        if (event.target.files && event.target.files.length > 0) {
            var file = event.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (event) {
                _this.profilePic = event.target.result;
            };
        }
    };
    UsersComponent.prototype.userEmailExist = function (event) {
        var _this = this;
        this.errorMsg = null;
        var email = event.target.value;
        var empID = localStorage.getItem("EmployeeId");
        this.userService.CheckUserEmailExist(this.commonService.baseApiUrl, email, empID).subscribe(function (data) {
            var dataEmp = JSON.stringify(data);
            var empParse = JSON.parse(dataEmp);
            var empSts = JSON.parse(empParse["_body"]);
            if (empSts == false) {
                $("#lblEmail").html('');
                _this.errorMsg = "Email (already exists)";
            }
            else {
                _this.errorMsg = null;
                $("#lblEmail").html('Email <small>(required) </small>');
            }
        });
    };
    UsersComponent.prototype.getAllEmployee = function () {
        var _this = this;
        $('.loader').show();
        this.userService.GetSyncEmployee(this.commonService.baseApiUrl).subscribe(function (data) {
            var dataEmp = JSON.stringify(data);
            var empParse = JSON.parse(dataEmp);
            var empList = JSON.parse(empParse["_body"]);
            localStorage.removeItem("StagEmployeeList");
            _this.stageEmployeeList = null;
            if (empList != null) {
                $("#datatables").dataTable().fnDestroy();
                _this.lastSyncDate = empList[0].LastSyncDate != null ? empList[0].LastSyncDate : "No Sync";
                localStorage.setItem("StagEmployeeList", JSON.stringify(empList));
                _this.stageEmployeeList = empList;
                _this.dataTable = {
                    headerRow: ['User', 'Email Address', 'Phone Number', 'Status', 'Actions'],
                    footerRow: ['User', 'Email Address', 'Phone Number', 'Status', 'Actions'],
                    dataRows: _this.stageEmployeeList
                };
                setTimeout(function () {
                    $("#datatables").dataTable().fnDestroy();
                    $('#datatables').DataTable({
                        'pagingType': 'full_numbers',
                        'lengthMenu': [[10, 25, 50, -1], [10, 25, 50, 'All']],
                        responsive: true,
                        language: {
                            search: '_INPUT_',
                            searchPlaceholder: 'Search records',
                        }
                    });
                    var table = $('#datatables').DataTable();
                    // Edit record
                    table.on('click', '.edit', function () {
                    });
                    // Delete a record
                    table.on('click', '.remove', function (e) {
                        var $tr = $(this).closest('tr');
                        table.row($tr).remove().draw();
                        e.preventDefault();
                    });
                    // Like record
                    table.on('click', '.like', function () {
                        alert('You clicked on Like button');
                    });
                }, 10);
                $('.loader').hide();
            }
        });
    };
    UsersComponent.prototype.getCountries = function () {
        var _this = this;
        return this.countryService.GetCountries(this.commonService.baseApiUrl).subscribe(function (data) {
            var dataEmp = JSON.stringify(data);
            var empParse = JSON.parse(dataEmp);
            _this.countryList = JSON.parse(empParse["_body"]);
        });
    };
    UsersComponent.prototype.getUsersRoles = function () {
        var _this = this;
        return this.roleService.GetUsersRoles(this.commonService.baseApiUrl).subscribe(function (data) {
            var dataEmp = JSON.stringify(data);
            var empParse = JSON.parse(dataEmp);
            _this.userRoleList = JSON.parse(empParse["_body"]);
        });
    };
    UsersComponent.prototype.getStatesByCountry = function (countryId) {
        var _this = this;
        return this.countryService.GetStates(this.commonService.baseApiUrl, countryId).subscribe(function (data) {
            var dataEmp = JSON.stringify(data);
            var empParse = JSON.parse(dataEmp);
            _this.stateList = JSON.parse(empParse["_body"]);
        });
    };
    UsersComponent.prototype.ngAfterViewInit = function () {
        $('#chkAct').change(function () {
            if ($('#chkAct').is(':checked')) {
                $('#divAct').html("Active");
            }
            else {
                $('#divAct').html("InActive");
            }
        });
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-users-cmp',
            template: __webpack_require__("./src/app/users/users.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_commonService__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_6__services_userService__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_7__services_countryService__["a" /* CountryService */], __WEBPACK_IMPORTED_MODULE_8__services_roleService__["a" /* RoleService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_commonService__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_6__services_userService__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_7__services_countryService__["a" /* CountryService */],
            __WEBPACK_IMPORTED_MODULE_8__services_roleService__["a" /* RoleService */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/users/users.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_routing__ = __webpack_require__("./src/app/users/users.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_component__ = __webpack_require__("./src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_module__ = __webpack_require__("./src/app/app.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__users_routing__["a" /* UsersRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__app_module__["b" /* MaterialModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__users_component__["a" /* UsersComponent */]
            ]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ }),

/***/ "./src/app/users/users.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__users_component__ = __webpack_require__("./src/app/users/users.component.ts");

var UsersRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__users_component__["a" /* UsersComponent */]
            }]
    }
];


/***/ })

});
//# sourceMappingURL=users.module.chunk.js.map
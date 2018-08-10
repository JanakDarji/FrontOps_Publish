webpackJsonp(["users.module"],{

/***/ "./src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\n    :focus {\n        outline: none;\n    }\n\n    .radio {\n        -webkit-appearance: button;\n        -moz-appearance: button;\n        appearance: button;\n        border: 4px solid #ccc;\n        border-top-color: #bbb;\n        border-left-color: #bbb;\n        background: #fff;\n        width: 35px;\n        height: 35px;\n        border-radius: 50%;\n        outline: none !important;\n    }\n\n        .radio:checked {\n            border: 10px solid #e91e63;\n        }\n\n    .dropdownview {\n        -webkit-appearance: menulist-button;\n    }\n\n    #btnSync {\n        margin: 10px -17px;\n    }\n\n    .strike-through-text {\n        color: #ff0000;\n    }\n\n    td {\n        position: relative;\n    }\n\n    tr.strikeout td:before {\n        content: \" \";\n        position: absolute;\n        top: 47%;\n        left: 0;\n        border-bottom: 1px solid #ff0000;\n        width: 100%;\n    }\n\n    #td-actions:before {\n        content: \" \";\n        position: absolute;\n        top: 50%;\n        left: 0;\n        border-bottom: none;\n        width: 100%;\n    }\n\n    .switch {\n        position: relative;\n        display: inline-block;\n        width: 60px;\n        height: 34px;\n    }\n\n        .switch input {\n            display: none;\n        }\n\n    .slider {\n        position: absolute;\n        cursor: pointer;\n        top: 11px;\n        left: 0;\n        right: 0;\n        bottom: -12px;\n        background-color: #ccc;\n        -webkit-transition: .4s;\n        transition: .4s;\n    }\n\n        .slider:before {\n            position: absolute;\n            content: \"\";\n            height: 26px;\n            width: 26px;\n            left: 4px;\n            bottom: 4px;\n            background-color: white;\n            -webkit-transition: .4s;\n            transition: .4s;\n        }\n\n    input:checked + .slider {\n        background-color: #4caf50;\n    }\n\n    input:focus + .slider {\n        box-shadow: 0 0 1px darkviolet;\n    }\n\n    input:checked + .slider:before {\n        -webkit-transform: translateX(26px);\n        -ms-transform: translateX(26px);\n        transform: translateX(26px);\n    }\n\n    /* Rounded sliders */\n    .slider.round {\n        border-radius: 34px;\n    }\n\n        .slider.round:before {\n            border-radius: 50%;\n        }\n\n    .wizard-card .info-text {\n        text-align: center;\n        margin: -13px 0 30px !important;\n    }\n\t\n\t.dropdown-menu li > a:hover { background-color:#3b5998; cursor:pointer;}\n\t\n\t.user-alt{position:fixed; bottom:0; right:0; width:450px;}\n</style>\n<!--<title>Aspect Users</title>-->\n<title>Users</title>\n\n<div class=\"main-content\">\n    <!--<button type=\"submit\" class=\"btn btn-rose pull-left\" (click)=\"getSyncEmployee()\" id=\"btnSync\">Sync Users</button>-->\n    <div class=\"col-md-2\">\n        <div class=\"row\">\n            <div class=\"col-lg-10 col-md-6 col-sm-3\">\n                <div class=\"dropdown\">\n                    <button href=\"#pablo\" class=\"dropdown-toggle btn btn-facebook btn-round btn-block\" data-toggle=\"dropdown\">\n                        ADD USER\n                        <b class=\"caret\"></b>\n                    </button>\n                    <ul class=\"dropdown-menu ad-drop dropdown-menu-left\">\n                        <li *ngIf=\"isAddAccess == true\">\n                            <a data-toggle=\"modal\" (click)=\"resetForm()\" data-target=\"#myModal\">Add User</a>\n                        </li>\n                        <li *ngIf=\"isSyncAccess == true\">\n                            <a id=\"synUsers\" #userSyncButton href=\"javascript:void(0);\" (click)=\"addNewSchedulerInQueue()\">Sync Users</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--<button type=\"submit\" class=\"btn btn-primary btn-round pull-left\" (click)=\"getUser()\" id=\"btnSync\">Back</button>-->\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <!--<div class=\"card-header card-header-icon\" data-background-color=\"purple\">\n                        <i class=\"material-icons\">assignment</i>\n                    </div>-->\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">Users</h4>\n                        <div class=\"toolbar\">\n                            <!--        Here you can write extra buttons/actions for the toolbar              -->\n                        </div>\n                        <div class=\"material-datatables table-responsive\">\n                            <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                                <thead>\n                                    <tr>\n                                        <th>{{ dataTable.headerRow[0] }}</th>\n                                        <th>{{ dataTable.headerRow[1] }}</th>\n                                        <th>{{ dataTable.headerRow[2] }}</th>\n                                        <th>{{ dataTable.headerRow[3] }}</th>\n                                        <th>{{ dataTable.headerRow[4] }}</th>\n                                        <!--<th>{{ dataTable.headerRow[4] }}</th>-->\n                                        <th class=\"disabled-sorting text-right\">{{ dataTable.headerRow[5] }}</th>\n                                    </tr>\n                                </thead>\n                                <!--<tfoot>\n                                    <tr>\n                                        <th>{{ dataTable.footerRow[0] }}</th>\n                                        <th>{{ dataTable.footerRow[1] }}</th>\n                                        <th>{{ dataTable.footerRow[2] }}</th>\n                                        <th>{{ dataTable.footerRow[3] }}</th>\n                                        <th>{{ dataTable.footerRow[4] }}</th>\n                                        <th class=\"text-right\">{{ dataTable.footerRow[5] }}</th>\n                                    </tr>\n                                </tfoot>-->\n                                <tbody>\n                                    <!--od-->\n                                    <tr *ngFor=\"let emp of dataTable.dataRows\" [ngClass]=\"emp.IsActive == false ? 'strikeout' : ''\">\n                                        <!--<td><div matTooltip=\"{{emp.OldEmpId}}\" [matTooltipPosition]=\"'above'\" [ngClass]=\"!emp.IsActive && !emp.IsSync ? 'strike-through-text' : ''\">{{emp.ID}}</div></td>-->\n                                        <td>\n                                            <div *ngIf=\"emp.UserStatus == 'New'\">\n                                                {{emp.Firstname}} {{emp.Lastname}}\n                                            </div>\n                                            <div *ngIf=\"emp.UserStatus == 'Updated'\">\n                                                <div [ngClass]=\"emp.IsActive == false ? 'strike-through-text' : ''\" matTooltip=\"{{emp.Firstname}} {{emp.Lastname}}\" [matTooltipPosition]=\"'above'\">\n                                                    {{emp.edFirstname}} {{emp.edLastname}}\n                                                </div>\n                                            </div>\n                                            <div *ngIf=\"emp.UserStatus == 'Exists' || emp.UserStatus == 'System User'\">\n                                                <div [ngClass]=\"emp.IsActive == false ? 'strike-through-text' : ''\">\n                                                    {{emp.edFirstname}} {{emp.edLastname}}\n                                                </div>\n                                            </div>\n                                            <!--<div style=\"color:red;\" *ngIf=\"emp.edLastname\" matTooltip=\"{{emp.edFirstname}} {{emp.edLastname}}\" [matTooltipPosition]=\"'above'\">\n                                                {{emp.Firstname}} {{emp.Lastname}}\n                                            </div>\n                                            <div *ngIf=\"!emp.edLastname\" [ngClass]=\"!emp.IsActive && !emp.IsSync ? 'strike-through-text' : ''\">\n                                                {{emp.Firstname}} {{emp.Lastname}}\n                                            </div>-->\n                                        </td>\n                                        <td>\n                                            <div *ngIf=\"emp.UserStatus == 'New'\">\n                                                {{emp.EmailAddress}}\n                                            </div>\n                                            <div *ngIf=\"emp.UserStatus == 'Updated'\">\n                                                <div [ngClass]=\"emp.IsActive == false ? 'strike-through-text' : ''\">\n                                                    {{emp.edEmailAddress}}\n                                                </div>\n                                            </div>\n                                            <div *ngIf=\"emp.UserStatus == 'Exists' || emp.UserStatus == 'System User'\">\n                                                <div [ngClass]=\"emp.IsActive == false ? 'strike-through-text' : ''\">\n                                                    {{emp.edEmailAddress}}\n                                                </div>\n                                            </div>\n\n                                            <!--<div style=\"color:red;\" *ngIf=\"emp.edEmailAddress\" matTooltip=\"{{emp.edEmailAddress}}\" [matTooltipPosition]=\"'above'\">\n                                                {{emp.EmailAddress}}\n                                            </div>\n                                            <div *ngIf=\"!emp.edEmailAddress\" [ngClass]=\"!emp.IsActive && !emp.IsSync ? 'strike-through-text' : ''\">\n                                                {{emp.EmailAddress}}\n                                            </div>-->\n                                        </td>\n                                        <td>\n                                            <div *ngIf=\"emp.UserStatus == 'New'\">\n                                                {{emp.PhoneNumber}}\n                                            </div>\n                                            <div *ngIf=\"emp.UserStatus == 'Updated'\">\n                                                <div [ngClass]=\"emp.IsActive == false? 'strike-through-text' : ''\">\n                                                    {{emp.edPhoneNumber}}\n                                                </div>\n                                            </div>\n                                            <div *ngIf=\"emp.UserStatus == 'Exists' || emp.UserStatus == 'System User'\">\n                                                <div [ngClass]=\"emp.IsActive == false ? 'strike-through-text' : ''\">\n                                                    {{emp.edPhoneNumber}}\n                                                </div>\n                                            </div>\n                                            <!--<div style=\"color:red;\" *ngIf=\"emp.edPhoneNumber\" matTooltip=\"{{emp.edPhoneNumber}}\" [matTooltipPosition]=\"'above'\">\n                                                {{emp.PhoneNumber}}\n                                            </div>\n                                            <div *ngIf=\"!emp.edPhoneNumber\" [ngClass]=\"!emp.IsActive && !emp.IsSync ? 'strike-through-text' : ''\">\n                                                {{emp.PhoneNumber}}\n                                            </div>-->\n                                        </td>\n                                        <!--<td>\n                                            <div *ngIf=\"emp.UserStatus == 'New'\">\n                                                {{emp.datCommenced}}\n                                            </div>\n                                            <div *ngIf=\"emp.UserStatus == 'Updated'\">\n                                                <div [ngClass]=\"emp.IsActive == false? 'strike-through-text' : ''\">\n                                                    {{emp.edtCommenced}}\n                                                </div>\n                                            </div>\n                                            <div *ngIf=\"emp.UserStatus == 'Exists' || emp.UserStatus == 'System User'\">\n                                                <div [ngClass]=\"emp.IsActive == false ? 'strike-through-text' : ''\">\n                                                    {{emp.edtCommenced}}\n                                                </div>\n                                            </div>\n                                        </td>-->\n                                        <td>{{emp.RoleName}}</td>\n                                        <td>\n                                            <div [ngClass]=\"emp.IsActive == false ? 'strike-through-text' : ''\">\n                                                <div *ngIf=\"emp.IsActive == true; else inactive\">Active</div>\n                                                <ng-template #inactive>InActive</ng-template>\n                                            </div>\n                                        </td>\n                                        <td class=\"text-right\" id=\"td-actions\">\n                                            <span *ngIf=\"emp.UserStatus == 'New'\">\n                                                <button class=\"btn btn-success btn-icon edit btn-xs\">\n                                                    New\n                                                </button>\n                                            </span>\n                                            <span style=\"color:red;\" *ngIf=\"emp.UserStatus == 'Updated'\">\n                                                <button class=\"btn btn-success btn-icon edit btn-xs\" data-toggle=\"modal\" (click)=\"getCurrentUser(emp.EmployeeId, emp.UserStatus)\" data-target=\"#noticeModal\">\n                                                    Updated\n                                                </button>\n                                                <!--<button class=\"btn btn-simple btn-warning btn-icon edit\" data-toggle=\"modal\" matTooltip=\"History\" [matTooltipPosition]=\"'left'\" (click)=\"getCurrentUser(emp.OldEmpId, emp.UserStatus)\" data-target=\"#noticeModal\">\n                                                    <i class=\"material-icons\">history</i>\n                                                </button>-->\n                                            </span>\n                                            <!--<button class=\"btn btn-simple btn-info btn-icon like\" matTooltip=\"Like\" [matTooltipPosition]=\"'left'\">\n                                                <i class=\"material-icons\">favorite</i>\n                                            </button>-->\n                                            <button class=\"btn btn-simple btn-warning btn-icon edit\" *ngIf=\"isEditAccess == true\" data-toggle=\"modal\" (click)=\"getCurrentUser(emp.UserStatus == 'New' ? emp.OldEmpId : emp.EmployeeId, emp.UserStatus)\" data-target=\"#myModal\">\n                                                <i class=\"material-icons\">dvr</i>\n                                            </button>\n                                            <!--<button class=\"btn btn-simple btn-danger btn-icon remove\" matTooltip=\"Remove\" [matTooltipPosition]=\"'left'\">\n                                                <i class=\"material-icons\">close</i>\n                                            </button>-->\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                            <div class=\"col-lg-12 mtb30\">\n                                <div *ngIf=\"lastSyncDate == 'No Sync'\">\n                                    <label class=\"pull-right\">last Sync: {{lastSyncDate }}</label>\n                                </div>\n                                <div *ngIf=\"lastSyncDate != 'No Sync'\">\n                                    <label class=\"pull-right\">last Sync: {{lastSyncDate | date: 'dd/MM/yyyy HH:mm:ss' }}</label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- end content-->\n                </div>\n                <!--  end card  -->\n            </div>\n            <!-- end col-md-12 -->\n        </div>\n        <!-- end row -->\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n        <div class=\"wizard-container\">\n            <div class=\"card wizard-card\" data-color=\"rose\" id=\"wizardProfile\">\n                <form [formGroup]=\"stageUser\">\n                    <!--        You can switch \" data-color=\"purple\" \"  with one of the next bright colors: \"green\", \"orange\", \"red\", \"blue\"       -->\n                    <div class=\"wizard-header\" style=\"padding: 25px 0 7px;\">\n                        <h3 class=\"wizard-title\">\n                            Add/Edit User\n                        </h3>\n                    </div>\n                    <div class=\"wizard-navigation\">\n                        <ul>\n                            <li>\n                                <a href=\"#about\" data-toggle=\"tab\">Name</a>\n                            </li>\n                            <li>\n                                <a href=\"#account\" data-toggle=\"tab\">Info</a>\n                            </li>\n                            <li>\n                                <a href=\"#address\" data-toggle=\"tab\">Role</a>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class=\"tab-content\">\n                        <div class=\"tab-pane\" id=\"about\">\n                            <div class=\"row\">\n                                <h4 class=\"info-text\"> Let's start with the required information</h4>\n                                <div class=\"col-sm-4 col-sm-offset-1\">\n                                    <div class=\"picture-container\">\n                                        <div class=\"picture\">\n                                            <!--<img src=\"../../assets/img/default-avatar.png\" class=\"picture-src\" id=\"wizardPicturePreview\" title=\"\" />-->\n                                            <div *ngIf=\"profilePic\">\n                                                <img src=\"{{profilePic}}\" class=\"picture-src\" id=\"wizardPicturePreview\" title=\"\" />\n                                            </div>\n                                            <div *ngIf=\"!profilePic\">\n                                                <img src=\"../../assets/img/userprofile.png\" class=\"picture-src\" id=\"wizardPicturePreview\" title=\"\" />\n                                                <!--<img src=\"../../assets/img/default-avatar.png\" class=\"picture-src\" id=\"wizardPicturePreview\" title=\"\" />-->\n                                            </div>\n                                            <input type=\"file\" id=\"flProfile\" (change)=\"onFileChange($event)\" formControlName=\"flProfile\" #fileInput>\n                                        </div>\n                                        <h6>Choose Picture</h6>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <div class=\"input-group\">\n                                        <span class=\"input-group-addon\">\n                                            <i class=\"material-icons\">face</i>\n                                        </span>\n                                        <div class=\"form-group label-floating\">\n                                            <label class=\"control-label\">\n                                                First Name\n                                                <small>(required)</small>\n                                            </label>\n                                            <input name=\"firstname\" type=\"text\" class=\"form-control\" formControlName=\"firstname\">\n                                        </div>\n                                    </div>\n                                    <div class=\"input-group\">\n                                        <span class=\"input-group-addon\">\n                                            <i class=\"material-icons\">record_voice_over</i>\n                                        </span>\n                                        <div class=\"form-group label-floating\">\n                                            <label class=\"control-label\">\n                                                Last Name\n                                                <small>(required)</small>\n                                            </label>\n                                            <input name=\"lastname\" type=\"text\" class=\"form-control\" formControlName=\"lastname\">\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-lg-10 col-lg-offset-1\">\n                                    <div class=\"input-group\">\n                                        <span class=\"input-group-addon\">\n                                            <i class=\"material-icons\">email</i>\n                                        </span>\n                                        <div class=\"form-group label-floating\">\n                                            <label class=\"control-label\" id=\"lblEmail\">\n                                                Email\n                                                <small>(required)</small>\n                                            </label>\n                                            <input id=\"txtEmail\" name=\"email\" type=\"email\" (change)=\"userEmailExist($event.target.value)\" class=\"form-control\" formControlName=\"email\">\n                                            <div *ngIf=\"errorMsg\">\n                                                <label class=\"control-label\" style=\"color:red;\">\n                                                    {{ errorMsg }}\n                                                </label>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"tab-pane\" id=\"account\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-5 col-sm-offset-1\">\n                                    <div class=\"form-group label-floating cntEmpty\">\n                                        <label class=\"control-label\">\n                                            Country\n                                            <small>(required)</small>\n                                        </label>\n                                        <select name=\"country\" class=\"form-control dropdownview\" formControlName=\"country\" (change)=\"getStatesByCountry($event.target.value)\">\n                                            <option disabled=\"\" selected=\"\">Select Country</option>\n                                            <option *ngFor=\"let country of countryList\" value={{country.ID}}>\n                                                {{country.Title}}\n                                            </option>\n                                            <!--<option value=\"1\">Aspect Toowoomba</option>\n                                            <option value=\"2\">Toowoomba Bench Tops</option>\n                                            <option value=\"3\">Bradbec</option>-->\n                                        </select>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-5\">\n                                    <div class=\"input-group\">\n                                        <div class=\"form-group label-floating cntEmpty\">\n                                            <label class=\"control-label\">\n                                                State\n                                                <small>(required)</small>\n                                            </label>\n                                            <select name=\"state\" class=\"form-control dropdownview\" formControlName=\"state\" style=\"width:220px;\">\n                                                <option disabled=\"\" selected=\"\">Select State</option>\n                                                <option *ngFor=\"let state of stateList\" value={{state.ID}}>\n                                                    {{state.Title}}\n                                                </option>\n                                                <!--<option value=\"1\">Aspect Toowoomba</option>\n                                                <option value=\"2\">Toowoomba Bench Tops</option>\n                                                <option value=\"3\">Bradbec</option>-->\n                                            </select>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"col-sm-5 col-sm-offset-1\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\">\n                                            Suburb\n                                            <small>(required)</small>\n                                        </label>\n                                        <input type=\"text\" class=\"form-control\" formControlName=\"town\" name=\"town\">\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-5\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\">\n                                            PhoneNumber\n                                            <small>(required)</small>\n                                        </label>\n                                        <input id=\"txtPhoneNumber\" type=\"text\" class=\"form-control number-only\" formControlName=\"phoneNumber\" name=\"phoneNumber\" maxlength=\"15\">\n                                    </div>\n                                </div>\n\n                                <div class=\"col-sm-3 col-sm-offset-1\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\">\n                                            Password\n                                            <small>(required)</small>\n                                        </label>\n                                        <!--<i toggle=\"#password\" class=\"fa fa-fw fa-eye reveal pull-right\" style=\"margin: -13px 6px;\"></i>-->\n                                        <input type=\"password\" class=\"form-control pwd\" formControlName=\"password\" name=\"password\" id=\"password\">\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-4\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\">\n                                            Confirm Password\n                                            <small>(required)</small>\n                                        </label>\n                                        <!--<i toggle=\"#cpassword\" class=\"fa fa-fw fa-eye creveal pull-right\" style=\"margin: -13px 6px;\"></i>-->\n                                        <input type=\"password\" class=\"form-control cpwd\" formControlName=\"cpassword\" name=\"cpassword\">\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-3\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\">\n                                            Division\n                                            <small>(required)</small>\n                                        </label>\n                                        <select name=\"company\" class=\"form-control dropdownview\" formControlName=\"division\" id=\"divsn\">\n                                            <option disabled=\"\" selected=\"\"></option>\n                                            <option *ngFor=\"let division of divisionList\" value={{division.ID}}>\r\n                                                {{division.Name}}\r\n                                            </option>\n                                        </select>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-5 col-sm-offset-1\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\">\n                                            Street\n                                            <small>(required)</small>\n                                        </label>\n                                        <input type=\"text\" class=\"form-control\" formControlName=\"street\" name=\"street\">\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-5\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\">\n                                            PostCode\n                                            <small>(required)</small>\n                                        </label>\n                                        <input type=\"text\" class=\"form-control number-only\" formControlName=\"postCode\" name=\"postCode\" maxlength=\"4\" minlength=\"4\">\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"tab-pane\" id=\"address\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-12\">\n                                    <div class=\"row\">\n                                        <p class=\"control-label text-center\" style=\"color:red;font-size:14px;\" id=\"lblRole\">\r\n                                        </p>\n                                        <div *ngFor=\"let role of userRoleList;let isOdd = odd;\">\n                                            <div *ngIf=\"isOdd==true;else elseBlock\">\n                                                <div class=\"col-lg-6\">\n                                                    <div class=\"col-md-1\"></div>\n                                                    <div class=\"col-lg-1\">\n                                                        <input type=\"radio\" name=\"role\" [id]=\"role.ID\" [value]=\"role.ID\" formControlName=\"role\" class=\"radio\">\n                                                    </div>\n                                                    <div class=\"col-lg-8\" style=\"margin-top:12px;margin-left: 14px;\">\n                                                        <span style=\"color:black;font-size:14px;\">{{ role.Title }}</span>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <ng-template #elseBlock>\n                                                <div class=\"col-lg-6\">\n                                                    <div class=\"col-md-1\"></div>\n                                                    <div class=\"col-lg-1\">\n                                                        <input type=\"radio\" name=\"role\" [id]=\"role.ID\" [value]=\"role.ID\" formControlName=\"role\" class=\"radio\">\n                                                    </div>\n                                                    <div class=\"col-lg-8\" style=\"margin-top:12px;margin-left: 14px;\">\n                                                        <span style=\"color:black;font-size:14px;\">{{ role.Title }}</span>\n                                                    </div>\n                                                </div>\n                                            </ng-template>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!--<div class=\"col-lg-10 col-lg-offset-1\">\n                                    <div class=\"col-sm-4\">\n                                        <div class=\"choice\" data-toggle=\"wizard-checkbox\">\n                                            <input type=\"checkbox\" name=\"jobb\" value=\"Design\">\n                                            <div class=\"icon\">\n                                                <i class=\"fa fa-pencil\"></i>\n                                            </div>\n                                            <h6>Design</h6>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-4\">\n                                        <div class=\"choice\" data-toggle=\"wizard-checkbox\">\n                                            <input type=\"checkbox\" name=\"jobb\" value=\"Code\">\n                                            <div class=\"icon\">\n                                                <i class=\"fa fa-terminal\"></i>\n                                            </div>\n                                            <h6>Code</h6>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-4\">\n                                        <div class=\"choice\" data-toggle=\"wizard-checkbox\">\n                                            <input type=\"checkbox\" name=\"jobb\" value=\"Develop\">\n                                            <div class=\"icon\">\n                                                <i class=\"fa fa-laptop\"></i>\n                                            </div>\n                                            <h6>Develop</h6>\n                                        </div>\n                                    </div>\n                                </div>-->\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"wizard-footer\">\n                        <div class=\"pull-right\">\n                            <input type='button' class='btn btn-next btn-fill btn-rose btn-wd' name='next' value='Next' />\n                            <input type='button' class='btn btn-finish btn-fill btn-success btn-wd' (click)=\"createUser()\" [disabled]=\"isUserCreted\" name='finish' value='Finish' />\n                        </div>\n                        <div class=\"pull-left\">\n                            <label class=\"switch\">\n                                <input type=\"checkbox\" formControlName=\"isActive\" id=\"chkAct\">\n                                <span class=\"slider round\"></span>\n                            </label>\n                            <input type='button' class='btn btn-previous btn-fill btn-default btn-wd' name='previous' value='Previous' />\n                            <span class=\"switch-title\" style=\"font-size:18px;letter-spacing:1px;\">User is <span id=\"divAct\">{{ activeUser }}</span></span>\n\n                            <!--<label [(ngModel)]=\"{{activeUser}}\" ></label>\n                                <input type='text'\n                                      [(ngModel)]=\"{{activeUser}}\" />-->\n                            <br>\n\n\n                            <br>\n                        </div><br />\n                        <div class=\"clearfix\"></div>\n                    </div>\n\n\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<!-- notice modal -->\n<div class=\"modal fade\" id=\"noticeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <form>\n        <div class=\"modal-dialog modal-notice\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><i class=\"material-icons\">clear</i></button>\n                    <h5 class=\"modal-title\" id=\"myModalLabel\">History</h5>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"instruction\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <strong>Manager softwares record</strong>\n                                <p>Firstname : {{mapUserList.Firstname}}</p>\n                                <p>Lastname: {{mapUserList.Lastname}}</p>\n                                <p>EmailAddress: {{mapUserList.EmailAddress}}</p>\n                                <p>PhoneNumber: {{mapUserList.PhoneNumber}}</p>\n                                <p>Address: {{mapUserList.AddressLine}}</p>\n                                <p>State: {{mapUserList.State}}</p>\n                                <p>Country: {{mapUserList.Country}}</p>\n                                <p>Street: {{mapUserList.Street}}</p>\n                                <p>Suburb: {{mapUserList.Town}}</p>\n                                <p>PostCode: {{mapUserList.PostCode}}</p>\n                                <p>DivisionId: {{mapUserList.DivisionId}}</p>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <strong>Frontops record</strong>\n                                <p>Firstname : {{mapUserList.edFirstname}}</p>\n                                <p>Lastname: {{mapUserList.edLastname}}</p>\n                                <p>EmailAddress: {{mapUserList.edEmailAddress}}</p>\n                                <p>PhoneNumber: {{mapUserList.edPhoneNumber}}</p>\n                                <p>Address: {{mapUserList.edAddressLine}}</p>\n                                <p>State: {{mapUserList.edState}}</p>\n                                <p>Country: {{mapUserList.edCountry}}</p>\n                                <p>Street: {{mapUserList.edStreet}}</p>\n                                <p>Suburb: {{mapUserList.edTown}}</p>\n                                <p>PostCode: {{mapUserList.edPostCode}}</p>\n                                <p>DivisionId: {{mapUserList.edDivisionId}}</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>\n<!-- end notice modal -->\n<div class=\"alert alert-info alert-with-icon user-alt\" data-notify=\"container\" id=\"syncStart\">\r\n    <i class=\"material-icons\" data-notify=\"icon\">notifications</i>\r\n    <button type=\"button\" aria-hidden=\"true\" class=\"close\">\r\n        <i class=\"material-icons\" (click)=\"closeStart();\">close</i>\r\n    </button>\r\n    <span data-notify=\"message\">User Sync Currently In Progress - Please Wait.</span>\r\n</div>\r\n\r\n<div class=\"alert alert-success alert-with-icon user-alt\" data-notify=\"container\" id=\"syncCopm\">\r\n    <i class=\"material-icons\" data-notify=\"icon\">notifications</i>\r\n    <button type=\"button\" aria-hidden=\"true\" class=\"close\">\r\n        <i class=\"material-icons\" (click)=\"closeEnd();\">close</i>\r\n    </button>\r\n    <span data-notify=\"message\">User sync Completed There Are {{noOfUser}} new User Added.</span>\r\n</div>\r\n\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_schedulerService__ = __webpack_require__("./src/app/services/schedulerService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_divisionService__ = __webpack_require__("./src/app/services/divisionService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_simple_timer__ = __webpack_require__("./node_modules/ng2-simple-timer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_simple_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_simple_timer__);
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
    function UsersComponent(http, router, commonService, userService, countryService, roleService, schedulerService, divisionService, timer) {
        this.http = http;
        this.router = router;
        this.commonService = commonService;
        this.userService = userService;
        this.countryService = countryService;
        this.roleService = roleService;
        this.schedulerService = schedulerService;
        this.divisionService = divisionService;
        this.timer = timer;
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
        __WEBPACK_IMPORTED_MODULE_11_sweetalert2___default()({
            type: 'success',
            //title: 'Good job!',
            text: text,
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-success'
        }).catch(__WEBPACK_IMPORTED_MODULE_11_sweetalert2___default.a.noop);
    };
    UsersComponent.prototype.showSwalError = function (text) {
        __WEBPACK_IMPORTED_MODULE_11_sweetalert2___default()({
            //title: 'Cancelled',
            text: text,
            type: 'error',
            confirmButtonClass: 'btn btn-danger',
            buttonsStyling: false
        }).catch(__WEBPACK_IMPORTED_MODULE_11_sweetalert2___default.a.noop);
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
            this.timer.newTimer('1sec', 30);
            if (this.isViewAccess == false) {
                this.router.navigate(['dashboard']);
            }
            $('.loader').show();
            $("#lblEmail").html('Email <small>(required) </small>');
            this.getCountries();
            this.getDivision();
            this.getUsersRoles();
            this.getAllEmployee();
            this.dataTable = {
                headerRow: ['User', 'Email Address', 'Phone Number', 'Role', 'Status', 'Actions'],
                footerRow: ['User', 'Email Address', 'Phone Number', 'Role', 'Status', 'Actions'],
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
            var $validator_1 = $('.wizard-card form').validate({
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
                    role: {
                        required: true
                    }
                },
                errorPlacement: function (error, element) {
                    $(element).parent('div').addClass('has-error');
                }
            });
            var self = this;
            // Wizard Initialization
            $('.wizard-card').bootstrapWizard({
                'tabClass': 'nav nav-pills',
                'nextSelector': '.btn-next',
                'previousSelector': '.btn-previous',
                onNext: function (tab, navigation, index) {
                    if (index == 1) {
                        //var aa = self.userEmailExist($('#txtEmail').val());
                        var $valid = $('.wizard-card form').valid();
                        if (!$valid) {
                            $validator_1.focusInvalid();
                            return false;
                        }
                    }
                    else {
                        var $valid = $('.wizard-card form').valid();
                        if (!$valid) {
                            $validator_1.focusInvalid();
                            return false;
                        }
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
            $('#syncStart').hide();
            $('#syncCopm').hide();
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
        }
        else {
            this.router.navigate(['pages/login']);
        }
    };
    UsersComponent.prototype.GetSchedulerDoneStatus = function () {
        var _this = this;
        $('.loader').show();
        $('#yncStart').show();
        this.schedulerService.GetSchedulerDoneStatus(this.commonService.baseApiUrl, "2").subscribe(function (data) {
            var dataScheduler = JSON.stringify(data);
            var schedulerParse = JSON.parse(dataScheduler);
            var schedulerList = JSON.parse(schedulerParse["_body"]);
            //localStorage.removeItem("JobList");
            if (schedulerList == true) {
                $('.loader').hide();
                _this.getSyncEmployee();
                _this.timerStart = "stop";
                $('#syncStart').hide();
                $('#syncCopm').show();
                _this.userSyncButton.nativeElement.disabled = false;
            }
        });
    };
    UsersComponent.prototype.addNewSchedulerInQueue = function () {
        var _this = this;
        $('.loader').show();
        this.schedulerService.AddNewSchedulerInQueue(this.commonService.baseApiUrl, "1").subscribe(function (data) {
            var dataScheduler = JSON.stringify(data);
            var schedulerParse = JSON.parse(dataScheduler);
            var schedulerList = JSON.parse(schedulerParse["_body"]);
            //localStorage.removeItem("JobList");
            if (schedulerList == true) {
                _this.userSyncButton.nativeElement.disabled = true;
                $('.loader').hide();
                _this.timerStart = "start";
                _this.isJobsAndWorkOrdersDone();
            }
        });
    };
    UsersComponent.prototype.isJobsAndWorkOrdersDone = function () {
        var _this = this;
        if (this.timerStart == "start") {
            this.timerStart = this.timer.subscribe('1sec', function () { return _this.GetSchedulerDoneStatus(); });
        }
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
        this.errorMsg = null;
        $("#lblEmail").html('');
        $("#lblEmail").html('Email <small>(required) </small>');
        $('#lblRole').html('');
    };
    UsersComponent.prototype.createUser = function () {
        var _this = this;
        var $validator = $('.wizard-card form').validate({
            rules: {
                role: {
                    required: true
                }
            }
        });
        var $valid = $('.wizard-card form').valid();
        if (!$valid) {
            $('#lblRole').html('Role <small>(required) </small>');
            return false;
        }
        $('#lblRole').html('');
        this.isUserCreted = true;
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
            if (eplDetail == true) {
                _this.stageUser.reset();
                _this.getAllEmployee();
                $('#myModal').modal('toggle');
                if (localStorage.getItem("EmployeeId") != null) {
                    _this.showSwal("User has been updated");
                }
                else {
                    _this.showSwal("User has been created");
                }
                $('.loader').hide();
                _this.isUserCreted = false;
            }
            else {
                _this.stageUser.reset();
                $('#myModal').modal('toggle');
                _this.showSwalError("Email ID is already exist or there is some error while user creation/update!!");
                _this.isUserCreted = false;
                $('.loader').hide();
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
                    if (elems != null) {
                        [].forEach.call(elems, function (el) {
                            el.classList.remove("is-empty");
                        });
                    }
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
    UsersComponent.prototype.userEmailExist = function (email) {
        var _this = this;
        //var email = event.target.value;
        var empID = localStorage.getItem("EmployeeId");
        this.userService.CheckUserEmailExist(this.commonService.baseApiUrl, email.trim(), empID).subscribe(function (data) {
            var dataEmp = JSON.stringify(data);
            var empParse = JSON.parse(dataEmp);
            var empSts = JSON.parse(empParse["_body"]);
            _this.errorMsg = null;
            $("#lblEmail").html('');
            if (empSts == false) {
                _this.errorMsg = "Email (already exists)";
            }
            else {
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
                _this.userService.GetLastSyncDetail(_this.commonService.baseApiUrl, "1").subscribe(function (data) {
                    var dataSync = JSON.stringify(data);
                    var syncParse = JSON.parse(dataSync);
                    var syncList = JSON.parse(syncParse["_body"]);
                    if (syncList != null) {
                        _this.lastSyncDate = syncList.LastSyncDate;
                    }
                    else {
                        _this.lastSyncDate = "No Sync";
                    }
                });
                _this.noOfUser = empList.length;
                localStorage.setItem("StagEmployeeList", JSON.stringify(empList));
                _this.stageEmployeeList = empList;
                _this.dataTable = {
                    headerRow: ['User', 'Email Address', 'Phone Number', 'Role', 'Status', 'Actions'],
                    footerRow: ['User', 'Email Address', 'Phone Number', 'Role', 'Status', 'Actions'],
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
    UsersComponent.prototype.getDivision = function () {
        var _this = this;
        return this.divisionService.GetAllDivisions(this.commonService.baseApiUrl).subscribe(function (data) {
            var dataEmp = JSON.stringify(data);
            var empParse = JSON.parse(dataEmp);
            _this.divisionList = JSON.parse(empParse["_body"]);
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
    UsersComponent.prototype.closeStart = function () {
        $('#syncStart').hide();
    };
    UsersComponent.prototype.closeEnd = function () {
        $('#syncCopm').hide();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('userSyncButton'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], UsersComponent.prototype, "userSyncButton", void 0);
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-users-cmp',
            template: __webpack_require__("./src/app/users/users.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_commonService__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_6__services_userService__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_7__services_countryService__["a" /* CountryService */], __WEBPACK_IMPORTED_MODULE_8__services_roleService__["a" /* RoleService */], __WEBPACK_IMPORTED_MODULE_9__services_schedulerService__["a" /* SchedulerService */], __WEBPACK_IMPORTED_MODULE_12_ng2_simple_timer__["SimpleTimer"], __WEBPACK_IMPORTED_MODULE_10__services_divisionService__["a" /* DivisionService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_commonService__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_6__services_userService__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_7__services_countryService__["a" /* CountryService */],
            __WEBPACK_IMPORTED_MODULE_8__services_roleService__["a" /* RoleService */],
            __WEBPACK_IMPORTED_MODULE_9__services_schedulerService__["a" /* SchedulerService */],
            __WEBPACK_IMPORTED_MODULE_10__services_divisionService__["a" /* DivisionService */],
            __WEBPACK_IMPORTED_MODULE_12_ng2_simple_timer__["SimpleTimer"]])
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
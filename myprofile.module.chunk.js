webpackJsonp(["myprofile.module"],{

/***/ "./src/app/myprofile/myprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\r\n    .dropdownview {\r\n        -webkit-appearance: menulist-button;\r\n    }\r\n</style>\r\n<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <form [formGroup]=\"myProfilePage\">\r\n                <div class=\"col-md-8\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\r\n                            <i class=\"material-icons\">perm_identity</i>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <h4 class=\"card-title\">\r\n                                Edit Profile -\r\n                                <small class=\"category\">Complete your profile</small>\r\n                            </h4>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-3\">\r\n                                    <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(myProfilePage, 'firstname')\">\r\n                                        <label class=\"control-label\">Fist Name</label>\r\n                                        <input type=\"text\" class=\"form-control\" formControlName=\"firstname\">\r\n                                        <app-field-error-display [displayError]=\"isFieldValid(myProfilePage, 'firstname')\" errorMsg=\"Firstname is required.\">\r\n                                        </app-field-error-display>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(myProfilePage, 'lastname')\">\r\n                                        <label class=\"control-label\">Last Name</label>\r\n                                        <input type=\"text\" class=\"form-control\" formControlName=\"lastname\">\r\n                                        <app-field-error-display [displayError]=\"isFieldValid(myProfilePage, 'lastname')\" errorMsg=\"Lastname is required.\">\r\n                                        </app-field-error-display>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-5\">\r\n                                    <div class=\"form-group label-floating uemail\" [ngClass]=\"displayFieldCss(myProfilePage, 'email')\">\r\n                                        <label class=\"control-label\" id=\"lblEmail\">Email address</label>\r\n                                        <input type=\"email\" class=\"form-control\" formControlName=\"email\" (change)=\"userEmailExist($event)\" pattern=\"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$\">\r\n                                        <div *ngIf=\"errorMsg\">\r\n                                            <label class=\"control-label\" style=\"color:red;\">\r\n                                                {{ errorMsg }}\r\n                                            </label>\r\n                                        </div>\r\n                                        <app-field-error-display [displayError]=\"isFieldValid(myProfilePage, 'email')\" errorMsg=\"Email is required and format should be name@companyname.com.au\">\r\n                                        </app-field-error-display>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-8\">\r\n                                    <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(myProfilePage, 'town')\">\r\n                                        <label class=\"control-label\">Suburb</label>\r\n                                        <input type=\"text\" class=\"form-control\" formControlName=\"town\">\r\n                                        <app-field-error-display [displayError]=\"isFieldValid(myProfilePage, 'town')\" errorMsg=\"Suburb is required.\">\r\n                                        </app-field-error-display>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(myProfilePage, 'postCode')\">\r\n                                        <label class=\"control-label\">Postal Code</label>\r\n                                        <input type=\"text\" class=\"form-control number-only\" formControlName=\"postCode\" maxlength=\"4\" minlength=\"4\">\r\n                                        <app-field-error-display [displayError]=\"isFieldValid(myProfilePage, 'postCode')\" errorMsg=\"PostCode is required.\">\r\n                                        </app-field-error-display>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(myProfilePage, 'phoneNumber')\">\r\n                                        <label class=\"control-label\">PhoneNumber</label>\r\n                                        <input type=\"text\" class=\"form-control number-only\" formControlName=\"phoneNumber\">\r\n                                        <app-field-error-display [displayError]=\"isFieldValid(myProfilePage, 'phoneNumber')\" errorMsg=\"PhoneNumber is required.\">\r\n                                        </app-field-error-display>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(myProfilePage, 'password')\">\r\n                                        <label class=\"control-label\">Password</label>\r\n                                        <input type=\"password\" class=\"form-control\" formControlName=\"password\">\r\n                                        <app-field-error-display [displayError]=\"isFieldValid(myProfilePage, 'password')\" errorMsg=\"Password is required.\">\r\n                                        </app-field-error-display>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(myProfilePage, 'street')\">\r\n                                        <label class=\"control-label\">Street</label>\r\n                                        <input type=\"text\" class=\"form-control\" formControlName=\"street\">\r\n                                        <app-field-error-display [displayError]=\"isFieldValid(myProfilePage, 'street')\" errorMsg=\"Street is required.\">\r\n                                        </app-field-error-display>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"form-group label-floating cntEmpty\" [ngClass]=\"displayFieldCss(myProfilePage, 'country')\">\r\n                                        <label class=\"control-label\">Country</label>\r\n                                        <select name=\"country\" class=\"form-control dropdownview\" formControlName=\"country\" (change)=\"getStatesByCountry($event.target.value)\">\r\n                                            <option disabled=\"\" selected=\"\">Select Country</option>\r\n                                            <option *ngFor=\"let country of countryList\" value={{country.ID}}>\r\n                                                {{country.Title}}\r\n                                            </option>\r\n                                        </select>\r\n                                        <app-field-error-display [displayError]=\"isFieldValid(myProfilePage, 'country')\" errorMsg=\"Country is required.\">\r\n                                        </app-field-error-display>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"form-group label-floating cntEmpty\" [ngClass]=\"displayFieldCss(myProfilePage, 'state')\">\r\n                                        <label class=\"control-label\">State</label>\r\n                                        <select name=\"state\" class=\"form-control dropdownview\" formControlName=\"state\" style=\"width:220px;\">\r\n                                            <option disabled=\"\" selected=\"\">Select State</option>\r\n                                            <option *ngFor=\"let state of stateList\" value={{state.ID}}>\r\n                                                {{state.Title}}\r\n                                            </option>\r\n                                        </select>\r\n                                        <app-field-error-display [displayError]=\"isFieldValid(myProfilePage, 'state')\" errorMsg=\"State is required.\">\r\n                                        </app-field-error-display>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">Division</label>\r\n                                        <label class=\"form-control\" id=\"division\"></label>\r\n                                        <!--<select name=\"company\" class=\"form-control dropdownview\" formControlName=\"division\" id=\"divsn\">\r\n                                            <option disabled=\"\" selected=\"\"></option>\r\n                                            <option value=\"1\">Aspect Toowoomba</option>\r\n                                            <option value=\"2\">Toowoomba Bench Tops</option>\r\n                                            <option value=\"3\">Bradbec</option>\r\n                                        </select>\r\n                                        <app-field-error-display [displayError]=\"isFieldValid(myProfilePage, 'division')\" errorMsg=\"Division is required.\">\r\n                                        </app-field-error-display>-->\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <!--<div class=\"row\">\r\n                                <div class=\"col-md-12\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>About Me</label>\r\n                                        <div class=\"form-group label-floating\">\r\n                                            <textarea class=\"form-control\" rows=\"5\"></textarea>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>-->\r\n                            <button type=\"submit\" class=\"btn btn-rose pull-right\" (click)=\"createUser()\">Update Profile</button>\r\n                            <div class=\"clearfix\"></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"card card-profile\">\r\n                        <div class=\"card-avatar\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-12\">\r\n                                    <div class=\"picture-container\">\r\n                                        <div class=\"picture\">\r\n                                            <label for=\"wizard-picture\">\r\n                                                <div *ngIf=\"profilePic\">\r\n                                                    <img src=\"{{profilePic}}\" class=\"picture-src\" id=\"wizardPicturePreview\" title=\"\" />\r\n                                                </div>\r\n                                                <div *ngIf=\"!profilePic\">\r\n                                                    <img src=\"../../assets/img/default-avatar.png\" class=\"picture-src\" id=\"wizardPicturePreview\" title=\"\" />\r\n                                                </div>\r\n                                            </label>\r\n                                            <input type=\"file\" id=\"wizard-picture\" (change)=\"onFileChange($event)\" style=\"display:none\" />\r\n                                        </div>\r\n                                        <h6>Choose Picture</h6>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <h6 class=\"category text-gray\">{{userProfile.RoleName}}</h6>\r\n                            <h4 class=\"card-title\">{{userProfile.Firstname}} {{userProfile.Lastname}}</h4>\r\n                            <!--<p class=\"description\">\r\n                                Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...\r\n                            </p>-->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/myprofile/myprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_commonService__ = __webpack_require__("./src/app/services/commonService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_userService__ = __webpack_require__("./src/app/services/userService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_countryService__ = __webpack_require__("./src/app/services/countryService.ts");
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








var MyProfileComponent = /** @class */ (function () {
    function MyProfileComponent(http, router, commonService, userService, countryService, formBuilder) {
        this.http = http;
        this.router = router;
        this.commonService = commonService;
        this.userService = userService;
        this.countryService = countryService;
        this.formBuilder = formBuilder;
        this.myProfilePage = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            firstname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            lastname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            state: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            country: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            phoneNumber: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            //division: new FormControl(),
            postCode: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            town: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            street: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]()
        });
        this.errorMsg = null;
        this.isEmailExist = true;
    }
    MyProfileComponent.prototype.isFieldValid = function (form, field) {
        return !form.get(field).valid && form.get(field).touched;
    };
    MyProfileComponent.prototype.displayFieldCss = function (form, field) {
        return {
            'has-error': this.isFieldValid(form, field),
            'has-feedback': this.isFieldValid(form, field)
        };
    };
    MyProfileComponent.prototype.showSwal = function (text) {
        __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()({
            type: 'success',
            //title: 'Good job!',
            text: text,
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-success'
        }).catch(__WEBPACK_IMPORTED_MODULE_7_sweetalert2___default.a.noop);
    };
    MyProfileComponent.prototype.ngOnInit = function () {
        if (JSON.parse(sessionStorage.getItem('LogEmployee')) != null) {
            $('.number-only').keypress(function (e) {
                var keyCode = e.which ? e.which : e.keyCode;
                var ret = ((keyCode >= 48 && keyCode <= 57));
                return ret;
            });
            this.myProfilePage = this.formBuilder.group({
                firstname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                lastname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                state: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                country: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                email: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$")]],
                password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                town: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                phoneNumber: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                //division: ['', Validators.required],
                postCode: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                street: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
            });
            $('.loader').show();
            this.setProfileData();
        }
        else {
            this.router.navigate(['pages/login']);
        }
    };
    MyProfileComponent.prototype.setProfileData = function () {
        if (JSON.parse(sessionStorage.getItem('LogEmployee')) != null) {
            localStorage.removeItem("EmployeeId");
            localStorage.removeItem("OldEmpId");
            this.userProfile = JSON.parse(sessionStorage.getItem('LogEmployee'));
            this.getCountries();
            this.getStatesByCountry(this.userProfile.Country != null ? this.userProfile.Country : "1");
            localStorage.setItem("EmployeeId", this.userProfile.ID);
            localStorage.setItem("OldEmpId", this.userProfile.OldEmpId);
            localStorage.setItem("RoleId", this.userProfile.RoleId);
            this.myProfilePage.controls["firstname"].setValue(this.userProfile.Firstname);
            this.myProfilePage.controls["lastname"].setValue(this.userProfile.Lastname);
            this.myProfilePage.controls["email"].setValue(this.userProfile.EmailAddress);
            this.myProfilePage.controls["country"].setValue(this.userProfile.CountryID);
            this.myProfilePage.controls["state"].setValue(this.userProfile.StateID != null ? this.userProfile.StateID : "5");
            this.myProfilePage.controls["town"].setValue(this.userProfile.Town);
            this.myProfilePage.controls["postCode"].setValue(this.userProfile.PostCode);
            this.myProfilePage.controls["phoneNumber"].setValue(this.userProfile.PhoneNumber);
            this.myProfilePage.controls["password"].setValue(this.userProfile.Password);
            this.myProfilePage.controls["street"].setValue(this.userProfile.Street);
            //this.myProfilePage.controls["division"].setValue(this.userProfile.DivisionId);
            document.getElementById('division').innerHTML = this.userProfile.DivisionId == 1 ? "All" : this.userProfile.DivisionId == 2 ? "Aspect Toowoomba" : this.userProfile.DivisionId == 3 ? "Toowoomba Bench Tops" : "Bradbec";
            this.profilePic = this.userProfile.ProfileImage;
            this.userStatus = this.userProfile.IsActive;
            $(document).ready(function () {
                $(".cntEmpty").removeClass("is-empty");
            });
            $('.loader').hide();
        }
        else {
            localStorage.removeItem("EmployeeId");
            localStorage.removeItem("OldEmpId");
            this.router.navigate(['pages/login']);
        }
    };
    MyProfileComponent.prototype.getCountries = function () {
        var _this = this;
        return this.countryService.GetCountries(this.commonService.baseApiUrl).subscribe(function (data) {
            var dataEmp = JSON.stringify(data);
            var empParse = JSON.parse(dataEmp);
            _this.countryList = JSON.parse(empParse["_body"]);
        });
    };
    MyProfileComponent.prototype.userEmailExist = function (event) {
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
                $(".uemail").addClass("has-error");
            }
            else {
                _this.errorMsg = null;
                $("#lblEmail").html('Email address');
            }
            _this.isEmailExist = empSts;
        });
    };
    MyProfileComponent.prototype.getStatesByCountry = function (countryId) {
        var _this = this;
        return this.countryService.GetStates(this.commonService.baseApiUrl, countryId).subscribe(function (data) {
            var dataEmp = JSON.stringify(data);
            var empParse = JSON.parse(dataEmp);
            _this.stateList = JSON.parse(empParse["_body"]);
        });
    };
    MyProfileComponent.prototype.createUser = function () {
        var _this = this;
        $('.loader').show();
        if (this.myProfilePage.valid && this.isEmailExist) {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
            var usrImg = null;
            if (this.profilePic != null) {
                usrImg = this.profilePic.split(",");
            }
            var contact = {
                Firstname: this.myProfilePage.controls["firstname"].value,
                Lastname: this.myProfilePage.controls["lastname"].value,
                EmailAddress: this.myProfilePage.controls["email"].value,
                State: this.myProfilePage.controls["state"].value,
                Country: this.myProfilePage.controls["country"].value,
                StateID: this.myProfilePage.controls["state"].value,
                CountryID: this.myProfilePage.controls["country"].value,
                Town: this.myProfilePage.controls["town"].value,
                PhoneNumber: this.myProfilePage.controls["phoneNumber"].value,
                PostCode: this.myProfilePage.controls["postCode"].value,
                Street: this.myProfilePage.controls["street"].value,
                DivisionId: this.userProfile.DivisionId,
                Password: this.myProfilePage.controls["password"].value,
                ID: localStorage.getItem("EmployeeId"),
                OldEmpId: localStorage.getItem("OldEmpId"),
                RoleId: localStorage.getItem("RoleId"),
                IsActive: this.userStatus,
                ProfileImage: usrImg != null ? usrImg[1] : ""
            };
            this.userService.CreateUser(this.commonService.baseApiUrl, contact).subscribe(function (data) {
                var dataEmp = JSON.stringify(data);
                var empParse = JSON.parse(dataEmp);
                var eplDetail = JSON.parse(empParse["_body"]);
                $('.loader').hide();
                if (eplDetail == true) {
                    _this.myProfilePage.reset();
                    _this.getUserById(localStorage.getItem("EmployeeId"));
                    $('#myModal').modal('toggle');
                    _this.showSwal("User updated successfully!");
                }
                else {
                    _this.myProfilePage.reset();
                    $('#myModal').modal('toggle');
                    _this.showSwal("There is some error while user creation/update!!");
                }
            }, function (error) {
                console.log(error.json());
            });
        }
        else {
            $('.loader').hide();
            this.validateAllFormFields(this.myProfilePage);
        }
    };
    MyProfileComponent.prototype.validateAllFormFields = function (formGroup) {
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
    MyProfileComponent.prototype.onFileChange = function (event) {
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
    MyProfileComponent.prototype.getUserById = function (Id) {
        var _this = this;
        this.userService.GetUserById(this.commonService.baseApiUrl, Id).subscribe(function (data) {
            var dataEmp = JSON.stringify(data);
            var empParse = JSON.parse(dataEmp);
            var eplDetail = JSON.parse(empParse["_body"]);
            if (empParse["_body"] != 'null') {
                sessionStorage.setItem('LogEmployee', JSON.stringify(eplDetail));
                _this.setProfileData();
            }
        });
    };
    MyProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-myprofile-cmp',
            template: __webpack_require__("./src/app/myprofile/myprofile.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_commonService__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_5__services_userService__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_6__services_countryService__["a" /* CountryService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_commonService__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_5__services_userService__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_6__services_countryService__["a" /* CountryService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], MyProfileComponent);
    return MyProfileComponent;
}());



/***/ }),

/***/ "./src/app/myprofile/myprofile.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileModule", function() { return MyProfileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__myprofile_routing__ = __webpack_require__("./src/app/myprofile/myprofile.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__myprofile_component__ = __webpack_require__("./src/app/myprofile/myprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__field_error_display_field_error_display_module__ = __webpack_require__("./src/app/field-error-display/field-error-display.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var MyProfileModule = /** @class */ (function () {
    function MyProfileModule() {
    }
    MyProfileModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__myprofile_routing__["a" /* MyProfileRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__app_module__["b" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_7__field_error_display_field_error_display_module__["a" /* FieldErrorDisplayModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__myprofile_component__["a" /* MyProfileComponent */]
            ]
        })
    ], MyProfileModule);
    return MyProfileModule;
}());



/***/ }),

/***/ "./src/app/myprofile/myprofile.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfileRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__myprofile_component__ = __webpack_require__("./src/app/myprofile/myprofile.component.ts");

var MyProfileRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__myprofile_component__["a" /* MyProfileComponent */]
            }]
    }
];


/***/ })

});
//# sourceMappingURL=myprofile.module.chunk.js.map
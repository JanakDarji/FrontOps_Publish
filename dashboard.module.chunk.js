webpackJsonp(["dashboard.module"],{

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<title>Aspect Dashboard</title>\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <!--<div class=\"row\">\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                <div class=\"card card-stats\">\n                    <div class=\"card-header\" data-background-color=\"orange\">\n                        <i class=\"material-icons\">weekend</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <p class=\"category\">Bookings</p>\n                        <h3 class=\"card-title\">184</h3>\n                    </div>\n                    <div class=\"card-footer\">\n                        <div class=\"stats\">\n                            <i class=\"material-icons text-danger\">warning</i>\n                            <a href=\"#pablo\">Get More Space...</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                <div class=\"card card-stats\">\n                    <div class=\"card-header\" data-background-color=\"red\">\n                        <i class=\"material-icons\">equalizer</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <p class=\"category\">Views</p>\n                        <h3 class=\"card-title\">75.521</h3>\n                    </div>\n                    <div class=\"card-footer\">\n                        <div class=\"stats\">\n                            <i class=\"material-icons\">local_offer</i> Google Analytics\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                <div class=\"card card-stats\">\n                    <div class=\"card-header\" data-background-color=\"green\">\n                        <i class=\"material-icons\">store</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <p class=\"category\">Revenue</p>\n                        <h3 class=\"card-title\">$3,245</h3>\n                    </div>\n                    <div class=\"card-footer\">\n                        <div class=\"stats\">\n                            <i class=\"material-icons\">date_range</i> Last 24 Hours\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                <div class=\"card card-stats\">\n                    <div class=\"card-header\" data-background-color=\"blue\">\n                        <i class=\"fa fa-twitter\"></i>\n                    </div>\n                    <div class=\"card-content\">\n                        <p class=\"category\">Followers</p>\n                        <h3 class=\"card-title\">+245</h3>\n                    </div>\n                    <div class=\"card-footer\">\n                        <div class=\"stats\">\n                            <i class=\"material-icons\">update</i> Just Updated\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-lg-4 col-md-6\">\n                <div class=\"card card-product\">\n                    <div class=\"card-image\" data-header-animation=\"true\">\n                        <a href=\"#pablo\">\n                            <img class=\"img\" src=\"../assets/img/card-2.jpeg\">\n                        </a>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"card-actions\">\n                            <button type=\"button\" class=\"btn btn-danger btn-simple fix-broken-card\">\n                                <i class=\"material-icons\">build</i> Fix Header!\n                            </button>\n                            <button type=\"button\" class=\"btn btn-default btn-simple\"  matTooltip=\"View\" [matTooltipPosition]=\"'below'\">\n                                <i class=\"material-icons\">art_track</i>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-success btn-simple\"  matTooltip=\"Edit\" [matTooltipPosition]=\"'below'\">\n                                <i class=\"material-icons\">edit</i>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-danger btn-simple\" matTooltip=\"Remove\" [matTooltipPosition]=\"'below'\">\n                                <i class=\"material-icons\">close</i>\n                            </button>\n                        </div>\n                        <h4 class=\"card-title\">\n                            <a href=\"#pablo\">Cozy 5 Stars Apartment</a>\n                        </h4>\n                        <div class=\"card-description\">\n                            The place is close to Barceloneta Beach and bus stop just 2 min by walk and...\n                        </div>\n                    </div>\n                    <div class=\"card-footer\">\n                        <div class=\"price\">\n                            <h4>$899/night</h4>\n                        </div>\n                        <div class=\"stats pull-right\">\n                            <p class=\"category\"><i class=\"material-icons\">place</i> Barcelona, Spain</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6\">\n                <div class=\"card card-product\">\n                    <div class=\"card-image\" data-header-animation=\"true\">\n                        <a href=\"#pablo\">\n                            <img class=\"img\" src=\"../assets/img/card-3.jpeg\">\n                        </a>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"card-actions\">\n                            <button type=\"button\" class=\"btn btn-danger btn-simple fix-broken-card\">\n                                <i class=\"material-icons\">build</i> Fix Header!\n                            </button>\n                            <button type=\"button\" class=\"btn btn-default btn-simple\" matTooltip=\"View\" [matTooltipPosition]=\"'below'\">\n                                <i class=\"material-icons\">art_track</i>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-success btn-simple\" matTooltip=\"Edit\" [matTooltipPosition]=\"'below'\">\n                                <i class=\"material-icons\">edit</i>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-danger btn-simple\" matTooltip=\"Remove\" [matTooltipPosition]=\"'below'\">\n                                <i class=\"material-icons\">close</i>\n                            </button>\n                        </div>\n                        <h4 class=\"card-title\">\n                            <a href=\"#pablo\">Office Studio</a>\n                        </h4>\n                        <div class=\"card-description\">\n                            The place is close to Metro Station and bus stop just 2 min by walk and near...\n                        </div>\n                    </div>\n                    <div class=\"card-footer\">\n                        <div class=\"price\">\n                            <h4>$1.119/night</h4>\n                        </div>\n                        <div class=\"stats pull-right\">\n                            <p class=\"category\"><i class=\"material-icons\">place</i> London, UK</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6\">\n                <div class=\"card card-product\">\n                    <div class=\"card-image\" data-header-animation=\"true\">\n                        <a href=\"#pablo\">\n                            <img class=\"img\" src=\"../assets/img/card-1.jpeg\">\n                        </a>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"card-actions\">\n                            <button type=\"button\" class=\"btn btn-danger btn-simple fix-broken-card\">\n                                <i class=\"material-icons\">build</i> Fix Header!\n                            </button>\n                            <button type=\"button\" class=\"btn btn-default btn-simple\" matTooltip=\"View\" [matTooltipPosition]=\"'below'\">\n                                <i class=\"material-icons\">art_track</i>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-success btn-simple\" matTooltip=\"Edit\" [matTooltipPosition]=\"'below'\">\n                                <i class=\"material-icons\">edit</i>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-danger btn-simple\" matTooltip=\"Remove\" [matTooltipPosition]=\"'below'\">\n                                <i class=\"material-icons\">close</i>\n                            </button>\n                        </div>\n                        <h4 class=\"card-title\">\n                            <a href=\"#pablo\">Beautiful Castle</a>\n                        </h4>\n                        <div class=\"card-description\">\n                            The place is close to Metro Station and bus stop just 2 min by walk and near...\n                        </div>\n                    </div>\n                    <div class=\"card-footer\">\n                        <div class=\"price\">\n                            <h4>$459/night</h4>\n                        </div>\n                        <div class=\"stats pull-right\">\n                            <p class=\"category\"><i class=\"material-icons\">place</i> Milan, Italy</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-icon\" data-background-color=\"red\">\n                        <i class=\"material-icons\">language</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">Global Sales by Top Locations</h4>\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <app-md-table\n                                  [data]=\"tableData\">\n                              </app-md-table>\n                            </div>\n                            <div class=\"col-md-6 col-md-offset-1\">\n                                <div id=\"worldMap\" class=\"map\"></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"card card-chart\">\n                    <div class=\"card-header\" data-background-color=\"green\" data-header-animation=\"true\">\n                        <div class=\"ct-chart\" id=\"dailySalesChart\"></div>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"card-actions\">\n                            <button type=\"button\" class=\"btn btn-danger btn-simple fix-broken-card\">\n                                <i class=\"material-icons\">build</i> Fix Header!\n                            </button>\n                            <button type=\"button\" class=\"btn btn-info btn-simple\" matTooltip=\"Refresh\" [matTooltipPosition]=\"'below'\">\n                                <i class=\"material-icons\">refresh</i>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-default btn-simple\" matTooltip=\"Change Date\" [matTooltipPosition]=\"'below'\">\n                                <i class=\"material-icons\">edit</i>\n                            </button>\n                        </div>\n                        <h4 class=\"card-title\">Daily Sales</h4>\n                        <p class=\"category\">\n                            <span class=\"text-success\"><i class=\"fa fa-long-arrow-up\"></i> 55% </span> increase in today sales.</p>\n                    </div>\n                    <div class=\"card-footer\">\n                        <div class=\"stats\">\n                            <i class=\"material-icons\">access_time</i> updated 4 minutes ago\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"card card-chart\">\n                    <div class=\"card-header\" data-background-color=\"orange\" data-header-animation=\"true\">\n                        <div class=\"ct-chart\" id=\"completedTasksChart\"></div>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"card-actions\">\n                            <button type=\"button\" class=\"btn btn-danger btn-simple fix-broken-card\">\n                                <i class=\"material-icons\">build</i> Fix Header!\n                            </button>\n                            <button type=\"button\" class=\"btn btn-info btn-simple\" matTooltip=\"Refresh\" [matTooltipPosition]=\"'below'\">\n                                <i class=\"material-icons\">refresh</i>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-default btn-simple\" matTooltip=\"Change Date\" [matTooltipPosition]=\"'below'\">\n                                <i class=\"material-icons\">edit</i>\n                            </button>\n                        </div>\n                        <h4 class=\"card-title\">Completed Tasks</h4>\n                        <p class=\"category\">Last Campaign Performance</p>\n                    </div>\n                    <div class=\"card-footer\">\n                        <div class=\"stats\">\n                            <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"card card-chart\">\n                    <div class=\"card-header\" data-background-color=\"red\" data-header-animation=\"true\">\n                        <div class=\"ct-chart\" id=\"websiteViewsChart\"></div>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"card-actions\">\n                            <button type=\"button\" class=\"btn btn-danger btn-simple fix-broken-card\">\n                                <i class=\"material-icons\">build</i> Fix Header!\n                            </button>\n                            <button type=\"button\" class=\"btn btn-info btn-simple\" matTooltip=\"Refresh\" [matTooltipPosition]=\"'below'\">\n                                <i class=\"material-icons\">refresh</i>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-default btn-simple\" matTooltip=\"Change Date\" [matTooltipPosition]=\"'below'\">\n                                <i class=\"material-icons\">edit</i>\n                            </button>\n                        </div>\n                        <h4 class=\"card-title\">Website Views</h4>\n                        <p class=\"category\">Last Campaign Performance</p>\n                    </div>\n                    <div class=\"card-footer\">\n                        <div class=\"stats\">\n                            <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>-->\n\n\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    // constructor(private navbarTitleService: NavbarTitleService, private notificationService: NotificationService) { }
    //public tableData: TableData;
    //startAnimationForLineChart(chart: any) {
    //    let seq: any, delays: any, durations: any;
    //    seq = 0;
    //    delays = 80;
    //    durations = 500;
    //    chart.on('draw', function(data: any) {
    //      if (data.type === 'line' || data.type === 'area') {
    //        data.element.animate({
    //          d: {
    //            begin: 600,
    //            dur: 700,
    //            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
    //            to: data.path.clone().stringify(),
    //            easing: Chartist.Svg.Easing.easeOutQuint
    //          }
    //        });
    //      } else if (data.type === 'point') {
    //            seq++;
    //            data.element.animate({
    //              opacity: {
    //                begin: seq * delays,
    //                dur: durations,
    //                from: 0,
    //                to: 1,
    //                easing: 'ease'
    //              }
    //            });
    //        }
    //    });
    //    seq = 0;
    //}
    //startAnimationForBarChart(chart: any) {
    //    let seq2: any, delays2: any, durations2: any;
    //    seq2 = 0;
    //    delays2 = 80;
    //    durations2 = 500;
    //    chart.on('draw', function(data: any) {
    //      if (data.type === 'bar') {
    //          seq2++;
    //          data.element.animate({
    //            opacity: {
    //              begin: seq2 * delays2,
    //              dur: durations2,
    //              from: 0,
    //              to: 1,
    //              easing: 'ease'
    //            }
    //          });
    //      }
    //    });
    //    seq2 = 0;
    //}
    // constructor(private navbarTitleService: NavbarTitleService) { }
    DashboardComponent.prototype.ngOnInit = function () {
        $('.loader').hide();
        // this.tableData = {
        //     headerRow: ['ID', 'Name', 'Salary', 'Country', 'City'],
        //     dataRows: [
        //         ['US', 'USA', '2.920	', '53.23%'],
        //         ['DE', 'Germany', '1.300', '20.43%'],
        //         ['AU', 'Australia', '760', '10.35%'],
        //         ['GB', 'United Kingdom	', '690', '7.87%'],
        //         ['RO', 'Romania', '600', '5.94%'],
        //         ['BR', 'Brasil', '550', '4.34%']
        //     ]
        //  };
        // /* ----------==========     Daily Sales Chart initialization    ==========---------- */
        // const dataDailySalesChart = {
        //     labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        //     series: [
        //         [12, 17, 7, 17, 23, 18, 38]
        //     ]
        // };
        //const optionsDailySalesChart = {
        //     lineSmooth: Chartist.Interpolation.cardinal({
        //         tension: 0
        //     }),
        //     low: 0,
        //     high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        //     chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
        // };
        // const dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);
        // this.startAnimationForLineChart(dailySalesChart);
        // /* ----------==========     Completed Tasks Chart initialization    ==========---------- */
        // const dataCompletedTasksChart = {
        //     labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
        //     series: [
        //         [230, 750, 450, 300, 280, 240, 200, 190]
        //     ]
        // };
        // const optionsCompletedTasksChart = {
        //     lineSmooth: Chartist.Interpolation.cardinal({
        //         tension: 0
        //     }),
        //     low: 0,
        //     high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better
        //     // look
        //     chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
        // };
        //const completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart,
        // optionsCompletedTasksChart);
        //this.startAnimationForLineChart(completedTasksChart);
        // /* ----------==========     Emails Subscription Chart initialization    ==========---------- */
        // const dataWebsiteViewsChart = {
        //   labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        //   series: [
        //     [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
        //   ]
        // };
        // const optionsWebsiteViewsChart = {
        //     axisX: {
        //         showGrid: false
        //     },
        //     low: 0,
        //     high: 1000,
        //     chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
        // };
        // const responsiveOptions: any = [
        //   ['screen and (max-width: 640px)', {
        //     seriesBarDistance: 5,
        //     axisX: {
        //       labelInterpolationFnc: function (value) {
        //         return value[0];
        //       }
        //     }
        //   }]
        // ];
        // const websiteViewsChart = new Chartist.Bar('#websiteViewsChart', dataWebsiteViewsChart, optionsWebsiteViewsChart, responsiveOptions);
        // this.startAnimationForBarChart(websiteViewsChart);
        // const mapData = {
        //      'AU': 760,
        //      'BR': 550,
        //      'CA': 120,
        //      'DE': 1300,
        //      'FR': 540,
        //      'GB': 690,
        //      'GE': 200,
        //      'IN': 200,
        //      'RO': 600,
        //      'RU': 300,
        //      'US': 2920,
        //  };
        //     $('#worldMap').vectorMap({
        //         map: 'world_mill_en',
        //         backgroundColor: 'transparent',
        //         zoomOnScroll: false,
        //         regionStyle: {
        //             initial: {
        //                 fill: '#e4e4e4',
        //                 'fill-opacity': 0.9,
        //                 stroke: 'none',
        //                 'stroke-width': 0,
        //                 'stroke-opacity': 0
        //             }
        //         },
        //         series: {
        //             regions: [{
        //                 values: mapData,
        //                 scale: ['#AAAAAA', '#444444'],
        //                 normalizeFunction: 'polynomial'
        //             }]
        //         },
        //     });
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        //const breakCards = true;
        //if (breakCards === true) {
        //    // We break the cards headers if there is too much stress on them :-)
        //    $('[data-header-animation="true"]').each(function(){
        //        const $fix_button = $(this);
        //        const $card = $(this).parent('.card');
        //        $card.find('.fix-broken-card').click(function(){
        //            const $header = $(this).parent().parent().siblings('.card-header, .card-image');
        //            $header.removeClass('hinge').addClass('fadeInDown');
        //            $card.attr('data-count', 0);
        //            setTimeout(function(){
        //                $header.removeClass('fadeInDown animate');
        //            }, 480);
        //        });
        //        $card.mouseenter(function(){
        //            const $this = $(this);
        //            const hover_count = parseInt($this.attr('data-count'), 10) + 1 || 0;
        //            $this.attr('data-count', hover_count);
        //            if (hover_count >= 20) {
        //                $(this).children('.card-header, .card-image').addClass('hinge animated');
        //            }
        //        });
        //    });
        //}
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html")
        })
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
                __WEBPACK_IMPORTED_MODULE_4__md_md_module__["a" /* MdModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_module__["b" /* MaterialModule */]
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
webpackJsonp(["view-timesheet.module"],{

/***/ "./node_modules/@agm/js-marker-clusterer/directives.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives_marker_cluster__ = __webpack_require__("./node_modules/@agm/js-marker-clusterer/directives/marker-cluster.js");
/* unused harmony reexport AgmMarkerCluster */

//# sourceMappingURL=directives.js.map

/***/ }),

/***/ "./node_modules/@agm/js-marker-clusterer/directives/marker-cluster.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmMarkerCluster; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_managers_cluster_manager__ = __webpack_require__("./node_modules/@agm/js-marker-clusterer/services/managers/cluster-manager.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");



/**
 * AgmMarkerCluster clusters map marker if they are near together
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker-cluster>
 *        <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *        </agm-marker>
 *        <agm-marker [latitude]="lat2" [longitude]="lng2" [label]="'N'">
 *        </agm-marker>
 *      </agm-marker-cluster>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmMarkerCluster = (function () {
    function AgmMarkerCluster(_clusterManager) {
        this._clusterManager = _clusterManager;
    }
    /** @internal */
    AgmMarkerCluster.prototype.ngOnDestroy = function () {
        this._clusterManager.clearMarkers();
    };
    /** @internal */
    AgmMarkerCluster.prototype.ngOnChanges = function (changes) {
        if (changes['gridSize']) {
            this._clusterManager.setGridSize(this);
        }
        if (changes['maxZoom']) {
            this._clusterManager.setMaxZoom(this);
        }
        if (changes['styles']) {
            this._clusterManager.setStyles(this);
        }
        if (changes['zoomOnClick']) {
            this._clusterManager.setZoomOnClick(this);
        }
        if (changes['averageCenter']) {
            this._clusterManager.setAverageCenter(this);
        }
        if (changes['minimumClusterSize']) {
            this._clusterManager.setMinimumClusterSize(this);
        }
        if (changes['styles']) {
            this._clusterManager.setStyles(this);
        }
        if (changes['imagePath']) {
            this._clusterManager.setImagePath(this);
        }
        if (changes['imageExtension']) {
            this._clusterManager.setImageExtension(this);
        }
    };
    /** @internal */
    AgmMarkerCluster.prototype.ngOnInit = function () {
        this._clusterManager.init({
            gridSize: this.gridSize,
            maxZoom: this.maxZoom,
            zoomOnClick: this.zoomOnClick,
            averageCenter: this.averageCenter,
            minimumClusterSize: this.minimumClusterSize,
            styles: this.styles,
            imagePath: this.imagePath,
            imageExtension: this.imageExtension,
        });
    };
    return AgmMarkerCluster;
}());

AgmMarkerCluster.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'agm-marker-cluster',
                providers: [
                    __WEBPACK_IMPORTED_MODULE_1__services_managers_cluster_manager__["a" /* ClusterManager */],
                    { provide: __WEBPACK_IMPORTED_MODULE_2__agm_core__["d" /* MarkerManager */], useExisting: __WEBPACK_IMPORTED_MODULE_1__services_managers_cluster_manager__["a" /* ClusterManager */] },
                    __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* InfoWindowManager */],
                ]
            },] },
];
/** @nocollapse */
AgmMarkerCluster.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__services_managers_cluster_manager__["a" /* ClusterManager */], },
]; };
AgmMarkerCluster.propDecorators = {
    'gridSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'maxZoom': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'zoomOnClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'averageCenter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'minimumClusterSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'styles': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'imagePath': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'imageExtension': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
//# sourceMappingURL=marker-cluster.js.map

/***/ }),

/***/ "./node_modules/@agm/js-marker-clusterer/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives__ = __webpack_require__("./node_modules/@agm/js-marker-clusterer/directives.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("./node_modules/@agm/js-marker-clusterer/services.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_marker_clusterer_module__ = __webpack_require__("./node_modules/@agm/js-marker-clusterer/js-marker-clusterer.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__js_marker_clusterer_module__["a"]; });
// main modules


// we explicitly export the module here to prevent this Ionic 2 bug:
// http://stevemichelotti.com/integrate-angular-2-google-maps-into-ionic-2/

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@agm/js-marker-clusterer/js-marker-clusterer.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmJsMarkerClustererModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_marker_cluster__ = __webpack_require__("./node_modules/@agm/js-marker-clusterer/directives/marker-cluster.js");



var AgmJsMarkerClustererModule = (function () {
    function AgmJsMarkerClustererModule() {
    }
    return AgmJsMarkerClustererModule;
}());

AgmJsMarkerClustererModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_1__agm_core__["a" /* AgmCoreModule */]],
                declarations: [__WEBPACK_IMPORTED_MODULE_2__directives_marker_cluster__["a" /* AgmMarkerCluster */]],
                exports: [__WEBPACK_IMPORTED_MODULE_2__directives_marker_cluster__["a" /* AgmMarkerCluster */]]
            },] },
];
/** @nocollapse */
AgmJsMarkerClustererModule.ctorParameters = function () { return []; };
//# sourceMappingURL=js-marker-clusterer.module.js.map

/***/ }),

/***/ "./node_modules/@agm/js-marker-clusterer/services.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_managers_cluster_manager__ = __webpack_require__("./node_modules/@agm/js-marker-clusterer/services/managers/cluster-manager.js");
/* unused harmony reexport ClusterManager */

//# sourceMappingURL=services.js.map

/***/ }),

/***/ "./node_modules/@agm/js-marker-clusterer/services/managers/cluster-manager.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClusterManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_marker_clusterer__ = __webpack_require__("./node_modules/js-marker-clusterer/src/markerclusterer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_marker_clusterer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_js_marker_clusterer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_managers_marker_manager__ = __webpack_require__("./node_modules/@agm/core/services/managers/marker-manager.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_google_maps_api_wrapper__ = __webpack_require__("./node_modules/@agm/core/services/google-maps-api-wrapper.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var ClusterManager = (function (_super) {
    __extends(ClusterManager, _super);
    function ClusterManager(_mapsWrapper, _zone) {
        var _this = _super.call(this, _mapsWrapper, _zone) || this;
        _this._mapsWrapper = _mapsWrapper;
        _this._zone = _zone;
        _this._clustererInstance = new Promise(function (resolver) {
            _this._resolver = resolver;
        });
        return _this;
    }
    ClusterManager.prototype.init = function (options) {
        var _this = this;
        this._mapsWrapper.getNativeMap().then(function (map) {
            var clusterer = new MarkerClusterer(map, [], options);
            _this._resolver(clusterer);
        });
    };
    ClusterManager.prototype.addMarker = function (marker) {
        var clusterPromise = this._clustererInstance;
        var markerPromise = this._mapsWrapper
            .createMarker({
            position: {
                lat: marker.latitude,
                lng: marker.longitude
            },
            label: marker.label,
            draggable: marker.draggable,
            icon: marker.iconUrl,
            opacity: marker.opacity,
            visible: marker.visible,
            zIndex: marker.zIndex,
            title: marker.title,
            clickable: marker.clickable,
        }, false);
        Promise
            .all([clusterPromise, markerPromise])
            .then(function (_a) {
            var cluster = _a[0], marker = _a[1];
            return cluster.addMarker(marker);
        });
        this._markers.set(marker, markerPromise);
    };
    ClusterManager.prototype.deleteMarker = function (marker) {
        var _this = this;
        var m = this._markers.get(marker);
        if (m == null) {
            // marker already deleted
            return Promise.resolve();
        }
        return m.then(function (m) {
            _this._zone.run(function () {
                _this._clustererInstance.then(function (cluster) {
                    cluster.removeMarker(m);
                    _this._markers.delete(marker);
                });
            });
        });
    };
    ClusterManager.prototype.clearMarkers = function () {
        return this._clustererInstance.then(function (cluster) {
            cluster.clearMarkers();
        });
    };
    ClusterManager.prototype.setGridSize = function (c) {
        this._clustererInstance.then(function (cluster) {
            cluster.setGridSize(c.gridSize);
        });
    };
    ClusterManager.prototype.setMaxZoom = function (c) {
        this._clustererInstance.then(function (cluster) {
            cluster.setMaxZoom(c.maxZoom);
        });
    };
    ClusterManager.prototype.setStyles = function (c) {
        this._clustererInstance.then(function (cluster) {
            cluster.setStyles(c.styles);
        });
    };
    ClusterManager.prototype.setZoomOnClick = function (c) {
        this._clustererInstance.then(function (cluster) {
            if (c.zoomOnClick !== undefined) {
                cluster.zoomOnClick_ = c.zoomOnClick;
            }
        });
    };
    ClusterManager.prototype.setAverageCenter = function (c) {
        this._clustererInstance.then(function (cluster) {
            if (c.averageCenter !== undefined) {
                cluster.averageCenter_ = c.averageCenter;
            }
        });
    };
    ClusterManager.prototype.setImagePath = function (c) {
        this._clustererInstance.then(function (cluster) {
            if (c.imagePath !== undefined) {
                cluster.imagePath_ = c.imagePath;
            }
        });
    };
    ClusterManager.prototype.setMinimumClusterSize = function (c) {
        this._clustererInstance.then(function (cluster) {
            if (c.minimumClusterSize !== undefined) {
                cluster.minimumClusterSize_ = c.minimumClusterSize;
            }
        });
    };
    ClusterManager.prototype.setImageExtension = function (c) {
        this._clustererInstance.then(function (cluster) {
            if (c.imageExtension !== undefined) {
                cluster.imageExtension_ = c.imageExtension;
            }
        });
    };
    return ClusterManager;
}(__WEBPACK_IMPORTED_MODULE_2__core_services_managers_marker_manager__["a" /* MarkerManager */]));

ClusterManager.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
ClusterManager.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_3__core_services_google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
//# sourceMappingURL=cluster-manager.js.map

/***/ }),

/***/ "./node_modules/js-marker-clusterer/src/markerclusterer.js":
/***/ (function(module, exports) {

// ==ClosureCompiler==
// @compilation_level ADVANCED_OPTIMIZATIONS
// @externs_url http://closure-compiler.googlecode.com/svn/trunk/contrib/externs/maps/google_maps_api_v3_3.js
// ==/ClosureCompiler==

/**
 * @name MarkerClusterer for Google Maps v3
 * @version version 1.0
 * @author Luke Mahe
 * @fileoverview
 * The library creates and manages per-zoom-level clusters for large amounts of
 * markers.
 * <br/>
 * This is a v3 implementation of the
 * <a href="http://gmaps-utility-library-dev.googlecode.com/svn/tags/markerclusterer/"
 * >v2 MarkerClusterer</a>.
 */

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * A Marker Clusterer that clusters markers.
 *
 * @param {google.maps.Map} map The Google map to attach to.
 * @param {Array.<google.maps.Marker>=} opt_markers Optional markers to add to
 *   the cluster.
 * @param {Object=} opt_options support the following options:
 *     'gridSize': (number) The grid size of a cluster in pixels.
 *     'maxZoom': (number) The maximum zoom level that a marker can be part of a
 *                cluster.
 *     'zoomOnClick': (boolean) Whether the default behaviour of clicking on a
 *                    cluster is to zoom into it.
 *     'averageCenter': (boolean) Wether the center of each cluster should be
 *                      the average of all markers in the cluster.
 *     'minimumClusterSize': (number) The minimum number of markers to be in a
 *                           cluster before the markers are hidden and a count
 *                           is shown.
 *     'styles': (object) An object that has style properties:
 *       'url': (string) The image url.
 *       'height': (number) The image height.
 *       'width': (number) The image width.
 *       'anchor': (Array) The anchor position of the label text.
 *       'textColor': (string) The text color.
 *       'textSize': (number) The text size.
 *       'backgroundPosition': (string) The position of the backgound x, y.
 *       'iconAnchor': (Array) The anchor position of the icon x, y.
 * @constructor
 * @extends google.maps.OverlayView
 */
function MarkerClusterer(map, opt_markers, opt_options) {
  // MarkerClusterer implements google.maps.OverlayView interface. We use the
  // extend function to extend MarkerClusterer with google.maps.OverlayView
  // because it might not always be available when the code is defined so we
  // look for it at the last possible moment. If it doesn't exist now then
  // there is no point going ahead :)
  this.extend(MarkerClusterer, google.maps.OverlayView);
  this.map_ = map;

  /**
   * @type {Array.<google.maps.Marker>}
   * @private
   */
  this.markers_ = [];

  /**
   *  @type {Array.<Cluster>}
   */
  this.clusters_ = [];

  this.sizes = [53, 56, 66, 78, 90];

  /**
   * @private
   */
  this.styles_ = [];

  /**
   * @type {boolean}
   * @private
   */
  this.ready_ = false;

  var options = opt_options || {};

  /**
   * @type {number}
   * @private
   */
  this.gridSize_ = options['gridSize'] || 60;

  /**
   * @private
   */
  this.minClusterSize_ = options['minimumClusterSize'] || 2;


  /**
   * @type {?number}
   * @private
   */
  this.maxZoom_ = options['maxZoom'] || null;

  this.styles_ = options['styles'] || [];

  /**
   * @type {string}
   * @private
   */
  this.imagePath_ = options['imagePath'] ||
      this.MARKER_CLUSTER_IMAGE_PATH_;

  /**
   * @type {string}
   * @private
   */
  this.imageExtension_ = options['imageExtension'] ||
      this.MARKER_CLUSTER_IMAGE_EXTENSION_;

  /**
   * @type {boolean}
   * @private
   */
  this.zoomOnClick_ = true;

  if (options['zoomOnClick'] != undefined) {
    this.zoomOnClick_ = options['zoomOnClick'];
  }

  /**
   * @type {boolean}
   * @private
   */
  this.averageCenter_ = false;

  if (options['averageCenter'] != undefined) {
    this.averageCenter_ = options['averageCenter'];
  }

  this.setupStyles_();

  this.setMap(map);

  /**
   * @type {number}
   * @private
   */
  this.prevZoom_ = this.map_.getZoom();

  // Add the map event listeners
  var that = this;
  google.maps.event.addListener(this.map_, 'zoom_changed', function() {
    var zoom = that.map_.getZoom();

    if (that.prevZoom_ != zoom) {
      that.prevZoom_ = zoom;
      that.resetViewport();
    }
  });

  google.maps.event.addListener(this.map_, 'idle', function() {
    that.redraw();
  });

  // Finally, add the markers
  if (opt_markers && opt_markers.length) {
    this.addMarkers(opt_markers, false);
  }
}


/**
 * The marker cluster image path.
 *
 * @type {string}
 * @private
 */
MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_PATH_ =
    'http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/' +
    'images/m';


/**
 * The marker cluster image path.
 *
 * @type {string}
 * @private
 */
MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_EXTENSION_ = 'png';


/**
 * Extends a objects prototype by anothers.
 *
 * @param {Object} obj1 The object to be extended.
 * @param {Object} obj2 The object to extend with.
 * @return {Object} The new extended object.
 * @ignore
 */
MarkerClusterer.prototype.extend = function(obj1, obj2) {
  return (function(object) {
    for (var property in object.prototype) {
      this.prototype[property] = object.prototype[property];
    }
    return this;
  }).apply(obj1, [obj2]);
};


/**
 * Implementaion of the interface method.
 * @ignore
 */
MarkerClusterer.prototype.onAdd = function() {
  this.setReady_(true);
};

/**
 * Implementaion of the interface method.
 * @ignore
 */
MarkerClusterer.prototype.draw = function() {};

/**
 * Sets up the styles object.
 *
 * @private
 */
MarkerClusterer.prototype.setupStyles_ = function() {
  if (this.styles_.length) {
    return;
  }

  for (var i = 0, size; size = this.sizes[i]; i++) {
    this.styles_.push({
      url: this.imagePath_ + (i + 1) + '.' + this.imageExtension_,
      height: size,
      width: size
    });
  }
};

/**
 *  Fit the map to the bounds of the markers in the clusterer.
 */
MarkerClusterer.prototype.fitMapToMarkers = function() {
  var markers = this.getMarkers();
  var bounds = new google.maps.LatLngBounds();
  for (var i = 0, marker; marker = markers[i]; i++) {
    bounds.extend(marker.getPosition());
  }

  this.map_.fitBounds(bounds);
};


/**
 *  Sets the styles.
 *
 *  @param {Object} styles The style to set.
 */
MarkerClusterer.prototype.setStyles = function(styles) {
  this.styles_ = styles;
};


/**
 *  Gets the styles.
 *
 *  @return {Object} The styles object.
 */
MarkerClusterer.prototype.getStyles = function() {
  return this.styles_;
};


/**
 * Whether zoom on click is set.
 *
 * @return {boolean} True if zoomOnClick_ is set.
 */
MarkerClusterer.prototype.isZoomOnClick = function() {
  return this.zoomOnClick_;
};

/**
 * Whether average center is set.
 *
 * @return {boolean} True if averageCenter_ is set.
 */
MarkerClusterer.prototype.isAverageCenter = function() {
  return this.averageCenter_;
};


/**
 *  Returns the array of markers in the clusterer.
 *
 *  @return {Array.<google.maps.Marker>} The markers.
 */
MarkerClusterer.prototype.getMarkers = function() {
  return this.markers_;
};


/**
 *  Returns the number of markers in the clusterer
 *
 *  @return {Number} The number of markers.
 */
MarkerClusterer.prototype.getTotalMarkers = function() {
  return this.markers_.length;
};


/**
 *  Sets the max zoom for the clusterer.
 *
 *  @param {number} maxZoom The max zoom level.
 */
MarkerClusterer.prototype.setMaxZoom = function(maxZoom) {
  this.maxZoom_ = maxZoom;
};


/**
 *  Gets the max zoom for the clusterer.
 *
 *  @return {number} The max zoom level.
 */
MarkerClusterer.prototype.getMaxZoom = function() {
  return this.maxZoom_;
};


/**
 *  The function for calculating the cluster icon image.
 *
 *  @param {Array.<google.maps.Marker>} markers The markers in the clusterer.
 *  @param {number} numStyles The number of styles available.
 *  @return {Object} A object properties: 'text' (string) and 'index' (number).
 *  @private
 */
MarkerClusterer.prototype.calculator_ = function(markers, numStyles) {
  var index = 0;
  var count = markers.length;
  var dv = count;
  while (dv !== 0) {
    dv = parseInt(dv / 10, 10);
    index++;
  }

  index = Math.min(index, numStyles);
  return {
    text: count,
    index: index
  };
};


/**
 * Set the calculator function.
 *
 * @param {function(Array, number)} calculator The function to set as the
 *     calculator. The function should return a object properties:
 *     'text' (string) and 'index' (number).
 *
 */
MarkerClusterer.prototype.setCalculator = function(calculator) {
  this.calculator_ = calculator;
};


/**
 * Get the calculator function.
 *
 * @return {function(Array, number)} the calculator function.
 */
MarkerClusterer.prototype.getCalculator = function() {
  return this.calculator_;
};


/**
 * Add an array of markers to the clusterer.
 *
 * @param {Array.<google.maps.Marker>} markers The markers to add.
 * @param {boolean=} opt_nodraw Whether to redraw the clusters.
 */
MarkerClusterer.prototype.addMarkers = function(markers, opt_nodraw) {
  for (var i = 0, marker; marker = markers[i]; i++) {
    this.pushMarkerTo_(marker);
  }
  if (!opt_nodraw) {
    this.redraw();
  }
};


/**
 * Pushes a marker to the clusterer.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @private
 */
MarkerClusterer.prototype.pushMarkerTo_ = function(marker) {
  marker.isAdded = false;
  if (marker['draggable']) {
    // If the marker is draggable add a listener so we update the clusters on
    // the drag end.
    var that = this;
    google.maps.event.addListener(marker, 'dragend', function() {
      marker.isAdded = false;
      that.repaint();
    });
  }
  this.markers_.push(marker);
};


/**
 * Adds a marker to the clusterer and redraws if needed.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @param {boolean=} opt_nodraw Whether to redraw the clusters.
 */
MarkerClusterer.prototype.addMarker = function(marker, opt_nodraw) {
  this.pushMarkerTo_(marker);
  if (!opt_nodraw) {
    this.redraw();
  }
};


/**
 * Removes a marker and returns true if removed, false if not
 *
 * @param {google.maps.Marker} marker The marker to remove
 * @return {boolean} Whether the marker was removed or not
 * @private
 */
MarkerClusterer.prototype.removeMarker_ = function(marker) {
  var index = -1;
  if (this.markers_.indexOf) {
    index = this.markers_.indexOf(marker);
  } else {
    for (var i = 0, m; m = this.markers_[i]; i++) {
      if (m == marker) {
        index = i;
        break;
      }
    }
  }

  if (index == -1) {
    // Marker is not in our list of markers.
    return false;
  }

  marker.setMap(null);

  this.markers_.splice(index, 1);

  return true;
};


/**
 * Remove a marker from the cluster.
 *
 * @param {google.maps.Marker} marker The marker to remove.
 * @param {boolean=} opt_nodraw Optional boolean to force no redraw.
 * @return {boolean} True if the marker was removed.
 */
MarkerClusterer.prototype.removeMarker = function(marker, opt_nodraw) {
  var removed = this.removeMarker_(marker);

  if (!opt_nodraw && removed) {
    this.resetViewport();
    this.redraw();
    return true;
  } else {
   return false;
  }
};


/**
 * Removes an array of markers from the cluster.
 *
 * @param {Array.<google.maps.Marker>} markers The markers to remove.
 * @param {boolean=} opt_nodraw Optional boolean to force no redraw.
 */
MarkerClusterer.prototype.removeMarkers = function(markers, opt_nodraw) {
  var removed = false;

  for (var i = 0, marker; marker = markers[i]; i++) {
    var r = this.removeMarker_(marker);
    removed = removed || r;
  }

  if (!opt_nodraw && removed) {
    this.resetViewport();
    this.redraw();
    return true;
  }
};


/**
 * Sets the clusterer's ready state.
 *
 * @param {boolean} ready The state.
 * @private
 */
MarkerClusterer.prototype.setReady_ = function(ready) {
  if (!this.ready_) {
    this.ready_ = ready;
    this.createClusters_();
  }
};


/**
 * Returns the number of clusters in the clusterer.
 *
 * @return {number} The number of clusters.
 */
MarkerClusterer.prototype.getTotalClusters = function() {
  return this.clusters_.length;
};


/**
 * Returns the google map that the clusterer is associated with.
 *
 * @return {google.maps.Map} The map.
 */
MarkerClusterer.prototype.getMap = function() {
  return this.map_;
};


/**
 * Sets the google map that the clusterer is associated with.
 *
 * @param {google.maps.Map} map The map.
 */
MarkerClusterer.prototype.setMap = function(map) {
  this.map_ = map;
};


/**
 * Returns the size of the grid.
 *
 * @return {number} The grid size.
 */
MarkerClusterer.prototype.getGridSize = function() {
  return this.gridSize_;
};


/**
 * Sets the size of the grid.
 *
 * @param {number} size The grid size.
 */
MarkerClusterer.prototype.setGridSize = function(size) {
  this.gridSize_ = size;
};


/**
 * Returns the min cluster size.
 *
 * @return {number} The grid size.
 */
MarkerClusterer.prototype.getMinClusterSize = function() {
  return this.minClusterSize_;
};

/**
 * Sets the min cluster size.
 *
 * @param {number} size The grid size.
 */
MarkerClusterer.prototype.setMinClusterSize = function(size) {
  this.minClusterSize_ = size;
};


/**
 * Extends a bounds object by the grid size.
 *
 * @param {google.maps.LatLngBounds} bounds The bounds to extend.
 * @return {google.maps.LatLngBounds} The extended bounds.
 */
MarkerClusterer.prototype.getExtendedBounds = function(bounds) {
  var projection = this.getProjection();

  // Turn the bounds into latlng.
  var tr = new google.maps.LatLng(bounds.getNorthEast().lat(),
      bounds.getNorthEast().lng());
  var bl = new google.maps.LatLng(bounds.getSouthWest().lat(),
      bounds.getSouthWest().lng());

  // Convert the points to pixels and the extend out by the grid size.
  var trPix = projection.fromLatLngToDivPixel(tr);
  trPix.x += this.gridSize_;
  trPix.y -= this.gridSize_;

  var blPix = projection.fromLatLngToDivPixel(bl);
  blPix.x -= this.gridSize_;
  blPix.y += this.gridSize_;

  // Convert the pixel points back to LatLng
  var ne = projection.fromDivPixelToLatLng(trPix);
  var sw = projection.fromDivPixelToLatLng(blPix);

  // Extend the bounds to contain the new bounds.
  bounds.extend(ne);
  bounds.extend(sw);

  return bounds;
};


/**
 * Determins if a marker is contained in a bounds.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @param {google.maps.LatLngBounds} bounds The bounds to check against.
 * @return {boolean} True if the marker is in the bounds.
 * @private
 */
MarkerClusterer.prototype.isMarkerInBounds_ = function(marker, bounds) {
  return bounds.contains(marker.getPosition());
};


/**
 * Clears all clusters and markers from the clusterer.
 */
MarkerClusterer.prototype.clearMarkers = function() {
  this.resetViewport(true);

  // Set the markers a empty array.
  this.markers_ = [];
};


/**
 * Clears all existing clusters and recreates them.
 * @param {boolean} opt_hide To also hide the marker.
 */
MarkerClusterer.prototype.resetViewport = function(opt_hide) {
  // Remove all the clusters
  for (var i = 0, cluster; cluster = this.clusters_[i]; i++) {
    cluster.remove();
  }

  // Reset the markers to not be added and to be invisible.
  for (var i = 0, marker; marker = this.markers_[i]; i++) {
    marker.isAdded = false;
    if (opt_hide) {
      marker.setMap(null);
    }
  }

  this.clusters_ = [];
};

/**
 *
 */
MarkerClusterer.prototype.repaint = function() {
  var oldClusters = this.clusters_.slice();
  this.clusters_.length = 0;
  this.resetViewport();
  this.redraw();

  // Remove the old clusters.
  // Do it in a timeout so the other clusters have been drawn first.
  window.setTimeout(function() {
    for (var i = 0, cluster; cluster = oldClusters[i]; i++) {
      cluster.remove();
    }
  }, 0);
};


/**
 * Redraws the clusters.
 */
MarkerClusterer.prototype.redraw = function() {
  this.createClusters_();
};


/**
 * Calculates the distance between two latlng locations in km.
 * @see http://www.movable-type.co.uk/scripts/latlong.html
 *
 * @param {google.maps.LatLng} p1 The first lat lng point.
 * @param {google.maps.LatLng} p2 The second lat lng point.
 * @return {number} The distance between the two points in km.
 * @private
*/
MarkerClusterer.prototype.distanceBetweenPoints_ = function(p1, p2) {
  if (!p1 || !p2) {
    return 0;
  }

  var R = 6371; // Radius of the Earth in km
  var dLat = (p2.lat() - p1.lat()) * Math.PI / 180;
  var dLon = (p2.lng() - p1.lng()) * Math.PI / 180;
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(p1.lat() * Math.PI / 180) * Math.cos(p2.lat() * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
};


/**
 * Add a marker to a cluster, or creates a new cluster.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @private
 */
MarkerClusterer.prototype.addToClosestCluster_ = function(marker) {
  var distance = 40000; // Some large number
  var clusterToAddTo = null;
  var pos = marker.getPosition();
  for (var i = 0, cluster; cluster = this.clusters_[i]; i++) {
    var center = cluster.getCenter();
    if (center) {
      var d = this.distanceBetweenPoints_(center, marker.getPosition());
      if (d < distance) {
        distance = d;
        clusterToAddTo = cluster;
      }
    }
  }

  if (clusterToAddTo && clusterToAddTo.isMarkerInClusterBounds(marker)) {
    clusterToAddTo.addMarker(marker);
  } else {
    var cluster = new Cluster(this);
    cluster.addMarker(marker);
    this.clusters_.push(cluster);
  }
};


/**
 * Creates the clusters.
 *
 * @private
 */
MarkerClusterer.prototype.createClusters_ = function() {
  if (!this.ready_) {
    return;
  }

  // Get our current map view bounds.
  // Create a new bounds object so we don't affect the map.
  var mapBounds = new google.maps.LatLngBounds(this.map_.getBounds().getSouthWest(),
      this.map_.getBounds().getNorthEast());
  var bounds = this.getExtendedBounds(mapBounds);

  for (var i = 0, marker; marker = this.markers_[i]; i++) {
    if (!marker.isAdded && this.isMarkerInBounds_(marker, bounds)) {
      this.addToClosestCluster_(marker);
    }
  }
};


/**
 * A cluster that contains markers.
 *
 * @param {MarkerClusterer} markerClusterer The markerclusterer that this
 *     cluster is associated with.
 * @constructor
 * @ignore
 */
function Cluster(markerClusterer) {
  this.markerClusterer_ = markerClusterer;
  this.map_ = markerClusterer.getMap();
  this.gridSize_ = markerClusterer.getGridSize();
  this.minClusterSize_ = markerClusterer.getMinClusterSize();
  this.averageCenter_ = markerClusterer.isAverageCenter();
  this.center_ = null;
  this.markers_ = [];
  this.bounds_ = null;
  this.clusterIcon_ = new ClusterIcon(this, markerClusterer.getStyles(),
      markerClusterer.getGridSize());
}

/**
 * Determins if a marker is already added to the cluster.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @return {boolean} True if the marker is already added.
 */
Cluster.prototype.isMarkerAlreadyAdded = function(marker) {
  if (this.markers_.indexOf) {
    return this.markers_.indexOf(marker) != -1;
  } else {
    for (var i = 0, m; m = this.markers_[i]; i++) {
      if (m == marker) {
        return true;
      }
    }
  }
  return false;
};


/**
 * Add a marker the cluster.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @return {boolean} True if the marker was added.
 */
Cluster.prototype.addMarker = function(marker) {
  if (this.isMarkerAlreadyAdded(marker)) {
    return false;
  }

  if (!this.center_) {
    this.center_ = marker.getPosition();
    this.calculateBounds_();
  } else {
    if (this.averageCenter_) {
      var l = this.markers_.length + 1;
      var lat = (this.center_.lat() * (l-1) + marker.getPosition().lat()) / l;
      var lng = (this.center_.lng() * (l-1) + marker.getPosition().lng()) / l;
      this.center_ = new google.maps.LatLng(lat, lng);
      this.calculateBounds_();
    }
  }

  marker.isAdded = true;
  this.markers_.push(marker);

  var len = this.markers_.length;
  if (len < this.minClusterSize_ && marker.getMap() != this.map_) {
    // Min cluster size not reached so show the marker.
    marker.setMap(this.map_);
  }

  if (len == this.minClusterSize_) {
    // Hide the markers that were showing.
    for (var i = 0; i < len; i++) {
      this.markers_[i].setMap(null);
    }
  }

  if (len >= this.minClusterSize_) {
    marker.setMap(null);
  }

  this.updateIcon();
  return true;
};


/**
 * Returns the marker clusterer that the cluster is associated with.
 *
 * @return {MarkerClusterer} The associated marker clusterer.
 */
Cluster.prototype.getMarkerClusterer = function() {
  return this.markerClusterer_;
};


/**
 * Returns the bounds of the cluster.
 *
 * @return {google.maps.LatLngBounds} the cluster bounds.
 */
Cluster.prototype.getBounds = function() {
  var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
  var markers = this.getMarkers();
  for (var i = 0, marker; marker = markers[i]; i++) {
    bounds.extend(marker.getPosition());
  }
  return bounds;
};


/**
 * Removes the cluster
 */
Cluster.prototype.remove = function() {
  this.clusterIcon_.remove();
  this.markers_.length = 0;
  delete this.markers_;
};


/**
 * Returns the center of the cluster.
 *
 * @return {number} The cluster center.
 */
Cluster.prototype.getSize = function() {
  return this.markers_.length;
};


/**
 * Returns the center of the cluster.
 *
 * @return {Array.<google.maps.Marker>} The cluster center.
 */
Cluster.prototype.getMarkers = function() {
  return this.markers_;
};


/**
 * Returns the center of the cluster.
 *
 * @return {google.maps.LatLng} The cluster center.
 */
Cluster.prototype.getCenter = function() {
  return this.center_;
};


/**
 * Calculated the extended bounds of the cluster with the grid.
 *
 * @private
 */
Cluster.prototype.calculateBounds_ = function() {
  var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
  this.bounds_ = this.markerClusterer_.getExtendedBounds(bounds);
};


/**
 * Determines if a marker lies in the clusters bounds.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @return {boolean} True if the marker lies in the bounds.
 */
Cluster.prototype.isMarkerInClusterBounds = function(marker) {
  return this.bounds_.contains(marker.getPosition());
};


/**
 * Returns the map that the cluster is associated with.
 *
 * @return {google.maps.Map} The map.
 */
Cluster.prototype.getMap = function() {
  return this.map_;
};


/**
 * Updates the cluster icon
 */
Cluster.prototype.updateIcon = function() {
  var zoom = this.map_.getZoom();
  var mz = this.markerClusterer_.getMaxZoom();

  if (mz && zoom > mz) {
    // The zoom is greater than our max zoom so show all the markers in cluster.
    for (var i = 0, marker; marker = this.markers_[i]; i++) {
      marker.setMap(this.map_);
    }
    return;
  }

  if (this.markers_.length < this.minClusterSize_) {
    // Min cluster size not yet reached.
    this.clusterIcon_.hide();
    return;
  }

  var numStyles = this.markerClusterer_.getStyles().length;
  var sums = this.markerClusterer_.getCalculator()(this.markers_, numStyles);
  this.clusterIcon_.setCenter(this.center_);
  this.clusterIcon_.setSums(sums);
  this.clusterIcon_.show();
};


/**
 * A cluster icon
 *
 * @param {Cluster} cluster The cluster to be associated with.
 * @param {Object} styles An object that has style properties:
 *     'url': (string) The image url.
 *     'height': (number) The image height.
 *     'width': (number) The image width.
 *     'anchor': (Array) The anchor position of the label text.
 *     'textColor': (string) The text color.
 *     'textSize': (number) The text size.
 *     'backgroundPosition: (string) The background postition x, y.
 * @param {number=} opt_padding Optional padding to apply to the cluster icon.
 * @constructor
 * @extends google.maps.OverlayView
 * @ignore
 */
function ClusterIcon(cluster, styles, opt_padding) {
  cluster.getMarkerClusterer().extend(ClusterIcon, google.maps.OverlayView);

  this.styles_ = styles;
  this.padding_ = opt_padding || 0;
  this.cluster_ = cluster;
  this.center_ = null;
  this.map_ = cluster.getMap();
  this.div_ = null;
  this.sums_ = null;
  this.visible_ = false;

  this.setMap(this.map_);
}


/**
 * Triggers the clusterclick event and zoom's if the option is set.
 */
ClusterIcon.prototype.triggerClusterClick = function() {
  var markerClusterer = this.cluster_.getMarkerClusterer();

  // Trigger the clusterclick event.
  google.maps.event.trigger(markerClusterer, 'clusterclick', this.cluster_);

  if (markerClusterer.isZoomOnClick()) {
    // Zoom into the cluster.
    this.map_.fitBounds(this.cluster_.getBounds());
  }
};


/**
 * Adding the cluster icon to the dom.
 * @ignore
 */
ClusterIcon.prototype.onAdd = function() {
  this.div_ = document.createElement('DIV');
  if (this.visible_) {
    var pos = this.getPosFromLatLng_(this.center_);
    this.div_.style.cssText = this.createCss(pos);
    this.div_.innerHTML = this.sums_.text;
  }

  var panes = this.getPanes();
  panes.overlayMouseTarget.appendChild(this.div_);

  var that = this;
  google.maps.event.addDomListener(this.div_, 'click', function() {
    that.triggerClusterClick();
  });
};


/**
 * Returns the position to place the div dending on the latlng.
 *
 * @param {google.maps.LatLng} latlng The position in latlng.
 * @return {google.maps.Point} The position in pixels.
 * @private
 */
ClusterIcon.prototype.getPosFromLatLng_ = function(latlng) {
  var pos = this.getProjection().fromLatLngToDivPixel(latlng);

  if (typeof this.iconAnchor_ === 'object' && this.iconAnchor_.length === 2) {
    pos.x -= this.iconAnchor_[0];
    pos.y -= this.iconAnchor_[1];
  } else {
    pos.x -= parseInt(this.width_ / 2, 10);
    pos.y -= parseInt(this.height_ / 2, 10);
  }
  return pos;
};


/**
 * Draw the icon.
 * @ignore
 */
ClusterIcon.prototype.draw = function() {
  if (this.visible_) {
    var pos = this.getPosFromLatLng_(this.center_);
    this.div_.style.top = pos.y + 'px';
    this.div_.style.left = pos.x + 'px';
  }
};


/**
 * Hide the icon.
 */
ClusterIcon.prototype.hide = function() {
  if (this.div_) {
    this.div_.style.display = 'none';
  }
  this.visible_ = false;
};


/**
 * Position and show the icon.
 */
ClusterIcon.prototype.show = function() {
  if (this.div_) {
    var pos = this.getPosFromLatLng_(this.center_);
    this.div_.style.cssText = this.createCss(pos);
    this.div_.style.display = '';
  }
  this.visible_ = true;
};


/**
 * Remove the icon from the map
 */
ClusterIcon.prototype.remove = function() {
  this.setMap(null);
};


/**
 * Implementation of the onRemove interface.
 * @ignore
 */
ClusterIcon.prototype.onRemove = function() {
  if (this.div_ && this.div_.parentNode) {
    this.hide();
    this.div_.parentNode.removeChild(this.div_);
    this.div_ = null;
  }
};


/**
 * Set the sums of the icon.
 *
 * @param {Object} sums The sums containing:
 *   'text': (string) The text to display in the icon.
 *   'index': (number) The style index of the icon.
 */
ClusterIcon.prototype.setSums = function(sums) {
  this.sums_ = sums;
  this.text_ = sums.text;
  this.index_ = sums.index;
  if (this.div_) {
    this.div_.innerHTML = sums.text;
  }

  this.useStyle();
};


/**
 * Sets the icon to the the styles.
 */
ClusterIcon.prototype.useStyle = function() {
  var index = Math.max(0, this.sums_.index - 1);
  index = Math.min(this.styles_.length - 1, index);
  var style = this.styles_[index];
  this.url_ = style['url'];
  this.height_ = style['height'];
  this.width_ = style['width'];
  this.textColor_ = style['textColor'];
  this.anchor_ = style['anchor'];
  this.textSize_ = style['textSize'];
  this.backgroundPosition_ = style['backgroundPosition'];
  this.iconAnchor_ = style['iconAnchor'];
};


/**
 * Sets the center of the icon.
 *
 * @param {google.maps.LatLng} center The latlng to set as the center.
 */
ClusterIcon.prototype.setCenter = function(center) {
  this.center_ = center;
};


/**
 * Create the css text based on the position of the icon.
 *
 * @param {google.maps.Point} pos The position.
 * @return {string} The css style text.
 */
ClusterIcon.prototype.createCss = function(pos) {
  var style = [];
  style.push('background-image:url(' + this.url_ + ');');
  var backgroundPosition = this.backgroundPosition_ ? this.backgroundPosition_ : '0 0';
  style.push('background-position:' + backgroundPosition + ';');

  if (typeof this.anchor_ === 'object') {
    if (typeof this.anchor_[0] === 'number' && this.anchor_[0] > 0 &&
        this.anchor_[0] < this.height_) {
      style.push('height:' + (this.height_ - this.anchor_[0]) +
          'px; padding-top:' + this.anchor_[0] + 'px;');
    } else if (typeof this.anchor_[0] === 'number' && this.anchor_[0] < 0 &&
        -this.anchor_[0] < this.height_) {
      style.push('height:' + this.height_ + 'px; line-height:' + (this.height_ + this.anchor_[0]) +
          'px;');
    } else {
      style.push('height:' + this.height_ + 'px; line-height:' + this.height_ +
          'px;');
    }
    if (typeof this.anchor_[1] === 'number' && this.anchor_[1] > 0 &&
        this.anchor_[1] < this.width_) {
      style.push('width:' + (this.width_ - this.anchor_[1]) +
          'px; padding-left:' + this.anchor_[1] + 'px;');
    } else {
      style.push('width:' + this.width_ + 'px; text-align:center;');
    }
  } else {
    style.push('height:' + this.height_ + 'px; line-height:' +
        this.height_ + 'px; width:' + this.width_ + 'px; text-align:center;');
  }

  var txtColor = this.textColor_ ? this.textColor_ : 'black';
  var txtSize = this.textSize_ ? this.textSize_ : 11;

  style.push('cursor:pointer; top:' + pos.y + 'px; left:' +
      pos.x + 'px; color:' + txtColor + '; position:absolute; font-size:' +
      txtSize + 'px; font-family:Arial,sans-serif; font-weight:bold');
  return style.join('');
};


// Export Symbols for Closure
// If you are not going to compile with closure then you can remove the
// code below.
window['MarkerClusterer'] = MarkerClusterer;
MarkerClusterer.prototype['addMarker'] = MarkerClusterer.prototype.addMarker;
MarkerClusterer.prototype['addMarkers'] = MarkerClusterer.prototype.addMarkers;
MarkerClusterer.prototype['clearMarkers'] =
    MarkerClusterer.prototype.clearMarkers;
MarkerClusterer.prototype['fitMapToMarkers'] =
    MarkerClusterer.prototype.fitMapToMarkers;
MarkerClusterer.prototype['getCalculator'] =
    MarkerClusterer.prototype.getCalculator;
MarkerClusterer.prototype['getGridSize'] =
    MarkerClusterer.prototype.getGridSize;
MarkerClusterer.prototype['getExtendedBounds'] =
    MarkerClusterer.prototype.getExtendedBounds;
MarkerClusterer.prototype['getMap'] = MarkerClusterer.prototype.getMap;
MarkerClusterer.prototype['getMarkers'] = MarkerClusterer.prototype.getMarkers;
MarkerClusterer.prototype['getMaxZoom'] = MarkerClusterer.prototype.getMaxZoom;
MarkerClusterer.prototype['getStyles'] = MarkerClusterer.prototype.getStyles;
MarkerClusterer.prototype['getTotalClusters'] =
    MarkerClusterer.prototype.getTotalClusters;
MarkerClusterer.prototype['getTotalMarkers'] =
    MarkerClusterer.prototype.getTotalMarkers;
MarkerClusterer.prototype['redraw'] = MarkerClusterer.prototype.redraw;
MarkerClusterer.prototype['removeMarker'] =
    MarkerClusterer.prototype.removeMarker;
MarkerClusterer.prototype['removeMarkers'] =
    MarkerClusterer.prototype.removeMarkers;
MarkerClusterer.prototype['resetViewport'] =
    MarkerClusterer.prototype.resetViewport;
MarkerClusterer.prototype['repaint'] =
    MarkerClusterer.prototype.repaint;
MarkerClusterer.prototype['setCalculator'] =
    MarkerClusterer.prototype.setCalculator;
MarkerClusterer.prototype['setGridSize'] =
    MarkerClusterer.prototype.setGridSize;
MarkerClusterer.prototype['setMaxZoom'] =
    MarkerClusterer.prototype.setMaxZoom;
MarkerClusterer.prototype['onAdd'] = MarkerClusterer.prototype.onAdd;
MarkerClusterer.prototype['draw'] = MarkerClusterer.prototype.draw;

Cluster.prototype['getCenter'] = Cluster.prototype.getCenter;
Cluster.prototype['getSize'] = Cluster.prototype.getSize;
Cluster.prototype['getMarkers'] = Cluster.prototype.getMarkers;

ClusterIcon.prototype['onAdd'] = ClusterIcon.prototype.onAdd;
ClusterIcon.prototype['draw'] = ClusterIcon.prototype.draw;
ClusterIcon.prototype['onRemove'] = ClusterIcon.prototype.onRemove;


/***/ }),

/***/ "./src/app/view-timesheet/view-timesheet.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<title>Aspect View Timesheet</title>-->\n<title>View Timesheet</title>\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-content\">\n                        <h3 class=\"card-title\">View Timesheet</h3>\n                        <div class=\"toolbar\">\n                        </div>\n                        <form [formGroup]=\"viewTimesheetPage\">\r\n                            <div class=\"tab-content form-group\">\r\n                                <div class=\"panel-body\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-5\">\r\n                                            <div class=\"col-sm-2 pull-right\" [hidden]=\"!showhidecontrol\">\r\n                                                <button class=\"btn btn-success\" (click)=\"saveTimesheet()\" data-target=\"#myModal\">Save</button>\r\n                                            </div>\r\n                                            <span [hidden]=\"hidebuttons\">\r\n                                                <button class=\"btn pull-right\" [ngClass]=\"showhidecontrol ? 'btn-danger' : 'btn-success'\" (click)=\"toggleControl()\">{{showhidecontrol ? \"Cancel\" : \"Edit\"}}</button>\r\n                                            </span>\r\n                                            <table class=\"table table-responsive table-bordered table-hover\" style=\"float:left !important\">\r\n                                                <tbody>\r\n                                                    <tr>\r\n                                                        <td>Name</td>\r\n                                                        <td>{{ timesheetTrack.UserName }} </td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td>Job Number</td>\r\n                                                        <td>\r\n                                                            {{timesheetTrack.JobNumber }}\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                    <!--<tr>\r\n                                                        <td> Site </td>\r\n                                                        <td>--</td>\r\n                                                    </tr>-->\r\n                                                    <tr>\r\n                                                        <td>Start Time</td>\r\n                                                        <td id=\"showStartTime\" [hidden]=\"showhidecontrol\">{{timesheetTrack.StartTime | date: 'dd-MM-yyyy hh:mm a'}}</td>\r\n                                                        <td id=\"EditStartTime\" [hidden]=\"!showhidecontrol\">\r\n                                                            <!--<div class=\"label-floating\" [ngClass]=\"displayFieldCss(viewTimesheetPage, 'endtime')\">-->\r\n                                                            <md2-datepicker placeholder=\"{{timesheetTrack.StartTime | date: 'dd-MM-yyyy hh:mm a'}}\" formControlName=\"starttime\" name=\"starttime\" format=\"dd-MM-y HH:mm A\"  type=\"datetime\" startView=\"month\"></md2-datepicker> <!---->\r\n                                                            <app-field-error-display [displayError]=\"isFieldValid(viewTimesheetPage, 'starttime')\" errorMsg=\"Start Time is required.\">\r\n                                                            </app-field-error-display>\r\n                                                            <!--</div>-->\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td>End Time</td>\r\n                                                        <td [hidden]=\"showhidecontrol\">{{timesheetTrack.EndTime | date: 'dd-MM-yyyy hh:mm a'}}</td>\r\n                                                        <td [hidden]=\"!showhidecontrol\">\r\n                                                            <!--<div class=\"label-floating\" [ngClass]=\"displayFieldCss(viewTimesheetPage, 'endtime')\">-->\r\n                                                            <md2-datepicker placeholder=\"{{timesheetTrack.EndTime | date: 'dd-MM-yyyy hh:mm a'}}\" formControlName=\"endtime\" name=\"endtime\" format=\"dd-MM-y HH:mm A\"  type=\"datetime\" startView=\"month\"></md2-datepicker> <!---->\r\n                                                            <app-field-error-display [displayError]=\"isFieldValid(viewTimesheetPage, 'endtime')\" errorMsg=\"End Time should be greater than Start Time.\">\r\n                                                            </app-field-error-display>\r\n                                                            <!--</div>-->\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td>Break Time</td>\r\n                                                        <td [hidden]=\"showhidecontrol\">{{timesheetTrack.TotalBreakTime }}</td>\r\n                                                        <td [hidden]=\"!showhidecontrol\">\r\n                                                            <label #oldbrektime>{{timesheetTrack.TotalBreakTime}}</label>\r\n                                                            <span>\r\n                                                                <input type=\"text\" placeholder=\"Hour(s)\" name=\"breakhour\" formControlName=\"breakhour\" id=\"txthour\" maxlength=\"2\" size=\"2\" style=\"width:100px;\" class=\"number-decimal-only\" /> <!---->\r\n                                                                <input type=\"text\" placeholder=\"Minutes(s)\" name=\"breakminute\" formControlName=\"breakminute\" id=\"txtminute\" maxlength=\"2\" size=\"2\" style=\"width:100px;\" class=\"number-decimal-only\" /> <!---->\r\n                                                                <app-field-error-display [displayError]=\"isFieldValid(viewTimesheetPage, 'breakhour')\" errorMsg=\"Break hour required.\">\r\n                                                                </app-field-error-display>\r\n                                                                <app-field-error-display [displayError]=\"isFieldValid(viewTimesheetPage, 'breakminute')\" errorMsg=\"Break minute required.\">\r\n                                                                </app-field-error-display>\r\n                                                            </span>\r\n                                                            <!--<md2-datepicker placeholder=\"{{timesheetTrack.TotalBreakTime}}\" name=\"breaktime\" format=\"HH:mm\" type=\"time\" startView=\"clock\"></md2-datepicker>-->\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td>Total Time</td>\r\n                                                        <td>{{timesheetTrack.TotalWorkTime }}</td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </div>\r\n                                        <div class=\"col-sm-6\" style=\"margin-top:60px;\">\r\n                                            <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"true\" [zoom]=\"zoom\" style=\"height:325px;\">\r\n                                                <agm-marker-cluster *ngFor=\"let point of timesheetLatLong\">\r\n                                                    <ng-container *ngIf=\"point.StartLat != null || point.StartLong != null\">\r\n                                                        <agm-marker [latitude]=\"point.StartLat\" [longitude]=\"point.StartLong\" iconUrl=\"../../assets/img/startwo.png\">\r\n                                                            <agm-info-window>Start Time - {{point.StartTime | date: 'dd/MM/yyyy HH:mm:ss'}}</agm-info-window>\r\n                                                        </agm-marker>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"point.EndLat || point.EndLong\">\r\n                                                        <agm-marker [latitude]=\"point.EndLat\" [longitude]=\"point.EndLong\" iconUrl=\"../../assets/img/endwo.png\">\r\n                                                            <agm-info-window>End Time - {{point.EndTime | date: 'dd/MM/yyyy HH:mm:ss'}}</agm-info-window>\r\n                                                        </agm-marker>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"point.StartBreakLat || point.StartBreakLong\">\r\n                                                        <agm-marker [latitude]=\"point.StartBreakLat\" [longitude]=\"point.StartBreakLong\" iconUrl=\"../../assets/img/breakwo.png\">\r\n                                                            <agm-info-window>Break Start Time - {{point.BreakStartTime | date: 'dd/MM/yyyy HH:mm:ss'}}</agm-info-window>\r\n                                                        </agm-marker>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"point.EndBreakLat || point.EndBreakLong\">\r\n                                                        <agm-marker [latitude]=\"point.EndBreakLat\" [longitude]=\"point.EndBreakLong\" iconUrl=\"../../assets/img/endbreak.png\">\r\n                                                            <agm-info-window>Break End Time - {{point.BreakEndTime | date: 'dd/MM/yyyy HH:mm:ss'}}</agm-info-window>\r\n                                                        </agm-marker>\r\n                                                    </ng-container>\r\n                                                </agm-marker-cluster>\r\n                                            </agm-map>\r\n                                        </div>\r\n                                        <div class=\"col-sm-1\" style=\"margin-top:60px; padding-left:0px;\">\r\n                                            <h6><img src=\"../../assets/img/startwo.png\" style=\"height:22px;width:22px !important;\" /><b>Start</b></h6>\r\n                                            <h6><img src=\"../../assets/img/breakwo.png\" style=\"height:22px;width:22px !important;\" /><b>Break</b></h6>\r\n                                            <h6><img src=\"../../assets/img/endwo.png\" style=\"height:22px;width:22px !important;\" /><b>Stop</b></h6>\r\n                                            <h6><img src=\"../../assets/img/endbreak.png\" style=\"height:22px;width:22px !important;\" /><b>Job Site</b></h6>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-5\" [hidden]=\"hidebuttons\">\r\n                                            <div [hidden]=\"showhidecontrol\">\r\n                                                <button class=\"btn btn-success\" (click)=\"approveRejectTimesheet(1)\" data-target=\"#myModal\">Approve</button>\r\n                                                <button class=\"btn btn-danger\" (click)=\"approveRejectTimesheet(2)\">Reject</button>\r\n                                                <button class=\"btn btn-blue-grey pull-right\" (click)=\"goToTimesheet()\">Back</button>\r\n                                            </div>\r\n                                            <!--<div class=\"dropdown\">\r\n                            <button href=\"javascript:void(0);\" class=\"dropdown-toggle btn btn-primary btn-round btn-block\" data-toggle=\"dropdown\">\r\n                                Approve/Reject\r\n                                <b class=\"caret\"></b>\r\n                            </button>\r\n                            <ul class=\"dropdown-menu dropdown-menu-left\">\r\n                                <li>\r\n                                    <a data-toggle=\"modal\" (click)=\"approvedTimeSheet(true)\" data-target=\"#myModal\">Approve</a>\r\n                                </li>\r\n                                <li>\r\n                                    <a id=\"synUsers\" (click)=\"approvedTimeSheet(false)\">Reject</a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>-->\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/view-timesheet/view-timesheet.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/view-timesheet/view-timesheet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewTimesheetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_commonService__ = __webpack_require__("./src/app/services/commonService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_timesheetService__ = __webpack_require__("./src/app/services/timesheetService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__forms_validationforms_password_validator_component__ = __webpack_require__("./src/app/forms/validationforms/password-validator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ViewTimesheetComponent = /** @class */ (function () {
    function ViewTimesheetComponent(http, router, commonService, timesheetService, activatedRoute, formBuilder, datepipe, dateAdapter) {
        this.http = http;
        this.router = router;
        this.commonService = commonService;
        this.timesheetService = timesheetService;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.datepipe = datepipe;
        this.dateAdapter = dateAdapter;
        this.timesheetTrack = {};
        this.showhidecontrol = false;
        this.hidebuttons = true;
        this.times = { year: 31557600, month: 2629746, day: 86400, hour: 3600, minute: 60, second: 1 };
        this.viewTimesheetPage = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            starttime: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            endtime: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            breakhour: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            breakminute: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]()
        });
        dateAdapter.setLocale('en-GB');
    }
    ViewTimesheetComponent.prototype.isFieldValid = function (form, field) {
        return !form.get(field).valid && form.get(field).touched;
    };
    ViewTimesheetComponent.prototype.displayFieldCss = function (form, field) {
        return {
            'has-error': this.isFieldValid(form, field),
            'has-feedback': this.isFieldValid(form, field)
        };
    };
    ViewTimesheetComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (JSON.parse(sessionStorage.getItem('LogEmployee')) != null) {
            this.activatedRoute.queryParams.subscribe(function (params) {
                if (params['woasgtID'] == undefined) {
                    _this.router.navigate(['timesheet']);
                }
                else {
                    //var woAsgtID = params['woasgtID'];
                    _this.workOrdAsgtID = params['woasgtID'];
                    _this.tsheetDailyId = params['tsheetDailyID'];
                    //this.getWorkOrderDetails(this.workOrdAsgtID);
                    //this.getTimesheetDaily(this.workOrdAsgtID);
                    _this.getWorkOrderDetails(_this.tsheetDailyId);
                    _this.getTimesheetDaily(_this.tsheetDailyId);
                    var loggedinUserRoleId = JSON.parse(sessionStorage.getItem('LogEmployee')).RoleId;
                    if (loggedinUserRoleId == 6 || loggedinUserRoleId == 1) {
                        _this.hidebuttons = false;
                    }
                    else {
                        _this.hidebuttons = true;
                    }
                    //this.latitude = -33.865143
                    //this.longitude = 151.209900;
                    _this.zoom = 10;
                }
            });
            this.viewTimesheetPage = this.formBuilder.group({
                starttime: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                endtime: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                breakhour: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                breakminute: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            }, {
                validator: __WEBPACK_IMPORTED_MODULE_7__forms_validationforms_password_validator_component__["a" /* PasswordValidation */].StartEndDateDiffValidation // your validation method
            });
            $(document).ready(function () {
                //$('#txthour').val('00');
                //$('#txtminute').val('00');
                $('.number-decimal-only').keypress(function (e) {
                    var keyCode = e.which ? e.which : e.keyCode;
                    if ((keyCode != 46 || $(this).val().indexOf('.') != -1) &&
                        (keyCode < 48 || keyCode > 57))
                        return false;
                    return true;
                });
                $('#txthour').keyup(function () {
                    if ($(this).val() > 24) {
                        alert("Hours must be less or equal to 24.");
                        $(this).val('24');
                    }
                });
                $('#txtminute').keyup(function () {
                    if ($(this).val() > 59) {
                        alert("Minutes must be less than 60.");
                        $(this).val('59');
                    }
                    if ($(this).val() == 59 && $('#txthour').val() > 23) {
                        alert("Could not allowed break more than 24 hours.");
                        $('#txthour').val('23');
                    }
                });
                $("#txtminute").blur(function () {
                    var wtime = this.worktime;
                    //alert(wtime);
                });
            });
        }
        else {
            this.router.navigate(['pages/login']);
        }
    };
    ViewTimesheetComponent.prototype.showSwal = function (text) {
        __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()({
            type: 'success',
            text: text,
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-success'
        }).then(function () {
            //location.reload();
        });
    };
    ViewTimesheetComponent.prototype.showSwalAR = function (text) {
        __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()({
            type: 'success',
            text: text,
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-success'
        }).catch(__WEBPACK_IMPORTED_MODULE_8_sweetalert2___default.a.noop);
    };
    ViewTimesheetComponent.prototype.approvedTimeSheet = function (status) {
        //alert();
        this.userProfile = JSON.parse(sessionStorage.getItem('LogEmployee'));
        var contact = {
            ApprovedBy: this.userProfile.ID,
            ApprovalStatus: status
        };
        this.timesheetService.UpdateTimesheetTrack(this.commonService.baseApiUrl, this.workOrdAsgtID, contact).subscribe(function (data) {
            var datatSheet = JSON.stringify(data);
            var tSheetParse = JSON.parse(datatSheet);
            var tSheetList = JSON.parse(tSheetParse["_body"]);
            if (tSheetList != null) {
                $('.loader').hide();
            }
        });
    };
    ViewTimesheetComponent.prototype.goToTimesheet = function () {
        this.router.navigate(['timesheet']);
    };
    ViewTimesheetComponent.prototype.getWorkOrderDetails = function (asgtID) {
        var _this = this;
        $('.loader').show();
        this.timesheetService.GetTimesheetTrack(this.commonService.baseApiUrl, asgtID).subscribe(function (data) {
            var dataTsheet = JSON.stringify(data);
            var tSheetParse = JSON.parse(dataTsheet);
            var tSheetList = JSON.parse(tSheetParse["_body"]);
            if (tSheetList != null) {
                _this.timesheetTrack = tSheetList;
                _this.viewTimesheetPage.controls["starttime"].setValue(tSheetList.StartTime);
                _this.viewTimesheetPage.controls["endtime"].setValue(tSheetList.EndTime);
                var spiltTime = tSheetList.TotalBreakTime.split(":");
                _this.viewTimesheetPage.controls["breakhour"].setValue(spiltTime != null ? spiltTime[0] : '00');
                _this.viewTimesheetPage.controls["breakminute"].setValue(spiltTime != null ? spiltTime[1] : '00');
                $('.loader').hide();
            }
            else {
                $('.loader').hide();
            }
        });
    };
    ViewTimesheetComponent.prototype.getTimesheetDaily = function (asgtID) {
        var _this = this;
        $('.loader').show();
        this.timesheetService.GetTimesheetDaily(this.commonService.baseApiUrl, asgtID).subscribe(function (data) {
            var dataTsheet = JSON.stringify(data);
            var tSheetParse = JSON.parse(dataTsheet);
            var tSheetList = JSON.parse(tSheetParse["_body"]);
            if (tSheetList != null && tSheetList.length > 0) {
                var logLat = tSheetList.filter(function (map) { return map.StartLat && map.StartLong; });
                _this.latitude = logLat[0].StartLat;
                _this.longitude = logLat[0].StartLong;
                _this.timesheetLatLong = tSheetList;
                $('.loader').hide();
            }
            else {
                $('.loader').hide();
            }
        });
    };
    ViewTimesheetComponent.prototype.toggleControl = function () {
        this.showhidecontrol = !this.showhidecontrol;
    };
    ViewTimesheetComponent.prototype.saveTimesheet = function () {
        var _this = this;
        var starttime = this.datepipe.transform(this.viewTimesheetPage.controls["starttime"].value, 'yyyy/MM/dd HH:mm:ss');
        var endtime = this.datepipe.transform(this.viewTimesheetPage.controls["endtime"].value, 'yyyy/MM/dd HH:mm:ss');
        if (this.viewTimesheetPage.valid) {
            var contact = {
                StartTime: starttime,
                EndTime: endtime,
                WorkOrderAssignmentID: this.workOrdAsgtID,
                ID: this.tsheetDailyId
            };
            //let breaktimeinseconds: any = this.transform((this.breakhour * 3600) + (this.breakminute * 60));
            var breaktimeinseconds = this.viewTimesheetPage.controls["breakhour"].value + '-' + this.viewTimesheetPage.controls["breakminute"].value;
            this.timesheetService.UpdateTimesheetDaily(this.commonService.baseApiUrl, this.workOrdAsgtID + ',' + breaktimeinseconds, contact).subscribe(function (data) {
                var datatSheet = JSON.stringify(data);
                var tSheetParse = JSON.parse(datatSheet);
                var tSheetList = JSON.parse(tSheetParse["_body"]);
                if (tSheetList == true) {
                    _this.showhidecontrol = false;
                    _this.getWorkOrderDetails(_this.tsheetDailyId);
                    _this.showSwal("Timesheet saved successfully!!");
                    $('.loader').hide();
                }
            });
        }
        else {
            $('.loader').hide();
            this.validateAllFormFields(this.viewTimesheetPage);
        }
    };
    ViewTimesheetComponent.prototype.approveRejectTimesheet = function (status) {
        var _this = this;
        this.userProfile = JSON.parse(sessionStorage.getItem('LogEmployee'));
        var contact = {
            ApprovedBy: this.userProfile.ID,
            ApprovedStatus: status,
            ID: this.tsheetDailyId
        };
        this.timesheetService.ApproveRejectTimesheet(this.commonService.baseApiUrl, this.tsheetDailyId, contact).subscribe(function (data) {
            var datatSheet = JSON.stringify(data);
            var tSheetParse = JSON.parse(datatSheet);
            var tSheetList = JSON.parse(tSheetParse["_body"]);
            if (tSheetList != null) {
                if (status == 1) {
                    _this.showSwalAR("Timesheet approved!!");
                }
                else {
                    _this.showSwalAR("Timesheet rejected!!");
                }
                $('.loader').hide();
            }
        });
    };
    ViewTimesheetComponent.prototype.validateAllFormFields = function (formGroup) {
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
    ViewTimesheetComponent.prototype.setTime = function () {
        //this.viewTimesheetPage = this.formBuilder.group({
        //    starttime: [this.datepipe.transform(this.viewTimesheetPage.controls["starttime"].value, 'yyyy/MM/dd HH:mm:ss'), Validators.required],
        //    endtime: [this.datepipe.transform(this.viewTimesheetPage.controls["endtime"].value, 'yyyy/MM/dd HH:mm:ss'), Validators.required]
        //}, {
        //        validator: PasswordValidation.StartEndDateValidation // your validation method
        //    });
        //alert(this.selectedstartdate);
        //alert(this.selectedenddate);
        if (this.selectedstartdate != "undefined" && this.selectedenddate != "undefined") {
            if (this.selectedstartdate > this.selectedenddate) {
            }
            else {
                this.worktime = (this.selectedenddate - this.selectedstartdate).toString();
                if (this.worktime != 'NaN') {
                }
            }
        }
    };
    ViewTimesheetComponent.prototype.transform = function (seconds) {
        var time_string = '';
        var plural = '';
        for (var key in this.times) {
            if (Math.floor(seconds / this.times[key]) > 0) {
                if (Math.floor(seconds / this.times[key]) > 1) {
                    plural = 's';
                }
                else {
                    plural = '';
                }
                time_string += Math.floor(seconds / this.times[key]).toString() + ' ' + key.toString() + plural + ' ';
                seconds = seconds - this.times[key] * Math.floor(seconds / this.times[key]);
            }
        }
        return time_string;
    };
    ViewTimesheetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-timesheet',
            template: __webpack_require__("./src/app/view-timesheet/view-timesheet.component.html"),
            styles: [__webpack_require__("./src/app/view-timesheet/view-timesheet.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_commonService__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_5__services_timesheetService__["a" /* TimesheetService */], __WEBPACK_IMPORTED_MODULE_9__angular_common__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_commonService__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_5__services_timesheetService__["a" /* TimesheetService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_9__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* DateAdapter */]])
    ], ViewTimesheetComponent);
    return ViewTimesheetComponent;
}());



/***/ }),

/***/ "./src/app/view-timesheet/view-timesheet.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTimesheetModule", function() { return ViewTimesheetModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_timesheet_routing__ = __webpack_require__("./src/app/view-timesheet/view-timesheet.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_timesheet_component__ = __webpack_require__("./src/app/view-timesheet/view-timesheet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__agm_js_marker_clusterer__ = __webpack_require__("./node_modules/@agm/js-marker-clusterer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_md2__ = __webpack_require__("./node_modules/md2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__field_error_display_field_error_display_module__ = __webpack_require__("./src/app/field-error-display/field-error-display.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











//import { TimeDurationPickerModule } from 'angular2-time-duration-picker';
var ViewTimesheetModule = /** @class */ (function () {
    function ViewTimesheetModule() {
    }
    ViewTimesheetModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__view_timesheet_routing__["a" /* ViewTimesheetRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__app_module__["b" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_7__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyALhBWvI6EuL2Vul0ykYis51D_ckKtxVCc',
                    libraries: ["places"]
                }),
                __WEBPACK_IMPORTED_MODULE_8__agm_js_marker_clusterer__["a" /* AgmJsMarkerClustererModule */],
                __WEBPACK_IMPORTED_MODULE_9_md2__["a" /* Md2DatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_9_md2__["b" /* MdNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_10__field_error_display_field_error_display_module__["a" /* FieldErrorDisplayModule */]
                //TimeDurationPickerModule
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__view_timesheet_component__["a" /* ViewTimesheetComponent */]
            ]
        })
    ], ViewTimesheetModule);
    return ViewTimesheetModule;
}());



/***/ }),

/***/ "./src/app/view-timesheet/view-timesheet.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewTimesheetRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view_timesheet_component__ = __webpack_require__("./src/app/view-timesheet/view-timesheet.component.ts");

var ViewTimesheetRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__view_timesheet_component__["a" /* ViewTimesheetComponent */]
            }]
    }
];


/***/ })

});
//# sourceMappingURL=view-timesheet.module.chunk.js.map
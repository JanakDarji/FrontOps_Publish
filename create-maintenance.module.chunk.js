webpackJsonp(["create-maintenance.module"],{

/***/ "./node_modules/angular2-lightbox/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var lightbox_service_1 = __webpack_require__("./node_modules/angular2-lightbox/lightbox.service.js");
exports.Lightbox = lightbox_service_1.Lightbox;
var lightbox_config_service_1 = __webpack_require__("./node_modules/angular2-lightbox/lightbox-config.service.js");
exports.LightboxConfig = lightbox_config_service_1.LightboxConfig;
var lightbox_event_service_1 = __webpack_require__("./node_modules/angular2-lightbox/lightbox-event.service.js");
exports.LightboxEvent = lightbox_event_service_1.LightboxEvent;
exports.LIGHTBOX_EVENT = lightbox_event_service_1.LIGHTBOX_EVENT;
var lightbox_module_1 = __webpack_require__("./node_modules/angular2-lightbox/lightbox.module.js");
exports.LightboxModule = lightbox_module_1.LightboxModule;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angular2-lightbox/lightbox-config.service.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var LightboxConfig = (function () {
    function LightboxConfig() {
        this.fadeDuration = 0.7;
        this.resizeDuration = 0.5;
        this.fitImageInViewPort = true;
        this.positionFromTop = 20;
        this.showImageNumberLabel = false;
        this.alwaysShowNavOnTouchDevices = false;
        this.wrapAround = false;
        this.disableKeyboardNav = false;
        this.disableScrolling = false;
        this.centerVertically = false;
    }
    return LightboxConfig;
}());
LightboxConfig = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], LightboxConfig);
exports.LightboxConfig = LightboxConfig;
//# sourceMappingURL=lightbox-config.service.js.map

/***/ }),

/***/ "./node_modules/angular2-lightbox/lightbox-event.service.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Subject_1 = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var LIGHTBOX_EVENT;
(function (LIGHTBOX_EVENT) {
    LIGHTBOX_EVENT[LIGHTBOX_EVENT["CHANGE_PAGE"] = 1] = "CHANGE_PAGE";
    LIGHTBOX_EVENT[LIGHTBOX_EVENT["CLOSE"] = 2] = "CLOSE";
    LIGHTBOX_EVENT[LIGHTBOX_EVENT["OPEN"] = 3] = "OPEN";
})(LIGHTBOX_EVENT = exports.LIGHTBOX_EVENT || (exports.LIGHTBOX_EVENT = {}));
;
var LightboxEvent = (function () {
    function LightboxEvent() {
        this._lightboxEventSource = new Subject_1.Subject();
        this.lightboxEvent$ = this._lightboxEventSource.asObservable();
    }
    LightboxEvent.prototype.broadcastLightboxEvent = function (event) {
        this._lightboxEventSource.next(event);
    };
    return LightboxEvent;
}());
LightboxEvent = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], LightboxEvent);
exports.LightboxEvent = LightboxEvent;
function getWindow() {
    return window;
}
var LightboxWindowRef = (function () {
    function LightboxWindowRef() {
    }
    Object.defineProperty(LightboxWindowRef.prototype, "nativeWindow", {
        get: function () {
            return getWindow();
        },
        enumerable: true,
        configurable: true
    });
    return LightboxWindowRef;
}());
LightboxWindowRef = __decorate([
    core_1.Injectable()
], LightboxWindowRef);
exports.LightboxWindowRef = LightboxWindowRef;
//# sourceMappingURL=lightbox-event.service.js.map

/***/ }),

/***/ "./node_modules/angular2-lightbox/lightbox-overlay.component.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var lightbox_event_service_1 = __webpack_require__("./node_modules/angular2-lightbox/lightbox-event.service.js");
var LightboxOverlayComponent = (function () {
    function LightboxOverlayComponent(_elemRef, _rendererRef, _lightboxEvent, _documentRef) {
        var _this = this;
        this._elemRef = _elemRef;
        this._rendererRef = _rendererRef;
        this._lightboxEvent = _lightboxEvent;
        this._documentRef = _documentRef;
        this._classList = 'lightboxOverlay animation fadeInOverlay';
        this._subscription = this._lightboxEvent.lightboxEvent$.subscribe(function (event) { return _this._onReceivedEvent(event); });
    }
    LightboxOverlayComponent.prototype.ngAfterViewInit = function () {
        var fadeDuration = this.options.fadeDuration;
        this._rendererRef.setElementStyle(this._elemRef.nativeElement, '-webkit-animation-duration', fadeDuration + "s");
        this._rendererRef.setElementStyle(this._elemRef.nativeElement, 'animation-duration', fadeDuration + "s");
        this._sizeOverlay();
    };
    LightboxOverlayComponent.prototype.close = function () {
        // broadcast to itself and all others subscriber including the components
        this._lightboxEvent.broadcastLightboxEvent({ id: lightbox_event_service_1.LIGHTBOX_EVENT.CLOSE, data: null });
    };
    LightboxOverlayComponent.prototype.onResize = function () {
        this._sizeOverlay();
    };
    LightboxOverlayComponent.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    LightboxOverlayComponent.prototype._sizeOverlay = function () {
        var width = this._getOverlayWidth();
        var height = this._getOverlayHeight();
        this._rendererRef.setElementStyle(this._elemRef.nativeElement, 'width', width + "px");
        this._rendererRef.setElementStyle(this._elemRef.nativeElement, 'height', height + "px");
    };
    LightboxOverlayComponent.prototype._onReceivedEvent = function (event) {
        switch (event.id) {
            case lightbox_event_service_1.LIGHTBOX_EVENT.CLOSE:
                this._end();
                break;
            default:
                break;
        }
    };
    LightboxOverlayComponent.prototype._end = function () {
        var _this = this;
        this._classList = 'lightboxOverlay animation fadeOutOverlay';
        // queue self destruction after the animation has finished
        // FIXME: not sure if there is any way better than this
        setTimeout(function () {
            _this.cmpRef.destroy();
        }, this.options.fadeDuration * 1000);
    };
    LightboxOverlayComponent.prototype._getOverlayWidth = function () {
        return Math.max(this._documentRef.body.scrollWidth, this._documentRef.body.offsetWidth, this._documentRef.documentElement.clientWidth, this._documentRef.documentElement.scrollWidth, this._documentRef.documentElement.offsetWidth);
    };
    LightboxOverlayComponent.prototype._getOverlayHeight = function () {
        return Math.max(this._documentRef.body.scrollHeight, this._documentRef.body.offsetHeight, this._documentRef.documentElement.clientHeight, this._documentRef.documentElement.scrollHeight, this._documentRef.documentElement.offsetHeight);
    };
    return LightboxOverlayComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], LightboxOverlayComponent.prototype, "options", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], LightboxOverlayComponent.prototype, "cmpRef", void 0);
__decorate([
    core_1.HostListener('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LightboxOverlayComponent.prototype, "onResize", null);
LightboxOverlayComponent = __decorate([
    core_1.Component({
        selector: '[lb-overlay]',
        template: '',
        host: {
            '(click)': 'close()',
            '[class]': '_classList'
        }
    }),
    __param(3, core_1.Inject(platform_browser_1.DOCUMENT)),
    __metadata("design:paramtypes", [core_1.ElementRef,
        core_1.Renderer,
        lightbox_event_service_1.LightboxEvent, Object])
], LightboxOverlayComponent);
exports.LightboxOverlayComponent = LightboxOverlayComponent;
//# sourceMappingURL=lightbox-overlay.component.js.map

/***/ }),

/***/ "./node_modules/angular2-lightbox/lightbox.component.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var lightbox_event_service_1 = __webpack_require__("./node_modules/angular2-lightbox/lightbox-event.service.js");
var LightboxComponent = (function () {
    function LightboxComponent(_elemRef, _rendererRef, _lightboxEvent, _lightboxElem, _lightboxWindowRef, _sanitizer, _documentRef) {
        var _this = this;
        this._elemRef = _elemRef;
        this._rendererRef = _rendererRef;
        this._lightboxEvent = _lightboxEvent;
        this._lightboxElem = _lightboxElem;
        this._lightboxWindowRef = _lightboxWindowRef;
        this._sanitizer = _sanitizer;
        this._documentRef = _documentRef;
        // initialize data
        this.options = this.options || {};
        this.album = this.album || [];
        this.currentImageIndex = this.currentImageIndex || 0;
        this._windowRef = this._lightboxWindowRef.nativeWindow;
        // control the interactive of the directive
        this.ui = {
            // control the appear of the reloader
            // false: image has loaded completely and ready to be shown
            // true: image is still loading
            showReloader: true,
            // control the appear of the nav arrow
            // the arrowNav is the parent of both left and right arrow
            // in some cases, the parent shows but the child does not show
            showLeftArrow: false,
            showRightArrow: false,
            showArrowNav: false,
            // control whether to show the
            // page number or not
            showPageNumber: false,
            showCaption: false,
            classList: 'lightbox animation fadeIn'
        };
        this.content = {
            pageNumber: ''
        };
        this._event = {};
        this._lightboxElem = this._elemRef;
        this._event.subscription = this._lightboxEvent.lightboxEvent$
            .subscribe(function (event) { return _this._onReceivedEvent(event); });
    }
    LightboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.album.forEach(function (album) {
            if (album.caption) {
                album.caption = _this._sanitizer.sanitize(core_1.SecurityContext.HTML, album.caption);
            }
        });
    };
    LightboxComponent.prototype.ngAfterViewInit = function () {
        // need to init css value here, after the view ready
        // actually these values are always 0
        this._cssValue = {
            containerTopPadding: Math.round(this._getCssStyleValue(this._containerElem, 'padding-top')),
            containerRightPadding: Math.round(this._getCssStyleValue(this._containerElem, 'padding-right')),
            containerBottomPadding: Math.round(this._getCssStyleValue(this._containerElem, 'padding-bottom')),
            containerLeftPadding: Math.round(this._getCssStyleValue(this._containerElem, 'padding-left')),
            imageBorderWidthTop: Math.round(this._getCssStyleValue(this._imageElem, 'border-top-width')),
            imageBorderWidthBottom: Math.round(this._getCssStyleValue(this._imageElem, 'border-bottom-width')),
            imageBorderWidthLeft: Math.round(this._getCssStyleValue(this._imageElem, 'border-left-width')),
            imageBorderWidthRight: Math.round(this._getCssStyleValue(this._imageElem, 'border-right-width'))
        };
        if (this._validateInputData()) {
            this._prepareComponent();
            this._registerImageLoadingEvent();
        }
    };
    LightboxComponent.prototype.ngOnDestroy = function () {
        if (!this.options.disableKeyboardNav) {
            // unbind keyboard event
            this._disableKeyboardNav();
        }
        this._event.subscription.unsubscribe();
    };
    LightboxComponent.prototype.close = function ($event) {
        $event.stopPropagation();
        if ($event.target.classList.contains('lightbox') ||
            $event.target.classList.contains('lb-loader') ||
            $event.target.classList.contains('lb-close')) {
            this._lightboxEvent.broadcastLightboxEvent({ id: lightbox_event_service_1.LIGHTBOX_EVENT.CLOSE, data: null });
        }
    };
    LightboxComponent.prototype.nextImage = function () {
        if (this.album.length === 1) {
            return;
        }
        else if (this.currentImageIndex === this.album.length - 1) {
            this._changeImage(0);
        }
        else {
            this._changeImage(this.currentImageIndex + 1);
        }
    };
    LightboxComponent.prototype.prevImage = function () {
        if (this.album.length === 1) {
            return;
        }
        else if (this.currentImageIndex === 0 && this.album.length > 1) {
            this._changeImage(this.album.length - 1);
        }
        else {
            this._changeImage(this.currentImageIndex - 1);
        }
    };
    LightboxComponent.prototype._validateInputData = function () {
        if (this.album &&
            this.album instanceof Array &&
            this.album.length > 0) {
            for (var i = 0; i < this.album.length; i++) {
                // check whether each _nside
                // album has src data or not
                if (this.album[i].src) {
                    continue;
                }
                throw new Error('One of the album data does not have source data');
            }
        }
        else {
            throw new Error('No album data or album data is not correct in type');
        }
        // to prevent data understand as string
        // convert it to number
        if (isNaN(this.currentImageIndex)) {
            throw new Error('Current image index is not a number');
        }
        else {
            this.currentImageIndex = Number(this.currentImageIndex);
        }
        return true;
    };
    LightboxComponent.prototype._registerImageLoadingEvent = function () {
        var _this = this;
        var preloader = new Image();
        preloader.onload = function () {
            _this._onLoadImageSuccess();
        };
        var src = this.album[this.currentImageIndex].src;
        preloader.src = this._sanitizer.sanitize(core_1.SecurityContext.URL, src);
    };
    /**
     * Fire when the image is loaded
     */
    LightboxComponent.prototype._onLoadImageSuccess = function () {
        if (!this.options.disableKeyboardNav) {
            // unbind keyboard event during transition
            this._disableKeyboardNav();
        }
        var imageHeight;
        var imageWidth;
        var maxImageHeight;
        var maxImageWidth;
        var windowHeight;
        var windowWidth;
        var naturalImageWidth;
        var naturalImageHeight;
        // set default width and height of image to be its natural
        imageWidth = naturalImageWidth = this._imageElem.nativeElement.naturalWidth;
        imageHeight = naturalImageHeight = this._imageElem.nativeElement.naturalHeight;
        if (this.options.fitImageInViewPort) {
            windowWidth = this._windowRef.innerWidth;
            windowHeight = this._windowRef.innerHeight;
            maxImageWidth = windowWidth - this._cssValue.containerLeftPadding -
                this._cssValue.containerRightPadding - this._cssValue.imageBorderWidthLeft -
                this._cssValue.imageBorderWidthRight - 20;
            maxImageHeight = windowHeight - this._cssValue.containerTopPadding -
                this._cssValue.containerTopPadding - this._cssValue.imageBorderWidthTop -
                this._cssValue.imageBorderWidthBottom - 120;
            if (naturalImageWidth > maxImageWidth || naturalImageHeight > maxImageHeight) {
                if ((naturalImageWidth / maxImageWidth) > (naturalImageHeight / maxImageHeight)) {
                    imageWidth = maxImageWidth;
                    imageHeight = Math.round(naturalImageHeight / (naturalImageWidth / imageWidth));
                }
                else {
                    imageHeight = maxImageHeight;
                    imageWidth = Math.round(naturalImageWidth / (naturalImageHeight / imageHeight));
                }
            }
            this._rendererRef.setElementStyle(this._imageElem.nativeElement, 'width', imageWidth + "px");
            this._rendererRef.setElementStyle(this._imageElem.nativeElement, 'height', imageHeight + "px");
        }
        this._sizeContainer(imageWidth, imageHeight);
        if (this.options.centerVertically) {
            this._centerVertically(imageWidth, imageHeight);
        }
    };
    LightboxComponent.prototype._centerVertically = function (imageWidth, imageHeight) {
        var scrollOffset = this._documentRef.documentElement.scrollTop;
        var windowHeight = this._windowRef.innerHeight;
        var viewOffset = windowHeight / 2 - imageHeight / 2;
        var topDistance = scrollOffset + viewOffset;
        this._rendererRef.setElementStyle(this._lightboxElem.nativeElement, 'top', topDistance + "px");
    };
    LightboxComponent.prototype._sizeContainer = function (imageWidth, imageHeight) {
        var _this = this;
        var oldWidth = this._outerContainerElem.nativeElement.offsetWidth;
        var oldHeight = this._outerContainerElem.nativeElement.offsetHeight;
        var newWidth = imageWidth + this._cssValue.containerRightPadding + this._cssValue.containerLeftPadding +
            this._cssValue.imageBorderWidthLeft + this._cssValue.imageBorderWidthRight;
        var newHeight = imageHeight + this._cssValue.containerTopPadding + this._cssValue.containerBottomPadding +
            this._cssValue.imageBorderWidthTop + this._cssValue.imageBorderWidthBottom;
        if (oldWidth !== newWidth || oldHeight !== newHeight) {
            this._rendererRef.setElementStyle(this._outerContainerElem.nativeElement, 'width', newWidth + "px");
            this._rendererRef.setElementStyle(this._outerContainerElem.nativeElement, 'height', newHeight + "px");
            // bind resize event to outer container
            this._event.transitions = [];
            ['transitionend', 'webkitTransitionEnd', 'oTransitionEnd', 'MSTransitionEnd'].forEach(function (eventName) {
                _this._event.transitions.push(_this._rendererRef.listen(_this._outerContainerElem.nativeElement, eventName, function (event) {
                    if (event.target === event.currentTarget) {
                        _this._postResize(newWidth, newHeight);
                    }
                }));
            });
        }
        else {
            this._postResize(newWidth, newHeight);
        }
    };
    LightboxComponent.prototype._postResize = function (newWidth, newHeight) {
        // unbind resize event
        if (Array.isArray(this._event.transitions)) {
            this._event.transitions.forEach(function (eventHandler) {
                eventHandler();
            });
            this._event.transitions = [];
        }
        this._rendererRef.setElementStyle(this._dataContainerElem.nativeElement, 'width', newWidth + "px");
        this._showImage();
    };
    LightboxComponent.prototype._showImage = function () {
        this.ui.showReloader = false;
        this._updateNav();
        this._updateDetails();
        if (!this.options.disableKeyboardNav) {
            this._enableKeyboardNav();
        }
    };
    LightboxComponent.prototype._prepareComponent = function () {
        // add css3 animation
        this._addCssAnimation();
        // position the image according to user's option
        this._positionLightBox();
    };
    LightboxComponent.prototype._positionLightBox = function () {
        // @see https://stackoverflow.com/questions/3464876/javascript-get-window-x-y-position-for-scroll
        var top = (this._windowRef.pageYOffset || this._documentRef.documentElement.scrollTop) +
            this.options.positionFromTop;
        var left = this._windowRef.pageXOffset || this._documentRef.documentElement.scrollLeft;
        if (!this.options.centerVertically) {
            this._rendererRef.setElementStyle(this._lightboxElem.nativeElement, 'top', top + "px");
        }
        this._rendererRef.setElementStyle(this._lightboxElem.nativeElement, 'left', left + "px");
        this._rendererRef.setElementStyle(this._lightboxElem.nativeElement, 'display', 'block');
        // disable scrolling of the page while open
        if (this.options.disableScrolling) {
            this._rendererRef.setElementClass(this._documentRef.body, 'lb-disable-scrolling', true);
        }
    };
    /**
     * addCssAnimation add css3 classes for animate lightbox
     */
    LightboxComponent.prototype._addCssAnimation = function () {
        var resizeDuration = this.options.resizeDuration;
        var fadeDuration = this.options.fadeDuration;
        this._rendererRef.setElementStyle(this._lightboxElem.nativeElement, '-webkit-animation-duration', fadeDuration + "s");
        this._rendererRef.setElementStyle(this._lightboxElem.nativeElement, 'animation-duration', fadeDuration + "s");
        this._rendererRef.setElementStyle(this._outerContainerElem.nativeElement, '-webkit-transition-duration', resizeDuration + "s");
        this._rendererRef.setElementStyle(this._outerContainerElem.nativeElement, 'transition-duration', resizeDuration + "s");
        this._rendererRef.setElementStyle(this._dataContainerElem.nativeElement, '-webkit-animation-duration', fadeDuration + "s");
        this._rendererRef.setElementStyle(this._dataContainerElem.nativeElement, 'animation-duration', fadeDuration + "s");
        this._rendererRef.setElementStyle(this._imageElem.nativeElement, '-webkit-animation-duration', fadeDuration + "s");
        this._rendererRef.setElementStyle(this._imageElem.nativeElement, 'animation-duration', fadeDuration + "s");
        this._rendererRef.setElementStyle(this._captionElem.nativeElement, '-webkit-animation-duration', fadeDuration + "s");
        this._rendererRef.setElementStyle(this._captionElem.nativeElement, 'animation-duration', fadeDuration + "s");
        this._rendererRef.setElementStyle(this._numberElem.nativeElement, '-webkit-animation-duration', fadeDuration + "s");
        this._rendererRef.setElementStyle(this._numberElem.nativeElement, 'animation-duration', fadeDuration + "s");
    };
    LightboxComponent.prototype._end = function () {
        var _this = this;
        this.ui.classList = 'lightbox animation fadeOut';
        if (this.options.disableScrolling) {
            this._rendererRef.setElementClass(this._documentRef.body, 'lb-disable-scrolling', false);
        }
        setTimeout(function () {
            _this.cmpRef.destroy();
        }, this.options.fadeDuration * 1000);
    };
    LightboxComponent.prototype._updateDetails = function () {
        // update the caption
        if (typeof this.album[this.currentImageIndex].caption !== 'undefined' &&
            this.album[this.currentImageIndex].caption !== '') {
            this.ui.showCaption = true;
        }
        // update the page number if user choose to do so
        // does not perform numbering the page if the
        // array length in album <= 1
        if (this.album.length > 1 && this.options.showImageNumberLabel) {
            this.ui.showPageNumber = true;
            this.content.pageNumber = this._albumLabel();
        }
    };
    LightboxComponent.prototype._albumLabel = function () {
        // due to {this.currentImageIndex} is set from 0 to {this.album.length} - 1
        return "Image " + Number(this.currentImageIndex + 1) + " of " + this.album.length;
    };
    LightboxComponent.prototype._changeImage = function (newIndex) {
        this.currentImageIndex = newIndex;
        this._hideImage();
        this._registerImageLoadingEvent();
        this._lightboxEvent.broadcastLightboxEvent({ id: lightbox_event_service_1.LIGHTBOX_EVENT.CHANGE_PAGE, data: newIndex });
    };
    LightboxComponent.prototype._hideImage = function () {
        this.ui.showReloader = true;
        this.ui.showArrowNav = false;
        this.ui.showLeftArrow = false;
        this.ui.showRightArrow = false;
        this.ui.showPageNumber = false;
        this.ui.showCaption = false;
    };
    LightboxComponent.prototype._updateNav = function () {
        var alwaysShowNav = false;
        // check to see the browser support touch event
        try {
            this._documentRef.createEvent('TouchEvent');
            alwaysShowNav = (this.options.alwaysShowNavOnTouchDevices) ? true : false;
        }
        catch (e) {
        }
        // initially show the arrow nav
        // which is the parent of both left and right nav
        this._showArrowNav();
        if (this.album.length > 1) {
            if (this.options.wrapAround) {
                if (alwaysShowNav) {
                    // alternatives this.$lightbox.find('.lb-prev, .lb-next').css('opacity', '1');
                    this._rendererRef.setElementStyle(this._leftArrowElem.nativeElement, 'opacity', '1');
                    this._rendererRef.setElementStyle(this._rightArrowElem.nativeElement, 'opacity', '1');
                }
                // alternatives this.$lightbox.find('.lb-prev, .lb-next').show();
                this._showLeftArrowNav();
                this._showRightArrowNav();
            }
            else {
                if (this.currentImageIndex > 0) {
                    // alternatives this.$lightbox.find('.lb-prev').show();
                    this._showLeftArrowNav();
                    if (alwaysShowNav) {
                        // alternatives this.$lightbox.find('.lb-prev').css('opacity', '1');
                        this._rendererRef.setElementStyle(this._leftArrowElem.nativeElement, 'opacity', '1');
                    }
                }
                if (this.currentImageIndex < this.album.length - 1) {
                    // alternatives this.$lightbox.find('.lb-next').show();
                    this._showRightArrowNav();
                    if (alwaysShowNav) {
                        // alternatives this.$lightbox.find('.lb-next').css('opacity', '1');
                        this._rendererRef.setElementStyle(this._rightArrowElem.nativeElement, 'opacity', '1');
                    }
                }
            }
        }
    };
    LightboxComponent.prototype._showLeftArrowNav = function () {
        this.ui.showLeftArrow = true;
    };
    LightboxComponent.prototype._showRightArrowNav = function () {
        this.ui.showRightArrow = true;
    };
    LightboxComponent.prototype._showArrowNav = function () {
        this.ui.showArrowNav = (this.album.length !== 1);
    };
    LightboxComponent.prototype._enableKeyboardNav = function () {
        var _this = this;
        this._event.keyup = this._rendererRef.listenGlobal('document', 'keyup', function (event) {
            _this._keyboardAction(event);
        });
    };
    LightboxComponent.prototype._disableKeyboardNav = function () {
        if (this._event.keyup) {
            this._event.keyup();
        }
    };
    LightboxComponent.prototype._keyboardAction = function ($event) {
        var KEYCODE_ESC = 27;
        var KEYCODE_LEFTARROW = 37;
        var KEYCODE_RIGHTARROW = 39;
        var keycode = $event.keyCode;
        var key = String.fromCharCode(keycode).toLowerCase();
        if (keycode === KEYCODE_ESC || key.match(/x|o|c/)) {
            this._lightboxEvent.broadcastLightboxEvent({ id: lightbox_event_service_1.LIGHTBOX_EVENT.CLOSE, data: null });
        }
        else if (key === 'p' || keycode === KEYCODE_LEFTARROW) {
            if (this.currentImageIndex !== 0) {
                this._changeImage(this.currentImageIndex - 1);
            }
            else if (this.options.wrapAround && this.album.length > 1) {
                this._changeImage(this.album.length - 1);
            }
        }
        else if (key === 'n' || keycode === KEYCODE_RIGHTARROW) {
            if (this.currentImageIndex !== this.album.length - 1) {
                this._changeImage(this.currentImageIndex + 1);
            }
            else if (this.options.wrapAround && this.album.length > 1) {
                this._changeImage(0);
            }
        }
    };
    LightboxComponent.prototype._getCssStyleValue = function (elem, propertyName) {
        return parseFloat(this._windowRef
            .getComputedStyle(elem.nativeElement, null)
            .getPropertyValue(propertyName));
    };
    LightboxComponent.prototype._onReceivedEvent = function (event) {
        switch (event.id) {
            case lightbox_event_service_1.LIGHTBOX_EVENT.CLOSE:
                this._end();
                break;
            default:
                break;
        }
    };
    return LightboxComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], LightboxComponent.prototype, "album", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], LightboxComponent.prototype, "currentImageIndex", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], LightboxComponent.prototype, "options", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], LightboxComponent.prototype, "cmpRef", void 0);
__decorate([
    core_1.ViewChild('outerContainer'),
    __metadata("design:type", core_1.ElementRef)
], LightboxComponent.prototype, "_outerContainerElem", void 0);
__decorate([
    core_1.ViewChild('container'),
    __metadata("design:type", core_1.ElementRef)
], LightboxComponent.prototype, "_containerElem", void 0);
__decorate([
    core_1.ViewChild('leftArrow'),
    __metadata("design:type", core_1.ElementRef)
], LightboxComponent.prototype, "_leftArrowElem", void 0);
__decorate([
    core_1.ViewChild('rightArrow'),
    __metadata("design:type", core_1.ElementRef)
], LightboxComponent.prototype, "_rightArrowElem", void 0);
__decorate([
    core_1.ViewChild('navArrow'),
    __metadata("design:type", core_1.ElementRef)
], LightboxComponent.prototype, "_navArrowElem", void 0);
__decorate([
    core_1.ViewChild('dataContainer'),
    __metadata("design:type", core_1.ElementRef)
], LightboxComponent.prototype, "_dataContainerElem", void 0);
__decorate([
    core_1.ViewChild('image'),
    __metadata("design:type", core_1.ElementRef)
], LightboxComponent.prototype, "_imageElem", void 0);
__decorate([
    core_1.ViewChild('caption'),
    __metadata("design:type", core_1.ElementRef)
], LightboxComponent.prototype, "_captionElem", void 0);
__decorate([
    core_1.ViewChild('number'),
    __metadata("design:type", core_1.ElementRef)
], LightboxComponent.prototype, "_numberElem", void 0);
LightboxComponent = __decorate([
    core_1.Component({
        template: "\n    <div class=\"lb-outerContainer transition\" #outerContainer>\n      <div class=\"lb-container\" #container>\n        <img class=\"lb-image\" [src]=\"album[currentImageIndex].src\" class=\"lb-image animation fadeIn\" [hidden]=\"ui.showReloader\" #image>\n        <div class=\"lb-nav\" [hidden]=\"!ui.showArrowNav\" #navArrow>\n          <a class=\"lb-prev\" [hidden]=\"!ui.showLeftArrow\" (click)=\"prevImage()\" #leftArrow></a>\n          <a class=\"lb-next\"[hidden]=\"!ui.showRightArrow\" (click)=\"nextImage()\" #rightArrow></a>\n        </div>\n        <div class=\"lb-loader\" [hidden]=\"!ui.showReloader\" (click)=\"close($event)\">\n          <a class=\"lb-cancel\"></a>\n        </div>\n      </div>\n    </div>\n    <div class=\"lb-dataContainer\" [hidden]=\"ui.showReloader\" #dataContainer>\n      <div class=\"lb-data\">\n        <div class=\"lb-details\">\n          <span class=\"lb-caption animation fadeIn\" [hidden]=\"!ui.showCaption\" [innerHtml]=\"album[currentImageIndex].caption\" #caption>\n          </span>\n          <span class=\"lb-number animation fadeIn\" [hidden]=\"!ui.showPageNumber\" #number>{{ content.pageNumber }}</span>\n        </div>\n        <div class=\"lb-closeContainer\">\n          <a class=\"lb-close\" (click)=\"close($event)\"></a>\n        </div>\n      </div>\n    </div>",
        selector: '[lb-content]',
        host: {
            '(click)': 'close($event)',
            '[class]': 'ui.classList'
        }
    }),
    __param(6, core_1.Inject(platform_browser_1.DOCUMENT)),
    __metadata("design:paramtypes", [core_1.ElementRef,
        core_1.Renderer,
        lightbox_event_service_1.LightboxEvent,
        core_1.ElementRef,
        lightbox_event_service_1.LightboxWindowRef,
        platform_browser_1.DomSanitizer, Object])
], LightboxComponent);
exports.LightboxComponent = LightboxComponent;
//# sourceMappingURL=lightbox.component.js.map

/***/ }),

/***/ "./node_modules/angular2-lightbox/lightbox.module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var lightbox_service_1 = __webpack_require__("./node_modules/angular2-lightbox/lightbox.service.js");
var lightbox_component_1 = __webpack_require__("./node_modules/angular2-lightbox/lightbox.component.js");
var lightbox_config_service_1 = __webpack_require__("./node_modules/angular2-lightbox/lightbox-config.service.js");
var lightbox_event_service_1 = __webpack_require__("./node_modules/angular2-lightbox/lightbox-event.service.js");
var lightbox_overlay_component_1 = __webpack_require__("./node_modules/angular2-lightbox/lightbox-overlay.component.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var LightboxModule = (function () {
    function LightboxModule() {
    }
    return LightboxModule;
}());
LightboxModule = __decorate([
    core_1.NgModule({
        declarations: [lightbox_overlay_component_1.LightboxOverlayComponent, lightbox_component_1.LightboxComponent],
        providers: [
            lightbox_service_1.Lightbox,
            lightbox_config_service_1.LightboxConfig,
            lightbox_event_service_1.LightboxEvent,
            lightbox_event_service_1.LightboxWindowRef
        ],
        entryComponents: [lightbox_overlay_component_1.LightboxOverlayComponent, lightbox_component_1.LightboxComponent]
    })
], LightboxModule);
exports.LightboxModule = LightboxModule;
//# sourceMappingURL=lightbox.module.js.map

/***/ }),

/***/ "./node_modules/angular2-lightbox/lightbox.service.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var lightbox_component_1 = __webpack_require__("./node_modules/angular2-lightbox/lightbox.component.js");
var lightbox_config_service_1 = __webpack_require__("./node_modules/angular2-lightbox/lightbox-config.service.js");
var lightbox_event_service_1 = __webpack_require__("./node_modules/angular2-lightbox/lightbox-event.service.js");
var lightbox_overlay_component_1 = __webpack_require__("./node_modules/angular2-lightbox/lightbox-overlay.component.js");
var Lightbox = (function () {
    function Lightbox(_componentFactoryResolver, _injector, _applicationRef, _lightboxConfig, _lightboxEvent, _documentRef) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._injector = _injector;
        this._applicationRef = _applicationRef;
        this._lightboxConfig = _lightboxConfig;
        this._lightboxEvent = _lightboxEvent;
        this._documentRef = _documentRef;
    }
    Lightbox.prototype.open = function (album, curIndex, options) {
        var _this = this;
        if (curIndex === void 0) { curIndex = 0; }
        if (options === void 0) { options = {}; }
        var overlayComponentRef = this._createComponent(lightbox_overlay_component_1.LightboxOverlayComponent);
        var componentRef = this._createComponent(lightbox_component_1.LightboxComponent);
        var newOptions = {};
        // broadcast open event
        this._lightboxEvent.broadcastLightboxEvent(lightbox_event_service_1.LIGHTBOX_EVENT.OPEN);
        Object.assign(newOptions, this._lightboxConfig, options);
        // attach input to lightbox
        componentRef.instance.album = album;
        componentRef.instance.currentImageIndex = curIndex;
        componentRef.instance.options = newOptions;
        componentRef.instance.cmpRef = componentRef;
        // attach input to overlay
        overlayComponentRef.instance.options = newOptions;
        overlayComponentRef.instance.cmpRef = overlayComponentRef;
        // FIXME: not sure why last event is broadcasted (which is CLOSED) and make
        // lightbox can not be opened the second time.
        // Need to timeout so that the OPEN event is set before component is initialized
        setTimeout(function () {
            _this._applicationRef.attachView(overlayComponentRef.hostView);
            _this._applicationRef.attachView(componentRef.hostView);
            overlayComponentRef.onDestroy(function () {
                _this._applicationRef.detachView(overlayComponentRef.hostView);
            });
            componentRef.onDestroy(function () {
                _this._applicationRef.detachView(componentRef.hostView);
            });
            _this._documentRef.querySelector('body').appendChild(overlayComponentRef.location.nativeElement);
            _this._documentRef.querySelector('body').appendChild(componentRef.location.nativeElement);
        });
    };
    Lightbox.prototype._createComponent = function (ComponentClass) {
        var factory = this._componentFactoryResolver.resolveComponentFactory(ComponentClass);
        var component = factory.create(this._injector);
        return component;
    };
    return Lightbox;
}());
Lightbox = __decorate([
    core_1.Injectable(),
    __param(5, core_1.Inject(platform_browser_1.DOCUMENT)),
    __metadata("design:paramtypes", [core_1.ComponentFactoryResolver,
        core_1.Injector,
        core_1.ApplicationRef,
        lightbox_config_service_1.LightboxConfig,
        lightbox_event_service_1.LightboxEvent, Object])
], Lightbox);
exports.Lightbox = Lightbox;
//# sourceMappingURL=lightbox.service.js.map

/***/ }),

/***/ "./src/app/create-maintenance/create-maintenance.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\n    .dropdownview {\n        -webkit-appearance: menulist-button;\n    }\n        .card-title {\n        margin-left: 12px;\n        padding-top: 5px;\n    }\n    .btn-wo {padding:5px !important;}\r\n    .cust-table .table tbody > tr > td {\r\n        padding: 0px 8px;\r\n    }\n    ::ng-deep .cdk-overlay-container {\n        z-index: 1045 !important;\n    }\n    .cust-table-td {\r\n        padding: 0px 8px;\r\n    }\n\n      tr.strikeout td:before {\n        content: \" \";\n        position: absolute;\n        top: auto; margin-top:8px;\n        left: 16px;\n        border-bottom: 1px solid #ff0000;\n        width: 80%;\n    }\n\n    #td-actions:before {\n        content: \" \";\n        position: absolute;\n        top: auto; margin-top:8px;\n        left: 16px;\n        border-bottom: none;\n        width: 80%;\n    }\r\n     .strike-through-text {\n        color: #ff0000;\n    }\n     .padding21{\r\n         padding: 21px!important;\r\n     }\n\n     .dropdown-menu li > a:hover { background-color:#3b5998; cursor:pointer;}\n     .hdisabled {\r\n   pointer-events: none;\r\n   cursor: default;\r\n}\n\n     .m-list-img img{ width: 80px; height: 80px;}\n     .mt30{margin-top:30px;}\n     .mb10{margin-bottom:10px;}\n</style>\n<!--<title>Create Maintenance</title>-->\n<title>Maintenance</title>\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-content\">\n                        <h3 class=\"card-title\">Create Maintenance - {{mtStatus}}</h3>\n                        <div class=\"row col-sm-12\" >\r\n                            <!--<button class=\"btn btn-success pull-right\" [disabled]=\"mtStatus == 'Completed'? 'true':''\" (click)=\"createMaintenance('Unapproved')\">Save</button>-->\r\n                            <button class=\"btn pull-right\" [hidden]=\"!isEditMode\" *ngIf=\"mtStatus == 'Rejected'\" (click)=\"buttonEditClick()\">Edit</button>\r\n                            <button class=\"btn btn-danger pull-right\" *ngIf=\"mtStatus != 'Rejected' && mtStatus != 'Completed'\" (click)=\"goToMaintenance()\">Cancel</button>\r\n                            <div class=\"col-md-2 pull-right\" *ngIf=\"mtStatus == 'Draft' || isRejectedShow == true\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-lg-10 col-md-6 col-sm-3\" style=\"float:right;\">\r\n                                        <div class=\"dropdown\">\r\n                                            <button href=\"#pablo\" [disabled]=\"mtStatus == 'Completed'? 'true':''\" class=\"dropdown-toggle btn btn-facebook btn-round btn-block\" data-toggle=\"dropdown\">\r\n                                                <ng-container *ngIf=\"isEditMode == false\">\r\n                                                    Save\r\n                                                </ng-container>\r\n                                                <ng-container *ngIf=\"mtStatus == 'Draft' && isEditMode == true\">\r\n                                                    Submit\r\n                                                </ng-container>\r\n                                                <b class=\"caret\"></b>\r\n                                            </button>\r\n                                            <ul class=\"dropdown-menu ad-drop dropdown-menu-left\">\r\n                                                <li>\r\n                                                    <a href=\"javascript:void(0);\" (click)=\"createMaintenance('Draft')\">Save</a>\r\n                                                </li>\r\n                                                <li>\r\n                                                    <a href=\"javascript:void(0);\" (click)=\"createMaintenance('Unapproved')\">Submit</a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                            <div class=\"row col-sm-12\">\r\n                                <label *ngIf=\"mtQueryID\" class=\"pull-right\">MT {{mtQueryID}}</label>\r\n                            </div>\r\n                            <div class=\"toolbar\">\r\n                            </div>\r\n                            <form [formGroup]=\"mtForm\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-4\">\r\n                                        <div class=\"form-group label-floating cntEmpty\" [ngClass]=\"displayFieldCss(mtForm, 'workOrdNo')\">\r\n                                            <label class=\"control-label\">\r\n                                                Select Job-Wo\r\n                                                <small>(required)</small>\r\n                                            </label>\r\n                                            <input ngui-auto-complete formControlName=\"workOrdNo\" name=\"workOrdNo\" [source]=\"autoWorkOrdList\" value-property-name=\"ID\"\r\n                                                   display-property-name=\"WorkOrderNo\" [attr.disabled]=\"mtStatus == 'Approved' || mtStatus == 'Completed' || (!isRejectedShow && mtStatus == 'Rejected' )? 'disabled' : null\" [list-formatter]=\"myListFormatter\" class=\"form-control\"\r\n                                                   (valueChanged)=\"valueChanged($event)\" />\r\n                                            <app-field-error-display [displayError]=\"isFieldValid(mtForm, 'workOrdNo')\" errorMsg=\"Select job-wo\">\r\n                                            </app-field-error-display>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4\">\r\n                                        <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(mtForm, 'mType')\">\r\n                                            <label class=\"control-label\">\r\n                                                Maintenance Type\r\n                                                <small>(required)</small>\r\n                                            </label>\r\n                                            <select name=\"mType\" class=\"form-control dropdownview\" formControlName=\"mType\" [attr.disabled]=\"mtStatus == 'Completed' || (!isRejectedShow && mtStatus == 'Rejected') ? 'disabled' : null\">\r\n                                                <option disabled=\"\" selected=\"\">Select Maintenance Type</option>\r\n                                                <option *ngFor=\"let mType of mTypeList\" value={{mType.ID}}>\r\n                                                    {{mType.Title}}\r\n                                                </option>\r\n                                            </select>\r\n                                            <app-field-error-display [displayError]=\"isFieldValid(mtForm, 'mType')\" errorMsg=\"Select maintenance type\">\r\n                                            </app-field-error-display>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4\">\r\n                                        <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(mtForm, 'mPartType')\">\r\n                                            <label class=\"control-label\">\r\n                                                Part Type\r\n                                                <small>(required)</small>\r\n                                            </label>\r\n                                            <select name=\"mPartType\" class=\"form-control dropdownview\" formControlName=\"mPartType\" [attr.disabled]=\"mtStatus == 'Completed' || (!isRejectedShow && mtStatus == 'Rejected') ? 'disabled' : null\">\r\n                                                <option disabled=\"\" selected=\"\">Select Maintenance Part Type</option>\r\n                                                <option *ngFor=\"let mpType of mPartTypeList\" value={{mpType.ID}}>\r\n                                                    {{mpType.Title}}\r\n                                                </option>\r\n                                            </select>\r\n                                            <app-field-error-display [displayError]=\"isFieldValid(mtForm, 'mPartType')\" errorMsg=\"Select maintenance part type\">\r\n                                            </app-field-error-display>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12\">\r\n                                        <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(mtForm, 'description')\">\r\n                                            <label class=\"control-label\">\r\n                                                Additional Information\r\n                                                <small>(required)</small>\r\n                                            </label>\r\n                                            <span id='remainingC' class=\"pull-right\">Text Remaining : 240 </span>\r\n                                            <textarea class=\"form-control\" rows=\"6\" cols=\"50\" id=\"description\" formControlName=\"description\" maxlength=\"240\" [attr.disabled]=\"mtStatus == 'Completed' || (!isRejectedShow && mtStatus == 'Rejected') ? 'disabled' : null\"></textarea>\r\n                                            <app-field-error-display [displayError]=\"isFieldValid(mtForm, 'description')\" errorMsg=\"Additional information required\">\r\n                                            </app-field-error-display>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\" *ngIf=\"mtStatus != 'Completed'\">\r\n                                    <div class=\"col-sm-3\">\r\n                                        <div class=\"picture-container\">\r\n                                            <div class=\"picture\">\r\n                                                <label for=\"mtDocs\">\r\n                                                    <img src=\"../../assets/img/camera.png\" class=\"picture-src\" style=\"width:60px;height:60px; cursor: pointer;\" />\r\n                                                </label>\r\n                                                <input type=\"file\" style=\"display:none\" [attr.disabled]=\"mtStatus == 'Completed'? 'disabled':null\" id=\"mtDocs\" ng2FileSelect [uploader]=\"uploader\" multiple accept=\".jpeg,.jpg,.png\" /><!--accept=\".jpeg,.doc,.docx\"-->\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"panel-body\">\r\n                                        <table class=\"table table-bordered  table-responsive table-hover\" style=\"float:left !important\">\r\n                                            <tr *ngFor=\"let item of uploader.queue\">\r\n                                                <td><strong>{{ item?.file?.name }}</strong></td>\r\n                                                <td class=\"text-center\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\"><i class=\"fa fa-close\" (click)=\"item.remove()\"></i></td>\r\n                                            </tr>\r\n                                        </table>\r\n                                    </div>\r\n                                    <div class=\"col-sm-12\">\r\n                                        <div class=\"progress\" style=\"\">\r\n                                            <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\" *ngIf=\"(userProfile.RoleId == 1 || userProfile.RoleId == 2 || userProfile.RoleId == 6) && mtStatus == 'Unapproved'\">\r\n                                        <button class=\"btn btn-success\" (click)=\"approvedMaintenance('Approved')\">Approve</button>\r\n                                        <button class=\"btn btn-danger\" (click)=\"approvedMaintenance('Rejected')\">Reject</button>\r\n                                        <!--<button class=\"btn btn-success\" (click)=\"createMaintenance('Unapproved')\">Submit</button>\r\n                    <button class=\"btn btn-facebook btn-round btn-success pull-right\" data-toggle=\"modal\" data-target=\"#myComModal\" (click)=\"resetMaintenance()\">Complete</button>-->\r\n                                    </div>\r\n                                    <div class=\"col-md-2\" *ngIf=\"mtStatus == 'Approved' || mtStatus == 'Completed'\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-lg-10 col-md-6 col-sm-3\">\r\n                                                <div class=\"dropdown\">\r\n                                                    <button href=\"#pablo\" [disabled]=\"mtStatus == 'Completed'? 'true':''\" class=\"dropdown-toggle btn btn-facebook btn-round btn-block\" data-toggle=\"dropdown\">\r\n                                                        <ng-container *ngIf=\"mtStatus == 'Approved'\">\r\n                                                            Assign\r\n                                                        </ng-container>\r\n                                                        <ng-container *ngIf=\"mtStatus == 'Completed'\">\r\n                                                            Completed\r\n                                                        </ng-container>\r\n                                                            <b class=\"caret\"></b>\r\n                                                    </button>\r\n                                                    <ul class=\"dropdown-menu ad-drop dropdown-menu-left\">\r\n                                                        <li>\r\n                                                            <a href=\"javascript:void(0);\" (click)=\"isAssignModeShow()\">Assign</a>\r\n                                                        </li>\r\n                                                        <li>\r\n                                                            <a href=\"javascript:void(0);\" (click)=\"isComplateModeShow()\">Complete</a>\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n                        </div>\n                </div>\n            </div>\n        </div>\n        <!--<div class=\"row\"></div>-->\n        <div class=\"card\" *ngIf=\"isAssignShow == true || mtStatus == 'Approved' || mtStatus == 'Completed'\">\r\n            <div class=\"col-lg-12\" style=\"margin: -3px 0;\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6 col-sm-6 col-xs-10\">\r\n                        <h4 class=\"card-title mt30 mb10 pull-left\"><b>Work Orders {{maintenanceData.WorkOrderNo}}</b></h4>\r\n                    </div>\r\n                    <div class=\"col-md-6 col-sm-6 col-xs-2\">\r\n                        <ng-container *ngIf=\"mtStatus != 'Completed'\">\r\n                            <button data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"getAutocompleteUser()\" class=\" mt30 btn btn-simple btn-icon pull-right\" matTooltip=\"Maintenance Assignment\" [matTooltipPosition]=\"'left'\"> <i class=\"more-less glyphicon glyphicon-plus\"></i> </button>\r\n                        </ng-container>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"table-responsive cust-table\" style=\"margin-bottom:20px;\">\r\n                        <table class=\"table table-bordered  table-hover\" style=\"float:left !important;margin-bottom:0\">\r\n                            <tr>\r\n                                <th width=\"10%\">User</th>\r\n                                <th width=\"50%\">Notes</th>\r\n                                <th width=\"9%\">Status</th>\r\n                                <th width=\"22%\">Images</th>\r\n                                <th></th>\r\n                            </tr>\r\n                            <tr *ngFor=\"let mtenance of maintenanceList\" [ngClass]=\"mtenance.IsDeleted == true ? 'strikeout strike-through-text':''\">\r\n                                <td>{{mtenance.UserName}}</td>\r\n                                <td>{{mtenance.Description}}</td>\r\n                                <td>\r\n                                    <ng-container *ngIf=\"mtenance.IsDeleted != true\">\r\n                                        <button class=\"btn btn-success btn-icon edit btn-xs\">\r\n                                            {{mtenance.MaintenanceStatus}}\r\n                                        </button>\r\n                                    </ng-container>\r\n                                    <ng-container *ngIf=\"mtenance.IsDeleted == true\">\r\n                                        <button class=\"btn btn-danger btn-icon edit btn-xs\">\r\n                                            Deleted\r\n                                        </button>\r\n                                    </ng-container>\r\n                                </td>\r\n                                <td class=\"m-list-img\">\r\n                                    <!--<ng-container *ngFor=\"let mtTask of mtenance.MaintenanceTaskDocumentList\">\r\n                                        <img src=\"{{mtTask.FilePath}}\" title=\"\" class=\"img-responsive img-thumbnail\" />\r\n                                    </ng-container>-->\r\n                                    <ng-container *ngFor=\"let mtTask of imageList; let i=index\">\r\n                                        <img [src]=\"mtTask.thumb\" title=\"\" (click)=\"open(i)\" />\r\n                                    </ng-container>\r\n                                </td>\r\n                                <td class=\"text-center\" id=\"td-actions\" [ngClass]=\"mtenance.IsDeleted == true ? 'padding21':''\">\r\n                                    <ng-container *ngIf=\"mtenance.MaintenanceTaskNote != 'null' && mtenance.MaintenanceTaskNote != null\">\r\n                                        <button class=\"btn btn-simple btn-icon btn-wo edit btn-wo\" (click)=\"showMaintenanceTaskNote(mtenance.MaintenanceTaskNote)\" data-toggle=\"modal\" data-target=\"#smallAlertModal\"><i class=\"material-icons\">comment</i> </button>\r\n                                    </ng-container>\r\n                                    <ng-container *ngIf=\"mtenance.IsDeleted != true\">\r\n                                        <button class=\"btn btn-simple btn-warning btn-icon btn-wo edit btn-wo\" (click)=\"viewMaintenanceAssignment(mtenance.ID)\" data-toggle=\"modal\" data-target=\"#myModal\"><i class=\"material-icons\">dvr</i> </button>\r\n                                        <i class=\"fa fa-close\" style=\"cursor: pointer;\" (click)=\"deleteMaintenanceAssignment(mtenance.ID)\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\"></i>\r\n                                    </ng-container>\r\n                                </td>\r\n                            </tr>\r\n                        </table>\r\n                    </div>\r\n                    <button type=\"submit\" class=\"btn btn-info\" *ngIf=\"mtStatus != 'Completed'\" (click)=\"sendEmailWorkOrderAssignment()\" [disabled]=\"isSend\" style=\"float:left\">Send</button>\r\n                    <span *ngIf=\"sendDateTime\" style=\"float: left;padding: 20px 7px;\"> {{sendDateTime | date: 'dd/MM/yyyy HH:mm:ss' }} </span>\r\n                </div>\r\n            </div>\r\n        </div>\n        <div *ngIf=\"isComplateShow == true || mtStatus == 'Completed'\">\r\n            <div class=\"card\" style=\"margin: -3px 0;\">\r\n                <form [formGroup]=\"mtComPage\">\r\n                    <div class=\"col-lg-12\">\r\n                        <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(mtComPage, 'comDesc')\">\r\n                            <label class=\"control-label\">REASONS:</label>\r\n                            <textarea class=\"form-control\" [attr.disabled]=\"mtStatus == 'Completed'? 'disabled':null\" rows=\"4\" cols=\"50\" id=\"comDesc\" formControlName=\"comDesc\"></textarea>\r\n                            <app-field-error-display [displayError]=\"isFieldValid(mtComPage, 'comDesc')\" errorMsg=\"Reasons is required.\"> </app-field-error-display>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-12\" *ngIf=\"mtStatus != 'Completed'\">\r\n                        <button type=\"submit\" id=\"btnSubmit\" class=\"btn btn-success\" (click)=\"completeMaintenance('Completed')\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\n        <div class=\"row\">\r\n            <br /><br /><br />\r\n        </div>\n        <div class=\"row\">\n            <ng-container *ngFor=\"let mtDoc of mtDocList;let idx=index\">\n                <div class=\"col-lg-4 col-md-6\">\n                    <div class=\"card card-product\">\n                        <div class=\"card-image\" data-header-animation=\"true\">\n                            <a href=\"#pablo\">\n                                <img class=\"img\" src=\"{{mtDoc.FilePath}}\">\n                            </a>\n                        </div>\n                        <div class=\"card-content\">\n                            <div class=\"card-actions\">\n                                <button type=\"button\" class=\"btn btn-danger btn-simple fix-broken-card\">\n                                    <i class=\"material-icons\">build</i> Fix Header!\n                                </button>\n                                <a target=\"_blank\" href=\"{{mtDoc.FilePath}}\" class=\"btn btn-default btn-simple\" matTooltip=\"View\" [matTooltipPosition]=\"'below'\">\n                                    <i class=\"material-icons\">art_track</i>\n                                </a>\n                                <button type=\"button\" [disabled]=\"mtStatus == 'Completed'? 'true':''\" class=\"btn btn-danger btn-simple\" (click)=\"removeMaintenanceDocument(mtDoc.ID, mtDoc.WorkOrderNo, mtDoc.FileName)\" matTooltip=\"Remove\" [matTooltipPosition]=\"'below'\">\n                                    <i class=\"material-icons\">close</i>\n                                </button>\n                            </div>\n                            <div class=\"card-description\">\n                                Uploaded By {{mtDoc.Username}}\n                                <p>{{mtDoc.UploadDate | date: ' h:mm a dd/MM/yyyy'}}</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <ng-container *ngIf=\"(idx + 1) % 3 == 0\">\n                    <div class=\"row\"></div>\n                </ng-container>\n            </ng-container>\n        </div>\n    </div>\n</div>\n\n<!-- Classic Modal -->\r\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"wizard-container\">\r\n            <div class=\"wizard-card\" data-color=\"rose\" id=\"wizardProfile\">\r\n                <form [formGroup]=\"mtAssPage\">\r\n                    <div class=\"modal-content\">\r\n                        <div class=\"modal-header\">\r\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"> <i class=\"material-icons\">clear</i> </button>\r\n                            <h4 class=\"modal-title\">Assign User</h4>\r\n                        </div>\r\n                        <div class=\"modal-body\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-12\">\r\n                                    <div class=\"form-group label-floating cntEmpty\" [ngClass]=\"displayFieldCss(mtAssPage, 'userName')\">\r\n                                        <label class=\"control-label\">Start typing to select user</label>\r\n                                        <input ngui-auto-complete formControlName=\"userName\" name=\"userName\" [source]=\"autoUsers\" value-property-name=\"ID\"\r\n                                               display-property-name=\"UserName\" [list-formatter]=\"myUserListFormatter\" class=\"form-control\"\r\n                                               (valueChanged)=\"autoValueChanged($event)\" />\r\n                                        <app-field-error-display [displayError]=\"isFieldValid(mtAssPage, 'userName')\" errorMsg=\"Select username.\"> </app-field-error-display>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-12\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">Add notes or information here</label>\r\n                                        <textarea class=\"form-control\" rows=\"4\" cols=\"50\" id=\"description\" formControlName=\"description\"></textarea>\r\n                                        <!--<app-field-error-display [displayError]=\"isFieldValid(mtAssPage, 'description')\" errorMsg=\"Notes is required.\"> </app-field-error-display>-->\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-6\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">RateType</label>\r\n                                        <select placeholder=\"Assign rate\" formControlName=\"ratetype\" name=\"ratetype\" class=\"form-control dropdownview\">\r\n                                            <option value=\"1\" selected>Hourly</option>\r\n                                            <option value=\"2\">Fixed</option>\r\n                                            <option value=\"3\">Boxed</option>\r\n                                        </select>\r\n                                        <!--<app-field-error-display [displayError]=\"isFieldValid(mtAssPage, 'ratetype')\" errorMsg=\"RateType is required.\"> </app-field-error-display>-->\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-lg-6\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">Rate</label>\r\n                                        <input type=\"text\" formControlName=\"rate\" name=\"rate\" class=\"form-control number-decimal-only\" />\r\n                                        <!--<app-field-error-display [displayError]=\"isFieldValid(mtAssPage, 'rate')\" errorMsg=\"Rate is required.\"> </app-field-error-display>-->\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-6\">\r\n                                    <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(mtAssPage, 'fromdate')\">\r\n                                        <br />\r\n                                        <md2-datepicker placeholder=\"From Date\" formControlName=\"fromdate\" name=\"fromdate\" format=\"dd/MM/y HH:mm A\" type=\"datetime\" startView=\"month\"></md2-datepicker>\r\n                                        <app-field-error-display [displayError]=\"isFieldValid(mtAssPage, 'fromdate')\" errorMsg=\"From Date is required.\"> </app-field-error-display>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-lg-6\">\r\n                                    <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(mtAssPage, 'todate')\">\r\n                                        <br />\r\n                                        <md2-datepicker placeholder=\"To Date\" formControlName=\"todate\" name=\"todate\" format=\"dd/MM/y HH:mm A\" type=\"datetime\" startView=\"month\"></md2-datepicker>\r\n                                        <app-field-error-display [displayError]=\"isFieldValid(mtAssPage, 'todate')\" errorMsg=\"To date should be greater than From date\"> </app-field-error-display>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <br />\r\n                                <div class=\"pull-right\">\r\n                                    <button type=\"submit\" id=\"btnSubmit\" class=\"btn btn-success\" (click)=\"createMaintenanceAssignment()\">Submit</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--  End Modal -->\r\n\r\n<div class=\"modal fade\" id=\"myComModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n        <form [formGroup]=\"mtComPage\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"> <i class=\"material-icons\">clear</i> </button>\r\n                    <h4 class=\"modal-title\">Complete Maintenance</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-12\">\r\n                            <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(mtComPage, 'comDesc')\">\r\n                                <label class=\"control-label\">Description</label>\r\n                                <textarea class=\"form-control\" rows=\"4\" cols=\"50\" id=\"comDesc\" formControlName=\"comDesc\"></textarea>\r\n                                <app-field-error-display [displayError]=\"isFieldValid(mtComPage, 'comDesc')\" errorMsg=\"Description is required.\"> </app-field-error-display>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <br />\r\n                        <div class=\"pull-right\">\r\n                            <button type=\"submit\" id=\"btnSubmit\" class=\"btn btn-success\" (click)=\"completeMaintenance('Completed')\">Submit</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n <!-- small modal -->\r\n<div class=\"modal fade\" id=\"smallAlertModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-small \">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><i class=\"material-icons\">clear</i></button>\r\n                <h4 class=\"modal-title\">Note</h4>\r\n            </div>\r\n            <div class=\"modal-body text-center\">\r\n                <h6>{{maintenanceTaskNote}} </h6>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--    end small modal -->"

/***/ }),

/***/ "./src/app/create-maintenance/create-maintenance.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/create-maintenance/create-maintenance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateMaintenanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_commonService__ = __webpack_require__("./src/app/services/commonService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_maintenanceService__ = __webpack_require__("./src/app/services/maintenanceService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__forms_validationforms_password_validator_component__ = __webpack_require__("./src/app/forms/validationforms/password-validator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_lightbox__ = __webpack_require__("./node_modules/angular2-lightbox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_lightbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_lightbox__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var CreateMaintenanceComponent = /** @class */ (function () {
    function CreateMaintenanceComponent(http, router, commonService, maintenanceService, activatedRoute, formBuilder, datepipe, lightbox, lightboxEvent, lighboxConfig) {
        this.http = http;
        this.router = router;
        this.commonService = commonService;
        this.maintenanceService = maintenanceService;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.datepipe = datepipe;
        this.lightbox = lightbox;
        this.lightboxEvent = lightboxEvent;
        this.lighboxConfig = lighboxConfig;
        this.mtForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            workOrdNo: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            mType: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            mPartType: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            description: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            flmtdoc: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]()
        });
        this.mtComPage = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            comDesc: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
        });
        this.isAssignShow = false;
        this.isComplateShow = false;
        this.isRejectedShow = false;
        this.imageList = [];
        this.mtAssPage = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            userName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            description: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            ratetype: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            rate: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            fromdate: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            todate: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
        });
        this.uploader = new __WEBPACK_IMPORTED_MODULE_8_ng2_file_upload__["FileUploader"]({ url: this.commonService.baseApiUrl + "AddMaintenanceDocument/", itemAlias: 'file' });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
    }
    CreateMaintenanceComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    CreateMaintenanceComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    CreateMaintenanceComponent.prototype.isFieldValid = function (form, field) {
        return !form.get(field).valid && form.get(field).touched;
    };
    CreateMaintenanceComponent.prototype.displayFieldCss = function (form, field) {
        return {
            'has-error': this.isFieldValid(form, field),
            'has-feedback': this.isFieldValid(form, field)
        };
    };
    CreateMaintenanceComponent.prototype.showSwal = function (text) {
        __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()({
            type: 'success',
            text: text,
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-success'
        }).catch(__WEBPACK_IMPORTED_MODULE_7_sweetalert2___default.a.noop);
    };
    CreateMaintenanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (JSON.parse(sessionStorage.getItem('LogEmployee')) != null) {
            this.userProfile = JSON.parse(sessionStorage.getItem('LogEmployee'));
            this.getMaintenanceType();
            this.getMaintenancePartType();
            this.getWorkOrderForMaintenance();
            this.getAutocompleteUser();
            $(document).ready(function () {
                jQuery(".md2-datepicker-arrow").hide();
                $(".cntEmpty").removeClass("is-empty");
                $('#description').keyup(function () {
                    if (this.value.length > 240) {
                        return false;
                    }
                    $("#remainingC").html("Text Remaining : " + (240 - this.value.length));
                });
                $('.number-decimal-only').keypress(function (e) {
                    var keyCode = e.which ? e.which : e.keyCode;
                    if ((keyCode != 46 || $(this).val().indexOf('.') != -1) &&
                        (keyCode < 48 || keyCode > 57))
                        return false;
                    return true;
                });
            });
            this.activatedRoute.queryParams.subscribe(function (params) {
                if (params['mtid'] == undefined) {
                    _this.mtStatus = "Draft";
                    _this.isEditMode = false;
                }
                else {
                    _this.mtQueryID = params['mtid'];
                    _this.getMaintenanceDetails(_this.mtQueryID);
                    _this.getMaintenanceDocument(_this.mtQueryID);
                    _this.isEditMode = true;
                }
            });
            var crntUsr = JSON.parse(sessionStorage.getItem('LogEmployee'));
            this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
            this.uploader.onBuildItemForm = function (fileItem, form) {
                form.append('MaintenanceID', _this.mtprimID > 0 ? _this.mtprimID : _this.mtQueryID);
                form.append('UserId', crntUsr.ID);
                form.append('WorkOrderNo', _this.selectedWOrd == undefined ? _this.maintenanceData.WorkOrderNo : _this.selectedWOrd.WorkOrderNo);
            };
            this.uploader.onSuccessItem = function (item, response, status, headers) {
                _this.getMaintenanceDocument(_this.mtprimID > 0 ? _this.mtprimID : _this.mtQueryID);
            };
            this.uploader.onCompleteAll = function () {
                _this.uploader.clearQueue();
            };
            this.mtForm = this.formBuilder.group({
                workOrdNo: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                mType: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                mPartType: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
            });
            this.mtAssPage = this.formBuilder.group({
                userName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                description: null,
                ratetype: null,
                rate: null,
                fromdate: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                todate: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
            }, {
                validator: __WEBPACK_IMPORTED_MODULE_9__forms_validationforms_password_validator_component__["a" /* PasswordValidation */].DateValidation // your validation method
            });
            this.mtComPage = this.formBuilder.group({
                comDesc: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
            });
        }
        else {
            this.router.navigate(['pages/login']);
        }
    };
    CreateMaintenanceComponent.prototype.ngAfterViewInit = function () {
        var breakCards = true;
        if (breakCards === true) {
            // We break the cards headers if there is too much stress on them :-)
            $('[data-header-animation="true"]').each(function () {
                var $fix_button = $(this);
                var $card = $(this).parent('.card');
                $card.find('.fix-broken-card').click(function () {
                    var $header = $(this).parent().parent().siblings('.card-header, .card-image');
                    $header.removeClass('hinge').addClass('fadeInDown');
                    $card.attr('data-count', 0);
                    setTimeout(function () {
                        $header.removeClass('fadeInDown animate');
                    }, 480);
                });
                $card.mouseenter(function () {
                    var $this = $(this);
                    var hover_count = parseInt($this.attr('data-count'), 10) + 1 || 0;
                    $this.attr('data-count', hover_count);
                    if (hover_count >= 20) {
                        $(this).children('.card-header, .card-image').addClass('hinge animated');
                    }
                });
            });
        }
    };
    CreateMaintenanceComponent.prototype.getMaintenancePartType = function () {
        var _this = this;
        $('.loader').show();
        return this.maintenanceService.GetActiveMaintenancePartType(this.commonService.baseApiUrl).subscribe(function (data) {
            var dataMptp = JSON.stringify(data);
            var mpTpParse = JSON.parse(dataMptp);
            var mpTpList = JSON.parse(mpTpParse["_body"]);
            if (mpTpList != null) {
                _this.mPartTypeList = mpTpList;
                $('.loader').hide();
            }
        });
    };
    CreateMaintenanceComponent.prototype.resetMaintenance = function () {
        this.mtComPage.reset();
    };
    CreateMaintenanceComponent.prototype.getMaintenanceDocument = function (mtID) {
        var _this = this;
        $('.loader').show();
        return this.maintenanceService.GetMaintenanceDocument(this.commonService.baseApiUrl, mtID).subscribe(function (data) {
            var dataMptp = JSON.stringify(data);
            var mpTpParse = JSON.parse(dataMptp);
            var mpTpList = JSON.parse(mpTpParse["_body"]);
            if (mpTpList != null) {
                _this.mtDocList = mpTpList;
                $('.loader').hide();
            }
        });
    };
    CreateMaintenanceComponent.prototype.getMaintenanceDetails = function (mtID) {
        var _this = this;
        localStorage.removeItem("mtAstID");
        $('.loader').show();
        return this.maintenanceService.GetMaintenanceByID(this.commonService.baseApiUrl, mtID).subscribe(function (data) {
            var dataMt = JSON.stringify(data);
            var mTParse = JSON.parse(dataMt);
            var mTList = JSON.parse(mTParse["_body"]);
            if (mTList != null) {
                _this.maintenanceData = mTList;
                var elems = document.querySelectorAll(".label-floating");
                if (elems != null) {
                    [].forEach.call(elems, function (el) {
                        el.classList.remove("is-empty");
                    });
                }
                $("#remainingC").html("Text Remaining : " + (240 - _this.maintenanceData.Description.length));
                _this.mtForm.controls["workOrdNo"].setValue(_this.maintenanceData.WorkOrderNo);
                _this.mtForm.controls["mType"].setValue(_this.maintenanceData.MaintenanceTypeId);
                _this.mtForm.controls["mPartType"].setValue(_this.maintenanceData.MaintenancePartTypeId);
                _this.mtForm.controls["description"].setValue(_this.maintenanceData.Description);
                _this.mtComPage.controls["comDesc"].setValue(_this.maintenanceData.CompleteDescription);
                _this.mtStatus = _this.maintenanceData.Status;
                _this.getMaintenanceAssignment(mtID);
                $('.loader').hide();
            }
        });
    };
    CreateMaintenanceComponent.prototype.removeMaintenanceDocument = function (mdId, mdWONo, mdFlName) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()({
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
            return _this.maintenanceService.RemoveMaintenanceDocument(_this.commonService.baseApiUrl, mdId, mdWONo, mdFlName).subscribe(function (data) {
                var dataMptp = JSON.stringify(data);
                var mpTpParse = JSON.parse(dataMptp);
                var mpTpList = JSON.parse(mpTpParse["_body"]);
                if (mpTpList == true) {
                    _this.getMaintenanceDocument(_this.mtprimID > 0 ? _this.mtprimID : _this.mtQueryID);
                    $('.loader').hide();
                    __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()({
                        title: 'Deleted!',
                        text: 'Maintenance document has been deleted.',
                        type: 'success',
                        confirmButtonClass: 'btn btn-success',
                        buttonsStyling: false
                    }).catch(__WEBPACK_IMPORTED_MODULE_7_sweetalert2___default.a.noop);
                }
            });
        }).catch(__WEBPACK_IMPORTED_MODULE_7_sweetalert2___default.a.noop);
    };
    CreateMaintenanceComponent.prototype.approvedMaintenance = function (status) {
        var _this = this;
        $('.loader').show();
        var contact = {
            Status: status
        };
        this.maintenanceService.UpdateMaintenanceStatus(this.commonService.baseApiUrl, this.mtQueryID, contact).subscribe(function (data) {
            var datatSheet = JSON.stringify(data);
            var tSheetParse = JSON.parse(datatSheet);
            var tSheetList = JSON.parse(tSheetParse["_body"]);
            if (tSheetList != null) {
                $('.loader').hide();
                _this.getMaintenanceDetails(_this.mtQueryID);
            }
        });
    };
    CreateMaintenanceComponent.prototype.getMaintenanceAssignment = function (workOrdId) {
        var _this = this;
        $('.loader').show();
        this.maintenanceService.GetMaintenanceTaskDocumentForWeb(this.commonService.baseApiUrl, workOrdId).subscribe(function (data) {
            var datawAsg = JSON.stringify(data);
            var wAsgParse = JSON.parse(datawAsg);
            var wAsgList = JSON.parse(wAsgParse["_body"]);
            _this.maintenanceList = null;
            if (wAsgList != null && wAsgList.length > 0) {
                _this.maintenanceList = wAsgList;
                if (wAsgList[0].MaintenanceTaskDocumentList.length > 0) {
                    var imglen = wAsgList[0].MaintenanceTaskDocumentList.length - 1;
                    for (var i = 0; i <= imglen; i++) {
                        if (wAsgList[0].MaintenanceTaskDocumentList[i].FilePath != null) {
                            var src = wAsgList[0].MaintenanceTaskDocumentList[i].FilePath;
                            var caption = 'Image ' + i + ' caption here';
                            var thumb = wAsgList[0].MaintenanceTaskDocumentList[i].FilePath;
                            var album = {
                                src: src,
                                caption: caption,
                                thumb: thumb
                            };
                            _this.imageList.push(album);
                        }
                    }
                    _this.lighboxConfig.fadeDuration = 1;
                }
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
    CreateMaintenanceComponent.prototype.createMaintenance = function (status) {
        var _this = this;
        $('.loader').show();
        var mtID = this.maintenanceData == undefined ? this.mtprimID : this.maintenanceData.ID;
        if (this.mtForm.valid) {
            var crntUsr = JSON.parse(sessionStorage.getItem('LogEmployee'));
            var contact = {
                ID: mtID,
                UserId: crntUsr.ID,
                WorkOrderId: this.selectedWOrd == undefined ? this.maintenanceData.WorkOrderId : this.selectedWOrd.ID,
                OldWorkOrderId: this.selectedWOrd == undefined ? this.maintenanceData.OldWorkOrderId : this.selectedWOrd.OldWorkOrderId,
                WorkOrderNo: this.selectedWOrd == undefined ? this.maintenanceData.WorkOrderNo : this.selectedWOrd.WorkOrderNo,
                Description: this.mtForm.controls["description"].value,
                MLatitude: '-27.534630',
                MLongitude: '151.952650',
                MaintenanceTypeId: this.mtForm.controls["mType"].value,
                MaintenancePartTypeId: this.mtForm.controls["mPartType"].value,
                Status: status
            };
            this.maintenanceService.CreateMaintenance(this.commonService.baseApiUrl, contact).subscribe(function (data) {
                var dataUsers = JSON.stringify(data);
                var userParse = JSON.parse(dataUsers);
                var userInfo = JSON.parse(userParse["_body"]);
                if (userInfo != -1) {
                    _this.mtprimID = userInfo;
                    _this.uploader.uploadAll();
                    _this.mtQueryID = userInfo > 0 && _this.mtQueryID == null ? userInfo : _this.mtQueryID;
                    _this.getMaintenanceDetails(userInfo > 0 ? userInfo : _this.mtQueryID);
                    _this.getMaintenanceDocument(userInfo > 0 ? userInfo : _this.mtQueryID);
                    if (mtID > 0) {
                        _this.showSwal("Maintenance has been updated successfully!");
                    }
                    else {
                        _this.showSwal("Maintenance has been created successfully!");
                        _this.goToMaintenance();
                    }
                    if (status == 'Unapproved') {
                        _this.isRejectedShow = false;
                    }
                    $('.loader').hide();
                }
            });
        }
        else {
            $('.loader').hide();
            this.validateAllFormFields(this.mtForm);
        }
    };
    CreateMaintenanceComponent.prototype.createMaintenanceAssignment = function () {
        var _this = this;
        $('.loader').show();
        if (this.mtAssPage.valid) {
            var fDate = this.datepipe.transform(this.mtAssPage.controls["fromdate"].value, 'yyyy/MM/dd HH:mm:ss');
            var tDate = this.datepipe.transform(this.mtAssPage.controls["todate"].value, 'yyyy/MM/dd HH:mm:ss');
            var workOrdId = this.selectedWOrd == undefined ? this.maintenanceData.WorkOrderId : this.selectedWOrd.ID;
            var contact = {
                ID: localStorage.getItem("mtAstID"),
                UserId: this.assUserID,
                WorkOrderId: workOrdId,
                Description: this.mtAssPage.controls["description"].value,
                RateType: this.mtAssPage.controls["ratetype"].value,
                Rate: this.mtAssPage.controls["rate"].value,
                FromDate: fDate,
                ToDate: tDate,
                MaintenanceStatus: "Created",
                AssignBy: this.userProfile.ID,
                MaintenanceID: this.mtQueryID
            };
            this.maintenanceService.CreateMaintenanceAssignment(this.commonService.baseApiUrl, contact).subscribe(function (data) {
                var dataUsers = JSON.stringify(data);
                var userParse = JSON.parse(dataUsers);
                var userInfo = JSON.parse(userParse["_body"]);
                $('#myModal').modal('toggle');
                if (userInfo == "Ok") {
                    _this.getMaintenanceAssignment(_this.mtQueryID);
                    _this.showSwal("Maintenance has been assigned.");
                }
                else if (userInfo == "already") {
                    _this.showSwal("Maintenance already assigned.");
                }
                _this.mtAssPage.reset();
                $('.loader').hide();
            });
        }
        else {
            this.validateAllFormFields(this.mtAssPage);
        }
    };
    CreateMaintenanceComponent.prototype.getMaintenanceType = function () {
        var _this = this;
        $('.loader').show();
        return this.maintenanceService.GetActiveMaintenanceType(this.commonService.baseApiUrl).subscribe(function (data) {
            var dataMtp = JSON.stringify(data);
            var mTpParse = JSON.parse(dataMtp);
            var mTpList = JSON.parse(mTpParse["_body"]);
            if (mTpList != null) {
                _this.mTypeList = mTpList;
                $('.loader').hide();
            }
        });
    };
    CreateMaintenanceComponent.prototype.deleteMaintenanceAssignment = function (mtasgID) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()({
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
            _this.maintenanceService.DeleteMaintenanceAssignment(_this.commonService.baseApiUrl, mtasgID).subscribe(function (data) {
                var dataUsers = JSON.stringify(data);
                var userParse = JSON.parse(dataUsers);
                var userInfo = JSON.parse(userParse["_body"]);
                if (userInfo == true) {
                    _this.getMaintenanceAssignment(_this.mtQueryID);
                    $('.loader').hide();
                    __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()({
                        title: 'Deleted!',
                        text: 'User has been deleted.',
                        type: 'success',
                        confirmButtonClass: 'btn btn-success',
                        buttonsStyling: false
                    }).catch(__WEBPACK_IMPORTED_MODULE_7_sweetalert2___default.a.noop);
                }
            });
        }).catch(__WEBPACK_IMPORTED_MODULE_7_sweetalert2___default.a.noop);
    };
    CreateMaintenanceComponent.prototype.getWorkOrderForMaintenance = function () {
        var _this = this;
        $('.loader').show();
        //this.maintenanceService.GetWorkOrderForMaintenance(this.commonService.baseApiUrl, this.userProfile.ID).subscribe(
        this.maintenanceService.GetAssignWorkOrderForMaintenance(this.commonService.baseApiUrl, this.userProfile.ID).subscribe(function (data) {
            var dataUsers = JSON.stringify(data);
            var userParse = JSON.parse(dataUsers);
            var userInfo = JSON.parse(userParse["_body"]);
            if (userInfo != null) {
                _this.autoWorkOrdList = userInfo;
                $('.loader').hide();
            }
        });
    };
    CreateMaintenanceComponent.prototype.getAutocompleteUser = function () {
        var _this = this;
        $('.loader').show();
        this.maintenanceService.GetAssignWOUserForMaintenance(this.commonService.baseApiUrl, this.userProfile.ID).subscribe(function (data) {
            var dataUsers = JSON.stringify(data);
            var userParse = JSON.parse(dataUsers);
            var userInfo = JSON.parse(userParse["_body"]);
            _this.resetWorkOrderAssignment();
            _this.autoUsers = null;
            if (userInfo != null) {
                _this.autoUsers = userInfo;
                $('.loader').hide();
            }
        });
    };
    CreateMaintenanceComponent.prototype.viewMaintenanceAssignment = function (mtID) {
        localStorage.removeItem("mtAstID");
        for (var _i = 0, _a = this.maintenanceList; _i < _a.length; _i++) {
            var woa = _a[_i];
            if (mtID == woa.ID) {
                var elems = document.querySelectorAll(".label-floating");
                if (elems != null) {
                    [].forEach.call(elems, function (el) {
                        el.classList.remove("is-empty");
                    });
                }
                localStorage.setItem("mtAstID", mtID);
                this.mtAssPage.controls["description"].setValue(woa.Description);
                this.mtAssPage.controls["rate"].setValue(woa.Rate);
                this.mtAssPage.controls["ratetype"].setValue(woa.RateType);
                this.mtAssPage.controls["fromdate"].setValue(woa.FromDate);
                this.mtAssPage.controls["todate"].setValue(woa.ToDate);
                this.mtAssPage.controls["userName"].setValue(woa.UserName);
                //this.isWoStatus = woa.WorkOrderAssignmentStatus;
                this.assUserID = woa.UserId;
            }
        }
    };
    CreateMaintenanceComponent.prototype.myUserListFormatter = function (data) {
        return data['UserName'];
    };
    CreateMaintenanceComponent.prototype.myListFormatter = function (data) {
        return data['WorkOrderNo'];
    };
    CreateMaintenanceComponent.prototype.valueChanged = function (newVal) {
        this.selectedWOrd = newVal;
    };
    CreateMaintenanceComponent.prototype.autoValueChanged = function (newVal) {
        this.assUserID = newVal.ID;
    };
    CreateMaintenanceComponent.prototype.validateAllFormFields = function (formGroup) {
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
    CreateMaintenanceComponent.prototype.resetWorkOrderAssignment = function () {
        this.mtAssPage.reset();
    };
    CreateMaintenanceComponent.prototype.completeMaintenance = function (status) {
        var _this = this;
        if (this.mtComPage.valid) {
            var mtID = this.maintenanceData == undefined ? this.mtprimID : this.maintenanceData.ID;
            var crntUsr = JSON.parse(sessionStorage.getItem('LogEmployee'));
            var contact = {
                ID: mtID,
                UserId: crntUsr.ID,
                WorkOrderId: this.selectedWOrd == undefined ? this.maintenanceData.WorkOrderId : this.selectedWOrd.ID,
                OldWorkOrderId: this.selectedWOrd == undefined ? this.maintenanceData.OldWorkOrderId : this.selectedWOrd.OldWorkOrderId,
                WorkOrderNo: this.selectedWOrd == undefined ? this.maintenanceData.WorkOrderNo : this.selectedWOrd.WorkOrderNo,
                Description: this.mtForm.controls["description"].value,
                CompleteDescription: this.mtComPage.controls["comDesc"].value,
                MLatitude: '-27.534630',
                MLongitude: '151.952650',
                MaintenanceTypeId: this.mtForm.controls["mType"].value,
                MaintenancePartTypeId: this.mtForm.controls["mPartType"].value,
                Status: status
            };
            __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()({
                title: 'Are you sure?',
                //text: 'You will not be able to revert this!',
                type: 'warning',
                showCancelButton: true,
                confirmButtonClass: 'btn btn-success',
                cancelButtonClass: 'btn btn-danger',
                confirmButtonText: 'Yes!',
                buttonsStyling: false
            }).then(function () {
                $('.loader').show();
                _this.maintenanceService.CreateMaintenance(_this.commonService.baseApiUrl, contact).subscribe(function (data) {
                    var dataUsers = JSON.stringify(data);
                    var userParse = JSON.parse(dataUsers);
                    var userInfo = JSON.parse(userParse["_body"]);
                    if (userInfo != -1) {
                        $('.loader').hide();
                        _this.mtprimID = userInfo;
                        _this.uploader.uploadAll();
                        _this.getMaintenanceDetails(userInfo > 0 ? userInfo : _this.mtQueryID);
                        _this.getMaintenanceDocument(userInfo > 0 ? userInfo : _this.mtQueryID);
                        __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()({
                            //title: 'Changed!',
                            text: 'Maintenance has been completed',
                            type: 'success',
                            confirmButtonClass: 'btn btn-success',
                            buttonsStyling: false
                        }).then(function () {
                            _this.goToMaintenance();
                        }).catch(__WEBPACK_IMPORTED_MODULE_7_sweetalert2___default.a.noop);
                        $('.loader').hide();
                    }
                });
            }).catch(__WEBPACK_IMPORTED_MODULE_7_sweetalert2___default.a.noop);
        }
        else {
            $('.loader').hide();
            this.validateAllFormFields(this.mtComPage);
        }
    };
    CreateMaintenanceComponent.prototype.goToMaintenance = function () {
        this.router.navigate(['maintenance']);
    };
    CreateMaintenanceComponent.prototype.buttonEditClick = function () {
        this.isEditMode = false;
        this.isRejectedShow = true;
    };
    CreateMaintenanceComponent.prototype.open = function (index) {
        var _this = this;
        this.subscription = this.lightboxEvent.lightboxEvent$.subscribe(function (event) { return _this._onReceivedEvent(event); });
        // override the default config
        this.lightbox.open(this.imageList, index, { wrapAround: true, showImageNumberLabel: true });
    };
    CreateMaintenanceComponent.prototype._onReceivedEvent = function (event) {
        if (event.id === __WEBPACK_IMPORTED_MODULE_11_angular2_lightbox__["LIGHTBOX_EVENT"].CLOSE) {
            this.subscription.unsubscribe();
        }
    };
    CreateMaintenanceComponent.prototype.isAssignModeShow = function () {
        this.isAssignShow = true;
    };
    CreateMaintenanceComponent.prototype.isComplateModeShow = function () {
        this.isComplateShow = true;
    };
    CreateMaintenanceComponent.prototype.sendEmailWorkOrderAssignment = function () {
        var _this = this;
        $('.loader').show();
        if (this.maintenanceList != null) {
            this.maintenanceService.SendEmailMaintenanceAssignment(this.commonService.baseApiUrl, this.maintenanceList).subscribe(function (data) {
                var dataUsers = JSON.stringify(data);
                var userParse = JSON.parse(dataUsers);
                var userInfo = JSON.parse(userParse["_body"]);
                if (userInfo != null) {
                    _this.showSwal("Work order email has been sent successfully!");
                    _this.getMaintenanceAssignment(_this.mtQueryID);
                    _this.autoUsers = userInfo;
                    $('.loader').hide();
                }
            });
        }
    };
    CreateMaintenanceComponent.prototype.showMaintenanceTaskNote = function (note) {
        this.maintenanceTaskNote = note;
    };
    CreateMaintenanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create-maintenance',
            template: __webpack_require__("./src/app/create-maintenance/create-maintenance.component.html"),
            styles: [__webpack_require__("./src/app/create-maintenance/create-maintenance.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_commonService__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_6__services_maintenanceService__["a" /* MaintenanceService */], __WEBPACK_IMPORTED_MODULE_10__angular_common__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_commonService__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_6__services_maintenanceService__["a" /* MaintenanceService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_10__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_11_angular2_lightbox__["Lightbox"],
            __WEBPACK_IMPORTED_MODULE_11_angular2_lightbox__["LightboxEvent"],
            __WEBPACK_IMPORTED_MODULE_11_angular2_lightbox__["LightboxConfig"]])
    ], CreateMaintenanceComponent);
    return CreateMaintenanceComponent;
}());



/***/ }),

/***/ "./src/app/create-maintenance/create-maintenance.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateMaintenanceModule", function() { return CreateMaintenanceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_maintenance_routing__ = __webpack_require__("./src/app/create-maintenance/create-maintenance.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_maintenance_component__ = __webpack_require__("./src/app/create-maintenance/create-maintenance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngui_auto_complete__ = __webpack_require__("./node_modules/@ngui/auto-complete/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngui_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__ngui_auto_complete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_auto_complete__ = __webpack_require__("./node_modules/ng2-auto-complete/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_auto_complete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__md_md_module__ = __webpack_require__("./src/app/md/md.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__field_error_display_field_error_display_module__ = __webpack_require__("./src/app/field-error-display/field-error-display.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_md2__ = __webpack_require__("./node_modules/md2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_lightbox__ = __webpack_require__("./node_modules/angular2-lightbox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_lightbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_lightbox__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var CreateMaintenanceModule = /** @class */ (function () {
    function CreateMaintenanceModule() {
    }
    CreateMaintenanceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__create_maintenance_routing__["a" /* CreateMaintenanceRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_9__md_md_module__["a" /* MdModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_module__["b" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_7__ngui_auto_complete__["NguiAutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_8_ng2_auto_complete__["Ng2AutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_10__field_error_display_field_error_display_module__["a" /* FieldErrorDisplayModule */],
                __WEBPACK_IMPORTED_MODULE_11_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_12_md2__["a" /* Md2DatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_12_md2__["b" /* MdNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_13_angular2_lightbox__["LightboxModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__create_maintenance_component__["a" /* CreateMaintenanceComponent */]
            ]
        })
    ], CreateMaintenanceModule);
    return CreateMaintenanceModule;
}());



/***/ }),

/***/ "./src/app/create-maintenance/create-maintenance.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateMaintenanceRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__create_maintenance_component__ = __webpack_require__("./src/app/create-maintenance/create-maintenance.component.ts");

var CreateMaintenanceRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__create_maintenance_component__["a" /* CreateMaintenanceComponent */]
            }]
    }
];


/***/ })

});
//# sourceMappingURL=create-maintenance.module.chunk.js.map
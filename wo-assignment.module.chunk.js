webpackJsonp(["wo-assignment.module"],{

/***/ "./node_modules/md2/accordion/accordion.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Md2Accordion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_core__ = __webpack_require__("./node_modules/md2/core/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Md2Accordion = (function () {
    function Md2Accordion() {
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.open = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.tabs = [];
    }
    Object.defineProperty(Md2Accordion.prototype, "multiple", {
        get: function () { return this._multiple; },
        set: function (value) { this._multiple = Object(__WEBPACK_IMPORTED_MODULE_1__core_core__["x" /* coerceBooleanProperty */])(value); },
        enumerable: true,
        configurable: true
    });
    /**
     * Add or append tab in accordion
     * @param tab object of Md2AccordionTab
     */
    Md2Accordion.prototype.addTab = function (tab) {
        this.tabs.push(tab);
    };
    return Md2Accordion;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], Md2Accordion.prototype, "multiple", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], Md2Accordion.prototype, "close", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], Md2Accordion.prototype, "open", void 0);
Md2Accordion = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({selector: 'md2-accordion',
        template: "<ng-content></ng-content>",
        styles: ["md2-accordion{display:block}md2-accordion-tab{position:relative;display:block;outline:0;box-sizing:border-box}md2-accordion-tab[hidden]{display:none}.md2-accordion-header{position:relative;display:block;padding-right:30px;font-weight:500;line-height:40px;text-align:left;color:rgba(0,0,0,.87);cursor:pointer;white-space:nowrap;border-bottom:1px solid rgba(0,0,0,.12);border-radius:0;box-sizing:border-box;user-select:none}md2-accordion-tab.md2-accordion-tab-active>.md2-accordion-header{border-color:#106cc8;box-shadow:0 1px 0 #106cc8}md2-accordion-tab.md2-accordion-tab-disabled>.md2-accordion-header{pointer-events:none;color:rgba(0,0,0,.26);background-image:linear-gradient(to right,rgba(0,0,0,.26) 0,rgba(0,0,0,.26) 33%,transparent 0);background-size:4px 1px;background-repeat:repeat-x;background-position:0 bottom;border-color:transparent;box-shadow:none;cursor:default}.md2-accordion-header-icon{position:absolute;top:12px;right:8px;width:8px;height:8px;overflow:hidden;display:inline-block;border-width:0 2px 2px 0;border-style:solid;border-color:currentColor;opacity:.64;transform:rotate(45deg);transition:.3s ease-in-out}md2-accordion-tab.md2-accordion-tab-active>.md2-accordion-header>.md2-accordion-header-icon{transform:rotate(225deg);top:16px}.md2-accordion-tab-body{position:relative;overflow:hidden}md2-accordion-tab.md2-accordion-tab-active .md2-accordion-tab-body{overflow:visible}.md2-accordion-tab-content{position:relative;padding:20px 0;border-bottom:1px solid rgba(0,0,0,.12)} /*# sourceMappingURL=accordion.css.map */ "],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        exportAs: 'md2Accordion'
    })
], Md2Accordion);

//# sourceMappingURL=accordion.js.map

/***/ }),

/***/ "./node_modules/md2/accordion/accordiontab.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Md2AccordionHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Md2AccordionTab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion__ = __webpack_require__("./node_modules/md2/accordion/accordion.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core__ = __webpack_require__("./node_modules/md2/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Md2AccordionHeader = (function () {
    function Md2AccordionHeader() {
    }
    return Md2AccordionHeader;
}());
Md2AccordionHeader = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: 'md2-accordion-header' })
], Md2AccordionHeader);

var Md2AccordionTab = (function () {
    function Md2AccordionTab(_accordion) {
        this._accordion = _accordion;
        this._disabled = false;
        this._active = false;
        this._accordion.addTab(this);
    }
    Object.defineProperty(Md2AccordionTab.prototype, "active", {
        get: function () { return this._active; },
        set: function (value) {
            this._active = Object(__WEBPACK_IMPORTED_MODULE_3__core__["k" /* coerceBooleanProperty */])(value);
            if (this._active && !this._accordion.multiple) {
                for (var i = 0; i < this._accordion.tabs.length; i++) {
                    if (this._accordion.tabs[i] !== this) {
                        this._accordion.tabs[i].active = false;
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2AccordionTab.prototype, "slide", {
        get: function () {
            return this.active ? 'down' : 'up';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2AccordionTab.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = Object(__WEBPACK_IMPORTED_MODULE_3__core__["k" /* coerceBooleanProperty */])(value); },
        enumerable: true,
        configurable: true
    });
    /**
     * Toggle the accordion
     * @param event
     * @return if it is disabled
     */
    Md2AccordionTab.prototype._handleClick = function (event) {
        if (this.disabled) {
            return;
        }
        var index = this.findTabIndex();
        if (this.active) {
            this.active = !this.active;
            this._accordion.close.emit({ originalEvent: event, index: index });
        }
        else if (!this._accordion.multiple) {
            for (var i = 0; i < this._accordion.tabs.length; i++) {
                this._accordion.tabs[i].active = false;
            }
            this._active = true;
            this._accordion.open.emit({ originalEvent: event, index: index });
        }
        else {
            this._active = true;
            this._accordion.open.emit({ originalEvent: event, index: index });
        }
        event.preventDefault();
    };
    /**
     * Find index of specific tab of accordion
     * @return index number of this tab
     */
    Md2AccordionTab.prototype.findTabIndex = function () {
        var index = -1;
        for (var i = 0; i < this._accordion.tabs.length; i++) {
            if (this._accordion.tabs[i] === this) {
                index = i;
                break;
            }
        }
        return index;
    };
    return Md2AccordionTab;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Md2AccordionTab.prototype, "header", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], Md2AccordionTab.prototype, "active", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], Md2AccordionTab.prototype, "disabled", null);
Md2AccordionTab = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({selector: 'md2-accordion-tab',
        template: "\n    <div class=\"md2-accordion-header\" (click)=\"_handleClick($event)\">\n      <span>{{header}}</span>\n      <ng-content select=\"md2-accordion-header\"></ng-content>\n      <span class=\"md2-accordion-header-icon\"></span>\n    </div>\n    <div class=\"md2-accordion-tab-body\" [@slide]=\"slide\">\n      <div class=\"md2-accordion-tab-content\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  ",
        styles: ["md2-accordion{display:block}md2-accordion-tab{position:relative;display:block;outline:0;box-sizing:border-box}md2-accordion-tab[hidden]{display:none}.md2-accordion-header{position:relative;display:block;padding-right:30px;font-weight:500;line-height:40px;text-align:left;color:rgba(0,0,0,.87);cursor:pointer;white-space:nowrap;border-bottom:1px solid rgba(0,0,0,.12);border-radius:0;box-sizing:border-box;user-select:none}md2-accordion-tab.md2-accordion-tab-active>.md2-accordion-header{border-color:#106cc8;box-shadow:0 1px 0 #106cc8}md2-accordion-tab.md2-accordion-tab-disabled>.md2-accordion-header{pointer-events:none;color:rgba(0,0,0,.26);background-image:linear-gradient(to right,rgba(0,0,0,.26) 0,rgba(0,0,0,.26) 33%,transparent 0);background-size:4px 1px;background-repeat:repeat-x;background-position:0 bottom;border-color:transparent;box-shadow:none;cursor:default}.md2-accordion-header-icon{position:absolute;top:12px;right:8px;width:8px;height:8px;overflow:hidden;display:inline-block;border-width:0 2px 2px 0;border-style:solid;border-color:currentColor;opacity:.64;transform:rotate(45deg);transition:.3s ease-in-out}md2-accordion-tab.md2-accordion-tab-active>.md2-accordion-header>.md2-accordion-header-icon{transform:rotate(225deg);top:16px}.md2-accordion-tab-body{position:relative;overflow:hidden}md2-accordion-tab.md2-accordion-tab-active .md2-accordion-tab-body{overflow:visible}.md2-accordion-tab-content{position:relative;padding:20px 0;border-bottom:1px solid rgba(0,0,0,.12)} /*# sourceMappingURL=accordion.css.map */ "],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* trigger */])('slide', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('up', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ height: 0 })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('down', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ height: '*' })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('down => up', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ height: '*' }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(300, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ height: 0 }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('up => down', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ height: 0 }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(300, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({
                        height: '*'
                    }))
                ])
            ])
        ],
        host: {
            'role': 'accordion-tab',
            '[class.md2-accordion-tab-active]': 'active',
            '[class.md2-accordion-tab-disabled]': 'disabled'
        },
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        exportAs: 'md2AccordionTab'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__accordion__["a" /* Md2Accordion */]])
], Md2AccordionTab);

//# sourceMappingURL=accordiontab.js.map

/***/ }),

/***/ "./node_modules/md2/accordion/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Md2AccordionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion__ = __webpack_require__("./node_modules/md2/accordion/accordion.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accordiontab__ = __webpack_require__("./node_modules/md2/accordion/accordiontab.js");
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var Md2AccordionModule = (function () {
    function Md2AccordionModule() {
    }
    return Md2AccordionModule;
}());
Md2AccordionModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__accordion__["a" /* Md2Accordion */], __WEBPACK_IMPORTED_MODULE_3__accordiontab__["b" /* Md2AccordionTab */], __WEBPACK_IMPORTED_MODULE_3__accordiontab__["a" /* Md2AccordionHeader */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__accordion__["a" /* Md2Accordion */], __WEBPACK_IMPORTED_MODULE_3__accordiontab__["b" /* Md2AccordionTab */], __WEBPACK_IMPORTED_MODULE_3__accordiontab__["a" /* Md2AccordionHeader */]],
    })
], Md2AccordionModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/md2/autocomplete/autocomplete-pipe.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HighlightPipe = (function () {
    function HighlightPipe() {
    }
    /**
     * Transform function
     * @param value string
     * @param query string filter value
     * @return filtered string with markup
     */
    HighlightPipe.prototype.transform = function (value, query) {
        if (query.length < 1) {
            return value;
        }
        return query ? value.replace(new RegExp(this._escapeRegexp(query), 'gi'), '<span class="highlight">$&</span>') : value;
    };
    /**
     * filter pipe
     * @param queryToEscape
     * @return queryToEscape with replace string
     */
    HighlightPipe.prototype._escapeRegexp = function (queryToEscape) {
        return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    };
    return HighlightPipe;
}());
HighlightPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'highlight' })
], HighlightPipe);

//# sourceMappingURL=autocomplete-pipe.js.map

/***/ }),

/***/ "./node_modules/md2/autocomplete/autocomplete.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Item */
/* unused harmony export MD2_AUTOCOMPLETE_CONTROL_VALUE_ACCESSOR */
/* unused harmony export Md2AutocompleteChange */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Md2Autocomplete; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_core__ = __webpack_require__("./node_modules/md2/core/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Item = (function () {
    function Item(source, textKey, valueKey) {
        if (typeof source === 'string') {
            this.text = this.value = source;
        }
        if (typeof source === 'object') {
            this.text = source[textKey];
            this.value = valueKey ? source[valueKey] : source;
        }
    }
    return Item;
}());

var nextId = 0;
var MD2_AUTOCOMPLETE_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return Md2Autocomplete; }),
    multi: true
};
/** Change event object emitted by Md2Autocomplete. */
var Md2AutocompleteChange = (function () {
    function Md2AutocompleteChange() {
    }
    return Md2AutocompleteChange;
}());

var Md2Autocomplete = (function () {
    function Md2Autocomplete(_element) {
        this._element = _element;
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.textChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._value = '';
        this._readonly = false;
        this._required = false;
        this._disabled = false;
        this._isInitialized = false;
        this._onChange = function () { };
        this._onTouched = function () { };
        this._items = [];
        this._list = [];
        this.selectedItem = null;
        this.noBlur = false;
        this._focusedOption = 0;
        this._inputValue = '';
        this._inputFocused = false;
        this.id = 'md2-autocomplete-' + (++nextId);
        this.tabindex = 0;
        this.placeholder = '';
        this.textKey = 'text';
        this.valueKey = null;
        this.minLength = 1;
    }
    Md2Autocomplete.prototype.ngAfterContentInit = function () { this._isInitialized = true; };
    Object.defineProperty(Md2Autocomplete.prototype, "readonly", {
        get: function () { return this._readonly; },
        set: function (value) { this._readonly = Object(__WEBPACK_IMPORTED_MODULE_2__core_core__["x" /* coerceBooleanProperty */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Autocomplete.prototype, "required", {
        get: function () { return this._required; },
        set: function (value) { this._required = Object(__WEBPACK_IMPORTED_MODULE_2__core_core__["x" /* coerceBooleanProperty */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Autocomplete.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = Object(__WEBPACK_IMPORTED_MODULE_2__core_core__["x" /* coerceBooleanProperty */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Autocomplete.prototype, "items", {
        set: function (value) { this._items = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Autocomplete.prototype, "value", {
        get: function () { return this._value; },
        set: function (value) {
            var _this = this;
            if (value !== this._value) {
                this._value = value;
                this._inputValue = '';
                if (value) {
                    var selItm = this._items.find(function (i) { return _this.equals(_this.valueKey ?
                        i[_this.valueKey] : i, value); });
                    this.selectedItem = new Item(selItm, this.textKey, this.valueKey);
                    if (this.selectedItem) {
                        this._inputValue = this.selectedItem.text;
                    }
                }
                if (!this._inputValue) {
                    this._inputValue = '';
                }
                if (this._isInitialized) {
                    this._emitChangeEvent();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Compare two vars or objects
     * @param o1 compare first object
     * @param o2 compare second object
     * @return boolean comparation result
     */
    Md2Autocomplete.prototype.equals = function (o1, o2) {
        if (o1 === o2) {
            return true;
        }
        if (o1 === null || o2 === null) {
            return false;
        }
        if (o1 !== o1 && o2 !== o2) {
            return true;
        }
        var t1 = typeof o1, t2 = typeof o2, key, keySet;
        if (t1 === t2 && t1 === 'object') {
            keySet = Object.create(null);
            for (key in o1) {
                if (!this.equals(o1[key], o2[key])) {
                    return false;
                }
                keySet[key] = true;
            }
            for (key in o2) {
                if (!(key in keySet) && key.charAt(0) !== '$' && o2[key]) {
                    return false;
                }
            }
            return true;
        }
        return false;
    };
    Object.defineProperty(Md2Autocomplete.prototype, "isMenuVisible", {
        get: function () {
            return ((this._inputFocused || this.noBlur) && this._list && this._list.length &&
                !this.selectedItem) && !this.readonly ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * update scroll of suggestion menu
     */
    Md2Autocomplete.prototype.updateScroll = function () {
        if (this._focusedOption < 0) {
            return;
        }
        var menuContainer = this._element.nativeElement.querySelector('.md2-autocomplete-menu');
        if (!menuContainer) {
            return;
        }
        var choices = menuContainer.querySelectorAll('.md2-option');
        if (choices.length < 1) {
            return;
        }
        var highlighted = choices[this._focusedOption];
        if (!highlighted) {
            return;
        }
        var top = highlighted.offsetTop + highlighted.clientHeight - menuContainer.scrollTop;
        var height = menuContainer.offsetHeight;
        if (top > height) {
            menuContainer.scrollTop += top - height;
        }
        else if (top < highlighted.clientHeight) {
            menuContainer.scrollTop -= highlighted.clientHeight - top;
        }
    };
    /**
     * input event listner
     * @param event
     */
    Md2Autocomplete.prototype._handleKeyup = function (event) {
        this.textChange.emit(this._inputValue);
    };
    Md2Autocomplete.prototype._handleKeydown = function (event) {
        var _this = this;
        if (this.disabled) {
            return;
        }
        switch (event.keyCode) {
            case __WEBPACK_IMPORTED_MODULE_2__core_core__["t" /* TAB */]:
                this._handleMouseLeave();
                break;
            case __WEBPACK_IMPORTED_MODULE_2__core_core__["h" /* ESCAPE */]:
                event.stopPropagation();
                event.preventDefault();
                if (this._inputValue) {
                    this._onClear();
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_2__core_core__["g" /* ENTER */]:
                event.preventDefault();
                event.stopPropagation();
                if (this.isMenuVisible) {
                    this._selectOption(event, this._focusedOption);
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_2__core_core__["f" /* DOWN_ARROW */]:
                event.preventDefault();
                event.stopPropagation();
                if (this.isMenuVisible) {
                    this._focusedOption = (this._focusedOption === this._list.length - 1) ? 0 :
                        Math.min(this._focusedOption + 1, this._list.length - 1);
                    this.updateScroll();
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_2__core_core__["w" /* UP_ARROW */]:
                event.preventDefault();
                event.stopPropagation();
                if (this.isMenuVisible) {
                    this._focusedOption = (this._focusedOption === 0) ? this._list.length - 1 :
                        Math.max(0, this._focusedOption - 1);
                    this.updateScroll();
                }
                break;
            default:
                setTimeout(function () {
                    _this.updateItems();
                }, 10);
        }
    };
    /**
     * select option
     * @param event
     * @param index of selected item
     */
    Md2Autocomplete.prototype._selectOption = function (event, index) {
        event.preventDefault();
        event.stopPropagation();
        this.selectedItem = this._list[index];
        this._inputValue = this._list[index].text;
        this.updateValue();
        this._handleMouseLeave();
    };
    /**
     * clear selected suggestion
     */
    Md2Autocomplete.prototype._onClear = function () {
        if (this.disabled) {
            return;
        }
        this._inputValue = '';
        this.selectedItem = null;
        this.updateItems();
        this._value = this.selectedItem ? this.selectedItem.value : this.selectedItem;
        this.updateValue();
    };
    /**
     * update value
     */
    Md2Autocomplete.prototype.updateValue = function () {
        this._value = this.selectedItem ? this.selectedItem.value : this.selectedItem;
        this._emitChangeEvent();
        this.onFocus();
    };
    /**
     * component focus listener
     */
    Md2Autocomplete.prototype.onFocus = function () {
        if (this.disabled) {
            return;
        }
        this._element.nativeElement.querySelector('input').focus();
    };
    /**
     * input focus listener
     */
    Md2Autocomplete.prototype._handleFocus = function () {
        this._inputFocused = true;
        this.updateItems();
        this._focusedOption = 0;
    };
    /**
     * input blur listener
     */
    Md2Autocomplete.prototype._handleBlur = function () {
        this._inputFocused = false;
        this._onTouched();
    };
    /**
     * suggestion menu mouse enter listener
     */
    Md2Autocomplete.prototype._handleMouseEnter = function () { this.noBlur = true; };
    /**
     * suggestion menu mouse leave listener
     */
    Md2Autocomplete.prototype._handleMouseLeave = function () { this.noBlur = false; };
    /**
     * Update suggestion to filter the query
     * @param query
     */
    Md2Autocomplete.prototype.updateItems = function () {
        var _this = this;
        if (this._inputValue.length < this.minLength) {
            this._list = [];
        }
        else {
            this._list = this._items.map(function (i) { return new Item(i, _this.textKey, _this.valueKey); }).filter(function (i) { return new RegExp(_this._inputValue, 'ig').test(i.text); });
            if (this._list.length && this._list[0].text !== this._inputValue) {
                this.selectedItem = null;
            }
        }
    };
    Md2Autocomplete.prototype._emitChangeEvent = function () {
        var event = new Md2AutocompleteChange();
        event.source = this;
        event.value = this._value;
        this._onChange(event.value);
        this.change.emit(event);
    };
    Md2Autocomplete.prototype.writeValue = function (value) {
        var _this = this;
        if (value !== this._value) {
            this._value = value;
            this._inputValue = '';
            if (value) {
                var selItm = this._items.find(function (i) { return _this.equals(_this.valueKey ?
                    i[_this.valueKey] : i, value); });
                this.selectedItem = new Item(selItm, this.textKey, this.valueKey);
                if (this.selectedItem) {
                    this._inputValue = this.selectedItem.text;
                }
            }
            if (!this._inputValue) {
                this._inputValue = '';
            }
        }
    };
    Md2Autocomplete.prototype.registerOnChange = function (fn) { this._onChange = fn; };
    Md2Autocomplete.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
    Md2Autocomplete.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    return Md2Autocomplete;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], Md2Autocomplete.prototype, "change", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], Md2Autocomplete.prototype, "textChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Md2Autocomplete.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], Md2Autocomplete.prototype, "tabindex", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Md2Autocomplete.prototype, "placeholder", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('item-text'),
    __metadata("design:type", String)
], Md2Autocomplete.prototype, "textKey", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('item-value'),
    __metadata("design:type", String)
], Md2Autocomplete.prototype, "valueKey", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('min-length'),
    __metadata("design:type", Number)
], Md2Autocomplete.prototype, "minLength", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], Md2Autocomplete.prototype, "readonly", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], Md2Autocomplete.prototype, "required", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], Md2Autocomplete.prototype, "disabled", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], Md2Autocomplete.prototype, "items", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], Md2Autocomplete.prototype, "value", null);
Md2Autocomplete = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({selector: 'md2-autocomplete',
        template: "<div class=\"md2-autocomplete-trigger\" [class.is-focused]=\"_inputFocused || isMenuVisible\"><input [(ngModel)]=\"_inputValue\" type=\"text\" autocomplete=\"off\" [readonly]=\"readonly\" [tabindex]=\"disabled ? -1 : tabindex\" [disabled]=\"disabled\" class=\"md2-autocomplete-input\" (focus)=\"_handleFocus()\" (blur)=\"_handleBlur()\" (keydown)=\"_handleKeydown($event)\" (keyup)=\"_handleKeyup($event)\" (change)=\"$event.stopPropagation()\"> <span class=\"md2-autocomplete-placeholder\" [class.has-value]=\"_inputValue\">{{ placeholder }} </span><svg *ngIf=\"_inputValue && !required && !disabled\" (click)=\"_onClear()\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/></svg></div><ul *ngIf=\"isMenuVisible\" class=\"md2-autocomplete-menu\" (mouseenter)=\"_handleMouseEnter()\" (mouseleave)=\"_handleMouseLeave()\"><li class=\"md2-option\" *ngFor=\"let l of _list; let i = index;\" [class.focus]=\"_focusedOption === i\" (click)=\"_selectOption($event, i)\"><div class=\"md2-text\" [innerHtml]=\"l.text | highlight:_inputValue\"></div></li></ul>",
        styles: ["md2-autocomplete{position:relative;display:block;margin:18px 0;outline:0;user-select:none;backface-visibility:hidden}md2-autocomplete.md2-autocomplete-disabled{pointer-events:none;cursor:default}.md2-autocomplete-trigger{position:relative;display:block;width:100%;padding:2px 2px 1px;border-bottom:1px solid rgba(0,0,0,.12);box-sizing:border-box;min-width:64px;min-height:26px;cursor:pointer}.md2-autocomplete-trigger.is-focused{padding-bottom:0;border-bottom:2px solid #106cc8}md2-autocomplete.ng-invalid.ng-touched:not(.md2-autocomplete-disabled) .md2-autocomplete-trigger{color:#f44336;border-bottom-color:#f44336}md2-autocomplete.md2-autocomplete-disabled .md2-autocomplete-trigger{color:rgba(0,0,0,.38);border-color:transparent;background-image:linear-gradient(to right,rgba(0,0,0,.38) 0,rgba(0,0,0,.38) 33%,transparent 0);background-position:bottom -1px left 0;background-size:4px 1px;background-repeat:repeat-x;cursor:default}md2-autocomplete.md2-autocomplete-disabled .md2-autocomplete-trigger.is-focused{padding-bottom:1px;border-bottom:1px solid transparent}.md2-autocomplete-input{width:100%;height:26px;font-size:15px;outline:0;background:0 0;border:0;box-sizing:border-box}md2-autocomplete.md2-autocomplete-disabled .md2-autocomplete-input{color:rgba(0,0,0,.38)}.md2-autocomplete-placeholder{position:absolute;right:26px;bottom:100%;left:0;max-width:100%;padding-left:3px;padding-right:0;line-height:1.4;color:rgba(0,0,0,.38);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;pointer-events:none;z-index:1;transform:translate3d(0,26px,0) scale(1);transition:transform .4s cubic-bezier(.25,.8,.25,1);transform-origin:left top}[aria-required=true] .md2-autocomplete-placeholder::after{content:'*'}.md2-autocomplete-trigger.is-focused .md2-autocomplete-placeholder{color:#106cc8}.md2-autocomplete-trigger.is-focused .md2-autocomplete-placeholder,md2-autocomplete .md2-autocomplete-placeholder.has-value{transform:translate3d(0,6px,0) scale(.75)}.md2-autocomplete-trigger svg{position:absolute;right:0;top:0;display:block;height:100%;background:#fff;fill:currentColor;color:rgba(0,0,0,.54)}.md2-autocomplete-menu{position:absolute;left:0;top:100%;display:block;z-index:10;width:100%;margin:0;padding:8px 0;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);max-height:256px;min-height:48px;overflow-y:auto;background:#fff}.md2-autocomplete-menu .md2-option{position:relative;display:block;color:#212121;cursor:pointer;width:auto;padding:0 16px;height:48px;line-height:48px;transition:background 150ms linear}.md2-autocomplete-menu .md2-option.focus,.md2-autocomplete-menu .md2-option:hover{background:#ededed}.md2-autocomplete-menu .md2-option .md2-text{width:auto;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:16px}.md2-autocomplete-menu .highlight{color:#737373} /*# sourceMappingURL=autocomplete.css.map */ "],
        providers: [MD2_AUTOCOMPLETE_CONTROL_VALUE_ACCESSOR],
        host: {
            'role': 'autocomplete',
            '[id]': 'id',
            '[attr.aria-label]': 'placeholder',
            '[attr.aria-required]': 'required.toString()',
            '[attr.aria-disabled]': 'disabled.toString()',
            '[class.md2-autocomplete-disabled]': 'disabled',
        },
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        exportAs: 'md2Autocomplete'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], Md2Autocomplete);

//# sourceMappingURL=autocomplete.js.map

/***/ }),

/***/ "./node_modules/md2/autocomplete/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Md2AutocompleteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__autocomplete_pipe__ = __webpack_require__("./node_modules/md2/autocomplete/autocomplete-pipe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__autocomplete__ = __webpack_require__("./node_modules/md2/autocomplete/autocomplete.js");
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var Md2AutocompleteModule = (function () {
    function Md2AutocompleteModule() {
    }
    return Md2AutocompleteModule;
}());
Md2AutocompleteModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"]],
        exports: [__WEBPACK_IMPORTED_MODULE_4__autocomplete__["a" /* Md2Autocomplete */], __WEBPACK_IMPORTED_MODULE_3__autocomplete_pipe__["a" /* HighlightPipe */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__autocomplete__["a" /* Md2Autocomplete */], __WEBPACK_IMPORTED_MODULE_3__autocomplete_pipe__["a" /* HighlightPipe */]],
    })
], Md2AutocompleteModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/md2/chips/chips.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Chip */
/* unused harmony export MD2_CHIPS_CONTROL_VALUE_ACCESSOR */
/* unused harmony export Md2ChipsChange */
/* unused harmony export Md2Chips */
/* unused harmony export MD2_CHIPS_DIRECTIVES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Md2ChipsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__autocomplete_index__ = __webpack_require__("./node_modules/md2/autocomplete/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_keyboard_keycodes__ = __webpack_require__("./node_modules/md2/core/keyboard/keycodes.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Chip = (function () {
    function Chip(source, textKey, valueKey) {
        if (typeof source === 'string') {
            this.text = this.value = source;
        }
        if (typeof source === 'object') {
            this.text = source[textKey];
            this.value = valueKey ? source[valueKey] : source;
        }
    }
    return Chip;
}());

var nextId = 0;
var MD2_CHIPS_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return Md2Chips; }),
    multi: true
};
/** Change event object emitted by Md2Chips. */
var Md2ChipsChange = (function () {
    function Md2ChipsChange() {
    }
    return Md2ChipsChange;
}());

var Md2Chips = (function () {
    function Md2Chips(elementRef) {
        this.elementRef = elementRef;
        this.tabindex = 0;
        this.addOnComma = true;
        this.addOnEnter = true;
        this.addOnPaste = true;
        this.addOnSpace = false;
        this.allowedPattern = /.+/;
        this.pasteSplitPattern = ',';
        this.placeholder = '';
        this.isAutoComplete = false;
        this.isRemovable = true;
        this.disabled = false;
        this.minChips = 0;
        this.maxChips = 10000;
        this.type = 'text';
        this.id = 'md2-chips-' + (++nextId);
        this.autocompleteItemText = 'text';
        this.autocompleteItemValue = 'value';
        this.textKey = 'text';
        this.valueKey = null;
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._onChange = function () { };
        this._onTouched = function () { };
        this.chipItemList = [];
        this.inputValue = '';
        this.selectedChip = -1;
        this.inputFocused = false;
        this.autoCompleteFocued = false;
        this._value = '';
        this.isEmptyAutoComplete = true;
    }
    Object.defineProperty(Md2Chips.prototype, "element", {
        get: function () {
            var elements = { root: this.elementRef.nativeElement, mainDiv: null, template: null };
            elements.mainDiv = elements.root.querySelector('.md2-chips-container');
            elements.template = elements.mainDiv.querySelector('.md2-template');
            return elements;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Chips.prototype, "value", {
        get: function () { return this._value; },
        set: function (value) { this.setValue(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Chips.prototype, "setValue", {
        /**
         * set value
         * @param value
         */
        set: function (value) {
            if (value !== this._value) {
                this._value = value;
                this.chipItemList = [];
                if (value) {
                    if (value && value.length && Array.isArray(value)) {
                        for (var i = 0; i < value.length; i++) {
                            this.chipItemList.push(new Chip(value[i], this.textKey, this.valueKey));
                        }
                    }
                }
            }
            this._emitChangeEvent();
        },
        enumerable: true,
        configurable: true
    });
    Md2Chips.prototype.getFocusAutocomplete = function () {
        this._onTouched();
    };
    Md2Chips.prototype.changeAutocomplete = function (value) {
        if (value) {
            this.addNewChip(value.value);
            this.item = null;
        }
    };
    Md2Chips.prototype.ngAfterContentInit = function () {
        var elements = this.element;
        this.splitRegExp = new RegExp(this.pasteSplitPattern);
        if (elements.template) {
            this.templateHtmlString = elements.template.innerHTML;
        }
    };
    // check autocomplete input is empty or not
    Md2Chips.prototype.valueupdate = function (evt) {
        this.isEmptyAutoComplete = evt ? false : true;
    };
    /**
     * input key listener
     * @param event
     */
    Md2Chips.prototype.inputChanged = function (event) {
        var key = event.keyCode;
        switch (key) {
            // back space
            case __WEBPACK_IMPORTED_MODULE_4__core_keyboard_keycodes__["a" /* BACKSPACE */]:
                this.backspaceEvent();
                break;
            // delete
            case __WEBPACK_IMPORTED_MODULE_4__core_keyboard_keycodes__["c" /* DELETE */]:
                this.backspaceEvent();
                break;
            // left arrow
            case __WEBPACK_IMPORTED_MODULE_4__core_keyboard_keycodes__["i" /* LEFT_ARROW */]:
                if (this.isAutoComplete && this.isEmptyAutoComplete) {
                    this.leftArrowKeyEvents();
                }
                else if (!this.isAutoComplete && !this.inputValue) {
                    this.leftArrowKeyEvents();
                }
                break;
            // right arrow
            case __WEBPACK_IMPORTED_MODULE_4__core_keyboard_keycodes__["l" /* RIGHT_ARROW */]:
                if (this.isAutoComplete && this.isEmptyAutoComplete) {
                    this.rightArrowKeyEvents();
                }
                else if (!this.isAutoComplete && !this.inputValue) {
                    this.rightArrowKeyEvents();
                }
                break;
            // enter
            case __WEBPACK_IMPORTED_MODULE_4__core_keyboard_keycodes__["f" /* ENTER */]:
                if (this.addOnEnter) {
                    this.addNewChip(this.inputValue);
                    event.preventDefault();
                }
                break;
            // comma
            case __WEBPACK_IMPORTED_MODULE_4__core_keyboard_keycodes__["b" /* COMMA */]:
                if (this.addOnComma) {
                    this.addNewChip(this.inputValue);
                    event.preventDefault();
                }
                break;
            // space
            case __WEBPACK_IMPORTED_MODULE_4__core_keyboard_keycodes__["m" /* SPACE */]:
                if (this.addOnSpace) {
                    this.addNewChip(this.inputValue);
                    event.preventDefault();
                }
                break;
            default:
                break;
        }
    };
    Md2Chips.prototype._handleFocus = function () {
        if (this.disabled) {
            return;
        }
        if (!this.isAutoComplete) {
            this.elementRef.nativeElement.querySelector('input.chip-input').focus();
        }
        else {
            this.autoCompleteFocued = true;
            this._onTouched();
        }
        this._resetSelected();
    };
    Md2Chips.prototype.inputBlurred = function () {
        this.inputFocused = false;
        if (this.inputValue) {
            this.addNewChip(this.inputValue);
        }
        this._onTouched();
    };
    Md2Chips.prototype.inputFocus = function () {
        if (this.disabled) {
            return;
        }
        this.inputFocused = true;
    };
    Md2Chips.prototype.inputPaste = function (event) {
        var _this = this;
        var clipboardData = event.clipboardData ||
            (event.originalEvent && event.originalEvent.clipboardData);
        var pastedString = clipboardData.getData('text/plain').trim();
        this.addNewChip(pastedString);
        setTimeout(function () { return _this._resetInput(); });
    };
    Md2Chips.prototype.leftArrowKeyEvents = function () {
        event.preventDefault();
        if (this.selectedChip) {
            if (this.selectedChip < 0) {
                this.selectedChip = this.chipItemList.length - 1;
            }
            else {
                this.selectedChip = this.selectedChip - 1;
            }
        }
    };
    Md2Chips.prototype.rightArrowKeyEvents = function () {
        event.preventDefault();
        if (this.selectedChip != -1) {
            if (this.selectedChip >= this.chipItemList.length) {
                this.selectedChip = 0;
            }
            else {
                this.selectedChip = this.selectedChip + 1;
            }
        }
    };
    Md2Chips.prototype._isValid = function (chipString) {
        var typeString = typeof chipString;
        var isExist;
        if (typeString === 'string') {
            chipString = chipString.trim();
            isExist = this.chipItemList.filter(function (chip) { return chip.text === chipString; });
        }
        else {
            isExist = this.chipItemList.filter(function (chip) { return chip.text === chipString.text; });
        }
        if (this.chipItemList.indexOf(chipString) === -1 && (isExist.length ? false : true)) {
            return this.allowedPattern.test(chipString);
        }
    };
    /**
    * add new chip
    * @param chips
    */
    Md2Chips.prototype.addNewChip = function (chips) {
        var validInput = this._isValid(chips);
        if (validInput) {
            if (this.maxChips && this.maxChips < this.chipItemList.length - 1) {
                return;
            }
            else {
                this.chipItemList.push(new Chip(chips, this.autocompleteItemText, this.autocompleteItemValue));
                this.item = null;
            }
        }
        this._resetSelected();
        this._resetInput();
        this.updateValue();
    };
    /**
   * remove selected chip
   * @param chipIndexToRemove index of selected chip
   */
    Md2Chips.prototype.removeSelectedChip = function (chipIndexToRemove) {
        this.chipItemList.splice(chipIndexToRemove, 1);
        this._resetSelected();
        this.updateValue();
    };
    Md2Chips.prototype.backspaceEvent = function () {
        if (!this.inputValue.length && this.chipItemList.length &&
            this.isRemovable && this.isEmptyAutoComplete) {
            if (this.selectedChip != -1) {
                this.removeSelectedChip(this.selectedChip);
                this.selectedChip = this.chipItemList.length - 1;
            }
            else {
                this.selectedChip = this.chipItemList.length - 1;
            }
        }
    };
    Md2Chips.prototype._resetSelected = function () {
        this.selectedChip = -1;
    };
    Md2Chips.prototype._resetInput = function () {
        if (this.isAutoComplete) {
            this.chipInputForm.controls['autocomplete'].setValue('');
        }
        else {
            this.chipInputForm.controls['chipInput'].setValue('');
        }
    };
    /**
     * update value
     */
    Md2Chips.prototype.updateValue = function () {
        var _this = this;
        this._value = new Array();
        this._value = this.chipItemList.map(function (chip) {
            if (_this.valueKey) {
                var c = {};
                c[_this.textKey] = chip.text;
                c[_this.valueKey] = chip.value;
                return c;
            }
            else {
                return chip.value;
            }
        });
        this._emitChangeEvent();
    };
    /** Emits an event when the user selects a color. */
    Md2Chips.prototype._emitChangeEvent = function () {
        var event = new Md2ChipsChange();
        event.source = this;
        event.value = this._value;
        this._onChange(event.value);
        this.change.emit(event);
    };
    Md2Chips.prototype.writeValue = function (value) {
        if (value !== this._value) {
            this._value = value;
            this.chipItemList = [];
            if (value) {
                if (value && value.length && Array.isArray(value)) {
                    for (var i = 0; i < value.length; i++) {
                        this.chipItemList.push(new Chip(value[i], this.textKey, this.valueKey));
                    }
                }
            }
        }
    };
    Md2Chips.prototype.registerOnChange = function (fn) { this._onChange = fn; };
    Md2Chips.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
    return Md2Chips;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], Md2Chips.prototype, "tabindex", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], Md2Chips.prototype, "addOnComma", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], Md2Chips.prototype, "addOnEnter", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], Md2Chips.prototype, "addOnPaste", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], Md2Chips.prototype, "addOnSpace", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", RegExp)
], Md2Chips.prototype, "allowedPattern", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], Md2Chips.prototype, "ngModel", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Md2Chips.prototype, "pasteSplitPattern", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Md2Chips.prototype, "placeholder", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], Md2Chips.prototype, "autocompleteDataList", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], Md2Chips.prototype, "isAutoComplete", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], Md2Chips.prototype, "isRemovable", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], Md2Chips.prototype, "disabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], Md2Chips.prototype, "minChips", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], Md2Chips.prototype, "maxChips", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Md2Chips.prototype, "type", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Md2Chips.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('autocomplete-item-text'),
    __metadata("design:type", String)
], Md2Chips.prototype, "autocompleteItemText", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('autocomplete-item-value'),
    __metadata("design:type", String)
], Md2Chips.prototype, "autocompleteItemValue", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('item-text'),
    __metadata("design:type", String)
], Md2Chips.prototype, "textKey", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('item-value'),
    __metadata("design:type", String)
], Md2Chips.prototype, "valueKey", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], Md2Chips.prototype, "change", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chipInputForm'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgForm"])
], Md2Chips.prototype, "chipInputForm", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], Md2Chips.prototype, "value", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('focus'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Md2Chips.prototype, "_handleFocus", null);
Md2Chips = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'md2-chips',
        template: "<div class=\"md2-chips-container\" [class.md2-chip-disabled]=\"disabled\" [class.md2-chip-remove]=\"!isRemovable\"><span *ngFor=\"let chip of chipItemList; let i = index\" class=\"md2-chip\" [class.active]=\"selectedChip === i\"><span>{{chip.text}}</span> <span [innerHTML]=\"templateHtmlString\"></span> <svg (click)=\"removeSelectedChip(i)\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" *ngIf=\"isRemovable\"><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/></svg></span><ng-content select=\".md2-template\"></ng-content><form #chipInputForm=\"ngForm\" class=\"chip-input-form\"><input *ngIf=\"!isAutoComplete\" class=\"chip-input\" [disabled]=\"disabled\" [type]=\"type\" [(ngModel)]=\"inputValue\" name=\"chipInput\" [placeholder]=\"placeholder\" (paste)=\"inputPaste($event)\" (keydown)=\"inputChanged($event)\" (blur)=\"inputBlurred()\" (focus)=\"inputFocus()\"><div *ngIf=\"isAutoComplete\"><md2-autocomplete name=\"autocomplete\" [placeholder]=\"placeholder\" [disabled]=\"disabled\" [(ngModel)]=\"item\" [items]=\"autocompleteDataList\" [item-text]=\"autocompleteItemText\" (textChange)=\"valueupdate($event)\" (change)=\"changeAutocomplete($event)\" (keydown)=\"inputChanged($event)\" (click)=\"getFocusAutocomplete()\"></md2-autocomplete></div></form></div><div class=\"chip-error\" *ngIf=\"this.chipItemList.length<this.minChips\">Minimum {{minChips}} chip required.</div><div class=\"chip-error\" *ngIf=\"this.chipItemList.length>=this.maxChips\">You are able to add Maximum {{maxChips}} chip.</div>",
        styles: [".template-content{display:inline}md2-chips{outline:0}md2-chips .md2-chips-container{display:block;box-shadow:0 1px #ccc;padding:5px 0;margin-bottom:10px;min-height:50px;box-sizing:border-box;clear:both}md2-chips .md2-chips-container::after{clear:both;content:'';display:table}md2-chips.chip-input-focus .md2-chips-container{box-shadow:0 2px #0d8bff}md2-chips .md2-chip-disabled{cursor:default}md2-chips md2-autocomplete{margin:0}md2-chips .md2-autocomplete-wrap{border-bottom:0!important}.md2-chip-remove .md2-chip{padding:0 12px}.md2-chip{font-size:14px;position:relative;cursor:default;border-radius:16px;display:block;height:32px;line-height:32px;margin:8px 8px 0 0;padding:0 28px 0 12px;float:left;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%;background:#e0e0e0;color:#424242;white-space:nowrap;overflow:hidden;-ms-text-overflow:ellipsis;-o-text-overflow:ellipsis;text-overflow:ellipsis}.md2-chip.active{color:#fff;background:#0d8bff}.md2-chip.active svg{color:rgba(255,255,255,.87)}.md2-chip svg{position:absolute;top:4px;right:4px;cursor:pointer;display:inline-block;overflow:hidden;fill:currentColor;color:rgba(0,0,0,.54)}.md2-template{display:none}.chip-input-disabled{pointer-events:none;cursor:default}.chip-input-form{display:inline-block;height:32px;margin:8px 8px 0 0}.chip-remove{cursor:pointer;display:inline-block;padding:0 3px;color:#616161;font-size:30px;vertical-align:top;line-height:21px;font-family:serif}.chip-input{display:inline-block;width:auto;border:0;outline:0;height:32px;line-height:32px;font-size:16px;background:0 0}.chip-error{font-size:13px;color:#fd0f0f}.md2-chips-container .chip-input-form .md2-autocomplete-wrap{border-bottom:0}.md2-chips-container .md2-autocomplete-wrap.is-focused .md2-autocomplete-placeholder{display:none}.md2-chips-container .md2-autocomplete-wrap .md2-autocomplete-placeholder.has-value{display:none}.md2-chips-container .md2-autocomplete-wrap svg{display:none}.md2-chips-container .md2-autocomplete-wrap .md2-autocomplete-input{height:32px;font-size:16px} /*# sourceMappingURL=chips.css.map */ "],
        providers: [MD2_CHIPS_CONTROL_VALUE_ACCESSOR],
        host: {
            'role': 'chips',
            '[id]': 'id',
            '[tabindex]': 'disabled ? -1 : tabindex',
            '[class.chip-input-focus]': 'inputFocused || selectedChip >= 0',
        },
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], Md2Chips);

var MD2_CHIPS_DIRECTIVES = [Md2Chips];
var Md2ChipsModule = (function () {
    function Md2ChipsModule() {
    }
    return Md2ChipsModule;
}());
Md2ChipsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_3__autocomplete_index__["a" /* Md2AutocompleteModule */]],
        declarations: MD2_CHIPS_DIRECTIVES,
        exports: MD2_CHIPS_DIRECTIVES
    })
], Md2ChipsModule);

//# sourceMappingURL=chips.js.map

/***/ }),

/***/ "./node_modules/md2/chips/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chips__ = __webpack_require__("./node_modules/md2/chips/chips.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__chips__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/md2/collapse/collapse.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Md2Collapse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Md2Collapse = (function () {
    function Md2Collapse() {
        this._collapse = true;
        this._collapsing = false;
        this.collapsed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.expanded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(Md2Collapse.prototype, "collapse", {
        get: function () { return this._collapse; },
        set: function (value) {
            this._collapse = value;
            this.toggle();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * toggle collapse
     */
    Md2Collapse.prototype.toggle = function () {
        if (this._collapse) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    /**
    * show collapse
    */
    Md2Collapse.prototype.show = function () {
        var _this = this;
        this._collapsing = true;
        this._collapse = true;
        setTimeout(function () {
            _this._collapsing = false;
        }, 4);
        this.expanded.emit();
    };
    /**
     * hide collapse
     */
    Md2Collapse.prototype.hide = function () {
        var _this = this;
        this._collapsing = true;
        this._collapse = false;
        setTimeout(function () {
            _this._collapsing = false;
        }, 4);
        this.collapsed.emit();
    };
    return Md2Collapse;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], Md2Collapse.prototype, "collapsed", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], Md2Collapse.prototype, "expanded", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Md2Collapse.prototype, "collapse", null);
Md2Collapse = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[collapse]',
        host: {
            'role': 'collapse',
            '[class.in]': '_collapse',
            '[class.collapse]': 'true',
            '[class.collapsing]': '_collapsing',
            '[attr.aria-expanded]': '_collapse',
            '[attr.aria-hidden]': '!_collapse'
        },
        exportAs: 'md2Collapse'
    })
], Md2Collapse);

//# sourceMappingURL=collapse.js.map

/***/ }),

/***/ "./node_modules/md2/collapse/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Md2CollapseModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collapse__ = __webpack_require__("./node_modules/md2/collapse/collapse.js");
/* unused harmony namespace reexport */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var Md2CollapseModule = (function () {
    function Md2CollapseModule() {
    }
    return Md2CollapseModule;
}());
Md2CollapseModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__collapse__["a" /* Md2Collapse */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__collapse__["a" /* Md2Collapse */]],
    })
], Md2CollapseModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/md2/colorpicker/color-util.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export COLOR_RGB */
/* unused harmony export COLOR_HSL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Hsva; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Hsla; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Rgba; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var COLOR_RGB = /(rgb)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*%?,\s*(\d{1,3})\s*%?(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/;
var COLOR_HSL = /(hsl)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/;
var Hsva = (function () {
    function Hsva(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
    return Hsva;
}());

var Hsla = (function () {
    function Hsla(h, s, l, a) {
        this.h = h;
        this.s = s;
        this.l = l;
        this.a = a;
    }
    return Hsla;
}());

var Rgba = (function () {
    function Rgba(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    return Rgba;
}());

var ColorUtil = (function () {
    function ColorUtil() {
    }
    /**
  * hsla to hsva
  * @param hsla
  */
    ColorUtil.prototype.hsla2hsva = function (hsla) {
        var h = Math.min(hsla.h, 1), s = Math.min(hsla.s, 1), l = Math.min(hsla.l, 1);
        var a = Math.min(hsla.a, 1);
        if (l === 0) {
            return { h: h, s: 0, v: 0, a: a };
        }
        else {
            var v = l + s * (1 - Math.abs(2 * l - 1)) / 2;
            return { h: h, s: 2 * (v - l) / v, v: v, a: a };
        }
    };
    /**
    * hsva to hsla
    * @param hsva
    */
    ColorUtil.prototype.hsva2hsla = function (hsva) {
        var h = hsva.h, s = hsva.s, v = hsva.v, a = hsva.a;
        if (v === 0) {
            return new Hsla(h, 0, 0, a);
        }
        else if (s === 0 && v === 1) {
            return new Hsla(h, 1, 1, a);
        }
        else {
            var l = v * (2 - s) / 2;
            return new Hsla(h, v * s / (1 - Math.abs(2 * l - 1)), l, a);
        }
    };
    /**
     * rgba to hsva
     * @param rgba
     */
    ColorUtil.prototype.rgbaToHsva = function (rgba) {
        var r = Math.min(rgba.r, 1), g = Math.min(rgba.g, 1), b = Math.min(rgba.b, 1);
        var a = Math.min(rgba.a, 1);
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, v = max;
        var d = max - min;
        s = max === 0 ? 0 : d / max;
        if (max === min) {
            h = 0;
        }
        else {
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }
        return new Hsva(h, s, v, a);
    };
    /**
     * hsva to rgba
     * @param hsva
     */
    ColorUtil.prototype.hsvaToRgba = function (hsva) {
        var h = hsva.h, s = hsva.s, v = hsva.v, a = hsva.a;
        var r, g, b;
        var i = Math.floor(h * 6);
        var f = h * 6 - i;
        var p = v * (1 - s);
        var q = v * (1 - f * s);
        var t = v * (1 - (1 - f) * s);
        switch (i % 6) {
            case 0:
                r = v;
                g = t;
                b = p;
                break;
            case 1:
                r = q;
                g = v;
                b = p;
                break;
            case 2:
                r = p;
                g = v;
                b = t;
                break;
            case 3:
                r = p;
                g = q;
                b = v;
                break;
            case 4:
                r = t;
                g = p;
                b = v;
                break;
            case 5:
                r = v;
                g = p;
                b = q;
                break;
        }
        return new Rgba(r, g, b, a);
    };
    /**
     * string to hsva
     * @param colorString
     */
    ColorUtil.prototype.stringToHsva = function (colorString) {
        var stringParsers = [
            {
                re: COLOR_RGB,
                parse: function (execResult) {
                    return new Rgba(parseInt(execResult[2]) / 255, parseInt(execResult[3]) / 255, parseInt(execResult[4]) / 255, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
                }
            },
            {
                re: COLOR_HSL,
                parse: function (execResult) {
                    return new Hsla(parseInt(execResult[2]) / 360, parseInt(execResult[3]) / 100, parseInt(execResult[4]) / 100, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
                }
            },
            {
                re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/,
                parse: function (execResult) {
                    return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, 1);
                }
            },
            {
                re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/,
                parse: function (execResult) {
                    return new Rgba(parseInt(execResult[1] + execResult[1], 16) / 255, parseInt(execResult[2] + execResult[2], 16) / 255, parseInt(execResult[3] + execResult[3], 16) / 255, 1);
                }
            }
        ];
        colorString = colorString.toLowerCase();
        var hsva = null;
        for (var key in stringParsers) {
            if (stringParsers.hasOwnProperty(key)) {
                var parser = stringParsers[key];
                var match = parser.re.exec(colorString);
                var color = match && parser.parse(match);
                if (color) {
                    if (color instanceof Rgba) {
                        hsva = this.rgbaToHsva(color);
                    }
                    else if (color instanceof Hsla) {
                        hsva = this.hsla2hsva(color);
                    }
                    return hsva;
                }
            }
        }
        return hsva;
    };
    /**
     * output formate of color
     * @param hsva
     * @param outputFormat
     */
    ColorUtil.prototype.outputFormat = function (hsva, outputFormat) {
        if (hsva.a < 1) {
            switch (outputFormat) {
                case 'hsl':
                    var hsla = this.hsva2hsla(hsva);
                    var hslaText = new Hsla(Math.round((hsla.h) * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
                    return 'hsla(' + hslaText.h + ',' + hslaText.s + '%,' +
                        hslaText.l + '%,' + hslaText.a + ')';
                default:
                    var rgba = this.denormalizeRGBA(this.hsvaToRgba(hsva));
                    return 'rgba(' + rgba.r + ',' + rgba.g + ',' + rgba.b +
                        ',' + Math.round(rgba.a * 100) / 100 + ')';
            }
        }
        else {
            switch (outputFormat) {
                case 'hsl':
                    var hsla = this.hsva2hsla(hsva);
                    var hslaText = new Hsla(Math.round((hsla.h) * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
                    return 'hsl(' + hslaText.h + ',' + hslaText.s + '%,' + hslaText.l + '%)';
                case 'rgb':
                    var rgba = this.denormalizeRGBA(this.hsvaToRgba(hsva));
                    return 'rgb(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ')';
                default:
                    return this.hexText(this.denormalizeRGBA(this.hsvaToRgba(hsva)));
            }
        }
    };
    ColorUtil.prototype.hexText = function (rgba) {
        var mainText = ((1 << 24) | (rgba.r << 16) | (rgba.g << 8) | rgba.b).toString(16);
        var hexText = '#' + mainText.substr(1);
        return hexText.toLowerCase();
    };
    ColorUtil.prototype.denormalizeRGBA = function (rgba) {
        return new Rgba(Math.round(rgba.r * 255), Math.round(rgba.g * 255), Math.round(rgba.b * 255), rgba.a);
    };
    return ColorUtil;
}());
ColorUtil = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], ColorUtil);

//# sourceMappingURL=color-util.js.map

/***/ }),

/***/ "./node_modules/md2/colorpicker/colorpicker.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SliderPosition */
/* unused harmony export SliderDimension */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TextDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorpickerSliderDirective; });
/* unused harmony export Md2ColorChange */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Md2Colorpicker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_coercion_boolean_property__ = __webpack_require__("./node_modules/md2/core/coercion/boolean-property.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_overlay_overlay__ = __webpack_require__("./node_modules/md2/core/overlay/overlay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_overlay_overlay_state__ = __webpack_require__("./node_modules/md2/core/overlay/overlay-state.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core__ = __webpack_require__("./node_modules/md2/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__color_util__ = __webpack_require__("./node_modules/md2/colorpicker/color-util.js");
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







var SliderPosition = (function () {
    function SliderPosition(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
    return SliderPosition;
}());

var SliderDimension = (function () {
    function SliderDimension(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
    return SliderDimension;
}());

var nextId = 0;
var TextDirective = (function () {
    function TextDirective() {
        this.newValue = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TextDirective.prototype.changeInput = function (event) {
        event.stopPropagation();
        event.preventDefault();
        var value = event.target.value;
        if (this.rg === undefined) {
            this.newValue.emit(value);
        }
        else {
            var numeric = parseFloat(value);
            if (!isNaN(numeric) && numeric >= 0 && numeric <= this.rg) {
                this.newValue.emit({ v: numeric, rg: this.rg });
            }
        }
    };
    return TextDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('newValue'),
    __metadata("design:type", Object)
], TextDirective.prototype, "newValue", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('text'),
    __metadata("design:type", Object)
], TextDirective.prototype, "text", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('rg'),
    __metadata("design:type", Number)
], TextDirective.prototype, "rg", void 0);
TextDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[text]',
        host: {
            '(input)': 'changeInput($event)'
        }
    })
], TextDirective);

var ColorpickerSliderDirective = (function () {
    function ColorpickerSliderDirective(_element) {
        var _this = this;
        this._element = _element;
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.listenerMove = function (event) { _this.move(event); };
        this.listenerStop = function () { _this.stop(); };
    }
    /**
     * set cursor position
     * @param event
     */
    ColorpickerSliderDirective.prototype.setCursor = function (event) {
        var height = this._getNativeElement().offsetHeight;
        var width = this._getNativeElement().offsetWidth;
        var x = Math.max(0, Math.min(this.getX(event), width));
        var y = Math.max(0, Math.min(this.getY(event), height));
        if (this.pointX !== undefined && this.pointY !== undefined) {
            this.change.emit({
                s: x / width, v: (1 - y / height),
                pointX: this.pointX, pointY: this.pointY
            });
        }
        else if (this.pointX === undefined && this.pointY !== undefined) {
            this.change.emit({ v: y / height, rg: this.pointY });
        }
        else {
            this.change.emit({ v: x / width, rg: this.pointX });
        }
    };
    /**
     * input event listner
     * @param event
     */
    ColorpickerSliderDirective.prototype.move = function (event) {
        event.preventDefault();
        this.setCursor(event);
    };
    /**
     * input event listner
     * @param event
     */
    ColorpickerSliderDirective.prototype.start = function (event) {
        this.setCursor(event);
        document.addEventListener('mousemove', this.listenerMove);
        document.addEventListener('touchmove', this.listenerMove);
        document.addEventListener('mouseup', this.listenerStop);
        document.addEventListener('touchend', this.listenerStop);
    };
    /**
     * stop mouse event
     */
    ColorpickerSliderDirective.prototype.stop = function () {
        document.removeEventListener('mousemove', this.listenerMove);
        document.removeEventListener('touchmove', this.listenerMove);
        document.removeEventListener('mouseup', this.listenerStop);
        document.removeEventListener('touchend', this.listenerStop);
    };
    /**
     * get x
     * @param event
     */
    ColorpickerSliderDirective.prototype.getX = function (event) {
        var boundingClientRect = this._getNativeElement().getBoundingClientRect();
        return (event.pageX !== undefined ? event.pageX : event.touches[0].pageX) -
            boundingClientRect.left - window.pageXOffset;
    };
    /**
     * get y
     * @param event
     */
    ColorpickerSliderDirective.prototype.getY = function (event) {
        var boundingClientRect = this._getNativeElement().getBoundingClientRect();
        return (event.pageY !== undefined ? event.pageY : event.touches[0].pageY) -
            boundingClientRect.top - window.pageYOffset;
    };
    ColorpickerSliderDirective.prototype._getNativeElement = function () {
        return this._element.nativeElement;
    };
    return ColorpickerSliderDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('colorpicker-slider'),
    __metadata("design:type", String)
], ColorpickerSliderDirective.prototype, "slider", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('point-x'),
    __metadata("design:type", Number)
], ColorpickerSliderDirective.prototype, "pointX", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('point-y'),
    __metadata("design:type", Number)
], ColorpickerSliderDirective.prototype, "pointY", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('change'),
    __metadata("design:type", Object)
], ColorpickerSliderDirective.prototype, "change", void 0);
ColorpickerSliderDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[colorpicker-slider]',
        host: {
            '(mousedown)': 'start($event)',
            '(touchstart)': 'start($event)'
        }
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], ColorpickerSliderDirective);

/**
 * Change event object emitted by Md2Colorpicker.
 */
var Md2ColorChange = (function () {
    function Md2ColorChange(source, color) {
        this.source = source;
        this.color = color;
    }
    return Md2ColorChange;
}());

var Md2Colorpicker = (function () {
    function Md2Colorpicker(_element, _overlay, _viewContainerRef, _renderer, _util, _control) {
        this._element = _element;
        this._overlay = _overlay;
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._util = _util;
        this._control = _control;
        this._innerValue = '';
        this.backColor = true;
        this._defalutColor = '#000000';
        /** Whether or not the overlay panel is open. */
        this._panelOpen = false;
        this._color = null;
        /** Whether filling out the select is required in the form.  */
        this._required = false;
        /** Whether the select is disabled.  */
        this._disabled = false;
        this.isInputFocus = false;
        this._container = 'inline';
        this.isInputValidColor = false;
        this._onChange = function () { };
        this._onTouched = function () { };
        this.cFormat = 'hex';
        this.colorpickerChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** Event emitted when the selected date has been changed by the user. */
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.tabindex = 0;
        this.id = 'md2-colorpicker-' + (++nextId);
        /** Event emitted when the select has been opened. */
        this.onOpen = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** Event emitted when the select has been closed. */
        this.onClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._created = false;
        if (this._control) {
            this._control.valueAccessor = this;
        }
    }
    Object.defineProperty(Md2Colorpicker.prototype, "color", {
        get: function () { return this._color; },
        set: function (value) { this._color = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Colorpicker.prototype, "placeholder", {
        /** Placeholder to be shown if no value has been selected. */
        get: function () { return this._placeholder; },
        set: function (value) { this._placeholder = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Colorpicker.prototype, "required", {
        get: function () { return this._required; },
        set: function (value) { this._required = Object(__WEBPACK_IMPORTED_MODULE_2__core_coercion_boolean_property__["a" /* coerceBooleanProperty */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Colorpicker.prototype, "disabled", {
        /** Whether the component is disabled. */
        get: function () { return this._disabled; },
        set: function (value) {
            this._disabled = Object(__WEBPACK_IMPORTED_MODULE_2__core_coercion_boolean_property__["a" /* coerceBooleanProperty */])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Colorpicker.prototype, "value", {
        get: function () {
            return this._innerValue;
        },
        /**
        * set accessor including call the onchange callback
        */
        set: function (v) {
            if (v !== this._innerValue) {
                if (v) {
                    this.hsva = this._util.stringToHsva(v);
                }
                this._innerValue = v;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Colorpicker.prototype, "container", {
        get: function () { return this._container; },
        set: function (value) {
            if (this._container !== value) {
                this._container = value || 'inline';
                this.destroyPanel();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Colorpicker.prototype, "setGradient", {
        get: function () {
            return {
                'background-image': 'linear-gradient(to right, transparent, transparent),' +
                    'linear-gradient(to left, ' + this.hexText + ', rgba(255, 255, 255, 0))'
            };
        },
        enumerable: true,
        configurable: true
    });
    Md2Colorpicker.prototype.ngOnDestroy = function () { this.destroyPanel(); };
    Object.defineProperty(Md2Colorpicker.prototype, "panelOpen", {
        /** Whether or not the overlay panel is open. */
        get: function () {
            return this._panelOpen;
        },
        enumerable: true,
        configurable: true
    });
    /** Toggles the overlay panel open or closed. */
    Md2Colorpicker.prototype.toggle = function () {
        this.panelOpen ? this.close() : this.open();
    };
    /** Opens the overlay panel. */
    Md2Colorpicker.prototype.open = function () {
        var hsva = this._util.stringToHsva(this.color + '');
        this.isInputFocus = true;
        if (hsva) {
            this.hsva = hsva;
        }
        else {
            this.hsva = this._util.stringToHsva(this._defalutColor);
        }
        this.sliderDim = new SliderDimension(245, 250, 130, 245);
        this.slider = new SliderPosition(0, 0, 0, 0);
        if (this.cFormat === 'rgb') {
            this.format = 1;
        }
        else if (this.cFormat === 'hsl') {
            this.format = 2;
        }
        else {
            this.format = 0;
        }
        this.update();
        if (this.disabled) {
            return;
        }
        if (!this._isColorpickerVisible) {
            this._initialColor = this.color;
            this.update();
            this._isColorpickerVisible = true;
        }
        else {
            this._isColorpickerVisible = false;
        }
        this._createOverlay();
        if (!this._portal) {
            this._portal = new __WEBPACK_IMPORTED_MODULE_5__core__["j" /* TemplatePortal */](this._templatePortal, this._viewContainerRef);
        }
        this._overlayRef.attach(this._portal);
        this._subscribeToBackdrop();
        this._panelOpen = true;
        this.onOpen.emit();
    };
    /** Closes the overlay panel and focuses the host element. */
    Md2Colorpicker.prototype.close = function () {
        this._panelOpen = false;
        this.isInputFocus = false;
        if (this._overlayRef) {
            this._overlayRef.detach();
            this._backdropSubscription.unsubscribe();
        }
        this._isColorpickerVisible = false;
        if (this._innerValue) {
            this.setColorFromString(this._innerValue);
        }
    };
    /** Removes the panel from the DOM. */
    Md2Colorpicker.prototype.destroyPanel = function () {
        if (this._overlayRef) {
            this._overlayRef.dispose();
            this._overlayRef = null;
            this._cleanUpSubscriptions();
        }
    };
    Md2Colorpicker.prototype._onBlur = function () {
        if (!this.panelOpen) {
            this._onTouched();
        }
    };
    /**
      * input event listner
      * @param event
      */
    Md2Colorpicker.prototype.changeInput = function (event) {
        var value = event.target.value;
        this.colorpickerChange.emit(value);
    };
    /**
    * set saturation,lightness,hue,alpha,RGB value
    * @param val
    * @param rg
    */
    Md2Colorpicker.prototype.setSaturation = function (val) {
        var hsla = this._util.hsva2hsla(this.hsva);
        hsla.s = val.v / val.rg;
        this.hsva = this._util.hsla2hsva(hsla);
        this.update();
    };
    Md2Colorpicker.prototype.setLightness = function (val) {
        var hsla = this._util.hsva2hsla(this.hsva);
        hsla.l = val.v / val.rg;
        this.hsva = this._util.hsla2hsva(hsla);
        this.update();
    };
    Md2Colorpicker.prototype.setHue = function (val) {
        this.hsva.h = val.v / val.rg;
        this.update();
    };
    Md2Colorpicker.prototype.setAlpha = function (val) {
        this.hsva.a = val.v / val.rg;
        this.update();
    };
    Md2Colorpicker.prototype.setR = function (val) {
        var rgba = this._util.hsvaToRgba(this.hsva);
        rgba.r = val.v / val.rg;
        this.hsva = this._util.rgbaToHsva(rgba);
        this.update();
    };
    Md2Colorpicker.prototype.setG = function (val) {
        var rgba = this._util.hsvaToRgba(this.hsva);
        rgba.g = val.v / val.rg;
        this.hsva = this._util.rgbaToHsva(rgba);
        this.update();
    };
    Md2Colorpicker.prototype.setB = function (val) {
        var rgba = this._util.hsvaToRgba(this.hsva);
        rgba.b = val.v / val.rg;
        this.hsva = this._util.rgbaToHsva(rgba);
        this.update();
    };
    Md2Colorpicker.prototype.setSaturationAndBrightness = function (val) {
        this.hsva.s = val.s / val.pointX;
        this.hsva.v = val.v / val.pointY;
        this.update();
    };
    Md2Colorpicker.prototype.clickOk = function () {
        this._isColorpickerVisible = false;
        this.isInputValidColor = false;
        this.color = this._innerValue;
        if (this._innerValue != this._initialColor) {
            this._emitChangeEvent();
        }
        this.close();
    };
    /**
    * deselect recent color and close popup
    */
    Md2Colorpicker.prototype.cancelColor = function () {
        this._innerValue = this._initialColor;
        this.close();
    };
    Md2Colorpicker.prototype.isValidColor = function (str) {
        return str.match(/^#[a-f0-9]{6}$/i) !== null;
    };
    /**
       * set color
       * @param value
       */
    Md2Colorpicker.prototype.setColorFromString = function (value) {
        if (!this.isValidColor(value)) {
            value = '#000000';
            this.backColor = false;
        }
        var hsva = this._util.stringToHsva(value);
        if (hsva !== null) {
            this.hsva = hsva;
        }
        this.update();
    };
    Md2Colorpicker.prototype.formatPolicy = function (value) {
        this.format = value;
        if (this.format === 0 && this.hsva.a < 1) {
            this.format++;
        }
        return this.format;
    };
    /**
     * update color
     */
    Md2Colorpicker.prototype.update = function () {
        var hsla = this._util.hsva2hsla(this.hsva);
        var rgba = this._util.denormalizeRGBA(this._util.hsvaToRgba(this.hsva));
        var hueRgba = this._util.denormalizeRGBA(this._util.hsvaToRgba(new __WEBPACK_IMPORTED_MODULE_6__color_util__["c" /* Hsva */](this.hsva.h, 1, 1, 1)));
        this.alphaColor = 'rgb(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ')';
        this._hueSliderColor = 'rgb(' + hueRgba.r + ',' + hueRgba.g + ',' + hueRgba.b + ')';
        this.hslaText = new __WEBPACK_IMPORTED_MODULE_6__color_util__["b" /* Hsla */](Math.round((hsla.h) * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
        this.rgbaText = new __WEBPACK_IMPORTED_MODULE_6__color_util__["d" /* Rgba */](rgba.r, rgba.g, rgba.b, Math.round(rgba.a * 100) / 100);
        if (this.backColor) {
            this.hexText = this._util.hexText(rgba);
        }
        this.backColor = true;
        var colorCode = Math.round((this.rgbaText.r * 299 + this.rgbaText.g * 587 +
            this.rgbaText.b * 114) / 1000);
        if (colorCode >= 128 || this.hsva.a < 0.35) {
            this.fontColor = 'black';
            this._isDark = true;
        }
        else {
            this.fontColor = 'white';
            this._isDark = false;
        }
        if (this.format === 0 && this.hsva.a < 1) {
            this.format++;
        }
        this.outputColor = this._util.outputFormat(this.hsva, this.cFormat);
        this.slider = new SliderPosition((this.hsva.h) * this.sliderDim.h, this.hsva.s * this.sliderDim.s - 7, (1 - this.hsva.v) * this.sliderDim.v - 7, this.hsva.a * this.sliderDim.a);
        this._innerValue = this.outputColor;
    };
    Md2Colorpicker.prototype.clearColor = function (event) {
        event.stopPropagation();
        this.color = '';
        this._emitChangeEvent();
    };
    Md2Colorpicker.prototype.isDescendant = function (parent, child) {
        var node = child.parentNode;
        while (node !== null) {
            if (node === parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    };
    Md2Colorpicker.prototype.checkInputVal = function () {
        this.hsva = this._util.stringToHsva(this.color + '');
        this.isInputFocus = false;
        if (this.hsva) {
            if (this._innerValue !== this.color) {
                this._emitChangeEvent();
            }
            this.isInputValidColor = false;
        }
        else {
            this.isInputValidColor = true;
        }
        this._onTouched();
    };
    /** Emits an event when the user selects a color. */
    Md2Colorpicker.prototype._emitChangeEvent = function () {
        this._onChange(this.color);
        this.change.emit(new Md2ColorChange(this, this.color));
        this._innerValue = this.color;
    };
    Md2Colorpicker.prototype.writeValue = function (value) {
        this._innerValue = value;
        this.color = value;
    };
    Md2Colorpicker.prototype.registerOnChange = function (fn) { this._onChange = fn; };
    Md2Colorpicker.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
    Md2Colorpicker.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    Md2Colorpicker.prototype._subscribeToBackdrop = function () {
        var _this = this;
        this._backdropSubscription = this._overlayRef.backdropClick().subscribe(function () {
            _this._innerValue = _this._initialColor;
            _this.close();
        });
    };
    /**
     *  This method creates the overlay from the provided panel's template and saves its
     *  OverlayRef so that it can be attached to the DOM when open is called.
     */
    Md2Colorpicker.prototype._createOverlay = function () {
        if (!this._overlayRef) {
            var config = new __WEBPACK_IMPORTED_MODULE_4__core_overlay_overlay_state__["a" /* OverlayState */]();
            if (this.container === 'inline') {
                config.positionStrategy = this._createPickerPositionStrategy();
                config.hasBackdrop = true;
                config.backdropClass = 'cdk-overlay-transparent-backdrop';
                config.scrollStrategy = this._overlay.scrollStrategies.reposition();
            }
            else {
                config.positionStrategy = this._overlay.position()
                    .global()
                    .centerHorizontally()
                    .centerVertically();
                config.hasBackdrop = true;
            }
            this._overlayRef = this._overlay.create(config);
        }
    };
    /** Create the popup PositionStrategy. */
    Md2Colorpicker.prototype._createPickerPositionStrategy = function () {
        return this._overlay.position()
            .connectedTo(this._element, { originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'top' })
            .withFallbackPosition({ originX: 'end', originY: 'top' }, { overlayX: 'end', overlayY: 'top' })
            .withFallbackPosition({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'bottom' })
            .withFallbackPosition({ originX: 'end', originY: 'bottom' }, { overlayX: 'end', overlayY: 'bottom' });
    };
    Md2Colorpicker.prototype._cleanUpSubscriptions = function () {
        if (this._backdropSubscription) {
            this._backdropSubscription.unsubscribe();
        }
        if (this._positionSubscription) {
            this._positionSubscription.unsubscribe();
        }
    };
    return Md2Colorpicker;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [String])
], Md2Colorpicker.prototype, "color", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [String])
], Md2Colorpicker.prototype, "placeholder", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], Md2Colorpicker.prototype, "required", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], Md2Colorpicker.prototype, "disabled", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('format'),
    __metadata("design:type", String)
], Md2Colorpicker.prototype, "cFormat", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('colorpickerChange'),
    __metadata("design:type", Object)
], Md2Colorpicker.prototype, "colorpickerChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], Md2Colorpicker.prototype, "change", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], Md2Colorpicker.prototype, "tabindex", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Md2Colorpicker.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [String])
], Md2Colorpicker.prototype, "container", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], Md2Colorpicker.prototype, "onOpen", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], Md2Colorpicker.prototype, "onClose", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('portal'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
], Md2Colorpicker.prototype, "_templatePortal", void 0);
Md2Colorpicker = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({selector: 'md2-colorpicker',
        template: "<div class=\"md2-colorpicker-trigger\"><div class=\"color-picker-selector\" [class.color-error]=\"isInputValidColor && required\"><div class=\"md2-colorpicker-preview\" (click)=\"toggle()\"><div class=\"color-fill\" [style.background-color]=\"color\"></div></div><div class=\"md2-colorpicker-input\" [class.input-focused]=\"isInputFocus\"><span class=\"md2-colorpicker-placeholder\" [class.has-value]=\"color\">{{ placeholder }}</span> <input class=\"md2-colorpicker-value\" autocomplete=\"off\" value=\"color\" [tabindex]=\"tabindex\" [disabled]=\"disabled\" [(ngModel)]=\"color\" (focus)=\"isInputFocus=true\" (blur)=\"checkInputVal()\"> <span *ngIf=\"color && !required && !disabled\" class=\"color-clear\" (click)=\"clearColor($event)\"><svg viewBox=\"0 0 24 24\" width=\"20\" height=\"20\"><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/></svg></span></div></div></div><ng-template #portal><div class=\"md2-colorpicker-panel\" tabindex=\"0\" [attr.container]=\"container\"><div class=\"md2-colorpicker-content\"><div class=\"md2-colorpicker-wrapper\"><div class=\"md2-color-picker\"><div class=\"selected-color\"><div class=\"selected-color-bg\" [style.background]=\"outputColor\"><div class=\"color-input\"><div [hidden]=\"format!=2\" class=\"hsla-text\"><input [text] type=\"number\" [style.color]=\"fontColor\" pattern=\"[0-9]*\" min=\"0\" max=\"360\" [rg]=\"360\" (newValue)=\"setHue($event)\" [value]=\"hslaText.h\"> <input [text] type=\"number\" [style.color]=\"fontColor\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [rg]=\"100\" (newValue)=\"setSaturation($event)\" [value]=\"hslaText.s\"> <input [text] type=\"number\" [style.color]=\"fontColor\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [rg]=\"100\" (newValue)=\"setLightness($event)\" [value]=\"hslaText.l\"> <input [text] type=\"number\" [style.color]=\"fontColor\" pattern=\"[0-9]+([\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\" [rg]=\"1\" (newValue)=\"setAlpha($event)\" [value]=\"hslaText.a\"></div><div [hidden]=\"format!=1\" class=\"rgba-text\"><input [text] type=\"number\" [style.color]=\"fontColor\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [rg]=\"255\" (newValue)=\"setR($event)\" [value]=\"rgbaText.r\"> <input [text] type=\"number\" [style.color]=\"fontColor\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [rg]=\"255\" (newValue)=\"setG($event)\" [value]=\"rgbaText.g\"> <input [text] type=\"number\" [style.color]=\"fontColor\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [rg]=\"255\" (newValue)=\"setB($event)\" [value]=\"rgbaText.b\"> <input [text] type=\"number\" [style.color]=\"fontColor\" pattern=\"[0-9]+([\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\" [rg]=\"1\" (newValue)=\"setAlpha($event)\" [value]=\"rgbaText.a\"></div><div [hidden]=\"format!=0\" class=\"hex-text\"><input [text] (newValue)=\"setColorFromString($event)\" [style.color]=\"fontColor\" [value]=\"hexText\"></div></div><div class=\"color-bar\" [class.dark]=\"_isDark\"><div [style.color]=\"fontColor\" class=\"clearfix\"><div class=\"type-policy\" [class.active]=\"format==0\" (click)=\"formatPolicy(0)\">HEX</div><div class=\"type-policy\" [class.active]=\"format==1\" (click)=\"formatPolicy(1)\">RGBA</div><div class=\"type-policy\" [class.active]=\"format==2\" (click)=\"formatPolicy(2)\">HSLA</div></div></div></div></div><div class=\"input-color-content\"><div [colorpicker-slider] [style.background-color]=\"_hueSliderColor\" [point-x]=\"1\" [point-y]=\"1\" (change)=\"setSaturationAndBrightness($event)\" class=\"saturation-lightness\"><div [style.left.px]=\"slider.s\" [style.top.px]=\"slider.v\" class=\"cursor\"></div></div><div [colorpicker-slider] [point-x]=\"1\" (change)=\"setHue($event)\" class=\"hue\"><div [style.left.px]=\"slider.h\" class=\"color-picker-marker\"></div></div><div [colorpicker-slider] [point-x]=\"1\" (change)=\"setAlpha($event)\" class=\"alpha\"><div class=\"alpha-main\" [ngStyle]=\"setGradient\"><div [style.left.px]=\"slider.a\" class=\"color-picker-marker\"></div></div></div></div><div class=\"md2-color-picker-actions\"><div class=\"md2-button\" (click)=\"cancelColor()\">Cancel</div><div class=\"md2-button\" (click)=\"clickOk()\">Ok</div></div></div></div></div></div></ng-template>",
        styles: [".md2-colorpicker-wrapper{border-radius:3px;background-color:#fff;z-index:10;box-shadow:0 2px 6px rgba(0,0,0,.4);overflow:hidden}.md2-colorpicker-panel{outline:0;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.md2-colorpicker-panel[container=dialog]{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.md2-colorpicker-disabled{pointer-events:none;cursor:default}.md2-colorpicker-disabled .color-picker-selector .md2-colorpicker-value{color:rgba(0,0,0,.38);border-color:transparent;background-image:linear-gradient(to right,rgba(0,0,0,.38) 0,rgba(0,0,0,.38) 33%,transparent 0);background-position:bottom -1px left 0;background-size:4px 1px;background-repeat:repeat-x}.md2-colorpicker-input{color:rgba(0,0,0,.38);border-bottom:1px solid rgba(0,0,0,.12);display:flex;justify-content:space-between;align-items:center;height:30px;min-width:180px;line-height:22px;position:relative;box-sizing:border-box}[aria-disabled=true] .md2-colorpicker-input{background-image:linear-gradient(to right,rgba(0,0,0,.26) 0,rgba(0,0,0,.26) 33%,transparent 0);background-size:4px 1px;background-repeat:repeat-x;border-color:transparent;background-position:0 bottom;cursor:default}md2-colorpicker:focus:not(.md2-colorpicker-disabled) .md2-colorpicker-input{color:#106cc8;border-color:#106cc8}md2-colorpicker.ng-invalid.ng-touched:not(.md2-colorpicker-disabled) .md2-colorpicker-input{color:#f44336;border-color:#f44336}.input-focused{color:#106cc8;border-color:#106cc8}.inline-control{width:150px;margin-right:16px;padding:16px 0}.md2-colorpicker-placeholder{position:absolute;right:18px;bottom:100%;left:0;padding:0 2px;transform:translate3d(0,26px,0) scale(1);transform-origin:left top;white-space:nowrap;overflow-x:hidden;text-overflow:ellipsis;transition:all 150ms cubic-bezier(.25,.8,.25,1)}[aria-required=true] .md2-colorpicker-placeholder::after{content:'*'}.md2-colorpicker-input.input-focused .md2-colorpicker-placeholder{color:#106cc8}.md2-colorpicker-input.input-focused .md2-colorpicker-placeholder,md2-colorpicker .md2-colorpicker-placeholder.has-value{transform:translate3d(0,6px,0) scale(.75)}.color-error .md2-colorpicker-input,.color-error .md2-colorpicker-placeholder{color:#f44336!important;border-color:#f44336}.color-error .color-fill{background-color:transparent!important}.color-picker-selector{display:block;padding:18px 0 4px 46px;white-space:nowrap}.color-picker-selector .md2-colorpicker-preview{position:absolute;top:19px;left:6px;content:'';width:24px;height:24px;overflow:hidden;background-color:#fff;background:linear-gradient(45deg,#ddd 25%,transparent 0,transparent 75%,#ddd 0,#ddd),linear-gradient(45deg,#ddd 25%,transparent 0,transparent 75%,#ddd 0,#ddd);background-size:8px 8px;background-position:0 0,4px 4px;border:2px solid #fafafa;display:block;fill:#5a5a5a;cursor:pointer;border-radius:50%;vertical-align:middle;box-shadow:0 1px 1px 0 rgba(0,0,0,.2),0 1px 1px 1px rgba(0,0,0,.14),0 1px 1px 1px rgba(0,0,0,.12)}.color-picker-selector .md2-colorpicker-preview .color-fill{width:100%;height:100%}.color-picker-selector .md2-colorpicker-value{font-size:15px;background:0 0;border:0;outline:0;position:relative;display:block;min-width:160px;height:30px;padding:2px 2px 1px;margin:0;line-height:26px;color:rgba(0,0,0,.87);vertical-align:middle;box-sizing:border-box}md2-colorpicker{position:relative;display:block;outline:0}.md2-color-picker{position:relative;display:block;width:266px;outline:0}.md2-color-picker *{box-sizing:border-box}.md2-color-picker .input-color-content{position:relative;padding:8px}.md2-color-picker i{cursor:default;position:relative}.md2-color-picker input{font-size:16px;height:50px;outline:0}.md2-color-picker div.cursor-sv{cursor:default;position:relative;border-radius:50%;width:15px;height:15px;border:#ddd solid 1px}.md2-color-picker div.cursor{cursor:crosshair;position:relative;border-radius:50%;width:13px;height:13px;box-shadow:0 0 2px 0 rgba(0,0,0,.5),inset 0 0 2px 0 rgba(0,0,0,.5);border:2px solid #fff}.md2-color-picker div.color-picker-marker{cursor:crosshair;position:relative;border:2px solid #fff;box-shadow:0 0 2px 0 rgba(0,0,0,.5);height:100%;width:5px;border-bottom:0;border-top:0}.md2-color-picker .saturation-lightness{width:100%;height:130px;border-radius:2px;overflow:hidden;background-image:linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,rgba(255,255,255,0))}.md2-color-picker .saturation-lightness:hover{cursor:crosshair}.md2-color-picker .hue{position:relative;width:100%;height:30px;margin:8px 0;border-radius:2px;background:linear-gradient(to right,red,#ff0,#0f0,#0ff,#00f,#f0f,red)}.md2-color-picker .alpha{position:relative;width:100%;height:30px;border-radius:2px;background:linear-gradient(45deg,#ddd 25%,transparent 0,transparent 75%,#ddd 0,#ddd),linear-gradient(45deg,#ddd 25%,transparent 0,transparent 75%,#ddd 0,#ddd);background-size:8px 8px;background-position:0 0,4px 4px}.md2-color-picker .alpha .alpha-main{position:absolute;height:100%;opacity:1;background-image:linear-gradient(to left,transparent,transparent),linear-gradient(to right,#fff,rgba(255,255,255,0));width:100%}.md2-color-picker .selected-color{position:relative;width:100%;height:75px;background-color:#fff;background:linear-gradient(45deg,#ddd 25%,transparent 0,transparent 75%,#ddd 0,#ddd),linear-gradient(45deg,#ddd 25%,transparent 0,transparent 75%,#ddd 0,#ddd);background-size:8px 8px;background-position:0 0,4px 4px}.md2-color-picker .selected-color .selected-color-bg{position:absolute;height:100%;opacity:1;width:100%}.md2-color-picker .selected-color .color-bar{position:absolute;width:100%;bottom:0}.md2-color-picker .selected-color .color-input{position:relative}.color-clear{color:rgba(0,0,0,.4);cursor:pointer}.color-clear svg{vertical-align:bottom;fill:#686868}.clearfix::after,.clearfix::before{content:' ';display:table}.clearfix::after{clear:both}.hex-text{width:100%}.hex-text input{width:100%;border:0;padding:4px;text-align:center;background:0 0}.hex-text div{text-align:center;float:left;clear:left;width:160px;margin-top:4px}.hsla-text,.rgba-text{text-align:center}.hsla-text input,.rgba-text input{width:50px;border:0;padding:4px 0;background:0 0;text-align:center}.hsla-text div,.rgba-text div{text-align:center;display:block}.hsla-text label,.rgba-text label{text-align:center;display:inline-block;font-size:15px}.md2-color-picker-actions{text-align:right}.md2-color-picker-actions .md2-button{display:inline-block;min-width:64px;margin:4px 8px 8px 0;padding:0 12px;font-size:14px;color:#106cc8;line-height:36px;text-align:center;text-transform:uppercase;border-radius:2px;cursor:pointer;box-sizing:border-box;transition:all 450ms cubic-bezier(.23,1,.32,1)}.md2-color-picker-actions .md2-button:hover{background:#ebebeb}.hsla-text div:nth-child(5),.rgba-text div:nth-child(5){clear:left}.type-policy{width:33.333333%;text-align:center;font-size:14px;display:inline-block;float:left;padding:4px 8px 3px;border-bottom:2px solid transparent;cursor:pointer;background:rgba(255,255,255,.25)}.dark .type-policy{background:rgba(0,0,0,.25)}.type-policy.active{border-color:rgba(255,255,255,.5);background:0 0}.dark .type-policy.active{border-color:rgba(0,0,0,.5)}.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.48}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.6)} /*# sourceMappingURL=colorpicker.css.map */ "],
        host: {
            'role': 'colorpicker',
            '[id]': 'id',
            '[class.md2-colorpicker-disabled]': 'disabled',
            '[attr.aria-label]': 'placeholder',
            '[attr.aria-required]': 'required.toString()',
        },
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"])()), __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_3__core_overlay_overlay__["b" /* Overlay */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
        __WEBPACK_IMPORTED_MODULE_6__color_util__["a" /* ColorUtil */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgControl"]])
], Md2Colorpicker);

//# sourceMappingURL=colorpicker.js.map

/***/ }),

/***/ "./node_modules/md2/colorpicker/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Md2ColorpickerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core__ = __webpack_require__("./node_modules/md2/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__colorpicker__ = __webpack_require__("./node_modules/md2/colorpicker/colorpicker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__color_util__ = __webpack_require__("./node_modules/md2/colorpicker/color-util.js");
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var Md2ColorpickerModule = (function () {
    function Md2ColorpickerModule() {
    }
    return Md2ColorpickerModule;
}());
Md2ColorpickerModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__core__["f" /* OverlayModule */],
            __WEBPACK_IMPORTED_MODULE_3__core__["h" /* PortalModule */],
            __WEBPACK_IMPORTED_MODULE_3__core__["i" /* StyleModule */],
            __WEBPACK_IMPORTED_MODULE_3__core__["a" /* A11yModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__colorpicker__["b" /* Md2Colorpicker */],
            __WEBPACK_IMPORTED_MODULE_4__colorpicker__["a" /* ColorpickerSliderDirective */],
            __WEBPACK_IMPORTED_MODULE_4__colorpicker__["c" /* TextDirective */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__colorpicker__["b" /* Md2Colorpicker */],
            __WEBPACK_IMPORTED_MODULE_4__colorpicker__["a" /* ColorpickerSliderDirective */],
            __WEBPACK_IMPORTED_MODULE_4__colorpicker__["c" /* TextDirective */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__color_util__["a" /* ColorUtil */]]
    })
], Md2ColorpickerModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/md2/core.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_index__ = __webpack_require__("./node_modules/md2/core/index.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__core_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__core_index__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__core_index__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__core_index__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__core_index__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__core_index__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__core_index__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__core_index__["j"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_0__core_index__["l"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_0__core_index__["m"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_0__core_index__["n"]; });

//# sourceMappingURL=core.js.map

/***/ }),

/***/ "./node_modules/md2/core/a11y/fake-mousedown.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isFakeMousedownFromScreenReader */
/**
 * Screenreaders will often fire fake mousedown events when a focusable element
 * is activated using the keyboard. We can typically distinguish between these faked
 * mousedown events and real mousedown events using the "buttons" property. While
 * real mousedowns will indicate the mouse button that was pressed (e.g. "1" for
 * the left mouse button), faked mousedowns will usually set the property value to 0.
 */
function isFakeMousedownFromScreenReader(event) {
    return event.buttons === 0;
}
//# sourceMappingURL=fake-mousedown.js.map

/***/ }),

/***/ "./node_modules/md2/core/a11y/focus-key-manager.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FocusKeyManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list_key_manager__ = __webpack_require__("./node_modules/md2/core/a11y/list-key-manager.js");
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

var FocusKeyManager = (function (_super) {
    __extends(FocusKeyManager, _super);
    function FocusKeyManager(items) {
        return _super.call(this, items) || this;
    }
    /**
     * This method sets the active item to the item at the specified index.
     * It also adds focuses the newly active item.
     */
    FocusKeyManager.prototype.setActiveItem = function (index) {
        _super.prototype.setActiveItem.call(this, index);
        if (this.activeItem) {
            this.activeItem.focus();
        }
    };
    return FocusKeyManager;
}(__WEBPACK_IMPORTED_MODULE_0__list_key_manager__["a" /* ListKeyManager */]));

//# sourceMappingURL=focus-key-manager.js.map

/***/ }),

/***/ "./node_modules/md2/core/a11y/focus-trap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FocusTrap */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FocusTrapFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FocusTrapDeprecatedDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FocusTrapDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interactivity_checker__ = __webpack_require__("./node_modules/md2/core/a11y/interactivity-checker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__platform_platform__ = __webpack_require__("./node_modules/md2/core/platform/platform.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coercion_boolean_property__ = __webpack_require__("./node_modules/md2/core/coercion/boolean-property.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/first.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Class that allows for trapping focus within a DOM element.
 *
 * NOTE: This class currently uses a very simple (naive) approach to focus trapping.
 * It assumes that the tab order is the same as DOM order, which is not necessarily true.
 * Things like tabIndex > 0, flex `order`, and shadow roots can cause to two to misalign.
 * This will be replaced with a more intelligent solution before the library is considered stable.
 */
var FocusTrap = (function () {
    function FocusTrap(_element, _platform, _checker, _ngZone, deferAnchors) {
        if (deferAnchors === void 0) { deferAnchors = false; }
        this._element = _element;
        this._platform = _platform;
        this._checker = _checker;
        this._ngZone = _ngZone;
        this._enabled = true;
        if (!deferAnchors) {
            this.attachAnchors();
        }
    }
    Object.defineProperty(FocusTrap.prototype, "enabled", {
        /** Whether the focus trap is active. */
        get: function () { return this._enabled; },
        set: function (val) {
            this._enabled = val;
            if (this._startAnchor && this._endAnchor) {
                this._startAnchor.tabIndex = this._endAnchor.tabIndex = this._enabled ? 0 : -1;
            }
        },
        enumerable: true,
        configurable: true
    });
    /** Destroys the focus trap by cleaning up the anchors. */
    FocusTrap.prototype.destroy = function () {
        if (this._startAnchor && this._startAnchor.parentNode) {
            this._startAnchor.parentNode.removeChild(this._startAnchor);
        }
        if (this._endAnchor && this._endAnchor.parentNode) {
            this._endAnchor.parentNode.removeChild(this._endAnchor);
        }
        this._startAnchor = this._endAnchor = null;
    };
    /**
     * Inserts the anchors into the DOM. This is usually done automatically
     * in the constructor, but can be deferred for cases like directives with `*ngIf`.
     */
    FocusTrap.prototype.attachAnchors = function () {
        var _this = this;
        // If we're not on the browser, there can be no focus to trap.
        if (!this._platform.isBrowser) {
            return;
        }
        if (!this._startAnchor) {
            this._startAnchor = this._createAnchor();
        }
        if (!this._endAnchor) {
            this._endAnchor = this._createAnchor();
        }
        this._ngZone.runOutsideAngular(function () {
            _this._startAnchor.addEventListener('focus', function () { return _this.focusLastTabbableElement(); });
            _this._endAnchor.addEventListener('focus', function () { return _this.focusFirstTabbableElement(); });
            _this._element.parentNode.insertBefore(_this._startAnchor, _this._element);
            _this._element.parentNode.insertBefore(_this._endAnchor, _this._element.nextSibling);
        });
    };
    /**
     * Waits for the zone to stabilize, then either focuses the first element that the
     * user specified, or the first tabbable element..
     */
    FocusTrap.prototype.focusInitialElementWhenReady = function () {
        var _this = this;
        this._executeOnStable(function () { return _this.focusInitialElement(); });
    };
    /**
     * Waits for the zone to stabilize, then focuses
     * the first tabbable element within the focus trap region.
     */
    FocusTrap.prototype.focusFirstTabbableElementWhenReady = function () {
        var _this = this;
        this._executeOnStable(function () { return _this.focusFirstTabbableElement(); });
    };
    /**
     * Waits for the zone to stabilize, then focuses
     * the last tabbable element within the focus trap region.
     */
    FocusTrap.prototype.focusLastTabbableElementWhenReady = function () {
        var _this = this;
        this._executeOnStable(function () { return _this.focusLastTabbableElement(); });
    };
    /**
     * Get the specified boundary element of the trapped region.
     * @param bound The boundary to get (start or end of trapped region).
     * @returns The boundary element.
     */
    FocusTrap.prototype._getRegionBoundary = function (bound) {
        // Contains the deprecated version of selector, for temporary backwards comparability.
        var markers = this._element.querySelectorAll("[cdk-focus-region-" + bound + "], " +
            ("[cdk-focus-" + bound + "]"));
        for (var i = 0; i < markers.length; i++) {
            if (markers[i].hasAttribute("cdk-focus-" + bound)) {
                console.warn("Found use of deprecated attribute 'cdk-focus-" + bound + "'," +
                    (" use 'cdk-focus-region-" + bound + "' instead."), markers[i]);
            }
        }
        if (bound == 'start') {
            return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
        }
        return markers.length ?
            markers[markers.length - 1] : this._getLastTabbableElement(this._element);
    };
    /** Focuses the element that should be focused when the focus trap is initialized. */
    FocusTrap.prototype.focusInitialElement = function () {
        var redirectToElement = this._element.querySelector('[cdk-focus-initial]');
        if (redirectToElement) {
            redirectToElement.focus();
        }
        else {
            this.focusFirstTabbableElement();
        }
    };
    /** Focuses the first tabbable element within the focus trap region. */
    FocusTrap.prototype.focusFirstTabbableElement = function () {
        var redirectToElement = this._getRegionBoundary('start');
        if (redirectToElement) {
            redirectToElement.focus();
        }
    };
    /** Focuses the last tabbable element within the focus trap region. */
    FocusTrap.prototype.focusLastTabbableElement = function () {
        var redirectToElement = this._getRegionBoundary('end');
        if (redirectToElement) {
            redirectToElement.focus();
        }
    };
    /** Get the first tabbable element from a DOM subtree (inclusive). */
    FocusTrap.prototype._getFirstTabbableElement = function (root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
        }
        // Iterate in DOM order. Note that IE doesn't have `children` for SVG so we fall
        // back to `childNodes` which includes text nodes, comments etc.
        var children = root.children || root.childNodes;
        for (var i = 0; i < children.length; i++) {
            var tabbableChild = children[i].nodeType === Node.ELEMENT_NODE ?
                this._getFirstTabbableElement(children[i]) :
                null;
            if (tabbableChild) {
                return tabbableChild;
            }
        }
        return null;
    };
    /** Get the last tabbable element from a DOM subtree (inclusive). */
    FocusTrap.prototype._getLastTabbableElement = function (root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
        }
        // Iterate in reverse DOM order.
        var children = root.children || root.childNodes;
        for (var i = children.length - 1; i >= 0; i--) {
            var tabbableChild = children[i].nodeType === Node.ELEMENT_NODE ?
                this._getLastTabbableElement(children[i]) :
                null;
            if (tabbableChild) {
                return tabbableChild;
            }
        }
        return null;
    };
    /** Creates an anchor element. */
    FocusTrap.prototype._createAnchor = function () {
        var anchor = document.createElement('div');
        anchor.tabIndex = this._enabled ? 0 : -1;
        anchor.classList.add('cdk-visually-hidden');
        anchor.classList.add('cdk-focus-trap-anchor');
        return anchor;
    };
    /** Executes a function when the zone is stable. */
    FocusTrap.prototype._executeOnStable = function (fn) {
        if (this._ngZone.isStable) {
            fn();
        }
        else {
            this._ngZone.onStable.first().subscribe(fn);
        }
    };
    return FocusTrap;
}());

/** Factory that allows easy instantiation of focus traps. */
var FocusTrapFactory = (function () {
    function FocusTrapFactory(_checker, _platform, _ngZone) {
        this._checker = _checker;
        this._platform = _platform;
        this._ngZone = _ngZone;
    }
    FocusTrapFactory.prototype.create = function (element, deferAnchors) {
        if (deferAnchors === void 0) { deferAnchors = false; }
        return new FocusTrap(element, this._platform, this._checker, this._ngZone, deferAnchors);
    };
    return FocusTrapFactory;
}());
FocusTrapFactory = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__interactivity_checker__["a" /* InteractivityChecker */],
        __WEBPACK_IMPORTED_MODULE_2__platform_platform__["a" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
], FocusTrapFactory);

/**
 * Directive for trapping focus within a region.
 * @deprecated
 */
var FocusTrapDeprecatedDirective = (function () {
    function FocusTrapDeprecatedDirective(_elementRef, _focusTrapFactory) {
        this._elementRef = _elementRef;
        this._focusTrapFactory = _focusTrapFactory;
        this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
    }
    Object.defineProperty(FocusTrapDeprecatedDirective.prototype, "disabled", {
        /** Whether the focus trap is active. */
        get: function () { return !this.focusTrap.enabled; },
        set: function (val) {
            this.focusTrap.enabled = !Object(__WEBPACK_IMPORTED_MODULE_3__coercion_boolean_property__["a" /* coerceBooleanProperty */])(val);
        },
        enumerable: true,
        configurable: true
    });
    FocusTrapDeprecatedDirective.prototype.ngOnDestroy = function () {
        this.focusTrap.destroy();
    };
    FocusTrapDeprecatedDirective.prototype.ngAfterContentInit = function () {
        this.focusTrap.attachAnchors();
    };
    return FocusTrapDeprecatedDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], FocusTrapDeprecatedDirective.prototype, "disabled", null);
FocusTrapDeprecatedDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'cdk-focus-trap',
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], FocusTrapFactory])
], FocusTrapDeprecatedDirective);

/** Directive for trapping focus within a region. */
var FocusTrapDirective = (function () {
    function FocusTrapDirective(_elementRef, _focusTrapFactory) {
        this._elementRef = _elementRef;
        this._focusTrapFactory = _focusTrapFactory;
        this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
    }
    Object.defineProperty(FocusTrapDirective.prototype, "enabled", {
        /** Whether the focus trap is active. */
        get: function () { return this.focusTrap.enabled; },
        set: function (value) { this.focusTrap.enabled = Object(__WEBPACK_IMPORTED_MODULE_3__coercion_boolean_property__["a" /* coerceBooleanProperty */])(value); },
        enumerable: true,
        configurable: true
    });
    FocusTrapDirective.prototype.ngOnDestroy = function () {
        this.focusTrap.destroy();
    };
    FocusTrapDirective.prototype.ngAfterContentInit = function () {
        this.focusTrap.attachAnchors();
    };
    return FocusTrapDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('cdkTrapFocus'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], FocusTrapDirective.prototype, "enabled", null);
FocusTrapDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[cdkTrapFocus]',
        exportAs: 'cdkTrapFocus',
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], FocusTrapFactory])
], FocusTrapDirective);

//# sourceMappingURL=focus-trap.js.map

/***/ }),

/***/ "./node_modules/md2/core/a11y/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return A11yModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__focus_trap__ = __webpack_require__("./node_modules/md2/core/a11y/focus-trap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__live_announcer__ = __webpack_require__("./node_modules/md2/core/a11y/live-announcer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interactivity_checker__ = __webpack_require__("./node_modules/md2/core/a11y/interactivity-checker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__platform_index__ = __webpack_require__("./node_modules/md2/core/platform/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var A11yModule = (function () {
    function A11yModule() {
    }
    return A11yModule;
}());
A11yModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_5__platform_index__["b" /* PlatformModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__focus_trap__["b" /* FocusTrapDirective */], __WEBPACK_IMPORTED_MODULE_1__focus_trap__["a" /* FocusTrapDeprecatedDirective */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__focus_trap__["b" /* FocusTrapDirective */], __WEBPACK_IMPORTED_MODULE_1__focus_trap__["a" /* FocusTrapDeprecatedDirective */]],
        providers: [__WEBPACK_IMPORTED_MODULE_3__interactivity_checker__["a" /* InteractivityChecker */], __WEBPACK_IMPORTED_MODULE_1__focus_trap__["c" /* FocusTrapFactory */], __WEBPACK_IMPORTED_MODULE_2__live_announcer__["a" /* LIVE_ANNOUNCER_PROVIDER */]]
    })
], A11yModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/md2/core/a11y/interactivity-checker.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractivityChecker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__platform_platform__ = __webpack_require__("./node_modules/md2/core/platform/platform.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * The InteractivityChecker leans heavily on the ally.js accessibility utilities.
 * Methods like `isTabbable` are only covering specific edge-cases for the browsers which are
 * supported.
 */
/**
 * Utility for checking the interactivity of an element, such as whether is is focusable or
 * tabbable.
 */
var InteractivityChecker = (function () {
    function InteractivityChecker(_platform) {
        this._platform = _platform;
    }
    /**
     * Gets whether an element is disabled.
     *
     * @param element Element to be checked.
     * @returns Whether the element is disabled.
     */
    InteractivityChecker.prototype.isDisabled = function (element) {
        // This does not capture some cases, such as a non-form control with a disabled attribute or
        // a form control inside of a disabled form, but should capture the most common cases.
        return element.hasAttribute('disabled');
    };
    /**
     * Gets whether an element is visible for the purposes of interactivity.
     *
     * This will capture states like `display: none` and `visibility: hidden`, but not things like
     * being clipped by an `overflow: hidden` parent or being outside the viewport.
     *
     * @returns Whether the element is visible.
     */
    InteractivityChecker.prototype.isVisible = function (element) {
        return hasGeometry(element) && getComputedStyle(element).visibility === 'visible';
    };
    /**
     * Gets whether an element can be reached via Tab key.
     * Assumes that the element has already been checked with isFocusable.
     *
     * @param element Element to be checked.
     * @returns Whether the element is tabbable.
     */
    InteractivityChecker.prototype.isTabbable = function (element) {
        // Nothing is tabbable on the the server 😎
        if (!this._platform.isBrowser) {
            return false;
        }
        var frameElement = getWindow(element).frameElement;
        if (frameElement) {
            var frameType = frameElement && frameElement.nodeName.toLowerCase();
            // Frame elements inherit their tabindex onto all child elements.
            if (getTabIndexValue(frameElement) === -1) {
                return false;
            }
            // Webkit and Blink consider anything inside of an <object> element as non-tabbable.
            if ((this._platform.BLINK || this._platform.WEBKIT) && frameType === 'object') {
                return false;
            }
            // Webkit and Blink disable tabbing to an element inside of an invisible frame.
            if ((this._platform.BLINK || this._platform.WEBKIT) && !this.isVisible(frameElement)) {
                return false;
            }
        }
        var nodeName = element.nodeName.toLowerCase();
        var tabIndexValue = getTabIndexValue(element);
        if (element.hasAttribute('contenteditable')) {
            return tabIndexValue !== -1;
        }
        if (nodeName === 'iframe') {
            // The frames may be tabbable depending on content, but it's not possibly to reliably
            // investigate the content of the frames.
            return false;
        }
        if (nodeName === 'audio') {
            if (!element.hasAttribute('controls')) {
                // By default an <audio> element without the controls enabled is not tabbable.
                return false;
            }
            else if (this._platform.BLINK) {
                // In Blink <audio controls> elements are always tabbable.
                return true;
            }
        }
        if (nodeName === 'video') {
            if (!element.hasAttribute('controls') && this._platform.TRIDENT) {
                // In Trident a <video> element without the controls enabled is not tabbable.
                return false;
            }
            else if (this._platform.BLINK || this._platform.FIREFOX) {
                // In Chrome and Firefox <video controls> elements are always tabbable.
                return true;
            }
        }
        if (nodeName === 'object' && (this._platform.BLINK || this._platform.WEBKIT)) {
            // In all Blink and WebKit based browsers <object> elements are never tabbable.
            return false;
        }
        // In iOS the browser only considers some specific elements as tabbable.
        if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
            return false;
        }
        return element.tabIndex >= 0;
    };
    /**
     * Gets whether an element can be focused by the user.
     *
     * @param element Element to be checked.
     * @returns Whether the element is focusable.
     */
    InteractivityChecker.prototype.isFocusable = function (element) {
        // Perform checks in order of left to most expensive.
        // Again, naive approach that does not capture many edge cases and browser quirks.
        return isPotentiallyFocusable(element) && !this.isDisabled(element) && this.isVisible(element);
    };
    return InteractivityChecker;
}());
InteractivityChecker = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__platform_platform__["a" /* Platform */]])
], InteractivityChecker);

/** Checks whether the specified element has any geometry / rectangles. */
function hasGeometry(element) {
    // Use logic from jQuery to check for an invisible element.
    // See https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js#L12
    return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
}
/** Gets whether an element's  */
function isNativeFormElement(element) {
    var nodeName = element.nodeName.toLowerCase();
    return nodeName === 'input' ||
        nodeName === 'select' ||
        nodeName === 'button' ||
        nodeName === 'textarea';
}
/** Gets whether an element is an <input type="hidden">. */
function isHiddenInput(element) {
    return isInputElement(element) && element.type == 'hidden';
}
/** Gets whether an element is an anchor that has an href attribute. */
function isAnchorWithHref(element) {
    return isAnchorElement(element) && element.hasAttribute('href');
}
/** Gets whether an element is an input element. */
function isInputElement(element) {
    return element.nodeName.toLowerCase() == 'input';
}
/** Gets whether an element is an anchor element. */
function isAnchorElement(element) {
    return element.nodeName.toLowerCase() == 'a';
}
/** Gets whether an element has a valid tabindex. */
function hasValidTabIndex(element) {
    if (!element.hasAttribute('tabindex') || element.tabIndex === undefined) {
        return false;
    }
    var tabIndex = element.getAttribute('tabindex');
    // IE11 parses tabindex="" as the value "-32768"
    if (tabIndex == '-32768') {
        return false;
    }
    return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
/**
 * Returns the parsed tabindex from the element attributes instead of returning the
 * evaluated tabindex from the browsers defaults.
 */
function getTabIndexValue(element) {
    if (!hasValidTabIndex(element)) {
        return null;
    }
    // See browser issue in Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
    var tabIndex = parseInt(element.getAttribute('tabindex'), 10);
    return isNaN(tabIndex) ? -1 : tabIndex;
}
/** Checks whether the specified element is potentially tabbable on iOS */
function isPotentiallyTabbableIOS(element) {
    var nodeName = element.nodeName.toLowerCase();
    var inputType = nodeName === 'input' && element.type;
    return inputType === 'text'
        || inputType === 'password'
        || nodeName === 'select'
        || nodeName === 'textarea';
}
/**
 * Gets whether an element is potentially focusable without taking current visible/disabled state
 * into account.
 */
function isPotentiallyFocusable(element) {
    // Inputs are potentially focusable *unless* they're type="hidden".
    if (isHiddenInput(element)) {
        return false;
    }
    return isNativeFormElement(element) ||
        isAnchorWithHref(element) ||
        element.hasAttribute('contenteditable') ||
        hasValidTabIndex(element);
}
/** Gets the parent window of a DOM node with regards of being inside of an iframe. */
function getWindow(node) {
    return node.ownerDocument.defaultView || window;
}
//# sourceMappingURL=interactivity-checker.js.map

/***/ }),

/***/ "./node_modules/md2/core/a11y/list-key-manager.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListKeyManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__("./node_modules/md2/core/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");


/**
 * This class manages keyboard events for selectable lists. If you pass it a query list
 * of items, it will set the active item correctly when arrow events occur.
 */
var ListKeyManager = (function () {
    function ListKeyManager(_items) {
        this._items = _items;
        this._activeItemIndex = null;
        this._tabOut = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["b" /* Subject */]();
        this._wrap = false;
    }
    /**
     * Turns on wrapping mode, which ensures that the active item will wrap to
     * the other end of list when there are no more items in the given direction.
     *
     * @returns The ListKeyManager that the method was called on.
     */
    ListKeyManager.prototype.withWrap = function () {
        this._wrap = true;
        return this;
    };
    /**
     * Sets the active item to the item at the index specified.
     *
     * @param index The index of the item to be set as active.
     */
    ListKeyManager.prototype.setActiveItem = function (index) {
        this._activeItemIndex = index;
        this._activeItem = this._items.toArray()[index];
    };
    /**
     * Sets the active item depending on the key event passed in.
     * @param event Keyboard event to be used for determining which element should be active.
     */
    ListKeyManager.prototype.onKeydown = function (event) {
        switch (event.keyCode) {
            case __WEBPACK_IMPORTED_MODULE_0__core__["f" /* DOWN_ARROW */]:
                this.setNextItemActive();
                break;
            case __WEBPACK_IMPORTED_MODULE_0__core__["w" /* UP_ARROW */]:
                this.setPreviousItemActive();
                break;
            case __WEBPACK_IMPORTED_MODULE_0__core__["t" /* TAB */]:
                // Note that we shouldn't prevent the default action on tab.
                this._tabOut.next(null);
                return;
            default:
                return;
        }
        event.preventDefault();
    };
    Object.defineProperty(ListKeyManager.prototype, "activeItemIndex", {
        /** Returns the index of the currently active item. */
        get: function () {
            return this._activeItemIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListKeyManager.prototype, "activeItem", {
        /** Returns the currently active item. */
        get: function () {
            return this._activeItem;
        },
        enumerable: true,
        configurable: true
    });
    /** Sets the active item to the first enabled item in the list. */
    ListKeyManager.prototype.setFirstItemActive = function () {
        this._setActiveItemByIndex(0, 1);
    };
    /** Sets the active item to the last enabled item in the list. */
    ListKeyManager.prototype.setLastItemActive = function () {
        this._setActiveItemByIndex(this._items.length - 1, -1);
    };
    /** Sets the active item to the next enabled item in the list. */
    ListKeyManager.prototype.setNextItemActive = function () {
        this._activeItemIndex === null ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
    };
    /** Sets the active item to a previous enabled item in the list. */
    ListKeyManager.prototype.setPreviousItemActive = function () {
        this._activeItemIndex === null && this._wrap ? this.setLastItemActive()
            : this._setActiveItemByDelta(-1);
    };
    /**
     * Allows setting of the activeItemIndex without any other effects.
     * @param index The new activeItemIndex.
     */
    ListKeyManager.prototype.updateActiveItemIndex = function (index) {
        this._activeItemIndex = index;
    };
    Object.defineProperty(ListKeyManager.prototype, "tabOut", {
        /**
         * Observable that emits any time the TAB key is pressed, so components can react
         * when focus is shifted off of the list.
         */
        get: function () {
            return this._tabOut.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * This method sets the active item, given a list of items and the delta between the
     * currently active item and the new active item. It will calculate differently
     * depending on whether wrap mode is turned on.
     */
    ListKeyManager.prototype._setActiveItemByDelta = function (delta, items) {
        if (items === void 0) { items = this._items.toArray(); }
        this._wrap ? this._setActiveInWrapMode(delta, items)
            : this._setActiveInDefaultMode(delta, items);
    };
    /**
     * Sets the active item properly given "wrap" mode. In other words, it will continue to move
     * down the list until it finds an item that is not disabled, and it will wrap if it
     * encounters either end of the list.
     */
    ListKeyManager.prototype._setActiveInWrapMode = function (delta, items) {
        // when active item would leave menu, wrap to beginning or end
        this._activeItemIndex =
            (this._activeItemIndex + delta + items.length) % items.length;
        // skip all disabled menu items recursively until an enabled one is reached
        if (items[this._activeItemIndex].disabled) {
            this._setActiveInWrapMode(delta, items);
        }
        else {
            this.setActiveItem(this._activeItemIndex);
        }
    };
    /**
     * Sets the active item properly given the default mode. In other words, it will
     * continue to move down the list until it finds an item that is not disabled. If
     * it encounters either end of the list, it will stop and not wrap.
     */
    ListKeyManager.prototype._setActiveInDefaultMode = function (delta, items) {
        this._setActiveItemByIndex(this._activeItemIndex + delta, delta, items);
    };
    /**
     * Sets the active item to the first enabled item starting at the index specified. If the
     * item is disabled, it will move in the fallbackDelta direction until it either
     * finds an enabled item or encounters the end of the list.
     */
    ListKeyManager.prototype._setActiveItemByIndex = function (index, fallbackDelta, items) {
        if (items === void 0) { items = this._items.toArray(); }
        if (!items[index]) {
            return;
        }
        while (items[index].disabled) {
            index += fallbackDelta;
            if (!items[index]) {
                return;
            }
        }
        this.setActiveItem(index);
    };
    return ListKeyManager;
}());

//# sourceMappingURL=list-key-manager.js.map

/***/ }),

/***/ "./node_modules/md2/core/a11y/live-announcer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LIVE_ANNOUNCER_ELEMENT_TOKEN */
/* unused harmony export LiveAnnouncer */
/* unused harmony export LIVE_ANNOUNCER_PROVIDER_FACTORY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LIVE_ANNOUNCER_PROVIDER; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__platform_platform__ = __webpack_require__("./node_modules/md2/core/platform/platform.js");
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


var LIVE_ANNOUNCER_ELEMENT_TOKEN = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('liveAnnouncerElement');
var LiveAnnouncer = (function () {
    function LiveAnnouncer(elementToken, platform) {
        // Only do anything if we're on the browser platform.
        if (platform.isBrowser) {
            // We inject the live element as `any` because the constructor signature cannot reference
            // browser globals (HTMLElement) on non-browser environments, since having a class decorator
            // causes TypeScript to preserve the constructor signature types.
            this._liveElement = elementToken || this._createLiveElement();
        }
    }
    /**
     * Announces a message to screenreaders.
     * @param message Message to be announced to the screenreader
     * @param politeness The politeness of the announcer element
     */
    LiveAnnouncer.prototype.announce = function (message, politeness) {
        var _this = this;
        if (politeness === void 0) { politeness = 'polite'; }
        this._liveElement.textContent = '';
        // TODO: ensure changing the politeness works on all environments we support.
        this._liveElement.setAttribute('aria-live', politeness);
        // This 100ms timeout is necessary for some browser + screen-reader combinations:
        // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
        // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
        //   second time without clearing and then using a non-zero delay.
        // (using JAWS 17 at time of this writing).
        setTimeout(function () { return _this._liveElement.textContent = message; }, 100);
    };
    /** Removes the aria-live element from the DOM. */
    LiveAnnouncer.prototype._removeLiveElement = function () {
        if (this._liveElement && this._liveElement.parentNode) {
            this._liveElement.parentNode.removeChild(this._liveElement);
        }
    };
    LiveAnnouncer.prototype._createLiveElement = function () {
        var liveEl = document.createElement('div');
        liveEl.classList.add('cdk-visually-hidden');
        liveEl.setAttribute('aria-atomic', 'true');
        liveEl.setAttribute('aria-live', 'polite');
        document.body.appendChild(liveEl);
        return liveEl;
    };
    return LiveAnnouncer;
}());
LiveAnnouncer = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(LIVE_ANNOUNCER_ELEMENT_TOKEN)),
    __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_1__platform_platform__["a" /* Platform */]])
], LiveAnnouncer);

function LIVE_ANNOUNCER_PROVIDER_FACTORY(parentDispatcher, liveElement, platform) {
    return parentDispatcher || new LiveAnnouncer(liveElement, platform);
}
var LIVE_ANNOUNCER_PROVIDER = {
    // If there is already a LiveAnnouncer available, use that. Otherwise, provide a new one.
    provide: LiveAnnouncer,
    deps: [
        [new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"](), new __WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"](), LiveAnnouncer],
        [new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"](), new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"](LIVE_ANNOUNCER_ELEMENT_TOKEN)],
        __WEBPACK_IMPORTED_MODULE_1__platform_platform__["a" /* Platform */],
    ],
    useFactory: LIVE_ANNOUNCER_PROVIDER_FACTORY
};
//# sourceMappingURL=live-announcer.js.map

/***/ }),

/***/ "./node_modules/md2/core/animation/animation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AnimationCurves */
/* unused harmony export AnimationDurations */
/** @docs-private */
var AnimationCurves = (function () {
    function AnimationCurves() {
    }
    return AnimationCurves;
}());

AnimationCurves.STANDARD_CURVE = 'cubic-bezier(0.4,0.0,0.2,1)';
AnimationCurves.DECELERATION_CURVE = 'cubic-bezier(0.0,0.0,0.2,1)';
AnimationCurves.ACCELERATION_CURVE = 'cubic-bezier(0.4,0.0,1,1)';
AnimationCurves.SHARP_CURVE = 'cubic-bezier(0.4,0.0,0.6,1)';
/** @docs-private */
var AnimationDurations = (function () {
    function AnimationDurations() {
    }
    return AnimationDurations;
}());

AnimationDurations.COMPLEX = '375ms';
AnimationDurations.ENTERING = '225ms';
AnimationDurations.EXITING = '195ms';
//# sourceMappingURL=animation.js.map

/***/ }),

/***/ "./node_modules/md2/core/coercion/boolean-property.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = coerceBooleanProperty;
/** Coerces a data-bound value (typically a string) to a boolean. */
/** Coerces a data-bound value (typically a string) to a boolean. */ function coerceBooleanProperty(value) {
    return value != null && "" + value !== 'false';
}
//# sourceMappingURL=boolean-property.js.map

/***/ }),

/***/ "./node_modules/md2/core/coercion/number-property.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export coerceNumberProperty */
/** Coerces a data-bound value (typically a string) to a number. */
/** Coerces a data-bound value (typically a string) to a number. */ function coerceNumberProperty(value, fallbackValue) {
    if (fallbackValue === void 0) { fallbackValue = 0; }
    // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
    // and other non-number values as NaN, where Number just uses 0) but it considers the string
    // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
    return isNaN(parseFloat(value)) || isNaN(Number(value)) ? fallbackValue : Number(value);
}
//# sourceMappingURL=number-property.js.map

/***/ }),

/***/ "./node_modules/md2/core/common-behaviors/color.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mixinColor;
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
/** Mixin to augment a directive with a `color` property. */
function mixinColor(base, defaultColor) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            _this._color = null;
            // Set the default color that can be specified from the mixin.
            _this.color = defaultColor;
            return _this;
        }
        Object.defineProperty(class_1.prototype, "color", {
            get: function () { return this._color; },
            set: function (value) {
                var colorPalette = value || defaultColor;
                if (colorPalette !== this._color) {
                    if (this._color) {
                        this._renderer.removeClass(this._elementRef.nativeElement, "mat-" + this._color);
                    }
                    if (colorPalette) {
                        this._renderer.addClass(this._elementRef.nativeElement, "mat-" + colorPalette);
                    }
                    this._color = colorPalette;
                }
            },
            enumerable: true,
            configurable: true
        });
        return class_1;
    }(base));
}
//# sourceMappingURL=color.js.map

/***/ }),

/***/ "./node_modules/md2/core/common-behaviors/common-module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MATERIAL_SANITY_CHECKS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdCommonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compatibility_compatibility__ = __webpack_require__("./node_modules/md2/core/compatibility/compatibility.js");
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



/** Injection token that configures whether the Material sanity checks are enabled. */
var MATERIAL_SANITY_CHECKS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('md-sanity-checks');
/**
 * Module that captures anything that should be loaded and/or run for *all* Angular Material
 * components. This includes Bidi, compatibility mode, etc.
 *
 * This module should be imported to each top-level component module (e.g., MdTabsModule).
 */
var MdCommonModule = (function () {
    function MdCommonModule(_document, _sanityChecksEnabled) {
        this._document = _document;
        /** Whether we've done the global sanity checks (e.g. a theme is loaded, there is a doctype). */
        this._hasDoneGlobalChecks = false;
        if (_sanityChecksEnabled && !this._hasDoneGlobalChecks && _document && Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])()) {
            this._checkDoctype();
            this._checkTheme();
            this._hasDoneGlobalChecks = true;
        }
    }
    MdCommonModule.prototype._checkDoctype = function () {
        if (!this._document.doctype) {
            console.warn('Current document does not have a doctype. This may cause ' +
                'some Angular Material components not to behave as expected.');
        }
    };
    MdCommonModule.prototype._checkTheme = function () {
        if (typeof getComputedStyle === 'function') {
            var testElement = this._document.createElement('div');
            testElement.classList.add('mat-theme-loaded-marker');
            this._document.body.appendChild(testElement);
            if (getComputedStyle(testElement).display !== 'none') {
                console.warn('Could not find Angular Material core theme. Most Material ' +
                    'components may not work as expected. For more info refer ' +
                    'to the theming guide: https://material.angular.io/guide/theming');
            }
            this._document.body.removeChild(testElement);
        }
    };
    return MdCommonModule;
}());
MdCommonModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__compatibility_compatibility__["a" /* CompatibilityModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__compatibility_compatibility__["a" /* CompatibilityModule */]],
        providers: [{
                provide: MATERIAL_SANITY_CHECKS, useValue: true,
            }],
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */])),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(MATERIAL_SANITY_CHECKS)),
    __metadata("design:paramtypes", [Object, Boolean])
], MdCommonModule);

//# sourceMappingURL=common-module.js.map

/***/ }),

/***/ "./node_modules/md2/core/common-behaviors/disabled.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mixinDisabled;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__coercion_boolean_property__ = __webpack_require__("./node_modules/md2/core/coercion/boolean-property.js");
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

/** Mixin to augment a directive with a `disabled` property. */
function mixinDisabled(base) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            _this._disabled = false;
            return _this;
        }
        Object.defineProperty(class_1.prototype, "disabled", {
            get: function () { return this._disabled; },
            set: function (value) { this._disabled = Object(__WEBPACK_IMPORTED_MODULE_0__coercion_boolean_property__["a" /* coerceBooleanProperty */])(value); },
            enumerable: true,
            configurable: true
        });
        return class_1;
    }(base));
}
//# sourceMappingURL=disabled.js.map

/***/ }),

/***/ "./node_modules/md2/core/compatibility/compatibility.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MATERIAL_COMPATIBILITY_MODE; });
/* unused harmony export getMdCompatibilityInvalidPrefixError */
/* unused harmony export MAT_ELEMENTS_SELECTOR */
/* unused harmony export MD_ELEMENTS_SELECTOR */
/* unused harmony export MatPrefixRejector */
/* unused harmony export MdPrefixRejector */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompatibilityModule; });
/* unused harmony export NoConflictStyleCompatibilityMode */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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

var MATERIAL_COMPATIBILITY_MODE = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('md-compatibility-mode');
/**
 * Returns an exception to be thrown if the consumer has used
 * an invalid Material prefix on a component.
 * @docs-private
 */
function getMdCompatibilityInvalidPrefixError(prefix, nodeName) {
    return Error("The \"" + prefix + "-\" prefix cannot be used in ng-material v1 compatibility mode. " +
        ("It was used on an \"" + nodeName.toLowerCase() + "\" element."));
}
/** Selector that matches all elements that may have style collisions with AngularJS Material. */
var MAT_ELEMENTS_SELECTOR = "\n  [mat-button],\n  [mat-fab],\n  [mat-icon-button],\n  [mat-mini-fab],\n  [mat-raised-button],\n  [matCardSubtitle],\n  [matCardTitle],\n  [matDialogActions],\n  [matDialogClose],\n  [matDialogContent],\n  [matDialogTitle],\n  [matLine],\n  [matTabLabel],\n  [matTabLink],\n  [matTabNav],\n  [matTooltip],\n  mat-autocomplete,\n  mat-button-toggle,\n  mat-button-toggle,\n  mat-button-toggle-group,\n  mat-card,\n  mat-card-actions,\n  mat-card-content,\n  mat-card-footer,\n  mat-card-header,\n  mat-card-subtitle,\n  mat-card-title,\n  mat-card-title-group,\n  mat-checkbox,\n  mat-chip,\n  mat-dialog-actions,\n  mat-dialog-container,\n  mat-dialog-content,\n  mat-divider,\n  mat-error,\n  mat-grid-list,\n  mat-grid-tile,\n  mat-grid-tile-footer,\n  mat-grid-tile-header,\n  mat-hint,\n  mat-icon,\n  mat-list,\n  mat-list-item,\n  mat-menu,\n  mat-nav-list,\n  mat-option,\n  mat-placeholder,\n  mat-progress-bar,\n  mat-pseudo-checkbox,\n  mat-radio-button,\n  mat-radio-group,\n  mat-select,\n  mat-sidenav,\n  mat-sidenav-container,\n  mat-slider,\n  mat-spinner,\n  mat-tab,\n  mat-tab-group,\n  mat-toolbar";
/** Selector that matches all elements that may have style collisions with AngularJS Material. */
var MD_ELEMENTS_SELECTOR = "\n  [md-button],\n  [md-fab],\n  [md-icon-button],\n  [md-mini-fab],\n  [md-raised-button],\n  [mdCardSubtitle],\n  [mdCardTitle],\n  [mdDialogActions],\n  [mdDialogClose],\n  [mdDialogContent],\n  [mdDialogTitle],\n  [mdLine],\n  [mdTabLabel],\n  [mdTabLink],\n  [mdTabNav],\n  [mdTooltip],\n  md-autocomplete,\n  md-button-toggle,\n  md-button-toggle,\n  md-button-toggle-group,\n  md-card,\n  md-card-actions,\n  md-card-content,\n  md-card-footer,\n  md-card-header,\n  md-card-subtitle,\n  md-card-title,\n  md-card-title-group,\n  md-checkbox,\n  md-chip,\n  md-dialog-actions,\n  md-dialog-container,\n  md-dialog-content,\n  md-divider,\n  md-error,\n  md-grid-list,\n  md-grid-tile,\n  md-grid-tile-footer,\n  md-grid-tile-header,\n  md-hint,\n  md-icon,\n  md-list,\n  md-list-item,\n  md-menu,\n  md-nav-list,\n  md-option,\n  md-placeholder,\n  md-progress-bar,\n  md-pseudo-checkbox,\n  md-radio-button,\n  md-radio-group,\n  md-select,\n  md-sidenav,\n  md-sidenav-container,\n  md-slider,\n  md-spinner,\n  md-tab,\n  md-tab-group,\n  md-toolbar";
/** Directive that enforces that the `mat-` prefix cannot be used. */
var MatPrefixRejector = (function () {
    function MatPrefixRejector(isCompatibilityMode, elementRef) {
        if (!isCompatibilityMode) {
            throw getMdCompatibilityInvalidPrefixError('mat', elementRef.nativeElement.nodeName);
        }
    }
    return MatPrefixRejector;
}());
MatPrefixRejector = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: MAT_ELEMENTS_SELECTOR }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(MATERIAL_COMPATIBILITY_MODE)),
    __metadata("design:paramtypes", [Boolean, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], MatPrefixRejector);

/** Directive that enforces that the `md-` prefix cannot be used. */
var MdPrefixRejector = (function () {
    function MdPrefixRejector(isCompatibilityMode, elementRef) {
        if (isCompatibilityMode) {
            throw getMdCompatibilityInvalidPrefixError('md', elementRef.nativeElement.nodeName);
        }
    }
    return MdPrefixRejector;
}());
MdPrefixRejector = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: MD_ELEMENTS_SELECTOR }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(MATERIAL_COMPATIBILITY_MODE)),
    __metadata("design:paramtypes", [Boolean, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], MdPrefixRejector);

/**
 * Module that enforces the default compatibility mode settings. When this module is loaded
 * without NoConflictStyleCompatibilityMode also being imported, it will throw an error if
 * there are any uses of the `mat-` prefix.
 */
var CompatibilityModule = (function () {
    function CompatibilityModule() {
    }
    return CompatibilityModule;
}());
CompatibilityModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [MatPrefixRejector, MdPrefixRejector],
        exports: [MatPrefixRejector, MdPrefixRejector],
    })
], CompatibilityModule);

/**
 * Module that enforces "no-conflict" compatibility mode settings. When this module is loaded,
 * it will throw an error if there are any uses of the `md-` prefix.
 */
var NoConflictStyleCompatibilityMode = (function () {
    function NoConflictStyleCompatibilityMode() {
    }
    return NoConflictStyleCompatibilityMode;
}());
NoConflictStyleCompatibilityMode = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        providers: [{
                provide: MATERIAL_COMPATIBILITY_MODE, useValue: true,
            }],
    })
], NoConflictStyleCompatibilityMode);

//# sourceMappingURL=compatibility.js.map

/***/ }),

/***/ "./node_modules/md2/core/coordination/unique-selection-dispatcher.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UniqueSelectionDispatcher */
/* unused harmony export UNIQUE_SELECTION_DISPATCHER_PROVIDER_FACTORY */
/* unused harmony export UNIQUE_SELECTION_DISPATCHER_PROVIDER */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Class to coordinate unique selection based on name.
 * Intended to be consumed as an Angular service.
 * This service is needed because native radio change events are only fired on the item currently
 * being selected, and we still need to uncheck the previous selection.
 *
 * This service does not *store* any IDs and names because they may change at any time, so it is
 * less error-prone if they are simply passed through when the events occur.
 */
var UniqueSelectionDispatcher = (function () {
    function UniqueSelectionDispatcher() {
        this._listeners = [];
    }
    /**
     * Notify other items that selection for the given name has been set.
     * @param id ID of the item.
     * @param name Name of the item.
     */
    UniqueSelectionDispatcher.prototype.notify = function (id, name) {
        for (var _i = 0, _a = this._listeners; _i < _a.length; _i++) {
            var listener = _a[_i];
            listener(id, name);
        }
    };
    /** Listen for future changes to item selection. */
    UniqueSelectionDispatcher.prototype.listen = function (listener) {
        this._listeners.push(listener);
    };
    return UniqueSelectionDispatcher;
}());
UniqueSelectionDispatcher = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], UniqueSelectionDispatcher);

function UNIQUE_SELECTION_DISPATCHER_PROVIDER_FACTORY(parentDispatcher) {
    return parentDispatcher || new UniqueSelectionDispatcher();
}
var UNIQUE_SELECTION_DISPATCHER_PROVIDER = {
    // If there is already a dispatcher available, use that. Otherwise, provide a new one.
    provide: UniqueSelectionDispatcher,
    deps: [[new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"](), new __WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"](), UniqueSelectionDispatcher]],
    useFactory: UNIQUE_SELECTION_DISPATCHER_PROVIDER_FACTORY
};
//# sourceMappingURL=unique-selection-dispatcher.js.map

/***/ }),

/***/ "./node_modules/md2/core/core.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MdCoreModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__line_line__ = __webpack_require__("./node_modules/md2/core/line/line.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rtl_dir__ = __webpack_require__("./node_modules/md2/core/rtl/dir.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__observe_content_observe_content__ = __webpack_require__("./node_modules/md2/core/observe-content/observe-content.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__option_index__ = __webpack_require__("./node_modules/md2/core/option/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__portal_portal_directives__ = __webpack_require__("./node_modules/md2/core/portal/portal-directives.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__overlay_overlay_directives__ = __webpack_require__("./node_modules/md2/core/overlay/overlay-directives.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__a11y_index__ = __webpack_require__("./node_modules/md2/core/a11y/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__selection_index__ = __webpack_require__("./node_modules/md2/core/selection/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ripple_index__ = __webpack_require__("./node_modules/md2/core/ripple/index.js");
/* unused harmony reexport Dir */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_2__rtl_dir__["b"]; });
/* unused harmony reexport ObserveContentModule */
/* unused harmony reexport ObserveContent */
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__portal_portal__ = __webpack_require__("./node_modules/md2/core/portal/portal.js");
/* unused harmony reexport Portal */
/* unused harmony reexport BasePortalHost */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_10__portal_portal__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_10__portal_portal__["c"]; });
/* unused harmony reexport PortalHostDirective */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_5__portal_portal_directives__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_5__portal_portal_directives__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__portal_dom_portal_host__ = __webpack_require__("./node_modules/md2/core/portal/dom-portal-host.js");
/* unused harmony reexport DomPortalHost */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__platform_index__ = __webpack_require__("./node_modules/md2/core/platform/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__overlay_index__ = __webpack_require__("./node_modules/md2/core/overlay/index.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_13__overlay_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_13__overlay_index__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_13__overlay_index__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__gestures_gesture_config__ = __webpack_require__("./node_modules/md2/core/gestures/gesture-config.js");
/* unused harmony reexport GestureConfig */
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_9__ripple_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__a11y_live_announcer__ = __webpack_require__("./node_modules/md2/core/a11y/live-announcer.js");
/* unused harmony reexport LiveAnnouncer */
/* unused harmony reexport LIVE_ANNOUNCER_ELEMENT_TOKEN */
/* unused harmony reexport LIVE_ANNOUNCER_PROVIDER */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__selection_selection__ = __webpack_require__("./node_modules/md2/core/selection/selection.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__a11y_focus_trap__ = __webpack_require__("./node_modules/md2/core/a11y/focus-trap.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__a11y_interactivity_checker__ = __webpack_require__("./node_modules/md2/core/a11y/interactivity-checker.js");
/* unused harmony reexport InteractivityChecker */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__a11y_fake_mousedown__ = __webpack_require__("./node_modules/md2/core/a11y/fake-mousedown.js");
/* unused harmony reexport isFakeMousedownFromScreenReader */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_7__a11y_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__coordination_unique_selection_dispatcher__ = __webpack_require__("./node_modules/md2/core/coordination/unique-selection-dispatcher.js");
/* unused harmony reexport UniqueSelectionDispatcher */
/* unused harmony reexport UNIQUE_SELECTION_DISPATCHER_PROVIDER */
/* unused harmony reexport MdLineModule */
/* unused harmony reexport MdLine */
/* unused harmony reexport MdLineSetter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__style_index__ = __webpack_require__("./node_modules/md2/core/style/index.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_21__style_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__keyboard_keycodes__ = __webpack_require__("./node_modules/md2/core/keyboard/keycodes.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_22__keyboard_keycodes__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_22__keyboard_keycodes__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_22__keyboard_keycodes__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_22__keyboard_keycodes__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_22__keyboard_keycodes__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_22__keyboard_keycodes__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_22__keyboard_keycodes__["l"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_22__keyboard_keycodes__["n"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_22__keyboard_keycodes__["o"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__compatibility_compatibility__ = __webpack_require__("./node_modules/md2/core/compatibility/compatibility.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__animation_animation__ = __webpack_require__("./node_modules/md2/core/animation/animation.js");
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__coercion_boolean_property__ = __webpack_require__("./node_modules/md2/core/coercion/boolean-property.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_25__coercion_boolean_property__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__coercion_number_property__ = __webpack_require__("./node_modules/md2/core/coercion/number-property.js");
/* unused harmony reexport coerceNumberProperty */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_23__compatibility_compatibility__["a"]; });
/* unused harmony reexport NoConflictStyleCompatibilityMode */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__common_behaviors_common_module__ = __webpack_require__("./node_modules/md2/core/common-behaviors/common-module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_27__common_behaviors_common_module__["a"]; });
/* unused harmony reexport MATERIAL_SANITY_CHECKS */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__datetime_index__ = __webpack_require__("./node_modules/md2/core/datetime/index.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_28__datetime_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__placeholder_placeholder_options__ = __webpack_require__("./node_modules/md2/core/placeholder/placeholder-options.js");
/* unused harmony reexport MD_PLACEHOLDER_GLOBAL_OPTIONS */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// RTL

// Mutation Observer


// Portals



// Platform

// Overlay

// Gestures

// Ripple

// a11y

// Selection







// Style

// Keybindings


// Animation

// Selection

// Coercion


// Compatibility

// Common material module

// Datetime

// Placeholder

var MdCoreModule = (function () {
    function MdCoreModule() {
    }
    return MdCoreModule;
}());
MdCoreModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__line_line__["a" /* MdLineModule */],
            __WEBPACK_IMPORTED_MODULE_2__rtl_dir__["b" /* RtlModule */],
            __WEBPACK_IMPORTED_MODULE_9__ripple_index__["a" /* MdRippleModule */],
            __WEBPACK_IMPORTED_MODULE_3__observe_content_observe_content__["a" /* ObserveContentModule */],
            __WEBPACK_IMPORTED_MODULE_5__portal_portal_directives__["a" /* PortalModule */],
            __WEBPACK_IMPORTED_MODULE_6__overlay_overlay_directives__["b" /* OverlayModule */],
            __WEBPACK_IMPORTED_MODULE_7__a11y_index__["a" /* A11yModule */],
            __WEBPACK_IMPORTED_MODULE_4__option_index__["a" /* MdOptionModule */],
            __WEBPACK_IMPORTED_MODULE_8__selection_index__["a" /* MdSelectionModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__line_line__["a" /* MdLineModule */],
            __WEBPACK_IMPORTED_MODULE_2__rtl_dir__["b" /* RtlModule */],
            __WEBPACK_IMPORTED_MODULE_9__ripple_index__["a" /* MdRippleModule */],
            __WEBPACK_IMPORTED_MODULE_3__observe_content_observe_content__["a" /* ObserveContentModule */],
            __WEBPACK_IMPORTED_MODULE_5__portal_portal_directives__["a" /* PortalModule */],
            __WEBPACK_IMPORTED_MODULE_6__overlay_overlay_directives__["b" /* OverlayModule */],
            __WEBPACK_IMPORTED_MODULE_7__a11y_index__["a" /* A11yModule */],
            __WEBPACK_IMPORTED_MODULE_4__option_index__["a" /* MdOptionModule */],
            __WEBPACK_IMPORTED_MODULE_8__selection_index__["a" /* MdSelectionModule */],
        ],
    })
], MdCoreModule);

//# sourceMappingURL=core.js.map

/***/ }),

/***/ "./node_modules/md2/core/datetime/date-adapter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateAdapter; });
/** Adapts type `D` to be usable as a date by cdk-based components that work with dates. */
var DateAdapter = (function () {
    function DateAdapter() {
    }
    /**
     * Sets the locale used for all dates.
     * @param locale The new locale.
     */
    DateAdapter.prototype.setLocale = function (locale) {
        this.locale = locale;
    };
    /**
     * Compares two dates.
     * @param first The first date to compare.
     * @param second The second date to compare.
     * @returns 0 if the dates are equal, a number less than 0 if the first date is earlier,
     *     a number greater than 0 if the first date is later.
     */
    DateAdapter.prototype.compareDate = function (first, second) {
        return this.getYear(first) - this.getYear(second) ||
            this.getMonth(first) - this.getMonth(second) ||
            this.getDate(first) - this.getDate(second);
    };
    /**
     * Checks if two dates are equal.
     * @param first The first date to check.
     * @param second The second date to check.
     * @returns {boolean} Whether the two dates are equal.
     *     Null dates are considered equal to other null dates.
     */
    DateAdapter.prototype.sameDate = function (first, second) {
        return first && second ? !this.compareDate(first, second) : first == second;
    };
    /**
     * Clamp the given date between min and max dates.
     * @param date The date to clamp.
     * @param min The minimum value to allow. If null or omitted no min is enforced.
     * @param max The maximum value to allow. If null or omitted no max is enforced.
     * @returns `min` if `date` is less than `min`, `max` if date is greater than `max`,
     *     otherwise `date`.
     */
    DateAdapter.prototype.clampDate = function (date, min, max) {
        if (min && this.compareDate(date, min) < 0) {
            return min;
        }
        if (max && this.compareDate(date, max) > 0) {
            return max;
        }
        return date;
    };
    return DateAdapter;
}());

//# sourceMappingURL=date-adapter.js.map

/***/ }),

/***/ "./node_modules/md2/core/datetime/date-formats.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MD_DATE_FORMATS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var MD_DATE_FORMATS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('md-date-formats');
//# sourceMappingURL=date-formats.js.map

/***/ }),

/***/ "./node_modules/md2/core/datetime/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NativeDateModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdNativeDateModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__date_adapter__ = __webpack_require__("./node_modules/md2/core/datetime/date-adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__native_date_adapter__ = __webpack_require__("./node_modules/md2/core/datetime/native-date-adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__date_formats__ = __webpack_require__("./node_modules/md2/core/datetime/date-formats.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__native_date_formats__ = __webpack_require__("./node_modules/md2/core/datetime/native-date-formats.js");
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var NativeDateModule = (function () {
    function NativeDateModule() {
    }
    return NativeDateModule;
}());
NativeDateModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__date_adapter__["a" /* DateAdapter */], useClass: __WEBPACK_IMPORTED_MODULE_2__native_date_adapter__["a" /* NativeDateAdapter */] }],
    })
], NativeDateModule);

var MdNativeDateModule = (function () {
    function MdNativeDateModule() {
    }
    return MdNativeDateModule;
}());
MdNativeDateModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [NativeDateModule],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_3__date_formats__["a" /* MD_DATE_FORMATS */], useValue: __WEBPACK_IMPORTED_MODULE_4__native_date_formats__["a" /* MD_NATIVE_DATE_FORMATS */] }],
    })
], MdNativeDateModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/md2/core/datetime/native-date-adapter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeDateAdapter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__date_adapter__ = __webpack_require__("./node_modules/md2/core/datetime/date-adapter.js");
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

// TODO(mmalerba): Remove when we no longer support safari 9.
/** Whether the browser supports the Intl API. */
var SUPPORTS_INTL_API = typeof Intl != 'undefined';
/** The default month names to use if Intl API is not available. */
var DEFAULT_MONTH_NAMES = {
    'long': [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December'
    ],
    'short': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    'narrow': ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
};
/** The default date names to use if Intl API is not available. */
var DEFAULT_DATE_NAMES = range(31, function (i) { return String(i + 1); });
/** The default day of the week names to use if Intl API is not available. */
var DEFAULT_DAY_OF_WEEK_NAMES = {
    'long': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    'short': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    'narrow': ['S', 'M', 'T', 'W', 'T', 'F', 'S']
};
/** Creates an array and fills it with values. */
function range(length, valueFunction) {
    var valuesArray = Array(length);
    for (var i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
    }
    return valuesArray;
}
/** Adapts the native JS Date for use with cdk-based components that work with dates. */
var NativeDateAdapter = (function (_super) {
    __extends(NativeDateAdapter, _super);
    function NativeDateAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NativeDateAdapter.prototype.getYear = function (date) {
        return date.getFullYear();
    };
    NativeDateAdapter.prototype.getMonth = function (date) {
        return date.getMonth();
    };
    NativeDateAdapter.prototype.getDate = function (date) {
        return date.getDate();
    };
    NativeDateAdapter.prototype.getDayOfWeek = function (date) {
        return date.getDay();
    };
    NativeDateAdapter.prototype.getMonthNames = function (style) {
        var _this = this;
        if (SUPPORTS_INTL_API) {
            var dtf_1 = new Intl.DateTimeFormat(this.locale, { month: style });
            return range(12, function (i) { return _this._stripDirectionalityCharacters(dtf_1.format(new Date(2017, i, 1))); });
        }
        return DEFAULT_MONTH_NAMES[style];
    };
    NativeDateAdapter.prototype.getDateNames = function () {
        var _this = this;
        if (SUPPORTS_INTL_API) {
            var dtf_2 = new Intl.DateTimeFormat(this.locale, { day: 'numeric' });
            return range(31, function (i) { return _this._stripDirectionalityCharacters(dtf_2.format(new Date(2017, 0, i + 1))); });
        }
        return DEFAULT_DATE_NAMES;
    };
    NativeDateAdapter.prototype.getDayOfWeekNames = function (style) {
        var _this = this;
        if (SUPPORTS_INTL_API) {
            var dtf_3 = new Intl.DateTimeFormat(this.locale, { weekday: style });
            return range(7, function (i) { return _this._stripDirectionalityCharacters(dtf_3.format(new Date(2017, 0, i + 1))); });
        }
        return DEFAULT_DAY_OF_WEEK_NAMES[style];
    };
    NativeDateAdapter.prototype.getYearName = function (date) {
        if (SUPPORTS_INTL_API) {
            var dtf = new Intl.DateTimeFormat(this.locale, { year: 'numeric' });
            return this._stripDirectionalityCharacters(dtf.format(date));
        }
        return String(this.getYear(date));
    };
    NativeDateAdapter.prototype.getFirstDayOfWeek = function () {
        // We can't tell using native JS Date what the first day of the week is, we default to Sunday.
        return 0;
    };
    NativeDateAdapter.prototype.getNumDaysInMonth = function (date) {
        return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
    };
    NativeDateAdapter.prototype.clone = function (date) {
        return this.createDate(this.getYear(date), this.getMonth(date), this.getDate(date));
    };
    NativeDateAdapter.prototype.createDate = function (year, month, date) {
        // Check for invalid month and date (except upper bound on date which we have to check after
        // creating the Date).
        if (month < 0 || month > 11 || date < 1) {
            return null;
        }
        var result = this._createDateWithOverflow(year, month, date);
        // Check that the date wasn't above the upper bound for the month, causing the month to
        // overflow.
        if (result.getMonth() != month) {
            return null;
        }
        return result;
    };
    NativeDateAdapter.prototype.today = function () {
        return new Date();
    };
    NativeDateAdapter.prototype.parse = function (value) {
        // We have no way using the native JS Date to set the parse format or locale, so we ignore these
        // parameters.
        var timestamp = typeof value == 'number' ? value : Date.parse(value);
        return isNaN(timestamp) ? null : new Date(timestamp);
    };
    NativeDateAdapter.prototype.format = function (date, displayFormat) {
        if (SUPPORTS_INTL_API) {
            var dtf = new Intl.DateTimeFormat(this.locale, displayFormat);
            return this._stripDirectionalityCharacters(dtf.format(date));
        }
        return this._stripDirectionalityCharacters(date.toDateString());
    };
    NativeDateAdapter.prototype.addCalendarYears = function (date, years) {
        return this.addCalendarMonths(date, years * 12);
    };
    NativeDateAdapter.prototype.addCalendarMonths = function (date, months) {
        var newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date));
        // It's possible to wind up in the wrong month if the original month has more days than the new
        // month. In this case we want to go to the last day of the desired month.
        // Note: the additional + 12 % 12 ensures we end up with a positive number, since JS % doesn't
        // guarantee this.
        if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
            newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
        }
        return newDate;
    };
    NativeDateAdapter.prototype.addCalendarDays = function (date, days) {
        return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
    };
    NativeDateAdapter.prototype.getISODateString = function (date) {
        return [
            date.getUTCFullYear(),
            this._2digit(date.getUTCMonth() + 1),
            this._2digit(date.getUTCDate())
        ].join('-');
    };
    /** Creates a date but allows the month and date to overflow. */
    NativeDateAdapter.prototype._createDateWithOverflow = function (year, month, date) {
        var result = new Date(year, month, date);
        // We need to correct for the fact that JS native Date treats years in range [0, 99] as
        // abbreviations for 19xx.
        if (year >= 0 && year < 100) {
            result.setFullYear(this.getYear(result) - 1900);
        }
        return result;
    };
    /**
     * Pads a number to make it two digits.
     * @param n The number to pad.
     * @returns The padded number.
     */
    NativeDateAdapter.prototype._2digit = function (n) {
        return ('00' + n).slice(-2);
    };
    /**
     * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
     * other browsers do not. We remove them to make output consistent and because they interfere with
     * date parsing.
     * @param s The string to strip direction characters from.
     * @returns The stripped string.
     */
    NativeDateAdapter.prototype._stripDirectionalityCharacters = function (s) {
        return s.replace(/[\u200e\u200f]/g, '');
    };
    return NativeDateAdapter;
}(__WEBPACK_IMPORTED_MODULE_0__date_adapter__["a" /* DateAdapter */]));

//# sourceMappingURL=native-date-adapter.js.map

/***/ }),

/***/ "./node_modules/md2/core/datetime/native-date-formats.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MD_NATIVE_DATE_FORMATS; });
var MD_NATIVE_DATE_FORMATS = {
    parse: {
        dateInput: null,
    },
    display: {
        dateInput: { year: 'numeric', month: 'numeric', day: 'numeric' },
        monthYearLabel: { year: 'numeric', month: 'short' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};
//# sourceMappingURL=native-date-formats.js.map

/***/ }),

/***/ "./node_modules/md2/core/gestures/gesture-config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GestureConfig */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* Adjusts configuration of our gesture library, Hammer. */
var GestureConfig = (function (_super) {
    __extends(GestureConfig, _super);
    function GestureConfig() {
        var _this = _super.call(this) || this;
        _this._hammer = typeof window !== 'undefined' ? window.Hammer : null;
        /* List of new event names to add to the gesture support list */
        _this.events = _this._hammer ? [
            'longpress',
            'slide',
            'slidestart',
            'slideend',
            'slideright',
            'slideleft'
        ] : [];
        if (!_this._hammer && Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])()) {
            console.warn('Could not find HammerJS. Certain Angular Material ' +
                'components may not work correctly.');
        }
        return _this;
    }
    /**
     * Builds Hammer instance manually to add custom recognizers that match the Material Design spec.
     *
     * Our gesture names come from the Material Design gestures spec:
     * https://www.google.com/design/spec/patterns/gestures.html#gestures-touch-mechanics
     *
     * More information on default recognizers can be found in Hammer docs:
     * http://hammerjs.github.io/recognizer-pan/
     * http://hammerjs.github.io/recognizer-press/
     *
     * @param element Element to which to assign the new HammerJS gestures.
     * @returns Newly-created HammerJS instance.
     */
    GestureConfig.prototype.buildHammer = function (element) {
        var mc = new this._hammer(element);
        // Default Hammer Recognizers.
        var pan = new this._hammer.Pan();
        var swipe = new this._hammer.Swipe();
        var press = new this._hammer.Press();
        // Notice that a HammerJS recognizer can only depend on one other recognizer once.
        // Otherwise the previous `recognizeWith` will be dropped.
        // TODO: Confirm threshold numbers with Material Design UX Team
        var slide = this._createRecognizer(pan, { event: 'slide', threshold: 0 }, swipe);
        var longpress = this._createRecognizer(press, { event: 'longpress', time: 500 });
        // Overwrite the default `pan` event to use the swipe event.
        pan.recognizeWith(swipe);
        // Add customized gestures to Hammer manager
        mc.add([swipe, press, pan, slide, longpress]);
        return mc;
    };
    /** Creates a new recognizer, without affecting the default recognizers of HammerJS */
    GestureConfig.prototype._createRecognizer = function (base, options) {
        var inheritances = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            inheritances[_i - 2] = arguments[_i];
        }
        var recognizer = new base.constructor(options);
        inheritances.push(base);
        inheritances.forEach(function (item) { return recognizer.recognizeWith(item); });
        return recognizer;
    };
    return GestureConfig;
}(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["e" /* HammerGestureConfig */]));
GestureConfig = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], GestureConfig);

//# sourceMappingURL=gesture-config.js.map

/***/ }),

/***/ "./node_modules/md2/core/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__("./node_modules/md2/core/core.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__core__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__core__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__core__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__core__["j"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__core__["k"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__core__["l"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__core__["m"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__core__["n"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_0__core__["o"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_0__core__["p"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_0__core__["r"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_0__core__["s"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_0__core__["u"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_0__core__["x"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/md2/core/keyboard/keycodes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return UP_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DOWN_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return RIGHT_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LEFT_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return PAGE_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return PAGE_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return SPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return TAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ESCAPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BACKSPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return COMMA; });
// Due to a bug in the ChromeDriver, Angular keyboard events are not triggered by `sendKeys`
// during E2E tests when using dot notation such as `(keydown.rightArrow)`. To get around this,
// we are temporarily using a single (keydown) handler.
// See: https://github.com/angular/angular/issues/9419
var UP_ARROW = 38;
var DOWN_ARROW = 40;
var RIGHT_ARROW = 39;
var LEFT_ARROW = 37;
var PAGE_UP = 33;
var PAGE_DOWN = 34;
var HOME = 36;
var END = 35;
var ENTER = 13;
var SPACE = 32;
var TAB = 9;
var ESCAPE = 27;
var BACKSPACE = 8;
var DELETE = 46;
var COMMA = 188;
//# sourceMappingURL=keycodes.js.map

/***/ }),

/***/ "./node_modules/md2/core/line/line.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MdLine */
/* unused harmony export MdLineSetter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdLineModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_behaviors_common_module__ = __webpack_require__("./node_modules/md2/core/common-behaviors/common-module.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Shared directive to count lines inside a text area, such as a list item.
 * Line elements can be extracted with a @ContentChildren(MdLine) query, then
 * counted by checking the query list's length.
 */
var MdLine = (function () {
    function MdLine() {
    }
    return MdLine;
}());
MdLine = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[md-line], [mat-line], [mdLine], [matLine]',
        host: { 'class': 'mat-line' }
    })
], MdLine);

/**
 * Helper that takes a query list of lines and sets the correct class on the host.
 * @docs-private
 */
var MdLineSetter = (function () {
    function MdLineSetter(_lines, _renderer, _element) {
        var _this = this;
        this._lines = _lines;
        this._renderer = _renderer;
        this._element = _element;
        this._setLineClass(this._lines.length);
        this._lines.changes.subscribe(function () {
            _this._setLineClass(_this._lines.length);
        });
    }
    MdLineSetter.prototype._setLineClass = function (count) {
        this._resetClasses();
        if (count === 2 || count === 3) {
            this._setClass("mat-" + count + "-line", true);
        }
        else if (count > 3) {
            this._setClass("mat-multi-line", true);
        }
    };
    MdLineSetter.prototype._resetClasses = function () {
        this._setClass('mat-2-line', false);
        this._setClass('mat-3-line', false);
        this._setClass('mat-multi-line', false);
    };
    MdLineSetter.prototype._setClass = function (className, isAdd) {
        if (isAdd) {
            this._renderer.addClass(this._element.nativeElement, className);
        }
        else {
            this._renderer.removeClass(this._element.nativeElement, className);
        }
    };
    return MdLineSetter;
}());

var MdLineModule = (function () {
    function MdLineModule() {
    }
    return MdLineModule;
}());
MdLineModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__common_behaviors_common_module__["a" /* MdCommonModule */]],
        exports: [MdLine, __WEBPACK_IMPORTED_MODULE_1__common_behaviors_common_module__["a" /* MdCommonModule */]],
        declarations: [MdLine],
    })
], MdLineModule);

//# sourceMappingURL=line.js.map

/***/ }),

/***/ "./node_modules/md2/core/observe-content/observe-content.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MdMutationObserverFactory */
/* unused harmony export ObserveContent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObserveContentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Factory that creates a new MutationObserver and allows us to stub it out in unit tests.
 * @docs-private
 */
var MdMutationObserverFactory = (function () {
    function MdMutationObserverFactory() {
    }
    MdMutationObserverFactory.prototype.create = function (callback) {
        return typeof MutationObserver === 'undefined' ? null : new MutationObserver(callback);
    };
    return MdMutationObserverFactory;
}());
MdMutationObserverFactory = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], MdMutationObserverFactory);

/**
 * Directive that triggers a callback whenever the content of
 * its associated element has changed.
 */
var ObserveContent = (function () {
    function ObserveContent(_mutationObserverFactory, _elementRef) {
        this._mutationObserverFactory = _mutationObserverFactory;
        this._elementRef = _elementRef;
        /** Event emitted for each change in the element's content. */
        this.event = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** Used for debouncing the emitted values to the observeContent event. */
        this._debouncer = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["b" /* Subject */]();
    }
    ObserveContent.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.debounce > 0) {
            this._debouncer
                .debounceTime(this.debounce)
                .subscribe(function (mutations) { return _this.event.emit(mutations); });
        }
        else {
            this._debouncer.subscribe(function (mutations) { return _this.event.emit(mutations); });
        }
        this._observer = this._mutationObserverFactory.create(function (mutations) {
            _this._debouncer.next(mutations);
        });
        if (this._observer) {
            this._observer.observe(this._elementRef.nativeElement, {
                characterData: true,
                childList: true,
                subtree: true
            });
        }
    };
    ObserveContent.prototype.ngOnDestroy = function () {
        if (this._observer) {
            this._observer.disconnect();
            this._debouncer.complete();
            this._debouncer = this._observer = null;
        }
    };
    return ObserveContent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('cdkObserveContent'),
    __metadata("design:type", Object)
], ObserveContent.prototype, "event", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], ObserveContent.prototype, "debounce", void 0);
ObserveContent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[cdkObserveContent]'
    }),
    __metadata("design:paramtypes", [MdMutationObserverFactory,
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], ObserveContent);

var ObserveContentModule = (function () {
    function ObserveContentModule() {
    }
    return ObserveContentModule;
}());
ObserveContentModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        exports: [ObserveContent],
        declarations: [ObserveContent],
        providers: [MdMutationObserverFactory]
    })
], ObserveContentModule);

//# sourceMappingURL=observe-content.js.map

/***/ }),

/***/ "./node_modules/md2/core/option/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdOptionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ripple_index__ = __webpack_require__("./node_modules/md2/core/ripple/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selection_index__ = __webpack_require__("./node_modules/md2/core/selection/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__option__ = __webpack_require__("./node_modules/md2/core/option/option.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__optgroup__ = __webpack_require__("./node_modules/md2/core/option/optgroup.js");
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MdOptionModule = (function () {
    function MdOptionModule() {
    }
    return MdOptionModule;
}());
MdOptionModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__ripple_index__["a" /* MdRippleModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__selection_index__["a" /* MdSelectionModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_4__option__["a" /* MdOption */], __WEBPACK_IMPORTED_MODULE_5__optgroup__["a" /* MdOptgroup */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__option__["a" /* MdOption */], __WEBPACK_IMPORTED_MODULE_5__optgroup__["a" /* MdOptgroup */]]
    })
], MdOptionModule);



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/md2/core/option/optgroup.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MdOptgroupBase */
/* unused harmony export _MdOptgroupMixinBase */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdOptgroup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_behaviors_disabled__ = __webpack_require__("./node_modules/md2/core/common-behaviors/disabled.js");
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Boilerplate for applying mixins to MdOptgroup.
var MdOptgroupBase = (function () {
    function MdOptgroupBase() {
    }
    return MdOptgroupBase;
}());

var _MdOptgroupMixinBase = Object(__WEBPACK_IMPORTED_MODULE_1__common_behaviors_disabled__["a" /* mixinDisabled */])(MdOptgroupBase);
// Counter for unique group ids.
var _uniqueOptgroupIdCounter = 0;
/**
 * Component that is used to group instances of `md-option`.
 */
var MdOptgroup = (function (_super) {
    __extends(MdOptgroup, _super);
    function MdOptgroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** Unique id for the underlying label. */
        _this._labelId = "mat-optgroup-label-" + _uniqueOptgroupIdCounter++;
        return _this;
    }
    return MdOptgroup;
}(_MdOptgroupMixinBase));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MdOptgroup.prototype, "label", void 0);
MdOptgroup = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({selector: 'md-optgroup, mat-optgroup',
        template: "<label class=\"mat-optgroup-label\" [id]=\"_labelId\">{{ label }}</label><ng-content select=\"md-option, mat-option\"></ng-content>",
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        inputs: ['disabled'],
        host: {
            'class': 'mat-optgroup',
            'role': 'group',
            '[class.mat-optgroup-disabled]': 'disabled',
            '[attr.aria-disabled]': 'disabled.toString()',
            '[attr.aria-labelledby]': '_labelId',
        }
    })
], MdOptgroup);

//# sourceMappingURL=optgroup.js.map

/***/ }),

/***/ "./node_modules/md2/core/option/option.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MdOptionSelectionChange */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdOption; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keyboard_keycodes__ = __webpack_require__("./node_modules/md2/core/keyboard/keycodes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coercion_boolean_property__ = __webpack_require__("./node_modules/md2/core/coercion/boolean-property.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_compatibility_compatibility__ = __webpack_require__("./node_modules/md2/core/compatibility/compatibility.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__optgroup__ = __webpack_require__("./node_modules/md2/core/option/optgroup.js");
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





/**
 * Option IDs need to be unique across components, so this counter exists outside of
 * the component definition.
 */
var _uniqueIdCounter = 0;
/** Event object emitted by MdOption when selected or deselected. */
var MdOptionSelectionChange = (function () {
    function MdOptionSelectionChange(source, isUserInput) {
        if (isUserInput === void 0) { isUserInput = false; }
        this.source = source;
        this.isUserInput = isUserInput;
    }
    return MdOptionSelectionChange;
}());

/**
 * Single option inside of a `<md-select>` element.
 */
var MdOption = (function () {
    function MdOption(_element, group, _isCompatibilityMode) {
        this._element = _element;
        this.group = group;
        this._isCompatibilityMode = _isCompatibilityMode;
        this._selected = false;
        this._active = false;
        /** Whether the option is disabled.  */
        this._disabled = false;
        this._id = "md-option-" + _uniqueIdCounter++;
        /** Whether the wrapping component is in multiple selection mode. */
        this.multiple = false;
        /** Event emitted when the option is selected or deselected. */
        this.onSelectionChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(MdOption.prototype, "id", {
        /** The unique ID of the option. */
        get: function () { return this._id; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdOption.prototype, "selected", {
        /** Whether or not the option is currently selected. */
        get: function () { return this._selected; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdOption.prototype, "disabled", {
        /** Whether the option is disabled. */
        get: function () { return (this.group && this.group.disabled) || this._disabled; },
        set: function (value) { this._disabled = Object(__WEBPACK_IMPORTED_MODULE_2__coercion_boolean_property__["a" /* coerceBooleanProperty */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdOption.prototype, "active", {
        /**
         * Whether or not the option is currently active and ready to be selected.
         * An active option displays styles as if it is focused, but the
         * focus is actually retained somewhere else. This comes in handy
         * for components like autocomplete where focus must remain on the input.
         */
        get: function () {
            return this._active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdOption.prototype, "viewValue", {
        /**
         * The displayed value of the option. It is necessary to show the selected option in the
         * select's trigger.
         */
        get: function () {
            // TODO(kara): Add input property alternative for node envs.
            return this._getHostElement().textContent.trim();
        },
        enumerable: true,
        configurable: true
    });
    /** Selects the option. */
    MdOption.prototype.select = function () {
        this._selected = true;
        this._emitSelectionChangeEvent();
    };
    /** Deselects the option. */
    MdOption.prototype.deselect = function () {
        this._selected = false;
        this._emitSelectionChangeEvent();
    };
    /** Sets focus onto this option. */
    MdOption.prototype.focus = function () {
        this._getHostElement().focus();
    };
    /**
     * This method sets display styles on the option to make it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     */
    MdOption.prototype.setActiveStyles = function () {
        this._active = true;
    };
    /**
     * This method removes display styles on the option that made it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     */
    MdOption.prototype.setInactiveStyles = function () {
        this._active = false;
    };
    /** Ensures the option is selected when activated from the keyboard. */
    MdOption.prototype._handleKeydown = function (event) {
        if (event.keyCode === __WEBPACK_IMPORTED_MODULE_1__keyboard_keycodes__["f" /* ENTER */] || event.keyCode === __WEBPACK_IMPORTED_MODULE_1__keyboard_keycodes__["m" /* SPACE */]) {
            this._selectViaInteraction();
        }
    };
    /**
     * Selects the option while indicating the selection came from the user. Used to
     * determine if the select's view -> model callback should be invoked.
     */
    MdOption.prototype._selectViaInteraction = function () {
        if (!this.disabled) {
            this._selected = this.multiple ? !this._selected : true;
            this._emitSelectionChangeEvent(true);
        }
    };
    /** Returns the correct tabindex for the option depending on disabled state. */
    MdOption.prototype._getTabIndex = function () {
        return this.disabled ? '-1' : '0';
    };
    /** Fetches the host DOM element. */
    MdOption.prototype._getHostElement = function () {
        return this._element.nativeElement;
    };
    /** Emits the selection change event. */
    MdOption.prototype._emitSelectionChangeEvent = function (isUserInput) {
        if (isUserInput === void 0) { isUserInput = false; }
        this.onSelectionChange.emit(new MdOptionSelectionChange(this, isUserInput));
    };
    return MdOption;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MdOption.prototype, "value", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MdOption.prototype, "disabled", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], MdOption.prototype, "onSelectionChange", void 0);
MdOption = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({selector: 'md-option, mat-option',
        host: {
            'role': 'option',
            '[attr.tabindex]': '_getTabIndex()',
            '[class.mat-selected]': 'selected',
            '[class.mat-option-multiple]': 'multiple',
            '[class.mat-active]': 'active',
            '[id]': 'id',
            '[attr.aria-selected]': 'selected.toString()',
            '[attr.aria-disabled]': 'disabled.toString()',
            '[class.mat-option-disabled]': 'disabled',
            '(click)': '_selectViaInteraction()',
            '(keydown)': '_handleKeydown($event)',
            '[class.mat-option]': 'true',
        },
        template: "<span [ngSwitch]=\"_isCompatibilityMode\" *ngIf=\"multiple\"><mat-pseudo-checkbox class=\"mat-option-pseudo-checkbox\" *ngSwitchCase=\"true\" [state]=\"selected ? 'checked' : ''\" color=\"primary\"></mat-pseudo-checkbox><md-pseudo-checkbox class=\"mat-option-pseudo-checkbox\" *ngSwitchDefault [state]=\"selected ? 'checked' : ''\" color=\"primary\"></md-pseudo-checkbox></span><ng-content></ng-content><div class=\"mat-option-ripple\" *ngIf=\"!disabled\" md-ripple [mdRippleTrigger]=\"_getHostElement()\"></div>",
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__core_compatibility_compatibility__["b" /* MATERIAL_COMPATIBILITY_MODE */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
        __WEBPACK_IMPORTED_MODULE_4__optgroup__["a" /* MdOptgroup */], Boolean])
], MdOption);

//# sourceMappingURL=option.js.map

/***/ }),

/***/ "./node_modules/md2/core/overlay/fullscreen-overlay-container.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FullscreenOverlayContainer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__overlay_container__ = __webpack_require__("./node_modules/md2/core/overlay/overlay-container.js");
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * The FullscreenOverlayContainer is the alternative to OverlayContainer
 * that supports correct displaying of overlay elements in Fullscreen mode
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen
 * It should be provided in the root component that way:
 * providers: [
 *   {provide: OverlayContainer, useClass: FullscreenOverlayContainer}
 * ],
 */
var FullscreenOverlayContainer = (function (_super) {
    __extends(FullscreenOverlayContainer, _super);
    function FullscreenOverlayContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FullscreenOverlayContainer.prototype._createContainer = function () {
        var _this = this;
        _super.prototype._createContainer.call(this);
        this._adjustParentForFullscreenChange();
        this._addFullscreenChangeListener(function () { return _this._adjustParentForFullscreenChange(); });
    };
    FullscreenOverlayContainer.prototype._adjustParentForFullscreenChange = function () {
        if (!this._containerElement) {
            return;
        }
        var fullscreenElement = this.getFullscreenElement();
        var parent = fullscreenElement || document.body;
        parent.appendChild(this._containerElement);
    };
    FullscreenOverlayContainer.prototype._addFullscreenChangeListener = function (fn) {
        if (document.fullscreenEnabled) {
            document.addEventListener('fullscreenchange', fn);
        }
        else if (document.webkitFullscreenEnabled) {
            document.addEventListener('webkitfullscreenchange', fn);
        }
        else if (document.mozFullScreenEnabled) {
            document.addEventListener('mozfullscreenchange', fn);
        }
        else if (document.msFullscreenEnabled) {
            document.addEventListener('MSFullscreenChange', fn);
        }
    };
    /**
     * When the page is put into fullscreen mode, a specific element is specified.
     * Only that element and its children are visible when in fullscreen mode.
    */
    FullscreenOverlayContainer.prototype.getFullscreenElement = function () {
        return document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement ||
            document.msFullscreenElement ||
            null;
    };
    return FullscreenOverlayContainer;
}(__WEBPACK_IMPORTED_MODULE_1__overlay_container__["b" /* OverlayContainer */]));
FullscreenOverlayContainer = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], FullscreenOverlayContainer);

//# sourceMappingURL=fullscreen-overlay-container.js.map

/***/ }),

/***/ "./node_modules/md2/core/overlay/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overlay__ = __webpack_require__("./node_modules/md2/core/overlay/overlay.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__overlay__["b"]; });
/* unused harmony reexport OVERLAY_PROVIDERS */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__overlay_container__ = __webpack_require__("./node_modules/md2/core/overlay/overlay-container.js");
/* unused harmony reexport OverlayContainer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fullscreen_overlay_container__ = __webpack_require__("./node_modules/md2/core/overlay/fullscreen-overlay-container.js");
/* unused harmony reexport FullscreenOverlayContainer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__overlay_ref__ = __webpack_require__("./node_modules/md2/core/overlay/overlay-ref.js");
/* unused harmony reexport OverlayRef */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__overlay_state__ = __webpack_require__("./node_modules/md2/core/overlay/overlay-state.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__overlay_state__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__overlay_directives__ = __webpack_require__("./node_modules/md2/core/overlay/overlay-directives.js");
/* unused harmony reexport ConnectedOverlayDirective */
/* unused harmony reexport OverlayOrigin */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__overlay_directives__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__position_viewport_ruler__ = __webpack_require__("./node_modules/md2/core/overlay/position/viewport-ruler.js");
/* unused harmony reexport ViewportRuler */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__position_connected_position__ = __webpack_require__("./node_modules/md2/core/overlay/position/connected-position.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__scroll_index__ = __webpack_require__("./node_modules/md2/core/overlay/scroll/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__position_global_position_strategy__ = __webpack_require__("./node_modules/md2/core/overlay/position/global-position-strategy.js");
/* unused harmony reexport GlobalPositionStrategy */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__position_connected_position_strategy__ = __webpack_require__("./node_modules/md2/core/overlay/position/connected-position-strategy.js");
/* unused harmony reexport ConnectedPositionStrategy */











//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/md2/core/overlay/overlay-container.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OverlayContainer; });
/* unused harmony export OVERLAY_CONTAINER_PROVIDER_FACTORY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OVERLAY_CONTAINER_PROVIDER; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * The OverlayContainer is the container in which all overlays will load.
 * It should be provided in the root component to ensure it is properly shared.
 */
var OverlayContainer = (function () {
    function OverlayContainer() {
    }
    Object.defineProperty(OverlayContainer.prototype, "themeClass", {
        /**
         * Base theme to be applied to all overlay-based components.
         */
        get: function () { return this._themeClass; },
        set: function (value) {
            if (this._containerElement) {
                this._containerElement.classList.remove(this._themeClass);
                if (value) {
                    this._containerElement.classList.add(value);
                }
            }
            this._themeClass = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * This method returns the overlay container element.  It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @returns the container element
     */
    OverlayContainer.prototype.getContainerElement = function () {
        if (!this._containerElement) {
            this._createContainer();
        }
        return this._containerElement;
    };
    /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     */
    OverlayContainer.prototype._createContainer = function () {
        var container = document.createElement('div');
        container.classList.add('cdk-overlay-container');
        if (this._themeClass) {
            container.classList.add(this._themeClass);
        }
        document.body.appendChild(container);
        this._containerElement = container;
    };
    return OverlayContainer;
}());
OverlayContainer = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], OverlayContainer);

function OVERLAY_CONTAINER_PROVIDER_FACTORY(parentContainer) {
    return parentContainer || new OverlayContainer();
}
var OVERLAY_CONTAINER_PROVIDER = {
    // If there is already an OverlayContainer available, use that. Otherwise, provide a new one.
    provide: OverlayContainer,
    deps: [[new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"](), new __WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"](), OverlayContainer]],
    useFactory: OVERLAY_CONTAINER_PROVIDER_FACTORY
};
//# sourceMappingURL=overlay-container.js.map

/***/ }),

/***/ "./node_modules/md2/core/overlay/overlay-directives.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export OverlayOrigin */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectedOverlayDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OverlayModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__overlay__ = __webpack_require__("./node_modules/md2/core/overlay/overlay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__portal_portal__ = __webpack_require__("./node_modules/md2/core/portal/portal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__overlay_state__ = __webpack_require__("./node_modules/md2/core/overlay/overlay-state.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__position_connected_position__ = __webpack_require__("./node_modules/md2/core/overlay/position/connected-position.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__portal_portal_directives__ = __webpack_require__("./node_modules/md2/core/portal/portal-directives.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rtl_dir__ = __webpack_require__("./node_modules/md2/core/rtl/dir.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__coercion_boolean_property__ = __webpack_require__("./node_modules/md2/core/coercion/boolean-property.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__keyboard_keycodes__ = __webpack_require__("./node_modules/md2/core/keyboard/keycodes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__scroll_index__ = __webpack_require__("./node_modules/md2/core/overlay/scroll/index.js");
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










/** Default set of positions for the overlay. Follows the behavior of a dropdown. */
var defaultPositionList = [
    new __WEBPACK_IMPORTED_MODULE_4__position_connected_position__["b" /* ConnectionPositionPair */]({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
    new __WEBPACK_IMPORTED_MODULE_4__position_connected_position__["b" /* ConnectionPositionPair */]({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
];
/**
 * Directive applied to an element to make it usable as an origin for an Overlay using a
 * ConnectedPositionStrategy.
 */
var OverlayOrigin = (function () {
    function OverlayOrigin(elementRef) {
        this.elementRef = elementRef;
    }
    return OverlayOrigin;
}());
OverlayOrigin = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]',
        exportAs: 'cdkOverlayOrigin',
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], OverlayOrigin);

/**
 * Directive to facilitate declarative creation of an Overlay using a ConnectedPositionStrategy.
 */
var ConnectedOverlayDirective = (function () {
    // TODO(jelbourn): inputs for size, scroll behavior, animation, etc.
    function ConnectedOverlayDirective(_overlay, _renderer, templateRef, viewContainerRef, _dir) {
        this._overlay = _overlay;
        this._renderer = _renderer;
        this._dir = _dir;
        this._hasBackdrop = false;
        this._offsetX = 0;
        this._offsetY = 0;
        /** Strategy to be used when handling scroll events while the overlay is open. */
        this.scrollStrategy = this._overlay.scrollStrategies.reposition();
        /** Whether the overlay is open. */
        this.open = false;
        /** Event emitted when the backdrop is clicked. */
        this.backdropClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** Event emitted when the position has changed. */
        this.positionChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** Event emitted when the overlay has been attached. */
        this.attach = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** Event emitted when the overlay has been detached. */
        this.detach = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._templatePortal = new __WEBPACK_IMPORTED_MODULE_2__portal_portal__["c" /* TemplatePortal */](templateRef, viewContainerRef);
    }
    Object.defineProperty(ConnectedOverlayDirective.prototype, "offsetX", {
        /** The offset in pixels for the overlay connection point on the x-axis */
        get: function () {
            return this._offsetX;
        },
        set: function (offsetX) {
            this._offsetX = offsetX;
            if (this._position) {
                this._position.withOffsetX(offsetX);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectedOverlayDirective.prototype, "offsetY", {
        /** The offset in pixels for the overlay connection point on the y-axis */
        get: function () {
            return this._offsetY;
        },
        set: function (offsetY) {
            this._offsetY = offsetY;
            if (this._position) {
                this._position.withOffsetY(offsetY);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectedOverlayDirective.prototype, "hasBackdrop", {
        /** Whether or not the overlay should attach a backdrop. */
        get: function () {
            return this._hasBackdrop;
        },
        set: function (value) {
            this._hasBackdrop = Object(__WEBPACK_IMPORTED_MODULE_7__coercion_boolean_property__["a" /* coerceBooleanProperty */])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectedOverlayDirective.prototype, "overlayRef", {
        /** The associated overlay reference. */
        get: function () {
            return this._overlayRef;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectedOverlayDirective.prototype, "dir", {
        /** The element's layout direction. */
        get: function () {
            return this._dir ? this._dir.value : 'ltr';
        },
        enumerable: true,
        configurable: true
    });
    ConnectedOverlayDirective.prototype.ngOnDestroy = function () {
        this._destroyOverlay();
    };
    ConnectedOverlayDirective.prototype.ngOnChanges = function (changes) {
        if (changes['open']) {
            this.open ? this._attachOverlay() : this._detachOverlay();
        }
    };
    /** Creates an overlay */
    ConnectedOverlayDirective.prototype._createOverlay = function () {
        if (!this.positions || !this.positions.length) {
            this.positions = defaultPositionList;
        }
        this._overlayRef = this._overlay.create(this._buildConfig());
    };
    /** Builds the overlay config based on the directive's inputs */
    ConnectedOverlayDirective.prototype._buildConfig = function () {
        var overlayConfig = new __WEBPACK_IMPORTED_MODULE_3__overlay_state__["a" /* OverlayState */]();
        if (this.width || this.width === 0) {
            overlayConfig.width = this.width;
        }
        if (this.height || this.height === 0) {
            overlayConfig.height = this.height;
        }
        if (this.minWidth || this.minWidth === 0) {
            overlayConfig.minWidth = this.minWidth;
        }
        if (this.minHeight || this.minHeight === 0) {
            overlayConfig.minHeight = this.minHeight;
        }
        overlayConfig.hasBackdrop = this.hasBackdrop;
        if (this.backdropClass) {
            overlayConfig.backdropClass = this.backdropClass;
        }
        this._position = this._createPositionStrategy();
        overlayConfig.positionStrategy = this._position;
        overlayConfig.scrollStrategy = this.scrollStrategy;
        return overlayConfig;
    };
    /** Returns the position strategy of the overlay to be set on the overlay config */
    ConnectedOverlayDirective.prototype._createPositionStrategy = function () {
        var pos = this.positions[0];
        var originPoint = { originX: pos.originX, originY: pos.originY };
        var overlayPoint = { overlayX: pos.overlayX, overlayY: pos.overlayY };
        var strategy = this._overlay.position()
            .connectedTo(this.origin.elementRef, originPoint, overlayPoint)
            .withOffsetX(this.offsetX)
            .withOffsetY(this.offsetY);
        this._handlePositionChanges(strategy);
        return strategy;
    };
    ConnectedOverlayDirective.prototype._handlePositionChanges = function (strategy) {
        var _this = this;
        for (var i = 1; i < this.positions.length; i++) {
            strategy.withFallbackPosition({ originX: this.positions[i].originX, originY: this.positions[i].originY }, { overlayX: this.positions[i].overlayX, overlayY: this.positions[i].overlayY });
        }
        this._positionSubscription =
            strategy.onPositionChange.subscribe(function (pos) { return _this.positionChange.emit(pos); });
    };
    /** Attaches the overlay and subscribes to backdrop clicks if backdrop exists */
    ConnectedOverlayDirective.prototype._attachOverlay = function () {
        var _this = this;
        if (!this._overlayRef) {
            this._createOverlay();
        }
        this._position.withDirection(this.dir);
        this._overlayRef.getState().direction = this.dir;
        this._initEscapeListener();
        if (!this._overlayRef.hasAttached()) {
            this._overlayRef.attach(this._templatePortal);
            this.attach.emit();
        }
        if (this.hasBackdrop) {
            this._backdropSubscription = this._overlayRef.backdropClick().subscribe(function () {
                _this.backdropClick.emit();
            });
        }
    };
    /** Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists */
    ConnectedOverlayDirective.prototype._detachOverlay = function () {
        if (this._overlayRef) {
            this._overlayRef.detach();
            this.detach.emit();
        }
        if (this._backdropSubscription) {
            this._backdropSubscription.unsubscribe();
            this._backdropSubscription = null;
        }
        if (this._escapeListener) {
            this._escapeListener();
        }
    };
    /** Destroys the overlay created by this directive. */
    ConnectedOverlayDirective.prototype._destroyOverlay = function () {
        if (this._overlayRef) {
            this._overlayRef.dispose();
        }
        if (this._backdropSubscription) {
            this._backdropSubscription.unsubscribe();
        }
        if (this._positionSubscription) {
            this._positionSubscription.unsubscribe();
        }
        if (this._escapeListener) {
            this._escapeListener();
        }
    };
    /** Sets the event listener that closes the overlay when pressing Escape. */
    ConnectedOverlayDirective.prototype._initEscapeListener = function () {
        var _this = this;
        this._escapeListener = this._renderer.listen('document', 'keydown', function (event) {
            if (event.keyCode === __WEBPACK_IMPORTED_MODULE_8__keyboard_keycodes__["g" /* ESCAPE */]) {
                _this._detachOverlay();
            }
        });
    };
    return ConnectedOverlayDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", OverlayOrigin)
], ConnectedOverlayDirective.prototype, "origin", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], ConnectedOverlayDirective.prototype, "positions", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], ConnectedOverlayDirective.prototype, "offsetX", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Number])
], ConnectedOverlayDirective.prototype, "offsetY", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ConnectedOverlayDirective.prototype, "width", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ConnectedOverlayDirective.prototype, "height", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ConnectedOverlayDirective.prototype, "minWidth", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ConnectedOverlayDirective.prototype, "minHeight", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ConnectedOverlayDirective.prototype, "backdropClass", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ConnectedOverlayDirective.prototype, "scrollStrategy", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ConnectedOverlayDirective.prototype, "open", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], ConnectedOverlayDirective.prototype, "hasBackdrop", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ConnectedOverlayDirective.prototype, "backdropClick", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ConnectedOverlayDirective.prototype, "positionChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ConnectedOverlayDirective.prototype, "attach", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ConnectedOverlayDirective.prototype, "detach", void 0);
ConnectedOverlayDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]',
        exportAs: 'cdkConnectedOverlay'
    }),
    __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__overlay__["b" /* Overlay */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"],
        __WEBPACK_IMPORTED_MODULE_6__rtl_dir__["a" /* Dir */]])
], ConnectedOverlayDirective);

var OverlayModule = (function () {
    function OverlayModule() {
    }
    return OverlayModule;
}());
OverlayModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_5__portal_portal_directives__["a" /* PortalModule */], __WEBPACK_IMPORTED_MODULE_9__scroll_index__["a" /* ScrollDispatchModule */]],
        exports: [ConnectedOverlayDirective, OverlayOrigin, __WEBPACK_IMPORTED_MODULE_9__scroll_index__["a" /* ScrollDispatchModule */]],
        declarations: [ConnectedOverlayDirective, OverlayOrigin],
        providers: [__WEBPACK_IMPORTED_MODULE_1__overlay__["a" /* OVERLAY_PROVIDERS */]],
    })
], OverlayModule);

//# sourceMappingURL=overlay-directives.js.map

/***/ }),

/***/ "./node_modules/md2/core/overlay/overlay-ref.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverlayRef; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");

/**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
var OverlayRef = (function () {
    function OverlayRef(_portalHost, _pane, _state, _scrollStrategy, _ngZone) {
        this._portalHost = _portalHost;
        this._pane = _pane;
        this._state = _state;
        this._scrollStrategy = _scrollStrategy;
        this._ngZone = _ngZone;
        this._backdropElement = null;
        this._backdropClick = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["b" /* Subject */]();
        this._attachments = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["b" /* Subject */]();
        this._detachments = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["b" /* Subject */]();
        _scrollStrategy.attach(this);
    }
    Object.defineProperty(OverlayRef.prototype, "overlayElement", {
        /** The overlay's HTML element */
        get: function () {
            return this._pane;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Attaches the overlay to a portal instance and adds the backdrop.
     * @param portal Portal instance to which to attach the overlay.
     * @returns The portal attachment result.
     */
    OverlayRef.prototype.attach = function (portal) {
        var attachResult = this._portalHost.attach(portal);
        // Update the pane element with the given state configuration.
        this._updateStackingOrder();
        this.updateSize();
        this.updateDirection();
        this.updatePosition();
        this._scrollStrategy.enable();
        // Enable pointer events for the overlay pane element.
        this._togglePointerEvents(true);
        if (this._state.hasBackdrop) {
            this._attachBackdrop();
        }
        if (this._state.panelClass) {
            this._pane.classList.add(this._state.panelClass);
        }
        // Only emit the `attachments` event once all other setup is done.
        this._attachments.next();
        return attachResult;
    };
    /**
     * Detaches an overlay from a portal.
     * @returns Resolves when the overlay has been detached.
     */
    OverlayRef.prototype.detach = function () {
        this.detachBackdrop();
        // When the overlay is detached, the pane element should disable pointer events.
        // This is necessary because otherwise the pane element will cover the page and disable
        // pointer events therefore. Depends on the position strategy and the applied pane boundaries.
        this._togglePointerEvents(false);
        this._scrollStrategy.disable();
        var detachmentResult = this._portalHost.detach();
        // Only emit after everything is detached.
        this._detachments.next();
        return detachmentResult;
    };
    /**
     * Cleans up the overlay from the DOM.
     */
    OverlayRef.prototype.dispose = function () {
        if (this._state.positionStrategy) {
            this._state.positionStrategy.dispose();
        }
        if (this._scrollStrategy) {
            this._scrollStrategy.disable();
            this._scrollStrategy = null;
        }
        this.detachBackdrop();
        this._portalHost.dispose();
        this._attachments.complete();
        this._backdropClick.complete();
        this._detachments.next();
        this._detachments.complete();
    };
    /**
     * Checks whether the overlay has been attached.
     */
    OverlayRef.prototype.hasAttached = function () {
        return this._portalHost.hasAttached();
    };
    /**
     * Returns an observable that emits when the backdrop has been clicked.
     */
    OverlayRef.prototype.backdropClick = function () {
        return this._backdropClick.asObservable();
    };
    /** Returns an observable that emits when the overlay has been attached. */
    OverlayRef.prototype.attachments = function () {
        return this._attachments.asObservable();
    };
    /** Returns an observable that emits when the overlay has been detached. */
    OverlayRef.prototype.detachments = function () {
        return this._detachments.asObservable();
    };
    /**
     * Gets the current state config of the overlay.
     */
    OverlayRef.prototype.getState = function () {
        return this._state;
    };
    /** Updates the position of the overlay based on the position strategy. */
    OverlayRef.prototype.updatePosition = function () {
        if (this._state.positionStrategy) {
            this._state.positionStrategy.apply(this._pane);
        }
    };
    /** Updates the text direction of the overlay panel. */
    OverlayRef.prototype.updateDirection = function () {
        this._pane.setAttribute('dir', this._state.direction);
    };
    /** Updates the size of the overlay based on the overlay config. */
    OverlayRef.prototype.updateSize = function () {
        if (this._state.width || this._state.width === 0) {
            this._pane.style.width = formatCssUnit(this._state.width);
        }
        if (this._state.height || this._state.height === 0) {
            this._pane.style.height = formatCssUnit(this._state.height);
        }
        if (this._state.minWidth || this._state.minWidth === 0) {
            this._pane.style.minWidth = formatCssUnit(this._state.minWidth);
        }
        if (this._state.minHeight || this._state.minHeight === 0) {
            this._pane.style.minHeight = formatCssUnit(this._state.minHeight);
        }
    };
    /** Toggles the pointer events for the overlay pane element. */
    OverlayRef.prototype._togglePointerEvents = function (enablePointer) {
        this._pane.style.pointerEvents = enablePointer ? 'auto' : 'none';
    };
    /** Attaches a backdrop for this overlay. */
    OverlayRef.prototype._attachBackdrop = function () {
        var _this = this;
        this._backdropElement = document.createElement('div');
        this._backdropElement.classList.add('cdk-overlay-backdrop');
        this._backdropElement.classList.add(this._state.backdropClass);
        // Insert the backdrop before the pane in the DOM order,
        // in order to handle stacked overlays properly.
        this._pane.parentElement.insertBefore(this._backdropElement, this._pane);
        // Forward backdrop clicks such that the consumer of the overlay can perform whatever
        // action desired when such a click occurs (usually closing the overlay).
        this._backdropElement.addEventListener('click', function () { return _this._backdropClick.next(null); });
        // Add class to fade-in the backdrop after one frame.
        requestAnimationFrame(function () {
            if (_this._backdropElement) {
                _this._backdropElement.classList.add('cdk-overlay-backdrop-showing');
            }
        });
    };
    /**
     * Updates the stacking order of the element, moving it to the top if necessary.
     * This is required in cases where one overlay was detached, while another one,
     * that should be behind it, was destroyed. The next time both of them are opened,
     * the stacking will be wrong, because the detached element's pane will still be
     * in its original DOM position.
     */
    OverlayRef.prototype._updateStackingOrder = function () {
        if (this._pane.nextSibling) {
            this._pane.parentNode.appendChild(this._pane);
        }
    };
    /** Detaches the backdrop (if any) associated with the overlay. */
    OverlayRef.prototype.detachBackdrop = function () {
        var _this = this;
        var backdropToDetach = this._backdropElement;
        if (backdropToDetach) {
            var finishDetach_1 = function () {
                // It may not be attached to anything in certain cases (e.g. unit tests).
                if (backdropToDetach && backdropToDetach.parentNode) {
                    backdropToDetach.parentNode.removeChild(backdropToDetach);
                }
                // It is possible that a new portal has been attached to this overlay since we started
                // removing the backdrop. If that is the case, only clear the backdrop reference if it
                // is still the same instance that we started to remove.
                if (_this._backdropElement == backdropToDetach) {
                    _this._backdropElement = null;
                }
            };
            backdropToDetach.classList.remove('cdk-overlay-backdrop-showing');
            backdropToDetach.classList.remove(this._state.backdropClass);
            backdropToDetach.addEventListener('transitionend', finishDetach_1);
            // If the backdrop doesn't have a transition, the `transitionend` event won't fire.
            // In this case we make it unclickable and we try to remove it after a delay.
            backdropToDetach.style.pointerEvents = 'none';
            // Run this outside the Angular zone because there's nothing that Angular cares about.
            // If it were to run inside the Angular zone, every test that used Overlay would have to be
            // either async or fakeAsync.
            this._ngZone.runOutsideAngular(function () {
                setTimeout(finishDetach_1, 500);
            });
        }
    };
    return OverlayRef;
}());

function formatCssUnit(value) {
    return typeof value === 'string' ? value : value + "px";
}
//# sourceMappingURL=overlay-ref.js.map

/***/ }),

/***/ "./node_modules/md2/core/overlay/overlay-state.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverlayState; });
/**
 * OverlayState is a bag of values for either the initial configuration or current state of an
 * overlay.
 */
var OverlayState = (function () {
    function OverlayState() {
        /** Custom class to add to the overlay pane. */
        this.panelClass = '';
        /** Whether the overlay has a backdrop. */
        this.hasBackdrop = false;
        /** Custom class to add to the backdrop */
        this.backdropClass = 'cdk-overlay-dark-backdrop';
        /** The direction of the text in the overlay panel. */
        this.direction = 'ltr';
        // TODO(jelbourn): configuration still to add
        // - focus trap
        // - disable pointer events
        // - z-index
    }
    return OverlayState;
}());

//# sourceMappingURL=overlay-state.js.map

/***/ }),

/***/ "./node_modules/md2/core/overlay/overlay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Overlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OVERLAY_PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__overlay_state__ = __webpack_require__("./node_modules/md2/core/overlay/overlay-state.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__portal_dom_portal_host__ = __webpack_require__("./node_modules/md2/core/portal/dom-portal-host.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__overlay_ref__ = __webpack_require__("./node_modules/md2/core/overlay/overlay-ref.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__position_overlay_position_builder__ = __webpack_require__("./node_modules/md2/core/overlay/position/overlay-position-builder.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__position_viewport_ruler__ = __webpack_require__("./node_modules/md2/core/overlay/position/viewport-ruler.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__overlay_container__ = __webpack_require__("./node_modules/md2/core/overlay/overlay-container.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scroll_index__ = __webpack_require__("./node_modules/md2/core/overlay/scroll/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/** Next overlay unique ID. */
var nextUniqueId = 0;
/** The default state for newly created overlays. */
var defaultState = new __WEBPACK_IMPORTED_MODULE_1__overlay_state__["a" /* OverlayState */]();
/**
 * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
 * used as a low-level building building block for other components. Dialogs, tooltips, menus,
 * selects, etc. can all be built using overlays. The service should primarily be used by authors
 * of re-usable components rather than developers building end-user applications.
 *
 * An overlay *is* a PortalHost, so any kind of Portal can be loaded into one.
 */
var Overlay = (function () {
    function Overlay(scrollStrategies, _overlayContainer, _componentFactoryResolver, _positionBuilder, _appRef, _injector, _ngZone) {
        this.scrollStrategies = scrollStrategies;
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._positionBuilder = _positionBuilder;
        this._appRef = _appRef;
        this._injector = _injector;
        this._ngZone = _ngZone;
    }
    /**
     * Creates an overlay.
     * @param state State to apply to the overlay.
     * @returns Reference to the created overlay.
     */
    Overlay.prototype.create = function (state) {
        if (state === void 0) { state = defaultState; }
        return this._createOverlayRef(this._createPaneElement(), state);
    };
    /**
     * Returns a position builder that can be used, via fluent API,
     * to construct and configure a position strategy.
     */
    Overlay.prototype.position = function () {
        return this._positionBuilder;
    };
    /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @returns Newly-created pane element
     */
    Overlay.prototype._createPaneElement = function () {
        var pane = document.createElement('div');
        pane.id = "cdk-overlay-" + nextUniqueId++;
        pane.classList.add('cdk-overlay-pane');
        this._overlayContainer.getContainerElement().appendChild(pane);
        return pane;
    };
    /**
     * Create a DomPortalHost into which the overlay content can be loaded.
     * @param pane The DOM element to turn into a portal host.
     * @returns A portal host for the given DOM element.
     */
    Overlay.prototype._createPortalHost = function (pane) {
        return new __WEBPACK_IMPORTED_MODULE_2__portal_dom_portal_host__["a" /* DomPortalHost */](pane, this._componentFactoryResolver, this._appRef, this._injector);
    };
    /**
     * Creates an OverlayRef for an overlay in the given DOM element.
     * @param pane DOM element for the overlay
     * @param state
     */
    Overlay.prototype._createOverlayRef = function (pane, state) {
        var scrollStrategy = state.scrollStrategy || this.scrollStrategies.noop();
        var portalHost = this._createPortalHost(pane);
        return new __WEBPACK_IMPORTED_MODULE_3__overlay_ref__["a" /* OverlayRef */](portalHost, pane, state, scrollStrategy, this._ngZone);
    };
    return Overlay;
}());
Overlay = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__scroll_index__["b" /* ScrollStrategyOptions */],
        __WEBPACK_IMPORTED_MODULE_6__overlay_container__["b" /* OverlayContainer */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"],
        __WEBPACK_IMPORTED_MODULE_4__position_overlay_position_builder__["a" /* OverlayPositionBuilder */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
], Overlay);

/** Providers for Overlay and its related injectables. */
var OVERLAY_PROVIDERS = [
    Overlay,
    __WEBPACK_IMPORTED_MODULE_4__position_overlay_position_builder__["a" /* OverlayPositionBuilder */],
    __WEBPACK_IMPORTED_MODULE_5__position_viewport_ruler__["a" /* VIEWPORT_RULER_PROVIDER */],
    __WEBPACK_IMPORTED_MODULE_6__overlay_container__["a" /* OVERLAY_CONTAINER_PROVIDER */],
];
//# sourceMappingURL=overlay.js.map

/***/ }),

/***/ "./node_modules/md2/core/overlay/position/connected-position-strategy.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectedPositionStrategy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__connected_position__ = __webpack_require__("./node_modules/md2/core/overlay/position/connected-position.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");


/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * implicit position relative some origin element. The relative position is defined in terms of
 * a point on the origin element that is connected to a point on the overlay element. For example,
 * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
 * of the overlay.
 */
var ConnectedPositionStrategy = (function () {
    function ConnectedPositionStrategy(_connectedTo, _originPos, _overlayPos, _viewportRuler) {
        this._connectedTo = _connectedTo;
        this._originPos = _originPos;
        this._overlayPos = _overlayPos;
        this._viewportRuler = _viewportRuler;
        this._dir = 'ltr';
        /** The offset in pixels for the overlay connection point on the x-axis */
        this._offsetX = 0;
        /** The offset in pixels for the overlay connection point on the y-axis */
        this._offsetY = 0;
        /** The Scrollable containers used to check scrollable view properties on position change. */
        this.scrollables = [];
        /** Ordered list of preferred positions, from most to least desirable. */
        this._preferredPositions = [];
        this._onPositionChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["b" /* Subject */]();
        this._origin = this._connectedTo.nativeElement;
        this.withFallbackPosition(_originPos, _overlayPos);
    }
    Object.defineProperty(ConnectedPositionStrategy.prototype, "_isRtl", {
        /** Whether the we're dealing with an RTL context */
        get: function () {
            return this._dir === 'rtl';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectedPositionStrategy.prototype, "onPositionChange", {
        /** Emits an event when the connection point changes. */
        get: function () {
            return this._onPositionChange.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectedPositionStrategy.prototype, "positions", {
        /** Ordered list of preferred positions, from most to least desirable. */
        get: function () {
            return this._preferredPositions;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * To be used to for any cleanup after the element gets destroyed.
     */
    ConnectedPositionStrategy.prototype.dispose = function () { };
    /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin fits on-screen.
     * @docs-private
     *
     * @param element Element to which to apply the CSS styles.
     * @returns Resolves when the styles have been applied.
     */
    ConnectedPositionStrategy.prototype.apply = function (element) {
        // Cache the overlay pane element in case re-calculating position is necessary
        this._pane = element;
        // We need the bounding rects for the origin and the overlay to determine how to position
        // the overlay relative to the origin.
        var originRect = this._origin.getBoundingClientRect();
        var overlayRect = element.getBoundingClientRect();
        // We use the viewport rect to determine whether a position would go off-screen.
        var viewportRect = this._viewportRuler.getViewportRect();
        // Fallback point if none of the fallbacks fit into the viewport.
        var fallbackPoint = null;
        var fallbackPosition = null;
        // We want to place the overlay in the first of the preferred positions such that the
        // overlay fits on-screen.
        for (var _i = 0, _a = this._preferredPositions; _i < _a.length; _i++) {
            var pos = _a[_i];
            // Get the (x, y) point of connection on the origin, and then use that to get the
            // (top, left) coordinate for the overlay at `pos`.
            var originPoint = this._getOriginConnectionPoint(originRect, pos);
            var overlayPoint = this._getOverlayPoint(originPoint, overlayRect, viewportRect, pos);
            // If the overlay in the calculated position fits on-screen, put it there and we're done.
            if (overlayPoint.fitsInViewport) {
                this._setElementPosition(element, overlayRect, overlayPoint, pos);
                // Save the last connected position in case the position needs to be re-calculated.
                this._lastConnectedPosition = pos;
                // Notify that the position has been changed along with its change properties.
                var scrollableViewProperties = this.getScrollableViewProperties(element);
                var positionChange = new __WEBPACK_IMPORTED_MODULE_0__connected_position__["a" /* ConnectedOverlayPositionChange */](pos, scrollableViewProperties);
                this._onPositionChange.next(positionChange);
                return Promise.resolve(null);
            }
            else if (!fallbackPoint || fallbackPoint.visibleArea < overlayPoint.visibleArea) {
                fallbackPoint = overlayPoint;
                fallbackPosition = pos;
            }
        }
        // If none of the preferred positions were in the viewport, take the one
        // with the largest visible area.
        this._setElementPosition(element, overlayRect, fallbackPoint, fallbackPosition);
        return Promise.resolve(null);
    };
    /**
     * This re-aligns the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     */
    ConnectedPositionStrategy.prototype.recalculateLastPosition = function () {
        var originRect = this._origin.getBoundingClientRect();
        var overlayRect = this._pane.getBoundingClientRect();
        var viewportRect = this._viewportRuler.getViewportRect();
        var lastPosition = this._lastConnectedPosition || this._preferredPositions[0];
        var originPoint = this._getOriginConnectionPoint(originRect, lastPosition);
        var overlayPoint = this._getOverlayPoint(originPoint, overlayRect, viewportRect, lastPosition);
        this._setElementPosition(this._pane, overlayRect, overlayPoint, lastPosition);
    };
    /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     */
    ConnectedPositionStrategy.prototype.withScrollableContainers = function (scrollables) {
        this.scrollables = scrollables;
    };
    /**
     * Adds a new preferred fallback position.
     * @param originPos
     * @param overlayPos
     */
    ConnectedPositionStrategy.prototype.withFallbackPosition = function (originPos, overlayPos) {
        this._preferredPositions.push(new __WEBPACK_IMPORTED_MODULE_0__connected_position__["b" /* ConnectionPositionPair */](originPos, overlayPos));
        return this;
    };
    /**
     * Sets the layout direction so the overlay's position can be adjusted to match.
     * @param dir New layout direction.
     */
    ConnectedPositionStrategy.prototype.withDirection = function (dir) {
        this._dir = dir;
        return this;
    };
    /**
     * Sets an offset for the overlay's connection point on the x-axis
     * @param offset New offset in the X axis.
     */
    ConnectedPositionStrategy.prototype.withOffsetX = function (offset) {
        this._offsetX = offset;
        return this;
    };
    /**
     * Sets an offset for the overlay's connection point on the y-axis
     * @param  offset New offset in the Y axis.
     */
    ConnectedPositionStrategy.prototype.withOffsetY = function (offset) {
        this._offsetY = offset;
        return this;
    };
    /**
     * Gets the horizontal (x) "start" dimension based on whether the overlay is in an RTL context.
     * @param rect
     */
    ConnectedPositionStrategy.prototype._getStartX = function (rect) {
        return this._isRtl ? rect.right : rect.left;
    };
    /**
     * Gets the horizontal (x) "end" dimension based on whether the overlay is in an RTL context.
     * @param rect
     */
    ConnectedPositionStrategy.prototype._getEndX = function (rect) {
        return this._isRtl ? rect.left : rect.right;
    };
    /**
     * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
     * @param originRect
     * @param pos
     */
    ConnectedPositionStrategy.prototype._getOriginConnectionPoint = function (originRect, pos) {
        var originStartX = this._getStartX(originRect);
        var originEndX = this._getEndX(originRect);
        var x;
        if (pos.originX == 'center') {
            x = originStartX + (originRect.width / 2);
        }
        else {
            x = pos.originX == 'start' ? originStartX : originEndX;
        }
        var y;
        if (pos.originY == 'center') {
            y = originRect.top + (originRect.height / 2);
        }
        else {
            y = pos.originY == 'top' ? originRect.top : originRect.bottom;
        }
        return { x: x, y: y };
    };
    /**
     * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
     * origin point to which the overlay should be connected, as well as how much of the element
     * would be inside the viewport at that position.
     */
    ConnectedPositionStrategy.prototype._getOverlayPoint = function (originPoint, overlayRect, viewportRect, pos) {
        // Calculate the (overlayStartX, overlayStartY), the start of the potential overlay position
        // relative to the origin point.
        var overlayStartX;
        if (pos.overlayX == 'center') {
            overlayStartX = -overlayRect.width / 2;
        }
        else if (pos.overlayX === 'start') {
            overlayStartX = this._isRtl ? -overlayRect.width : 0;
        }
        else {
            overlayStartX = this._isRtl ? 0 : -overlayRect.width;
        }
        var overlayStartY;
        if (pos.overlayY == 'center') {
            overlayStartY = -overlayRect.height / 2;
        }
        else {
            overlayStartY = pos.overlayY == 'top' ? 0 : -overlayRect.height;
        }
        // The (x, y) coordinates of the overlay.
        var x = originPoint.x + overlayStartX + this._offsetX;
        var y = originPoint.y + overlayStartY + this._offsetY;
        // How much the overlay would overflow at this position, on each side.
        var leftOverflow = 0 - x;
        var rightOverflow = (x + overlayRect.width) - viewportRect.width;
        var topOverflow = 0 - y;
        var bottomOverflow = (y + overlayRect.height) - viewportRect.height;
        // Visible parts of the element on each axis.
        var visibleWidth = this._subtractOverflows(overlayRect.width, leftOverflow, rightOverflow);
        var visibleHeight = this._subtractOverflows(overlayRect.height, topOverflow, bottomOverflow);
        // The area of the element that's within the viewport.
        var visibleArea = visibleWidth * visibleHeight;
        var fitsInViewport = (overlayRect.width * overlayRect.height) === visibleArea;
        return { x: x, y: y, fitsInViewport: fitsInViewport, visibleArea: visibleArea };
    };
    /**
     * Gets the view properties of the trigger and overlay, including whether they are clipped
     * or completely outside the view of any of the strategy's scrollables.
     */
    ConnectedPositionStrategy.prototype.getScrollableViewProperties = function (overlay) {
        var _this = this;
        var originBounds = this._getElementBounds(this._origin);
        var overlayBounds = this._getElementBounds(overlay);
        var scrollContainerBounds = this.scrollables.map(function (scrollable) {
            return _this._getElementBounds(scrollable.getElementRef().nativeElement);
        });
        return {
            isOriginClipped: this.isElementClipped(originBounds, scrollContainerBounds),
            isOriginOutsideView: this.isElementOutsideView(originBounds, scrollContainerBounds),
            isOverlayClipped: this.isElementClipped(overlayBounds, scrollContainerBounds),
            isOverlayOutsideView: this.isElementOutsideView(overlayBounds, scrollContainerBounds),
        };
    };
    /** Whether the element is completely out of the view of any of the containers. */
    ConnectedPositionStrategy.prototype.isElementOutsideView = function (elementBounds, containersBounds) {
        return containersBounds.some(function (containerBounds) {
            var outsideAbove = elementBounds.bottom < containerBounds.top;
            var outsideBelow = elementBounds.top > containerBounds.bottom;
            var outsideLeft = elementBounds.right < containerBounds.left;
            var outsideRight = elementBounds.left > containerBounds.right;
            return outsideAbove || outsideBelow || outsideLeft || outsideRight;
        });
    };
    /** Whether the element is clipped by any of the containers. */
    ConnectedPositionStrategy.prototype.isElementClipped = function (elementBounds, containersBounds) {
        return containersBounds.some(function (containerBounds) {
            var clippedAbove = elementBounds.top < containerBounds.top;
            var clippedBelow = elementBounds.bottom > containerBounds.bottom;
            var clippedLeft = elementBounds.left < containerBounds.left;
            var clippedRight = elementBounds.right > containerBounds.right;
            return clippedAbove || clippedBelow || clippedLeft || clippedRight;
        });
    };
    /** Physically positions the overlay element to the given coordinate. */
    ConnectedPositionStrategy.prototype._setElementPosition = function (element, overlayRect, overlayPoint, pos) {
        // We want to set either `top` or `bottom` based on whether the overlay wants to appear above
        // or below the origin and the direction in which the element will expand.
        var verticalStyleProperty = pos.overlayY === 'bottom' ? 'bottom' : 'top';
        // When using `bottom`, we adjust the y position such that it is the distance
        // from the bottom of the viewport rather than the top.
        var y = verticalStyleProperty === 'top' ?
            overlayPoint.y :
            document.documentElement.clientHeight - (overlayPoint.y + overlayRect.height);
        // We want to set either `left` or `right` based on whether the overlay wants to appear "before"
        // or "after" the origin, which determines the direction in which the element will expand.
        // For the horizontal axis, the meaning of "before" and "after" change based on whether the
        // page is in RTL or LTR.
        var horizontalStyleProperty;
        if (this._dir === 'rtl') {
            horizontalStyleProperty = pos.overlayX === 'end' ? 'left' : 'right';
        }
        else {
            horizontalStyleProperty = pos.overlayX === 'end' ? 'right' : 'left';
        }
        // When we're setting `right`, we adjust the x position such that it is the distance
        // from the right edge of the viewport rather than the left edge.
        var x = horizontalStyleProperty === 'left' ?
            overlayPoint.x :
            document.documentElement.clientWidth - (overlayPoint.x + overlayRect.width);
        // Reset any existing styles. This is necessary in case the preferred position has
        // changed since the last `apply`.
        ['top', 'bottom', 'left', 'right'].forEach(function (p) { return element.style[p] = null; });
        element.style[verticalStyleProperty] = y + "px";
        element.style[horizontalStyleProperty] = x + "px";
    };
    /** Returns the bounding positions of the provided element with respect to the viewport. */
    ConnectedPositionStrategy.prototype._getElementBounds = function (element) {
        var boundingClientRect = element.getBoundingClientRect();
        return {
            top: boundingClientRect.top,
            right: boundingClientRect.left + boundingClientRect.width,
            bottom: boundingClientRect.top + boundingClientRect.height,
            left: boundingClientRect.left
        };
    };
    /**
     * Subtracts the amount that an element is overflowing on an axis from it's length.
     */
    ConnectedPositionStrategy.prototype._subtractOverflows = function (length) {
        var overflows = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            overflows[_i - 1] = arguments[_i];
        }
        return overflows.reduce(function (currentValue, currentOverflow) {
            return currentValue - Math.max(currentOverflow, 0);
        }, length);
    };
    return ConnectedPositionStrategy;
}());

//# sourceMappingURL=connected-position-strategy.js.map

/***/ }),

/***/ "./node_modules/md2/core/overlay/position/connected-position.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ConnectionPositionPair; });
/* unused harmony export ScrollableViewProperties */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectedOverlayPositionChange; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
/** Horizontal dimension of a connection point on the perimeter of the origin or overlay element. */

/** The points of the origin element and the overlay element to connect. */
var ConnectionPositionPair = (function () {
    function ConnectionPositionPair(origin, overlay) {
        this.originX = origin.originX;
        this.originY = origin.originY;
        this.overlayX = overlay.overlayX;
        this.overlayY = overlay.overlayY;
    }
    return ConnectionPositionPair;
}());

/**
 * Set of properties regarding the position of the origin and overlay relative to the viewport
 * with respect to the containing Scrollable elements.
 *
 * The overlay and origin are clipped if any part of their bounding client rectangle exceeds the
 * bounds of any one of the strategy's Scrollable's bounding client rectangle.
 *
 * The overlay and origin are outside view if there is no overlap between their bounding client
 * rectangle and any one of the strategy's Scrollable's bounding client rectangle.
 *
 *       -----------                    -----------
 *       | outside |                    | clipped |
 *       |  view   |              --------------------------
 *       |         |              |     |         |        |
 *       ----------               |     -----------        |
 *  --------------------------    |                        |
 *  |                        |    |      Scrollable        |
 *  |                        |    |                        |
 *  |                        |     --------------------------
 *  |      Scrollable        |
 *  |                        |
 *  --------------------------
 */
var ScrollableViewProperties = (function () {
    function ScrollableViewProperties() {
    }
    return ScrollableViewProperties;
}());

/** The change event emitted by the strategy when a fallback position is used. */
var ConnectedOverlayPositionChange = (function () {
    function ConnectedOverlayPositionChange(connectionPair, scrollableViewProperties) {
        this.connectionPair = connectionPair;
        this.scrollableViewProperties = scrollableViewProperties;
    }
    return ConnectedOverlayPositionChange;
}());
ConnectedOverlayPositionChange = __decorate([
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [ConnectionPositionPair,
        ScrollableViewProperties])
], ConnectedOverlayPositionChange);

//# sourceMappingURL=connected-position.js.map

/***/ }),

/***/ "./node_modules/md2/core/overlay/position/global-position-strategy.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalPositionStrategy; });
/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * explicit position relative to the browser's viewport. We use flexbox, instead of
 * transforms, in order to avoid issues with subpixel rendering which can cause the
 * element to become blurry.
 */
var GlobalPositionStrategy = (function () {
    function GlobalPositionStrategy() {
        this._cssPosition = 'static';
        this._topOffset = '';
        this._bottomOffset = '';
        this._leftOffset = '';
        this._rightOffset = '';
        this._alignItems = '';
        this._justifyContent = '';
        this._width = '';
        this._height = '';
    }
    /**
     * Sets the top position of the overlay. Clears any previously set vertical position.
     * @param value New top offset.
     */
    GlobalPositionStrategy.prototype.top = function (value) {
        this._bottomOffset = '';
        this._topOffset = value;
        this._alignItems = 'flex-start';
        return this;
    };
    /**
     * Sets the left position of the overlay. Clears any previously set horizontal position.
     * @param value New left offset.
     */
    GlobalPositionStrategy.prototype.left = function (value) {
        this._rightOffset = '';
        this._leftOffset = value;
        this._justifyContent = 'flex-start';
        return this;
    };
    /**
     * Sets the bottom position of the overlay. Clears any previously set vertical position.
     * @param value New bottom offset.
     */
    GlobalPositionStrategy.prototype.bottom = function (value) {
        this._topOffset = '';
        this._bottomOffset = value;
        this._alignItems = 'flex-end';
        return this;
    };
    /**
     * Sets the right position of the overlay. Clears any previously set horizontal position.
     * @param value New right offset.
     */
    GlobalPositionStrategy.prototype.right = function (value) {
        this._leftOffset = '';
        this._rightOffset = value;
        this._justifyContent = 'flex-end';
        return this;
    };
    /**
     * Sets the overlay width and clears any previously set width.
     * @param value New width for the overlay
     */
    GlobalPositionStrategy.prototype.width = function (value) {
        this._width = value;
        // When the width is 100%, we should reset the `left` and the offset,
        // in order to ensure that the element is flush against the viewport edge.
        if (value === '100%') {
            this.left('0px');
        }
        return this;
    };
    /**
     * Sets the overlay height and clears any previously set height.
     * @param value New height for the overlay
     */
    GlobalPositionStrategy.prototype.height = function (value) {
        this._height = value;
        // When the height is 100%, we should reset the `top` and the offset,
        // in order to ensure that the element is flush against the viewport edge.
        if (value === '100%') {
            this.top('0px');
        }
        return this;
    };
    /**
     * Centers the overlay horizontally with an optional offset.
     * Clears any previously set horizontal position.
     *
     * @param offset Overlay offset from the horizontal center.
     */
    GlobalPositionStrategy.prototype.centerHorizontally = function (offset) {
        if (offset === void 0) { offset = ''; }
        this.left(offset);
        this._justifyContent = 'center';
        return this;
    };
    /**
     * Centers the overlay vertically with an optional offset.
     * Clears any previously set vertical position.
     *
     * @param offset Overlay offset from the vertical center.
     */
    GlobalPositionStrategy.prototype.centerVertically = function (offset) {
        if (offset === void 0) { offset = ''; }
        this.top(offset);
        this._alignItems = 'center';
        return this;
    };
    /**
     * Apply the position to the element.
     * @docs-private
     *
     * @param element Element to which to apply the CSS.
     * @returns Resolved when the styles have been applied.
     */
    GlobalPositionStrategy.prototype.apply = function (element) {
        if (!this._wrapper) {
            this._wrapper = document.createElement('div');
            this._wrapper.classList.add('cdk-global-overlay-wrapper');
            element.parentNode.insertBefore(this._wrapper, element);
            this._wrapper.appendChild(element);
        }
        var styles = element.style;
        var parentStyles = element.parentNode.style;
        styles.position = this._cssPosition;
        styles.marginTop = this._topOffset;
        styles.marginLeft = this._leftOffset;
        styles.marginBottom = this._bottomOffset;
        styles.marginRight = this._rightOffset;
        styles.width = this._width;
        styles.height = this._height;
        parentStyles.justifyContent = this._justifyContent;
        parentStyles.alignItems = this._alignItems;
        return Promise.resolve(null);
    };
    /**
     * Removes the wrapper element from the DOM.
     */
    GlobalPositionStrategy.prototype.dispose = function () {
        if (this._wrapper && this._wrapper.parentNode) {
            this._wrapper.parentNode.removeChild(this._wrapper);
            this._wrapper = null;
        }
    };
    return GlobalPositionStrategy;
}());

//# sourceMappingURL=global-position-strategy.js.map

/***/ }),

/***/ "./node_modules/md2/core/overlay/position/overlay-position-builder.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverlayPositionBuilder; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__viewport_ruler__ = __webpack_require__("./node_modules/md2/core/overlay/position/viewport-ruler.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__connected_position_strategy__ = __webpack_require__("./node_modules/md2/core/overlay/position/connected-position-strategy.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_position_strategy__ = __webpack_require__("./node_modules/md2/core/overlay/position/global-position-strategy.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/** Builder for overlay position strategy. */
var OverlayPositionBuilder = (function () {
    function OverlayPositionBuilder(_viewportRuler) {
        this._viewportRuler = _viewportRuler;
    }
    /**
     * Creates a global position strategy.
     */
    OverlayPositionBuilder.prototype.global = function () {
        return new __WEBPACK_IMPORTED_MODULE_3__global_position_strategy__["a" /* GlobalPositionStrategy */]();
    };
    /**
     * Creates a relative position strategy.
     * @param elementRef
     * @param originPos
     * @param overlayPos
     */
    OverlayPositionBuilder.prototype.connectedTo = function (elementRef, originPos, overlayPos) {
        return new __WEBPACK_IMPORTED_MODULE_1__connected_position_strategy__["a" /* ConnectedPositionStrategy */](elementRef, originPos, overlayPos, this._viewportRuler);
    };
    return OverlayPositionBuilder;
}());
OverlayPositionBuilder = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__viewport_ruler__["b" /* ViewportRuler */]])
], OverlayPositionBuilder);

//# sourceMappingURL=overlay-position-builder.js.map

/***/ }),

/***/ "./node_modules/md2/core/overlay/position/viewport-ruler.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ViewportRuler; });
/* unused harmony export VIEWPORT_RULER_PROVIDER_FACTORY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VIEWPORT_RULER_PROVIDER; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scroll_scroll_dispatcher__ = __webpack_require__("./node_modules/md2/core/overlay/scroll/scroll-dispatcher.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Simple utility for getting the bounds of the browser viewport.
 * @docs-private
 */
var ViewportRuler = (function () {
    function ViewportRuler(scrollDispatcher) {
        var _this = this;
        // Subscribe to scroll and resize events and update the document rectangle on changes.
        scrollDispatcher.scrolled(null, function () { return _this._cacheViewportGeometry(); });
    }
    /** Gets a ClientRect for the viewport's bounds. */
    ViewportRuler.prototype.getViewportRect = function (documentRect) {
        if (documentRect === void 0) { documentRect = this._documentRect; }
        // Cache the document bounding rect so that we don't recompute it for multiple calls.
        if (!documentRect) {
            this._cacheViewportGeometry();
            documentRect = this._documentRect;
        }
        // Use the document element's bounding rect rather than the window scroll properties
        // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
        // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
        // conceptual viewports. Under most circumstances these viewports are equivalent, but they
        // can disagree when the page is pinch-zoomed (on devices that support touch).
        // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
        // We use the documentElement instead of the body because, by default (without a css reset)
        // browsers typically give the document body an 8px margin, which is not included in
        // getBoundingClientRect().
        var scrollPosition = this.getViewportScrollPosition(documentRect);
        var height = window.innerHeight;
        var width = window.innerWidth;
        return {
            top: scrollPosition.top,
            left: scrollPosition.left,
            bottom: scrollPosition.top + height,
            right: scrollPosition.left + width,
            height: height,
            width: width,
        };
    };
    /**
     * Gets the (top, left) scroll position of the viewport.
     * @param documentRect
     */
    ViewportRuler.prototype.getViewportScrollPosition = function (documentRect) {
        if (documentRect === void 0) { documentRect = this._documentRect; }
        // Cache the document bounding rect so that we don't recompute it for multiple calls.
        if (!documentRect) {
            this._cacheViewportGeometry();
            documentRect = this._documentRect;
        }
        // The top-left-corner of the viewport is determined by the scroll position of the document
        // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
        // whether `document.body` or `document.documentElement` is the scrolled element, so reading
        // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
        // `document.documentElement` works consistently, where the `top` and `left` values will
        // equal negative the scroll position.
        var top = -documentRect.top || document.body.scrollTop || window.scrollY ||
            document.documentElement.scrollTop || 0;
        var left = -documentRect.left || document.body.scrollLeft || window.scrollX ||
            document.documentElement.scrollLeft || 0;
        return { top: top, left: left };
    };
    /** Caches the latest client rectangle of the document element. */
    ViewportRuler.prototype._cacheViewportGeometry = function () {
        this._documentRect = document.documentElement.getBoundingClientRect();
    };
    return ViewportRuler;
}());
ViewportRuler = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__scroll_scroll_dispatcher__["b" /* ScrollDispatcher */]])
], ViewportRuler);

function VIEWPORT_RULER_PROVIDER_FACTORY(parentRuler, scrollDispatcher) {
    return parentRuler || new ViewportRuler(scrollDispatcher);
}
var VIEWPORT_RULER_PROVIDER = {
    // If there is already a ViewportRuler available, use that. Otherwise, provide a new one.
    provide: ViewportRuler,
    deps: [[new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"](), new __WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"](), ViewportRuler], __WEBPACK_IMPORTED_MODULE_1__scroll_scroll_dispatcher__["b" /* ScrollDispatcher */]],
    useFactory: VIEWPORT_RULER_PROVIDER_FACTORY
};
//# sourceMappingURL=viewport-ruler.js.map

/***/ }),

/***/ "./node_modules/md2/core/overlay/scroll/block-scroll-strategy.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockScrollStrategy; });
/**
 * Strategy that will prevent the user from scrolling while the overlay is visible.
 */
var BlockScrollStrategy = (function () {
    function BlockScrollStrategy(_viewportRuler) {
        this._viewportRuler = _viewportRuler;
        this._previousHTMLStyles = { top: '', left: '' };
        this._isEnabled = false;
    }
    BlockScrollStrategy.prototype.attach = function () { };
    BlockScrollStrategy.prototype.enable = function () {
        if (this._canBeEnabled()) {
            var root = document.documentElement;
            this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition();
            // Cache the previous inline styles in case the user had set them.
            this._previousHTMLStyles.left = root.style.left;
            this._previousHTMLStyles.top = root.style.top;
            // Note: we're using the `html` node, instead of the `body`, because the `body` may
            // have the user agent margin, whereas the `html` is guaranteed not to have one.
            root.style.left = -this._previousScrollPosition.left + "px";
            root.style.top = -this._previousScrollPosition.top + "px";
            root.classList.add('cdk-global-scrollblock');
            this._isEnabled = true;
        }
    };
    BlockScrollStrategy.prototype.disable = function () {
        if (this._isEnabled) {
            this._isEnabled = false;
            document.documentElement.style.left = this._previousHTMLStyles.left;
            document.documentElement.style.top = this._previousHTMLStyles.top;
            document.documentElement.classList.remove('cdk-global-scrollblock');
            window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top);
        }
    };
    BlockScrollStrategy.prototype._canBeEnabled = function () {
        // Since the scroll strategies can't be singletons, we have to use a global CSS class
        // (`cdk-global-scrollblock`) to make sure that we don't try to disable global
        // scrolling multiple times.
        if (document.documentElement.classList.contains('cdk-global-scrollblock') || this._isEnabled) {
            return false;
        }
        var body = document.body;
        var viewport = this._viewportRuler.getViewportRect();
        return body.scrollHeight > viewport.height || body.scrollWidth > viewport.width;
    };
    return BlockScrollStrategy;
}());

//# sourceMappingURL=block-scroll-strategy.js.map

/***/ }),

/***/ "./node_modules/md2/core/overlay/scroll/close-scroll-strategy.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloseScrollStrategy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scroll_strategy__ = __webpack_require__("./node_modules/md2/core/overlay/scroll/scroll-strategy.js");

/**
 * Strategy that will close the overlay as soon as the user starts scrolling.
 */
var CloseScrollStrategy = (function () {
    function CloseScrollStrategy(_scrollDispatcher) {
        this._scrollDispatcher = _scrollDispatcher;
        this._scrollSubscription = null;
    }
    CloseScrollStrategy.prototype.attach = function (overlayRef) {
        if (this._overlayRef) {
            throw Object(__WEBPACK_IMPORTED_MODULE_0__scroll_strategy__["a" /* getMdScrollStrategyAlreadyAttachedError */])();
        }
        this._overlayRef = overlayRef;
    };
    CloseScrollStrategy.prototype.enable = function () {
        var _this = this;
        if (!this._scrollSubscription) {
            this._scrollSubscription = this._scrollDispatcher.scrolled(null, function () {
                if (_this._overlayRef.hasAttached()) {
                    _this._overlayRef.detach();
                }
                _this.disable();
            });
        }
    };
    CloseScrollStrategy.prototype.disable = function () {
        if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();
            this._scrollSubscription = null;
        }
    };
    return CloseScrollStrategy;
}());

//# sourceMappingURL=close-scroll-strategy.js.map

/***/ }),

/***/ "./node_modules/md2/core/overlay/scroll/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollDispatchModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scroll_dispatcher__ = __webpack_require__("./node_modules/md2/core/overlay/scroll/scroll-dispatcher.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scrollable__ = __webpack_require__("./node_modules/md2/core/overlay/scroll/scrollable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__platform_index__ = __webpack_require__("./node_modules/md2/core/platform/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scroll_strategy_options__ = __webpack_require__("./node_modules/md2/core/overlay/scroll/scroll-strategy-options.js");
/* unused harmony reexport Scrollable */
/* unused harmony reexport ScrollDispatcher */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__scroll_strategy_options__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reposition_scroll_strategy__ = __webpack_require__("./node_modules/md2/core/overlay/scroll/reposition-scroll-strategy.js");
/* unused harmony reexport RepositionScrollStrategy */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__close_scroll_strategy__ = __webpack_require__("./node_modules/md2/core/overlay/scroll/close-scroll-strategy.js");
/* unused harmony reexport CloseScrollStrategy */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__noop_scroll_strategy__ = __webpack_require__("./node_modules/md2/core/overlay/scroll/noop-scroll-strategy.js");
/* unused harmony reexport NoopScrollStrategy */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__block_scroll_strategy__ = __webpack_require__("./node_modules/md2/core/overlay/scroll/block-scroll-strategy.js");
/* unused harmony reexport BlockScrollStrategy */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ScrollDispatchModule = (function () {
    function ScrollDispatchModule() {
    }
    return ScrollDispatchModule;
}());
ScrollDispatchModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_3__platform_index__["b" /* PlatformModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__scrollable__["a" /* Scrollable */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__scrollable__["a" /* Scrollable */]],
        providers: [__WEBPACK_IMPORTED_MODULE_1__scroll_dispatcher__["a" /* SCROLL_DISPATCHER_PROVIDER */], __WEBPACK_IMPORTED_MODULE_4__scroll_strategy_options__["a" /* ScrollStrategyOptions */]],
    })
], ScrollDispatchModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/md2/core/overlay/scroll/noop-scroll-strategy.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoopScrollStrategy; });
/**
 * Scroll strategy that doesn't do anything.
 */
var NoopScrollStrategy = (function () {
    function NoopScrollStrategy() {
    }
    NoopScrollStrategy.prototype.enable = function () { };
    NoopScrollStrategy.prototype.disable = function () { };
    NoopScrollStrategy.prototype.attach = function () { };
    return NoopScrollStrategy;
}());

//# sourceMappingURL=noop-scroll-strategy.js.map

/***/ }),

/***/ "./node_modules/md2/core/overlay/scroll/reposition-scroll-strategy.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepositionScrollStrategy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scroll_strategy__ = __webpack_require__("./node_modules/md2/core/overlay/scroll/scroll-strategy.js");

/**
 * Strategy that will update the element position as the user is scrolling.
 */
var RepositionScrollStrategy = (function () {
    function RepositionScrollStrategy(_scrollDispatcher, _config) {
        this._scrollDispatcher = _scrollDispatcher;
        this._config = _config;
        this._scrollSubscription = null;
    }
    RepositionScrollStrategy.prototype.attach = function (overlayRef) {
        if (this._overlayRef) {
            throw Object(__WEBPACK_IMPORTED_MODULE_0__scroll_strategy__["a" /* getMdScrollStrategyAlreadyAttachedError */])();
        }
        this._overlayRef = overlayRef;
    };
    RepositionScrollStrategy.prototype.enable = function () {
        var _this = this;
        if (!this._scrollSubscription) {
            var throttle = this._config ? this._config.scrollThrottle : 0;
            this._scrollSubscription = this._scrollDispatcher.scrolled(throttle, function () {
                _this._overlayRef.updatePosition();
            });
        }
    };
    RepositionScrollStrategy.prototype.disable = function () {
        if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();
            this._scrollSubscription = null;
        }
    };
    return RepositionScrollStrategy;
}());

//# sourceMappingURL=reposition-scroll-strategy.js.map

/***/ }),

/***/ "./node_modules/md2/core/overlay/scroll/scroll-dispatcher.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DEFAULT_SCROLL_TIME */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ScrollDispatcher; });
/* unused harmony export SCROLL_DISPATCHER_PROVIDER_FACTORY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SCROLL_DISPATCHER_PROVIDER; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__platform_index__ = __webpack_require__("./node_modules/md2/core/platform/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_auditTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/auditTime.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/** Time in ms to throttle the scrolling events by default. */
var DEFAULT_SCROLL_TIME = 20;
/**
 * Service contained all registered Scrollable references and emits an event when any one of the
 * Scrollable references emit a scrolled event.
 */
var ScrollDispatcher = (function () {
    function ScrollDispatcher(_ngZone, _platform) {
        this._ngZone = _ngZone;
        this._platform = _platform;
        /** Subject for notifying that a registered scrollable reference element has been scrolled. */
        this._scrolled = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        /** Keeps track of the global `scroll` and `resize` subscriptions. */
        this._globalSubscription = null;
        /** Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards. */
        this._scrolledCount = 0;
        /**
         * Map of all the scrollable references that are registered with the service and their
         * scroll event subscriptions.
         */
        this.scrollableReferences = new Map();
    }
    /**
     * Registers a Scrollable with the service and listens for its scrolled events. When the
     * scrollable is scrolled, the service emits the event in its scrolled observable.
     * @param scrollable Scrollable instance to be registered.
     */
    ScrollDispatcher.prototype.register = function (scrollable) {
        var _this = this;
        var scrollSubscription = scrollable.elementScrolled().subscribe(function () { return _this._notify(); });
        this.scrollableReferences.set(scrollable, scrollSubscription);
    };
    /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param scrollable Scrollable instance to be deregistered.
     */
    ScrollDispatcher.prototype.deregister = function (scrollable) {
        if (this.scrollableReferences.has(scrollable)) {
            this.scrollableReferences.get(scrollable).unsubscribe();
            this.scrollableReferences.delete(scrollable);
        }
    };
    /**
     * Subscribes to an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     */
    ScrollDispatcher.prototype.scrolled = function (auditTimeInMs, callback) {
        var _this = this;
        if (auditTimeInMs === void 0) { auditTimeInMs = DEFAULT_SCROLL_TIME; }
        // Scroll events can only happen on the browser, so do nothing if we're not on the browser.
        if (!this._platform.isBrowser) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__["a" /* Subscription */].EMPTY;
        }
        // In the case of a 0ms delay, use an observable without auditTime
        // since it does add a perceptible delay in processing overhead.
        var observable = auditTimeInMs > 0 ?
            this._scrolled.asObservable().auditTime(auditTimeInMs) :
            this._scrolled.asObservable();
        this._scrolledCount++;
        if (!this._globalSubscription) {
            this._globalSubscription = this._ngZone.runOutsideAngular(function () {
                return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].merge(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].fromEvent(window.document, 'scroll'), __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].fromEvent(window, 'resize')).subscribe(function () { return _this._notify(); });
            });
        }
        // Note that we need to do the subscribing from here, in order to be able to remove
        // the global event listeners once there are no more subscriptions.
        var subscription = observable.subscribe(callback);
        subscription.add(function () {
            _this._scrolledCount--;
            if (_this._globalSubscription && !_this.scrollableReferences.size && !_this._scrolledCount) {
                _this._globalSubscription.unsubscribe();
                _this._globalSubscription = null;
            }
        });
        return subscription;
    };
    /** Returns all registered Scrollables that contain the provided element. */
    ScrollDispatcher.prototype.getScrollContainers = function (elementRef) {
        var _this = this;
        var scrollingContainers = [];
        this.scrollableReferences.forEach(function (_subscription, scrollable) {
            if (_this.scrollableContainsElement(scrollable, elementRef)) {
                scrollingContainers.push(scrollable);
            }
        });
        return scrollingContainers;
    };
    /** Returns true if the element is contained within the provided Scrollable. */
    ScrollDispatcher.prototype.scrollableContainsElement = function (scrollable, elementRef) {
        var element = elementRef.nativeElement;
        var scrollableElement = scrollable.getElementRef().nativeElement;
        // Traverse through the element parents until we reach null, checking if any of the elements
        // are the scrollable's element.
        do {
            if (element == scrollableElement) {
                return true;
            }
        } while (element = element.parentElement);
    };
    /** Sends a notification that a scroll event has been fired. */
    ScrollDispatcher.prototype._notify = function () {
        this._scrolled.next();
    };
    return ScrollDispatcher;
}());
ScrollDispatcher = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_1__platform_index__["a" /* Platform */]])
], ScrollDispatcher);

function SCROLL_DISPATCHER_PROVIDER_FACTORY(parentDispatcher, ngZone, platform) {
    return parentDispatcher || new ScrollDispatcher(ngZone, platform);
}
var SCROLL_DISPATCHER_PROVIDER = {
    // If there is already a ScrollDispatcher available, use that. Otherwise, provide a new one.
    provide: ScrollDispatcher,
    deps: [[new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"](), new __WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"](), ScrollDispatcher], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_1__platform_index__["a" /* Platform */]],
    useFactory: SCROLL_DISPATCHER_PROVIDER_FACTORY
};
//# sourceMappingURL=scroll-dispatcher.js.map

/***/ }),

/***/ "./node_modules/md2/core/overlay/scroll/scroll-strategy-options.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollStrategyOptions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__close_scroll_strategy__ = __webpack_require__("./node_modules/md2/core/overlay/scroll/close-scroll-strategy.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noop_scroll_strategy__ = __webpack_require__("./node_modules/md2/core/overlay/scroll/noop-scroll-strategy.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__block_scroll_strategy__ = __webpack_require__("./node_modules/md2/core/overlay/scroll/block-scroll-strategy.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scroll_dispatcher__ = __webpack_require__("./node_modules/md2/core/overlay/scroll/scroll-dispatcher.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__position_viewport_ruler__ = __webpack_require__("./node_modules/md2/core/overlay/position/viewport-ruler.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reposition_scroll_strategy__ = __webpack_require__("./node_modules/md2/core/overlay/scroll/reposition-scroll-strategy.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Options for how an overlay will handle scrolling.
 *
 * Users can provide a custom value for `ScrollStrategyOptions` to replace the default
 * behaviors. This class primarily acts as a factory for ScrollStrategy instances.
 */
var ScrollStrategyOptions = (function () {
    function ScrollStrategyOptions(_scrollDispatcher, _viewportRuler) {
        var _this = this;
        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        /** Do nothing on scroll. */
        this.noop = function () { return new __WEBPACK_IMPORTED_MODULE_2__noop_scroll_strategy__["a" /* NoopScrollStrategy */](); };
        /** Close the overlay as soon as the user scrolls. */
        this.close = function () { return new __WEBPACK_IMPORTED_MODULE_1__close_scroll_strategy__["a" /* CloseScrollStrategy */](_this._scrollDispatcher); };
        /** Block scrolling. */
        this.block = function () { return new __WEBPACK_IMPORTED_MODULE_3__block_scroll_strategy__["a" /* BlockScrollStrategy */](_this._viewportRuler); };
        /**
         * Update the overlay's position on scroll.
         * @param config Configuration to be used inside the scroll strategy.
         * Allows debouncing the reposition calls.
         */
        this.reposition = function (config) {
            return new __WEBPACK_IMPORTED_MODULE_6__reposition_scroll_strategy__["a" /* RepositionScrollStrategy */](_this._scrollDispatcher, config);
        };
    }
    return ScrollStrategyOptions;
}());
ScrollStrategyOptions = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__scroll_dispatcher__["b" /* ScrollDispatcher */],
        __WEBPACK_IMPORTED_MODULE_5__position_viewport_ruler__["b" /* ViewportRuler */]])
], ScrollStrategyOptions);

//# sourceMappingURL=scroll-strategy-options.js.map

/***/ }),

/***/ "./node_modules/md2/core/overlay/scroll/scroll-strategy.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getMdScrollStrategyAlreadyAttachedError;
/**
 * Returns an error to be thrown when attempting to attach an already-attached scroll strategy.
 */
function getMdScrollStrategyAlreadyAttachedError() {
    return Error("Scroll strategy has already been attached.");
}
//# sourceMappingURL=scroll-strategy.js.map

/***/ }),

/***/ "./node_modules/md2/core/overlay/scroll/scrollable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Scrollable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scroll_dispatcher__ = __webpack_require__("./node_modules/md2/core/overlay/scroll/scroll-dispatcher.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/fromEvent.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Sends an event when the directive's element is scrolled. Registers itself with the
 * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
 * can be listened to through the service.
 */
var Scrollable = (function () {
    function Scrollable(_elementRef, _scroll, _ngZone, _renderer) {
        this._elementRef = _elementRef;
        this._scroll = _scroll;
        this._ngZone = _ngZone;
        this._renderer = _renderer;
        this._elementScrolled = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["b" /* Subject */]();
    }
    Scrollable.prototype.ngOnInit = function () {
        var _this = this;
        this._scrollListener = this._ngZone.runOutsideAngular(function () {
            return _this._renderer.listen(_this.getElementRef().nativeElement, 'scroll', function (event) {
                _this._elementScrolled.next(event);
            });
        });
        this._scroll.register(this);
    };
    Scrollable.prototype.ngOnDestroy = function () {
        this._scroll.deregister(this);
        if (this._scrollListener) {
            this._scrollListener();
            this._scrollListener = null;
        }
    };
    /**
     * Returns observable that emits when a scroll event is fired on the host element.
     */
    Scrollable.prototype.elementScrolled = function () {
        return this._elementScrolled.asObservable();
    };
    Scrollable.prototype.getElementRef = function () {
        return this._elementRef;
    };
    return Scrollable;
}());
Scrollable = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[cdk-scrollable], [cdkScrollable]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
        __WEBPACK_IMPORTED_MODULE_2__scroll_dispatcher__["b" /* ScrollDispatcher */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
], Scrollable);

//# sourceMappingURL=scrollable.js.map

/***/ }),

/***/ "./node_modules/md2/core/placeholder/placeholder-options.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MD_PLACEHOLDER_GLOBAL_OPTIONS */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

/** InjectionToken that can be used to specify the global placeholder options. */
var MD_PLACEHOLDER_GLOBAL_OPTIONS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('md-placeholder-global-options');
//# sourceMappingURL=placeholder-options.js.map

/***/ }),

/***/ "./node_modules/md2/core/platform/features.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getSupportedInputTypes */
/** Cached result Set of input types support by the current browser. */
var supportedInputTypes;
/** Types of <input> that *might* be supported. */
var candidateInputTypes = [
    // `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
    // first changing it to something else:
    // The specified value "" does not conform to the required format.
    // The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
    'color',
    'button',
    'checkbox',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
];
/** @returns The input types supported by this browser. */
function getSupportedInputTypes() {
    // Result is cached.
    if (supportedInputTypes) {
        return supportedInputTypes;
    }
    // We can't check if an input type is not supported until we're on the browser, so say that
    // everything is supported when not on the browser. We don't use `Platform` here since it's
    // just a helper function and can't inject it.
    if (typeof document !== 'object' || !document) {
        supportedInputTypes = new Set(candidateInputTypes);
        return supportedInputTypes;
    }
    var featureTestInput = document.createElement('input');
    supportedInputTypes = new Set(candidateInputTypes.filter(function (value) {
        featureTestInput.setAttribute('type', value);
        return featureTestInput.type === value;
    }));
    return supportedInputTypes;
}
//# sourceMappingURL=features.js.map

/***/ }),

/***/ "./node_modules/md2/core/platform/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PlatformModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__platform__ = __webpack_require__("./node_modules/md2/core/platform/platform.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__platform__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__features__ = __webpack_require__("./node_modules/md2/core/platform/features.js");
/* unused harmony namespace reexport */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PlatformModule = (function () {
    function PlatformModule() {
    }
    return PlatformModule;
}());
PlatformModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        providers: [__WEBPACK_IMPORTED_MODULE_1__platform__["a" /* Platform */]]
    })
], PlatformModule);



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/md2/core/platform/platform.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Platform; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.
var hasV8BreakIterator = (typeof (Intl) !== 'undefined' && Intl.v8BreakIterator);
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 * @docs-private
 */
var Platform = (function () {
    function Platform() {
        this.isBrowser = typeof document === 'object' && !!document;
        /** Layout Engines */
        this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
        this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
        // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
        this.BLINK = this.isBrowser &&
            (!!(window.chrome || hasV8BreakIterator) && !!CSS && !this.EDGE && !this.TRIDENT);
        // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
        // ensure that Webkit runs standalone and is not used as another engine's base.
        this.WEBKIT = this.isBrowser &&
            /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
        /** Browsers and Platform Types */
        this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        // It's difficult to detect the plain Gecko engine, because most of the browsers identify
        // them self as Gecko-like browsers and modify the userAgent's according to that.
        // Since we only cover one explicit Firefox case, we can simply check for Firefox
        // instead of having an unstable check for Gecko.
        this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
        // Trident on mobile adds the android platform to the userAgent to trick detections.
        this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
        // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
        // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
        // Safari browser should also use Webkit as its layout engine.
        this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
    }
    return Platform;
}());
Platform = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], Platform);

//# sourceMappingURL=platform.js.map

/***/ }),

/***/ "./node_modules/md2/core/portal/dom-portal-host.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomPortalHost; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__portal__ = __webpack_require__("./node_modules/md2/core/portal/portal.js");
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

/**
 * A PortalHost for attaching portals to an arbitrary DOM element outside of the Angular
 * application context.
 *
 * This is the only part of the portal core that directly touches the DOM.
 */
var DomPortalHost = (function (_super) {
    __extends(DomPortalHost, _super);
    function DomPortalHost(_hostDomElement, _componentFactoryResolver, _appRef, _defaultInjector) {
        var _this = _super.call(this) || this;
        _this._hostDomElement = _hostDomElement;
        _this._componentFactoryResolver = _componentFactoryResolver;
        _this._appRef = _appRef;
        _this._defaultInjector = _defaultInjector;
        return _this;
    }
    /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @param portal Portal to be attached
     */
    DomPortalHost.prototype.attachComponentPortal = function (portal) {
        var _this = this;
        var componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
        var componentRef;
        // If the portal specifies a ViewContainerRef, we will use that as the attachment point
        // for the component (in terms of Angular's component tree, not rendering).
        // When the ViewContainerRef is missing, we use the factory to create the component directly
        // and then manually attach the view to the application.
        if (portal.viewContainerRef) {
            componentRef = portal.viewContainerRef.createComponent(componentFactory, portal.viewContainerRef.length, portal.injector || portal.viewContainerRef.parentInjector);
            this.setDisposeFn(function () { return componentRef.destroy(); });
        }
        else {
            componentRef = componentFactory.create(portal.injector || this._defaultInjector);
            this._appRef.attachView(componentRef.hostView);
            this.setDisposeFn(function () {
                _this._appRef.detachView(componentRef.hostView);
                componentRef.destroy();
            });
        }
        // At this point the component has been instantiated, so we move it to the location in the DOM
        // where we want it to be rendered.
        this._hostDomElement.appendChild(this._getComponentRootNode(componentRef));
        return componentRef;
    };
    /**
     * Attaches a template portal to the DOM as an embedded view.
     * @param portal Portal to be attached.
     */
    DomPortalHost.prototype.attachTemplatePortal = function (portal) {
        var _this = this;
        var viewContainer = portal.viewContainerRef;
        var viewRef = viewContainer.createEmbeddedView(portal.templateRef);
        viewRef.detectChanges();
        // The method `createEmbeddedView` will add the view as a child of the viewContainer.
        // But for the DomPortalHost the view can be added everywhere in the DOM (e.g Overlay Container)
        // To move the view to the specified host element. We just re-append the existing root nodes.
        viewRef.rootNodes.forEach(function (rootNode) { return _this._hostDomElement.appendChild(rootNode); });
        this.setDisposeFn((function () {
            var index = viewContainer.indexOf(viewRef);
            if (index !== -1) {
                viewContainer.remove(index);
            }
        }));
        // TODO(jelbourn): Return locals from view.
        return new Map();
    };
    /**
     * Clears out a portal from the DOM.
     */
    DomPortalHost.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        if (this._hostDomElement.parentNode != null) {
            this._hostDomElement.parentNode.removeChild(this._hostDomElement);
        }
    };
    /** Gets the root HTMLElement for an instantiated component. */
    DomPortalHost.prototype._getComponentRootNode = function (componentRef) {
        return componentRef.hostView.rootNodes[0];
    };
    return DomPortalHost;
}(__WEBPACK_IMPORTED_MODULE_0__portal__["a" /* BasePortalHost */]));

//# sourceMappingURL=dom-portal-host.js.map

/***/ }),

/***/ "./node_modules/md2/core/portal/portal-directives.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TemplatePortalDirective; });
/* unused harmony export PortalHostDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__portal__ = __webpack_require__("./node_modules/md2/core/portal/portal.js");
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Directive version of a `TemplatePortal`. Because the directive *is* a TemplatePortal,
 * the directive instance itself can be attached to a host, enabling declarative use of portals.
 *
 * Usage:
 * <ng-template portal #greeting>
 *   <p> Hello {{name}} </p>
 * </ng-template>
 */
var TemplatePortalDirective = (function (_super) {
    __extends(TemplatePortalDirective, _super);
    function TemplatePortalDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return TemplatePortalDirective;
}(__WEBPACK_IMPORTED_MODULE_1__portal__["c" /* TemplatePortal */]));
TemplatePortalDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[cdk-portal], [cdkPortal], [portal]',
        exportAs: 'cdkPortal',
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
], TemplatePortalDirective);

/**
 * Directive version of a PortalHost. Because the directive *is* a PortalHost, portals can be
 * directly attached to it, enabling declarative use.
 *
 * Usage:
 * <ng-template [cdkPortalHost]="greeting"></ng-template>
 */
var PortalHostDirective = (function (_super) {
    __extends(PortalHostDirective, _super);
    function PortalHostDirective(_componentFactoryResolver, _viewContainerRef) {
        var _this = _super.call(this) || this;
        _this._componentFactoryResolver = _componentFactoryResolver;
        _this._viewContainerRef = _viewContainerRef;
        return _this;
    }
    Object.defineProperty(PortalHostDirective.prototype, "_deprecatedPortal", {
        /** @deprecated */
        get: function () { return this.portal; },
        set: function (v) { this.portal = v; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PortalHostDirective.prototype, "portal", {
        /** Portal associated with the Portal host. */
        get: function () {
            return this._portal;
        },
        set: function (portal) {
            if (this.hasAttached()) {
                _super.prototype.detach.call(this);
            }
            if (portal) {
                _super.prototype.attach.call(this, portal);
            }
            this._portal = portal;
        },
        enumerable: true,
        configurable: true
    });
    PortalHostDirective.prototype.ngOnDestroy = function () {
        _super.prototype.dispose.call(this);
        this._portal = null;
    };
    /**
     * Attach the given ComponentPortal to this PortalHost using the ComponentFactoryResolver.
     *
     * @param portal Portal to be attached to the portal host.
     */
    PortalHostDirective.prototype.attachComponentPortal = function (portal) {
        portal.setAttachedHost(this);
        // If the portal specifies an origin, use that as the logical location of the component
        // in the application tree. Otherwise use the location of this PortalHost.
        var viewContainerRef = portal.viewContainerRef != null ?
            portal.viewContainerRef :
            this._viewContainerRef;
        var componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
        var ref = viewContainerRef.createComponent(componentFactory, viewContainerRef.length, portal.injector || viewContainerRef.parentInjector);
        _super.prototype.setDisposeFn.call(this, function () { return ref.destroy(); });
        this._portal = portal;
        return ref;
    };
    /**
     * Attach the given TemplatePortal to this PortlHost as an embedded View.
     * @param portal Portal to be attached.
     */
    PortalHostDirective.prototype.attachTemplatePortal = function (portal) {
        var _this = this;
        portal.setAttachedHost(this);
        this._viewContainerRef.createEmbeddedView(portal.templateRef);
        _super.prototype.setDisposeFn.call(this, function () { return _this._viewContainerRef.clear(); });
        this._portal = portal;
        // TODO(jelbourn): return locals from view
        return new Map();
    };
    return PortalHostDirective;
}(__WEBPACK_IMPORTED_MODULE_1__portal__["a" /* BasePortalHost */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('portalHost'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], PortalHostDirective.prototype, "_deprecatedPortal", null);
PortalHostDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[cdkPortalHost], [portalHost]',
        inputs: ['portal: cdkPortalHost']
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
], PortalHostDirective);

var PortalModule = (function () {
    function PortalModule() {
    }
    return PortalModule;
}());
PortalModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        exports: [TemplatePortalDirective, PortalHostDirective],
        declarations: [TemplatePortalDirective, PortalHostDirective],
    })
], PortalModule);

//# sourceMappingURL=portal-directives.js.map

/***/ }),

/***/ "./node_modules/md2/core/portal/portal-errors.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = throwNullPortalError;
/* harmony export (immutable) */ __webpack_exports__["d"] = throwPortalAlreadyAttachedError;
/* harmony export (immutable) */ __webpack_exports__["e"] = throwPortalHostAlreadyDisposedError;
/* harmony export (immutable) */ __webpack_exports__["f"] = throwUnknownPortalTypeError;
/* harmony export (immutable) */ __webpack_exports__["c"] = throwNullPortalHostError;
/* harmony export (immutable) */ __webpack_exports__["a"] = throwNoPortalAttachedError;
/**
 * Throws an exception when attempting to attach a null portal to a host.
 * @docs-private
 */
/**
 * Throws an exception when attempting to attach a null portal to a host.
 * @docs-private
 */ function throwNullPortalError() {
    throw Error('Must provide a portal to attach');
}
/**
 * Throws an exception when attempting to attach a portal to a host that is already attached.
 * @docs-private
 */
function throwPortalAlreadyAttachedError() {
    throw Error('Host already has a portal attached');
}
/**
 * Throws an exception when attempting to attach a portal to an already-disposed host.
 * @docs-private
 */
function throwPortalHostAlreadyDisposedError() {
    throw Error('This PortalHost has already been disposed');
}
/**
 * Throws an exception when attempting to attach an unknown portal type.
 * @docs-private
 */
function throwUnknownPortalTypeError() {
    throw Error('Attempting to attach an unknown Portal type. BasePortalHost accepts either' +
        'a ComponentPortal or a TemplatePortal.');
}
/**
 * Throws an exception when attempting to attach a portal to a null host.
 * @docs-private
 */
function throwNullPortalHostError() {
    throw Error('Attempting to attach a portal to a null PortalHost');
}
/**
 * Throws an exception when attempting to detach a portal that is not attached.
 * @docs-privatew
 */
function throwNoPortalAttachedError() {
    throw Error('Attempting to detach a portal that is not attached to a host');
}
//# sourceMappingURL=portal-errors.js.map

/***/ }),

/***/ "./node_modules/md2/core/portal/portal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Portal */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ComponentPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TemplatePortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasePortalHost; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__portal_errors__ = __webpack_require__("./node_modules/md2/core/portal/portal-errors.js");
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

/**
 * A `Portal` is something that you want to render somewhere else.
 * It can be attach to / detached from a `PortalHost`.
 */
var Portal = (function () {
    function Portal() {
    }
    /** Attach this portal to a host. */
    Portal.prototype.attach = function (host) {
        if (host == null) {
            Object(__WEBPACK_IMPORTED_MODULE_0__portal_errors__["c" /* throwNullPortalHostError */])();
        }
        if (host.hasAttached()) {
            Object(__WEBPACK_IMPORTED_MODULE_0__portal_errors__["d" /* throwPortalAlreadyAttachedError */])();
        }
        this._attachedHost = host;
        return host.attach(this);
    };
    /** Detach this portal from its host */
    Portal.prototype.detach = function () {
        var host = this._attachedHost;
        if (host == null) {
            Object(__WEBPACK_IMPORTED_MODULE_0__portal_errors__["a" /* throwNoPortalAttachedError */])();
        }
        this._attachedHost = null;
        return host.detach();
    };
    Object.defineProperty(Portal.prototype, "isAttached", {
        /** Whether this portal is attached to a host. */
        get: function () {
            return this._attachedHost != null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the PortalHost reference without performing `attach()`. This is used directly by
     * the PortalHost when it is performing an `attach()` or `detach()`.
     */
    Portal.prototype.setAttachedHost = function (host) {
        this._attachedHost = host;
    };
    return Portal;
}());

/**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 */
var ComponentPortal = (function (_super) {
    __extends(ComponentPortal, _super);
    function ComponentPortal(component, viewContainerRef, injector) {
        if (viewContainerRef === void 0) { viewContainerRef = null; }
        if (injector === void 0) { injector = null; }
        var _this = _super.call(this) || this;
        _this.component = component;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        return _this;
    }
    return ComponentPortal;
}(Portal));

/**
 * A `TemplatePortal` is a portal that represents some embedded template (TemplateRef).
 */
var TemplatePortal = (function (_super) {
    __extends(TemplatePortal, _super);
    function TemplatePortal(template, viewContainerRef) {
        var _this = _super.call(this) || this;
        /**
         * Additional locals for the instantiated embedded view.
         * These locals can be seen as "exports" for the template, such as how ngFor has
         * index / event / odd.
         * See https://angular.io/docs/ts/latest/api/core/EmbeddedViewRef-class.html
         */
        _this.locals = new Map();
        _this.templateRef = template;
        _this.viewContainerRef = viewContainerRef;
        return _this;
    }
    Object.defineProperty(TemplatePortal.prototype, "origin", {
        get: function () {
            return this.templateRef.elementRef;
        },
        enumerable: true,
        configurable: true
    });
    TemplatePortal.prototype.attach = function (host, locals) {
        this.locals = locals == null ? new Map() : locals;
        return _super.prototype.attach.call(this, host);
    };
    TemplatePortal.prototype.detach = function () {
        this.locals = new Map();
        return _super.prototype.detach.call(this);
    };
    return TemplatePortal;
}(Portal));

/**
 * Partial implementation of PortalHost that only deals with attaching either a
 * ComponentPortal or a TemplatePortal.
 */
var BasePortalHost = (function () {
    function BasePortalHost() {
        /** Whether this host has already been permanently disposed. */
        this._isDisposed = false;
    }
    /** Whether this host has an attached portal. */
    BasePortalHost.prototype.hasAttached = function () {
        return !!this._attachedPortal;
    };
    BasePortalHost.prototype.attach = function (portal) {
        if (!portal) {
            Object(__WEBPACK_IMPORTED_MODULE_0__portal_errors__["b" /* throwNullPortalError */])();
        }
        if (this.hasAttached()) {
            Object(__WEBPACK_IMPORTED_MODULE_0__portal_errors__["d" /* throwPortalAlreadyAttachedError */])();
        }
        if (this._isDisposed) {
            Object(__WEBPACK_IMPORTED_MODULE_0__portal_errors__["e" /* throwPortalHostAlreadyDisposedError */])();
        }
        if (portal instanceof ComponentPortal) {
            this._attachedPortal = portal;
            return this.attachComponentPortal(portal);
        }
        else if (portal instanceof TemplatePortal) {
            this._attachedPortal = portal;
            return this.attachTemplatePortal(portal);
        }
        Object(__WEBPACK_IMPORTED_MODULE_0__portal_errors__["f" /* throwUnknownPortalTypeError */])();
    };
    BasePortalHost.prototype.detach = function () {
        if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost(null);
            this._attachedPortal = null;
        }
        this._invokeDisposeFn();
    };
    BasePortalHost.prototype.dispose = function () {
        if (this.hasAttached()) {
            this.detach();
        }
        this._invokeDisposeFn();
        this._isDisposed = true;
    };
    BasePortalHost.prototype.setDisposeFn = function (fn) {
        this._disposeFn = fn;
    };
    BasePortalHost.prototype._invokeDisposeFn = function () {
        if (this._disposeFn) {
            this._disposeFn();
            this._disposeFn = null;
        }
    };
    return BasePortalHost;
}());

//# sourceMappingURL=portal.js.map

/***/ }),

/***/ "./node_modules/md2/core/ripple/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdRippleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ripple__ = __webpack_require__("./node_modules/md2/core/ripple/ripple.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_behaviors_common_module__ = __webpack_require__("./node_modules/md2/core/common-behaviors/common-module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__overlay_position_viewport_ruler__ = __webpack_require__("./node_modules/md2/core/overlay/position/viewport-ruler.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__overlay_scroll_index__ = __webpack_require__("./node_modules/md2/core/overlay/scroll/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__platform_index__ = __webpack_require__("./node_modules/md2/core/platform/index.js");
/* unused harmony reexport MdRipple */
/* unused harmony reexport MD_RIPPLE_GLOBAL_OPTIONS */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ripple_ref__ = __webpack_require__("./node_modules/md2/core/ripple/ripple-ref.js");
/* unused harmony reexport RippleRef */
/* unused harmony reexport RippleState */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ripple_renderer__ = __webpack_require__("./node_modules/md2/core/ripple/ripple-renderer.js");
/* unused harmony reexport RIPPLE_FADE_IN_DURATION */
/* unused harmony reexport RIPPLE_FADE_OUT_DURATION */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var MdRippleModule = (function () {
    function MdRippleModule() {
    }
    return MdRippleModule;
}());
MdRippleModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__common_behaviors_common_module__["a" /* MdCommonModule */], __WEBPACK_IMPORTED_MODULE_5__platform_index__["b" /* PlatformModule */], __WEBPACK_IMPORTED_MODULE_4__overlay_scroll_index__["a" /* ScrollDispatchModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__ripple__["a" /* MdRipple */], __WEBPACK_IMPORTED_MODULE_2__common_behaviors_common_module__["a" /* MdCommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__ripple__["a" /* MdRipple */]],
        providers: [__WEBPACK_IMPORTED_MODULE_3__overlay_position_viewport_ruler__["a" /* VIEWPORT_RULER_PROVIDER */]],
    })
], MdRippleModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/md2/core/ripple/ripple-ref.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RippleState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RippleRef; });
/** Possible states for a ripple element. */
var RippleState;
(function (RippleState) {
    RippleState[RippleState["FADING_IN"] = 0] = "FADING_IN";
    RippleState[RippleState["VISIBLE"] = 1] = "VISIBLE";
    RippleState[RippleState["FADING_OUT"] = 2] = "FADING_OUT";
    RippleState[RippleState["HIDDEN"] = 3] = "HIDDEN";
})(RippleState || (RippleState = {}));
/**
 * Reference to a previously launched ripple element.
 */
var RippleRef = (function () {
    function RippleRef(_renderer, element, config) {
        this._renderer = _renderer;
        this.element = element;
        this.config = config;
        /** Current state of the ripple reference. */
        this.state = RippleState.HIDDEN;
    }
    /** Fades out the ripple element. */
    RippleRef.prototype.fadeOut = function () {
        this._renderer.fadeOutRipple(this);
    };
    return RippleRef;
}());

//# sourceMappingURL=ripple-ref.js.map

/***/ }),

/***/ "./node_modules/md2/core/ripple/ripple-renderer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RIPPLE_FADE_IN_DURATION */
/* unused harmony export RIPPLE_FADE_OUT_DURATION */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RippleRenderer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ripple_ref__ = __webpack_require__("./node_modules/md2/core/ripple/ripple-ref.js");

/** Fade-in duration for the ripples. Can be modified with the speedFactor option. */
var RIPPLE_FADE_IN_DURATION = 450;
/** Fade-out duration for the ripples in milliseconds. This can't be modified by the speedFactor. */
var RIPPLE_FADE_OUT_DURATION = 400;
/**
 * Helper service that performs DOM manipulations. Not intended to be used outside this module.
 * The constructor takes a reference to the ripple directive's host element and a map of DOM
 * event handlers to be installed on the element that triggers ripple animations.
 * This will eventually become a custom renderer once Angular support exists.
 * @docs-private
 */
var RippleRenderer = (function () {
    function RippleRenderer(elementRef, _ngZone, _ruler, platform) {
        this._ngZone = _ngZone;
        this._ruler = _ruler;
        /** Whether the mouse is currently down or not. */
        this._isMousedown = false;
        /** Events to be registered on the trigger element. */
        this._triggerEvents = new Map();
        /** Set of currently active ripple references. */
        this._activeRipples = new Set();
        /** Ripple config for all ripples created by events. */
        this.rippleConfig = {};
        /** Whether mouse ripples should be created or not. */
        this.rippleDisabled = false;
        // Only do anything if we're on the browser.
        if (platform.isBrowser) {
            this._containerElement = elementRef.nativeElement;
            // Specify events which need to be registered on the trigger.
            this._triggerEvents.set('mousedown', this.onMousedown.bind(this));
            this._triggerEvents.set('mouseup', this.onMouseup.bind(this));
            this._triggerEvents.set('mouseleave', this.onMouseLeave.bind(this));
            // By default use the host element as trigger element.
            this.setTriggerElement(this._containerElement);
        }
    }
    /** Fades in a ripple at the given coordinates. */
    RippleRenderer.prototype.fadeInRipple = function (pageX, pageY, config) {
        var _this = this;
        if (config === void 0) { config = {}; }
        var containerRect = this._containerElement.getBoundingClientRect();
        if (config.centered) {
            pageX = containerRect.left + containerRect.width / 2;
            pageY = containerRect.top + containerRect.height / 2;
        }
        else {
            // Subtract scroll values from the coordinates because calculations below
            // are always relative to the viewport rectangle.
            var scrollPosition = this._ruler.getViewportScrollPosition();
            pageX -= scrollPosition.left;
            pageY -= scrollPosition.top;
        }
        var radius = config.radius || distanceToFurthestCorner(pageX, pageY, containerRect);
        var duration = RIPPLE_FADE_IN_DURATION * (1 / (config.speedFactor || 1));
        var offsetX = pageX - containerRect.left;
        var offsetY = pageY - containerRect.top;
        var ripple = document.createElement('div');
        ripple.classList.add('mat-ripple-element');
        ripple.style.left = offsetX - radius + "px";
        ripple.style.top = offsetY - radius + "px";
        ripple.style.height = radius * 2 + "px";
        ripple.style.width = radius * 2 + "px";
        // If the color is not set, the default CSS color will be used.
        ripple.style.backgroundColor = config.color;
        ripple.style.transitionDuration = duration + "ms";
        this._containerElement.appendChild(ripple);
        // By default the browser does not recalculate the styles of dynamically created
        // ripple elements. This is critical because then the `scale` would not animate properly.
        enforceStyleRecalculation(ripple);
        ripple.style.transform = 'scale(1)';
        // Exposed reference to the ripple that will be returned.
        var rippleRef = new __WEBPACK_IMPORTED_MODULE_0__ripple_ref__["a" /* RippleRef */](this, ripple, config);
        rippleRef.state = __WEBPACK_IMPORTED_MODULE_0__ripple_ref__["b" /* RippleState */].FADING_IN;
        // Add the ripple reference to the list of all active ripples.
        this._activeRipples.add(rippleRef);
        // Wait for the ripple element to be completely faded in.
        // Once it's faded in, the ripple can be hidden immediately if the mouse is released.
        this.runTimeoutOutsideZone(function () {
            rippleRef.state = __WEBPACK_IMPORTED_MODULE_0__ripple_ref__["b" /* RippleState */].VISIBLE;
            if (!config.persistent && !_this._isMousedown) {
                rippleRef.fadeOut();
            }
        }, duration);
        return rippleRef;
    };
    /** Fades out a ripple reference. */
    RippleRenderer.prototype.fadeOutRipple = function (rippleRef) {
        // For ripples that are not active anymore, don't re-un the fade-out animation.
        if (!this._activeRipples.delete(rippleRef)) {
            return;
        }
        var rippleEl = rippleRef.element;
        rippleEl.style.transitionDuration = RIPPLE_FADE_OUT_DURATION + "ms";
        rippleEl.style.opacity = '0';
        rippleRef.state = __WEBPACK_IMPORTED_MODULE_0__ripple_ref__["b" /* RippleState */].FADING_OUT;
        // Once the ripple faded out, the ripple can be safely removed from the DOM.
        this.runTimeoutOutsideZone(function () {
            rippleRef.state = __WEBPACK_IMPORTED_MODULE_0__ripple_ref__["b" /* RippleState */].HIDDEN;
            rippleEl.parentNode.removeChild(rippleEl);
        }, RIPPLE_FADE_OUT_DURATION);
    };
    /** Fades out all currently active ripples. */
    RippleRenderer.prototype.fadeOutAll = function () {
        this._activeRipples.forEach(function (ripple) { return ripple.fadeOut(); });
    };
    /** Sets the trigger element and registers the mouse events. */
    RippleRenderer.prototype.setTriggerElement = function (element) {
        var _this = this;
        // Remove all previously register event listeners from the trigger element.
        if (this._triggerElement) {
            this._triggerEvents.forEach(function (fn, type) { return _this._triggerElement.removeEventListener(type, fn); });
        }
        if (element) {
            // If the element is not null, register all event listeners on the trigger element.
            this._ngZone.runOutsideAngular(function () {
                _this._triggerEvents.forEach(function (fn, type) { return element.addEventListener(type, fn); });
            });
        }
        this._triggerElement = element;
    };
    /** Listener being called on mousedown event. */
    RippleRenderer.prototype.onMousedown = function (event) {
        if (!this.rippleDisabled) {
            this._isMousedown = true;
            this.fadeInRipple(event.pageX, event.pageY, this.rippleConfig);
        }
    };
    /** Listener being called on mouseup event. */
    RippleRenderer.prototype.onMouseup = function () {
        this._isMousedown = false;
        // Fade-out all ripples that are completely visible and not persistent.
        this._activeRipples.forEach(function (ripple) {
            if (!ripple.config.persistent && ripple.state === __WEBPACK_IMPORTED_MODULE_0__ripple_ref__["b" /* RippleState */].VISIBLE) {
                ripple.fadeOut();
            }
        });
    };
    /** Listener being called on mouseleave event. */
    RippleRenderer.prototype.onMouseLeave = function () {
        if (this._isMousedown) {
            this.onMouseup();
        }
    };
    /** Runs a timeout outside of the Angular zone to avoid triggering the change detection. */
    RippleRenderer.prototype.runTimeoutOutsideZone = function (fn, delay) {
        if (delay === void 0) { delay = 0; }
        this._ngZone.runOutsideAngular(function () { return setTimeout(fn, delay); });
    };
    return RippleRenderer;
}());

/** Enforces a style recalculation of a DOM element by computing its styles. */
// TODO(devversion): Move into global utility function.
function enforceStyleRecalculation(element) {
    // Enforce a style recalculation by calling `getComputedStyle` and accessing any property.
    // Calling `getPropertyValue` is important to let optimizers know that this is not a noop.
    // See: https://gist.github.com/paulirish/5d52fb081b3570c81e3a
    window.getComputedStyle(element).getPropertyValue('opacity');
}
/**
 * Returns the distance from the point (x, y) to the furthest corner of a rectangle.
 */
function distanceToFurthestCorner(x, y, rect) {
    var distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
    var distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
    return Math.sqrt(distX * distX + distY * distY);
}
//# sourceMappingURL=ripple-renderer.js.map

/***/ }),

/***/ "./node_modules/md2/core/ripple/ripple.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MD_RIPPLE_GLOBAL_OPTIONS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdRipple; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ripple_renderer__ = __webpack_require__("./node_modules/md2/core/ripple/ripple-renderer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__overlay_position_viewport_ruler__ = __webpack_require__("./node_modules/md2/core/overlay/position/viewport-ruler.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__platform_platform__ = __webpack_require__("./node_modules/md2/core/platform/platform.js");
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




/** Injection token that can be used to specify the global ripple options. */
var MD_RIPPLE_GLOBAL_OPTIONS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('md-ripple-global-options');
var MdRipple = (function () {
    function MdRipple(elementRef, ngZone, ruler, platform, globalOptions) {
        /**
         * If set, the radius in pixels of foreground ripples when fully expanded. If unset, the radius
         * will be the distance from the center of the ripple to the furthest corner of the host element's
         * bounding rectangle.
         */
        this.radius = 0;
        /**
         * If set, the normal duration of ripple animations is divided by this value. For example,
         * setting it to 0.5 will cause the animations to take twice as long.
         * A changed speedFactor will not modify the fade-out duration of the ripples.
         */
        this.speedFactor = 1;
        this._rippleRenderer = new __WEBPACK_IMPORTED_MODULE_1__ripple_renderer__["a" /* RippleRenderer */](elementRef, ngZone, ruler, platform);
        this._globalOptions = globalOptions ? globalOptions : {};
        this._updateRippleRenderer();
    }
    MdRipple.prototype.ngOnChanges = function (changes) {
        if (changes['trigger'] && this.trigger) {
            this._rippleRenderer.setTriggerElement(this.trigger);
        }
        this._updateRippleRenderer();
    };
    MdRipple.prototype.ngOnDestroy = function () {
        // Set the trigger element to null to cleanup all listeners.
        this._rippleRenderer.setTriggerElement(null);
    };
    /** Launches a manual ripple at the specified position. */
    MdRipple.prototype.launch = function (pageX, pageY, config) {
        if (config === void 0) { config = this.rippleConfig; }
        return this._rippleRenderer.fadeInRipple(pageX, pageY, config);
    };
    /** Fades out all currently showing ripple elements. */
    MdRipple.prototype.fadeOutAll = function () {
        this._rippleRenderer.fadeOutAll();
    };
    Object.defineProperty(MdRipple.prototype, "rippleConfig", {
        /** Ripple configuration from the directive's input values. */
        get: function () {
            return {
                centered: this.centered,
                speedFactor: this.speedFactor * (this._globalOptions.baseSpeedFactor || 1),
                radius: this.radius,
                color: this.color
            };
        },
        enumerable: true,
        configurable: true
    });
    /** Updates the ripple renderer with the latest ripple configuration. */
    MdRipple.prototype._updateRippleRenderer = function () {
        this._rippleRenderer.rippleDisabled = this._globalOptions.disabled || this.disabled;
        this._rippleRenderer.rippleConfig = this.rippleConfig;
    };
    return MdRipple;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mdRippleTrigger'),
    __metadata("design:type", HTMLElement)
], MdRipple.prototype, "trigger", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mdRippleCentered'),
    __metadata("design:type", Boolean)
], MdRipple.prototype, "centered", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mdRippleDisabled'),
    __metadata("design:type", Boolean)
], MdRipple.prototype, "disabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mdRippleRadius'),
    __metadata("design:type", Number)
], MdRipple.prototype, "radius", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mdRippleSpeedFactor'),
    __metadata("design:type", Number)
], MdRipple.prototype, "speedFactor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mdRippleColor'),
    __metadata("design:type", String)
], MdRipple.prototype, "color", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mdRippleUnbounded'),
    __metadata("design:type", Boolean)
], MdRipple.prototype, "unbounded", void 0);
MdRipple = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[md-ripple], [mat-ripple], [mdRipple], [matRipple]',
        exportAs: 'mdRipple',
        host: {
            'class': 'mat-ripple',
            '[class.mat-ripple-unbounded]': 'unbounded'
        }
    }),
    __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(MD_RIPPLE_GLOBAL_OPTIONS)),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
        __WEBPACK_IMPORTED_MODULE_2__overlay_position_viewport_ruler__["b" /* ViewportRuler */],
        __WEBPACK_IMPORTED_MODULE_3__platform_platform__["a" /* Platform */], Object])
], MdRipple);

//# sourceMappingURL=ripple.js.map

/***/ }),

/***/ "./node_modules/md2/core/rtl/dir.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RtlModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Directive to listen for changes of direction of part of the DOM.
 *
 * Applications should use this directive instead of the native attribute so that Material
 * components can listen on changes of direction.
 */
var Dir = (function () {
    function Dir() {
        /** Layout direction of the element. */
        this._dir = 'ltr';
        /** Event emitted when the direction changes. */
        this.dirChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(Dir.prototype, "dir", {
        /** @docs-private */
        get: function () {
            return this._dir;
        },
        set: function (v) {
            var old = this._dir;
            this._dir = v;
            if (old != this._dir) {
                this.dirChange.emit();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dir.prototype, "value", {
        /** Current layout direction of the element. */
        get: function () { return this.dir; },
        set: function (v) { this.dir = v; },
        enumerable: true,
        configurable: true
    });
    return Dir;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('dir'),
    __metadata("design:type", String)
], Dir.prototype, "_dir", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], Dir.prototype, "dirChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('attr.dir'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Dir.prototype, "dir", null);
Dir = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[dir]',
        // TODO(hansl): maybe `$implicit` isn't the best option here, but for now that's the best we got.
        exportAs: '$implicit'
    })
], Dir);

var RtlModule = (function () {
    function RtlModule() {
    }
    return RtlModule;
}());
RtlModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        exports: [Dir],
        declarations: [Dir]
    })
], RtlModule);

//# sourceMappingURL=dir.js.map

/***/ }),

/***/ "./node_modules/md2/core/selection/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdSelectionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pseudo_checkbox_pseudo_checkbox__ = __webpack_require__("./node_modules/md2/core/selection/pseudo-checkbox/pseudo-checkbox.js");
/* unused harmony namespace reexport */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MdSelectionModule = (function () {
    function MdSelectionModule() {
    }
    return MdSelectionModule;
}());
MdSelectionModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        exports: [__WEBPACK_IMPORTED_MODULE_1__pseudo_checkbox_pseudo_checkbox__["a" /* MdPseudoCheckbox */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__pseudo_checkbox_pseudo_checkbox__["a" /* MdPseudoCheckbox */]]
    })
], MdSelectionModule);


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/md2/core/selection/pseudo-checkbox/pseudo-checkbox.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MdPseudoCheckboxBase */
/* unused harmony export _MdPseudoCheckboxBase */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdPseudoCheckbox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_behaviors_color__ = __webpack_require__("./node_modules/md2/core/common-behaviors/color.js");
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Boilerplate for applying mixins to MdChip.
var MdPseudoCheckboxBase = (function () {
    function MdPseudoCheckboxBase(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
    }
    return MdPseudoCheckboxBase;
}());

var _MdPseudoCheckboxBase = Object(__WEBPACK_IMPORTED_MODULE_1__common_behaviors_color__["a" /* mixinColor */])(MdPseudoCheckboxBase, 'accent');
/**
 * Component that shows a simplified checkbox without including any kind of "real" checkbox.
 * Meant to be used when the checkbox is purely decorative and a large number of them will be
 * included, such as for the options in a multi-select. Uses no SVGs or complex animations.
 *
 * Note that this component will be completely invisible to screen-reader users. This is *not*
 * interchangeable with <md-checkbox> and should *not* be used if the user would directly interact
 * with the checkbox. The pseudo-checkbox should only be used as an implementation detail of
 * more complex components that appropriately handle selected / checked state.
 * @docs-private
 */
var MdPseudoCheckbox = (function (_super) {
    __extends(MdPseudoCheckbox, _super);
    function MdPseudoCheckbox(elementRef, renderer) {
        var _this = _super.call(this, renderer, elementRef) || this;
        /** Display state of the checkbox. */
        _this.state = 'unchecked';
        /** Whether the checkbox is disabled. */
        _this.disabled = false;
        return _this;
    }
    return MdPseudoCheckbox;
}(_MdPseudoCheckboxBase));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MdPseudoCheckbox.prototype, "state", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], MdPseudoCheckbox.prototype, "disabled", void 0);
MdPseudoCheckbox = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        selector: 'md-pseudo-checkbox, mat-pseudo-checkbox',
        styles: [".mat-pseudo-checkbox{width:20px;height:20px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;transition:border-color 90ms cubic-bezier(0,0,.2,.1),background-color 90ms cubic-bezier(0,0,.2,.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:'';border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0,0,.2,.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:9px;left:2px;width:16px;opacity:1}.mat-pseudo-checkbox-checked::after{top:5px;left:3px;width:12px;height:5px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1} /*# sourceMappingURL=pseudo-checkbox.css.map */ "],
        inputs: ['color'],
        template: '',
        host: {
            'class': 'mat-pseudo-checkbox',
            '[class.mat-pseudo-checkbox-indeterminate]': 'state === "indeterminate"',
            '[class.mat-pseudo-checkbox-checked]': 'state === "checked"',
            '[class.mat-pseudo-checkbox-disabled]': 'disabled',
        },
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
], MdPseudoCheckbox);

//# sourceMappingURL=pseudo-checkbox.js.map

/***/ }),

/***/ "./node_modules/md2/core/selection/selection.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionModel; });
/* unused harmony export SelectionChange */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");

/**
 * Class to be used to power selecting one or more options from a list.
 * @docs-private
 */
var SelectionModel = (function () {
    function SelectionModel(_isMulti, initiallySelectedValues, _emitChanges) {
        if (_isMulti === void 0) { _isMulti = false; }
        if (_emitChanges === void 0) { _emitChanges = true; }
        var _this = this;
        this._isMulti = _isMulti;
        this._emitChanges = _emitChanges;
        /** Currently-selected values. */
        this._selection = new Set();
        /** Keeps track of the deselected options that haven't been emitted by the change event. */
        this._deselectedToEmit = [];
        /** Keeps track of the selected option that haven't been emitted by the change event. */
        this._selectedToEmit = [];
        /** Event emitted when the value has changed. */
        this.onChange = this._emitChanges ? new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["b" /* Subject */]() : null;
        if (initiallySelectedValues) {
            if (_isMulti) {
                initiallySelectedValues.forEach(function (value) { return _this._markSelected(value); });
            }
            else {
                this._markSelected(initiallySelectedValues[0]);
            }
            // Clear the array in order to avoid firing the change event for preselected values.
            this._selectedToEmit.length = 0;
        }
    }
    Object.defineProperty(SelectionModel.prototype, "selected", {
        /** Selected value(s). */
        get: function () {
            if (!this._selected) {
                this._selected = Array.from(this._selection.values());
            }
            return this._selected;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Selects a value or an array of values.
     */
    SelectionModel.prototype.select = function (value) {
        this._markSelected(value);
        this._emitChangeEvent();
    };
    /**
     * Deselects a value or an array of values.
     */
    SelectionModel.prototype.deselect = function (value) {
        this._unmarkSelected(value);
        this._emitChangeEvent();
    };
    /**
     * Toggles a value between selected and deselected.
     */
    SelectionModel.prototype.toggle = function (value) {
        this.isSelected(value) ? this.deselect(value) : this.select(value);
    };
    /**
     * Clears all of the selected values.
     */
    SelectionModel.prototype.clear = function () {
        this._unmarkAll();
        this._emitChangeEvent();
    };
    /**
     * Determines whether a value is selected.
     */
    SelectionModel.prototype.isSelected = function (value) {
        return this._selection.has(value);
    };
    /**
     * Determines whether the model does not have a value.
     */
    SelectionModel.prototype.isEmpty = function () {
        return this._selection.size === 0;
    };
    /**
     * Determines whether the model has a value.
     */
    SelectionModel.prototype.hasValue = function () {
        return !this.isEmpty();
    };
    /**
     * Sorts the selected values based on a predicate function.
     */
    SelectionModel.prototype.sort = function (predicate) {
        if (this._isMulti && this.selected) {
            this._selected.sort(predicate);
        }
    };
    /** Emits a change event and clears the records of selected and deselected values. */
    SelectionModel.prototype._emitChangeEvent = function () {
        if (this._selectedToEmit.length || this._deselectedToEmit.length) {
            var eventData = new SelectionChange(this._selectedToEmit, this._deselectedToEmit);
            this.onChange.next(eventData);
            this._deselectedToEmit = [];
            this._selectedToEmit = [];
        }
        this._selected = null;
    };
    /** Selects a value. */
    SelectionModel.prototype._markSelected = function (value) {
        if (!this.isSelected(value)) {
            if (!this._isMulti) {
                this._unmarkAll();
            }
            this._selection.add(value);
            if (this._emitChanges) {
                this._selectedToEmit.push(value);
            }
        }
    };
    /** Deselects a value. */
    SelectionModel.prototype._unmarkSelected = function (value) {
        if (this.isSelected(value)) {
            this._selection.delete(value);
            if (this._emitChanges) {
                this._deselectedToEmit.push(value);
            }
        }
    };
    /** Clears out the selected values. */
    SelectionModel.prototype._unmarkAll = function () {
        var _this = this;
        if (!this.isEmpty()) {
            this._selection.forEach(function (value) { return _this._unmarkSelected(value); });
        }
    };
    return SelectionModel;
}());

/**
 * Describes an event emitted when the value of a MdSelectionModel has changed.
 * @docs-private
 */
var SelectionChange = (function () {
    function SelectionChange(added, removed) {
        this.added = added;
        this.removed = removed;
    }
    return SelectionChange;
}());

//# sourceMappingURL=selection.js.map

/***/ }),

/***/ "./node_modules/md2/core/style/apply-transform.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export applyCssTransform */
/**
 * Applies a CSS transform to an element, including browser-prefixed properties.
 * @param element
 * @param transformValue
 */
/**
 * Applies a CSS transform to an element, including browser-prefixed properties.
 * @param element
 * @param transformValue
 */ function applyCssTransform(element, transformValue) {
    // It's important to trim the result, because the browser will ignore the set operation
    // if the string contains only whitespace.
    var value = transformValue.trim();
    element.style.transform = value;
    element.style.webkitTransform = value;
}
//# sourceMappingURL=apply-transform.js.map

/***/ }),

/***/ "./node_modules/md2/core/style/focus-origin-monitor.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TOUCH_BUFFER_MS */
/* unused harmony export FocusOriginMonitor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CdkMonitorFocus; });
/* unused harmony export FOCUS_ORIGIN_MONITOR_PROVIDER_FACTORY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FOCUS_ORIGIN_MONITOR_PROVIDER; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__platform_platform__ = __webpack_require__("./node_modules/md2/core/platform/platform.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// This is the value used by AngularJS Material. Through trial and error (on iPhone 6S) they found
// that a value of around 650ms seems appropriate.
var TOUCH_BUFFER_MS = 650;
/** Monitors mouse and keyboard events to determine the cause of focus events. */
var FocusOriginMonitor = (function () {
    function FocusOriginMonitor(_ngZone, _platform) {
        var _this = this;
        this._ngZone = _ngZone;
        this._platform = _platform;
        /** The focus origin that the next focus event is a result of. */
        this._origin = null;
        /** Whether the window has just been focused. */
        this._windowFocused = false;
        /** Weak map of elements being monitored to their info. */
        this._elementInfo = new WeakMap();
        this._ngZone.runOutsideAngular(function () { return _this._registerDocumentEvents(); });
    }
    /**
     * Monitors focus on an element and applies appropriate CSS classes.
     * @param element The element to monitor
     * @param renderer The renderer to use to apply CSS classes to the element.
     * @param checkChildren Whether to count the element as focused when its children are focused.
     * @returns An observable that emits when the focus state of the element changes.
     *     When the element is blurred, null will be emitted.
     */
    FocusOriginMonitor.prototype.monitor = function (element, renderer, checkChildren) {
        var _this = this;
        // Do nothing if we're not on the browser platform.
        if (!this._platform.isBrowser) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of();
        }
        // Check if we're already monitoring this element.
        if (this._elementInfo.has(element)) {
            var info_1 = this._elementInfo.get(element);
            info_1.checkChildren = checkChildren;
            return info_1.subject.asObservable();
        }
        // Create monitored element info.
        var info = {
            unlisten: null,
            checkChildren: checkChildren,
            renderer: renderer,
            subject: new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]()
        };
        this._elementInfo.set(element, info);
        // Start listening. We need to listen in capture phase since focus events don't bubble.
        var focusListener = function (event) { return _this._onFocus(event, element); };
        var blurListener = function (event) { return _this._onBlur(event, element); };
        this._ngZone.runOutsideAngular(function () {
            element.addEventListener('focus', focusListener, true);
            element.addEventListener('blur', blurListener, true);
        });
        // Create an unlisten function for later.
        info.unlisten = function () {
            element.removeEventListener('focus', focusListener, true);
            element.removeEventListener('blur', blurListener, true);
        };
        return info.subject.asObservable();
    };
    /**
     * Stops monitoring an element and removes all focus classes.
     * @param element The element to stop monitoring.
     */
    FocusOriginMonitor.prototype.stopMonitoring = function (element) {
        var elementInfo = this._elementInfo.get(element);
        if (elementInfo) {
            elementInfo.unlisten();
            elementInfo.subject.complete();
            this._setClasses(element, null);
            this._elementInfo.delete(element);
        }
    };
    /**
     * Focuses the element via the specified focus origin.
     * @param element The element to focus.
     * @param origin The focus origin.
     */
    FocusOriginMonitor.prototype.focusVia = function (element, origin) {
        this._setOriginForCurrentEventQueue(origin);
        element.focus();
    };
    /** Register necessary event listeners on the document and window. */
    FocusOriginMonitor.prototype._registerDocumentEvents = function () {
        var _this = this;
        // Do nothing if we're not on the browser platform.
        if (!this._platform.isBrowser) {
            return;
        }
        // Note: we listen to events in the capture phase so we can detect them even if the user stops
        // propagation.
        // On keydown record the origin and clear any touch event that may be in progress.
        document.addEventListener('keydown', function () {
            _this._lastTouchTarget = null;
            _this._setOriginForCurrentEventQueue('keyboard');
        }, true);
        // On mousedown record the origin only if there is not touch target, since a mousedown can
        // happen as a result of a touch event.
        document.addEventListener('mousedown', function () {
            if (!_this._lastTouchTarget) {
                _this._setOriginForCurrentEventQueue('mouse');
            }
        }, true);
        // When the touchstart event fires the focus event is not yet in the event queue. This means
        // we can't rely on the trick used above (setting timeout of 0ms). Instead we wait 650ms to
        // see if a focus happens.
        document.addEventListener('touchstart', function (event) {
            if (_this._touchTimeout != null) {
                clearTimeout(_this._touchTimeout);
            }
            _this._lastTouchTarget = event.target;
            _this._touchTimeout = setTimeout(function () { return _this._lastTouchTarget = null; }, TOUCH_BUFFER_MS);
        }, true);
        // Make a note of when the window regains focus, so we can restore the origin info for the
        // focused element.
        window.addEventListener('focus', function () {
            _this._windowFocused = true;
            setTimeout(function () { return _this._windowFocused = false; }, 0);
        });
    };
    /**
     * Sets the focus classes on the element based on the given focus origin.
     * @param element The element to update the classes on.
     * @param origin The focus origin.
     */
    FocusOriginMonitor.prototype._setClasses = function (element, origin) {
        var renderer = this._elementInfo.get(element).renderer;
        var toggleClass = function (className, shouldSet) {
            shouldSet ? renderer.addClass(element, className) : renderer.removeClass(element, className);
        };
        toggleClass('cdk-focused', !!origin);
        toggleClass('cdk-touch-focused', origin === 'touch');
        toggleClass('cdk-keyboard-focused', origin === 'keyboard');
        toggleClass('cdk-mouse-focused', origin === 'mouse');
        toggleClass('cdk-program-focused', origin === 'program');
    };
    /**
     * Sets the origin and schedules an async function to clear it at the end of the event queue.
     * @param origin The origin to set.
     */
    FocusOriginMonitor.prototype._setOriginForCurrentEventQueue = function (origin) {
        var _this = this;
        this._origin = origin;
        setTimeout(function () { return _this._origin = null; }, 0);
    };
    /**
     * Checks whether the given focus event was caused by a touchstart event.
     * @param event The focus event to check.
     * @returns Whether the event was caused by a touch.
     */
    FocusOriginMonitor.prototype._wasCausedByTouch = function (event) {
        // Note(mmalerba): This implementation is not quite perfect, there is a small edge case.
        // Consider the following dom structure:
        //
        // <div #parent tabindex="0" cdkFocusClasses>
        //   <div #child (click)="#parent.focus()"></div>
        // </div>
        //
        // If the user touches the #child element and the #parent is programmatically focused as a
        // result, this code will still consider it to have been caused by the touch event and will
        // apply the cdk-touch-focused class rather than the cdk-program-focused class. This is a
        // relatively small edge-case that can be worked around by using
        // focusVia(parentEl, renderer,  'program') to focus the parent element.
        //
        // If we decide that we absolutely must handle this case correctly, we can do so by listening
        // for the first focus event after the touchstart, and then the first blur event after that
        // focus event. When that blur event fires we know that whatever follows is not a result of the
        // touchstart.
        var focusTarget = event.target;
        return this._lastTouchTarget instanceof Node && focusTarget instanceof Node &&
            (focusTarget === this._lastTouchTarget || focusTarget.contains(this._lastTouchTarget));
    };
    /**
     * Handles focus events on a registered element.
     * @param event The focus event.
     * @param element The monitored element.
     */
    FocusOriginMonitor.prototype._onFocus = function (event, element) {
        // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
        // focus event affecting the monitored element. If we want to use the origin of the first event
        // instead we should check for the cdk-focused class here and return if the element already has
        // it. (This only matters for elements that have includesChildren = true).
        // If we are not counting child-element-focus as focused, make sure that the event target is the
        // monitored element itself.
        if (!this._elementInfo.get(element).checkChildren && element !== event.target) {
            return;
        }
        // If we couldn't detect a cause for the focus event, it's due to one of three reasons:
        // 1) The window has just regained focus, in which case we want to restore the focused state of
        //    the element from before the window blurred.
        // 2) It was caused by a touch event, in which case we mark the origin as 'touch'.
        // 3) The element was programmatically focused, in which case we should mark the origin as
        //    'program'.
        if (!this._origin) {
            if (this._windowFocused && this._lastFocusOrigin) {
                this._origin = this._lastFocusOrigin;
            }
            else if (this._wasCausedByTouch(event)) {
                this._origin = 'touch';
            }
            else {
                this._origin = 'program';
            }
        }
        this._setClasses(element, this._origin);
        this._elementInfo.get(element).subject.next(this._origin);
        this._lastFocusOrigin = this._origin;
        this._origin = null;
    };
    /**
     * Handles blur events on a registered element.
     * @param event The blur event.
     * @param element The monitored element.
     */
    FocusOriginMonitor.prototype._onBlur = function (event, element) {
        // If we are counting child-element-focus as focused, make sure that we aren't just blurring in
        // order to focus another child of the monitored element.
        if (this._elementInfo.get(element).checkChildren && event.relatedTarget instanceof Node &&
            element.contains(event.relatedTarget)) {
            return;
        }
        this._setClasses(element, null);
        this._elementInfo.get(element).subject.next(null);
    };
    return FocusOriginMonitor;
}());
FocusOriginMonitor = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_3__platform_platform__["a" /* Platform */]])
], FocusOriginMonitor);

/**
 * Directive that determines how a particular element was focused (via keyboard, mouse, touch, or
 * programmatically) and adds corresponding classes to the element.
 *
 * There are two variants of this directive:
 * 1) cdkMonitorElementFocus: does not consider an element to be focused if one of its children is
 *    focused.
 * 2) cdkMonitorSubtreeFocus: considers an element focused if it or any of its children are focused.
 */
var CdkMonitorFocus = (function () {
    function CdkMonitorFocus(_elementRef, _focusOriginMonitor, renderer) {
        var _this = this;
        this._elementRef = _elementRef;
        this._focusOriginMonitor = _focusOriginMonitor;
        this.cdkFocusChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._focusOriginMonitor.monitor(this._elementRef.nativeElement, renderer, this._elementRef.nativeElement.hasAttribute('cdkMonitorSubtreeFocus'))
            .subscribe(function (origin) { return _this.cdkFocusChange.emit(origin); });
    }
    CdkMonitorFocus.prototype.ngOnDestroy = function () {
        this._focusOriginMonitor.stopMonitoring(this._elementRef.nativeElement);
    };
    return CdkMonitorFocus;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CdkMonitorFocus.prototype, "cdkFocusChange", void 0);
CdkMonitorFocus = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]',
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], FocusOriginMonitor,
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
], CdkMonitorFocus);

function FOCUS_ORIGIN_MONITOR_PROVIDER_FACTORY(parentDispatcher, ngZone, platform) {
    return parentDispatcher || new FocusOriginMonitor(ngZone, platform);
}
var FOCUS_ORIGIN_MONITOR_PROVIDER = {
    // If there is already a FocusOriginMonitor available, use that. Otherwise, provide a new one.
    provide: FocusOriginMonitor,
    deps: [[new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"](), new __WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"](), FocusOriginMonitor], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_3__platform_platform__["a" /* Platform */]],
    useFactory: FOCUS_ORIGIN_MONITOR_PROVIDER_FACTORY
};
//# sourceMappingURL=focus-origin-monitor.js.map

/***/ }),

/***/ "./node_modules/md2/core/style/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StyleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__focus_origin_monitor__ = __webpack_require__("./node_modules/md2/core/style/focus-origin-monitor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__platform_index__ = __webpack_require__("./node_modules/md2/core/platform/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apply_transform__ = __webpack_require__("./node_modules/md2/core/style/apply-transform.js");
/* unused harmony namespace reexport */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StyleModule = (function () {
    function StyleModule() {
    }
    return StyleModule;
}());
StyleModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__platform_index__["b" /* PlatformModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__focus_origin_monitor__["a" /* CdkMonitorFocus */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__focus_origin_monitor__["a" /* CdkMonitorFocus */]],
        providers: [__WEBPACK_IMPORTED_MODULE_1__focus_origin_monitor__["b" /* FOCUS_ORIGIN_MONITOR_PROVIDER */]],
    })
], StyleModule);



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/md2/core/util/object-extend.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = extendObject;
/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
 * similar to Object.assign.
 *
 * @param dest The object which will have properties copied to it.
 * @param sources The source objects from which properties will be copied.
 */
/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
 * similar to Object.assign.
 *
 * @param dest The object which will have properties copied to it.
 * @param sources The source objects from which properties will be copied.
 */ function extendObject(dest) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (dest == null) {
        throw TypeError('Cannot convert undefined or null to object');
    }
    for (var _a = 0, sources_1 = sources; _a < sources_1.length; _a++) {
        var source = sources_1[_a];
        if (source != null) {
            for (var key in source) {
                if (source.hasOwnProperty(key)) {
                    dest[key] = source[key];
                }
            }
        }
    }
    return dest;
}
//# sourceMappingURL=object-extend.js.map

/***/ }),

/***/ "./node_modules/md2/data-table/data-table.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Md2PaginationChange */
/* unused harmony export Md2DataTable */
/* unused harmony export Md2DataTableSortBy */
/* unused harmony export Md2Pagination */
/* unused harmony export MD2_DATA_TABLE_DIRECTIVES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Md2DataTableModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_index__ = __webpack_require__("./node_modules/md2/select/index.js");
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




var Md2PaginationChange = (function () {
    function Md2PaginationChange() {
    }
    return Md2PaginationChange;
}());

var Md2DataTable = (function () {
    function Md2DataTable(differs) {
        this.differs = differs;
        this.isDataChanged = false;
        this._data = [];
        this._activePage = 1;
        this._rowsPerPage = 1000;
        this._sortBy = '';
        this._sortOrder = 'asc';
        this.activePageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.rowsPerPageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.sortByChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.sortOrderChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onSortChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onPageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.diff = differs.find([]).create(null);
    }
    Object.defineProperty(Md2DataTable.prototype, "md2Data", {
        get: function () { return this._data; },
        set: function (value) {
            if (this._data !== value) {
                this._data = value || [];
                this.recalculatePage();
                this.isDataChanged = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2DataTable.prototype, "activePage", {
        get: function () { return this._activePage; },
        set: function (value) {
            if (this._activePage !== value) {
                this._activePage = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2DataTable.prototype, "rowsPerPage", {
        get: function () { return this._rowsPerPage; },
        set: function (value) {
            if (this._rowsPerPage !== value) {
                this._rowsPerPage = value;
                this.setPage(this.activePage, value);
                this.isDataChanged = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2DataTable.prototype, "sortBy", {
        get: function () { return this._sortBy; },
        set: function (value) {
            if (this._sortBy !== value) {
                this._sortBy = value;
                if (value) {
                    this.onSortChange.next({ sortBy: this.sortBy, sortOrder: this.sortOrder });
                }
                this.isDataChanged = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2DataTable.prototype, "sortOrder", {
        get: function () { return this._sortOrder; },
        set: function (value) {
            if (!(value === 'asc' || value === 'desc')) {
                console.warn('sortOrder value must be one of ["asc", "desc"], but is:', value);
                value = 'asc';
            }
            if (this._sortOrder !== value) {
                this._sortOrder = value;
                this.isDataChanged = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Md2DataTable.prototype.ngDoCheck = function () {
        var changes = this.diff.diff(this.md2Data);
        if (changes) {
            this.recalculatePage();
            this.isDataChanged = true;
        }
        if (this.isDataChanged) {
            this.fillData();
            this.diff.diff(this.md2Data);
            this.isDataChanged = false;
        }
    };
    Md2DataTable.prototype.getSort = function () {
        return { sortBy: this.sortBy, sortOrder: this.sortOrder };
    };
    Md2DataTable.prototype.setSort = function (sortBy, sortOrder) {
        if (this.sortBy !== sortBy || this.sortOrder !== sortOrder) {
            this.sortBy = sortBy;
            this.sortOrder = sortOrder;
            this.isDataChanged = true;
            this.onSortChange.next({ sortBy: sortBy, sortOrder: sortOrder });
            this.sortByChange.emit(this.sortBy);
            this.sortOrderChange.emit(this.sortOrder);
        }
    };
    Md2DataTable.prototype.getPage = function () {
        return {
            activePage: this.activePage,
            rowsPerPage: this.rowsPerPage,
            dataLength: this.md2Data.length
        };
    };
    Md2DataTable.prototype.setPage = function (activePage, rowsPerPage) {
        if (this.rowsPerPage !== rowsPerPage || this.activePage !== activePage) {
            this.activePage = this.activePage !== activePage ?
                activePage : this.calculateNewActivePage(this.rowsPerPage, rowsPerPage);
            if (this.rowsPerPage !== rowsPerPage) {
                this._rowsPerPage = rowsPerPage;
                this.rowsPerPageChange.emit(this.rowsPerPage);
            }
            this.isDataChanged = true;
            this.onPageChange.emit({
                activePage: this.activePage,
                rowsPerPage: this.rowsPerPage,
                dataLength: this.md2Data ? this.md2Data.length : 0
            });
            this.activePageChange.emit(this.activePage);
        }
    };
    Md2DataTable.prototype.calculateNewActivePage = function (previousRowsPerPage, currentRowsPerPage) {
        var firstRowOnPage = (this.activePage - 1) * previousRowsPerPage + 1;
        var newActivePage = Math.ceil(firstRowOnPage / currentRowsPerPage);
        return newActivePage;
    };
    Md2DataTable.prototype.recalculatePage = function () {
        var _this = this;
        var lastPage = Math.ceil(this.md2Data.length / this.rowsPerPage);
        if (lastPage < this.activePage) {
            this._activePage = lastPage || 1;
            setTimeout(function () {
                _this.activePageChange.emit(_this.activePage);
            }, 10);
        }
        else { }
        this.onPageChange.emit({
            activePage: this.activePage,
            rowsPerPage: this.rowsPerPage,
            dataLength: this.md2Data.length
        });
    };
    Md2DataTable.prototype.fillData = function () {
        var _this = this;
        var offset = (this.activePage - 1) * this.rowsPerPage;
        var data = this.md2Data;
        var sortInt = this.sortOrder === 'desc' ? -1 : 1;
        if (this.sortBy) {
            data = data.sort(function (a, b) {
                var x = _this.caseInsensitiveIteratee(a);
                var y = _this.caseInsensitiveIteratee(b);
                return ((x > y) ? 1 : (y > x) ? -1 : 0) * sortInt;
            });
        }
        this.data = data.slice(offset, offset + this.rowsPerPage);
    };
    Md2DataTable.prototype.caseInsensitiveIteratee = function (value) {
        if (typeof this.sortBy === 'string' || this.sortBy instanceof String) {
            for (var _i = 0, _a = this.sortBy.split('.'); _i < _a.length; _i++) {
                var sortByProperty = _a[_i];
                value = value[sortByProperty];
            }
        }
        else {
            value = value[this.sortBy + ''];
        }
        if (value && typeof value === 'string' || value instanceof String) {
            return value.toLowerCase();
        }
        return value;
    };
    return Md2DataTable;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Array])
], Md2DataTable.prototype, "md2Data", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Number])
], Md2DataTable.prototype, "activePage", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Number])
], Md2DataTable.prototype, "rowsPerPage", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], Md2DataTable.prototype, "sortBy", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [String])
], Md2DataTable.prototype, "sortOrder", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], Md2DataTable.prototype, "activePageChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], Md2DataTable.prototype, "rowsPerPageChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], Md2DataTable.prototype, "sortByChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], Md2DataTable.prototype, "sortOrderChange", void 0);
Md2DataTable = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'table[md2Data]',
        exportAs: 'md2DataTable'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["IterableDiffers"]])
], Md2DataTable);

var Md2DataTableSortBy = (function () {
    function Md2DataTableSortBy(_md2Table) {
        this._md2Table = _md2Table;
        this._isAsc = false;
        this._isDesc = false;
    }
    Md2DataTableSortBy.prototype.ngOnInit = function () {
        var _this = this;
        this._md2Table.onSortChange.subscribe(function (event) {
            _this._isAsc = (event.sortBy === _this.md2SortBy && event.sortOrder === 'asc');
            _this._isDesc = (event.sortBy === _this.md2SortBy && event.sortOrder === 'desc');
        });
    };
    Md2DataTableSortBy.prototype._sort = function () {
        if (this._isAsc) {
            this._md2Table.setSort(this.md2SortBy, 'desc');
        }
        else {
            this._md2Table.setSort(this.md2SortBy, 'asc');
        }
    };
    return Md2DataTableSortBy;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Md2DataTableSortBy.prototype, "md2SortBy", void 0);
Md2DataTableSortBy = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: '[md2SortBy]',
        template: "<ng-content></ng-content>&nbsp; <svg *ngIf=\"!_isDesc\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path d=\"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z\"/></svg> <svg *ngIf=\"_isDesc\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path d=\"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z\"/></svg>",
        styles: ["$primary: #106cc8 !default; /* * Data Table */ /* * Sort */ [md2SortBy] { line-height: 24px; color: rgba(black, 0.54); white-space: nowrap; cursor: pointer; user-select: none; svg { display: inline-block; vertical-align: middle; fill: currentColor; opacity: 0; } &:hover:not(.md2-sort-active) { svg { color: rgba(black, 0.26); opacity: 1; } } &.md2-sort-active { color: rgba(black, 0.87); svg { opacity: 1; } } } /* * Pagination */ md2-pagination { display: block; color: rgba(black, 0.54); user-select: none; &::before, &::after { display: table; content: ''; } &::after { clear: both; } .md2-pagination { display: inline-block; margin: 8px 0; padding: 0; li { position: relative; display: inline-block; width: 36px; vertical-align: top; text-align: center; line-height: 36px; border-radius: 100px; cursor: pointer; box-sizing: border-box; &:hover:not(.disabled):not(.active) { background: rgba(black, 0.12); } &.disabled { pointer-events: none; background: transparent; cursor: default; opacity: 0.48; } &.active { background: $primary; color: white; cursor: default; } svg { fill: currentColor; margin-bottom: -7px; } } } .md2-rows-select { display: inline-block; margin: 8px 0; padding: 0; float: right; color: rgba(black, 0.54); line-height: 36px; label { vertical-align: sub; margin-right: 10px; } md2-select { display: inline-block; border: 0; outline: 0; } .md2-select-trigger { border-width: 0; min-width: 40px; } } } "],
        host: {
            '[class.md2-sort-active]': '_isAsc || _isDesc',
            '(click)': '_sort()'
        },
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [Md2DataTable])
], Md2DataTableSortBy);

var Md2Pagination = (function () {
    function Md2Pagination(_dataTable) {
        var _this = this;
        this._dataTable = _dataTable;
        this._activePage = 1;
        this.rowsPerPageSet = [];
        this.paginationLabel = 'Rows per page:';
        this._dataLength = 0;
        this.onPageChangeSubscriber = function (event) {
            _this._activePage = event.activePage;
            _this._rowsPerPage = event.rowsPerPage;
            _this._dataLength = event.dataLength;
            _this._lastPage = Math.ceil(_this._dataLength / _this._rowsPerPage);
        };
    }
    Md2Pagination.prototype.ngDoCheck = function () {
        this.md2Table = this.md2Table || this._dataTable;
        this.onPageChangeSubscriber(this.md2Table.getPage());
        this.md2Table.onPageChange.subscribe(this.onPageChangeSubscriber);
    };
    Md2Pagination.prototype._setPage = function (pageNumber) {
        this.md2Table.setPage(pageNumber, this._rowsPerPage);
    };
    Md2Pagination.prototype._setRows = function (event) {
        this.md2Table.setPage(this._activePage, parseInt(event.value));
    };
    return Md2Pagination;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], Md2Pagination.prototype, "rowsPerPageSet", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Md2DataTable)
], Md2Pagination.prototype, "md2Table", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Md2Pagination.prototype, "paginationLabel", void 0);
Md2Pagination = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'md2-pagination',
        template: "<ul class=\"md2-pagination\" *ngIf=\"_dataLength > _rowsPerPage\"><li [class.disabled]=\"_activePage <= 1\" (click)=\"_setPage(_activePage - 1)\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/></svg></li><li *ngIf=\"_activePage > 4 && _activePage + 1 > _lastPage\" (click)=\"_setPage(_activePage - 4)\">{{_activePage-4}}</li><li *ngIf=\"_activePage > 3 && _activePage + 2 > _lastPage\" (click)=\"_setPage(_activePage - 3)\">{{_activePage-3}}</li><li *ngIf=\"_activePage > 2\" (click)=\"_setPage(_activePage - 2)\">{{_activePage-2}}</li><li *ngIf=\"_activePage > 1\" (click)=\"_setPage(_activePage - 1)\">{{_activePage-1}}</li><li class=\"active\">{{_activePage}}</li><li *ngIf=\"_activePage + 1 <= _lastPage\" (click)=\"_setPage(_activePage + 1)\">{{_activePage+1}}</li><li *ngIf=\"_activePage + 2 <= _lastPage\" (click)=\"_setPage(_activePage + 2)\">{{_activePage+2}}</li><li *ngIf=\"_activePage + 3 <= _lastPage && _activePage < 3\" (click)=\"_setPage(_activePage + 3)\">{{_activePage+3}}</li><li *ngIf=\"_activePage + 4 <= _lastPage && _activePage < 2\" (click)=\"_setPage(_activePage + 4)\">{{_activePage+4}}</li><li [class.disabled]=\"_activePage >= _lastPage\" (click)=\"_setPage(_activePage + 1)\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg></li></ul><div class=\"md2-rows-select\" *ngIf=\"rowsPerPageSet.length && _dataLength > 0\"><label>{{paginationLabel}}</label><md2-select [(ngModel)]=\"_rowsPerPage\" (change)=\"_setRows($event)\"><md2-option *ngFor=\"let row of rowsPerPageSet\" [value]=\"row\">{{row}}</md2-option></md2-select></div>",
        styles: ["[md2SortBy]{line-height:24px;color:rgba(0,0,0,.54);white-space:nowrap;cursor:pointer;user-select:none}[md2SortBy] svg{display:inline-block;vertical-align:middle;fill:currentColor;opacity:0}[md2SortBy]:hover:not(.md2-sort-active) svg{color:rgba(0,0,0,.26);opacity:1}[md2SortBy].md2-sort-active{color:rgba(0,0,0,.87)}[md2SortBy].md2-sort-active svg{opacity:1}md2-pagination{display:block;color:rgba(0,0,0,.54);user-select:none}md2-pagination::after,md2-pagination::before{display:table;content:''}md2-pagination::after{clear:both}md2-pagination .md2-pagination{display:inline-block;margin:8px 0;padding:0}md2-pagination .md2-pagination li{position:relative;display:inline-block;width:36px;vertical-align:top;text-align:center;line-height:36px;border-radius:100px;cursor:pointer;box-sizing:border-box}md2-pagination .md2-pagination li:hover:not(.disabled):not(.active){background:rgba(0,0,0,.12)}md2-pagination .md2-pagination li.disabled{pointer-events:none;background:0 0;cursor:default;opacity:.48}md2-pagination .md2-pagination li.active{background:#106cc8;color:#fff;cursor:default}md2-pagination .md2-pagination li svg{fill:currentColor;margin-bottom:-7px}md2-pagination .md2-rows-select{display:inline-block;margin:8px 0;padding:0;float:right;color:rgba(0,0,0,.54);line-height:36px}md2-pagination .md2-rows-select label{vertical-align:sub;margin-right:10px}md2-pagination .md2-rows-select md2-select{display:inline-block;border:0;outline:0}md2-pagination .md2-rows-select .md2-select-trigger{border-width:0;min-width:40px} /*# sourceMappingURL=data-table.css.map */ "],
        exportAs: 'md2Pagination',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [Md2DataTable])
], Md2Pagination);

var MD2_DATA_TABLE_DIRECTIVES = [
    Md2DataTable,
    Md2DataTableSortBy,
    Md2Pagination
];
var Md2DataTableModule = (function () {
    function Md2DataTableModule() {
    }
    return Md2DataTableModule;
}());
Md2DataTableModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_3__select_index__["a" /* Md2SelectModule */]],
        exports: MD2_DATA_TABLE_DIRECTIVES,
        declarations: MD2_DATA_TABLE_DIRECTIVES,
    })
], Md2DataTableModule);

//# sourceMappingURL=data-table.js.map

/***/ }),

/***/ "./node_modules/md2/data-table/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_table__ = __webpack_require__("./node_modules/md2/data-table/data-table.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__data_table__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/md2/datepicker/calendar-body.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Md2CalendarCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Md2CalendarBody; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * An internal class that represents the data corresponding to a single calendar cell.
 * @docs-private
 */
var Md2CalendarCell = (function () {
    function Md2CalendarCell(value, displayValue, ariaLabel, enabled) {
        this.value = value;
        this.displayValue = displayValue;
        this.ariaLabel = ariaLabel;
        this.enabled = enabled;
    }
    return Md2CalendarCell;
}());

/**
 * An internal component used to display calendar data in a table.
 * @docs-private
 */
var Md2CalendarBody = (function () {
    function Md2CalendarBody() {
        /** The number of columns in the table. */
        this.numCols = 7;
        /** Whether to allow selection of disabled cells. */
        this.allowDisabledSelection = false;
        /** The cell number of the active cell in the table. */
        this.activeCell = 0;
        /** Emits when a new value is selected. */
        this.selectedValueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Md2CalendarBody.prototype._cellClicked = function (cell) {
        if (!this.allowDisabledSelection && !cell.enabled) {
            return;
        }
        this.selectedValueChange.emit(cell.value);
    };
    Object.defineProperty(Md2CalendarBody.prototype, "_firstRowOffset", {
        /** The number of blank cells to put at the beginning for the first row. */
        get: function () {
            return this.rows && this.rows.length && this.rows[0].length ?
                this.numCols - this.rows[0].length : 0;
        },
        enumerable: true,
        configurable: true
    });
    Md2CalendarBody.prototype._isActiveCell = function (rowIndex, colIndex) {
        var cellNumber = rowIndex * this.numCols + colIndex;
        // Account for the fact that the first row may not have as many cells.
        if (rowIndex) {
            cellNumber -= this._firstRowOffset;
        }
        return cellNumber == this.activeCell;
    };
    return Md2CalendarBody;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Md2CalendarBody.prototype, "label", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], Md2CalendarBody.prototype, "rows", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], Md2CalendarBody.prototype, "todayValue", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], Md2CalendarBody.prototype, "selectedValue", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], Md2CalendarBody.prototype, "labelMinRequiredCells", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], Md2CalendarBody.prototype, "numCols", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], Md2CalendarBody.prototype, "allowDisabledSelection", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], Md2CalendarBody.prototype, "activeCell", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], Md2CalendarBody.prototype, "selectedValueChange", void 0);
Md2CalendarBody = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({selector: '[md2-calendar-body]',
        template: "<tr *ngIf=\"_firstRowOffset < labelMinRequiredCells\" aria-hidden=\"true\"><td class=\"md2-calendar-body-label\" [attr.colspan]=\"numCols\">{{label}}</td></tr><tr *ngFor=\"let row of rows; let rowIndex = index\" role=\"row\"><td *ngIf=\"rowIndex === 0 && _firstRowOffset\" aria-hidden=\"true\" class=\"md2-calendar-body-label\" [attr.colspan]=\"_firstRowOffset\">{{_firstRowOffset >= labelMinRequiredCells ? label : ''}}</td><td *ngFor=\"let item of row; let colIndex = index\" role=\"gridcell\" class=\"md2-calendar-body-cell\" [class.md2-calendar-body-disabled]=\"!item.enabled\" [class.md2-calendar-body-active]=\"_isActiveCell(rowIndex, colIndex)\" [attr.aria-label]=\"item.ariaLabel\" [attr.aria-disabled]=\"!item.enabled || null\" (click)=\"_cellClicked(item)\"><div class=\"md2-calendar-body-cell-content\" [class.md2-calendar-body-selected]=\"selectedValue === item.value\" [class.md2-calendar-body-today]=\"todayValue === item.value\">{{item.displayValue}}</div></td></tr>",
        styles: [".md2-calendar-body{font-size:13px;min-width:224px}.md2-calendar-body-label{padding:7.14286% 0 7.14286% 7.14286%;height:0;line-height:0;color:rgba(0,0,0,.54);transform:translateX(-6px);text-align:left}.md2-calendar-body-cell{position:relative;width:14.28571%;height:0;line-height:0;padding:7.14286% 0;text-align:center;outline:0;cursor:pointer}.md2-calendar-body-disabled{cursor:default;pointer-events:none}.md2-calendar-body-cell-content{position:absolute;top:5%;left:5%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;color:rgba(0,0,0,.87);border-width:1px;border-style:solid;border-color:transparent;border-radius:50%}.md2-calendar-body-disabled>.md2-calendar-body-cell-content:not(.md2-calendar-body-selected){color:rgba(0,0,0,.38)}.md2-calendar:focus .md2-calendar-body-active>.md2-calendar-body-cell-content:not(.md2-calendar-body-selected),:not(.md2-calendar-body-disabled):hover>.md2-calendar-body-cell-content:not(.md2-calendar-body-selected){background-color:rgba(0,0,0,.12)}.md2-calendar-body-selected{background-color:#106cc8;color:#fff}.md2-calendar-body-disabled>.md2-calendar-body-selected{background-color:rgba(16,108,200,.4)}.md2-calendar-body-today:not(.md2-calendar-body-selected){border-color:#106cc8}.md2-calendar-body-today.md2-calendar-body-selected{box-shadow:inset 0 0 0 1px md2-color(#106cc8,default-contrast)}.md2-calendar-body-disabled>.md2-calendar-body-today:not(.md2-calendar-body-selected){border-color:rgba(0,0,0,.18)}[dir=rtl] .md2-calendar-body-label{padding:0 7.14286% 0 0;transform:translateX(6px);text-align:right} /*# sourceMappingURL=calendar-body.css.map */ "],
        host: {
            'class': 'md2-calendar-body',
        },
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
    })
], Md2CalendarBody);

//# sourceMappingURL=calendar-body.js.map

/***/ }),

/***/ "./node_modules/md2/datepicker/calendar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Md2Calendar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_keyboard_keycodes__ = __webpack_require__("./node_modules/md2/core/keyboard/keycodes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__date_locale__ = __webpack_require__("./node_modules/md2/datepicker/date-locale.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__date_util__ = __webpack_require__("./node_modules/md2/datepicker/date-util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datepicker_animations__ = __webpack_require__("./node_modules/md2/datepicker/datepicker-animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * A calendar that is used as part of the datepicker.
 * @docs-private
 */
var Md2Calendar = (function () {
    function Md2Calendar(_elementRef, _ngZone, _locale, _util) {
        var _this = this;
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._locale = _locale;
        this._util = _util;
        this.type = 'date';
        /** Whether the calendar should be started in month or year view. */
        this.startView = 'month';
        this.timeInterval = 1;
        /** Emits when the currently selected date changes. */
        this.selectedChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** Date filter for the month and year views. */
        this._dateFilterForViews = function (date) {
            return !!date &&
                (!_this.dateFilter || _this.dateFilter(date)) &&
                (!_this.minDate || _this._util.compareDate(date, _this.minDate) >= 0) &&
                (!_this.maxDate || _this._util.compareDate(date, _this.maxDate) <= 0);
        };
        /** Whether the calendar is in month view. */
        this._currentView = 'month';
        this._clockView = 'hour';
    }
    Object.defineProperty(Md2Calendar.prototype, "_activeDate", {
        /**
         * The current active date. This determines which time period is shown and which date is
         * highlighted when using keyboard navigation.
         */
        get: function () { return this._clampedActiveDate; },
        set: function (value) {
            var oldActiveDate = this._clampedActiveDate;
            this._clampedActiveDate = this._util.clampDate(value, this.minDate, this.maxDate);
            if (oldActiveDate && this._clampedActiveDate && this._currentView === 'month' &&
                !this._util.isSameMonthAndYear(oldActiveDate, this._clampedActiveDate)) {
                if (this._util.isInNextMonth(oldActiveDate, this._clampedActiveDate)) {
                    this.calendarState('right');
                }
                else {
                    this.calendarState('left');
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Calendar.prototype, "_yearLabel", {
        /** The label for the current calendar view. */
        get: function () {
            return this._locale.getYearName(this._activeDate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Calendar.prototype, "_monthYearLabel", {
        get: function () {
            return this._currentView === 'month' ? this._locale.getMonthLabel(this._activeDate) :
                this._locale.getYearName(this._activeDate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Calendar.prototype, "_dateLabel", {
        get: function () {
            return this._locale.getDateLabel(this._activeDate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Calendar.prototype, "_hoursLabel", {
        get: function () {
            return ('0' + this._locale.getHoursLabel(this._activeDate)).slice(-2);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Calendar.prototype, "_minutesLabel", {
        get: function () {
            return ('0' + this._locale.getMinutesLabel(this._activeDate)).slice(-2);
        },
        enumerable: true,
        configurable: true
    });
    Md2Calendar.prototype.ngAfterContentInit = function () {
        this._activeDate = this.startAt || this._util.today();
        this._elementRef.nativeElement.focus();
        if (this.type === 'month') {
            this._currentView = 'year';
        }
        else if (this.type === 'time') {
            this._currentView = 'clock';
        }
        else {
            this._currentView = this.startView || 'month';
        }
    };
    /** Handles date selection in the month view. */
    Md2Calendar.prototype._dateSelected = function (date) {
        if (this.type == 'date') {
            if (!this._util.sameDate(date, this.selected)) {
                this.selectedChange.emit(date);
            }
        }
        else {
            this._activeDate = date;
            this._currentView = 'clock';
        }
    };
    /** Handles month selection in the year view. */
    Md2Calendar.prototype._monthSelected = function (month) {
        if (this.type == 'month') {
            if (!this._util.isSameMonthAndYear(month, this.selected)) {
                this.selectedChange.emit(this._util.getFirstDateOfMonth(month));
            }
        }
        else {
            this._activeDate = month;
            this._currentView = 'month';
            this._clockView = 'hour';
        }
    };
    Md2Calendar.prototype._timeSelected = function (date) {
        if (this._clockView !== 'minute') {
            this._activeDate = date;
            this._clockView = 'minute';
        }
        else {
            if (!this._util.sameDateAndTime(date, this.selected)) {
                this.selectedChange.emit(date);
            }
        }
    };
    Md2Calendar.prototype._onActiveDateChange = function (date) {
        this._activeDate = date;
    };
    Md2Calendar.prototype._yearClicked = function () {
        this._currentView = 'year';
    };
    Md2Calendar.prototype._dateClicked = function () {
        this._currentView = 'month';
    };
    Md2Calendar.prototype._hoursClicked = function () {
        this._currentView = 'clock';
        this._clockView = 'hour';
    };
    Md2Calendar.prototype._minutesClicked = function () {
        this._currentView = 'clock';
        this._clockView = 'minute';
    };
    /** Handles user clicks on the previous button. */
    Md2Calendar.prototype._previousClicked = function () {
        this._activeDate = this._currentView === 'month' ?
            this._util.addCalendarMonths(this._activeDate, -1) :
            this._util.addCalendarYears(this._activeDate, -1);
    };
    /** Handles user clicks on the next button. */
    Md2Calendar.prototype._nextClicked = function () {
        this._activeDate = this._currentView === 'month' ?
            this._util.addCalendarMonths(this._activeDate, 1) :
            this._util.addCalendarYears(this._activeDate, 1);
    };
    /** Whether the previous period button is enabled. */
    Md2Calendar.prototype._previousEnabled = function () {
        if (!this.minDate) {
            return true;
        }
        return !this.minDate || !this._isSameView(this._activeDate, this.minDate);
    };
    /** Whether the next period button is enabled. */
    Md2Calendar.prototype._nextEnabled = function () {
        return !this.maxDate || !this._isSameView(this._activeDate, this.maxDate);
    };
    /** Handles keydown events on the calendar body. */
    Md2Calendar.prototype._handleCalendarBodyKeydown = function (event) {
        // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
        // disabled ones from being selected. This may not be ideal, we should look into whether
        // navigation should skip over disabled dates, and if so, how to implement that efficiently.
        if (this._currentView === 'month') {
            this._handleCalendarBodyKeydownInMonthView(event);
        }
        else if (this._currentView === 'year') {
            this._handleCalendarBodyKeydownInYearView(event);
        }
        else {
            this._handleCalendarBodyKeydownInClockView(event);
        }
    };
    /** Whether the two dates represent the same view in the current view mode (month or year). */
    Md2Calendar.prototype._isSameView = function (date1, date2) {
        return this._currentView === 'month' ?
            this._util.getYear(date1) == this._util.getYear(date2) &&
                this._util.getMonth(date1) == this._util.getMonth(date2) :
            this._util.getYear(date1) == this._util.getYear(date2);
    };
    /** Handles keydown events on the calendar body when calendar is in month view. */
    Md2Calendar.prototype._handleCalendarBodyKeydownInMonthView = function (event) {
        switch (event.keyCode) {
            case __WEBPACK_IMPORTED_MODULE_1__core_keyboard_keycodes__["i" /* LEFT_ARROW */]:
                this._activeDate = this._util.addCalendarDays(this._activeDate, -1);
                break;
            case __WEBPACK_IMPORTED_MODULE_1__core_keyboard_keycodes__["l" /* RIGHT_ARROW */]:
                this._activeDate = this._util.addCalendarDays(this._activeDate, 1);
                break;
            case __WEBPACK_IMPORTED_MODULE_1__core_keyboard_keycodes__["o" /* UP_ARROW */]:
                this._activeDate = this._util.addCalendarDays(this._activeDate, -7);
                break;
            case __WEBPACK_IMPORTED_MODULE_1__core_keyboard_keycodes__["d" /* DOWN_ARROW */]:
                this._activeDate = this._util.addCalendarDays(this._activeDate, 7);
                break;
            case __WEBPACK_IMPORTED_MODULE_1__core_keyboard_keycodes__["h" /* HOME */]:
                this._activeDate = this._util.addCalendarDays(this._activeDate, 1 - this._util.getDate(this._activeDate));
                break;
            case __WEBPACK_IMPORTED_MODULE_1__core_keyboard_keycodes__["e" /* END */]:
                this._activeDate = this._util.addCalendarDays(this._activeDate, (this._util.getNumDaysInMonth(this._activeDate) -
                    this._util.getDate(this._activeDate)));
                break;
            case __WEBPACK_IMPORTED_MODULE_1__core_keyboard_keycodes__["k" /* PAGE_UP */]:
                this._activeDate = event.altKey ?
                    this._util.addCalendarYears(this._activeDate, -1) :
                    this._util.addCalendarMonths(this._activeDate, -1);
                break;
            case __WEBPACK_IMPORTED_MODULE_1__core_keyboard_keycodes__["j" /* PAGE_DOWN */]:
                this._activeDate = event.altKey ?
                    this._util.addCalendarYears(this._activeDate, 1) :
                    this._util.addCalendarMonths(this._activeDate, 1);
                break;
            case __WEBPACK_IMPORTED_MODULE_1__core_keyboard_keycodes__["f" /* ENTER */]:
                if (this._dateFilterForViews(this._activeDate)) {
                    this._dateSelected(this._activeDate);
                    // Prevent unexpected default actions such as form submission.
                    event.preventDefault();
                }
                return;
            default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
        }
        // Prevent unexpected default actions such as form submission.
        event.preventDefault();
    };
    /** Handles keydown events on the calendar body when calendar is in year view. */
    Md2Calendar.prototype._handleCalendarBodyKeydownInYearView = function (event) {
        switch (event.keyCode) {
            case __WEBPACK_IMPORTED_MODULE_1__core_keyboard_keycodes__["i" /* LEFT_ARROW */]:
                this._activeDate = this._util.addCalendarMonths(this._activeDate, -1);
                break;
            case __WEBPACK_IMPORTED_MODULE_1__core_keyboard_keycodes__["l" /* RIGHT_ARROW */]:
                this._activeDate = this._util.addCalendarMonths(this._activeDate, 1);
                break;
            case __WEBPACK_IMPORTED_MODULE_1__core_keyboard_keycodes__["o" /* UP_ARROW */]:
                this._activeDate = this._prevMonthInSameCol(this._activeDate);
                break;
            case __WEBPACK_IMPORTED_MODULE_1__core_keyboard_keycodes__["d" /* DOWN_ARROW */]:
                this._activeDate = this._nextMonthInSameCol(this._activeDate);
                break;
            case __WEBPACK_IMPORTED_MODULE_1__core_keyboard_keycodes__["h" /* HOME */]:
                this._activeDate = this._util.addCalendarMonths(this._activeDate, -this._util.getMonth(this._activeDate));
                break;
            case __WEBPACK_IMPORTED_MODULE_1__core_keyboard_keycodes__["e" /* END */]:
                this._activeDate = this._util.addCalendarMonths(this._activeDate, 11 - this._util.getMonth(this._activeDate));
                break;
            case __WEBPACK_IMPORTED_MODULE_1__core_keyboard_keycodes__["k" /* PAGE_UP */]:
                this._activeDate =
                    this._util.addCalendarYears(this._activeDate, event.altKey ? -10 : -1);
                break;
            case __WEBPACK_IMPORTED_MODULE_1__core_keyboard_keycodes__["j" /* PAGE_DOWN */]:
                this._activeDate =
                    this._util.addCalendarYears(this._activeDate, event.altKey ? 10 : 1);
                break;
            case __WEBPACK_IMPORTED_MODULE_1__core_keyboard_keycodes__["f" /* ENTER */]:
                this._monthSelected(this._activeDate);
                break;
            default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
        }
        // Prevent unexpected default actions such as form submission.
        event.preventDefault();
    };
    /** Handles keydown events on the calendar body when calendar is in month view. */
    Md2Calendar.prototype._handleCalendarBodyKeydownInClockView = function (event) {
        switch (event.keyCode) {
            case __WEBPACK_IMPORTED_MODULE_1__core_keyboard_keycodes__["o" /* UP_ARROW */]:
                this._activeDate = this._clockView == 'hour' ?
                    this._util.addCalendarHours(this._activeDate, 1) :
                    this._util.addCalendarMinutes(this._activeDate, 1);
                break;
            case __WEBPACK_IMPORTED_MODULE_1__core_keyboard_keycodes__["d" /* DOWN_ARROW */]:
                this._activeDate = this._clockView == 'hour' ?
                    this._util.addCalendarHours(this._activeDate, -1) :
                    this._util.addCalendarMinutes(this._activeDate, -1);
                break;
            case __WEBPACK_IMPORTED_MODULE_1__core_keyboard_keycodes__["f" /* ENTER */]:
                this._timeSelected(this._activeDate);
                return;
            default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
        }
        // Prevent unexpected default actions such as form submission.
        event.preventDefault();
    };
    /**
     * Determine the date for the month that comes before the given month in the same column in the
     * calendar table.
     */
    Md2Calendar.prototype._prevMonthInSameCol = function (date) {
        // Determine how many months to jump forward given that there are 2 empty slots at the beginning
        // of each year.
        var increment = this._util.getMonth(date) <= 4 ? -5 :
            (this._util.getMonth(date) >= 7 ? -7 : -12);
        return this._util.addCalendarMonths(date, increment);
    };
    /**
     * Determine the date for the month that comes after the given month in the same column in the
     * calendar table.
     */
    Md2Calendar.prototype._nextMonthInSameCol = function (date) {
        // Determine how many months to jump forward given that there are 2 empty slots at the beginning
        // of each year.
        var increment = this._util.getMonth(date) <= 4 ? 7 :
            (this._util.getMonth(date) >= 7 ? 5 : 12);
        return this._util.addCalendarMonths(date, increment);
    };
    Md2Calendar.prototype.calendarState = function (direction) {
        this._calendarState = direction;
    };
    Md2Calendar.prototype._calendarStateDone = function () {
        this._calendarState = '';
    };
    return Md2Calendar;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Md2Calendar.prototype, "type", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Date)
], Md2Calendar.prototype, "startAt", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Md2Calendar.prototype, "startView", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Date)
], Md2Calendar.prototype, "selected", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Date)
], Md2Calendar.prototype, "minDate", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Date)
], Md2Calendar.prototype, "maxDate", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], Md2Calendar.prototype, "timeInterval", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Function)
], Md2Calendar.prototype, "dateFilter", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], Md2Calendar.prototype, "selectedChange", void 0);
Md2Calendar = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({selector: 'md2-calendar',
        template: "<div class=\"md2-calendar-header\"><div *ngIf=\"type!=='time'\" class=\"md2-calendar-header-year\" [class.active]=\"_currentView == 'year'\" (click)=\"_yearClicked()\">{{ _yearLabel }}</div><div class=\"md2-calendar-header-date-time\"><span *ngIf=\"type!=='time'\" class=\"md2-calendar-header-date\" [class.active]=\"_currentView == 'month'\" (click)=\"_dateClicked()\">{{ _dateLabel }}</span> <span *ngIf=\"type!=='date'\" class=\"md2-calendar-header-time\" [class.active]=\"_currentView == 'clock'\"><span class=\"md2-calendar-header-hours\" [class.active]=\"_clockView == 'hour'\" (click)=\"_hoursClicked()\">{{ _hoursLabel }}</span>:<span class=\"md2-calendar-header-minutes\" [class.active]=\"_clockView == 'minute'\" (click)=\"_minutesClicked()\">{{ _minutesLabel }}</span></span></div></div><div class=\"md2-calendar-content\" [ngSwitch]=\"_currentView\"><div class=\"md2-month-content\" *ngIf=\"_currentView === 'month' || _currentView === 'year'\"><div class=\"md2-calendar-controls\"><div class=\"md2-calendar-previous-button\" [class.disabled]=\"!_previousEnabled()\" (click)=\"_previousClicked()\" aria-label=\"Previous month\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></svg></div><div class=\"md2-calendar-period-button\" [@slideCalendar]=\"_calendarState\" (@slideCalendar.done)=\"_calendarStateDone()\"><strong>{{ _monthYearLabel }}</strong></div><div class=\"md2-calendar-next-button\" [class.disabled]=\"!_nextEnabled()\" (click)=\"_nextClicked()\" aria-label=\"Next month\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"></path></svg></div></div></div><md2-month-view *ngSwitchCase=\"'month'\" [activeDate]=\"_activeDate\" [selected]=\"selected\" [dateFilter]=\"_dateFilterForViews\" (selectedChange)=\"_dateSelected($event)\"></md2-month-view><md2-year-view *ngSwitchCase=\"'year'\" [activeDate]=\"_activeDate\" [selected]=\"selected\" [dateFilter]=\"_dateFilterForViews\" (selectedChange)=\"_monthSelected($event)\"></md2-year-view><md2-clock *ngSwitchDefault [startView]=\"_clockView\" [interval]=\"timeInterval\" [min]=\"minDate\" [max]=\"maxDate\" [selected]=\"_activeDate\" (activeDateChange)=\"_onActiveDateChange($event)\" (selectedChange)=\"_timeSelected($event)\"></md2-clock></div>",
        styles: [".md2-calendar{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;outline:0}.md2-calendar[mode=landscape]{display:flex}.md2-calendar-header{padding:16px;font-size:14px;background-color:#106cc8;color:#fff;box-sizing:border-box}[mode=landscape] .md2-calendar-header{width:150px;min-width:150px}.md2-calendar-header-date-time,.md2-calendar-header-year{width:100%;font-weight:500;white-space:nowrap}.md2-calendar-header-date-time{font-size:30px;line-height:34px}[mode=landscape] .md2-calendar-header-date-time{white-space:normal;word-wrap:break-word}.md2-calendar-header-date:not(.active),.md2-calendar-header-hours:not(.active),.md2-calendar-header-minutes:not(.active),.md2-calendar-header-year:not(.active){cursor:pointer;opacity:.6}.md2-calendar-header-time{padding-left:8px}.md2-calendar-header-time:not(.active){opacity:.6}.md2-calendar-header-time:not(.active) .md2-calendar-header-hours,.md2-calendar-header-time:not(.active) .md2-calendar-header-minutes{cursor:pointer;opacity:1}[mode=landscape] .md2-calendar-header-time{display:block;padding-left:0}.md2-calendar-content{width:100%;padding:0 8px 8px 8px;outline:0;box-sizing:border-box;overflow:hidden}[mode=landscape] .md2-calendar-content{padding-top:8px}.md2-calendar-controls{display:flex;justify-content:space-between}.md2-calendar-period-button{display:inline-block;height:48px;padding:12px;outline:0;border:0;background:0 0;box-sizing:border-box}.md2-calendar-next-button,.md2-calendar-previous-button{display:inline-block;width:48px;height:48px;padding:12px;outline:0;border:0;cursor:pointer;background:0 0;box-sizing:border-box}.md2-calendar-next-button.disabled,.md2-calendar-previous-button.disabled{color:rgba(0,0,0,.38);pointer-events:none}.md2-calendar-next-button svg,.md2-calendar-previous-button svg{fill:currentColor;vertical-align:top}.md2-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.md2-calendar-table-header{color:rgba(0,0,0,.38)}.md2-calendar-table-header th{text-align:center;font-size:11px;padding:0 0 8px 0}@media (min-width:480px){.md2-calendar[mode=auto]{display:flex}.md2-calendar[mode=auto] .md2-calendar-header{width:150px;min-width:150px}.md2-calendar[mode=auto] .md2-calendar-header-date-time{white-space:normal;word-wrap:break-word}.md2-calendar[mode=auto] .md2-calendar-header-time{display:block;padding-left:0}.md2-calendar[mode=auto] .md2-calendar-content{padding-top:8px}} /*# sourceMappingURL=calendar.css.map */ "],
        host: {
            '[class.md2-calendar]': 'true',
            'tabindex': '0',
            '(keydown)': '_handleCalendarBodyKeydown($event)',
        },
        animations: [__WEBPACK_IMPORTED_MODULE_4__datepicker_animations__["a" /* slideCalendar */]],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
        __WEBPACK_IMPORTED_MODULE_2__date_locale__["a" /* DateLocale */], __WEBPACK_IMPORTED_MODULE_3__date_util__["a" /* DateUtil */]])
], Md2Calendar);

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ "./node_modules/md2/datepicker/clock.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CLOCK_RADIUS */
/* unused harmony export CLOCK_INNER_RADIUS */
/* unused harmony export CLOCK_OUTER_RADIUS */
/* unused harmony export CLOCK_TICK_RADIUS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Md2Clock; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__date_util__ = __webpack_require__("./node_modules/md2/datepicker/date-util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__date_locale__ = __webpack_require__("./node_modules/md2/datepicker/date-locale.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CLOCK_RADIUS = 50;
var CLOCK_INNER_RADIUS = 27.5;
var CLOCK_OUTER_RADIUS = 41.25;
var CLOCK_TICK_RADIUS = 7.0833;
/**
 * A clock that is used as part of the datepicker.
 * @docs-private
 */
var Md2Clock = (function () {
    function Md2Clock(_element, _locale, _util) {
        var _this = this;
        this._element = _element;
        this._locale = _locale;
        this._util = _util;
        this.interval = 1;
        this.twelvehour = false;
        /** Emits when the currently selected date changes. */
        this.selectedChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.activeDateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** Hours and Minutes representing the clock view. */
        this._hours = [];
        this._minutes = [];
        /** Whether the clock is in hour view. */
        this._hourView = true;
        this.mouseMoveListener = function (event) { _this._handleMousemove(event); };
        this.mouseUpListener = function () { _this._handleMouseup(); };
    }
    Object.defineProperty(Md2Clock.prototype, "activeDate", {
        /**
         * The date to display in this clock view.
         */
        get: function () { return this._activeDate; },
        set: function (value) {
            var oldActiveDate = this._activeDate;
            this._activeDate = this._util.clampDate(value, this.min, this.max);
            if (!this._util.isSameMinute(oldActiveDate, this._activeDate)) {
                this._init();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Clock.prototype, "selected", {
        /** The currently selected date. */
        get: function () { return this._selected; },
        set: function (value) {
            this._selected = this._util.parse(value);
            if (this._selected) {
                this.activeDate = this._selected;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Clock.prototype, "min", {
        /** The minimum selectable date. */
        get: function () { return this._min; },
        set: function (date) { this._min = this._util.parse(date); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Clock.prototype, "max", {
        /** The maximum selectable date. */
        get: function () { return this._max; },
        set: function (date) { this._max = this._util.parse(date); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Clock.prototype, "startView", {
        /** Whether the clock should be started in hour or minute view. */
        set: function (value) {
            this._hourView = value != 'minute';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Clock.prototype, "_hand", {
        get: function () {
            this._selectedHour = this._util.getHours(this.activeDate);
            this._selectedMinute = this._util.getMinutes(this.activeDate);
            var deg = 0;
            var radius = CLOCK_OUTER_RADIUS;
            if (this._hourView) {
                var outer = this.activeDate.getHours() > 0 && this.activeDate.getHours() < 13;
                radius = outer ? CLOCK_OUTER_RADIUS : CLOCK_INNER_RADIUS;
                if (this.twelvehour) {
                    radius = CLOCK_OUTER_RADIUS;
                }
                deg = Math.round(this.activeDate.getHours() * (360 / (24 / 2)));
            }
            else {
                deg = Math.round(this.activeDate.getMinutes() * (360 / 60));
            }
            return {
                'transform': "rotate(" + deg + "deg)",
                'height': radius + "%",
                'margin-top': 50 - radius + "%"
            };
        },
        enumerable: true,
        configurable: true
    });
    Md2Clock.prototype.ngAfterContentInit = function () {
        this.activeDate = this._activeDate || this._util.today();
        this._init();
    };
    /** Handles mousedown events on the clock body. */
    Md2Clock.prototype._handleMousedown = function (event) {
        this.setTime(event);
        document.addEventListener('mousemove', this.mouseMoveListener);
        document.addEventListener('touchmove', this.mouseMoveListener);
        document.addEventListener('mouseup', this.mouseUpListener);
        document.addEventListener('touchend', this.mouseUpListener);
    };
    Md2Clock.prototype._handleMousemove = function (event) {
        event.preventDefault();
        this.setTime(event);
    };
    Md2Clock.prototype._handleMouseup = function () {
        document.removeEventListener('mousemove', this.mouseMoveListener);
        document.removeEventListener('touchmove', this.mouseMoveListener);
        document.removeEventListener('mouseup', this.mouseUpListener);
        document.removeEventListener('touchend', this.mouseUpListener);
        this.selectedChange.emit(this.activeDate);
    };
    /** Initializes this clock view. */
    Md2Clock.prototype._init = function () {
        this._hours.length = 0;
        this._minutes.length = 0;
        var hourNames = this._locale.getHourNames();
        var minuteNames = this._locale.getMinuteNames();
        if (this.twelvehour) {
            for (var i = 1; i < (hourNames.length / 2) + 1; i++) {
                var radian = i / 6 * Math.PI;
                var radius = CLOCK_OUTER_RADIUS;
                var date = new Date(this.activeDate.getTime());
                date.setHours(i + 1, 0, 0, 0);
                var enabled = this._util.isFullDateWithinRange(date, this.min, this.max);
                this._hours.push({
                    value: i,
                    displayValue: i === 0 ? '00' : hourNames[i],
                    enabled: enabled,
                    top: CLOCK_RADIUS - Math.cos(radian) * radius - CLOCK_TICK_RADIUS,
                    left: CLOCK_RADIUS + Math.sin(radian) * radius - CLOCK_TICK_RADIUS,
                });
            }
        }
        else {
            for (var i = 0; i < hourNames.length; i++) {
                var radian = i / 6 * Math.PI;
                var outer = i > 0 && i < 13, radius = outer ? CLOCK_OUTER_RADIUS : CLOCK_INNER_RADIUS;
                var date = new Date(this.activeDate.getTime());
                date.setHours(i + 1, 0, 0, 0);
                var enabled = this._util.isFullDateWithinRange(date, this.min, this.max);
                this._hours.push({
                    value: i,
                    displayValue: i === 0 ? '00' : hourNames[i],
                    enabled: enabled,
                    top: CLOCK_RADIUS - Math.cos(radian) * radius - CLOCK_TICK_RADIUS,
                    left: CLOCK_RADIUS + Math.sin(radian) * radius - CLOCK_TICK_RADIUS,
                    fontSize: i > 0 && i < 13 ? '' : '80%'
                });
            }
        }
        for (var i = 0; i < minuteNames.length; i += 5) {
            var radian = i / 30 * Math.PI;
            var date = new Date(this.activeDate.getTime());
            date.setMinutes(i, 0, 0);
            var enabled = this._util.isFullDateWithinRange(date, this.min, this.max);
            this._minutes.push({
                value: i,
                displayValue: i === 0 ? '00' : minuteNames[i],
                enabled: enabled,
                top: CLOCK_RADIUS - Math.cos(radian) * CLOCK_OUTER_RADIUS - CLOCK_TICK_RADIUS,
                left: CLOCK_RADIUS + Math.sin(radian) * CLOCK_OUTER_RADIUS - CLOCK_TICK_RADIUS,
            });
        }
    };
    /**
     * Set Time
     * @param event
     */
    Md2Clock.prototype.setTime = function (event) {
        var trigger = this._element.nativeElement;
        var triggerRect = trigger.getBoundingClientRect();
        var width = trigger.offsetWidth;
        var height = trigger.offsetHeight;
        var pageX = event.pageX !== undefined ? event.pageX : event.touches[0].pageX;
        var pageY = event.pageY !== undefined ? event.pageY : event.touches[0].pageY;
        var x = (width / 2) - (pageX - triggerRect.left - window.pageXOffset);
        var y = (height / 2) - (pageY - triggerRect.top - window.pageYOffset);
        var radian = Math.atan2(-x, y);
        var unit = Math.PI / (this._hourView ? 6 : (this.interval ? (30 / this.interval) : 30));
        var z = Math.sqrt(x * x + y * y);
        var outer = this._hourView && z > ((width * (CLOCK_OUTER_RADIUS / 100)) +
            (width * (CLOCK_INNER_RADIUS / 100))) / 2;
        var value = 0;
        if (radian < 0) {
            radian = Math.PI * 2 + radian;
        }
        value = Math.round(radian / unit);
        radian = value * unit;
        var date = new Date(this.activeDate.getTime());
        if (this._hourView) {
            if (this.twelvehour) {
                value = value === 0 ? 12 : value;
            }
            else {
                if (value === 12) {
                    value = 0;
                }
                value = outer ? (value === 0 ? 12 : value) : value === 0 ? 0 : value + 12;
            }
            date.setHours(value);
        }
        else {
            if (this.interval) {
                value *= this.interval;
            }
            if (value === 60) {
                value = 0;
            }
            date.setMinutes(value);
        }
        this.activeDate = this._util.clampDate(date, this.min, this.max);
        this.activeDateChange.emit(this.activeDate);
    };
    return Md2Clock;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Date),
    __metadata("design:paramtypes", [Date])
], Md2Clock.prototype, "activeDate", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Date),
    __metadata("design:paramtypes", [Date])
], Md2Clock.prototype, "selected", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Date),
    __metadata("design:paramtypes", [Date])
], Md2Clock.prototype, "min", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Date),
    __metadata("design:paramtypes", [Date])
], Md2Clock.prototype, "max", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Md2Clock.prototype, "startView", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Function)
], Md2Clock.prototype, "dateFilter", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], Md2Clock.prototype, "interval", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], Md2Clock.prototype, "twelvehour", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], Md2Clock.prototype, "selectedChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], Md2Clock.prototype, "activeDateChange", void 0);
Md2Clock = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({selector: 'md2-clock',
        template: "<div class=\"md2-clock\"><div class=\"md2-clock-center\"></div><div class=\"md2-clock-hand\" [ngStyle]=\"_hand\"></div><div class=\"md2-clock-hours\" [class.active]=\"_hourView\"><div *ngFor=\"let item of _hours\" class=\"md2-clock-cell\" [class.md2-clock-cell-selected]=\"_selectedHour == item.value\" [class.md2-clock-cell-disabled]=\"!item.enabled\" [style.top]=\"item.top+'%'\" [style.left]=\"item.left+'%'\" [style.fontSize]=\"item.fontSize\">{{ item.displayValue }}</div></div><div class=\"md2-clock-minutes\" [class.active]=\"!_hourView\"><div *ngFor=\"let item of _minutes\" class=\"md2-clock-cell\" [class.md2-clock-cell-selected]=\"_selectedMinute == item.value\" [class.md2-clock-cell-disabled]=\"!item.enabled\" [style.top]=\"item.top+'%'\" [style.left]=\"item.left+'%'\">{{ item.displayValue }}</div></div></div>",
        styles: [":host{position:relative;display:block;min-width:224px;margin:8px;font-size:14px;box-sizing:border-box;user-select:none}.md2-clock{position:relative;width:100%;height:0;padding-top:100%;background-color:#e0e0e0;border-radius:50%}.md2-clock-center{position:absolute;top:50%;left:50%;width:2%;height:2%;margin:-1%;border-radius:50%;background-color:#106cc8}.md2-clock-hand{position:absolute;top:0;right:0;bottom:0;left:0;width:1px;margin:0 auto;background-color:#106cc8;transform-origin:bottom}.md2-clock-hand::before{content:'';position:absolute;top:-4px;left:-4px;width:8px;height:8px;border-radius:50%;background-color:#106cc8}.md2-clock-hours,.md2-clock-minutes{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;visibility:hidden;transition:350ms;transform:scale(1.2)}.md2-clock-hours.active,.md2-clock-minutes.active{opacity:1;visibility:visible;transform:scale(1)}.md2-clock-minutes{transform:scale(.8)}.md2-clock-cell{position:absolute;display:flex;width:14.1666%;height:14.1666%;color:rgba(0,0,0,.87);justify-content:center;box-sizing:border-box;border-radius:50%;align-items:center;cursor:pointer}.md2-clock-cell:not(.md2-clock-cell-selected):not(.md2-clock-cell-disabled):hover{background-color:rgba(0,0,0,.1)}.md2-clock-cell.md2-clock-cell-disabled{color:rgba(0,0,0,.38);pointer-events:none}.md2-clock-cell.md2-clock-cell-selected{color:#fff;background-color:#1279e0} /*# sourceMappingURL=clock.css.map */ "],
        host: {
            'role': 'clock',
            '(mousedown)': '_handleMousedown($event)',
        },
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
        __WEBPACK_IMPORTED_MODULE_2__date_locale__["a" /* DateLocale */], __WEBPACK_IMPORTED_MODULE_1__date_util__["a" /* DateUtil */]])
], Md2Clock);

//# sourceMappingURL=clock.js.map

/***/ }),

/***/ "./node_modules/md2/datepicker/date-locale.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateLocale; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SUPPORTS_INTL_API = false; // typeof Intl != 'undefined';
/** The default month names to use if Intl API is not available. */
var DEFAULT_MONTH_NAMES = {
    'long': [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December'
    ],
    'short': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    'narrow': ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
};
/** The default date names to use if Intl API is not available. */
var DEFAULT_DATE_NAMES = range(31, function (i) { return String(i + 1); });
/** The default hour names to use if Intl API is not available. */
var DEFAULT_HOUR_NAMES = range(24, function (i) { return String(i); });
/** The default minute names to use if Intl API is not available. */
var DEFAULT_MINUTE_NAMES = range(60, function (i) { return String(i); });
/** The default day of the week names to use if Intl API is not available. */
var DEFAULT_DAY_OF_WEEK_NAMES = {
    'long': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    'short': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    'narrow': ['S', 'M', 'T', 'W', 'T', 'F', 'S']
};
/** Creates an array and fills it with values. */
function range(length, valueFunction) {
    var valuesArray = Array(length);
    for (var i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
    }
    return valuesArray;
}
var DateLocale = (function () {
    function DateLocale() {
        this.firstDayOfWeek = 0;
    }
    DateLocale.prototype.getDayOfWeek = function (date) {
        return date.getDay();
    };
    DateLocale.prototype.getMonthNames = function (style) {
        var _this = this;
        if (this.months) {
            return this.months[style];
        }
        if (SUPPORTS_INTL_API) {
            var dtf_1 = new Intl.DateTimeFormat(this.locale, { month: style });
            return range(12, function (i) { return _this._stripDirectionalityCharacters(dtf_1.format(new Date(2017, i, 1))); });
        }
        return DEFAULT_MONTH_NAMES[style];
    };
    DateLocale.prototype.getDateNames = function () {
        var _this = this;
        if (this.dates) {
            return this.dates;
        }
        if (SUPPORTS_INTL_API) {
            var dtf_2 = new Intl.DateTimeFormat(this.locale, { day: 'numeric' });
            return range(31, function (i) { return _this._stripDirectionalityCharacters(dtf_2.format(new Date(2017, 0, i + 1))); });
        }
        return DEFAULT_DATE_NAMES;
    };
    DateLocale.prototype.getHourNames = function () {
        var _this = this;
        if (this.hours) {
            return this.hours;
        }
        if (SUPPORTS_INTL_API) {
            var dtf_3 = new Intl.DateTimeFormat(this.locale, { hour: 'numeric' });
            return range(24, function (i) { return _this._stripDirectionalityCharacters(dtf_3.format(new Date(2017, 0, 0, i))); });
        }
        return DEFAULT_HOUR_NAMES;
    };
    DateLocale.prototype.getMinuteNames = function () {
        var _this = this;
        if (this.minutes) {
            return this.minutes;
        }
        if (SUPPORTS_INTL_API) {
            var dtf_4 = new Intl.DateTimeFormat(this.locale, { minute: 'numeric' });
            return range(60, function (i) { return _this._stripDirectionalityCharacters(dtf_4.format(new Date(2017, 0, 0, 0, i))); });
        }
        return DEFAULT_MINUTE_NAMES;
    };
    DateLocale.prototype.getDayOfWeekNames = function (style) {
        var _this = this;
        if (this.daysOfWeek) {
            return this.daysOfWeek[style];
        }
        if (SUPPORTS_INTL_API) {
            var dtf_5 = new Intl.DateTimeFormat(this.locale, { weekday: style });
            return range(7, function (i) { return _this._stripDirectionalityCharacters(dtf_5.format(new Date(2017, 0, i + 1))); });
        }
        return DEFAULT_DAY_OF_WEEK_NAMES[style];
    };
    DateLocale.prototype.getYearName = function (date) {
        if (SUPPORTS_INTL_API) {
            var dtf = new Intl.DateTimeFormat(this.locale, { year: 'numeric' });
            return this._stripDirectionalityCharacters(dtf.format(date));
        }
        return String(date.getFullYear());
    };
    DateLocale.prototype.getFirstDayOfWeek = function () {
        // We can't tell using native JS Date what the first day of the week is, we default to Sunday.
        return this.firstDayOfWeek;
    };
    DateLocale.prototype.format = function (date, displayFormat) {
        if (SUPPORTS_INTL_API) {
            var dtf = new Intl.DateTimeFormat(this.locale, displayFormat);
            return this._stripDirectionalityCharacters(dtf.format(date));
        }
        return this._stripDirectionalityCharacters(date.toDateString());
    };
    DateLocale.prototype.getDateLabel = function (d) {
        var day = this.getDayOfWeekNames('short')[d.getDay()];
        var date = this.getDateNames()[d.getDate() - 1];
        var month = this.getMonthNames('short')[d.getMonth()];
        return day + ", " + month + " " + date;
    };
    DateLocale.prototype.getHoursLabel = function (d) { return "" + this.getHourNames()[d.getHours()]; };
    DateLocale.prototype.getMinutesLabel = function (d) { return "" + this.getMinuteNames()[d.getMinutes()]; };
    DateLocale.prototype.getMonthLabel = function (d) {
        return this.getMonthNames('long')[d.getMonth()] + " " + this.getYearName(d);
    };
    /**
     * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
     * other browsers do not. We remove them to make output consistent and because they interfere with
     * date parsing.
     * @param s The string to strip direction characters from.
     * @returns The stripped string.
     */
    DateLocale.prototype._stripDirectionalityCharacters = function (s) {
        return s.replace(/[\u200e\u200f]/g, '');
    };
    return DateLocale;
}());
DateLocale = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], DateLocale);

//# sourceMappingURL=date-locale.js.map

/***/ }),

/***/ "./node_modules/md2/datepicker/date-util.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__date_locale__ = __webpack_require__("./node_modules/md2/datepicker/date-locale.js");

var DateUtil = (function () {
    function DateUtil() {
        this._locale = new __WEBPACK_IMPORTED_MODULE_0__date_locale__["a" /* DateLocale */]();
        this.parseDateMap = {
            'y': 0,
            'Y': [0, -2000],
            'M': [1, 1],
            'n': [1, this._locale.getMonthNames('short')],
            'N': [1, this._locale.getMonthNames('long')],
            'd': 2,
            'm': 4,
            'H': 3,
            'h': 3,
            'K': [3, 1],
            'k': [3, 1],
            's': 5,
            'S': 6,
            'a': [3, ['am', 'pm']],
            'A': [3, ['AM', 'PM']]
        };
    }
    DateUtil.prototype.replace = function (s, regexp, sub) {
        return (s != null ? '' + s : '').replace(regexp, sub != null ? sub : '');
    };
    DateUtil.prototype.startsWith = function (base, start) {
        return start != null && base.substr(0, start.length) == start;
    };
    DateUtil.prototype.isType = function (s, o) {
        return typeof s == o;
    };
    DateUtil.prototype.isFunction = function (f) {
        return this.isType(f, 'function');
    };
    DateUtil.prototype.isList = function (v) {
        return !!v && v.length != null && !this.isString(v) && !this.isNode(v) && !this.isFunction(v);
    };
    DateUtil.prototype.isString = function (s) {
        return this.isType(s, 'string');
    };
    DateUtil.prototype.isObject = function (f) {
        return !!f && this.isType(f, 'object');
    };
    DateUtil.prototype.isNode = function (n) {
        return n && n['nodeType'];
    };
    DateUtil.prototype.isNumber = function (n) {
        return this.isType(n, 'number');
    };
    DateUtil.prototype.getFindFunc = function (findFunc) {
        return this.isFunction(findFunc) ? findFunc : function (obj, index) {
            if (findFunc === obj) {
                return index;
            }
        };
    };
    DateUtil.prototype.getFindIndex = function (list, index, defaultIndex) {
        return index == null ? defaultIndex :
            index < 0 ? Math.max(list.length + index, 0) : Math.min(list.length, index);
    };
    DateUtil.prototype.find = function (list, findFunc, startIndex, endIndex) {
        var f = this.getFindFunc(findFunc);
        var e = this.getFindIndex(list, endIndex, list.length);
        var r;
        for (var i = this.getFindIndex(list, startIndex, 0); i < e; i++) {
            if ((r = f.call(list, list[i], i)) != null) {
                return r;
            }
        }
    };
    DateUtil.prototype.parseDate = function (date, fmt) {
        var _this = this;
        var indexMap = {}; // contains reGroupPosition -> typeLetter or [typeLetter, value array]
        var reIndex = 1;
        var timezoneOffsetMatch;
        var timezoneIndex;
        var match;
        var format = this.replace(fmt, /^\?/);
        if (format != fmt && !this.replace(date, /^\s+|\s+$/g)) {
            return null;
        }
        if (match = /^\[([+-])(\d\d)(\d\d)\]\s*(.*)/.exec(format)) {
            timezoneOffsetMatch = match;
            format = match[4];
        }
        var parser = new RegExp(format.replace(/(.)(\1*)(?:\[([^\]]*)\])?/g, function (wholeMatch, placeholderChar, placeholderDigits, param) {
            if (/[dmhkyhs]/i.test(placeholderChar)) {
                indexMap[reIndex++] = placeholderChar;
                var plen = placeholderDigits.length + 1;
                return '(\\d' + (plen < 2 ? '+' : ('{1,' + plen + '}')) + ')';
            }
            else if (placeholderChar == 'z') {
                timezoneIndex = reIndex;
                reIndex += 3;
                return '([+-])(\\d\\d)(\\d\\d)';
            }
            else if (/[NnaA]/.test(placeholderChar)) {
                indexMap[reIndex++] = [placeholderChar, param && param.split(',')];
                return '([a-zA-Z\\u0080-\\u1fff]+)';
            }
            else if (/w/i.test(placeholderChar)) {
                return '[a-zA-Z\\u0080-\\u1fff]+';
            }
            else if (/\s/.test(placeholderChar)) {
                return '\\s+';
            }
            else {
                return _this.replace(wholeMatch, /[\\\[\]\/{}()*+?.$|^-]/g, '\\$&');
            }
        }));
        if (!(match = parser.exec(date))) {
            return undefined;
        }
        var ctorArgs = [0, 0, 0, 0, 0, 0, 0];
        var _loop_1 = function (i) {
            var matchVal = match[i];
            var indexEntry = indexMap[i];
            if (this_1.isList(indexEntry)) {
                var placeholderChar = indexEntry[0];
                var mapEntry = this_1.parseDateMap[placeholderChar];
                var ctorIndex = mapEntry[0];
                var valList = indexEntry[1] || mapEntry[1];
                var listValue = this_1.find(valList, function (v, index) {
                    if (_this.startsWith(matchVal.toLowerCase(), v.toLowerCase())) {
                        return index;
                    }
                });
                if (listValue == null) {
                    return { value: undefined };
                }
                if (placeholderChar == 'a' || placeholderChar == 'A') {
                    ctorArgs[ctorIndex] += listValue * 12;
                }
                else {
                    ctorArgs[ctorIndex] = listValue;
                }
            }
            else if (indexEntry) {
                var value = parseFloat(matchVal);
                var mapEntry = this_1.parseDateMap[indexEntry];
                if (this_1.isList(mapEntry)) {
                    ctorArgs[mapEntry[0]] += value - mapEntry[1];
                }
                else {
                    ctorArgs[mapEntry] += value;
                }
            }
        };
        var this_1 = this;
        for (var i = 1; i < reIndex; i++) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        var d = new Date(ctorArgs[0], ctorArgs[1], ctorArgs[2], ctorArgs[3], ctorArgs[4], ctorArgs[5], ctorArgs[6]);
        return d;
    };
    DateUtil.prototype.today = function () {
        return new Date();
    };
    DateUtil.prototype.parse = function (value) {
        var timestamp = typeof value == 'number' ? value : Date.parse(value);
        return isNaN(timestamp) ? null : new Date(timestamp);
    };
    DateUtil.prototype.getYear = function (date) {
        return date.getFullYear();
    };
    DateUtil.prototype.getMonth = function (date) {
        return date.getMonth();
    };
    DateUtil.prototype.getDate = function (date) {
        return date.getDate();
    };
    DateUtil.prototype.getHours = function (date) {
        return date.getHours();
    };
    DateUtil.prototype.getMinutes = function (date) {
        return date.getMinutes();
    };
    DateUtil.prototype.getSeconds = function (date) {
        return date.getSeconds();
    };
    DateUtil.prototype.createDate = function (year, month, date, hours, minutes, seconds) {
        // Check for invalid month and date (except upper bound on date which we have to check after
        // creating the Date).
        if (month < 0 || month > 11 || date < 1) {
            return null;
        }
        var result = this._createDateWithOverflow(year, month, date, hours, minutes, seconds);
        // Check that the date wasn't above the upper bound for the month, causing the month to
        // overflow.
        if (result.getMonth() != month) {
            return null;
        }
        return result;
    };
    DateUtil.prototype.clone = function (date) {
        return this.createDate(this.getYear(date), this.getMonth(date), this.getDate(date), this.getHours(date), this.getMinutes(date), this.getSeconds(date));
    };
    DateUtil.prototype.getNumDaysInMonth = function (date) {
        return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0, 0, 0, 0));
    };
    DateUtil.prototype.addCalendarYears = function (date, years) {
        return this.addCalendarMonths(date, years * 12);
    };
    DateUtil.prototype.addCalendarMonths = function (date, months) {
        var newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date), this.getHours(date), this.getMinutes(date), this.getSeconds(date));
        // It's possible to wind up in the wrong month if the original month has more days than the new
        // month. In this case we want to go to the last day of the desired month.
        // Note: the additional + 12 % 12 ensures we end up with a positive number, since JS % doesn't
        // guarantee this.
        if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
            newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0, this.getHours(newDate), this.getMinutes(newDate), this.getSeconds(newDate));
        }
        return newDate;
    };
    DateUtil.prototype.addCalendarDays = function (date, days) {
        return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days, this.getHours(date), this.getMinutes(date), this.getSeconds(date));
    };
    DateUtil.prototype.addCalendarHours = function (date, hours) {
        return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date), this.getHours(date) + hours, this.getMinutes(date), this.getSeconds(date));
    };
    DateUtil.prototype.addCalendarMinutes = function (date, minutes) {
        return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date), this.getHours(date), this.getMinutes(date) + minutes, this.getSeconds(date));
    };
    DateUtil.prototype.getISODateString = function (date) {
        return [
            date.getUTCFullYear(),
            this._2digit(date.getUTCMonth() + 1),
            this._2digit(date.getUTCDate())
        ].join('-');
    };
    /** Creates a date but allows the month and date to overflow. */
    DateUtil.prototype._createDateWithOverflow = function (year, month, date, hours, minutes, seconds) {
        var result = new Date(year, month, date, hours, minutes, seconds);
        // We need to correct for the fact that JS native Date treats years in range [0, 99] as
        // abbreviations for 19xx.
        if (year >= 0 && year < 100) {
            result.setFullYear(this.getYear(result) - 1900);
        }
        return result;
    };
    /**
     * Pads a number to make it two digits.
     * @param n The number to pad.
     * @returns The padded number.
     */
    DateUtil.prototype._2digit = function (n) {
        return ('00' + n).slice(-2);
    };
    DateUtil.prototype.compareDate = function (first, second) {
        return this.getYear(first) - this.getYear(second) ||
            this.getMonth(first) - this.getMonth(second) ||
            this.getDate(first) - this.getDate(second);
    };
    /**
     * Gets the first day of the month for the given date's month.
     * @param {Date} date
     * @returns {Date}
     */
    DateUtil.prototype.getFirstDateOfWeek = function (date, firstDayOfWeek) {
        var day = date.getDate() - ((7 + date.getDay() - firstDayOfWeek) % 7);
        return new Date(date.getFullYear(), date.getMonth(), day, date.getHours(), date.getMinutes());
    };
    /**
     * Gets the first day of the month for the given date's month.
     * @param {Date} date
     * @returns {Date}
     */
    DateUtil.prototype.getFirstDateOfMonth = function (date) {
        return new Date(date.getFullYear(), date.getMonth(), 1);
    };
    /**
     * Gets the number of days in the month for the given date's month.
     * @param date
     * @returns {number}
     */
    DateUtil.prototype.getNumberOfDaysInMonth = function (date) {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };
    /**
     * Get an arbitrary date in the month after the given date's month.
     * @param date
     * @returns {Date}
     */
    DateUtil.prototype.getDateInNextMonth = function (date) {
        return new Date(date.getFullYear(), date.getMonth() + 1, 1, date.getHours(), date.getMinutes());
    };
    /**
     * Get an arbitrary date in the month before the given date's month.
     * @param date
     * @returns {Date}
     */
    DateUtil.prototype.getDateInPreviousMonth = function (date) {
        return new Date(date.getFullYear(), date.getMonth() - 1, 1, date.getHours(), date.getMinutes());
    };
    /**
     * Gets whether two dates have the same year.
     * @param {Date} d1
     * @param {Date} d2
     * @returns {boolean}
     */
    DateUtil.prototype.isSameYear = function (d1, d2) {
        return d1 && d2 && d1.getFullYear() === d2.getFullYear();
    };
    /**
     * Gets whether two dates have the same month and year.
     * @param {Date} d1
     * @param {Date} d2
     * @returns {boolean}
     */
    DateUtil.prototype.isSameMonthAndYear = function (d1, d2) {
        return d1 && d2 && d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth();
    };
    /**
     * Gets whether two dates are the same day (not not necesarily the same time).
     * @param {Date} d1
     * @param {Date} d2
     * @returns {boolean}
     */
    DateUtil.prototype.isSameDay = function (d1, d2) {
        return d1 && d2 && d1.getDate() == d2.getDate() && this.isSameMonthAndYear(d1, d2);
    };
    /**
     * Gets whether two dates are the same hours.
     * @param {Date} d1
     * @param {Date} d2
     * @returns {boolean}
     */
    DateUtil.prototype.isSameHour = function (d1, d2) {
        return d1 && d2 && d1.getHours() == d2.getHours() && this.isSameDay(d1, d2);
    };
    /**
     * Gets whether two dates are the same minutes.
     * @param {Date} d1
     * @param {Date} d2
     * @returns {boolean}
     */
    DateUtil.prototype.isSameMinute = function (d1, d2) {
        return d1 && d2 && d1.getMinutes() == d2.getMinutes() && this.isSameHour(d1, d2);
    };
    /**
     * Gets whether a date is in the month immediately after some date.
     * @param {Date} startDate The date from which to compare.
     * @param {Date} endDate The date to check.
     * @returns {boolean}
     */
    DateUtil.prototype.isInNextMonth = function (startDate, endDate) {
        var nextMonth = this.getDateInNextMonth(startDate);
        return this.isSameMonthAndYear(nextMonth, endDate);
    };
    /**
     * Gets whether a date is in the month immediately before some date.
     * @param {Date} startDate The date from which to compare.
     * @param {Date} endDate The date to check.
     * @returns {boolean}
     */
    DateUtil.prototype.isInPreviousMonth = function (startDate, endDate) {
        var previousMonth = this.getDateInPreviousMonth(startDate);
        return this.isSameMonthAndYear(endDate, previousMonth);
    };
    /**
     * Gets the midpoint between two dates.
     * @param {Date} d1
     * @param {Date} d2
     * @returns {Date}
     */
    DateUtil.prototype.getDateMidpoint = function (d1, d2) {
        return this.createDateAtMidnight((d1.getTime() + d2.getTime()) / 2);
    };
    /**
     * Gets the week of the month that a given date occurs in.
     * @param {Date} date
     * @returns {number} Index of the week of the month (zero-based).
     */
    DateUtil.prototype.getWeekOfMonth = function (date) {
        var firstDayOfMonth = this.getFirstDateOfMonth(date);
        return Math.floor((firstDayOfMonth.getDay() + date.getDate() - 1) / 7);
    };
    /**
     * Gets a new date incremented by the given number of minutes. Number of minutes can be negative.
     * @param {Date} date
     * @param {number} numberOfMinutes
     * @returns {Date}
     */
    DateUtil.prototype.incrementMinutes = function (date, numberOfMinutes) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes() + numberOfMinutes);
    };
    /**
     * Gets a new date incremented by the given number of hours. Number of hours can be negative.
     * @param {Date} date
     * @param {number} numberOfHours
     * @returns {Date}
     */
    DateUtil.prototype.incrementHours = function (date, numberOfHours) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours() + numberOfHours, date.getMinutes());
    };
    /**
     * Gets a new date incremented by the given number of days. Number of days can be negative.
     * @param {Date} date
     * @param {number} numberOfDays
     * @returns {Date}
     */
    DateUtil.prototype.incrementDays = function (date, numberOfDays) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate() + numberOfDays, date.getHours(), date.getMinutes());
    };
    /**
     * Gets a new date incremented by the given number of months. Number of months can be negative.
     * If the date of the given month does not match the target month, the date will be set to the
     * last day of the month.
     * @param {Date} date
     * @param {number} numberOfMonths
     * @returns {Date}
     */
    DateUtil.prototype.incrementMonths = function (date, numberOfMonths) {
        // If the same date in the target month does not actually exist, the Date object will
        // automatically advance *another* month by the number of missing days.
        // For example, if you try to go from Jan. 30 to Feb. 30, you'll end up on March 2.
        // So, we check if the month overflowed and go to the last day of the target month instead.
        var dateInTargetMonth = new Date(date.getFullYear(), date.getMonth() + numberOfMonths, 1, date.getHours(), date.getMinutes());
        var numberOfDaysInMonth = this.getNumberOfDaysInMonth(dateInTargetMonth);
        if (numberOfDaysInMonth < date.getDate()) {
            dateInTargetMonth.setDate(numberOfDaysInMonth);
        }
        else {
            dateInTargetMonth.setDate(date.getDate());
        }
        return dateInTargetMonth;
    };
    /**
     * Get the integer distance between two months. This *only* considers the month and year
     * portion of the Date instances.
     *
     * @param {Date} start
     * @param {Date} end
     * @returns {number} Number of months between `start` and `end`. If `end` is before `start`
     *     chronologically, this number will be negative.
     */
    DateUtil.prototype.getMonthDistance = function (start, end) {
        return (12 * (end.getFullYear() - start.getFullYear())) + (end.getMonth() - start.getMonth());
    };
    /**
     * Gets the last day of the month for the given date.
     * @param {Date} date
     * @returns {Date}
     */
    DateUtil.prototype.getLastDateOfMonth = function (date) {
        return new Date(date.getFullYear(), date.getMonth(), this.getNumberOfDaysInMonth(date), date.getHours(), date.getMinutes());
    };
    /**
     * Checks whether a date is valid.
     * @param {Date} date
     * @return {boolean} Whether the date is a valid Date.
     */
    DateUtil.prototype.isValidDate = function (date) {
        return date != null && date.getTime && !isNaN(date.getTime());
    };
    /**
     * Sets a date's time to midnight.
     * @param {Date} date
     */
    DateUtil.prototype.setDateTimeToMidnight = function (date) {
        if (this.isValidDate(date)) {
            date.setHours(0, 0, 0, 0);
        }
    };
    /**
     * Creates a date with the time set to midnight.
     * Drop-in replacement for two forms of the Date constructor:
     * 1. No argument for Date representing now.
     * 2. Single-argument value representing number of seconds since Unix Epoch
     * or a Date object.
     * @param {number|Date=} value
     * @return {Date} New date with time set to midnight.
     */
    DateUtil.prototype.createDateAtMidnight = function (value) {
        var date;
        if (!value) {
            date = new Date();
        }
        else {
            date = new Date(value);
        }
        this.setDateTimeToMidnight(date);
        return date;
    };
    /**
     * Checks if a date is within a min and max range, ignoring the time component.
     * If minDate or maxDate are not dates, they are ignored.
     * @param {Date} date
     * @param {Date} minDate
     * @param {Date} maxDate
     */
    DateUtil.prototype.isDateWithinRange = function (date, minDate, maxDate) {
        var dateAtMidnight = this.createDateAtMidnight(date);
        var minDateAtMidnight = this.isValidDate(minDate) ? this.createDateAtMidnight(minDate) : null;
        var maxDateAtMidnight = this.isValidDate(maxDate) ? this.createDateAtMidnight(maxDate) : null;
        return (!minDateAtMidnight || minDateAtMidnight <= dateAtMidnight) &&
            (!maxDateAtMidnight || maxDateAtMidnight >= dateAtMidnight);
    };
    /**
     * Checks if a date is within a min and max range.
     * If minDate or maxDate are not dates, they are ignored.
     * @param {Date} date
     * @param {Date} minDate
     * @param {Date} maxDate
     */
    DateUtil.prototype.isFullDateWithinRange = function (date, minDate, maxDate) {
        minDate = this.isValidDate(minDate) ? minDate : null;
        maxDate = this.isValidDate(maxDate) ? maxDate : null;
        return (!minDate || minDate <= date) &&
            (!maxDate || maxDate >= date);
    };
    /**
     * Gets a new date incremented by the given number of years. Number of years can be negative.
     * See `incrementMonths` for notes on overflow for specific dates.
     * @param {Date} date
     * @param {number} numberOfYears
     * @returns {Date}
     */
    DateUtil.prototype.incrementYears = function (date, numberOfYears) {
        return this.incrementMonths(date, numberOfYears * 12);
    };
    /**
     * Get the integer distance between two years. This *only* considers the year portion of the
     * Date instances.
     *
     * @param {Date} start
     * @param {Date} end
     * @returns {number} Number of months between `start` and `end`. If `end` is before `start`
     *     chronologically, this number will be negative.
     */
    DateUtil.prototype.getYearDistance = function (start, end) {
        return end.getFullYear() - start.getFullYear();
    };
    /**
     * Clamps a date between a minimum and a maximum date.
     * @param {Date} date Date to be clamped
     * @param {Date=} minDate Minimum date
     * @param {Date=} maxDate Maximum date
     * @return {Date}
     */
    DateUtil.prototype.clampDate = function (date, minDate, maxDate) {
        var boundDate = date;
        if (minDate && date < minDate) {
            boundDate = new Date(minDate.getTime());
        }
        if (maxDate && date > maxDate) {
            boundDate = new Date(maxDate.getTime());
        }
        return boundDate;
    };
    /**
     * Extracts and parses the timestamp from a DOM node.
     * @param  {HTMLElement} node Node from which the timestamp will be extracted.
     * @return {number} Time since epoch.
     */
    DateUtil.prototype.getTimestampFromNode = function (node) {
        if (node && node.hasAttribute('data-timestamp')) {
            return Number(node.getAttribute('data-timestamp'));
        }
    };
    /**
     * Checks if a month is within a min and max range, ignoring the date and time components.
     * If minDate or maxDate are not dates, they are ignored.
     * @param {Date} date
     * @param {Date} minDate
     * @param {Date} maxDate
     */
    DateUtil.prototype.isMonthWithinRange = function (date, minDate, maxDate) {
        var month = date.getMonth();
        var year = date.getFullYear();
        return (!minDate || minDate.getFullYear() < year || minDate.getMonth() <= month) &&
            (!maxDate || maxDate.getFullYear() > year || maxDate.getMonth() >= month);
    };
    /**
     * Compares two dates.
     * @param first The first date to compare.
     * @param second The second date to compare.
     * @returns 0 if the dates are equal, a number less than 0 if the first date is earlier,
     *     a number greater than 0 if the first date is later.
     */
    DateUtil.prototype.compareDateAndTime = function (first, second) {
        return this.getYear(first) - this.getYear(second) ||
            this.getMonth(first) - this.getMonth(second) ||
            this.getDate(first) - this.getDate(second) ||
            this.getHours(first) - this.getDate(second) ||
            this.getMinutes(first) - this.getDate(second) ||
            this.getSeconds(first) - this.getDate(second);
    };
    /**
     * Checks if two dates are equal.
     * @param first The first date to check.
     * @param second The second date to check.
     * @returns {boolean} Whether the two dates are equal.
     *     Null dates are considered equal to other null dates.
     */
    DateUtil.prototype.sameDate = function (first, second) {
        return first && second ? !this.compareDate(first, second) : first == second;
    };
    /**
     * Checks if two dates are equal.
     * @param first The first date to check.
     * @param second The second date to check.
     * @returns {boolean} Whether the two dates are equal.
     *     Null dates are considered equal to other null dates.
     */
    DateUtil.prototype.sameDateAndTime = function (first, second) {
        return first && second ? !this.compareDateAndTime(first, second) : first == second;
    };
    return DateUtil;
}());

//# sourceMappingURL=date-util.js.map

/***/ }),

/***/ "./node_modules/md2/datepicker/datepicker-animations.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fadeInContent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slideCalendar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");

/**
 * This animation fades in the background color and text content of the
 * select's options. It is time delayed to occur 100ms after the overlay
 * panel has transformed in.
 */
var fadeInContent = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('fadeInContent', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('showing', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ opacity: 1 })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])('void => showing', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ opacity: 0 }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])("150ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")
    ])
]);
var slideCalendar = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('slideCalendar', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])('* => left', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(180, Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* keyframes */])([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(100%)', offset: 0.5 }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(-100%)', offset: 0.51 }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(0)', offset: 1 })
        ]))
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])('* => right', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(180, Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* keyframes */])([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(-100%)', offset: 0.5 }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(100%)', offset: 0.51 }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(0)', offset: 1 })
        ]))
    ])
]);
//# sourceMappingURL=datepicker-animations.js.map

/***/ }),

/***/ "./node_modules/md2/datepicker/datepicker-toggle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Md2DatepickerToggle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datepicker__ = __webpack_require__("./node_modules/md2/datepicker/datepicker.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Md2DatepickerToggle = (function () {
    function Md2DatepickerToggle() {
    }
    Md2DatepickerToggle.prototype._open = function (event) {
        if (this.datepicker) {
            this.datepicker.open();
            event.stopPropagation();
        }
    };
    return Md2DatepickerToggle;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('md2DatepickerToggle'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__datepicker__["a" /* Md2Datepicker */])
], Md2DatepickerToggle.prototype, "datepicker", void 0);
Md2DatepickerToggle = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({selector: 'button[md2DatepickerToggle]',
        template: '',
        styles: [".md2-datepicker-toggle{display:inline-block;background:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iY3VycmVudENvbG9yIj48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE5IDNoLTFWMWgtMnYySDhWMUg2djJINWMtMS4xMSAwLTEuOTkuOS0xLjk5IDJMMyAxOWMwIDEuMS44OSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0wIDE2SDVWOGgxNHYxMXpNNyAxMGg1djVIN3oiLz48L3N2Zz4=) no-repeat;background-size:contain;height:24px;width:24px;border:none;outline:0;vertical-align:middle}.md2-datepicker-toggle:not([disabled]){cursor:pointer} /*# sourceMappingURL=datepicker-toggle.css.map */ "],
        host: {
            'type': 'button',
            'class': 'md2-datepicker-toggle',
            'aria-label': 'Open calendar',
            '(click)': '_open($event)',
        },
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
    })
], Md2DatepickerToggle);

//# sourceMappingURL=datepicker-toggle.js.map

/***/ }),

/***/ "./node_modules/md2/datepicker/datepicker.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Md2DateChange */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Md2DatepickerContent; });
/* unused harmony export MD2_DATEPICKER_VALUE_ACCESSOR */
/* unused harmony export MD2_DATEPICKER_VALIDATORS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Md2Datepicker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("./node_modules/md2/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_overlay_overlay__ = __webpack_require__("./node_modules/md2/core/overlay/overlay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_portal_portal__ = __webpack_require__("./node_modules/md2/core/portal/portal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_overlay_overlay_state__ = __webpack_require__("./node_modules/md2/core/overlay/overlay-state.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_rtl_dir__ = __webpack_require__("./node_modules/md2/core/rtl/dir.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_keyboard_keycodes__ = __webpack_require__("./node_modules/md2/core/keyboard/keycodes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__calendar__ = __webpack_require__("./node_modules/md2/datepicker/calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__date_locale__ = __webpack_require__("./node_modules/md2/datepicker/date-locale.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__date_util__ = __webpack_require__("./node_modules/md2/datepicker/date-util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_first__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/first.js");
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












/** Change event object emitted by Md2Select. */
var Md2DateChange = (function () {
    function Md2DateChange(source, value) {
        this.source = source;
        this.value = value;
    }
    return Md2DateChange;
}());

/** Used to generate a unique ID for each datepicker instance. */
var datepickerUid = 0;
/**
 * Component used as the content for the datepicker dialog and popup. We use this instead of using
 * Md2Calendar directly as the content so we can control the initial focus. This also gives us a
 * place to put additional features of the popup that are not part of the calendar itself in the
 * future. (e.g. confirmation buttons).
 * @docs-private
 */
var Md2DatepickerContent = (function () {
    function Md2DatepickerContent() {
    }
    /**
     * Handles keydown event on datepicker content.
     * @param event The event.
     */
    Md2DatepickerContent.prototype._handleKeydown = function (event) {
        switch (event.keyCode) {
            case __WEBPACK_IMPORTED_MODULE_7__core_keyboard_keycodes__["g" /* ESCAPE */]:
                this.datepicker.close();
                break;
            default:
                /* Return so that we don't preventDefault on keys that are not explicitly handled. */
                return;
        }
        event.preventDefault();
    };
    return Md2DatepickerContent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_8__calendar__["a" /* Md2Calendar */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8__calendar__["a" /* Md2Calendar */])
], Md2DatepickerContent.prototype, "_calendar", void 0);
Md2DatepickerContent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({selector: 'md2-datepicker-content',
        template: "<md2-calendar cdkTrapFocus [id]=\"datepicker.id\" [attr.mode]=\"datepicker.mode\" [startAt]=\"datepicker.startAt\" [startView]=\"datepicker.startView\" [type]=\"datepicker.type\" [timeInterval]=\"datepicker.timeInterval\" [minDate]=\"datepicker._minDate\" [maxDate]=\"datepicker._maxDate\" [dateFilter]=\"datepicker._dateFilter\" [selected]=\"datepicker._selected\" (selectedChange)=\"datepicker._selectAndClose($event)\"></md2-calendar>",
        styles: [".md2-datepicker-content{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);display:block;background-color:#fff;border-radius:2px;overflow:hidden}.md2-calendar{width:296px;height:405px}.md2-calendar[mode=landscape]{width:446px;height:328px}@media (min-width:480px){.md2-calendar[mode=auto]{width:446px;height:328px}}.md2-datepicker-content-touch{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12);display:block;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.48}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.6)} /*# sourceMappingURL=datepicker-content.css.map */ "],
        host: {
            'class': 'md2-datepicker-content',
            '[class.md2-datepicker-content-touch]': 'datepicker?.touchUi',
            '(keydown)': '_handleKeydown($event)',
        },
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
    })
], Md2DatepickerContent);

var MD2_DATEPICKER_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return Md2Datepicker; }),
    multi: true
};
var MD2_DATEPICKER_VALIDATORS = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALIDATORS"],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return Md2Datepicker; }),
    multi: true
};
/* Component responsible for managing the datepicker popup/dialog. */
var Md2Datepicker = (function () {
    function Md2Datepicker(_element, _overlay, _ngZone, _viewContainerRef, _locale, _util, _dir) {
        var _this = this;
        this._element = _element;
        this._overlay = _overlay;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._locale = _locale;
        this._util = _util;
        this._dir = _dir;
        this._onChange = function () { };
        this._onTouched = function () { };
        this._validatorOnChange = function () { };
        this._inputFocused = false;
        /** The view that the calendar should start in. */
        this.startView = 'month';
        /**
         * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
         * than a popup and elements have more padding to allow for bigger touch targets.
         */
        this.touchUi = false;
        this.tabindex = 0;
        this.mode = 'auto';
        this.timeInterval = 1;
        this._type = 'date';
        this._required = false;
        this._disabled = false;
        this._inputValue = '';
        /** Event emitted when the select has been opened. */
        this.onOpen = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** Event emitted when the select has been closed. */
        this.onClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** Event emitted when the selected date has been changed by the user. */
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** Emits new selected date when selected date changes. */
        this.selectedChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** Whether the calendar is open. */
        this.opened = false;
        /** The currently selected date. */
        this._selected = null;
        /** The form control validator for the min date. */
        this._minValidator = function (control) {
            return (!_this.min || !control.value ||
                _this._util.compareDate(_this.min, control.value) <= 0) ?
                null : { 'md2DatepickerMin': { 'min': _this.min, 'actual': control.value } };
        };
        /** The form control validator for the max date. */
        this._maxValidator = function (control) {
            return (!_this.max || !control.value ||
                _this._util.compareDate(_this.max, control.value) >= 0) ?
                null : { 'md2DatepickerMax': { 'max': _this.max, 'actual': control.value } };
        };
        /** The form control validator for the date filter. */
        this._filterValidator = function (control) {
            return !_this._dateFilter || !control.value || _this._dateFilter(control.value) ?
                null : { 'md2DatepickerFilter': true };
        };
        /** The combined form control validator for this input. */
        this._validator = __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([this._minValidator, this._maxValidator, this._filterValidator]);
        this.id = (this.id) ? this.id : "md2-datepicker-" + datepickerUid++;
    }
    Object.defineProperty(Md2Datepicker.prototype, "type", {
        get: function () { return this._type; },
        set: function (value) {
            this._type = value || 'date';
            this._inputValue = this._formatDate(this._value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Datepicker.prototype, "format", {
        get: function () {
            return this._format || (this.type === 'month' ? 'MMMM y' : this.type === 'date' ?
                'dd/MM/y' : this.type === 'time' ? 'HH:mm' : this.type === 'datetime' ?
                'dd/MM/y HH:mm' : 'dd/MM/y');
        },
        set: function (value) {
            if (this._format !== value) {
                this._format = value;
                this._inputValue = this._formatDate(this._value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Datepicker.prototype, "min", {
        /** The minimum valid date. */
        get: function () { return this._minDate; },
        set: function (value) {
            this._minDate = value;
            this._validatorOnChange();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Datepicker.prototype, "max", {
        /** The maximum valid date. */
        get: function () { return this._maxDate; },
        set: function (value) {
            this._maxDate = value;
            this._validatorOnChange();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Datepicker.prototype, "dateFilter", {
        set: function (filter) {
            this._dateFilter = filter;
            this._validatorOnChange();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Datepicker.prototype, "required", {
        get: function () { return this._required; },
        set: function (value) { this._required = Object(__WEBPACK_IMPORTED_MODULE_2__core__["k" /* coerceBooleanProperty */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Datepicker.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = Object(__WEBPACK_IMPORTED_MODULE_2__core__["k" /* coerceBooleanProperty */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Datepicker.prototype, "value", {
        get: function () { return this._value; },
        set: function (value) {
            var _this = this;
            this._value = this.coerceDateProperty(value);
            this._selected = this._value;
            this.startAt = this._value;
            setTimeout(function () {
                _this._inputValue = _this._formatDate(_this._value);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Datepicker.prototype, "openOnFocus", {
        get: function () { return this._openOnFocus; },
        set: function (value) { this._openOnFocus = Object(__WEBPACK_IMPORTED_MODULE_2__core__["k" /* coerceBooleanProperty */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Datepicker.prototype, "isOpen", {
        set: function (value) {
            if (value && !this.opened) {
                this.open();
            }
        },
        enumerable: true,
        configurable: true
    });
    Md2Datepicker.prototype.ngOnDestroy = function () {
        this.close();
        if (this._popupRef) {
            this._popupRef.dispose();
        }
        if (this._dialogRef) {
            this._dialogRef.dispose();
        }
        if (this._inputSubscription) {
            this._inputSubscription.unsubscribe();
        }
    };
    Md2Datepicker.prototype.registerOnValidatorChange = function (fn) {
        this._validatorOnChange = fn;
    };
    Md2Datepicker.prototype.validate = function (c) {
        return this._validator ? this._validator(c) : null;
    };
    Md2Datepicker.prototype.writeValue = function (value) {
        this.value = value;
    };
    Md2Datepicker.prototype.registerOnChange = function (fn) { this._onChange = fn; };
    Md2Datepicker.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
    Md2Datepicker.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    Md2Datepicker.prototype._handleFocus = function () {
        this._inputFocused = true;
        if (!this.opened && this.openOnFocus) {
            this.open();
        }
    };
    Md2Datepicker.prototype._handleBlur = function (event) {
        this._inputFocused = false;
        if (!this.opened) {
            this._onTouched();
        }
        var el = event.target;
        var date = this._util.parseDate(el.value, this.format);
        if (!date) {
            date = this._util.parse(el.value);
        }
        if (date != null && date.getTime && !isNaN(date.getTime())) {
            var d = new Date(this.value);
            if (this.type !== 'time') {
                d.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
            }
            if (this.type !== 'date') {
                d.setHours(date.getHours(), date.getMinutes());
            }
            if (!this._util.isSameMinute(this.value, d)) {
                this.value = this._util.createDate(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds());
                this._emitChangeEvent();
            }
        }
        else {
            if (this.value) {
                this.value = null;
                this._emitChangeEvent();
            }
        }
    };
    Md2Datepicker.prototype.coerceDateProperty = function (value) {
        var v = null;
        if (value != null && value.getTime && !isNaN(value.getTime())) {
            v = value;
        }
        else {
            if (value && this.type === 'time') {
                var t = value + '';
                v = new Date();
                v.setHours(parseInt(t.substring(0, 2)));
                v.setMinutes(parseInt(t.substring(3, 5)));
            }
            else {
                var timestamp = Date.parse(value);
                v = isNaN(timestamp) ? null : new Date(timestamp);
            }
        }
        var d = v ? this._util.createDate(v.getFullYear(), v.getMonth(), v.getDate(), v.getHours(), v.getMinutes(), v.getSeconds()) : null;
        return d;
    };
    /**
     * format date
     * @param date Date Object
     * @return string with formatted date
     */
    Md2Datepicker.prototype._formatDate = function (date) {
        if (!this.format || !date) {
            return '';
        }
        var format = this.format;
        /* Years */
        if (format.indexOf('yy') > -1) {
            format = format.replace('yy', ('00' + this._util.getYear(date)).slice(-2));
        }
        else if (format.indexOf('y') > -1) {
            format = format.replace('y', '' + this._util.getYear(date));
        }
        /* Days */
        if (format.indexOf('dd') > -1) {
            format = format.replace('dd', ('0' + this._util.getDate(date)).slice(-2));
        }
        else if (format.indexOf('d') > -1) {
            format = format.replace('d', '' + this._util.getDate(date));
        }
        /* Hours */
        if (/[aA]/.test(format)) {
            /* 12-hour */
            if (format.indexOf('HH') > -1) {
                format = format.replace('HH', ('0' + this._getHours12(this._util.getHours(date))).slice(-2));
            }
            else if (format.indexOf('H') > -1) {
                format = format.replace('H', '' + this._getHours12(this._util.getHours(date)));
            }
            format = format.replace('A', ((this._util.getHours(date) < 12) ? 'AM' : 'PM'))
                .replace('a', ((this._util.getHours(date) < 12) ? 'am' : 'pm'));
        }
        else {
            /* 24-hour */
            if (format.indexOf('HH') > -1) {
                format = format.replace('HH', ('0' + this._util.getHours(date)).slice(-2));
            }
            else if (format.indexOf('H') > -1) {
                format = format.replace('H', '' + this._util.getHours(date));
            }
        }
        /* Minutes */
        if (format.indexOf('mm') > -1) {
            format = format.replace('mm', ('0' + this._util.getMinutes(date)).slice(-2));
        }
        else if (format.indexOf('m') > -1) {
            format = format.replace('m', '' + this._util.getMinutes(date));
        }
        /* Seconds */
        if (format.indexOf('ss') > -1) {
            format = format.replace('ss', ('0' + this._util.getSeconds(date)).slice(-2));
        }
        else if (format.indexOf('s') > -1) {
            format = format.replace('s', '' + this._util.getSeconds(date));
        }
        /* Months */
        if (format.indexOf('MMMM') > -1) {
            format = format.replace('MMMM', this._locale.getMonthNames('long')[this._util.getMonth(date)]);
        }
        else if (format.indexOf('MMM') > -1) {
            format = format.replace('MMM', this._locale.getMonthNames('short')[this._util.getMonth(date)]);
        }
        else if (format.indexOf('MM') > -1) {
            format = format.replace('MM', ('0' + (this._util.getMonth(date) + 1)).slice(-2));
        }
        else if (format.indexOf('M') > -1) {
            format = format.replace('M', '' + (this._util.getMonth(date) + 1));
        }
        return format;
    };
    /**
     * Get an hour of the date in the 12-hour format
     * @param date Date Object
     * @return hour of the date in the 12-hour format
     */
    Md2Datepicker.prototype._getHours12 = function (hours) {
        if (hours == 0) {
            hours = 12;
        }
        else if (hours > 12) {
            hours -= 12;
        }
        return hours;
    };
    /** Selects the given date and closes the currently open popup or dialog. */
    Md2Datepicker.prototype._selectAndClose = function (date) {
        var oldValue = this._selected;
        this.value = date;
        if (!this._util.sameDateAndTime(oldValue, this._selected)) {
            this._emitChangeEvent();
        }
        this.close();
    };
    /** Emits an event when the user selects a date. */
    Md2Datepicker.prototype._emitChangeEvent = function () {
        this._onChange(this.value);
        this.change.emit(new Md2DateChange(this, this.value));
    };
    /** Open the calendar. */
    Md2Datepicker.prototype.open = function () {
        if (this.opened) {
            return;
        }
        if (!this._calendarPortal) {
            this._calendarPortal = new __WEBPACK_IMPORTED_MODULE_4__core_portal_portal__["b" /* ComponentPortal */](Md2DatepickerContent, this._viewContainerRef);
        }
        this.touchUi ? this._openAsDialog() : this._openAsPopup();
        this.opened = true;
        this.onOpen.emit();
    };
    /** Close the calendar. */
    Md2Datepicker.prototype.close = function () {
        if (!this.opened) {
            return;
        }
        if (this._popupRef && this._popupRef.hasAttached()) {
            this._popupRef.detach();
        }
        if (this._dialogRef && this._dialogRef.hasAttached()) {
            this._dialogRef.detach();
        }
        if (this._calendarPortal && this._calendarPortal.isAttached) {
            this._calendarPortal.detach();
        }
        this.opened = false;
        this.onClose.emit();
    };
    /** Open the calendar as a dialog. */
    Md2Datepicker.prototype._openAsDialog = function () {
        var _this = this;
        if (!this._dialogRef) {
            this._createDialog();
        }
        if (!this._dialogRef.hasAttached()) {
            var componentRef = this._dialogRef.attach(this._calendarPortal);
            componentRef.instance.datepicker = this;
        }
        this._dialogRef.backdropClick().subscribe(function () { return _this.close(); });
    };
    /** Open the calendar as a popup. */
    Md2Datepicker.prototype._openAsPopup = function () {
        var _this = this;
        if (!this._popupRef) {
            this._createPopup();
        }
        if (!this._popupRef.hasAttached()) {
            var componentRef = this._popupRef.attach(this._calendarPortal);
            componentRef.instance.datepicker = this;
            /* Update the position once the calendar has rendered. */
            this._ngZone.onStable.first().subscribe(function () { return _this._popupRef.updatePosition(); });
        }
        this._popupRef.backdropClick().subscribe(function () { return _this.close(); });
    };
    /** Create the dialog. */
    Md2Datepicker.prototype._createDialog = function () {
        var overlayState = new __WEBPACK_IMPORTED_MODULE_5__core_overlay_overlay_state__["a" /* OverlayState */]();
        overlayState.positionStrategy = this._overlay.position().global()
            .centerHorizontally()
            .centerVertically();
        overlayState.hasBackdrop = true;
        overlayState.backdropClass = 'cdk-overlay-dark-backdrop';
        overlayState.direction = this._dir ? this._dir.value : 'ltr';
        this._dialogRef = this._overlay.create(overlayState);
    };
    /** Create the popup. */
    Md2Datepicker.prototype._createPopup = function () {
        var overlayState = new __WEBPACK_IMPORTED_MODULE_5__core_overlay_overlay_state__["a" /* OverlayState */]();
        overlayState.positionStrategy = this._createPopupPositionStrategy();
        overlayState.hasBackdrop = true;
        overlayState.backdropClass = 'cdk-overlay-transparent-backdrop';
        overlayState.direction = this._dir ? this._dir.value : 'ltr';
        overlayState.scrollStrategy = this._overlay.scrollStrategies.reposition();
        this._popupRef = this._overlay.create(overlayState);
    };
    /** Create the popup PositionStrategy. */
    Md2Datepicker.prototype._createPopupPositionStrategy = function () {
        return this._overlay.position()
            .connectedTo(this._element, { originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' })
            .withFallbackPosition({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
            .withFallbackPosition({ originX: 'end', originY: 'bottom' }, { overlayX: 'end', overlayY: 'top' })
            .withFallbackPosition({ originX: 'end', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' });
    };
    return Md2Datepicker;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Date)
], Md2Datepicker.prototype, "startAt", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Md2Datepicker.prototype, "startView", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], Md2Datepicker.prototype, "touchUi", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], Md2Datepicker.prototype, "tabindex", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Md2Datepicker.prototype, "mode", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Md2Datepicker.prototype, "placeholder", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], Md2Datepicker.prototype, "timeInterval", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Md2Datepicker.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [String])
], Md2Datepicker.prototype, "type", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [String])
], Md2Datepicker.prototype, "format", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Date),
    __metadata("design:paramtypes", [Date])
], Md2Datepicker.prototype, "min", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Date),
    __metadata("design:paramtypes", [Date])
], Md2Datepicker.prototype, "max", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function])
], Md2Datepicker.prototype, "dateFilter", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], Md2Datepicker.prototype, "required", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], Md2Datepicker.prototype, "disabled", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Date])
], Md2Datepicker.prototype, "value", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Md2Datepicker.prototype, "openOnFocus", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Md2Datepicker.prototype, "isOpen", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], Md2Datepicker.prototype, "onOpen", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], Md2Datepicker.prototype, "onClose", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], Md2Datepicker.prototype, "change", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], Md2Datepicker.prototype, "selectedChanged", void 0);
Md2Datepicker = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({selector: 'md2-datepicker',
        template: "<div class=\"md2-datepicker-trigger\"><button type=\"button\" class=\"md2-datepicker-button\" tabindex=\"-1\" (click)=\"open()\" [ngSwitch]=\"type\"><svg *ngSwitchCase=\"'time'\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z\"></path></svg> <svg *ngSwitchCase=\"'datetime'\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16A7,7 0 0,1 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V11.1C22.24,12.36 23,14.09 23,16A7,7 0 0,1 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15A4.85,4.85 0 0,0 11.15,16C11.15,18.68 13.32,20.85 16,20.85A4.85,4.85 0 0,0 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z\"></path></svg> <svg *ngSwitchDefault width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z\"></path></svg></button><div class=\"md2-datepicker-input\" [class.md2-datepicker-input-focused]=\"_inputFocused\"><span class=\"md2-datepicker-placeholder\" [class.md2-floating-placeholder]=\"value || _inputFocused\">{{ placeholder }}</span> <input #input type=\"text\" class=\"md2-datepicker-value\" [tabindex]=\"tabindex\" [disabled]=\"disabled\" autocomplete=\"off\" [value]=\"_inputValue\" (change)=\"$event.stopPropagation()\" (click)=\"_handleFocus()\" (focus)=\"_handleFocus()\" (blur)=\"_handleBlur($event)\"> <span class=\"md2-datepicker-arrow\" (click)=\"open()\"></span></div></div>",
        styles: ["md2-datepicker{position:relative;display:inline-block;min-width:175px;outline:0;backface-visibility:hidden}md2-datepicker.md2-datepicker-disabled{pointer-events:none;cursor:default}.md2-datepicker-trigger{display:block;padding:18px 0 4px 46px;white-space:nowrap}.md2-datepicker-button{position:absolute;top:13px;left:0;display:inline-block;height:40px;width:40px;padding:8px;line-height:24px;color:rgba(0,0,0,.54);fill:currentColor;border:0;border-radius:50%;outline:0;user-select:none;cursor:pointer;box-sizing:border-box;background:0 0;vertical-align:middle;align-items:center;text-align:center}.md2-datepicker-button:focus{background-color:rgba(158,158,158,.2)}.md2-datepicker-disabled .md2-datepicker-button{color:rgba(0,0,0,.38)}.md2-datepicker-input{color:rgba(0,0,0,.38);border-bottom:1px solid rgba(0,0,0,.12);display:flex;justify-content:space-between;align-items:center;height:30px;min-width:168px;line-height:22px;position:relative;padding-right:20px;box-sizing:border-box}[aria-disabled=true] .md2-datepicker-input{background-image:linear-gradient(to right,rgba(0,0,0,.26) 0,rgba(0,0,0,.26) 33%,transparent 0);background-size:4px 1px;background-repeat:repeat-x;border-color:transparent;background-position:0 bottom;cursor:default;user-select:none}.md2-datepicker-input.md2-datepicker-input-focused{color:#106cc8;border-color:#106cc8}md2-datepicker.ng-invalid.ng-touched:not(.md2-datepicker-disabled) .md2-datepicker-input{color:#f44336;border-color:#f44336}.md2-datepicker-placeholder{position:absolute;right:18px;bottom:100%;left:0;padding:0 2px;transform:translate3d(0,26px,0) scale(1);transform-origin:left top;white-space:nowrap;overflow-x:hidden;text-overflow:ellipsis;transition:all 150ms cubic-bezier(.25,.8,.25,1)}.md2-datepicker-placeholder.md2-floating-placeholder{left:-2px;text-align:left;transform:translate3d(0,6px,0) scale(.75)}[dir=rtl] .md2-datepicker-placeholder{right:0;left:18px;transform-origin:right top}[dir=rtl] .md2-datepicker-placeholder.md2-floating-placeholder{right:-2px;text-align:right}[aria-required=true] .md2-datepicker-placeholder::after{content:'*'}.md2-datepicker-value{position:relative;width:100%;white-space:nowrap;overflow-x:hidden;text-overflow:ellipsis;color:rgba(0,0,0,.87);border:0;outline:0;background:0 0}.md2-datepicker-disabled .md2-datepicker-value{color:rgba(0,0,0,.38)}[dir=rtl] .md2-datepicker-value{left:auto;right:0}.md2-datepicker-arrow{position:absolute;right:0;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px;color:rgba(0,0,0,.38)}.md2-datepicker-input-focused .md2-datepicker-arrow{color:#106cc8}md2-datepicker.ng-invalid.ng-touched:not(.md2-datepicker-disabled) .md2-datepicker-arrow{color:#f44336}.md2-calendar-years{position:absolute;top:10px;right:100%;bottom:10px;display:block;width:100%;line-height:40px;background:#fff;overflow-x:hidden;overflow-y:auto;transition:.3s}.md2-calendar-years.active{right:0}.md2-calendar-years .md2-calendar-years-content{display:flex;flex-direction:column;justify-content:center;min-height:100%}.md2-calendar-year{position:relative;display:block;margin:0 auto;padding:0;font-size:17px;font-weight:400;text-align:center;cursor:pointer}.md2-calendar-year.selected{color:#106cc8;font-size:26px;font-weight:500}.md2-datepicker-actions{text-align:right}.md2-datepicker-actions .md2-button{display:inline-block;min-width:64px;margin:4px 8px 8px 0;padding:0 12px;font-size:14px;color:#106cc8;line-height:36px;text-align:center;text-transform:uppercase;border-radius:2px;cursor:pointer;box-sizing:border-box;transition:all 450ms cubic-bezier(.23,1,.32,1)}.md2-datepicker-actions .md2-button:hover{background:#ebebeb} /*# sourceMappingURL=datepicker.css.map */ "],
        providers: [MD2_DATEPICKER_VALUE_ACCESSOR, MD2_DATEPICKER_VALIDATORS],
        host: {
            'role': 'datepicker',
            '[class.md2-datepicker-disabled]': 'disabled',
            '[class.md2-datepicker-opened]': 'opened',
            '[attr.aria-label]': 'placeholder',
            '[attr.aria-required]': 'required.toString()',
            '[attr.aria-disabled]': 'disabled.toString()',
        },
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
    }),
    __param(6, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
        __WEBPACK_IMPORTED_MODULE_3__core_overlay_overlay__["b" /* Overlay */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"],
        __WEBPACK_IMPORTED_MODULE_9__date_locale__["a" /* DateLocale */],
        __WEBPACK_IMPORTED_MODULE_10__date_util__["a" /* DateUtil */],
        __WEBPACK_IMPORTED_MODULE_6__core_rtl_dir__["a" /* Dir */]])
], Md2Datepicker);

//# sourceMappingURL=datepicker.js.map

/***/ }),

/***/ "./node_modules/md2/datepicker/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Md2DatepickerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("./node_modules/md2/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datepicker__ = __webpack_require__("./node_modules/md2/datepicker/datepicker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datepicker_toggle__ = __webpack_require__("./node_modules/md2/datepicker/datepicker-toggle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calendar__ = __webpack_require__("./node_modules/md2/datepicker/calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__month_view__ = __webpack_require__("./node_modules/md2/datepicker/month-view.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__year_view__ = __webpack_require__("./node_modules/md2/datepicker/year-view.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__calendar_body__ = __webpack_require__("./node_modules/md2/datepicker/calendar-body.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__clock__ = __webpack_require__("./node_modules/md2/datepicker/clock.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__date_locale__ = __webpack_require__("./node_modules/md2/datepicker/date-locale.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__date_util__ = __webpack_require__("./node_modules/md2/datepicker/date-util.js");
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var Md2DatepickerModule = (function () {
    function Md2DatepickerModule() {
    }
    return Md2DatepickerModule;
}());
Md2DatepickerModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__core__["f" /* OverlayModule */],
            __WEBPACK_IMPORTED_MODULE_2__core__["h" /* PortalModule */],
            __WEBPACK_IMPORTED_MODULE_2__core__["i" /* StyleModule */],
            __WEBPACK_IMPORTED_MODULE_2__core__["a" /* A11yModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__datepicker__["a" /* Md2Datepicker */],
            __WEBPACK_IMPORTED_MODULE_4__datepicker_toggle__["a" /* Md2DatepickerToggle */],
            __WEBPACK_IMPORTED_MODULE_5__calendar__["a" /* Md2Calendar */],
            __WEBPACK_IMPORTED_MODULE_8__calendar_body__["a" /* Md2CalendarBody */],
            __WEBPACK_IMPORTED_MODULE_5__calendar__["a" /* Md2Calendar */],
            __WEBPACK_IMPORTED_MODULE_6__month_view__["a" /* Md2MonthView */],
            __WEBPACK_IMPORTED_MODULE_7__year_view__["a" /* Md2YearView */],
            __WEBPACK_IMPORTED_MODULE_8__calendar_body__["a" /* Md2CalendarBody */],
            __WEBPACK_IMPORTED_MODULE_9__clock__["a" /* Md2Clock */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__datepicker__["a" /* Md2Datepicker */],
            __WEBPACK_IMPORTED_MODULE_3__datepicker__["b" /* Md2DatepickerContent */],
            __WEBPACK_IMPORTED_MODULE_4__datepicker_toggle__["a" /* Md2DatepickerToggle */],
            __WEBPACK_IMPORTED_MODULE_5__calendar__["a" /* Md2Calendar */],
            __WEBPACK_IMPORTED_MODULE_6__month_view__["a" /* Md2MonthView */],
            __WEBPACK_IMPORTED_MODULE_7__year_view__["a" /* Md2YearView */],
            __WEBPACK_IMPORTED_MODULE_8__calendar_body__["a" /* Md2CalendarBody */],
            __WEBPACK_IMPORTED_MODULE_9__clock__["a" /* Md2Clock */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__date_locale__["a" /* DateLocale */], __WEBPACK_IMPORTED_MODULE_11__date_util__["a" /* DateUtil */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__datepicker__["b" /* Md2DatepickerContent */]
        ]
    })
], Md2DatepickerModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/md2/datepicker/month-view.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Md2MonthView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__date_locale__ = __webpack_require__("./node_modules/md2/datepicker/date-locale.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__date_util__ = __webpack_require__("./node_modules/md2/datepicker/date-util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calendar_body__ = __webpack_require__("./node_modules/md2/datepicker/calendar-body.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_datetime_date_formats__ = __webpack_require__("./node_modules/md2/core/datetime/date-formats.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__datepicker_animations__ = __webpack_require__("./node_modules/md2/datepicker/datepicker-animations.js");
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






var DAYS_PER_WEEK = 7;
/**
 * An internal component used to display a single month in the datepicker.
 * @docs-private
 */
var Md2MonthView = (function () {
    function Md2MonthView(_locale, _util, _dateFormats) {
        this._locale = _locale;
        this._util = _util;
        this._dateFormats = _dateFormats;
        /** Emits when a new date is selected. */
        this.selectedChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        if (!this._dateFormats) {
            throw Error('MD_DATE_FORMATS');
        }
        var firstDayOfWeek = this._locale.getFirstDayOfWeek();
        var narrowWeekdays = this._locale.getDayOfWeekNames('narrow');
        var longWeekdays = this._locale.getDayOfWeekNames('long');
        // Rotate the labels for days of the week based on the configured first day of the week.
        var weekdays = longWeekdays.map(function (long, i) {
            return { long: long, narrow: narrowWeekdays[i] };
        });
        this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
        this._activeDate = this._util.today();
    }
    Object.defineProperty(Md2MonthView.prototype, "activeDate", {
        /**
         * The date to display in this month view (everything other than the month and year is ignored).
         */
        get: function () { return this._activeDate; },
        set: function (value) {
            var oldActiveDate = this._activeDate;
            this._activeDate = value || this._util.today();
            if (oldActiveDate && this._activeDate &&
                !this._util.isSameMonthAndYear(oldActiveDate, this._activeDate)) {
                this._init();
                if (this._util.isInNextMonth(oldActiveDate, this._activeDate)) {
                    this.calendarState('right');
                }
                else {
                    this.calendarState('left');
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2MonthView.prototype, "selected", {
        /** The currently selected date. */
        get: function () { return this._selected; },
        set: function (value) {
            this._selected = value;
            this._selectedDate = this._getDateInCurrentMonth(this.selected);
        },
        enumerable: true,
        configurable: true
    });
    Md2MonthView.prototype.ngAfterContentInit = function () {
        this._init();
    };
    /** Handles when a new date is selected. */
    Md2MonthView.prototype._dateSelected = function (date) {
        this.selectedChange.emit(this._util.createDate(this._util.getYear(this.activeDate), this._util.getMonth(this.activeDate), date, this._util.getHours(this.activeDate), this._util.getMinutes(this.activeDate), this._util.getSeconds(this.activeDate)));
    };
    /** Initializes this month view. */
    Md2MonthView.prototype._init = function () {
        this._selectedDate = this._getDateInCurrentMonth(this.selected);
        this._todayDate = this._getDateInCurrentMonth(this._util.today());
        var firstOfMonth = this._util.createDate(this._util.getYear(this.activeDate), this._util.getMonth(this.activeDate), 1, this._util.getHours(this.activeDate), this._util.getMinutes(this.activeDate), this._util.getSeconds(this.activeDate));
        this._firstWeekOffset =
            (DAYS_PER_WEEK + this._locale.getDayOfWeek(firstOfMonth) -
                this._locale.getFirstDayOfWeek()) % DAYS_PER_WEEK;
        this._createWeekCells();
    };
    /** Creates MdCalendarCells for the dates in this month. */
    Md2MonthView.prototype._createWeekCells = function () {
        var daysInMonth = this._util.getNumDaysInMonth(this.activeDate);
        var dateNames = this._locale.getDateNames();
        this._weeks = [[]];
        for (var i = 0, cell = this._firstWeekOffset; i < daysInMonth; i++, cell++) {
            if (cell == DAYS_PER_WEEK) {
                this._weeks.push([]);
                cell = 0;
            }
            var date = this._util.createDate(this._util.getYear(this.activeDate), this._util.getMonth(this.activeDate), i + 1, this._util.getHours(this.activeDate), this._util.getMinutes(this.activeDate), this._util.getSeconds(this.activeDate));
            var enabled = !this.dateFilter ||
                this.dateFilter(date);
            var ariaLabel = this._locale.format(date, this._dateFormats.display.dateA11yLabel);
            this._weeks[this._weeks.length - 1]
                .push(new __WEBPACK_IMPORTED_MODULE_3__calendar_body__["b" /* Md2CalendarCell */](i + 1, dateNames[i], ariaLabel, enabled));
        }
    };
    /**
     * Gets the date in this month that the given Date falls on.
     * Returns null if the given Date is in another month.
     */
    Md2MonthView.prototype._getDateInCurrentMonth = function (date) {
        return this._util.isSameMonthAndYear(date, this.activeDate) ?
            this._util.getDate(date) : null;
    };
    Md2MonthView.prototype.calendarState = function (direction) {
        this._calendarState = direction;
    };
    Md2MonthView.prototype._calendarStateDone = function () {
        this._calendarState = '';
    };
    return Md2MonthView;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Date),
    __metadata("design:paramtypes", [Date])
], Md2MonthView.prototype, "activeDate", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Date),
    __metadata("design:paramtypes", [Date])
], Md2MonthView.prototype, "selected", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Function)
], Md2MonthView.prototype, "dateFilter", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], Md2MonthView.prototype, "selectedChange", void 0);
Md2MonthView = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({selector: 'md2-month-view',
        template: "<table class=\"md2-calendar-table\"><thead class=\"md2-calendar-table-header\"><tr><th *ngFor=\"let day of _weekdays\" [attr.aria-label]=\"day.long\">{{day.narrow}}</th></tr></thead><tbody [@slideCalendar]=\"_calendarState\" (@slideCalendar.done)=\"_calendarStateDone()\" md2-calendar-body role=\"grid\" [rows]=\"_weeks\" [todayValue]=\"_todayDate\" [selectedValue]=\"_selectedDate\" [activeCell]=\"_util.getDate(activeDate) - 1\" (selectedValueChange)=\"_dateSelected($event)\"></tbody></table>",
        animations: [__WEBPACK_IMPORTED_MODULE_5__datepicker_animations__["a" /* slideCalendar */]],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
    }),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__core_datetime_date_formats__["a" /* MD_DATE_FORMATS */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__date_locale__["a" /* DateLocale */], __WEBPACK_IMPORTED_MODULE_2__date_util__["a" /* DateUtil */], Object])
], Md2MonthView);

//# sourceMappingURL=month-view.js.map

/***/ }),

/***/ "./node_modules/md2/datepicker/year-view.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Md2YearView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__date_locale__ = __webpack_require__("./node_modules/md2/datepicker/date-locale.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__date_util__ = __webpack_require__("./node_modules/md2/datepicker/date-util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calendar_body__ = __webpack_require__("./node_modules/md2/datepicker/calendar-body.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_datetime_date_formats__ = __webpack_require__("./node_modules/md2/core/datetime/date-formats.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__datepicker_animations__ = __webpack_require__("./node_modules/md2/datepicker/datepicker-animations.js");
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






/**
 * An internal component used to display a single year in the datepicker.
 * @docs-private
 */
var Md2YearView = (function () {
    function Md2YearView(_locale, _util, _dateFormats) {
        this._locale = _locale;
        this._util = _util;
        this._dateFormats = _dateFormats;
        /** Emits when a new month is selected. */
        this.selectedChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        if (!this._dateFormats) {
            throw Error('MD_DATE_FORMATS');
        }
        this._activeDate = this._util.today();
    }
    Object.defineProperty(Md2YearView.prototype, "activeDate", {
        /** The date to display in this year view (everything other than the year is ignored). */
        get: function () { return this._activeDate; },
        set: function (value) {
            var oldActiveDate = this._activeDate;
            this._activeDate = value || this._util.today();
            if (oldActiveDate && this._activeDate &&
                !this._util.isSameYear(oldActiveDate, this._activeDate)) {
                this._init();
                // if (oldActiveDate < this._activeDate) {
                //  this.calendarState('right');
                // } else {
                //  this.calendarState('left');
                // }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2YearView.prototype, "selected", {
        /** The currently selected date. */
        get: function () { return this._selected; },
        set: function (value) {
            this._selected = value;
            this._selectedMonth = this._getMonthInCurrentYear(this.selected);
        },
        enumerable: true,
        configurable: true
    });
    Md2YearView.prototype.ngAfterContentInit = function () {
        this._init();
    };
    /** Handles when a new month is selected. */
    Md2YearView.prototype._monthSelected = function (month) {
        this.selectedChange.emit(this._util.createDate(this._util.getYear(this.activeDate), month, this._util.getDate(this.activeDate), this._util.getHours(this.activeDate), this._util.getMinutes(this.activeDate), this._util.getSeconds(this.activeDate)));
    };
    /** Initializes this month view. */
    Md2YearView.prototype._init = function () {
        var _this = this;
        this._selectedMonth = this._getMonthInCurrentYear(this.selected);
        this._todayMonth = this._getMonthInCurrentYear(this._util.today());
        this._yearLabel = this._locale.getYearName(this.activeDate);
        var monthNames = this._locale.getMonthNames('short');
        // First row of months only contains 5 elements so we can fit the year label on the same row.
        this._months = [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9, 10, 11]].map(function (row) { return row.map(function (month) { return _this._createCellForMonth(month, monthNames[month]); }); });
    };
    /**
     * Gets the month in this year that the given Date falls on.
     * Returns null if the given Date is in another year.
     */
    Md2YearView.prototype._getMonthInCurrentYear = function (date) {
        return this._util.isSameYear(date, this.activeDate) ?
            this._util.getMonth(date) : null;
    };
    /** Creates an MdCalendarCell for the given month. */
    Md2YearView.prototype._createCellForMonth = function (month, monthName) {
        var ariaLabel = this._locale.format(this._util.createDate(this._util.getYear(this.activeDate), month, 1, this._util.getHours(this.activeDate), this._util.getMinutes(this.activeDate), this._util.getSeconds(this.activeDate)), this._dateFormats.display.monthYearA11yLabel);
        return new __WEBPACK_IMPORTED_MODULE_3__calendar_body__["b" /* Md2CalendarCell */](month, monthName.toLocaleUpperCase(), ariaLabel, this._isMonthEnabled(month));
    };
    /** Whether the given month is enabled. */
    Md2YearView.prototype._isMonthEnabled = function (month) {
        if (!this.dateFilter) {
            return true;
        }
        var firstOfMonth = this._util.createDate(this._util.getYear(this.activeDate), month, 1, this._util.getHours(this.activeDate), this._util.getMinutes(this.activeDate), this._util.getSeconds(this.activeDate));
        // If any date in the month is enabled count the month as enabled.
        for (var date = firstOfMonth; this._util.getMonth(date) == month; date = this._util.addCalendarDays(date, 1)) {
            if (this.dateFilter(date)) {
                return true;
            }
        }
        return false;
    };
    Md2YearView.prototype.calendarState = function (direction) {
        this._calendarState = direction;
    };
    Md2YearView.prototype._calendarStateDone = function () {
        this._calendarState = '';
    };
    return Md2YearView;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Date),
    __metadata("design:paramtypes", [Date])
], Md2YearView.prototype, "activeDate", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Date),
    __metadata("design:paramtypes", [Date])
], Md2YearView.prototype, "selected", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Function)
], Md2YearView.prototype, "dateFilter", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], Md2YearView.prototype, "selectedChange", void 0);
Md2YearView = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({selector: 'md2-year-view',
        template: "<table class=\"md2-calendar-table\"><thead class=\"md2-calendar-table-header\"></thead><tbody [@slideCalendar]=\"_calendarState\" (@slideCalendar.done)=\"_calendarStateDone()\" md2-calendar-body role=\"grid\" allowDisabledSelection=\"true\" [label]=\"_yearLabel\" [rows]=\"_months\" [todayValue]=\"_todayMonth\" [selectedValue]=\"_selectedMonth\" [labelMinRequiredCells]=\"2\" [activeCell]=\"_util.getMonth(activeDate)\" (selectedValueChange)=\"_monthSelected($event)\"></tbody></table>",
        animations: [__WEBPACK_IMPORTED_MODULE_5__datepicker_animations__["a" /* slideCalendar */]],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
    }),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__core_datetime_date_formats__["a" /* MD_DATE_FORMATS */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__date_locale__["a" /* DateLocale */], __WEBPACK_IMPORTED_MODULE_2__date_util__["a" /* DateUtil */], Object])
], Md2YearView);

//# sourceMappingURL=year-view.js.map

/***/ }),

/***/ "./node_modules/md2/dialog/dialog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Md2DialogConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Md2DialogPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Md2DialogTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Md2DialogContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Md2DialogActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Md2Dialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_core__ = __webpack_require__("./node_modules/md2/core/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_util_object_extend__ = __webpack_require__("./node_modules/md2/core/util/object-extend.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/first.js");
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





var Md2DialogConfig = (function () {
    function Md2DialogConfig() {
        this.role = 'dialog';
        this.disableClose = false;
    }
    return Md2DialogConfig;
}());

var Md2DialogPortal = (function (_super) {
    __extends(Md2DialogPortal, _super);
    function Md2DialogPortal(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return Md2DialogPortal;
}(__WEBPACK_IMPORTED_MODULE_2__core_core__["v" /* TemplatePortalDirective */]));
Md2DialogPortal = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[md2DialogPortal]' }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
], Md2DialogPortal);

/**
 * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.
 */
var Md2DialogTitle = (function () {
    function Md2DialogTitle() {
    }
    return Md2DialogTitle;
}());
Md2DialogTitle = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: 'md2-dialog-title' })
], Md2DialogTitle);

/**
 * Scrollable content container of a dialog.
 */
var Md2DialogContent = (function () {
    function Md2DialogContent() {
    }
    return Md2DialogContent;
}());
Md2DialogContent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: 'md2-dialog-content' })
], Md2DialogContent);

/**
 * Container for the bottom action buttons in a dialog.
 * Stays fixed to the bottom when scrolling.
 */
var Md2DialogActions = (function () {
    function Md2DialogActions() {
    }
    return Md2DialogActions;
}());
Md2DialogActions = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: 'md2-dialog-footer, md2-dialog-actions' })
], Md2DialogActions);

var Md2Dialog = (function () {
    function Md2Dialog(_overlay, _parentDialog) {
        this._overlay = _overlay;
        this._parentDialog = _parentDialog;
        this._openDialogsAtThisLevel = [];
        this._boundKeydown = this._handleKeydown.bind(this);
        this._panelOpen = false;
        this._overlayRef = null;
        /** Property watched by the animation framework to show or hide the dialog */
        this._visibility = 'initial';
        this.onOpen = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Md2Dialog.prototype.ngOnDestroy = function () { this.destroyPanel(); };
    Object.defineProperty(Md2Dialog.prototype, "_openDialogs", {
        get: function () {
            return this._parentDialog ? this._parentDialog._openDialogs : this._openDialogsAtThisLevel;
        },
        enumerable: true,
        configurable: true
    });
    /** Open the dialog */
    Md2Dialog.prototype.open = function (config) {
        this.config = _applyConfigDefaults(config);
        if (this._panelOpen) {
            return Promise.resolve(this);
        }
        this._createOverlay();
        this._overlayRef.attach(this._portal);
        this._subscribeToBackdrop();
        if (!this._openDialogs.length && !this._parentDialog) {
            document.addEventListener('keydown', this._boundKeydown);
        }
        this._openDialogs.push(this);
        this._panelOpen = true;
        this._visibility = 'visible';
        return Promise.resolve(this);
    };
    /** Close the dialog */
    Md2Dialog.prototype.close = function () {
        this._visibility = 'hidden';
        this._panelOpen = false;
        if (this._overlayRef) {
            this._overlayRef.detach();
            if (this._backdropSubscription) {
                this._backdropSubscription.unsubscribe();
            }
        }
        var index = this._openDialogs.indexOf(this);
        if (index > -1) {
            this._openDialogs.splice(index, 1);
            // no open dialogs are left, call next on afterAllClosed Subject
            if (!this._openDialogs.length) {
                document.removeEventListener('keydown', this._boundKeydown);
            }
        }
        return Promise.resolve(this);
    };
    /** Removes the panel from the DOM. */
    Md2Dialog.prototype.destroyPanel = function () {
        if (this._overlayRef) {
            this._overlayRef.dispose();
            this._overlayRef = null;
            this._cleanUpSubscriptions();
        }
    };
    Md2Dialog.prototype._onPanelDone = function () {
        if (this._panelOpen) {
            this.onOpen.emit(this);
        }
        else {
            this.onClose.emit(this);
        }
    };
    Md2Dialog.prototype._handleKeydown = function (event) {
        var topDialog = this._openDialogs[this._openDialogs.length - 1];
        if (event.keyCode === __WEBPACK_IMPORTED_MODULE_2__core_core__["h" /* ESCAPE */] && topDialog &&
            !topDialog.config.disableClose) {
            topDialog.close();
        }
    };
    Md2Dialog.prototype._subscribeToBackdrop = function () {
        var _this = this;
        if (!this.config.disableClose) {
            this._backdropSubscription = this._overlayRef.backdropClick().first().subscribe(function () {
                return _this.close();
            });
        }
    };
    Md2Dialog.prototype._createOverlay = function () {
        if (!this._overlayRef) {
            var config = new __WEBPACK_IMPORTED_MODULE_2__core_core__["o" /* OverlayState */]();
            config.positionStrategy = this._overlay.position()
                .global()
                .centerHorizontally()
                .centerVertically();
            config.hasBackdrop = true;
            this._overlayRef = this._overlay.create(config);
        }
    };
    Md2Dialog.prototype._cleanUpSubscriptions = function () {
        if (this._backdropSubscription) {
            this._backdropSubscription.unsubscribe();
        }
    };
    return Md2Dialog;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], Md2Dialog.prototype, "onOpen", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], Md2Dialog.prototype, "onClose", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(Md2DialogPortal),
    __metadata("design:type", Md2DialogPortal)
], Md2Dialog.prototype, "_portal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('title'),
    __metadata("design:type", String)
], Md2Dialog.prototype, "dialogTitle", void 0);
Md2Dialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({selector: 'md2-dialog',
        template: "<ng-template md2DialogPortal><div class=\"md2-dialog-panel\" [attr.role]=\"dialogConfig?.role\"><div class=\"md2-dialog-content\"><div class=\"md2-dialog-header\"><button *ngIf=\"!config.disableClose\" type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">&times;</button><h2 *ngIf=\"dialogTitle\" class=\"md2-dialog-title\" id=\"myDialogLabel\" [innerHtml]=\"dialogTitle\"></h2><ng-content select=\"md2-dialog-title\"></ng-content></div><div class=\"md2-dialog-body\"><ng-content select=\"md2-dialog-content\"></ng-content><ng-content></ng-content></div><ng-content select=\"md2-dialog-footer\"></ng-content><ng-content select=\"md2-dialog-actions\"></ng-content></div></div></ng-template>",
        styles: [".md2-dialog-panel{position:relative;max-width:90vw;width:600px;border-radius:3px;background-color:#fff;overflow:hidden;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.md2-dialog-header{background:#2196f3;color:#fff;font-size:25px;line-height:1.1;font-weight:500;padding:0 48px 0 16px;border-bottom:1px solid #e5e5e5;word-wrap:break-word}.md2-dialog-header .close{position:absolute;top:21px;right:16px;display:inline-block;width:18px;height:18px;overflow:hidden;-webkit-appearance:none;padding:0;cursor:pointer;background:0 0;border:0;outline:0;opacity:.8;font-size:0;z-index:1;box-shadow:none;margin:0}.md2-dialog-header .close::after,.md2-dialog-header .close::before{content:'';position:absolute;top:50%;left:0;width:100%;height:2px;margin-top:-1px;background:#ccc;border-radius:2px}.md2-dialog-header .close::before{transform:rotate(45deg)}.md2-dialog-header .close::after{transform:rotate(-45deg)}.md2-dialog-header .close:hover{opacity:1}.md2-dialog-header .md2-dialog-title,.md2-dialog-header md2-dialog-title{display:block;margin:0;padding:16px 0;font-size:25px;font-weight:500}.md2-dialog-header dialog-header{line-height:33px}.md2-dialog-body{position:relative;max-height:65vh;padding:16px;overflow-y:auto}.md2-dialog-footer,md2-dialog-footer{display:block;padding:16px;text-align:right;border-top:1px solid rgba(0,0,0,.12)}.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.48}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.6)} /*# sourceMappingURL=dialog.css.map */ "],
        host: {
            'tabindex': '0',
            '[attr.role]': 'config?.role',
        },
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* trigger */])('state', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ transform: 'scale(0.3)' })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('initial', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ transform: 'scale(0.3)' })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('visible', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ transform: 'scale(1)' })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('hidden', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ transform: 'scale(0.3)' })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('* => visible', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('150ms cubic-bezier(0.0, 0.0, 0.2, 1)')),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('* => hidden', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('150ms cubic-bezier(0.4, 0.0, 1, 1)')),
            ])
        ],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        exportAs: 'md2Dialog'
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"])()),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_core__["m" /* Overlay */],
        Md2Dialog])
], Md2Dialog);

/**
 * Applies default options to the dialog config.
 * @param dialogConfig Config to be modified.
 * @returns The new configuration object.
 */
function _applyConfigDefaults(dialogConfig) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__core_util_object_extend__["a" /* extendObject */])(new Md2DialogConfig(), dialogConfig);
}
//# sourceMappingURL=dialog.js.map

/***/ }),

/***/ "./node_modules/md2/dialog/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Md2DialogModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("./node_modules/md2/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_platform_index__ = __webpack_require__("./node_modules/md2/core/platform/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialog__ = __webpack_require__("./node_modules/md2/dialog/dialog.js");
/* unused harmony namespace reexport */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var Md2DialogModule = (function () {
    function Md2DialogModule() {
    }
    return Md2DialogModule;
}());
Md2DialogModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__core__["f" /* OverlayModule */], __WEBPACK_IMPORTED_MODULE_2__core__["c" /* MdCommonModule */], __WEBPACK_IMPORTED_MODULE_3__core_platform_index__["b" /* PlatformModule */]],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__dialog__["a" /* Md2Dialog */],
            __WEBPACK_IMPORTED_MODULE_4__dialog__["e" /* Md2DialogTitle */],
            __WEBPACK_IMPORTED_MODULE_4__dialog__["c" /* Md2DialogContent */],
            __WEBPACK_IMPORTED_MODULE_4__dialog__["b" /* Md2DialogActions */],
            __WEBPACK_IMPORTED_MODULE_4__dialog__["d" /* Md2DialogPortal */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__dialog__["a" /* Md2Dialog */],
            __WEBPACK_IMPORTED_MODULE_4__dialog__["e" /* Md2DialogTitle */],
            __WEBPACK_IMPORTED_MODULE_4__dialog__["c" /* Md2DialogContent */],
            __WEBPACK_IMPORTED_MODULE_4__dialog__["b" /* Md2DialogActions */],
            __WEBPACK_IMPORTED_MODULE_4__dialog__["d" /* Md2DialogPortal */]
        ]
    })
], Md2DialogModule);


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/md2/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__("./node_modules/md2/core.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__core__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__module__ = __webpack_require__("./node_modules/md2/module.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_index__ = __webpack_require__("./node_modules/md2/accordion/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__autocomplete_index__ = __webpack_require__("./node_modules/md2/autocomplete/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chips_index__ = __webpack_require__("./node_modules/md2/chips/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__collapse_index__ = __webpack_require__("./node_modules/md2/collapse/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__colorpicker_index__ = __webpack_require__("./node_modules/md2/colorpicker/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_table_index__ = __webpack_require__("./node_modules/md2/data-table/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__datepicker_index__ = __webpack_require__("./node_modules/md2/datepicker/index.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_8__datepicker_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dialog_index__ = __webpack_require__("./node_modules/md2/dialog/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__menu_index__ = __webpack_require__("./node_modules/md2/menu/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__select_index__ = __webpack_require__("./node_modules/md2/select/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tabs_index__ = __webpack_require__("./node_modules/md2/tabs/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tags_index__ = __webpack_require__("./node_modules/md2/tags/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__toast_index__ = __webpack_require__("./node_modules/md2/toast/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__tooltip_index__ = __webpack_require__("./node_modules/md2/tooltip/index.js");
/* unused harmony namespace reexport */
















//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/md2/menu/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu__ = __webpack_require__("./node_modules/md2/menu/menu.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__menu__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/md2/menu/menu-content.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Md2MenuContent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Md2MenuContent = (function () {
    function Md2MenuContent() {
    }
    return Md2MenuContent;
}());
Md2MenuContent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({selector: '[md2-menu-content]',
        host: { 'role': 'menu' },
        template: '<ng-content></ng-content>',
        styles: ["[md2-menu]{position:relative;display:inline-block}[md2-menu-content]{position:absolute;top:0;left:0;display:inline-block;background:#fff;list-style:none;min-width:112px;max-width:280px;max-height:calc(100vh + 48px);padding:8px 0;margin:0;z-index:1001;border-radius:2px;transform:scale(0);transform-origin:left top;transition:all .2s linear;box-shadow:0 2px 6px 1px rgba(0,0,0,.34)}[md2-menu-item] [md2-menu-content]{left:100%;margin:-8px 0}[md2-menu-content][x-position=before]{right:0;left:auto;transform-origin:right top}[md2-menu-item] [md2-menu-content][x-position=before]{right:100%}[md2-menu-content][y-position=above]{top:auto;bottom:0;transform-origin:left bottom}[md2-menu-content][y-position=above][x-position=before]{transform-origin:right bottom}.open>[md2-menu-content]{transform:scale(1)}[md2-menu-item]{position:relative;width:100%;cursor:pointer;user-select:none;outline:0;border:none;white-space:nowrap;text-overflow:ellipsis;display:flex;flex-direction:row;align-items:center;height:36px;padding:0 16px;font-size:16px;text-align:start;text-decoration:none;background:0 0;color:rgba(0,0,0,.87);box-sizing:border-box}[md2-menu-item][disabled]{color:rgba(0,0,0,.38)}[md2-menu-item].open,[md2-menu-item]:focus:not([disabled]),[md2-menu-item]:hover:not([disabled]){background:rgba(0,0,0,.04);text-decoration:none}[md2-menu-item]>[md2-menu-trigger]{display:block;height:36px;width:calc(100% + 32px);margin:0 -16px;padding:0 16px;font:inherit;color:inherit;text-align:left;background:0 0;outline:0;border:0;cursor:pointer;box-shadow:none}.md-overlay-container{position:fixed;pointer-events:none;top:0;left:0;height:100%;width:100%;z-index:1000}.md-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000}.md-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1;pointer-events:auto;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.md-overlay-transparent-backdrop{background:0 0}.md-overlay-backdrop.md-overlay-backdrop-showing{opacity:.48} /*# sourceMappingURL=menu.css.map */ "],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
    })
], Md2MenuContent);

//# sourceMappingURL=menu-content.js.map

/***/ }),

/***/ "./node_modules/md2/menu/menu-item.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Md2MenuItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Md2MenuItem = (function () {
    function Md2MenuItem() {
    }
    return Md2MenuItem;
}());
Md2MenuItem = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({selector: '[md2-menu-item]',
        host: {
            'role': 'menuitem'
        },
        template: '<ng-content></ng-content>'
    })
], Md2MenuItem);

//# sourceMappingURL=menu-item.js.map

/***/ }),

/***/ "./node_modules/md2/menu/menu-trigger.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Md2MenuTrigger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Md2MenuTrigger = (function () {
    function Md2MenuTrigger(_element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
    }
    Md2MenuTrigger.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._handleClick = this._renderer.listenGlobal('document', 'click', function (event) {
            if (!_this._hasChildMenu(event)) {
                _this._closeMenu();
            }
        });
    };
    Md2MenuTrigger.prototype.ngOnDestroy = function () {
        this._handleClick = null;
    };
    Md2MenuTrigger.prototype._toggleMenu = function () {
        if (this._hasClass(this._getParentElement(), 'open')) {
            this._closeMenu();
        }
        else {
            this._openMenu();
        }
    };
    Md2MenuTrigger.prototype._openMenu = function () {
        var _this = this;
        this._getParentElement().classList.add('open');
        var siblingElements = this._getSiblingElements(this._getParentElement());
        siblingElements.forEach(function (el) {
            el.classList.remove('open');
            _this._closeChildrenMenu(el);
        });
    };
    Md2MenuTrigger.prototype._closeMenu = function () {
        this._getParentElement().classList.remove('open');
        this._closeChildrenMenu(this._getParentElement());
    };
    Md2MenuTrigger.prototype._closeChildrenMenu = function (element) {
        [].forEach.call(element.querySelectorAll('.open'), function (el) {
            el.classList.remove('open');
        });
    };
    Md2MenuTrigger.prototype._getHostElement = function () {
        return this._element.nativeElement;
    };
    Md2MenuTrigger.prototype._getParentElement = function () {
        return this._element.nativeElement.parentNode;
    };
    Md2MenuTrigger.prototype._getSiblingElements = function (element) {
        var siblingElements = [];
        var el = element.parentNode.firstChild;
        for (; el; el = el.nextSibling) {
            if (el.nodeType == 1 && el !== element) {
                siblingElements.push(el);
            }
        }
        return siblingElements;
    };
    Md2MenuTrigger.prototype._getClosestElement = function (element, target) {
        if (element.hasAttribute(target)) {
            return element;
        }
        var parentEl;
        while (element) {
            parentEl = element.parentElement;
            if (parentEl && parentEl.hasAttribute(target)) {
                return parentEl;
            }
            element = parentEl;
        }
        return null;
    };
    Md2MenuTrigger.prototype._hasClass = function (element, className) {
        return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
    };
    Md2MenuTrigger.prototype._hasChildMenu = function (event) {
        var el = this._getClosestElement(event.target, 'md2-menu-trigger');
        if (el && el === this._getHostElement()) {
            return true;
        }
        else if (this._getParentElement().contains(event.target)) {
            el = this._getClosestElement(event.target, 'md2-menu-item');
            if (el && el.querySelectorAll('[md2-menu-content]').length > 0) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    return Md2MenuTrigger;
}());
Md2MenuTrigger = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[md2-menu-trigger]',
        host: {
            'aria-haspopup': 'true',
            '(click)': '_toggleMenu()',
        },
        exportAs: 'md2MenuTrigger'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], Md2MenuTrigger);

//# sourceMappingURL=menu-trigger.js.map

/***/ }),

/***/ "./node_modules/md2/menu/menu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Md2Menu */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Md2MenuModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_content__ = __webpack_require__("./node_modules/md2/menu/menu-content.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_item__ = __webpack_require__("./node_modules/md2/menu/menu-item.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_trigger__ = __webpack_require__("./node_modules/md2/menu/menu-trigger.js");
/* unused harmony reexport Md2MenuContent */
/* unused harmony reexport Md2MenuItem */
/* unused harmony reexport Md2MenuTrigger */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var Md2Menu = (function () {
    function Md2Menu() {
    }
    return Md2Menu;
}());
Md2Menu = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({selector: '[md2-menu]',
        template: '<ng-content></ng-content>',
        styles: ["[md2-menu]{position:relative;display:inline-block}[md2-menu-content]{position:absolute;top:0;left:0;display:inline-block;background:#fff;list-style:none;min-width:112px;max-width:280px;max-height:calc(100vh + 48px);padding:8px 0;margin:0;z-index:1001;border-radius:2px;transform:scale(0);transform-origin:left top;transition:all .2s linear;box-shadow:0 2px 6px 1px rgba(0,0,0,.34)}[md2-menu-item] [md2-menu-content]{left:100%;margin:-8px 0}[md2-menu-content][x-position=before]{right:0;left:auto;transform-origin:right top}[md2-menu-item] [md2-menu-content][x-position=before]{right:100%}[md2-menu-content][y-position=above]{top:auto;bottom:0;transform-origin:left bottom}[md2-menu-content][y-position=above][x-position=before]{transform-origin:right bottom}.open>[md2-menu-content]{transform:scale(1)}[md2-menu-item]{position:relative;width:100%;cursor:pointer;user-select:none;outline:0;border:none;white-space:nowrap;text-overflow:ellipsis;display:flex;flex-direction:row;align-items:center;height:36px;padding:0 16px;font-size:16px;text-align:start;text-decoration:none;background:0 0;color:rgba(0,0,0,.87);box-sizing:border-box}[md2-menu-item][disabled]{color:rgba(0,0,0,.38)}[md2-menu-item].open,[md2-menu-item]:focus:not([disabled]),[md2-menu-item]:hover:not([disabled]){background:rgba(0,0,0,.04);text-decoration:none}[md2-menu-item]>[md2-menu-trigger]{display:block;height:36px;width:calc(100% + 32px);margin:0 -16px;padding:0 16px;font:inherit;color:inherit;text-align:left;background:0 0;outline:0;border:0;cursor:pointer;box-shadow:none}.md-overlay-container{position:fixed;pointer-events:none;top:0;left:0;height:100%;width:100%;z-index:1000}.md-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000}.md-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1;pointer-events:auto;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.md-overlay-transparent-backdrop{background:0 0}.md-overlay-backdrop.md-overlay-backdrop-showing{opacity:.48} /*# sourceMappingURL=menu.css.map */ "],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
    })
], Md2Menu);

var Md2MenuModule = (function () {
    function Md2MenuModule() {
    }
    return Md2MenuModule;
}());
Md2MenuModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        exports: [Md2Menu, __WEBPACK_IMPORTED_MODULE_2__menu_content__["a" /* Md2MenuContent */], __WEBPACK_IMPORTED_MODULE_3__menu_item__["a" /* Md2MenuItem */], __WEBPACK_IMPORTED_MODULE_4__menu_trigger__["a" /* Md2MenuTrigger */]],
        declarations: [Md2Menu, __WEBPACK_IMPORTED_MODULE_2__menu_content__["a" /* Md2MenuContent */], __WEBPACK_IMPORTED_MODULE_3__menu_item__["a" /* Md2MenuItem */], __WEBPACK_IMPORTED_MODULE_4__menu_trigger__["a" /* Md2MenuTrigger */]],
    })
], Md2MenuModule);

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ "./node_modules/md2/module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Md2Module */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_index__ = __webpack_require__("./node_modules/md2/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_index__ = __webpack_require__("./node_modules/md2/accordion/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__autocomplete_index__ = __webpack_require__("./node_modules/md2/autocomplete/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chips_index__ = __webpack_require__("./node_modules/md2/chips/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__collapse_index__ = __webpack_require__("./node_modules/md2/collapse/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__colorpicker_index__ = __webpack_require__("./node_modules/md2/colorpicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_table_index__ = __webpack_require__("./node_modules/md2/data-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__datepicker_index__ = __webpack_require__("./node_modules/md2/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dialog_index__ = __webpack_require__("./node_modules/md2/dialog/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__menu_index__ = __webpack_require__("./node_modules/md2/menu/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__select_index__ = __webpack_require__("./node_modules/md2/select/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tabs_index__ = __webpack_require__("./node_modules/md2/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tags_index__ = __webpack_require__("./node_modules/md2/tags/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__toast_index__ = __webpack_require__("./node_modules/md2/toast/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__tooltip_index__ = __webpack_require__("./node_modules/md2/tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__core_platform_index__ = __webpack_require__("./node_modules/md2/core/platform/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__core_style_index__ = __webpack_require__("./node_modules/md2/core/style/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var MD2_MODULES = [
    __WEBPACK_IMPORTED_MODULE_2__accordion_index__["a" /* Md2AccordionModule */],
    __WEBPACK_IMPORTED_MODULE_3__autocomplete_index__["a" /* Md2AutocompleteModule */],
    __WEBPACK_IMPORTED_MODULE_4__chips_index__["a" /* Md2ChipsModule */],
    __WEBPACK_IMPORTED_MODULE_5__collapse_index__["a" /* Md2CollapseModule */],
    __WEBPACK_IMPORTED_MODULE_6__colorpicker_index__["a" /* Md2ColorpickerModule */],
    __WEBPACK_IMPORTED_MODULE_7__data_table_index__["a" /* Md2DataTableModule */],
    __WEBPACK_IMPORTED_MODULE_8__datepicker_index__["a" /* Md2DatepickerModule */],
    __WEBPACK_IMPORTED_MODULE_9__dialog_index__["a" /* Md2DialogModule */],
    __WEBPACK_IMPORTED_MODULE_10__menu_index__["a" /* Md2MenuModule */],
    __WEBPACK_IMPORTED_MODULE_1__core_index__["f" /* MdRippleModule */],
    __WEBPACK_IMPORTED_MODULE_11__select_index__["a" /* Md2SelectModule */],
    __WEBPACK_IMPORTED_MODULE_12__tabs_index__["a" /* Md2TabsModule */],
    __WEBPACK_IMPORTED_MODULE_13__tags_index__["a" /* Md2TagsModule */],
    __WEBPACK_IMPORTED_MODULE_14__toast_index__["a" /* Md2ToastModule */],
    __WEBPACK_IMPORTED_MODULE_15__tooltip_index__["a" /* Md2TooltipModule */],
    __WEBPACK_IMPORTED_MODULE_1__core_index__["h" /* OverlayModule */],
    __WEBPACK_IMPORTED_MODULE_1__core_index__["j" /* PortalModule */],
    __WEBPACK_IMPORTED_MODULE_1__core_index__["k" /* RtlModule */],
    __WEBPACK_IMPORTED_MODULE_17__core_style_index__["a" /* StyleModule */],
    __WEBPACK_IMPORTED_MODULE_1__core_index__["a" /* A11yModule */],
    __WEBPACK_IMPORTED_MODULE_16__core_platform_index__["b" /* PlatformModule */],
    __WEBPACK_IMPORTED_MODULE_1__core_index__["b" /* CompatibilityModule */],
    __WEBPACK_IMPORTED_MODULE_1__core_index__["e" /* MdNativeDateModule */],
];
var Md2Module = (function () {
    function Md2Module() {
    }
    return Md2Module;
}());
Md2Module = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: MD2_MODULES,
        exports: MD2_MODULES,
    })
], Md2Module);

//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/md2/select/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Md2SelectModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select__ = __webpack_require__("./node_modules/md2/select/select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_header__ = __webpack_require__("./node_modules/md2/select/select-header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__option__ = __webpack_require__("./node_modules/md2/select/option.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core__ = __webpack_require__("./node_modules/md2/core.js");
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__optgroup__ = __webpack_require__("./node_modules/md2/select/optgroup.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__select_animations__ = __webpack_require__("./node_modules/md2/select/select-animations.js");
/* unused harmony reexport fadeInContent */
/* unused harmony reexport transformPanel */
/* unused harmony reexport transformPlaceholder */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var Md2SelectModule = (function () {
    function Md2SelectModule() {
    }
    return Md2SelectModule;
}());
Md2SelectModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__core__["f" /* OverlayModule */],
            __WEBPACK_IMPORTED_MODULE_4__option__["b" /* Md2OptionModule */],
            __WEBPACK_IMPORTED_MODULE_5__core__["c" /* MdCommonModule */],
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__select__["a" /* Md2Select */], __WEBPACK_IMPORTED_MODULE_3__select_header__["a" /* Md2SelectHeader */], __WEBPACK_IMPORTED_MODULE_4__option__["b" /* Md2OptionModule */], __WEBPACK_IMPORTED_MODULE_5__core__["c" /* MdCommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__select__["a" /* Md2Select */], __WEBPACK_IMPORTED_MODULE_3__select_header__["a" /* Md2SelectHeader */]],
    })
], Md2SelectModule);






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/md2/select/optgroup.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Md2OptgroupBase */
/* unused harmony export _Md2OptgroupMixinBase */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Md2Optgroup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_common_behaviors_disabled__ = __webpack_require__("./node_modules/md2/core/common-behaviors/disabled.js");
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Boilerplate for applying mixins to Md2Optgroup.
var Md2OptgroupBase = (function () {
    function Md2OptgroupBase() {
    }
    return Md2OptgroupBase;
}());

var _Md2OptgroupMixinBase = Object(__WEBPACK_IMPORTED_MODULE_1__core_common_behaviors_disabled__["a" /* mixinDisabled */])(Md2OptgroupBase);
// Counter for unique group ids.
var nextId = 0;
/**
 * Component that is used to group instances of `md2-option`.
 */
var Md2Optgroup = (function (_super) {
    __extends(Md2Optgroup, _super);
    function Md2Optgroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** Unique id for the underlying label. */
        _this._labelId = "md2-optgroup-label-" + nextId++;
        return _this;
    }
    return Md2Optgroup;
}(_Md2OptgroupMixinBase));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Md2Optgroup.prototype, "label", void 0);
Md2Optgroup = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({selector: 'md2-optgroup',
        template: "<label class=\"md2-optgroup-label\" [id]=\"_labelId\">{{ label }}</label><ng-content select=\"md2-option\"></ng-content>",
        styles: [".md2-optgroup-label{color:rgba(0,0,0,.54);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;user-select:none;cursor:default;font-weight:700;font-size:14px}.md2-optgroup-disabled .md2-optgroup-label{color:rgba(0,0,0,.38)} /*# sourceMappingURL=optgroup.css.map */ "],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        inputs: ['disabled'],
        host: {
            'class': 'md2-optgroup',
            'role': 'group',
            '[class.md2-optgroup-disabled]': 'disabled',
            '[attr.aria-disabled]': 'disabled.toString()',
            '[attr.aria-labelledby]': '_labelId',
        }
    })
], Md2Optgroup);

//# sourceMappingURL=optgroup.js.map

/***/ }),

/***/ "./node_modules/md2/select/option.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Md2OptionSelectionChange */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Md2Option; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Md2OptionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_keyboard_keycodes__ = __webpack_require__("./node_modules/md2/core/keyboard/keycodes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_coercion_boolean_property__ = __webpack_require__("./node_modules/md2/core/coercion/boolean-property.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_selection_index__ = __webpack_require__("./node_modules/md2/core/selection/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__optgroup__ = __webpack_require__("./node_modules/md2/select/optgroup.js");
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






/**
 * Option IDs need to be unique across components, so this counter exists outside of
 * the component definition.
 */
var _uniqueIdCounter = 0;
/** Event object emitted by MdOption when selected or deselected. */
var Md2OptionSelectionChange = (function () {
    function Md2OptionSelectionChange(source, isUserInput) {
        if (isUserInput === void 0) { isUserInput = false; }
        this.source = source;
        this.isUserInput = isUserInput;
    }
    return Md2OptionSelectionChange;
}());

/**
 * Single option inside of a `<md2-select>` element.
 */
var Md2Option = (function () {
    function Md2Option(group, _element) {
        this.group = group;
        this._element = _element;
        this._selected = false;
        this._active = false;
        /** Whether the option is disabled.  */
        this._disabled = false;
        this._id = "md2-option-" + _uniqueIdCounter++;
        /** Whether the wrapping component is in multiple selection mode. */
        this.multiple = false;
        /** Event emitted when the option is selected or deselected. */
        this.onSelectionChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(Md2Option.prototype, "id", {
        /** The unique ID of the option. */
        get: function () { return this._id; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Option.prototype, "selected", {
        /** Whether or not the option is currently selected. */
        get: function () { return this._selected; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Option.prototype, "disabled", {
        /** Whether the option is disabled. */
        get: function () { return (this.group && this.group.disabled) || this._disabled; },
        set: function (value) { this._disabled = Object(__WEBPACK_IMPORTED_MODULE_3__core_coercion_boolean_property__["a" /* coerceBooleanProperty */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Option.prototype, "active", {
        /**
         * Whether or not the option is currently active and ready to be selected.
         * An active option displays styles as if it is focused, but the
         * focus is actually retained somewhere else. This comes in handy
         * for components like autocomplete where focus must remain on the input.
         */
        get: function () {
            return this._active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Option.prototype, "viewValue", {
        /**
         * The displayed value of the option. It is necessary to show the selected option in the
         * select's trigger.
         */
        get: function () {
            return this._getHostElement().textContent.trim();
        },
        enumerable: true,
        configurable: true
    });
    /** Selects the option. */
    Md2Option.prototype.select = function () {
        this._selected = true;
        this._emitSelectionChangeEvent();
    };
    /** Deselects the option. */
    Md2Option.prototype.deselect = function () {
        this._selected = false;
        this._emitSelectionChangeEvent();
    };
    /** Sets focus onto this option. */
    Md2Option.prototype.focus = function () {
        this._getHostElement().focus();
    };
    /**
     * This method sets display styles on the option to make it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     */
    Md2Option.prototype.setActiveStyles = function () {
        this._active = true;
    };
    /**
     * This method removes display styles on the option that made it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     */
    Md2Option.prototype.setInactiveStyles = function () {
        this._active = false;
    };
    /** Ensures the option is selected when activated from the keyboard. */
    Md2Option.prototype._handleKeydown = function (event) {
        if (event.keyCode === __WEBPACK_IMPORTED_MODULE_2__core_keyboard_keycodes__["f" /* ENTER */] || event.keyCode === __WEBPACK_IMPORTED_MODULE_2__core_keyboard_keycodes__["m" /* SPACE */]) {
            this._selectViaInteraction();
        }
    };
    /**
     * Selects the option while indicating the selection came from the user. Used to
     * determine if the select's view -> model callback should be invoked.
     */
    Md2Option.prototype._selectViaInteraction = function () {
        if (!this.disabled) {
            this._selected = this.multiple ? !this._selected : true;
            this._emitSelectionChangeEvent(true);
        }
    };
    /** Returns the correct tabindex for the option depending on disabled state. */
    Md2Option.prototype._getTabIndex = function () {
        return this.disabled ? '-1' : '0';
    };
    /** Fetches the host DOM element. */
    Md2Option.prototype._getHostElement = function () {
        return this._element.nativeElement;
    };
    /** Emits the selection change event. */
    Md2Option.prototype._emitSelectionChangeEvent = function (isUserInput) {
        if (isUserInput === void 0) { isUserInput = false; }
        this.onSelectionChange.emit(new Md2OptionSelectionChange(this, isUserInput));
    };
    return Md2Option;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], Md2Option.prototype, "value", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], Md2Option.prototype, "disabled", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], Md2Option.prototype, "onSelectionChange", void 0);
Md2Option = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({selector: 'md2-option',
        host: {
            'role': 'option',
            '[attr.tabindex]': '_getTabIndex()',
            '[class.md2-selected]': 'selected',
            '[class.md2-option-multiple]': 'multiple',
            '[class.md2-active]': 'active',
            '[id]': 'id',
            '[attr.aria-selected]': 'selected.toString()',
            '[attr.aria-disabled]': 'disabled.toString()',
            '[class.md2-option-disabled]': 'disabled',
            '(click)': '_selectViaInteraction()',
            '(keydown)': '_handleKeydown($event)',
            '[class.md2-option]': 'true',
        },
        template: '<ng-content></ng-content>',
        styles: [".md2-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;position:relative;font-family:inherit;cursor:pointer;outline:0}.md2-option[disabled]{cursor:default}[dir=rtl] .md2-option{text-align:right}.md2-option .mat-icon{margin-right:16px}[dir=rtl] .md2-option .mat-icon{margin-left:16px;margin-right:0}.md2-option[aria-disabled=true]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.md2-option:focus:not(.md2-option-disabled),.md2-option:hover:not(.md2-option-disabled){background:rgba(0,0,0,.04)}.md2-option.md2-selected{color:#106cc8}.md2-option.md2-selected:not(.md2-option-multiple){background:rgba(0,0,0,.04)}.md2-option.md2-active{background:rgba(0,0,0,.04);color:#106cc8}.md2-option.md2-option-disabled{color:rgba(0,0,0,.38)}.md2-option.md2-option-multiple{padding-left:40px}.md2-option.md2-option-multiple::after{content:'';position:absolute;top:50%;left:12px;display:block;width:16px;height:16px;margin-top:-8px;border:2px solid;border-radius:2px;box-sizing:border-box;transition:240ms}.md2-option.md2-option-multiple.md2-selected::after{transform:rotate(-45deg);height:8px;border-width:0 0 2px 2px}.md2-optgroup .md2-option:not(.md2-option-multiple){padding-left:32px} /*# sourceMappingURL=option.css.map */ "],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__optgroup__["a" /* Md2Optgroup */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], Md2Option);

var Md2OptionModule = (function () {
    function Md2OptionModule() {
    }
    return Md2OptionModule;
}());
Md2OptionModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_4__core_selection_index__["a" /* MdSelectionModule */]],
        exports: [Md2Option, __WEBPACK_IMPORTED_MODULE_5__optgroup__["a" /* Md2Optgroup */]],
        declarations: [Md2Option, __WEBPACK_IMPORTED_MODULE_5__optgroup__["a" /* Md2Optgroup */]]
    })
], Md2OptionModule);

//# sourceMappingURL=option.js.map

/***/ }),

/***/ "./node_modules/md2/select/select-animations.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return transformPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return transformPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fadeInContent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");

/**
 * The following are all the animations for the md2-select component, with each
 * const containing the metadata for one animation.
 *
 * The values below match the implementation of the AngularJS Material md2-select animation.
 */
/**
 * This animation shrinks the placeholder text to 75% of its normal size and translates
 * it to either the top left corner (ltr) or top right corner (rtl) of the trigger,
 * depending on the text direction of the application.
 */
var transformPlaceholder = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('transformPlaceholder', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('floating-ltr', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
        top: '-22px',
        left: '-2px',
        transform: "scale(0.75)"
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('floating-rtl', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
        top: '-22px',
        left: '2px',
        transform: "scale(0.75)"
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])('* => *', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])("400ms cubic-bezier(0.25, 0.8, 0.25, 1)"))
]);
/**
 * This animation transforms the select's overlay panel on and off the page.
 *
 * When the panel is attached to the DOM, it expands its width 32px, scales it up to
 * 100% on the Y axis, fades in its border, and translates slightly up and to the
 * side to ensure the option text correctly overlaps the trigger text.
 *
 * When the panel is removed from the DOM, it simply fades out linearly.
 */
var transformPanel = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('transformPanel', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('showing', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
        opacity: 1,
        minWidth: 'calc(100% + 32px)',
        transform: "scaleY(1)"
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])('void => *', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
            opacity: 0,
            minWidth: '100%',
            transform: "scaleY(0)"
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])("150ms cubic-bezier(0.25, 0.8, 0.25, 1)")
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])('* => void', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('250ms 100ms linear', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ opacity: 0 }))
    ])
]);
/**
 * This animation fades in the background color and text content of the
 * select's options. It is time delayed to occur 100ms after the overlay
 * panel has transformed in.
 */
var fadeInContent = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('fadeInContent', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('showing', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ opacity: 1 })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])('void => showing', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ opacity: 0 }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])("150ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")
    ])
]);
//# sourceMappingURL=select-animations.js.map

/***/ }),

/***/ "./node_modules/md2/select/select-errors.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getMdSelectDynamicMultipleError;
/* harmony export (immutable) */ __webpack_exports__["b"] = getMdSelectNonArrayValueError;
/**
 * Returns an exception to be thrown when attempting to change a s
 * elect's `multiple` option after initialization.
 * @docs-private
 */
/**
 * Returns an exception to be thrown when attempting to change a s
 * elect's `multiple` option after initialization.
 * @docs-private
 */ function getMdSelectDynamicMultipleError() {
    return new Error('Cannot change `multiple` mode of select after initialization.');
}
/**
 * Returns an exception to be thrown when attempting to assign a non-array value to a select
 * in `multiple` mode. Note that `undefined` and `null` are still valid values to allow for
 * resetting the value.
 * @docs-private
 */
function getMdSelectNonArrayValueError() {
    return new Error('Cannot assign truthy non-array value to select in `multiple` mode.');
}
//# sourceMappingURL=select-errors.js.map

/***/ }),

/***/ "./node_modules/md2/select/select-header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Md2SelectHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Fixed header that will be rendered above a select's options.
 */
var Md2SelectHeader = (function () {
    function Md2SelectHeader() {
    }
    return Md2SelectHeader;
}());
Md2SelectHeader = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'md2-select-header',
        host: {
            'class': 'md2-select-header',
        }
    })
], Md2SelectHeader);

//# sourceMappingURL=select-header.js.map

/***/ }),

/***/ "./node_modules/md2/select/select.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SELECT_ITEM_HEIGHT */
/* unused harmony export SELECT_PANEL_MAX_HEIGHT */
/* unused harmony export SELECT_MAX_OPTIONS_DISPLAYED */
/* unused harmony export SELECT_TRIGGER_HEIGHT */
/* unused harmony export SELECT_ITEM_HEIGHT_ADJUSTMENT */
/* unused harmony export SELECT_PANEL_PADDING_X */
/* unused harmony export SELECT_PANEL_INDENT_PADDING_X */
/* unused harmony export SELECT_MULTIPLE_PANEL_PADDING_X */
/* unused harmony export SELECT_PANEL_PADDING_Y */
/* unused harmony export SELECT_PANEL_VIEWPORT_PADDING */
/* unused harmony export Md2SelectChange */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Md2Select; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__option__ = __webpack_require__("./node_modules/md2/select/option.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__optgroup__ = __webpack_require__("./node_modules/md2/select/optgroup.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_keyboard_keycodes__ = __webpack_require__("./node_modules/md2/core/keyboard/keycodes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_a11y_focus_key_manager__ = __webpack_require__("./node_modules/md2/core/a11y/focus-key-manager.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_rtl_dir__ = __webpack_require__("./node_modules/md2/core/rtl/dir.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__select_animations__ = __webpack_require__("./node_modules/md2/select/select-animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_coercion_boolean_property__ = __webpack_require__("./node_modules/md2/core/coercion/boolean-property.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_overlay_overlay_directives__ = __webpack_require__("./node_modules/md2/core/overlay/overlay-directives.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_overlay_position_viewport_ruler__ = __webpack_require__("./node_modules/md2/core/overlay/position/viewport-ruler.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__core_selection_selection__ = __webpack_require__("./node_modules/md2/core/selection/selection.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__select_errors__ = __webpack_require__("./node_modules/md2/select/select-errors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_startWith__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
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

















/**
 * The following style constants are necessary to save here in order
 * to properly calculate the alignment of the selected option over
 * the trigger element.
 */
/** The fixed height of every option element (option, group header etc.). */
var SELECT_ITEM_HEIGHT = 48;
/** The max height of the select's overlay panel */
var SELECT_PANEL_MAX_HEIGHT = 256;
/** The max number of options visible at once in the select panel. */
var SELECT_MAX_OPTIONS_DISPLAYED = Math.floor(SELECT_PANEL_MAX_HEIGHT / SELECT_ITEM_HEIGHT);
/** The fixed height of the select's trigger element. */
var SELECT_TRIGGER_HEIGHT = 30;
/**
 * Must adjust for the difference in height between the option and the trigger,
 * so the text will align on the y axis.
 */
var SELECT_ITEM_HEIGHT_ADJUSTMENT = (SELECT_ITEM_HEIGHT - SELECT_TRIGGER_HEIGHT) / 2;
/** The panel's padding on the x-axis */
var SELECT_PANEL_PADDING_X = 16;
/** The panel's x axis padding if it is indented (e.g. there is an option group). */
var SELECT_PANEL_INDENT_PADDING_X = SELECT_PANEL_PADDING_X * 2;
/**
 * Distance between the panel edge and the option text in
 * multi-selection mode.
 *
 * (SELECT_PADDING * 1.75) + 20 = 48
 * The padding is multiplied by 1.75 because the checkbox's margin is half the padding, and
 * the browser adds ~4px, because we're using inline elements.
 * The checkbox width is 20px.
 */
var SELECT_MULTIPLE_PANEL_PADDING_X = SELECT_PANEL_PADDING_X * 1.25 + 20;
/**
 * The panel's padding on the y-axis. This padding indicates there are more
 * options available if you scroll.
 */
var SELECT_PANEL_PADDING_Y = 16;
/**
 * The select panel will only "fit" inside the viewport if it is positioned at
 * this value or more away from the viewport boundary.
 */
var SELECT_PANEL_VIEWPORT_PADDING = 8;
/** Change event object that is emitted when the select value has changed. */
var Md2SelectChange = (function () {
    function Md2SelectChange(source, value) {
        this.source = source;
        this.value = value;
    }
    return Md2SelectChange;
}());

var Md2Select = (function () {
    function Md2Select(_element, _renderer, _viewportRuler, _changeDetectorRef, _dir, _control, tabIndex) {
        this._element = _element;
        this._renderer = _renderer;
        this._viewportRuler = _viewportRuler;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._control = _control;
        /** Whether or not the overlay panel is open. */
        this._panelOpen = false;
        /** Whether filling out the select is required in the form.  */
        this._required = false;
        /** Whether the select is disabled.  */
        this._disabled = false;
        /** The scroll position of the overlay panel, calculated to center the selected option. */
        this._scrollTop = 0;
        /** Whether the component is in multiple selection mode. */
        this._multiple = false;
        /** The animation state of the placeholder. */
        this._placeholderState = '';
        /** View -> model callback called when value changes */
        this._onChange = function () { };
        /** View -> model callback called when select has been touched */
        this._onTouched = function () { };
        /** The IDs of child options to be passed to the aria-owns attribute. */
        this._optionIds = '';
        /** The value of the select panel's transform-origin property. */
        this._transformOrigin = 'top';
        /** Whether the panel's animation is done. */
        this._panelDoneAnimating = false;
        /**
         * The y-offset of the overlay panel in relation to the trigger's top start corner.
         * This must be adjusted to align the selected option text over the trigger text.
         * when the panel opens. Will change based on the y-position of the selected option.
         */
        this._offsetY = 0;
        /**
         * This position config ensures that the top "start" corner of the overlay
         * is aligned with with the top "start" of the origin by default (overlapping
         * the trigger completely). If the panel cannot fit below the trigger, it
         * will fall back to a position above the trigger.
         */
        this._positions = [
            {
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'top',
            },
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'bottom',
            },
        ];
        this._floatPlaceholder = 'auto';
        /** Aria label of the select. If not specified, the placeholder will be used as label. */
        this.ariaLabel = '';
        /** Input that can be used to specify the `aria-labelledby` attribute. */
        this.ariaLabelledby = '';
        /** Event emitted when the select has been opened. */
        this.onOpen = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** Event emitted when the select has been closed. */
        this.onClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** Event emitted when the selected value has been changed by the user. */
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        if (this._control) {
            this._control.valueAccessor = this;
        }
        this._tabIndex = parseInt(tabIndex) || 0;
    }
    Object.defineProperty(Md2Select.prototype, "placeholder", {
        /** Placeholder to be shown if no value has been selected. */
        get: function () { return this._placeholder; },
        set: function (value) {
            var _this = this;
            this._placeholder = value;
            // Must wait to record the trigger width to ensure placeholder width is included.
            Promise.resolve(null).then(function () { return _this._setTriggerWidth(); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Select.prototype, "disabled", {
        /** Whether the component is disabled. */
        get: function () { return this._disabled; },
        set: function (value) {
            this._disabled = Object(__WEBPACK_IMPORTED_MODULE_9__core_coercion_boolean_property__["a" /* coerceBooleanProperty */])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Select.prototype, "required", {
        /** Whether the component is required. */
        get: function () { return this._required; },
        set: function (value) { this._required = Object(__WEBPACK_IMPORTED_MODULE_9__core_coercion_boolean_property__["a" /* coerceBooleanProperty */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Select.prototype, "multiple", {
        /** Whether the user should be allowed to select multiple options. */
        get: function () { return this._multiple; },
        set: function (value) {
            if (this._selectionModel) {
                throw Object(__WEBPACK_IMPORTED_MODULE_13__select_errors__["a" /* getMdSelectDynamicMultipleError */])();
            }
            this._multiple = Object(__WEBPACK_IMPORTED_MODULE_9__core_coercion_boolean_property__["a" /* coerceBooleanProperty */])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Select.prototype, "floatPlaceholder", {
        /** Whether to float the placeholder text. */
        get: function () { return this._floatPlaceholder; },
        set: function (value) {
            this._floatPlaceholder = value || 'auto';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Select.prototype, "tabIndex", {
        /** Tab index for the select element. */
        get: function () { return this._disabled ? -1 : this._tabIndex; },
        set: function (value) {
            if (typeof value !== 'undefined') {
                this._tabIndex = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Select.prototype, "optionSelectionChanges", {
        /** Combined stream of all of the child options' change events. */
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["a" /* Observable */].merge.apply(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["a" /* Observable */], this.options.map(function (option) { return option.onSelectionChange; }));
        },
        enumerable: true,
        configurable: true
    });
    Md2Select.prototype.ngOnInit = function () {
        this._selectionModel = new __WEBPACK_IMPORTED_MODULE_12__core_selection_selection__["a" /* SelectionModel */](this.multiple, null, false);
    };
    Md2Select.prototype.ngAfterContentInit = function () {
        var _this = this;
        this._initKeyManager();
        this._changeSubscription = this.options.changes.startWith(null).subscribe(function () {
            _this._resetOptions();
            if (_this._control) {
                // Defer setting the value in order to avoid the "Expression
                // has changed after it was checked" errors from Angular.
                Promise.resolve(null).then(function () { return _this._setSelectionByValue(_this._control.value); });
            }
        });
    };
    Md2Select.prototype.ngOnDestroy = function () {
        this._dropSubscriptions();
        if (this._changeSubscription) {
            this._changeSubscription.unsubscribe();
        }
        if (this._tabSubscription) {
            this._tabSubscription.unsubscribe();
        }
    };
    /** Toggles the overlay panel open or closed. */
    Md2Select.prototype.toggle = function () {
        this.panelOpen ? this.close() : this.open();
    };
    /** Opens the overlay panel. */
    Md2Select.prototype.open = function () {
        if (this.disabled || !this.options.length) {
            return;
        }
        if (!this._triggerWidth) {
            this._setTriggerWidth();
        }
        this._calculateOverlayPosition();
        this._placeholderState = this._floatPlaceholderState();
        this._panelOpen = true;
    };
    /** Closes the overlay panel and focuses the host element. */
    Md2Select.prototype.close = function () {
        if (this._panelOpen) {
            this._panelOpen = false;
            if (this._selectionModel.isEmpty()) {
                this._placeholderState = '';
            }
            this._focusHost();
        }
    };
    /**
     * Sets the select's value. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param value New value to be written to the model.
     */
    Md2Select.prototype.writeValue = function (value) {
        if (this.options) {
            this._setSelectionByValue(value);
        }
    };
    /**
     * Saves a callback function to be invoked when the select's value
     * changes from user input. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the value changes.
     */
    Md2Select.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    /**
     * Saves a callback function to be invoked when the select is blurred
     * by the user. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the component has been touched.
     */
    Md2Select.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    /**
     * Disables the select. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param isDisabled Sets whether the component is disabled.
     */
    Md2Select.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    Object.defineProperty(Md2Select.prototype, "panelOpen", {
        /** Whether or not the overlay panel is open. */
        get: function () {
            return this._panelOpen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Select.prototype, "selected", {
        /** The currently selected option. */
        get: function () {
            return this.multiple ? this._selectionModel.selected : this._selectionModel.selected[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Select.prototype, "triggerValue", {
        /** The value displayed in the trigger. */
        get: function () {
            if (this._multiple) {
                var selectedOptions = this._selectionModel.selected.map(function (option) { return option.viewValue; });
                if (this._isRtl()) {
                    selectedOptions.reverse();
                }
                // TODO(crisbeto): delimiter should be configurable for proper localization.
                return selectedOptions.join(', ');
            }
            return this._selectionModel.selected[0].viewValue;
        },
        enumerable: true,
        configurable: true
    });
    /** Whether the element is in RTL mode. */
    Md2Select.prototype._isRtl = function () {
        return this._dir ? this._dir.value === 'rtl' : false;
    };
    /**
     * Sets the width of the trigger element. This is necessary to match
     * the overlay width to the trigger width.
     */
    Md2Select.prototype._setTriggerWidth = function () {
        this._triggerWidth = this._getTriggerRect().width;
    };
    /** Handles the keyboard interactions of a closed select. */
    Md2Select.prototype._handleClosedKeydown = function (event) {
        if (!this.disabled) {
            if (event.keyCode === __WEBPACK_IMPORTED_MODULE_3__core_keyboard_keycodes__["f" /* ENTER */] || event.keyCode === __WEBPACK_IMPORTED_MODULE_3__core_keyboard_keycodes__["m" /* SPACE */]) {
                event.preventDefault(); // prevents the page from scrolling down when pressing space
                this.open();
            }
            else if (event.keyCode === __WEBPACK_IMPORTED_MODULE_3__core_keyboard_keycodes__["o" /* UP_ARROW */] || event.keyCode === __WEBPACK_IMPORTED_MODULE_3__core_keyboard_keycodes__["d" /* DOWN_ARROW */]) {
                this._handleArrowKey(event);
            }
        }
    };
    /** Handles keypresses inside the panel. */
    Md2Select.prototype._handlePanelKeydown = function (event) {
        if (event.keyCode === __WEBPACK_IMPORTED_MODULE_3__core_keyboard_keycodes__["h" /* HOME */] || event.keyCode === __WEBPACK_IMPORTED_MODULE_3__core_keyboard_keycodes__["e" /* END */]) {
            event.preventDefault();
            event.keyCode === __WEBPACK_IMPORTED_MODULE_3__core_keyboard_keycodes__["h" /* HOME */] ? this._keyManager.setFirstItemActive() :
                this._keyManager.setLastItemActive();
        }
        else {
            this._keyManager.onKeydown(event);
        }
    };
    /**
     * When the panel element is finished transforming in (though not fading in), it
     * emits an event and focuses an option if the panel is open.
     */
    Md2Select.prototype._onPanelDone = function () {
        if (this.panelOpen) {
            this._focusCorrectOption();
            this.onOpen.emit();
        }
        else {
            this.onClose.emit();
            this._panelDoneAnimating = false;
            this.overlayDir.offsetX = 0;
        }
    };
    /**
     * When the panel content is done fading in, the _panelDoneAnimating property is
     * set so the proper class can be added to the panel.
     */
    Md2Select.prototype._onFadeInDone = function () {
        this._panelDoneAnimating = this.panelOpen;
    };
    /**
     * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
     * "blur" to the panel when it opens, causing a false positive.
     */
    Md2Select.prototype._onBlur = function () {
        if (!this.panelOpen) {
            this._onTouched();
        }
    };
    /**
     * Callback that is invoked when the overlay panel has been attached.
     */
    Md2Select.prototype._onAttached = function () {
        this._calculateOverlayOffsetX();
        this._setScrollTop();
    };
    /**
     * Sets the scroll position of the scroll container. This must be called after
     * the overlay pane is attached or the scroll container element will not yet be
     * present in the DOM.
     */
    Md2Select.prototype._setScrollTop = function () {
        var scrollContainer = this.overlayDir.overlayRef.overlayElement.querySelector('.md2-select-panel');
        scrollContainer.scrollTop = this._scrollTop;
    };
    /**
     * Sets the selected option based on a value. If no option can be
     * found with the designated value, the select trigger is cleared.
     */
    Md2Select.prototype._setSelectionByValue = function (value) {
        var _this = this;
        var isArray = Array.isArray(value);
        if (this.multiple && value && !isArray) {
            throw Object(__WEBPACK_IMPORTED_MODULE_13__select_errors__["b" /* getMdSelectNonArrayValueError */])();
        }
        this._clearSelection();
        if (isArray) {
            value.forEach(function (currentValue) { return _this._selectValue(currentValue); });
            this._sortValues();
        }
        else {
            this._selectValue(value);
        }
        this._setValueWidth();
        if (this._selectionModel.isEmpty()) {
            this._placeholderState = '';
        }
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Finds and selects and option based on its value.
     * @returns Option that has the corresponding value.
     */
    Md2Select.prototype._selectValue = function (value) {
        var _this = this;
        var optionsArray = this.options.toArray();
        var correspondingOption = optionsArray.find(function (option) { return option.value != null
            && option.value != undefined && _this.equals(option.value, value); });
        if (correspondingOption) {
            correspondingOption.select();
            this._selectionModel.select(correspondingOption);
            this._keyManager.setActiveItem(optionsArray.indexOf(correspondingOption));
        }
        return correspondingOption;
    };
    /**
     * Compare two vars or objects
     * @param o1 compare first object
     * @param o2 compare second object
     * @return boolean comparation result
     */
    Md2Select.prototype.equals = function (o1, o2) {
        if (o1 === o2) {
            return true;
        }
        if (o1 === null || o2 === null) {
            return false;
        }
        if (o1 !== o1 && o2 !== o2) {
            return true;
        }
        var t1 = typeof o1, t2 = typeof o2, key, keySet;
        if (t1 === t2 && t1 === 'object') {
            keySet = Object.create(null);
            for (key in o1) {
                if (!this.equals(o1[key], o2[key])) {
                    return false;
                }
                keySet[key] = true;
            }
            for (key in o2) {
                if (!(key in keySet) && key.charAt(0) !== '$' && o2[key]) {
                    return false;
                }
            }
            return true;
        }
        return false;
    };
    /**
     * Clears the select trigger and deselects every option in the list.
     * @param skip Option that should not be deselected.
     */
    Md2Select.prototype._clearSelection = function (skip) {
        this._selectionModel.clear();
        this.options.forEach(function (option) {
            if (option !== skip) {
                option.deselect();
            }
        });
    };
    Md2Select.prototype._getTriggerRect = function () {
        return this.trigger.nativeElement.getBoundingClientRect();
    };
    /** Sets up a key manager to listen to keyboard events on the overlay panel. */
    Md2Select.prototype._initKeyManager = function () {
        var _this = this;
        this._keyManager = new __WEBPACK_IMPORTED_MODULE_4__core_a11y_focus_key_manager__["a" /* FocusKeyManager */](this.options);
        this._tabSubscription = this._keyManager.tabOut.subscribe(function () { return _this.close(); });
    };
    /** Drops current option subscriptions and IDs and resets from scratch. */
    Md2Select.prototype._resetOptions = function () {
        this._dropSubscriptions();
        this._listenToOptions();
        this._setOptionIds();
        this._setOptionMultiple();
    };
    /** Listens to user-generated selection events on each option. */
    Md2Select.prototype._listenToOptions = function () {
        var _this = this;
        this._optionSubscription = this.optionSelectionChanges
            .filter(function (event) { return event.isUserInput; })
            .subscribe(function (event) {
            _this._onSelect(event.source);
            _this._setValueWidth();
            if (!_this.multiple) {
                _this.close();
            }
        });
    };
    /** Invoked when an option is clicked. */
    Md2Select.prototype._onSelect = function (option) {
        var wasSelected = this._selectionModel.isSelected(option);
        if (this.multiple) {
            this._selectionModel.toggle(option);
            wasSelected ? option.deselect() : option.select();
            this._sortValues();
        }
        else {
            this._clearSelection(option.value == null ? null : option);
            if (option.value == null) {
                this._propagateChanges(option.value);
            }
            else {
                this._selectionModel.select(option);
            }
        }
        if (wasSelected !== this._selectionModel.isSelected(option)) {
            this._propagateChanges();
        }
    };
    /**
     * Sorts the model values, ensuring that they keep the same
     * order that they have in the panel.
     */
    Md2Select.prototype._sortValues = function () {
        var _this = this;
        if (this._multiple) {
            this._selectionModel.clear();
            this.options.forEach(function (option) {
                if (option.selected) {
                    _this._selectionModel.select(option);
                }
            });
        }
    };
    /** Unsubscribes from all option subscriptions. */
    Md2Select.prototype._dropSubscriptions = function () {
        if (this._optionSubscription) {
            this._optionSubscription.unsubscribe();
            this._optionSubscription = null;
        }
    };
    /** Emits change event to set the model value. */
    Md2Select.prototype._propagateChanges = function (fallbackValue) {
        var valueToEmit = null;
        if (Array.isArray(this.selected)) {
            valueToEmit = this.selected.map(function (option) { return option.value; });
        }
        else {
            valueToEmit = this.selected ? this.selected.value : fallbackValue;
        }
        this._onChange(valueToEmit);
        this.change.emit(new Md2SelectChange(this, valueToEmit));
    };
    /** Records option IDs to pass to the aria-owns property. */
    Md2Select.prototype._setOptionIds = function () {
        this._optionIds = this.options.map(function (option) { return option.id; }).join(' ');
    };
    /**
     * Sets the `multiple` property on each option. The promise is necessary
     * in order to avoid Angular errors when modifying the property after init.
     */
    Md2Select.prototype._setOptionMultiple = function () {
        var _this = this;
        if (this.multiple) {
            Promise.resolve(null).then(function () {
                _this.options.forEach(function (option) { return option.multiple = _this.multiple; });
            });
        }
    };
    /**
     * Must set the width of the selected option's value programmatically
     * because it is absolutely positioned and otherwise will not clip
     * overflow. The selection arrow is 9px wide, add 4px of padding = 13
     */
    Md2Select.prototype._setValueWidth = function () {
        this._selectedValueWidth = this._triggerWidth - 13;
    };
    /**
     * Focuses the selected item. If no option is selected, it will focus
     * the first item instead.
     */
    Md2Select.prototype._focusCorrectOption = function () {
        if (this._selectionModel.isEmpty()) {
            this._keyManager.setFirstItemActive();
        }
        else {
            this._keyManager.setActiveItem(this._getOptionIndex(this._selectionModel.selected[0]));
        }
    };
    /** Focuses the host element when the panel closes. */
    Md2Select.prototype._focusHost = function () {
        this._element.nativeElement.focus();
    };
    /** Gets the index of the provided option in the option list. */
    Md2Select.prototype._getOptionIndex = function (option) {
        return this.options.reduce(function (result, current, index) {
            return result === undefined ? (option === current ? index : undefined) : result;
        }, undefined);
    };
    /** Calculates the scroll position and x- and y-offsets of the overlay panel. */
    Md2Select.prototype._calculateOverlayPosition = function () {
        var items = this._getItemCount();
        var panelHeight = Math.min(items * SELECT_ITEM_HEIGHT, SELECT_PANEL_MAX_HEIGHT);
        var scrollContainerHeight = items * SELECT_ITEM_HEIGHT;
        // The farthest the panel can be scrolled before it hits the bottom
        var maxScroll = scrollContainerHeight - panelHeight;
        if (this._selectionModel.hasValue()) {
            var selectedIndex = this._getOptionIndex(this._selectionModel.selected[0]);
            selectedIndex += this._getLabelCountBeforeOption(selectedIndex);
            // We must maintain a scroll buffer so the selected option will be scrolled to the
            // center of the overlay panel rather than the top.
            var scrollBuffer = panelHeight / 2;
            this._scrollTop = this._calculateOverlayScroll(selectedIndex, scrollBuffer, maxScroll);
            this._offsetY = this._calculateOverlayOffsetY(selectedIndex, scrollBuffer, maxScroll);
        }
        else {
            // If no option is selected, the panel centers on the first option. In this case,
            // we must only adjust for the height difference between the option element
            // and the trigger element, then multiply it by -1 to ensure the panel moves
            // in the correct direction up the page.
            this._offsetY = (SELECT_ITEM_HEIGHT - SELECT_TRIGGER_HEIGHT) / 2 * -1;
        }
        this._checkOverlayWithinViewport(maxScroll);
    };
    /**
     * Calculates the scroll position of the select's overlay panel.
     *
     * Attempts to center the selected option in the panel. If the option is
     * too high or too low in the panel to be scrolled to the center, it clamps the
     * scroll position to the min or max scroll positions respectively.
     */
    Md2Select.prototype._calculateOverlayScroll = function (selectedIndex, scrollBuffer, maxScroll) {
        var optionOffsetFromScrollTop = SELECT_ITEM_HEIGHT * selectedIndex;
        var halfOptionHeight = SELECT_ITEM_HEIGHT / 2;
        // Starts at the optionOffsetFromScrollTop, which scrolls the option to the top of the
        // scroll container, then subtracts the scroll buffer to scroll the option down to
        // the center of the overlay panel. Half the option height must be re-added to the
        // scrollTop so the option is centered based on its middle, not its top edge.
        var optimalScrollPosition = optionOffsetFromScrollTop - scrollBuffer + halfOptionHeight;
        return clampValue(0, optimalScrollPosition, maxScroll);
    };
    /**
     * Figures out the appropriate animation state for the placeholder.
     */
    Md2Select.prototype._getPlaceholderAnimationState = function () {
        if (this.floatPlaceholder === 'never') {
            return '';
        }
        if (this.floatPlaceholder === 'always') {
            return this._floatPlaceholderState();
        }
        return this._placeholderState;
    };
    /**
     * Determines the CSS `opacity` of the placeholder element.
     */
    Md2Select.prototype._getPlaceholderOpacity = function () {
        return (this.floatPlaceholder !== 'never' || this._selectionModel.isEmpty()) ?
            '1' : '0';
    };
    Object.defineProperty(Md2Select.prototype, "_ariaLabel", {
        /** Returns the aria-label of the select component. */
        get: function () {
            // If an ariaLabelledby value has been set, the select should not overwrite the
            // `aria-labelledby` value by setting the ariaLabel to the placeholder.
            return this.ariaLabelledby ? null : this.ariaLabel || this.placeholder;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the x-offset of the overlay panel in relation to the trigger's top start corner.
     * This must be adjusted to align the selected option text over the trigger text when
     * the panel opens. Will change based on LTR or RTL text direction. Note that the offset
     * can't be calculated until the panel has been attached, because we need to know the
     * content width in order to constrain the panel within the viewport.
     */
    Md2Select.prototype._calculateOverlayOffsetX = function () {
        var overlayRect = this.overlayDir.overlayRef.overlayElement.getBoundingClientRect();
        var viewportRect = this._viewportRuler.getViewportRect();
        var isRtl = this._isRtl();
        var offsetX;
        // Adjust the offset, depending on the option padding.
        if (this.multiple) {
            offsetX = SELECT_MULTIPLE_PANEL_PADDING_X;
        }
        else {
            var selected = this._selectionModel.selected[0];
            offsetX = selected && selected.group ? SELECT_PANEL_INDENT_PADDING_X : SELECT_PANEL_PADDING_X;
        }
        // Invert the offset in LTR.
        if (!isRtl) {
            offsetX *= -1;
        }
        // Determine how much the select overflows on each side.
        var leftOverflow = 0 - (overlayRect.left + offsetX
            - (isRtl ? SELECT_PANEL_PADDING_X * 2 : 0));
        var rightOverflow = overlayRect.right + offsetX - viewportRect.width
            + (isRtl ? 0 : SELECT_PANEL_PADDING_X * 2);
        // If the element overflows on either side, reduce the offset to allow it to fit.
        if (leftOverflow > 0) {
            offsetX += leftOverflow + SELECT_PANEL_VIEWPORT_PADDING;
        }
        else if (rightOverflow > 0) {
            offsetX -= rightOverflow + SELECT_PANEL_VIEWPORT_PADDING;
        }
        // Set the offset directly in order to avoid having to go through change detection and
        // potentially triggering "changed after it was checked" errors.
        this.overlayDir.offsetX = offsetX;
        this.overlayDir.overlayRef.updatePosition();
    };
    /**
     * Calculates the y-offset of the select's overlay panel in relation to the
     * top start corner of the trigger. It has to be adjusted in order for the
     * selected option to be aligned over the trigger when the panel opens.
     */
    Md2Select.prototype._calculateOverlayOffsetY = function (selectedIndex, scrollBuffer, maxScroll) {
        var optionOffsetFromPanelTop;
        if (this._scrollTop === 0) {
            optionOffsetFromPanelTop = selectedIndex * SELECT_ITEM_HEIGHT;
        }
        else if (this._scrollTop === maxScroll) {
            var firstDisplayedIndex = this._getItemCount() - SELECT_MAX_OPTIONS_DISPLAYED;
            var selectedDisplayIndex = selectedIndex - firstDisplayedIndex;
            // Because the panel height is longer than the height of the options alone,
            // there is always extra padding at the top or bottom of the panel. When
            // scrolled to the very bottom, this padding is at the top of the panel and
            // must be added to the offset.
            optionOffsetFromPanelTop =
                selectedDisplayIndex * SELECT_ITEM_HEIGHT + SELECT_PANEL_PADDING_Y;
        }
        else {
            // If the option was scrolled to the middle of the panel using a scroll buffer,
            // its offset will be the scroll buffer minus the half height that was added to
            // center it.
            optionOffsetFromPanelTop = scrollBuffer - SELECT_ITEM_HEIGHT / 2;
        }
        // The final offset is the option's offset from the top, adjusted for the height
        // difference, multiplied by -1 to ensure that the overlay moves in the correct
        // direction up the page.
        return optionOffsetFromPanelTop * -1 - SELECT_ITEM_HEIGHT_ADJUSTMENT;
    };
    /**
     * Checks that the attempted overlay position will fit within the viewport.
     * If it will not fit, tries to adjust the scroll position and the associated
     * y-offset so the panel can open fully on-screen. If it still won't fit,
     * sets the offset back to 0 to allow the fallback position to take over.
     */
    Md2Select.prototype._checkOverlayWithinViewport = function (maxScroll) {
        var viewportRect = this._viewportRuler.getViewportRect();
        var triggerRect = this._getTriggerRect();
        var topSpaceAvailable = triggerRect.top - SELECT_PANEL_VIEWPORT_PADDING;
        var bottomSpaceAvailable = viewportRect.height - triggerRect.bottom - SELECT_PANEL_VIEWPORT_PADDING;
        var panelHeightTop = Math.abs(this._offsetY);
        var totalPanelHeight = Math.min(this._getItemCount() * SELECT_ITEM_HEIGHT, SELECT_PANEL_MAX_HEIGHT);
        var panelHeightBottom = totalPanelHeight - panelHeightTop - triggerRect.height;
        if (panelHeightBottom > bottomSpaceAvailable) {
            this._adjustPanelUp(panelHeightBottom, bottomSpaceAvailable);
        }
        else if (panelHeightTop > topSpaceAvailable) {
            this._adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll);
        }
        else {
            this._transformOrigin = this._getOriginBasedOnOption();
        }
    };
    /** Adjusts the overlay panel up to fit in the viewport. */
    Md2Select.prototype._adjustPanelUp = function (panelHeightBottom, bottomSpaceAvailable) {
        var distanceBelowViewport = panelHeightBottom - bottomSpaceAvailable;
        // Scrolls the panel up by the distance it was extending past the boundary, then
        // adjusts the offset by that amount to move the panel up into the viewport.
        this._scrollTop -= distanceBelowViewport;
        this._offsetY -= distanceBelowViewport;
        this._transformOrigin = this._getOriginBasedOnOption();
        // If the panel is scrolled to the very top, it won't be able to fit the panel
        // by scrolling, so set the offset to 0 to allow the fallback position to take
        // effect.
        if (this._scrollTop <= 0) {
            this._scrollTop = 0;
            this._offsetY = 0;
            this._transformOrigin = "50% bottom 0px";
        }
    };
    /** Adjusts the overlay panel down to fit in the viewport. */
    Md2Select.prototype._adjustPanelDown = function (panelHeightTop, topSpaceAvailable, maxScroll) {
        var distanceAboveViewport = panelHeightTop - topSpaceAvailable;
        // Scrolls the panel down by the distance it was extending past the boundary, then
        // adjusts the offset by that amount to move the panel down into the viewport.
        this._scrollTop += distanceAboveViewport;
        this._offsetY += distanceAboveViewport;
        this._transformOrigin = this._getOriginBasedOnOption();
        // If the panel is scrolled to the very bottom, it won't be able to fit the
        // panel by scrolling, so set the offset to 0 to allow the fallback position
        // to take effect.
        if (this._scrollTop >= maxScroll) {
            this._scrollTop = maxScroll;
            this._offsetY = 0;
            this._transformOrigin = "50% top 0px";
            return;
        }
    };
    /** Sets the transform origin point based on the selected option. */
    Md2Select.prototype._getOriginBasedOnOption = function () {
        var originY = Math.abs(this._offsetY) - SELECT_ITEM_HEIGHT_ADJUSTMENT + SELECT_ITEM_HEIGHT / 2;
        return "50% " + originY + "px 0px";
    };
    /** Figures out the floating placeholder state value. */
    Md2Select.prototype._floatPlaceholderState = function () {
        return this._isRtl() ? 'floating-rtl' : 'floating-ltr';
    };
    /** Handles the user pressing the arrow keys on a closed select.  */
    Md2Select.prototype._handleArrowKey = function (event) {
        if (this._multiple) {
            event.preventDefault();
            this.open();
        }
        else {
            var prevActiveItem = this._keyManager.activeItem;
            // Cycle though the select options even when the select is closed,
            // matching the behavior of the native select element.
            // TODO(crisbeto): native selects also cycle through the options with left/right arrows,
            // however the key manager only supports up/down at the moment.
            this._keyManager.onKeydown(event);
            var currentActiveItem = this._keyManager.activeItem;
            if (currentActiveItem !== prevActiveItem) {
                this._clearSelection();
                this._setSelectionByValue(currentActiveItem.value);
                this._propagateChanges();
            }
        }
    };
    /** Calculates the amount of items in the select. This includes options and group labels. */
    Md2Select.prototype._getItemCount = function () {
        return this.options.length + this.optionGroups.length;
    };
    /**
     * Calculates the amount of option group labels that precede the specified option.
     * Useful when positioning the panel, because the labels will offset the index of the
     * currently-selected option.
     */
    Md2Select.prototype._getLabelCountBeforeOption = function (optionIndex) {
        if (this.optionGroups.length) {
            var options = this.options.toArray();
            var groups = this.optionGroups.toArray();
            var groupCounter = 0;
            for (var i = 0; i < optionIndex + 1; i++) {
                if (options[i].group && options[i].group === groups[groupCounter]) {
                    groupCounter++;
                }
            }
            return groupCounter;
        }
        return 0;
    };
    return Md2Select;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('trigger'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], Md2Select.prototype, "trigger", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_10__core_overlay_overlay_directives__["a" /* ConnectedOverlayDirective */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_10__core_overlay_overlay_directives__["a" /* ConnectedOverlayDirective */])
], Md2Select.prototype, "overlayDir", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"])(__WEBPACK_IMPORTED_MODULE_1__option__["a" /* Md2Option */], { descendants: true }),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
], Md2Select.prototype, "options", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"])(__WEBPACK_IMPORTED_MODULE_2__optgroup__["a" /* Md2Optgroup */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
], Md2Select.prototype, "optionGroups", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [String])
], Md2Select.prototype, "placeholder", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], Md2Select.prototype, "disabled", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], Md2Select.prototype, "required", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Md2Select.prototype, "multiple", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Md2Select.prototype, "floatPlaceholder", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], Md2Select.prototype, "tabIndex", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('aria-label'),
    __metadata("design:type", String)
], Md2Select.prototype, "ariaLabel", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('aria-labelledby'),
    __metadata("design:type", String)
], Md2Select.prototype, "ariaLabelledby", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], Md2Select.prototype, "onOpen", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], Md2Select.prototype, "onClose", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], Md2Select.prototype, "change", void 0);
Md2Select = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({selector: 'md2-select',
        template: "<div class=\"md2-select-trigger\" cdk-overlay-origin (click)=\"toggle()\" #origin=\"cdkOverlayOrigin\" #trigger><span class=\"md2-select-placeholder\" [class.md2-floating-placeholder]=\"_selectionModel.hasValue()\" [@transformPlaceholder]=\"_getPlaceholderAnimationState()\" [style.opacity]=\"_getPlaceholderOpacity()\" [style.width.px]=\"_selectedValueWidth\">{{ placeholder }}</span> <span class=\"md2-select-value\" *ngIf=\"_selectionModel.hasValue()\"><span class=\"md2-select-value-text\">{{ triggerValue }}</span> </span><span class=\"md2-select-arrow\"></span> <span class=\"md2-select-underline\"></span></div><ng-template cdk-connected-overlay [origin]=\"origin\" [open]=\"panelOpen\" hasBackdrop (backdropClick)=\"close()\" backdropClass=\"cdk-overlay-transparent-backdrop\" [positions]=\"_positions\" [minWidth]=\"_triggerWidth\" [offsetY]=\"_offsetY\" (attach)=\"_onAttached()\" (detach)=\"close()\"><div class=\"md2-select-panel\" [@transformPanel]=\"'showing'\" (@transformPanel.done)=\"_onPanelDone()\" (keydown)=\"_keyManager.onKeydown($event)\" [style.transformOrigin]=\"_transformOrigin\" [class.md2-select-panel-done-animating]=\"_panelDoneAnimating\"><div class=\"md2-select-content\" [@fadeInContent]=\"'showing'\" (@fadeInContent.done)=\"_onFadeInDone()\"><ng-content select=\"md2-select-header\"></ng-content><ng-content></ng-content></div></div></ng-template>",
        styles: [".md2-select{display:inline-block;outline:0}.md2-select-trigger{color:rgba(0,0,0,.38);display:flex;align-items:center;height:30px;min-width:112px;cursor:pointer;position:relative;box-sizing:border-box;font-size:16px}[aria-disabled=true] .md2-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.md2-select:focus:not(.md2-select-disabled) .md2-select-trigger{color:#106cc8}.md2-select.ng-invalid.ng-touched:not(.md2-select-disabled) .md2-select-trigger{color:#f44336}.md2-select-underline{position:absolute;bottom:0;left:0;right:0;height:1px;background-color:rgba(0,0,0,.12)}[aria-disabled=true] .md2-select-underline{background-image:linear-gradient(to right,rgba(0,0,0,.26) 0,rgba(0,0,0,.26) 33%,transparent 0);background-size:4px 1px;background-repeat:repeat-x;background-color:transparent;background-position:0 bottom}.md2-select:focus:not(.md2-select-disabled) .md2-select-underline{background-color:#106cc8}.md2-select.ng-invalid.ng-touched:not(.md2-select-disabled) .md2-select-underline{background-color:#f44336}.md2-select-placeholder{position:relative;padding:0 2px;transform-origin:left top;flex-grow:1}.md2-select-placeholder.md2-floating-placeholder{top:-22px;left:-2px;text-align:left;transform:scale(.75)}[dir=rtl] .md2-select-placeholder{transform-origin:right top}[dir=rtl] .md2-select-placeholder.md2-floating-placeholder{left:2px;text-align:right}[aria-required=true] .md2-select-placeholder::after{content:'*'}.md2-select-value{position:absolute;max-width:calc(100% - 18px);flex-grow:1;top:0;left:0;bottom:0;display:flex;align-items:center;color:rgba(0,0,0,.87)}[dir=rtl] .md2-select-value{left:auto;right:0}.md2-select-disabled .md2-select-value{color:rgba(0,0,0,.38)}.md2-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:30px}.md2-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.md2-select-panel{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%}@media screen and (-ms-high-contrast:active){.md2-select-panel{outline:solid 1px}}.md2-select-content,.md2-select-panel-done-animating{background:#fff}.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-transparent-backdrop{background:0 0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.48} /*# sourceMappingURL=select.css.map */ "],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        host: {
            'role': 'listbox',
            '[attr.tabindex]': 'tabIndex',
            '[attr.aria-label]': '_ariaLabel',
            '[attr.aria-labelledby]': 'ariaLabelledby',
            '[attr.aria-required]': 'required.toString()',
            '[attr.aria-disabled]': 'disabled.toString()',
            '[attr.aria-invalid]': '_control?.invalid || "false"',
            '[attr.aria-owns]': '_optionIds',
            '[class.md2-select-disabled]': 'disabled',
            '[class.md2-select]': 'true',
            '(keydown)': '_handleClosedKeydown($event)',
            '(blur)': '_onBlur()',
        },
        animations: [
            __WEBPACK_IMPORTED_MODULE_7__select_animations__["c" /* transformPlaceholder */],
            __WEBPACK_IMPORTED_MODULE_7__select_animations__["b" /* transformPanel */],
            __WEBPACK_IMPORTED_MODULE_7__select_animations__["a" /* fadeInContent */]
        ],
        exportAs: 'md2Select',
    }),
    __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"])()), __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __param(6, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('tabindex')),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"],
        __WEBPACK_IMPORTED_MODULE_11__core_overlay_position_viewport_ruler__["b" /* ViewportRuler */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
        __WEBPACK_IMPORTED_MODULE_5__core_rtl_dir__["a" /* Dir */], __WEBPACK_IMPORTED_MODULE_8__angular_forms__["NgControl"], String])
], Md2Select);

/** Clamps a value n between min and max values. */
function clampValue(min, n, max) {
    return Math.min(Math.max(min, n), max);
}
//# sourceMappingURL=select.js.map

/***/ }),

/***/ "./node_modules/md2/tabs/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs__ = __webpack_require__("./node_modules/md2/tabs/tabs.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__tabs__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/md2/tabs/tabs.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Md2TabChange */
/* unused harmony export Md2Transclude */
/* unused harmony export Md2Tab */
/* unused harmony export Md2TabLabel */
/* unused harmony export Md2Tabs */
/* unused harmony export MD2_TABS_DIRECTIVES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Md2TabsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/** Change event object that is emitted when the tab has changed. */
var Md2TabChange = (function () {
    function Md2TabChange(tab, index) {
        this.tab = tab;
        this.index = index;
    }
    return Md2TabChange;
}());

var Md2Transclude = (function () {
    function Md2Transclude(viewRef) {
        this.viewRef = viewRef;
    }
    Object.defineProperty(Md2Transclude.prototype, "md2Transclude", {
        get: function () { return this._md2Transclude; },
        set: function (templateRef) {
            this._md2Transclude = templateRef;
            if (templateRef) {
                this.viewRef.createEmbeddedView(templateRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    return Md2Transclude;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]])
], Md2Transclude.prototype, "md2Transclude", null);
Md2Transclude = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[md2Transclude]' }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
], Md2Transclude);

var Md2Tab = (function () {
    function Md2Tab() {
    }
    return Md2Tab;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Md2Tab.prototype, "label", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], Md2Tab.prototype, "active", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], Md2Tab.prototype, "disabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Md2Tab.prototype, "class", void 0);
Md2Tab = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({selector: 'md2-tab',
        template: "<ng-content></ng-content>",
        host: {
            '[class]': 'class',
            '[class.active]': 'active'
        }
    })
], Md2Tab);

var Md2TabLabel = (function () {
    function Md2TabLabel(templateRef, tab) {
        this.templateRef = templateRef;
        tab.labelRef = templateRef;
    }
    return Md2TabLabel;
}());
Md2TabLabel = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[md2-tab-label]' }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], Md2Tab])
], Md2TabLabel);

var Md2Tabs = (function () {
    function Md2Tabs(elementRef) {
        this.elementRef = elementRef;
        this._isInitialized = false;
        this._focusIndex = 0;
        this._selectedIndex = 0;
        this._shouldPaginate = false;
        this._offsetLeft = 0;
        this._inkBarLeft = '0';
        this._inkBarWidth = '0';
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectedIndexChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(Md2Tabs.prototype, "selectedIndex", {
        get: function () { return this._selectedIndex; },
        set: function (value) {
            if (typeof value === 'string') {
                value = parseInt(value);
            }
            if (value !== this._selectedIndex) {
                this._selectedIndex = value;
                this.adjustOffset(value);
                this._updateInkBar();
                if (this.tabs) {
                    var tabs = this.tabs.toArray();
                    if (!tabs[value].disabled) {
                        tabs.forEach(function (tab) { return tab.active = false; });
                        tabs[value].active = true;
                    }
                }
                if (this._isInitialized) {
                    this._emitChangeEvent();
                    this.selectedIndexChange.emit(value);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Tabs.prototype, "focusIndex", {
        get: function () { return this._focusIndex; },
        set: function (value) {
            this._focusIndex = value;
            this.adjustOffset(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Tabs.prototype, "element", {
        get: function () {
            var elements = {
                root: this.elementRef.nativeElement,
                wrapper: null,
                canvas: null,
                paging: null,
                tabs: null
            };
            elements.wrapper = elements.root.querySelector('.md2-tabs-header-wrapper');
            elements.canvas = elements.wrapper.querySelector('.md2-tabs-canvas');
            elements.paging = elements.canvas.querySelector('.md2-tabs-header');
            elements.tabs = elements.paging.querySelectorAll('.md2-tab-label');
            return elements;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * After Content Init
     */
    Md2Tabs.prototype.ngAfterContentInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.updatePagination();
        }, 0);
        setTimeout(function () {
            var tabs = _this.tabs.toArray();
            if (_this.selectedIndex) {
                if (_this.selectedIndex >= tabs.length) {
                    _this.selectedIndex = 0;
                }
                tabs.forEach(function (tab) { return tab.active = false; });
                tabs[_this.selectedIndex].active = true;
                _this.adjustOffset(_this.selectedIndex);
            }
            else {
                var index = tabs.findIndex(function (t) { return t.active; });
                if (index < 0) {
                    tabs[0].active = true;
                }
                else {
                    _this.selectedIndex = index;
                }
            }
            _this._updateInkBar();
        }, 0);
        this._isInitialized = true;
    };
    /**
     * Calculates the styles from the selected tab for the ink-bar.
     */
    Md2Tabs.prototype._updateInkBar = function () {
        var elements = this.element;
        if (!elements.tabs[this.selectedIndex]) {
            return;
        }
        var tab = elements.tabs[this.selectedIndex];
        this._inkBarLeft = tab.offsetLeft + 'px';
        this._inkBarWidth = tab.offsetWidth + 'px';
    };
    /** Emits an event when the user selects an option. */
    Md2Tabs.prototype._emitChangeEvent = function () {
        var index = this._selectedIndex;
        this.change.emit(new Md2TabChange(this.tabs.toArray()[index], index));
    };
    /**
     * Focus next Tab
     */
    Md2Tabs.prototype.focusNextTab = function () { this.incrementIndex(1); };
    /**
     * Focus previous Tab
     */
    Md2Tabs.prototype.focusPreviousTab = function () { this.incrementIndex(-1); };
    /**
     * Mouse Wheel scroll
     * @param event
     */
    Md2Tabs.prototype.scroll = function (event) {
        if (!this._shouldPaginate) {
            return;
        }
        event.preventDefault();
        this._offsetLeft = this.fixOffset(this._offsetLeft - event.wheelDelta);
    };
    /**
     * Next Page
     */
    Md2Tabs.prototype.nextPage = function () {
        var elements = this.element;
        var viewportWidth = elements.canvas.clientWidth, totalWidth = viewportWidth + this._offsetLeft, i, tab;
        for (i = 0; i < elements.tabs.length; i++) {
            tab = elements.tabs[i];
            if (tab.offsetLeft + tab.offsetWidth > totalWidth) {
                break;
            }
        }
        this._offsetLeft = this.fixOffset(tab.offsetLeft);
    };
    /**
     * Previous Page
     */
    Md2Tabs.prototype.previousPage = function () {
        var i, tab, elements = this.element;
        for (i = 0; i < elements.tabs.length; i++) {
            tab = elements.tabs[i];
            if (tab.offsetLeft + tab.offsetWidth >= this._offsetLeft) {
                break;
            }
        }
        this._offsetLeft = this.fixOffset(tab.offsetLeft +
            tab.offsetWidth - elements.canvas.clientWidth);
    };
    /**
     * On Window Resize
     * @param event
     */
    Md2Tabs.prototype.onWindowResize = function () {
        this._offsetLeft = this.fixOffset(this._offsetLeft);
        this.updatePagination();
    };
    /**
     * Can page Back
     */
    Md2Tabs.prototype.canPageBack = function () { return this._offsetLeft > 0; };
    /**
     * Can page Previous
     */
    Md2Tabs.prototype.canPageForward = function () {
        var elements = this.element;
        var lastTab = elements.tabs[elements.tabs.length - 1];
        return lastTab && lastTab.offsetLeft + lastTab.offsetWidth > elements.canvas.clientWidth +
            this._offsetLeft;
    };
    /**
     * Update Pagination
     */
    Md2Tabs.prototype.updatePagination = function () {
        var canvasWidth = this.element.root.clientWidth;
        var tabs = this.element.tabs ? this.element.tabs : [];
        for (var i = 0; i < tabs.length; i++) {
            canvasWidth -= tabs[i].offsetWidth;
        }
        this._shouldPaginate = canvasWidth < 0;
    };
    /**
     * Increment Focus Tab
     * @param inc
     */
    Md2Tabs.prototype.incrementIndex = function (inc) {
        var newIndex, index = this.focusIndex;
        for (newIndex = index + inc; this.tabs.toArray()[newIndex] && this.tabs.toArray()[newIndex].disabled; newIndex += inc) { }
        if (this.tabs.toArray()[newIndex]) {
            this.focusIndex = newIndex;
        }
    };
    /**
     * Adjust Offset of Tab
     * @param index
     */
    Md2Tabs.prototype.adjustOffset = function (index) {
        var elements = this.element;
        if (!elements.tabs[index]) {
            return;
        }
        var tab = elements.tabs[index], left = tab.offsetLeft, right = tab.offsetWidth + left;
        this._offsetLeft = Math.max(this._offsetLeft, this.fixOffset(right - elements.canvas.clientWidth + 32 * 2));
        this._offsetLeft = Math.min(this._offsetLeft, this.fixOffset(left));
    };
    /**
     * Fix Offset of Tab
     * @param value
     * @return value
     */
    Md2Tabs.prototype.fixOffset = function (value) {
        var elements = this.element;
        if (!elements.tabs.length || !this._shouldPaginate) {
            return 0;
        }
        var lastTab = elements.tabs[elements.tabs.length - 1], totalWidth = lastTab.offsetLeft + lastTab.offsetWidth;
        value = Math.min(totalWidth - elements.canvas.clientWidth, value);
        value = Math.max(0, value);
        return value;
    };
    return Md2Tabs;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"])(Md2Tab),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
], Md2Tabs.prototype, "tabs", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Md2Tabs.prototype, "class", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], Md2Tabs.prototype, "selectedIndex", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], Md2Tabs.prototype, "change", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], Md2Tabs.prototype, "selectedIndexChange", void 0);
Md2Tabs = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({selector: 'md2-tabs',
        template: "<div class=\"md2-tabs-header-wrapper\"><div role=\"button\" class=\"md2-prev-button\" [class.disabled]=\"!canPageBack()\" *ngIf=\"_shouldPaginate\" (click)=\"previousPage()\"><em class=\"prev-icon\">Prev</em></div><div role=\"button\" class=\"md2-next-button\" [class.disabled]=\"!canPageForward()\" *ngIf=\"_shouldPaginate\" (click)=\"nextPage()\"><em class=\"next-icon\">Next</em></div><div class=\"md2-tabs-canvas\" [class.md2-paginated]=\"_shouldPaginate\" role=\"tablist\" tabindex=\"0\" (keydown.arrowRight)=\"focusNextTab()\" (keydown.arrowLeft)=\"focusPreviousTab()\" (keydown.enter)=\"selectedIndex = focusIndex\" (mousewheel)=\"scroll($event)\"><div class=\"md2-tabs-header\" [style.marginLeft.px]=\"-_offsetLeft\"><div class=\"md2-tab-label\" role=\"tab\" *ngFor=\"let tab of tabs; let i = index\" [class.focus]=\"focusIndex === i\" [class.active]=\"selectedIndex === i\" [class.disabled]=\"tab.disabled\" (click)=\"focusIndex = selectedIndex = i\"><span [md2Transclude]=\"tab.labelRef\">{{tab.label}}</span></div><div class=\"md2-tab-ink-bar\" [style.left]=\"_inkBarLeft\" [style.width]=\"_inkBarWidth\"></div></div></div></div><div class=\"md2-tabs-body-wrapper\"><ng-content></ng-content></div>",
        styles: ["md2-tabs{position:relative;overflow:hidden;display:block;margin:0;border:1px solid #e1e1e1;border-radius:2px}.md2-tabs-header-wrapper{position:relative;display:block;height:48px;background:#fff;border-width:0 0 1px;border-style:solid;border-color:rgba(0,0,0,.12);margin:0;padding:0;list-style:none;user-select:none}.md2-tabs-header-wrapper::after{content:'';display:table;clear:both}.md2-next-button,.md2-prev-button{position:absolute;top:0;height:100%;width:32px;padding:8px 0;z-index:2;cursor:pointer}.md2-next-button.disabled,.md2-prev-button.disabled{opacity:.25;cursor:default}.md2-prev-button{left:0}.md2-next-button{right:0}.md2-next-button .next-icon,.md2-prev-button .prev-icon{display:block;width:12px;height:12px;font-size:0;border-width:0 0 2px 2px;border-style:solid;border-color:#757575;border-radius:1px;transform:rotate(45deg);margin:10px}.md2-next-button .next-icon{border-width:2px 2px 0 0}.md2-tabs-canvas{position:relative;height:100%;overflow:hidden;display:block;outline:0}.md2-tabs-canvas.md2-paginated{margin:0 32px}.md2-tabs-header{position:relative;display:inline-block;height:100%;white-space:nowrap;transition:.5s cubic-bezier(.35,0,.25,1)}.md2-tab-label{position:relative;height:100%;color:rgba(0,0,0,.54);font-size:14px;text-align:center;line-height:24px;padding:12px 24px;transition:background-color 350ms cubic-bezier(.35,0,.25,1);cursor:pointer;white-space:nowrap;text-transform:uppercase;display:inline-block;font-weight:500;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;-ms-text-overflow:ellipsis;-o-text-overflow:ellipsis;text-overflow:ellipsis}.md2-tab-label.active{color:#106cc8}.md2-tabs-canvas:focus .md2-tab-label.focus{background:rgba(0,0,0,.05)}.md2-tab-label.disabled{color:rgba(0,0,0,.26);pointer-events:none;user-select:none;-webkit-user-drag:none;opacity:.5;cursor:default}.md2-tab-ink-bar{position:absolute;bottom:0;height:2px;background:#ff5252;transition:250ms cubic-bezier(.35,0,.25,1)}.md2-tabs-body-wrapper{position:relative;min-height:0;display:block;clear:both}md2-tab{padding:16px;display:none;position:relative}md2-tab.active{display:block;position:relative} /*# sourceMappingURL=tabs.css.map */ "],
        host: {
            '[class]': 'class',
            '(window:resize)': 'onWindowResize()'
        },
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], Md2Tabs);

var MD2_TABS_DIRECTIVES = [Md2TabLabel, Md2Tabs, Md2Tab];
var Md2TabsModule = (function () {
    function Md2TabsModule() {
    }
    return Md2TabsModule;
}());
Md2TabsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        exports: MD2_TABS_DIRECTIVES,
        declarations: [Md2Transclude, Md2TabLabel, Md2Tabs, Md2Tab],
    })
], Md2TabsModule);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ "./node_modules/md2/tags/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Md2TagsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__autocomplete_index__ = __webpack_require__("./node_modules/md2/autocomplete/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tags__ = __webpack_require__("./node_modules/md2/tags/tags.js");
/* unused harmony namespace reexport */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var Md2TagsModule = (function () {
    function Md2TagsModule() {
    }
    return Md2TagsModule;
}());
Md2TagsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_3__autocomplete_index__["a" /* Md2AutocompleteModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_4__tags__["a" /* Md2Tags */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__tags__["a" /* Md2Tags */]],
    })
], Md2TagsModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/md2/tags/tags.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Tag */
/* unused harmony export MD2_TAGS_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Md2Tags; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_core__ = __webpack_require__("./node_modules/md2/core/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var noop = function () { };
var nextId = 0;
var Tag = (function () {
    function Tag(source, textKey, valueKey) {
        if (typeof source === 'string') {
            this.text = this.value = source;
        }
        if (typeof source === 'object') {
            this.text = source[textKey];
            this.value = valueKey ? source[valueKey] : source;
        }
    }
    return Tag;
}());

var MD2_TAGS_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return Md2Tags; }),
    multi: true
};
var Md2Tags = (function () {
    function Md2Tags(_element) {
        this._element = _element;
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._value = '';
        this._disabled = false;
        this._isInitialized = false;
        this._onTouchedCallback = noop;
        this._onChangeCallback = noop;
        this._tags = [];
        this._list = [];
        this._items = [];
        this._focusedTag = 0;
        this._selectedTag = -1;
        this._inputValue = '';
        this._inputFocused = false;
        this.noBlur = true;
        this.id = 'md2-tags-' + (++nextId);
        this.tabindex = 0;
        this.placeholder = '';
        this.textKey = 'text';
        this.valueKey = null;
        this.selectAndFocusTagSafe = function (index) {
            if (!this._items.length) {
                this._selectTag(-1);
                this._handleFocus();
                return;
            }
            if (index === this._items.length) {
                return this._handleFocus();
            }
            index = Math.max(index, 0);
            index = Math.min(index, this._items.length - 1);
            this._selectTag(index);
        };
    }
    Md2Tags.prototype.ngAfterContentInit = function () { this._isInitialized = true; };
    Object.defineProperty(Md2Tags.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = Object(__WEBPACK_IMPORTED_MODULE_2__core_core__["x" /* coerceBooleanProperty */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Tags.prototype, "tags", {
        set: function (value) { this._tags = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Tags.prototype, "value", {
        get: function () { return this._value; },
        set: function (value) { this.setValue(value); },
        enumerable: true,
        configurable: true
    });
    /**
     * setup value
     * @param value
     */
    Md2Tags.prototype.setValue = function (value) {
        var _this = this;
        if (value !== this._value) {
            this._value = value;
            this._items = [];
            if (value && value.length && typeof value === 'object' && Array.isArray(value)) {
                var _loop_1 = function (i) {
                    var selItm = this_1._tags.find(function (t) { return _this.equals(_this.valueKey ?
                        t[_this.valueKey] : t, value[i]); });
                    if (selItm) {
                        this_1._items.push(new Tag(selItm, this_1.textKey, this_1.valueKey));
                    }
                };
                var this_1 = this;
                for (var i = 0; i < value.length; i++) {
                    _loop_1(i);
                }
            }
            if (this._isInitialized) {
                this._onChangeCallback(value);
                this.change.emit(this._value);
            }
        }
    };
    /**
     * Compare two vars or objects
     * @param o1 compare first object
     * @param o2 compare second object
     * @return boolean comparation result
     */
    Md2Tags.prototype.equals = function (o1, o2) {
        if (o1 === o2) {
            return true;
        }
        if (o1 === null || o2 === null) {
            return false;
        }
        if (o1 !== o1 && o2 !== o2) {
            return true;
        }
        var t1 = typeof o1, t2 = typeof o2, key, keySet;
        if (t1 === t2 && t1 === 'object') {
            keySet = Object.create(null);
            for (key in o1) {
                if (!this.equals(o1[key], o2[key])) {
                    return false;
                }
                keySet[key] = true;
            }
            for (key in o2) {
                if (!(key in keySet) && key.charAt(0) !== '$' && o2[key]) {
                    return false;
                }
            }
            return true;
        }
        return false;
    };
    Object.defineProperty(Md2Tags.prototype, "isMenuVisible", {
        get: function () {
            return ((this._inputFocused || this.noBlur) && this._inputValue &&
                this._list && this._list.length) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * update scroll of tags suggestion menu
     */
    Md2Tags.prototype.updateScroll = function () {
        if (this._focusedTag < 0) {
            return;
        }
        var menuContainer = this._element.nativeElement.querySelector('.md2-tags-menu');
        if (!menuContainer) {
            return;
        }
        var choices = menuContainer.querySelectorAll('.md2-option');
        if (choices.length < 1) {
            return;
        }
        var highlighted = choices[this._focusedTag];
        if (!highlighted) {
            return;
        }
        var top = highlighted.offsetTop + highlighted.clientHeight - menuContainer.scrollTop;
        var height = menuContainer.offsetHeight;
        if (top > height) {
            menuContainer.scrollTop += top - height;
        }
        else if (top < highlighted.clientHeight) {
            menuContainer.scrollTop -= highlighted.clientHeight - top;
        }
    };
    /**
     * input key listener
     * @param event
     */
    Md2Tags.prototype._handleInputKeydown = function (event) {
        var _this = this;
        // Backspace
        if (event.keyCode === 8 && !this._inputValue) {
            event.preventDefault();
            event.stopPropagation();
            if (this._items.length && this._selectedTag < 0) {
                this.selectAndFocusTagSafe(this._items.length - 1);
            }
            if (this._items.length && this._selectedTag > -1) {
                this.removeAndSelectAdjacentTag(this._selectedTag);
            }
            return;
        }
        // Del Key
        if (event.keyCode === 46 && !this._inputValue) {
            return;
        }
        // Left / Right Arrow
        if ((event.keyCode === 37 || event.keyCode === 39) && !this._inputValue) {
            return;
        }
        // Down Arrow
        if (event.keyCode === 40) {
            if (!this.isMenuVisible) {
                return;
            }
            event.stopPropagation();
            event.preventDefault();
            this._focusedTag = (this._focusedTag === this._list.length - 1) ?
                0 : Math.min(this._focusedTag + 1, this._list.length - 1);
            this.updateScroll();
            return;
        }
        // Up Arrow
        if (event.keyCode === 38) {
            if (!this.isMenuVisible) {
                return;
            }
            event.stopPropagation();
            event.preventDefault();
            this._focusedTag = (this._focusedTag === 0) ?
                this._list.length - 1 : Math.max(0, this._focusedTag - 1);
            this.updateScroll();
            return;
        }
        // Tab Key
        if (event.keyCode === 9) {
            return;
        }
        // Enter / Space
        if (event.keyCode === 13 || event.keyCode === 32) {
            if (!this._inputValue || !this.isMenuVisible) {
                event.preventDefault();
                return;
            }
            event.preventDefault();
            this._addTag(event, this._focusedTag);
            return;
        }
        // Escape Key
        if (event.keyCode === 27) {
            event.stopPropagation();
            event.preventDefault();
            if (this._inputValue) {
                this._inputValue = '';
            }
            if (this._selectedTag >= 0) {
                this._handleFocus();
            }
            return;
        }
        // reset selected tag
        if (this._selectedTag >= 0) {
            this.resetselectedTag();
        }
        // filter
        setTimeout(function () {
            _this.filterMatches();
        }, 10);
    };
    Md2Tags.prototype._handleKeydown = function (event) {
        if (this.disabled || this._inputValue) {
            return;
        }
        switch (event.keyCode) {
            case __WEBPACK_IMPORTED_MODULE_2__core_core__["b" /* BACKSPACE */]:
            case __WEBPACK_IMPORTED_MODULE_2__core_core__["e" /* DELETE */]:
                if (this._selectedTag < 0) {
                    return;
                }
                event.preventDefault();
                this.removeAndSelectAdjacentTag(this._selectedTag);
                break;
            case __WEBPACK_IMPORTED_MODULE_2__core_core__["t" /* TAB */]:
            case __WEBPACK_IMPORTED_MODULE_2__core_core__["h" /* ESCAPE */]:
                if (this._selectedTag < 0) {
                    return;
                }
                event.preventDefault();
                this._handleFocus();
                break;
            case __WEBPACK_IMPORTED_MODULE_2__core_core__["i" /* LEFT_ARROW */]:
                event.preventDefault();
                if (this._selectedTag < 0) {
                    this._selectedTag = this._items.length;
                }
                if (this._items.length) {
                    this.selectAndFocusTagSafe(this._selectedTag - 1);
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_2__core_core__["q" /* RIGHT_ARROW */]:
                event.preventDefault();
                if (this._selectedTag >= this._items.length) {
                    this._selectedTag = -1;
                }
                this.selectAndFocusTagSafe(this._selectedTag + 1);
                break;
        }
    };
    Md2Tags.prototype.removeAndSelectAdjacentTag = function (index) {
        var selIndex = this.getAdjacentTagIndex(index);
        this.removeTag(index);
        this.selectAndFocusTagSafe(selIndex);
    };
    Md2Tags.prototype.resetselectedTag = function () {
        this._selectedTag = -1;
    };
    Md2Tags.prototype.getAdjacentTagIndex = function (index) {
        var len = this._items.length - 1;
        return (len === 0) ? -1 :
            (index === len) ? index - 1 : index;
    };
    /**
     * add tag
     * @param event
     * @param index index of the specific tag
     */
    Md2Tags.prototype._addTag = function (event, index) {
        event.preventDefault();
        event.stopPropagation();
        this._items.push(this._list[index]);
        this._inputValue = '';
        this.updateValue();
    };
    Md2Tags.prototype._removeTagAndFocusInput = function (index) {
        this.removeTag(index);
        this._handleFocus();
    };
    /**
     * remove tag
     * @param index
     */
    Md2Tags.prototype.removeTag = function (index) {
        this._items.splice(index, 1);
        this.updateValue();
    };
    /**
     * update value
     */
    Md2Tags.prototype.updateValue = function () {
        this._value = new Array();
        for (var i = 0; i < this._items.length; i++) {
            this._value.push(this._items[i].value);
        }
        this._onChangeCallback(this._value);
        this.change.emit(this._value);
    };
    /**
     * select tag
     * @param index of select tag
     */
    Md2Tags.prototype._selectTag = function (index) {
        if (index >= -1 && index <= this._items.length) {
            this._selectedTag = index;
        }
    };
    Md2Tags.prototype._handleFocus = function () {
        this._element.nativeElement.querySelector('input').focus();
        this.resetselectedTag();
    };
    Md2Tags.prototype._onInputFocus = function () {
        this._inputFocused = true;
        this.resetselectedTag();
    };
    Md2Tags.prototype._onInputBlur = function () {
        this._inputFocused = false;
    };
    Md2Tags.prototype._listEnter = function () { this.noBlur = true; };
    Md2Tags.prototype._listLeave = function () { this.noBlur = false; };
    /**
     * update suggestion menu with filter
     * @param query
     */
    Md2Tags.prototype.filterMatches = function () {
        var _this = this;
        var tempList = this._tags.map(function (tag) { return new Tag(tag, _this.textKey, _this.valueKey); });
        this._list = tempList.filter(function (t) {
            return (new RegExp(_this._inputValue, 'ig').test(t.text) &&
                !_this._items.find(function (i) { return t.text === i.text; }));
        });
        if (this._list.length > 0) {
            this._focusedTag = 0;
        }
    };
    Md2Tags.prototype.writeValue = function (value) {
        var _this = this;
        if (value !== this._value) {
            this._value = value;
            this._items = [];
            if (value && value.length && typeof value === 'object' && Array.isArray(value)) {
                var _loop_2 = function (i) {
                    var selItm = this_2._tags.find(function (t) { return _this.equals(_this.valueKey ?
                        t[_this.valueKey] : t, value[i]); });
                    if (selItm) {
                        this_2._items.push(new Tag(selItm, this_2.textKey, this_2.valueKey));
                    }
                };
                var this_2 = this;
                for (var i = 0; i < value.length; i++) {
                    _loop_2(i);
                }
            }
        }
    };
    Md2Tags.prototype.registerOnChange = function (fn) { this._onChangeCallback = fn; };
    Md2Tags.prototype.registerOnTouched = function (fn) { this._onTouchedCallback = fn; };
    Md2Tags.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    return Md2Tags;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], Md2Tags.prototype, "change", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Md2Tags.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], Md2Tags.prototype, "tabindex", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Md2Tags.prototype, "placeholder", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('md2-tag-text'),
    __metadata("design:type", String)
], Md2Tags.prototype, "textKey", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('md2-tag-value'),
    __metadata("design:type", String)
], Md2Tags.prototype, "valueKey", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], Md2Tags.prototype, "disabled", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('md2-tags'),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], Md2Tags.prototype, "tags", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], Md2Tags.prototype, "value", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], Md2Tags.prototype, "_handleKeydown", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('focus'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Md2Tags.prototype, "_handleFocus", null);
Md2Tags = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({selector: 'md2-tags',
        template: "<div class=\"md2-tags-container\"><span *ngFor=\"let t of _items; let i = index;\" class=\"md2-tag\" [class.active]=\"_selectedTag === i\" (click)=\"_selectTag(i)\"><span class=\"md2-tag-text\">{{t.text}}</span> <svg (click)=\"_removeTagAndFocusInput(i)\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/></svg></span><div class=\"md2-tag-add\"><input [(ngModel)]=\"_inputValue\" type=\"text\" tabs=\"false\" autocomplete=\"off\" tabindex=\"-1\" [disabled]=\"disabled\" class=\"md2-tags-input\" [placeholder]=\"placeholder\" (focus)=\"_onInputFocus()\" (blur)=\"_onInputBlur()\" (keydown)=\"_handleInputKeydown($event)\" (change)=\"$event.stopPropagation()\"><ul *ngIf=\"isMenuVisible\" class=\"md2-tags-menu\" (mouseenter)=\"_listEnter()\" (mouseleave)=\"_listLeave()\"><li class=\"md2-tag-option\" *ngFor=\"let l of _list; let i = index;\" [class.focused]=\"_focusedTag === i\" (click)=\"_addTag($event, i)\"><span class=\"md2-tag-option-text\" [innerHtml]=\"l.text | highlight:_inputValue\"></span></li></ul></div></div>",
        styles: [":host{outline:0;user-select:none;backface-visibility:hidden}.md2-tags-container{position:relative;display:block;max-width:100%;padding:2px 2px 4px;border-bottom:1px solid rgba(0,0,0,.12);box-sizing:content-box;min-width:64px;min-height:26px;cursor:text}.md2-tags-container::after,.md2-tags-container::before{display:table;content:' '}.md2-tags-container::after{clear:both}.focus .md2-tags-container{padding-bottom:3px;border-bottom:2px solid #106cc8}.md2-tags-disabled .md2-tags-container{color:rgba(0,0,0,.38);cursor:default}.md2-tags-disabled.focus .md2-tags-container{padding-bottom:4px;border-bottom:1px solid rgba(0,0,0,.38)}.md2-tag{position:relative;cursor:default;border-radius:16px;display:block;height:32px;line-height:32px;margin:4px 4px 0 0;padding:0 26px 0 12px;float:left;box-sizing:border-box;max-width:100%;background:#e0e0e0;color:#424242;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.md2-tag.active{background:#106cc8;color:rgba(255,255,255,.87)}.md2-tag.active svg{color:rgba(255,255,255,.87)}.md2-tag svg{position:absolute;top:4px;right:2px;cursor:pointer;display:inline-block;overflow:hidden;fill:currentColor;color:rgba(0,0,0,.54)}.md2-tag-add{position:relative;display:inline-block;margin-left:4px}input{border:0;outline:0;margin-top:6px;height:30px;line-height:30px;padding:0;color:rgba(0,0,0,.87);background:0 0}.md2-tags-placeholder{color:rgba(0,0,0,.38)}.md2-tags-menu{position:absolute;left:0;top:100%;display:block;z-index:10;flex-direction:column;width:100%;margin:6px 0 0;padding:8px 0;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);max-height:256px;min-height:48px;overflow-y:auto;transform:scale(1);background:#fff;backface-visibility:hidden}.md2-tags-menu .md2-tag-option{cursor:pointer;position:relative;display:block;color:#212121;align-items:center;width:auto;transition:background 150ms linear;padding:12px 16px;line-height:24px;box-sizing:border-box;word-wrap:break-word}.md2-tags-menu .md2-tag-option.focused,.md2-tags-menu .md2-tag-option:hover{background:#eee}.md2-tags-menu .md2-tag-option .md2-tag-option-text{width:auto;font-size:16px}.highlight{color:#757575} /*# sourceMappingURL=tags.css.map */ "],
        host: {
            'role': 'tags',
            '[id]': 'id',
            '[class.focus]': '_inputFocused || _selectedTag >= 0',
            '[class.md2-tags-disabled]': 'disabled',
            '[tabindex]': 'disabled ? -1 : tabindex',
            '[attr.aria-disabled]': 'disabled'
        },
        providers: [MD2_TAGS_CONTROL_VALUE_ACCESSOR],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        exportAs: 'md2Tags'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], Md2Tags);

//# sourceMappingURL=tags.js.map

/***/ }),

/***/ "./node_modules/md2/toast/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Md2ToastModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("./node_modules/md2/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_platform_index__ = __webpack_require__("./node_modules/md2/core/platform/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast__ = __webpack_require__("./node_modules/md2/toast/toast.js");
/* unused harmony namespace reexport */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var Md2ToastModule = (function () {
    function Md2ToastModule() {
    }
    return Md2ToastModule;
}());
Md2ToastModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__core__["f" /* OverlayModule */],
            __WEBPACK_IMPORTED_MODULE_2__core__["c" /* MdCommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__core_platform_index__["b" /* PlatformModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_4__toast__["b" /* Md2ToastComponent */], __WEBPACK_IMPORTED_MODULE_2__core__["c" /* MdCommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__toast__["b" /* Md2ToastComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_4__toast__["b" /* Md2ToastComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__toast__["a" /* Md2Toast */], __WEBPACK_IMPORTED_MODULE_4__toast__["c" /* Md2ToastConfig */]],
    })
], Md2ToastModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/md2/toast/toast.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Toast */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Md2ToastConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Md2Toast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Md2ToastComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core__ = __webpack_require__("./node_modules/md2/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Toast = (function () {
    function Toast(message) {
        this.message = message;
    }
    return Toast;
}());

var Md2ToastConfig = (function () {
    function Md2ToastConfig() {
        this.duration = 3000;
        this.viewContainerRef = null;
    }
    return Md2ToastConfig;
}());

var Md2Toast = (function () {
    function Md2Toast(_overlay, _config) {
        this._overlay = _overlay;
        this._config = _config;
        this.index = 0;
    }
    /**
     * toast message
     * @param toast string or object with message and other properties of toast
     */
    Md2Toast.prototype.toast = function (message, duration) {
        this.show(message, duration);
    };
    /**
     * show toast
     * @param toastObj string or object with message and other properties of toast
     */
    Md2Toast.prototype.show = function (message, duration) {
        if (!message || !message.trim()) {
            return;
        }
        if (duration) {
            this._config.duration = duration;
        }
        var toast;
        toast = new Toast(message);
        if (toast) {
            if (!this._toastInstance) {
                this._createToast();
            }
            this._setToastMessage(toast);
        }
    };
    /** Create the toast to display */
    Md2Toast.prototype._createToast = function () {
        this._createOverlay();
        var portal = new __WEBPACK_IMPORTED_MODULE_1__core__["b" /* ComponentPortal */](Md2ToastComponent, this._config.viewContainerRef);
        this._toastInstance = this._overlayRef.attach(portal).instance;
    };
    /** Create the overlay config and position strategy */
    Md2Toast.prototype._createOverlay = function () {
        if (!this._overlayRef) {
            var config = new __WEBPACK_IMPORTED_MODULE_1__core__["g" /* OverlayState */]();
            config.positionStrategy = this._overlay.position()
                .global()
                .top('0').right('0');
            this._overlayRef = this._overlay.create(config);
        }
    };
    /** Disposes the current toast and the overlay it is attached to */
    Md2Toast.prototype._disposeToast = function () {
        this._overlayRef.dispose();
        this._overlayRef = null;
        this._toastInstance = null;
    };
    /** Updates the toast message and repositions the overlay according to the new message length */
    Md2Toast.prototype._setToastMessage = function (toast) {
        var _this = this;
        toast.id = ++this.index;
        this._toastInstance.addToast(toast);
        setTimeout(function () {
            _this.clearToast(toast.id);
        }, this._config.duration);
    };
    /**
     * clear specific toast
     * @param toastId
     */
    Md2Toast.prototype.clearToast = function (toastId) {
        var _this = this;
        if (this._toastInstance) {
            this._toastInstance.removeToast(toastId);
            setTimeout(function () {
                if (!_this._toastInstance.hasToast()) {
                    _this._disposeToast();
                }
            }, 250);
        }
    };
    /**
     * clear all toasts
     */
    Md2Toast.prototype.clearAllToasts = function () {
        var _this = this;
        if (this._toastInstance) {
            this._toastInstance.removeAllToasts();
            setTimeout(function () {
                if (!_this._toastInstance.hasToast()) {
                    _this._disposeToast();
                }
            }, 250);
        }
    };
    return Md2Toast;
}());
Md2Toast = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core__["e" /* Overlay */], Md2ToastConfig])
], Md2Toast);

var Md2ToastComponent = (function () {
    function Md2ToastComponent() {
        this.toasts = [];
        this.maxShown = 5;
    }
    /**
     * add toast
     * @param toast toast object with all parameters
     */
    Md2ToastComponent.prototype.addToast = function (toast) {
        var _this = this;
        setTimeout(function () {
            toast.isVisible = true;
        }, 1);
        this.toasts.push(toast);
        if (this.toasts.length > this.maxShown) {
            this.toasts[0].isVisible = false;
            setTimeout(function () {
                _this.toasts.splice(0, (_this.toasts.length - _this.maxShown));
            }, 250);
        }
    };
    /**
     * remove toast
     * @param toastId number of toast id
     */
    Md2ToastComponent.prototype.removeToast = function (toastId) {
        var _this = this;
        this.toasts.forEach(function (t) { if (t.id === toastId) {
            t.isVisible = false;
        } });
        setTimeout(function () {
            _this.toasts = _this.toasts.filter(function (toast) { return toast.id !== toastId; });
        }, 250);
    };
    /**
     * remove all toasts
     * @param toastId number of toast id
     */
    Md2ToastComponent.prototype.removeAllToasts = function () {
        var _this = this;
        this.toasts.forEach(function (t) { t.isVisible = false; });
        setTimeout(function () {
            _this.toasts = [];
        }, 250);
    };
    /**
     * check has any toast
     * @return boolean
     */
    Md2ToastComponent.prototype.hasToast = function () { return this.toasts.length > 0; };
    return Md2ToastComponent;
}());
Md2ToastComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'md2-toast',
        template: "<div *ngFor=\"let toast of toasts\" class=\"md2-toast\" [class.in]=\"toast.isVisible\" (click)=\"removeToast(toast.id)\" [innerHTML]=\"toast.message\"></div>",
        styles: ["md2-toast{display:block;box-sizing:border-box;cursor:default;overflow:hidden;min-width:304px;max-width:100%;padding:8px;user-select:none}.md2-toast{position:relative;padding:14px 24px;margin-bottom:5px;display:block;margin-top:-53px;opacity:0;background-color:#323232;color:#fafafa;box-shadow:0 2px 5px 0 rgba(0,0,0,.26);border-radius:2px;font-size:14px;overflow:hidden;word-wrap:break-word;transition:all 250ms linear}.md2-toast.in{margin-top:0;opacity:1}.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;text-transform:none;width:1px}.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000} /*# sourceMappingURL=toast.css.map */ "],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
    })
], Md2ToastComponent);

//# sourceMappingURL=toast.js.map

/***/ }),

/***/ "./node_modules/md2/tooltip/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Md2TooltipModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core__ = __webpack_require__("./node_modules/md2/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_platform_index__ = __webpack_require__("./node_modules/md2/core/platform/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tooltip__ = __webpack_require__("./node_modules/md2/tooltip/tooltip.js");
/* unused harmony namespace reexport */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var Md2TooltipModule = (function () {
    function Md2TooltipModule() {
    }
    return Md2TooltipModule;
}());
Md2TooltipModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__core__["f" /* OverlayModule */], __WEBPACK_IMPORTED_MODULE_1__core__["c" /* MdCommonModule */], __WEBPACK_IMPORTED_MODULE_2__core_platform_index__["b" /* PlatformModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__tooltip__["a" /* Md2Tooltip */], __WEBPACK_IMPORTED_MODULE_3__tooltip__["b" /* Md2TooltipComponent */], __WEBPACK_IMPORTED_MODULE_1__core__["c" /* MdCommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__tooltip__["a" /* Md2Tooltip */], __WEBPACK_IMPORTED_MODULE_3__tooltip__["b" /* Md2TooltipComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_3__tooltip__["b" /* Md2TooltipComponent */]],
    })
], Md2TooltipModule);


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/md2/tooltip/tooltip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TOUCHEND_HIDE_DELAY */
/* unused harmony export SCROLL_THROTTLE_MS */
/* unused harmony export throwMd2TooltipInvalidPositionError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Md2Tooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Md2TooltipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("./node_modules/md2/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_rtl_dir__ = __webpack_require__("./node_modules/md2/core/rtl/dir.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_platform_index__ = __webpack_require__("./node_modules/md2/core/platform/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_first__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_overlay_scroll_scroll_dispatcher__ = __webpack_require__("./node_modules/md2/core/overlay/scroll/scroll-dispatcher.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_coercion_boolean_property__ = __webpack_require__("./node_modules/md2/core/coercion/boolean-property.js");
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









/** Time in ms to delay before changing the tooltip visibility to hidden */
var TOUCHEND_HIDE_DELAY = 1500;
/** Time in ms to throttle repositioning after scroll events. */
var SCROLL_THROTTLE_MS = 20;
/** Throws an error if the user supplied an invalid tooltip position. */
function throwMd2TooltipInvalidPositionError(position) {
    throw new Error("Tooltip position \"" + position + "\" is invalid.");
}
/**
 * Directive that attaches a material design tooltip to the host element. Animates the showing and
 * hiding of a tooltip provided position (defaults to below the element).
 *
 * https://material.google.com/components/tooltips.html
 */
var Md2Tooltip = (function () {
    function Md2Tooltip(_overlay, _elementRef, _scrollDispatcher, _viewContainerRef, _ngZone, _renderer, _platform, _dir) {
        var _this = this;
        this._overlay = _overlay;
        this._elementRef = _elementRef;
        this._scrollDispatcher = _scrollDispatcher;
        this._viewContainerRef = _viewContainerRef;
        this._ngZone = _ngZone;
        this._renderer = _renderer;
        this._platform = _platform;
        this._dir = _dir;
        this._position = 'below';
        this._disabled = false;
        /** The default delay in ms before showing the tooltip after show is called */
        this.showDelay = 0;
        /** The default delay in ms before hiding the tooltip after hide is called */
        this.hideDelay = 0;
        // The mouse events shouldn't be bound on iOS devices, because
        // they can prevent the first tap from firing its click event.
        if (!_platform.IOS) {
            _renderer.listen(_elementRef.nativeElement, 'mouseenter', function () { return _this.show(); });
            _renderer.listen(_elementRef.nativeElement, 'mouseleave', function () { return _this.hide(); });
        }
    }
    Object.defineProperty(Md2Tooltip.prototype, "position", {
        /** Allows the user to define the position of the tooltip relative to the parent element */
        get: function () { return this._position; },
        set: function (value) {
            if (value !== this._position) {
                this._position = value;
                // TODO(andrewjs): When the overlay's position can be dynamically changed, do not destroy
                // the tooltip.
                if (this._tooltipInstance) {
                    this._disposeTooltip();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Tooltip.prototype, "disabled", {
        /** Disables the display of the tooltip. */
        get: function () { return this._disabled; },
        set: function (value) {
            this._disabled = Object(__WEBPACK_IMPORTED_MODULE_8__core_coercion_boolean_property__["a" /* coerceBooleanProperty */])(value);
            // If tooltip is disabled, hide immediately.
            if (this._disabled) {
                this.hide(0);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Md2Tooltip.prototype, "message", {
        /** The message to be displayed in the tooltip */
        get: function () { return this._message; },
        set: function (value) {
            this._message = value;
            if (this._tooltipInstance) {
                this._setTooltipMessage(this._message);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Dispose the tooltip when destroyed.
     */
    Md2Tooltip.prototype.ngOnDestroy = function () {
        if (this._tooltipInstance) {
            this._disposeTooltip();
        }
    };
    /** Shows the tooltip after the delay in ms, defaults to tooltip-delay-show or 0ms if no input */
    Md2Tooltip.prototype.show = function (delay) {
        if (delay === void 0) { delay = this.showDelay; }
        if (this.disabled || !this._message || !this._message.trim()) {
            return;
        }
        if (!this._tooltipInstance) {
            this._createTooltip();
        }
        this._setTooltipMessage(this._message);
        this._tooltipInstance.show(this._position, delay);
    };
    /** Hides the tooltip after the delay in ms, defaults to tooltip-delay-hide or 0ms if no input */
    Md2Tooltip.prototype.hide = function (delay) {
        if (delay === void 0) { delay = this.hideDelay; }
        if (this._tooltipInstance) {
            this._tooltipInstance.hide(delay);
        }
    };
    /** Shows/hides the tooltip */
    Md2Tooltip.prototype.toggle = function () {
        this._isTooltipVisible() ? this.hide() : this.show();
    };
    /** Returns true if the tooltip is currently visible to the user */
    Md2Tooltip.prototype._isTooltipVisible = function () {
        return !!this._tooltipInstance && this._tooltipInstance.isVisible();
    };
    /** Create the tooltip to display */
    Md2Tooltip.prototype._createTooltip = function () {
        var _this = this;
        this._createOverlay();
        var portal = new __WEBPACK_IMPORTED_MODULE_2__core__["b" /* ComponentPortal */](Md2TooltipComponent, this._viewContainerRef);
        this._tooltipInstance = this._overlayRef.attach(portal).instance;
        // Dispose the overlay when finished the shown tooltip.
        this._tooltipInstance.afterHidden().subscribe(function () {
            // Check first if the tooltip has already been removed through this components destroy.
            if (_this._tooltipInstance) {
                _this._disposeTooltip();
            }
        });
    };
    /** Create the overlay config and position strategy */
    Md2Tooltip.prototype._createOverlay = function () {
        var _this = this;
        var origin = this._getOrigin();
        var position = this._getOverlayPosition();
        // Create connected position strategy that listens for scroll events to reposition.
        // After position changes occur and the overlay is clipped by a parent scrollable then
        // close the tooltip.
        var strategy = this._overlay.position().connectedTo(this._elementRef, origin, position);
        strategy.withScrollableContainers(this._scrollDispatcher.getScrollContainers(this._elementRef));
        strategy.onPositionChange.subscribe(function (change) {
            if (change.scrollableViewProperties.isOverlayClipped &&
                _this._tooltipInstance && _this._tooltipInstance.isVisible()) {
                _this.hide(0);
            }
        });
        var config = new __WEBPACK_IMPORTED_MODULE_2__core__["g" /* OverlayState */]();
        config.direction = this._dir ? this._dir.value : 'ltr';
        config.positionStrategy = strategy;
        config.scrollStrategy = this._overlay.scrollStrategies.reposition({
            scrollThrottle: SCROLL_THROTTLE_MS
        });
        this._overlayRef = this._overlay.create(config);
    };
    /** Disposes the current tooltip and the overlay it is attached to */
    Md2Tooltip.prototype._disposeTooltip = function () {
        this._overlayRef.dispose();
        this._overlayRef = null;
        this._tooltipInstance = null;
    };
    /** Returns the origin position based on the user's position preference */
    Md2Tooltip.prototype._getOrigin = function () {
        if (this.position == 'above' || this.position == 'below') {
            return { originX: 'center', originY: this.position == 'above' ? 'top' : 'bottom' };
        }
        var isDirectionLtr = !this._dir || this._dir.value == 'ltr';
        if (this.position == 'left' ||
            this.position == 'before' && isDirectionLtr ||
            this.position == 'after' && !isDirectionLtr) {
            return { originX: 'start', originY: 'center' };
        }
        if (this.position == 'right' ||
            this.position == 'after' && isDirectionLtr ||
            this.position == 'before' && !isDirectionLtr) {
            return { originX: 'end', originY: 'center' };
        }
        throwMd2TooltipInvalidPositionError(this.position);
    };
    /** Returns the overlay position based on the user's preference */
    Md2Tooltip.prototype._getOverlayPosition = function () {
        if (this.position == 'above') {
            return { overlayX: 'center', overlayY: 'bottom' };
        }
        if (this.position == 'below') {
            return { overlayX: 'center', overlayY: 'top' };
        }
        var isLtr = !this._dir || this._dir.value == 'ltr';
        if (this.position == 'left' ||
            this.position == 'before' && isLtr ||
            this.position == 'after' && !isLtr) {
            return { overlayX: 'end', overlayY: 'center' };
        }
        if (this.position == 'right' ||
            this.position == 'after' && isLtr ||
            this.position == 'before' && !isLtr) {
            return { overlayX: 'start', overlayY: 'center' };
        }
        throwMd2TooltipInvalidPositionError(this.position);
    };
    /** Updates the tooltip message and repositions the overlay according to the new message length */
    Md2Tooltip.prototype._setTooltipMessage = function (message) {
        var _this = this;
        // Must wait for the message to be painted to the tooltip so that the overlay can properly
        // calculate the correct positioning based on the size of the text.
        this._tooltipInstance.message = message;
        this._tooltipInstance._markForCheck();
        this._ngZone.onMicrotaskEmpty.first().subscribe(function () {
            if (_this._tooltipInstance) {
                _this._overlayRef.updatePosition();
            }
        });
    };
    return Md2Tooltip;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tooltip-position'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Md2Tooltip.prototype, "position", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tooltipDisabled'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], Md2Tooltip.prototype, "disabled", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tooltip-delay'),
    __metadata("design:type", Object)
], Md2Tooltip.prototype, "showDelay", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tooltip-hide-delay'),
    __metadata("design:type", Object)
], Md2Tooltip.prototype, "hideDelay", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tooltip'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [String])
], Md2Tooltip.prototype, "message", null);
Md2Tooltip = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[tooltip]',
        host: {
            '(longpress)': 'show()',
            '(touchend)': 'hide(' + TOUCHEND_HIDE_DELAY + ')',
        },
        exportAs: 'md2Tooltip',
    }),
    __param(7, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core__["e" /* Overlay */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
        __WEBPACK_IMPORTED_MODULE_7__core_overlay_scroll_scroll_dispatcher__["b" /* ScrollDispatcher */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"],
        __WEBPACK_IMPORTED_MODULE_5__core_platform_index__["a" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_4__core_rtl_dir__["a" /* Dir */]])
], Md2Tooltip);

/**
 * Internal component that wraps the tooltip's content.
 * @docs-private
 */
var Md2TooltipComponent = (function () {
    function Md2TooltipComponent(_dir, _changeDetectorRef) {
        this._dir = _dir;
        this._changeDetectorRef = _changeDetectorRef;
        /** Property watched by the animation framework to show or hide the tooltip */
        this._visibility = 'initial';
        /** Whether interactions on the page should close the tooltip */
        this._closeOnInteraction = false;
        /** The transform origin used in the animation for showing and hiding the tooltip */
        this._transformOrigin = 'bottom';
        /** Subject for notifying that the tooltip has been hidden from the view */
        this._onHide = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
    }
    /**
     * Shows the tooltip with an animation originating from the provided origin
     * @param position Position of the tooltip.
     * @param delay Amount of milliseconds to the delay showing the tooltip.
     */
    Md2TooltipComponent.prototype.show = function (position, delay) {
        var _this = this;
        // Cancel the delayed hide if it is scheduled
        if (this._hideTimeoutId) {
            clearTimeout(this._hideTimeoutId);
        }
        // Body interactions should cancel the tooltip if there is a delay in showing.
        this._closeOnInteraction = true;
        this._setTransformOrigin(position);
        this._showTimeoutId = setTimeout(function () {
            _this._visibility = 'visible';
            // If this was set to true immediately, then a body click that triggers show() would
            // trigger interaction and close the tooltip right after it was displayed.
            _this._closeOnInteraction = false;
            // Mark for check so if any parent component has set the
            // ChangeDetectionStrategy to OnPush it will be checked anyways
            _this._markForCheck();
            setTimeout(function () { return _this._closeOnInteraction = true; }, 0);
        }, delay);
    };
    /**
     * Begins the animation to hide the tooltip after the provided delay in ms.
     * @param delay Amount of milliseconds to delay showing the tooltip.
     */
    Md2TooltipComponent.prototype.hide = function (delay) {
        var _this = this;
        // Cancel the delayed show if it is scheduled
        if (this._showTimeoutId) {
            clearTimeout(this._showTimeoutId);
        }
        this._hideTimeoutId = setTimeout(function () {
            _this._visibility = 'hidden';
            _this._closeOnInteraction = false;
            // Mark for check so if any parent component has set the
            // ChangeDetectionStrategy to OnPush it will be checked anyways
            _this._markForCheck();
        }, delay);
    };
    /**
     * Returns an observable that notifies when the tooltip has been hidden from view
     */
    Md2TooltipComponent.prototype.afterHidden = function () {
        return this._onHide.asObservable();
    };
    /**
     * Whether the tooltip is being displayed
     */
    Md2TooltipComponent.prototype.isVisible = function () {
        return this._visibility === 'visible';
    };
    /** Sets the tooltip transform origin according to the tooltip position */
    Md2TooltipComponent.prototype._setTransformOrigin = function (value) {
        var isLtr = !this._dir || this._dir.value == 'ltr';
        switch (value) {
            case 'before':
                this._transformOrigin = isLtr ? 'right' : 'left';
                break;
            case 'after':
                this._transformOrigin = isLtr ? 'left' : 'right';
                break;
            case 'left':
                this._transformOrigin = 'right';
                break;
            case 'right':
                this._transformOrigin = 'left';
                break;
            case 'above':
                this._transformOrigin = 'bottom';
                break;
            case 'below':
                this._transformOrigin = 'top';
                break;
            default: throwMd2TooltipInvalidPositionError(value);
        }
    };
    Md2TooltipComponent.prototype._afterVisibilityAnimation = function (e) {
        if (e.toState === 'hidden' && !this.isVisible()) {
            this._onHide.next();
        }
    };
    /**
     * Interactions on the HTML body should close the tooltip immediately as defined in the
     * material design spec.
     * https://material.google.com/components/tooltips.html#tooltips-interaction
     */
    Md2TooltipComponent.prototype._handleBodyInteraction = function () {
        if (this._closeOnInteraction) {
            this.hide(0);
        }
    };
    /**
     * Marks that the tooltip needs to be checked in the next change detection run.
     * Mainly used for rendering the initial text before positioning a tooltip, which
     * can be problematic in components with OnPush change detection.
     */
    Md2TooltipComponent.prototype._markForCheck = function () {
        this._changeDetectorRef.markForCheck();
    };
    return Md2TooltipComponent;
}());
Md2TooltipComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({selector: 'md2-tooltip',
        template: "<div class=\"md2-tooltip\" [style.transform-origin]=\"_transformOrigin\" [@state]=\"_visibility\" (@state.done)=\"_afterVisibilityAnimation($event)\" [innerHTML]=\"message\"></div>",
        styles: ["md2-tooltip{pointer-events:none}.md2-tooltip{color:#fff;padding:6px 8px;border-radius:2px;font-size:10px;margin:14px;max-width:250px;background:rgba(97,97,97,.9);word-wrap:break-word}.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000} /*# sourceMappingURL=tooltip.css.map */ "],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* trigger */])('state', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ transform: 'scale(0)' })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('initial', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ transform: 'scale(0)' })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('visible', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ transform: 'scale(1)' })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('hidden', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ transform: 'scale(0)' })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('* => visible', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('150ms cubic-bezier(0.0, 0.0, 0.2, 1)')),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('* => hidden', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('150ms cubic-bezier(0.4, 0.0, 1, 1)')),
            ])
        ],
        host: {
            '[style.zoom]': '_visibility === "visible" ? 1 : null',
            '(body:click)': 'this._handleBodyInteraction()'
        },
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__core_rtl_dir__["a" /* Dir */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
], Md2TooltipComponent);

//# sourceMappingURL=tooltip.js.map

/***/ }),

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

module.exports = "<title>Aspect WO Assignment</title>\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<script src=\"https://maps.googleapis.com/maps/api/js?sensor=false\"></script>\r\n<style>\r\n    .tab-pane .table tbody > tr > td:first-child {\r\n        width: 0px !important;\r\n    }\r\n    /* USER PROFILE PAGE */\r\n    .card {\r\n        margin-top: 20px;\r\n        padding: 30px;\r\n        background-color: rgba(214, 224, 226, 0.2);\r\n        -webkit-border-top-left-radius: 5px;\r\n        -moz-border-top-left-radius: 5px;\r\n        border-top-left-radius: 5px;\r\n        -webkit-border-top-right-radius: 5px;\r\n        -moz-border-top-right-radius: 5px;\r\n        border-top-right-radius: 5px;\r\n        -webkit-box-sizing: border-box;\r\n        -moz-box-sizing: border-box;\r\n        box-sizing: border-box;\r\n    }\r\n\r\n        .card.hovercard {\r\n            position: relative;\r\n            padding-top: 0;\r\n            overflow: hidden;\r\n            text-align: center;\r\n            background-color: #fff;\r\n            background-color: rgba(255, 255, 255, 1);\r\n        }\r\n\r\n            .card.hovercard .card-background {\r\n                height: 130px;\r\n            }\r\n\r\n    .card-background img {\r\n        -webkit-filter: blur(25px);\r\n        -moz-filter: blur(25px);\r\n        -o-filter: blur(25px);\r\n        -ms-filter: blur(25px);\r\n        filter: blur(25px);\r\n        margin-left: -100px;\r\n        margin-top: -200px;\r\n        min-width: 130%;\r\n    }\r\n\r\n    .dropdownview {\r\n        -webkit-appearance: menulist-button;\r\n    }\r\n\r\n    .card.hovercard .useravatar {\r\n        position: absolute;\r\n        top: 15px;\r\n        left: 0;\r\n        right: 0;\r\n    }\r\n\r\n        .card.hovercard .useravatar img {\r\n            width: 100px;\r\n            height: 100px;\r\n            max-width: 100px;\r\n            max-height: 100px;\r\n            -webkit-border-radius: 50%;\r\n            -moz-border-radius: 50%;\r\n            border-radius: 50%;\r\n            border: 5px solid rgba(255, 255, 255, 0.5);\r\n        }\r\n\r\n    .card.hovercard .card-info {\r\n        position: absolute;\r\n        bottom: 14px;\r\n        left: 0;\r\n        right: 0;\r\n    }\r\n\r\n        .card.hovercard .card-info .card-title {\r\n            padding: 0 5px;\r\n            font-size: 20px;\r\n            line-height: 1;\r\n            color: #e91e63;\r\n            background-color: rgba(255, 255, 255, 0.1);\r\n            -webkit-border-radius: 4px;\r\n            -moz-border-radius: 4px;\r\n            border-radius: 4px;\r\n        }\r\n\r\n    .card.hovercard .card-info {\r\n        overflow: hidden;\r\n        font-size: 12px;\r\n        line-height: 20px;\r\n        color: white;\r\n        text-overflow: ellipsis;\r\n    }\r\n\r\n    .card.hovercard .bottom {\r\n        padding: 0 20px;\r\n        margin-bottom: 17px;\r\n    }\r\n\r\n    .btn-pref .btn {\r\n        -webkit-border-radius: 0 !important;\r\n    }\r\n\r\n    .panel-group .panel {\r\n        border-radius: 0;\r\n        box-shadow: none;\r\n        border-color: #EEEEEE;\r\n    }\r\n\r\n    .panel-default > .panel-heading {\r\n        padding: 0;\r\n        border-radius: 0;\r\n        color: #212121;\r\n        background-color: #FAFAFA;\r\n        border-color: #EEEEEE;\r\n    }\r\n\r\n    .panel-title {\r\n        font-size: 14px;\r\n    }\r\n\r\n        .panel-title > a {\r\n            display: block;\r\n            padding: 15px;\r\n            text-decoration: none;\r\n        }\r\n\r\n    .more-less {\r\n        float: right;\r\n        color: #212121;\r\n    }\r\n\r\n    .panel-default > .panel-heading + .panel-collapse > .panel-body {\r\n        border-top-color: #EEEEEE;\r\n    }\r\n\r\n    .bradius {\r\n        border-radius: 5px !important;\r\n    }\r\n    ::ng-deep .cdk-overlay-container {\r\n    z-index: 1045!important;\r\n}\r\n</style>\r\n<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"col-lg-12\" style=\"margin-bottom:20px;\">\r\n            <div class=\"row\">\r\n                <div style=\"background-color:white;\">\r\n                    <div class=\"card\" style=\"background-color:transparent !important;-webkit-box-shadow:none !important\">\r\n                        <div class=\"card-content\">\r\n                            <ul class=\"nav nav-pills nav-pills-rose\">\r\n                                <li class=\"active\">\r\n                                    <a href=\"#pill1\" data-toggle=\"tab\" class=\"bradius\" (click)=\"activityDocHide()\">Assignment</a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"#pill2\" data-toggle=\"tab\" class=\"bradius\" (click)=\"activityDocShow()\">Activity</a>\r\n                                </li>\r\n                            </ul>\r\n                            <div class=\"tab-content\">\r\n                                <div class=\"tab-pane active\" id=\"pill1\">\r\n                                    <div class=\"panel-body\">\r\n                                        <div class=\"col-sm-6\">\r\n                                            <h4>Work Order Details - {{workOrderDetail.WorkOrderNo}} For {{workOrderDetail.ClientName}}</h4>\r\n                                            <input type=\"hidden\" style=\"display:none\" id=\"search\" #search />\r\n                                            <table class=\"table table-responsive table-bordered table-hover\" style=\"float:left !important\">\r\n                                                <tbody>\r\n                                                    <tr>\r\n                                                        <td>Work Order Address</td>\r\n                                                        <td>{{wrokOrdAddress}} </td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td>Work Order Description</td>\r\n                                                        <td>\r\n                                                            <ng-container *ngIf=\"workOrderDetail.Description\">{{workOrderDetail.Description}}</ng-container>\r\n                                                            <ng-container *ngIf=\"!workOrderDetail.Description\">{{workOrderDetail.JobDescription}}</ng-container>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td>Project Manager</td>\r\n                                                        <td>{{ workOrderDetail.ProjectManager }}</td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td>Due Date</td>\r\n                                                        <td>{{ workOrderDetail.DateDue }}</td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </div>\r\n                                    <div class=\"col-sm-6\">\r\n                                        <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"true\" [zoom]=\"zoom\" style=\"height:400px;\">\r\n                                            <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\r\n                                        </agm-map>\r\n                                    </div>\r\n                                        </div>\r\n                                </div>\r\n                                <div class=\"tab-pane\" id=\"pill2\">\r\n                                    <div class=\"card card-plain\">\r\n                                        <h4>Activity for {{workOrderDetail.WorkOrderNo}}</h4>\r\n                                        <div class=\"card-content\">\r\n                                            <ul class=\"timeline\">\r\n                                                <ng-container *ngFor=\"let actTrack of workOrdActTrackerList\">\r\n                                                    <ng-container *ngIf=\"actTrack.CategoryTitle == 'Work Order Assigned'\">\r\n                                                        <li class=\"timeline-inverted\">\r\n                                                            <div class=\"timeline-badge info\">\r\n                                                                <i class=\"material-icons\" matTooltip=\"{{actTrack.WoNumber}}\" [matTooltipPosition]=\"'above'\">fingerprint</i>\r\n                                                            </div>\r\n                                                            <div class=\"timeline-panel\">\r\n                                                                <div class=\"timeline-heading\">\r\n                                                                    <span class=\"label label-info\">{{actTrack.CategoryTitle}}</span>\r\n                                                                </div>\r\n                                                                <div class=\"timeline-body\">\r\n                                                                    <p>User: <strong>{{actTrack.Username}}.</strong></p>\r\n                                                                    <p>{{actTrack.CategoryDesription}}</p>\r\n                                                                </div>\r\n                                                                <h6>\r\n                                                                    <i class=\"ti-time\"></i> {{actTrack.TrackDatetime | date: 'dd/MM/yyyy HH:mm:ss'}} <!--11 hours ago via Twitter-->\r\n                                                                </h6>\r\n                                                            </div>\r\n                                                        </li>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"actTrack.CategoryTitle == 'Work Order Accepted'\">\r\n                                                        <li>\r\n                                                            <div class=\"timeline-badge success\">\r\n                                                                <i class=\"material-icons\" matTooltip=\"{{actTrack.WoNumber}}\" [matTooltipPosition]=\"'above'\">extension</i>\r\n                                                            </div>\r\n                                                            <div class=\"timeline-panel\">\r\n                                                                <div class=\"timeline-heading\">\r\n                                                                    <span class=\"label label-success\">{{actTrack.CategoryTitle}}</span>\r\n                                                                </div>\r\n                                                                <div class=\"timeline-body\">\r\n                                                                    <p>User: <strong>{{actTrack.Username}}.</strong></p>\r\n                                                                    <p>{{actTrack.CategoryDesription}}</p>\r\n                                                                </div>\r\n                                                                <h6>\r\n                                                                    <i class=\"ti-time\"></i> {{actTrack.TrackDatetime | date: 'dd/MM/yyyy HH:mm:ss'}} <!--11 hours ago via Twitter-->\r\n                                                                </h6>\r\n                                                            </div>\r\n                                                        </li>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"actTrack.CategoryTitle == 'Work Order Decline'\">\r\n                                                        <li class=\"timeline-inverted\">\r\n                                                            <div class=\"timeline-badge danger\">\r\n                                                                <i class=\"material-icons\" matTooltip=\"{{actTrack.WoNumber}}\" [matTooltipPosition]=\"'above'\">card_travel</i>\r\n                                                            </div>\r\n                                                            <div class=\"timeline-panel\">\r\n                                                                <div class=\"timeline-heading\">\r\n                                                                    <span class=\"label label-danger\">{{actTrack.CategoryTitle}}</span>\r\n                                                                </div>\r\n                                                                <div class=\"timeline-body\">\r\n                                                                    <p>User: <strong>{{actTrack.Username}}.</strong></p>\r\n                                                                    <p>{{actTrack.CategoryDesription}}</p>\r\n                                                                </div>\r\n                                                                <h6>\r\n                                                                    <i class=\"ti-time\"></i> {{actTrack.TrackDatetime | date: 'dd/MM/yyyy HH:mm:ss'}} <!--11 hours ago via Twitter-->\r\n                                                                </h6>\r\n                                                            </div>\r\n                                                        </li>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"actTrack.CategoryTitle == 'Work Order Unassigned'\">\r\n                                                        <li>\r\n                                                            <div class=\"timeline-badge warning\">\r\n                                                                <i class=\"material-icons\"  matTooltip=\"{{actTrack.WoNumber}}\" [matTooltipPosition]=\"'above'\">flight_land</i>\r\n                                                            </div>\r\n                                                            <div class=\"timeline-panel\">\r\n                                                                <div class=\"timeline-heading\">\r\n                                                                    <span class=\"label label-warning\">{{actTrack.CategoryTitle}}</span>\r\n                                                                </div>\r\n                                                                <div class=\"timeline-body\">\r\n                                                                    <p>User: <strong>{{actTrack.Username}}.</strong></p>\r\n                                                                    <p>{{actTrack.CategoryDesription}}</p>\r\n                                                                </div>\r\n                                                                <h6>\r\n                                                                    <i class=\"ti-time\"></i> {{actTrack.TrackDatetime | date: 'dd/MM/yyyy HH:mm:ss'}} <!--11 hours ago via Twitter-->\r\n                                                                </h6>\r\n                                                            </div>\r\n                                                        </li>\r\n                                                    </ng-container>\r\n                                                    </ng-container>\r\n                                                <!--<li>\r\n                                                    <div class=\"timeline-badge success\">\r\n                                                        <i class=\"material-icons\">extension</i>\r\n                                                    </div>\r\n                                                    <div class=\"timeline-panel\">\r\n                                                        <div class=\"timeline-heading\">\r\n                                                            <span class=\"label label-success\">Another One</span>\r\n                                                        </div>\r\n                                                        <div class=\"timeline-body\">\r\n                                                            <p>Thank God for the support of my wife and real friends. I also wanted to point out that it’s the first album to go number 1 off of streaming!!! I love you Ellen and also my number one design rule of anything I do from shoes to music to homes is that Kim has to like it....</p>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </li>\r\n                                                <li class=\"timeline-inverted\">\r\n                                                    <div class=\"timeline-badge info\">\r\n                                                        <i class=\"material-icons\">fingerprint</i>\r\n                                                    </div>\r\n                                                    <div class=\"timeline-panel\">\r\n                                                        <div class=\"timeline-heading\">\r\n                                                            <span class=\"label label-info\">Another Title</span>\r\n                                                        </div>\r\n                                                        <div class=\"timeline-body\">\r\n                                                            <p>Called I Miss the Old Kanye That’s all it was Kanye And I love you like Kanye loves Kanye Famous viewing @ Figueroa and 12th in downtown LA 11:10PM</p>\r\n                                                            <p>What if Kanye made a song about Kanye Royère doesn't make a Polar bear bed but the Polar bear couch is my favorite piece of furniture we own It wasn’t any Kanyes Set on his goals Kanye</p>\r\n                                                            <hr>\r\n                                                            <div class=\"dropdown pull-left\">\r\n                                                                <button type=\"button\" class=\"btn btn-round btn-info dropdown-toggle\" data-toggle=\"dropdown\">\r\n                                                                    <i class=\"material-icons\">build</i>\r\n                                                                    <span class=\"caret\"></span>\r\n                                                                </button>\r\n                                                                <ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\">\r\n                                                                    <li>\r\n                                                                        <a href=\"#action\">Action</a>\r\n                                                                    </li>\r\n                                                                    <li>\r\n                                                                        <a href=\"#action\">Another action</a>\r\n                                                                    </li>\r\n                                                                    <li>\r\n                                                                        <a href=\"#here\">Something else here</a>\r\n                                                                    </li>\r\n                                                                    <li class=\"divider\"></li>\r\n                                                                    <li>\r\n                                                                        <a href=\"#link\">Separated link</a>\r\n                                                                    </li>\r\n                                                                </ul>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </li>\r\n                                                <li>\r\n                                                    <div class=\"timeline-badge warning\">\r\n                                                        <i class=\"material-icons\">flight_land</i>\r\n                                                    </div>\r\n                                                    <div class=\"timeline-panel\">\r\n                                                        <div class=\"timeline-heading\">\r\n                                                            <span class=\"label label-warning\">Another One</span>\r\n                                                        </div>\r\n                                                        <div class=\"timeline-body\">\r\n                                                            <p>Tune into Big Boy's 92.3 I'm about to play the first single from Cruel Winter Tune into Big Boy's 92.3 I'm about to play the first single from Cruel Winter also to Kim’s hair and makeup Lorraine jewelry and the whole style squad at Balmain and the Yeezy team. Thank you Anna for the invite thank you to the whole Vogue team</p>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </li>-->\r\n                                            </ul>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <br /><br />\r\n        <div *ngIf=\"isActivity == false\">\r\n            <div class=\"col-lg-12\" style=\"background-color:white;\"> <!--margin-bottom:20px;-->\r\n                <!--<div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\r\n                    <div class=\"panel panel-default\">-->\r\n                <header>\r\n                    <h4 style=\"float:left;margin-top:20px\"><b>Work Orders {{workOrderDetail.WorkOrderNo}}</b></h4>\r\n                    <button  data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"getAutocompleteUser()\" class=\"btn btn-simple btn-icon pull-right\" matTooltip=\"Work Order Assignment\" [matTooltipPosition]=\"'left'\">\r\n                        <i class=\"more-less glyphicon glyphicon-plus\"></i>\r\n                    </button>\r\n                    <!--<div data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"resetWorkOrderAssignment()\" class=\"btn pull-right btn-info\"><i class=\"fa fa-address-book\"></i></div>-->\r\n                </header>\r\n                \r\n                        <!--<div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\r\n                            <h4 class=\"panel-title\">\r\n                                <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n                                    <i class=\"more-less glyphicon glyphicon-plus\"></i>\r\n                                    {{workOrderDetail.WorkOrderNo}}\r\n                                </a>\r\n                            </h4>\r\n                        </div>-->\r\n                        <!--<div id=\"collapseOne\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\">-->\r\n                            <div class=\"panel-body\">  <!--style=\"background-color:#EEEEEE!important;\"-->\r\n                                <table class=\"table table-bordered  table-responsive table-hover\" style=\"float:left !important;margin-bottom:0\">\r\n                                    <tr>\r\n                                        <th>User</th>\r\n                                        <th>Notes</th>\r\n                                        <th></th>\r\n                                    </tr>\r\n                                    <tr *ngFor=\"let workAsg of workOrderAssignmentList\">\r\n                                        <td>{{workAsg.UserName}}</td>\r\n                                        <td>{{workAsg.Description}}</td>\r\n                                        <td class=\"text-center\">\r\n                                        <i class=\"fa fa-close\" style=\"cursor: pointer;\" (click)=\"deleteWorkOrderAssignment(workAsg.ID)\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\"></i></td>\r\n                                    </tr>\r\n                                </table>\r\n                \r\n                                <button type=\"submit\" class=\"btn btn-info\" (click)=\"sendEmailWorkOrderAssignment()\" [disabled]=\"isSend\" style=\"float:left\">Send</button>\r\n                                <span *ngIf=\"sendDateTime\" style=\"float: left;padding: 20px 7px;\">\r\n                                    {{sendDateTime | date: 'dd/MM/yyyy HH:mm:ss' }}\r\n                                </span>\r\n                                \r\n                            </div>\r\n                        <!--</div>\r\n                        </div>\r\n        </div>-->\r\n</div>\r\n            <div class=\"row\"></div>\r\n            <br />\r\n            <div class=\"col-lg-12\" style=\"background-color:white\">\r\n                <header>\r\n                    <h4  style=\"float:left;margin-top:20px\">\r\n                        <b> Add Documents</b>\r\n                    </h4>\r\n                    <div class=\"pull-right\" style=\"padding: 19px 35px;\">\r\n                        <div class=\"picture-container\">\r\n                            <div class=\"picture\">\r\n                                <label for=\"woDocs\">\r\n                                    <!--<i class=\"material-icons btn btn-info\">add_circle</i>-->\r\n                                        <i class=\"more-less glyphicon glyphicon-plus\" style=\"font-size:12px;cursor: pointer;\" matTooltip=\"Work Order Document\" [matTooltipPosition]=\"'left'\"></i>\r\n                                </label>\r\n                                <input type=\"file\" style=\"display:none\" id=\"woDocs\" (change)=\"handleUpload($event)\" ng2FileSelect [uploader]=\"uploader\" multiple /><!--accept=\".pdf,.doc,.docx\"-->\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </header>\r\n                <div class=\"panel-body\">\r\n                    <table class=\"table table-bordered  table-responsive table-hover\" style=\"float:left !important\">\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>Name</th>\r\n                            <th></th>\r\n                        </tr>\r\n                        <tr *ngFor=\"let wODoc of workOrderDocsList;let idx=index\">\r\n                            <td><strong>{{idx + 1}}.</strong></td>\r\n                            <td><strong><a href=\"{{wODoc.FilePath}}\" target=\"_blank\">{{ wODoc.FileName }}</a></strong></td>\r\n                            <td class=\"text-center\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\"><i class=\"fa fa-close\" style=\"cursor: pointer;\" (click)=\"deleteWorkOrderDocuments(wODoc.ID,wODoc.WorkOrderId, wODoc.WorkOrderNo, wODoc.FileName)\"></i></td>\r\n                        </tr>\r\n                        <tr *ngFor=\"let item of uploader.queue\">\r\n                            <td><strong></strong></td>\r\n                            <td><strong>{{ item?.file?.name }}</strong></td>\r\n                            <td class=\"text-center\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\"><i class=\"fa fa-close\" style=\"cursor: pointer;\" (click)=\"item.remove()\"></i></td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n                <div class=\"progress\" style=\"\">\r\n                    <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\r\n                </div>\r\n                <div class=\"pull-left\">\r\n                    <button class=\"btn btn-info btn-round\" (click)=\"addWorkOrderDocument();\" [disabled]=\"!uploader.getNotUploadedItems().length\">\r\n                        Upload\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- Classic Modal -->\r\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"wizard-container\">\r\n            <div class=\"wizard-card\" data-color=\"rose\" id=\"wizardProfile\">\r\n                <form [formGroup]=\"workOrdAssPage\">\r\n\r\n                    <div class=\"modal-content\">\r\n                        <div class=\"modal-header\">\r\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\r\n                                <i class=\"material-icons\">clear</i>\r\n                            </button>\r\n                            <h4 class=\"modal-title\">Assign User</h4>\r\n                        </div>\r\n                        <div class=\"modal-body\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-12\">\r\n                                    <div class=\"form-group label-floating cntEmpty\" [ngClass]=\"displayFieldCss(workOrdAssPage, 'userName')\">\r\n                                        <label class=\"control-label\">Start typing to select user</label>\r\n                                        <input ngui-auto-complete formControlName=\"userName\" name=\"userName\" [source]=\"autoUsers\" value-property-name=\"ID\"\r\n                                               display-property-name=\"UserName\" [list-formatter]=\"myListFormatter\" class=\"form-control\"\r\n                                               (valueChanged)=\"valueChanged($event)\" />\r\n                                        <app-field-error-display [displayError]=\"isFieldValid(workOrdAssPage, 'userName')\" errorMsg=\"Select username.\">\r\n                                        </app-field-error-display>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-12\">\r\n                                    <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(workOrdAssPage, 'description')\">\r\n                                        <label class=\"control-label\">Add notes or information here</label>\r\n                                        <!--<input type=\"text\" formControlName=\"description\" name=\"description\" class=\"form-control\" />-->\r\n                                        <textarea class=\"form-control\" rows=\"4\" cols=\"50\" id=\"description\" formControlName=\"description\"></textarea>\r\n                                        <app-field-error-display [displayError]=\"isFieldValid(workOrdAssPage, 'description')\" errorMsg=\"Notes is required.\">\r\n                                        </app-field-error-display>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-6\">\r\n                                    <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(workOrdAssPage, 'ratetype')\">\r\n                                        <label class=\"control-label\">RateType</label>\r\n                                        <select placeholder=\"Assign rate\" formControlName=\"ratetype\" name=\"ratetype\" class=\"form-control dropdownview\">\r\n                                            <option value=\"1\" selected>Hourly</option>\r\n                                            <option value=\"2\">Fixed</option>\r\n                                            <option value=\"3\">Boxed</option>\r\n                                        </select>\r\n                                        <app-field-error-display [displayError]=\"isFieldValid(workOrdAssPage, 'ratetype')\" errorMsg=\"RateType is required.\">\r\n                                        </app-field-error-display>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-lg-6\">\r\n                                    <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(workOrdAssPage, 'rate')\">\r\n                                        <label class=\"control-label\">Rate</label>\r\n                                        <input type=\"text\" formControlName=\"rate\" name=\"rate\" class=\"form-control number-decimal-only\"/>\r\n                                        <app-field-error-display [displayError]=\"isFieldValid(workOrdAssPage, 'rate')\" errorMsg=\"Rate is required.\">\r\n                                        </app-field-error-display>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-6\">\r\n                                    <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(workOrdAssPage, 'fromdate')\">\r\n                                        <br />\r\n                                        <!--<mat-datepicker-toggle matSuffix [for]=\"datepickerYear1\">\r\n                                        </mat-datepicker-toggle>\r\n                                        <mat-input-container>\r\n                                            <input matInput\r\n                                                   [matDatepicker]=\"datepickerYear1\" name=\"fromdate\"\r\n                                                   placeholder=\"From Date\" formControlName=\"fromdate\">\r\n                                        </mat-input-container>\r\n                                        <mat-datepicker #datepickerYear1\r\n                                                        [startView]=\"'month'\">\r\n                                        </mat-datepicker>-->\r\n                                        <md2-datepicker placeholder=\"From Date\" formControlName=\"fromdate\" name=\"fromdate\" format=\"dd/MM/y HH:mm A\" type=\"datetime\" startView=\"month\"></md2-datepicker>\r\n                                        <app-field-error-display [displayError]=\"isFieldValid(workOrdAssPage, 'fromdate')\" errorMsg=\"From Date is required.\">\r\n                                        </app-field-error-display>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-lg-6\">\r\n                                    <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(workOrdAssPage, 'todate')\">\r\n                                        <br />\r\n                                        <!--<mat-datepicker-toggle matSuffix [for]=\"datepickerYear\">\r\n                                        </mat-datepicker-toggle>\r\n                                        <mat-input-container>\r\n                                            <input matInput\r\n                                                   [matDatepicker]=\"datepickerYear\" name=\"todate\"\r\n                                                   placeholder=\"To Date\" formControlName=\"todate\">\r\n                                        </mat-input-container>\r\n                                        <mat-datepicker #datepickerYear\r\n                                                        [startView]=\"'month'\">\r\n                                        </mat-datepicker>-->\r\n                                        <md2-datepicker placeholder=\"To Date\" formControlName=\"todate\" name=\"todate\" format=\"dd/MM/y HH:mm A\" type=\"datetime\" startView=\"month\"></md2-datepicker>\r\n                                        <app-field-error-display [displayError]=\"isFieldValid(workOrdAssPage, 'todate')\" errorMsg=\"To date should be greater than From date\">\r\n                                        </app-field-error-display>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <br />\r\n                                <div class=\"pull-right\">\r\n                                    <button type=\"submit\" id=\"btnSubmit\" class=\"btn btn-rose\" (click)=\"createWorkOrderAssignment()\">Submit</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--  End Modal -->\r\n\r\n\r\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\r\n<script>\r\n    $(document).ready(function () {\r\n        $('.loader').hide();\r\n    });\r\n    function toggleIcon(e) {\r\n        $(e.target)\r\n            .prev('.panel-heading')\r\n            .find(\".more-less\")\r\n            .toggleClass('glyphicon-plus glyphicon-minus');\r\n    }\r\n    $('.panel-group').on('hidden.bs.collapse', toggleIcon);\r\n    $('.panel-group').on('shown.bs.collapse', toggleIcon);\r\n</script>\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
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
    function WoAssignmentComponent(mapsAPILoader, ngZone, http, router, activatedRoute, commonService, workOrderService, activityService, userService, _sanitizer, formBuilder, dateAdapter, datepipe) {
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
        this.datepipe = datepipe;
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
                WorkOrderAssignmentStatus: "Created"
            };
            this.workOrderService.CreateWorkOrderAssignment(this.commonService.baseApiUrl, contact).subscribe(function (data) {
                var dataUsers = JSON.stringify(data);
                var userParse = JSON.parse(dataUsers);
                var userInfo = JSON.parse(userParse["_body"]);
                $('#myModal').modal('toggle');
                if (userInfo == "Ok") {
                    _this.getWorkOrderAssignment(localStorage.getItem("WorkOrderId"));
                    _this.showSwal("Work Order Assigned");
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
                _this.getWorkOrderAssignment(localStorage.getItem("WorkOrderId"));
                _this.getWorkOrderDocuments(localStorage.getItem("WorkOrderId"));
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
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_commonService__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_6__services_workOrderService__["a" /* WorkOrderService */], __WEBPACK_IMPORTED_MODULE_5__services_userService__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_7__services_activityService__["a" /* ActivityService */], __WEBPACK_IMPORTED_MODULE_14__angular_common__["DatePipe"]],
            styles: ["md-calendar {\n      width: 300px;\n  }"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__agm_core__["c" /* MapsAPILoader */],
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
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* DateAdapter */],
            __WEBPACK_IMPORTED_MODULE_14__angular_common__["DatePipe"]])
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
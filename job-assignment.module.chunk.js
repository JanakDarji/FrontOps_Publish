webpackJsonp(["job-assignment.module"],{

/***/ "./node_modules/ng2-file-upload/file-upload/file-drop.directive.js":
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
var file_uploader_class_1 = __webpack_require__("./node_modules/ng2-file-upload/file-upload/file-uploader.class.js");
var FileDropDirective = (function () {
    function FileDropDirective(element) {
        this.fileOver = new core_1.EventEmitter();
        this.onFileDrop = new core_1.EventEmitter();
        this.element = element;
    }
    FileDropDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileDropDirective.prototype.getFilters = function () {
        return {};
    };
    FileDropDirective.prototype.onDrop = function (event) {
        var transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        var options = this.getOptions();
        var filters = this.getFilters();
        this._preventAndStop(event);
        this.uploader.addToQueue(transfer.files, options, filters);
        this.fileOver.emit(false);
        this.onFileDrop.emit(transfer.files);
    };
    FileDropDirective.prototype.onDragOver = function (event) {
        var transfer = this._getTransfer(event);
        if (!this._haveFiles(transfer.types)) {
            return;
        }
        transfer.dropEffect = 'copy';
        this._preventAndStop(event);
        this.fileOver.emit(true);
    };
    FileDropDirective.prototype.onDragLeave = function (event) {
        if (this.element) {
            if (event.currentTarget === this.element[0]) {
                return;
            }
        }
        this._preventAndStop(event);
        this.fileOver.emit(false);
    };
    FileDropDirective.prototype._getTransfer = function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    };
    FileDropDirective.prototype._preventAndStop = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    FileDropDirective.prototype._haveFiles = function (types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        else if (types.contains) {
            return types.contains('Files');
        }
        else {
            return false;
        }
    };
    return FileDropDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileDropDirective.prototype, "uploader", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "fileOver", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "onFileDrop", void 0);
__decorate([
    core_1.HostListener('drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDrop", null);
__decorate([
    core_1.HostListener('dragover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDragOver", null);
__decorate([
    core_1.HostListener('dragleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], FileDropDirective.prototype, "onDragLeave", null);
FileDropDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileDrop]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileDropDirective);
exports.FileDropDirective = FileDropDirective;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-item.class.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var file_like_object_class_1 = __webpack_require__("./node_modules/ng2-file-upload/file-upload/file-like-object.class.js");
var FileItem = (function () {
    function FileItem(uploader, some, options) {
        this.url = '/';
        this.headers = [];
        this.withCredentials = true;
        this.formData = [];
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.uploader = uploader;
        this.some = some;
        this.options = options;
        this.file = new file_like_object_class_1.FileLikeObject(some);
        this._file = some;
        if (uploader.options) {
            this.method = uploader.options.method || 'POST';
            this.alias = uploader.options.itemAlias || 'file';
        }
        this.url = uploader.options.url;
    }
    FileItem.prototype.upload = function () {
        try {
            this.uploader.uploadItem(this);
        }
        catch (e) {
            this.uploader._onCompleteItem(this, '', 0, {});
            this.uploader._onErrorItem(this, '', 0, {});
        }
    };
    FileItem.prototype.cancel = function () {
        this.uploader.cancelItem(this);
    };
    FileItem.prototype.remove = function () {
        this.uploader.removeFromQueue(this);
    };
    FileItem.prototype.onBeforeUpload = function () {
        return void 0;
    };
    FileItem.prototype.onBuildForm = function (form) {
        return { form: form };
    };
    FileItem.prototype.onProgress = function (progress) {
        return { progress: progress };
    };
    FileItem.prototype.onSuccess = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onError = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onCancel = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onComplete = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype._onBeforeUpload = function () {
        this.isReady = true;
        this.isUploading = true;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.onBeforeUpload();
    };
    FileItem.prototype._onBuildForm = function (form) {
        this.onBuildForm(form);
    };
    FileItem.prototype._onProgress = function (progress) {
        this.progress = progress;
        this.onProgress(progress);
    };
    FileItem.prototype._onSuccess = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = true;
        this.isCancel = false;
        this.isError = false;
        this.progress = 100;
        this.index = void 0;
        this.onSuccess(response, status, headers);
    };
    FileItem.prototype._onError = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = true;
        this.progress = 0;
        this.index = void 0;
        this.onError(response, status, headers);
    };
    FileItem.prototype._onCancel = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = true;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.onCancel(response, status, headers);
    };
    FileItem.prototype._onComplete = function (response, status, headers) {
        this.onComplete(response, status, headers);
        if (this.uploader.options.removeAfterUpload) {
            this.remove();
        }
    };
    FileItem.prototype._prepareToUploading = function () {
        this.index = this.index || ++this.uploader._nextIndex;
        this.isReady = true;
    };
    return FileItem;
}());
exports.FileItem = FileItem;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isElement(node) {
    return !!(node && (node.nodeName || node.prop && node.attr && node.find));
}
var FileLikeObject = (function () {
    function FileLikeObject(fileOrInput) {
        this.rawFile = fileOrInput;
        var isInput = isElement(fileOrInput);
        var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
        var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
        var method = '_createFrom' + postfix;
        this[method](fakePathOrObject);
    }
    FileLikeObject.prototype._createFromFakePath = function (path) {
        this.lastModifiedDate = void 0;
        this.size = void 0;
        this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
        this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
    };
    FileLikeObject.prototype._createFromObject = function (object) {
        this.size = object.size;
        this.type = object.type;
        this.name = object.name;
    };
    return FileLikeObject;
}());
exports.FileLikeObject = FileLikeObject;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-select.directive.js":
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
var file_uploader_class_1 = __webpack_require__("./node_modules/ng2-file-upload/file-upload/file-uploader.class.js");
var FileSelectDirective = (function () {
    function FileSelectDirective(element) {
        this.onFileSelected = new core_1.EventEmitter();
        this.element = element;
    }
    FileSelectDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileSelectDirective.prototype.getFilters = function () {
        return {};
    };
    FileSelectDirective.prototype.isEmptyAfterSelection = function () {
        return !!this.element.nativeElement.attributes.multiple;
    };
    FileSelectDirective.prototype.onChange = function () {
        var files = this.element.nativeElement.files;
        var options = this.getOptions();
        var filters = this.getFilters();
        this.uploader.addToQueue(files, options, filters);
        this.onFileSelected.emit(files);
        if (this.isEmptyAfterSelection()) {
            this.element.nativeElement.value = '';
        }
    };
    return FileSelectDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileSelectDirective.prototype, "uploader", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileSelectDirective.prototype, "onFileSelected", void 0);
__decorate([
    core_1.HostListener('change'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], FileSelectDirective.prototype, "onChange", null);
FileSelectDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileSelect]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileSelectDirective);
exports.FileSelectDirective = FileSelectDirective;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-type.class.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var FileType = (function () {
    function FileType() {
    }
    FileType.getMimeClass = function (file) {
        var mimeClass = 'application';
        if (this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
        }
        else if (file.type.match('image.*')) {
            mimeClass = 'image';
        }
        else if (file.type.match('video.*')) {
            mimeClass = 'video';
        }
        else if (file.type.match('audio.*')) {
            mimeClass = 'audio';
        }
        else if (file.type === 'application/pdf') {
            mimeClass = 'pdf';
        }
        else if (this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
        }
        else if (this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
        }
        else if (this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
        }
        else if (this.mime_ppt.indexOf(file.type) !== -1) {
            mimeClass = 'ppt';
        }
        if (mimeClass === 'application') {
            mimeClass = this.fileTypeDetection(file.name);
        }
        return mimeClass;
    };
    FileType.fileTypeDetection = function (inputFilename) {
        var types = {
            'jpg': 'image',
            'jpeg': 'image',
            'tif': 'image',
            'psd': 'image',
            'bmp': 'image',
            'png': 'image',
            'nef': 'image',
            'tiff': 'image',
            'cr2': 'image',
            'dwg': 'image',
            'cdr': 'image',
            'ai': 'image',
            'indd': 'image',
            'pin': 'image',
            'cdp': 'image',
            'skp': 'image',
            'stp': 'image',
            '3dm': 'image',
            'mp3': 'audio',
            'wav': 'audio',
            'wma': 'audio',
            'mod': 'audio',
            'm4a': 'audio',
            'compress': 'compress',
            'zip': 'compress',
            'rar': 'compress',
            '7z': 'compress',
            'lz': 'compress',
            'z01': 'compress',
            'pdf': 'pdf',
            'xls': 'xls',
            'xlsx': 'xls',
            'ods': 'xls',
            'mp4': 'video',
            'avi': 'video',
            'wmv': 'video',
            'mpg': 'video',
            'mts': 'video',
            'flv': 'video',
            '3gp': 'video',
            'vob': 'video',
            'm4v': 'video',
            'mpeg': 'video',
            'm2ts': 'video',
            'mov': 'video',
            'doc': 'doc',
            'docx': 'doc',
            'eps': 'doc',
            'txt': 'doc',
            'odt': 'doc',
            'rtf': 'doc',
            'ppt': 'ppt',
            'pptx': 'ppt',
            'pps': 'ppt',
            'ppsx': 'ppt',
            'odp': 'ppt'
        };
        var chunks = inputFilename.split('.');
        if (chunks.length < 2) {
            return 'application';
        }
        var extension = chunks[chunks.length - 1].toLowerCase();
        if (types[extension] === undefined) {
            return 'application';
        }
        else {
            return types[extension];
        }
    };
    return FileType;
}());
/*  MS office  */
FileType.mime_doc = [
    'application/msword',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    'application/vnd.ms-word.document.macroEnabled.12',
    'application/vnd.ms-word.template.macroEnabled.12'
];
FileType.mime_xsl = [
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    'application/vnd.ms-excel.sheet.macroEnabled.12',
    'application/vnd.ms-excel.template.macroEnabled.12',
    'application/vnd.ms-excel.addin.macroEnabled.12',
    'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
];
FileType.mime_ppt = [
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.presentationml.template',
    'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    'application/vnd.ms-powerpoint.addin.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
];
/* PSD */
FileType.mime_psd = [
    'image/photoshop',
    'image/x-photoshop',
    'image/psd',
    'application/photoshop',
    'application/psd',
    'zz-application/zz-winassoc-psd'
];
/* Compressed files */
FileType.mime_compress = [
    'application/x-gtar',
    'application/x-gcompress',
    'application/compress',
    'application/x-tar',
    'application/x-rar-compressed',
    'application/octet-stream'
];
exports.FileType = FileType;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-upload.module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var file_drop_directive_1 = __webpack_require__("./node_modules/ng2-file-upload/file-upload/file-drop.directive.js");
var file_select_directive_1 = __webpack_require__("./node_modules/ng2-file-upload/file-upload/file-select.directive.js");
var FileUploadModule = (function () {
    function FileUploadModule() {
    }
    return FileUploadModule;
}());
FileUploadModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective],
        exports: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective]
    })
], FileUploadModule);
exports.FileUploadModule = FileUploadModule;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var file_like_object_class_1 = __webpack_require__("./node_modules/ng2-file-upload/file-upload/file-like-object.class.js");
var file_item_class_1 = __webpack_require__("./node_modules/ng2-file-upload/file-upload/file-item.class.js");
var file_type_class_1 = __webpack_require__("./node_modules/ng2-file-upload/file-upload/file-type.class.js");
function isFile(value) {
    return (File && value instanceof File);
}
var FileUploader = (function () {
    function FileUploader(options) {
        this.isUploading = false;
        this.queue = [];
        this.progress = 0;
        this._nextIndex = 0;
        this.options = {
            autoUpload: false,
            isHTML5: true,
            filters: [],
            removeAfterUpload: false,
            disableMultipart: false,
            formatDataFunction: function (item) { return item._file; },
            formatDataFunctionIsAsync: false
        };
        this.setOptions(options);
        this.response = new core_1.EventEmitter();
    }
    FileUploader.prototype.setOptions = function (options) {
        this.options = Object.assign(this.options, options);
        this.authToken = this.options.authToken;
        this.authTokenHeader = this.options.authTokenHeader || 'Authorization';
        this.autoUpload = this.options.autoUpload;
        this.options.filters.unshift({ name: 'queueLimit', fn: this._queueLimitFilter });
        if (this.options.maxFileSize) {
            this.options.filters.unshift({ name: 'fileSize', fn: this._fileSizeFilter });
        }
        if (this.options.allowedFileType) {
            this.options.filters.unshift({ name: 'fileType', fn: this._fileTypeFilter });
        }
        if (this.options.allowedMimeType) {
            this.options.filters.unshift({ name: 'mimeType', fn: this._mimeTypeFilter });
        }
        for (var i = 0; i < this.queue.length; i++) {
            this.queue[i].url = this.options.url;
        }
    };
    FileUploader.prototype.addToQueue = function (files, options, filters) {
        var _this = this;
        var list = [];
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            list.push(file);
        }
        var arrayOfFilters = this._getFilters(filters);
        var count = this.queue.length;
        var addedFileItems = [];
        list.map(function (some) {
            if (!options) {
                options = _this.options;
            }
            var temp = new file_like_object_class_1.FileLikeObject(some);
            if (_this._isValidFile(temp, arrayOfFilters, options)) {
                var fileItem = new file_item_class_1.FileItem(_this, some, options);
                addedFileItems.push(fileItem);
                _this.queue.push(fileItem);
                _this._onAfterAddingFile(fileItem);
            }
            else {
                var filter = arrayOfFilters[_this._failFilterIndex];
                _this._onWhenAddingFileFailed(temp, filter, options);
            }
        });
        if (this.queue.length !== count) {
            this._onAfterAddingAll(addedFileItems);
            this.progress = this._getTotalProgress();
        }
        this._render();
        if (this.options.autoUpload) {
            this.uploadAll();
        }
    };
    FileUploader.prototype.removeFromQueue = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        if (item.isUploading) {
            item.cancel();
        }
        this.queue.splice(index, 1);
        this.progress = this._getTotalProgress();
    };
    FileUploader.prototype.clearQueue = function () {
        while (this.queue.length) {
            this.queue[0].remove();
        }
        this.progress = 0;
    };
    FileUploader.prototype.uploadItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';
        item._prepareToUploading();
        if (this.isUploading) {
            return;
        }
        this.isUploading = true;
        this[transport](item);
    };
    FileUploader.prototype.cancelItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var prop = this.options.isHTML5 ? item._xhr : item._form;
        if (item && item.isUploading) {
            prop.abort();
        }
    };
    FileUploader.prototype.uploadAll = function () {
        var items = this.getNotUploadedItems().filter(function (item) { return !item.isUploading; });
        if (!items.length) {
            return;
        }
        items.map(function (item) { return item._prepareToUploading(); });
        items[0].upload();
    };
    FileUploader.prototype.cancelAll = function () {
        var items = this.getNotUploadedItems();
        items.map(function (item) { return item.cancel(); });
    };
    FileUploader.prototype.isFile = function (value) {
        return isFile(value);
    };
    FileUploader.prototype.isFileLikeObject = function (value) {
        return value instanceof file_like_object_class_1.FileLikeObject;
    };
    FileUploader.prototype.getIndexOfItem = function (value) {
        return typeof value === 'number' ? value : this.queue.indexOf(value);
    };
    FileUploader.prototype.getNotUploadedItems = function () {
        return this.queue.filter(function (item) { return !item.isUploaded; });
    };
    FileUploader.prototype.getReadyItems = function () {
        return this.queue
            .filter(function (item) { return (item.isReady && !item.isUploading); })
            .sort(function (item1, item2) { return item1.index - item2.index; });
    };
    FileUploader.prototype.destroy = function () {
        return void 0;
    };
    FileUploader.prototype.onAfterAddingAll = function (fileItems) {
        return { fileItems: fileItems };
    };
    FileUploader.prototype.onBuildItemForm = function (fileItem, form) {
        return { fileItem: fileItem, form: form };
    };
    FileUploader.prototype.onAfterAddingFile = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onWhenAddingFileFailed = function (item, filter, options) {
        return { item: item, filter: filter, options: options };
    };
    FileUploader.prototype.onBeforeUploadItem = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onProgressItem = function (fileItem, progress) {
        return { fileItem: fileItem, progress: progress };
    };
    FileUploader.prototype.onProgressAll = function (progress) {
        return { progress: progress };
    };
    FileUploader.prototype.onSuccessItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onErrorItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCancelItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteAll = function () {
        return void 0;
    };
    FileUploader.prototype._mimeTypeFilter = function (item) {
        return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
    };
    FileUploader.prototype._fileSizeFilter = function (item) {
        return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
    };
    FileUploader.prototype._fileTypeFilter = function (item) {
        return !(this.options.allowedFileType &&
            this.options.allowedFileType.indexOf(file_type_class_1.FileType.getMimeClass(item)) === -1);
    };
    FileUploader.prototype._onErrorItem = function (item, response, status, headers) {
        item._onError(response, status, headers);
        this.onErrorItem(item, response, status, headers);
    };
    FileUploader.prototype._onCompleteItem = function (item, response, status, headers) {
        item._onComplete(response, status, headers);
        this.onCompleteItem(item, response, status, headers);
        var nextItem = this.getReadyItems()[0];
        this.isUploading = false;
        if (nextItem) {
            nextItem.upload();
            return;
        }
        this.onCompleteAll();
        this.progress = this._getTotalProgress();
        this._render();
    };
    FileUploader.prototype._headersGetter = function (parsedHeaders) {
        return function (name) {
            if (name) {
                return parsedHeaders[name.toLowerCase()] || void 0;
            }
            return parsedHeaders;
        };
    };
    FileUploader.prototype._xhrTransport = function (item) {
        var _this = this;
        var that = this;
        var xhr = item._xhr = new XMLHttpRequest();
        var sendable;
        this._onBeforeUploadItem(item);
        if (typeof item._file.size !== 'number') {
            throw new TypeError('The file specified is no longer valid');
        }
        if (!this.options.disableMultipart) {
            sendable = new FormData();
            this._onBuildItemForm(item, sendable);
            var appendFile = function () { return sendable.append(item.alias, item._file, item.file.name); };
            if (!this.options.parametersBeforeFiles) {
                appendFile();
            }
            // For AWS, Additional Parameters must come BEFORE Files
            if (this.options.additionalParameter !== undefined) {
                Object.keys(this.options.additionalParameter).forEach(function (key) {
                    var paramVal = _this.options.additionalParameter[key];
                    // Allow an additional parameter to include the filename
                    if (typeof paramVal === 'string' && paramVal.indexOf('{{file_name}}') >= 0) {
                        paramVal = paramVal.replace('{{file_name}}', item.file.name);
                    }
                    sendable.append(key, paramVal);
                });
            }
            if (this.options.parametersBeforeFiles) {
                appendFile();
            }
        }
        else {
            sendable = this.options.formatDataFunction(item);
        }
        xhr.upload.onprogress = function (event) {
            var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
            _this._onProgressItem(item, progress);
        };
        xhr.onload = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            var gist = _this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            var method = '_on' + gist + 'Item';
            _this[method](item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onerror = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onErrorItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onabort = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onCancelItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.open(item.method, item.url, true);
        xhr.withCredentials = item.withCredentials;
        if (this.options.headers) {
            for (var _i = 0, _a = this.options.headers; _i < _a.length; _i++) {
                var header = _a[_i];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (item.headers.length) {
            for (var _b = 0, _c = item.headers; _b < _c.length; _b++) {
                var header = _c[_b];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (this.authToken) {
            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                that.response.emit(xhr.responseText);
            }
        };
        if (this.options.formatDataFunctionIsAsync) {
            sendable.then(function (result) { return xhr.send(JSON.stringify(result)); });
        }
        else {
            xhr.send(sendable);
        }
        this._render();
    };
    FileUploader.prototype._getTotalProgress = function (value) {
        if (value === void 0) { value = 0; }
        if (this.options.removeAfterUpload) {
            return value;
        }
        var notUploaded = this.getNotUploadedItems().length;
        var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
        var ratio = 100 / this.queue.length;
        var current = value * ratio / 100;
        return Math.round(uploaded * ratio + current);
    };
    FileUploader.prototype._getFilters = function (filters) {
        if (!filters) {
            return this.options.filters;
        }
        if (Array.isArray(filters)) {
            return filters;
        }
        if (typeof filters === 'string') {
            var names_1 = filters.match(/[^\s,]+/g);
            return this.options.filters
                .filter(function (filter) { return names_1.indexOf(filter.name) !== -1; });
        }
        return this.options.filters;
    };
    FileUploader.prototype._render = function () {
        return void 0;
    };
    FileUploader.prototype._queueLimitFilter = function () {
        return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
    };
    FileUploader.prototype._isValidFile = function (file, filters, options) {
        var _this = this;
        this._failFilterIndex = -1;
        return !filters.length ? true : filters.every(function (filter) {
            _this._failFilterIndex++;
            return filter.fn.call(_this, file, options);
        });
    };
    FileUploader.prototype._isSuccessCode = function (status) {
        return (status >= 200 && status < 300) || status === 304;
    };
    FileUploader.prototype._transformResponse = function (response, headers) {
        return response;
    };
    FileUploader.prototype._parseHeaders = function (headers) {
        var parsed = {};
        var key;
        var val;
        var i;
        if (!headers) {
            return parsed;
        }
        headers.split('\n').map(function (line) {
            i = line.indexOf(':');
            key = line.slice(0, i).trim().toLowerCase();
            val = line.slice(i + 1).trim();
            if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        });
        return parsed;
    };
    FileUploader.prototype._onWhenAddingFileFailed = function (item, filter, options) {
        this.onWhenAddingFileFailed(item, filter, options);
    };
    FileUploader.prototype._onAfterAddingFile = function (item) {
        this.onAfterAddingFile(item);
    };
    FileUploader.prototype._onAfterAddingAll = function (items) {
        this.onAfterAddingAll(items);
    };
    FileUploader.prototype._onBeforeUploadItem = function (item) {
        item._onBeforeUpload();
        this.onBeforeUploadItem(item);
    };
    FileUploader.prototype._onBuildItemForm = function (item, form) {
        item._onBuildForm(form);
        this.onBuildItemForm(item, form);
    };
    FileUploader.prototype._onProgressItem = function (item, progress) {
        var total = this._getTotalProgress(progress);
        this.progress = total;
        item._onProgress(progress);
        this.onProgressItem(item, progress);
        this.onProgressAll(total);
        this._render();
    };
    FileUploader.prototype._onSuccessItem = function (item, response, status, headers) {
        item._onSuccess(response, status, headers);
        this.onSuccessItem(item, response, status, headers);
    };
    FileUploader.prototype._onCancelItem = function (item, response, status, headers) {
        item._onCancel(response, status, headers);
        this.onCancelItem(item, response, status, headers);
    };
    return FileUploader;
}());
exports.FileUploader = FileUploader;


/***/ }),

/***/ "./node_modules/ng2-file-upload/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./node_modules/ng2-file-upload/file-upload/file-select.directive.js"));
__export(__webpack_require__("./node_modules/ng2-file-upload/file-upload/file-drop.directive.js"));
__export(__webpack_require__("./node_modules/ng2-file-upload/file-upload/file-uploader.class.js"));
__export(__webpack_require__("./node_modules/ng2-file-upload/file-upload/file-item.class.js"));
__export(__webpack_require__("./node_modules/ng2-file-upload/file-upload/file-like-object.class.js"));
var file_upload_module_1 = __webpack_require__("./node_modules/ng2-file-upload/file-upload/file-upload.module.js");
exports.FileUploadModule = file_upload_module_1.FileUploadModule;


/***/ }),

/***/ "./src/app/job-assignment/job-assignment.component.html":
/***/ (function(module, exports) {

module.exports = "<title>Aspect Jobs</title>\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<script src=\"https://maps.googleapis.com/maps/api/js?sensor=false\"></script>\r\n<style>\r\n    .tab-pane .table tbody > tr > td:first-child {\r\n        width: 0px !important;\r\n    }\r\n    /* USER PROFILE PAGE */\r\n    .card {\r\n        margin-top: 20px;\r\n        padding: 30px;\r\n        background-color: rgba(214, 224, 226, 0.2);\r\n        -webkit-border-top-left-radius: 5px;\r\n        -moz-border-top-left-radius: 5px;\r\n        border-top-left-radius: 5px;\r\n        -webkit-border-top-right-radius: 5px;\r\n        -moz-border-top-right-radius: 5px;\r\n        border-top-right-radius: 5px;\r\n        -webkit-box-sizing: border-box;\r\n        -moz-box-sizing: border-box;\r\n        box-sizing: border-box;\r\n    }\r\n\r\n        .card.hovercard {\r\n            position: relative;\r\n            padding-top: 0;\r\n            overflow: hidden;\r\n            text-align: center;\r\n            background-color: #fff;\r\n            background-color: rgba(255, 255, 255, 1);\r\n        }\r\n\r\n            .card.hovercard .card-background {\r\n                height: 130px;\r\n            }\r\n\r\n    .card-background img {\r\n        -webkit-filter: blur(25px);\r\n        -moz-filter: blur(25px);\r\n        -o-filter: blur(25px);\r\n        -ms-filter: blur(25px);\r\n        filter: blur(25px);\r\n        margin-left: -100px;\r\n        margin-top: -200px;\r\n        min-width: 130%;\r\n    }\r\n\r\n    .dropdownview {\r\n        -webkit-appearance: menulist-button;\r\n    }\r\n\r\n    .card.hovercard .useravatar {\r\n        position: absolute;\r\n        top: 15px;\r\n        left: 0;\r\n        right: 0;\r\n    }\r\n\r\n        .card.hovercard .useravatar img {\r\n            width: 100px;\r\n            height: 100px;\r\n            max-width: 100px;\r\n            max-height: 100px;\r\n            -webkit-border-radius: 50%;\r\n            -moz-border-radius: 50%;\r\n            border-radius: 50%;\r\n            border: 5px solid rgba(255, 255, 255, 0.5);\r\n        }\r\n\r\n    .card.hovercard .card-info {\r\n        position: absolute;\r\n        bottom: 14px;\r\n        left: 0;\r\n        right: 0;\r\n    }\r\n\r\n        .card.hovercard .card-info .card-title {\r\n            padding: 0 5px;\r\n            font-size: 20px;\r\n            line-height: 1;\r\n            color: #e91e63;\r\n            background-color: rgba(255, 255, 255, 0.1);\r\n            -webkit-border-radius: 4px;\r\n            -moz-border-radius: 4px;\r\n            border-radius: 4px;\r\n        }\r\n\r\n    .card.hovercard .card-info {\r\n        overflow: hidden;\r\n        font-size: 12px;\r\n        line-height: 20px;\r\n        color: white;\r\n        text-overflow: ellipsis;\r\n    }\r\n\r\n    .card.hovercard .bottom {\r\n        padding: 0 20px;\r\n        margin-bottom: 17px;\r\n    }\r\n\r\n    .btn-pref .btn {\r\n        -webkit-border-radius: 0 !important;\r\n    }\r\n\r\n    .panel-group .panel {\r\n        border-radius: 0;\r\n        box-shadow: none;\r\n        border-color: #EEEEEE;\r\n    }\r\n\r\n    .panel-default > .panel-heading {\r\n        padding: 0;\r\n        border-radius: 0;\r\n        color: #212121;\r\n        background-color: #FAFAFA;\r\n        border-color: #EEEEEE;\r\n    }\r\n\r\n    .panel-title {\r\n        font-size: 14px;\r\n    }\r\n\r\n        .panel-title > a {\r\n            display: block;\r\n            padding: 15px;\r\n            text-decoration: none;\r\n        }\r\n\r\n    .more-less {\r\n        float: right;\r\n        color: #212121;\r\n    }\r\n\r\n    .panel-default > .panel-heading + .panel-collapse > .panel-body {\r\n        border-top-color: #EEEEEE;\r\n    }\r\n\r\n    .bradius {\r\n        border-radius: 5px !important;\r\n    }\r\n</style>\r\n<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"col-lg-12\" style=\"margin-bottom:20px;\">\r\n            <div class=\"row\">\r\n                <div style=\"background-color:white;\">\r\n                    <div class=\"card\" style=\"background-color:transparent !important;-webkit-box-shadow:none !important\">\r\n                        <div class=\"card-content\">\r\n                            <ul class=\"nav nav-pills nav-pills-rose\">\r\n                                <li class=\"active\">\r\n                                    <a href=\"#pill1\" data-toggle=\"tab\" class=\"bradius\" (click)=\"activityDocHide()\">Assignment</a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"#pill2\" data-toggle=\"tab\" class=\"bradius\" (click)=\"activityDocShow()\">Activity</a>\r\n                                </li>\r\n                            </ul>\r\n                            <div class=\"tab-content\">\r\n                                <div class=\"tab-pane active\" id=\"pill1\">\r\n                                    <div class=\"panel-body\">\r\n                                        <div class=\"col-sm-6\">\r\n                                            <h4>WorkOrder Details - {{workOrderDetail.WorkOrderNo}} For {{workOrderDetail.ClientName}}</h4>\r\n                                            <input type=\"hidden\" style=\"display:none\" id=\"search\" #search />\r\n                                            <table class=\"table table-responsive table-bordered table-hover\" style=\"float:left !important\">\r\n                                                <tbody>\r\n                                                    <tr>\r\n                                                        <td>WorkOrder Address</td>\r\n                                                        <td>{{wrokOrdAddress}} </td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td>WorkOrder Description</td>\r\n                                                        <td>\r\n                                                            <ng-container *ngIf=\"workOrderDetail.Description\">{{workOrderDetail.Description}}</ng-container>\r\n                                                            <ng-container *ngIf=\"!workOrderDetail.Description\">{{workOrderDetail.JobDescription}}</ng-container>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td>Project Manager</td>\r\n                                                        <td>{{ workOrderDetail.ProjectManager }}</td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td>Start Time</td>\r\n                                                        <td>10.00</td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </div>\r\n                                    <div class=\"col-sm-6\">\r\n                                        <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\" style=\"height:400px;\">\r\n                                            <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\r\n                                        </agm-map>\r\n                                    </div>\r\n                                        </div>\r\n                                </div>\r\n                                <div class=\"tab-pane\" id=\"pill2\">\r\n                                    <div class=\"card card-plain\">\r\n                                        <h4>Activity for {{workOrderDetail.WorkOrderNo}}</h4>\r\n                                        <div class=\"card-content\">\r\n                                            <ul class=\"timeline\">\r\n                                                <ng-container *ngFor=\"let actTrack of workOrdActTrackerList\">\r\n                                                    <ng-container *ngIf=\"actTrack.CategoryTitle == 'Workorder Assigned'\">\r\n                                                        <li class=\"timeline-inverted\">\r\n                                                            <div class=\"timeline-badge info\">\r\n                                                                <i class=\"material-icons\" matTooltip=\"{{actTrack.WoNumber}}\" [matTooltipPosition]=\"'above'\">fingerprint</i>\r\n                                                            </div>\r\n                                                            <div class=\"timeline-panel\">\r\n                                                                <div class=\"timeline-heading\">\r\n                                                                    <span class=\"label label-info\">{{actTrack.CategoryTitle}}</span>\r\n                                                                </div>\r\n                                                                <div class=\"timeline-body\">\r\n                                                                    <p>User: <strong>{{actTrack.Username}}.</strong></p>\r\n                                                                    <p>{{actTrack.CategoryDesription}}</p>\r\n                                                                </div>\r\n                                                                <h6>\r\n                                                                    <i class=\"ti-time\"></i> {{actTrack.TrackDatetime | date: 'dd/MM/yyyy HH:mm:ss'}} <!--11 hours ago via Twitter-->\r\n                                                                </h6>\r\n                                                            </div>\r\n                                                        </li>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"actTrack.CategoryTitle == 'Workder Accepted'\">\r\n                                                        <li>\r\n                                                            <div class=\"timeline-badge success\">\r\n                                                                <i class=\"material-icons\" matTooltip=\"{{actTrack.WoNumber}}\" [matTooltipPosition]=\"'above'\">extension</i>\r\n                                                            </div>\r\n                                                            <div class=\"timeline-panel\">\r\n                                                                <div class=\"timeline-heading\">\r\n                                                                    <span class=\"label label-success\">{{actTrack.CategoryTitle}}</span>\r\n                                                                </div>\r\n                                                                <div class=\"timeline-body\">\r\n                                                                    <p>User: <strong>{{actTrack.Username}}.</strong></p>\r\n                                                                    <p>{{actTrack.CategoryDesription}}</p>\r\n                                                                </div>\r\n                                                                <h6>\r\n                                                                    <i class=\"ti-time\"></i> {{actTrack.TrackDatetime | date: 'dd/MM/yyyy HH:mm:ss'}} <!--11 hours ago via Twitter-->\r\n                                                                </h6>\r\n                                                            </div>\r\n                                                        </li>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"actTrack.CategoryTitle == 'Workeder Decline'\">\r\n                                                        <li class=\"timeline-inverted\">\r\n                                                            <div class=\"timeline-badge danger\">\r\n                                                                <i class=\"material-icons\" matTooltip=\"{{actTrack.WoNumber}}\" [matTooltipPosition]=\"'above'\">card_travel</i>\r\n                                                            </div>\r\n                                                            <div class=\"timeline-panel\">\r\n                                                                <div class=\"timeline-heading\">\r\n                                                                    <span class=\"label label-danger\">{{actTrack.CategoryTitle}}</span>\r\n                                                                </div>\r\n                                                                <div class=\"timeline-body\">\r\n                                                                    <p>User: <strong>{{actTrack.Username}}.</strong></p>\r\n                                                                    <p>{{actTrack.CategoryDesription}}</p>\r\n                                                                </div>\r\n                                                                <h6>\r\n                                                                    <i class=\"ti-time\"></i> {{actTrack.TrackDatetime | date: 'dd/MM/yyyy HH:mm:ss'}} <!--11 hours ago via Twitter-->\r\n                                                                </h6>\r\n                                                            </div>\r\n                                                        </li>\r\n                                                    </ng-container>\r\n                                                    </ng-container>\r\n                                                <!--<li>\r\n                                                    <div class=\"timeline-badge success\">\r\n                                                        <i class=\"material-icons\">extension</i>\r\n                                                    </div>\r\n                                                    <div class=\"timeline-panel\">\r\n                                                        <div class=\"timeline-heading\">\r\n                                                            <span class=\"label label-success\">Another One</span>\r\n                                                        </div>\r\n                                                        <div class=\"timeline-body\">\r\n                                                            <p>Thank God for the support of my wife and real friends. I also wanted to point out that it’s the first album to go number 1 off of streaming!!! I love you Ellen and also my number one design rule of anything I do from shoes to music to homes is that Kim has to like it....</p>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </li>\r\n                                                <li class=\"timeline-inverted\">\r\n                                                    <div class=\"timeline-badge info\">\r\n                                                        <i class=\"material-icons\">fingerprint</i>\r\n                                                    </div>\r\n                                                    <div class=\"timeline-panel\">\r\n                                                        <div class=\"timeline-heading\">\r\n                                                            <span class=\"label label-info\">Another Title</span>\r\n                                                        </div>\r\n                                                        <div class=\"timeline-body\">\r\n                                                            <p>Called I Miss the Old Kanye That’s all it was Kanye And I love you like Kanye loves Kanye Famous viewing @ Figueroa and 12th in downtown LA 11:10PM</p>\r\n                                                            <p>What if Kanye made a song about Kanye Royère doesn't make a Polar bear bed but the Polar bear couch is my favorite piece of furniture we own It wasn’t any Kanyes Set on his goals Kanye</p>\r\n                                                            <hr>\r\n                                                            <div class=\"dropdown pull-left\">\r\n                                                                <button type=\"button\" class=\"btn btn-round btn-info dropdown-toggle\" data-toggle=\"dropdown\">\r\n                                                                    <i class=\"material-icons\">build</i>\r\n                                                                    <span class=\"caret\"></span>\r\n                                                                </button>\r\n                                                                <ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\">\r\n                                                                    <li>\r\n                                                                        <a href=\"#action\">Action</a>\r\n                                                                    </li>\r\n                                                                    <li>\r\n                                                                        <a href=\"#action\">Another action</a>\r\n                                                                    </li>\r\n                                                                    <li>\r\n                                                                        <a href=\"#here\">Something else here</a>\r\n                                                                    </li>\r\n                                                                    <li class=\"divider\"></li>\r\n                                                                    <li>\r\n                                                                        <a href=\"#link\">Separated link</a>\r\n                                                                    </li>\r\n                                                                </ul>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </li>\r\n                                                <li>\r\n                                                    <div class=\"timeline-badge warning\">\r\n                                                        <i class=\"material-icons\">flight_land</i>\r\n                                                    </div>\r\n                                                    <div class=\"timeline-panel\">\r\n                                                        <div class=\"timeline-heading\">\r\n                                                            <span class=\"label label-warning\">Another One</span>\r\n                                                        </div>\r\n                                                        <div class=\"timeline-body\">\r\n                                                            <p>Tune into Big Boy's 92.3 I'm about to play the first single from Cruel Winter Tune into Big Boy's 92.3 I'm about to play the first single from Cruel Winter also to Kim’s hair and makeup Lorraine jewelry and the whole style squad at Balmain and the Yeezy team. Thank you Anna for the invite thank you to the whole Vogue team</p>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </li>-->\r\n                                            </ul>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <br /><br />\r\n        <div *ngIf=\"isActivity == false\">\r\n            <div class=\"col-lg-12\" style=\"background-color:white;margin-bottom:20px;\">\r\n                <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\r\n                    <div class=\"panel panel-default\">\r\n                        <h4><b>Work Orders</b></h4>\r\n                        <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\r\n                            <h4 class=\"panel-title\">\r\n                                <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n                                    <i class=\"more-less glyphicon glyphicon-plus\"></i>\r\n                                    {{workOrderDetail.WorkOrderNo}}\r\n                                </a>\r\n                            </h4>\r\n                        </div>\r\n                        <div id=\"collapseOne\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\r\n                            <div class=\"panel-body\" style=\"background-color:#EEEEEE!important;\">\r\n                                <table class=\"table table-bordered  table-responsive table-hover\" style=\"float:left !important\">\r\n                                    <tr>\r\n                                        <th>User</th>\r\n                                        <th>Notes</th>\r\n                                        <th></th>\r\n                                    </tr>\r\n                                    <tr *ngFor=\"let workAsg of workOrderAssignmentList\">\r\n                                        <td>{{workAsg.UserName}}</td>\r\n                                        <td>{{workAsg.Description}}</td>\r\n                                        <td class=\"text-center\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\"><i class=\"fa fa-close\" (click)=\"deleteWorkOrderAssignment(workAsg.ID)\"></i></td>\r\n                                    </tr>\r\n                                </table>\r\n                                <button type=\"submit\" class=\"btn btn-info\" (click)=\"sendEmailWorkOrderAssignment()\">Send</button>\r\n                                <div data-toggle=\"modal\" data-target=\"#myModal\" class=\"btn pull-right btn-info\"><i class=\"fa fa-address-book\"></i></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-12\" style=\"background-color:white\">\r\n                <header>\r\n                    <h4>\r\n                        <b> Add Documents</b>\r\n                    </h4>\r\n                </header>\r\n                <div class=\"panel-body\">\r\n                    <table class=\"table table-bordered  table-responsive table-hover\" style=\"float:left !important\">\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>Name</th>\r\n                            <th></th>\r\n                        </tr>\r\n                        <tr *ngFor=\"let wODoc of workOrderDocsList;let idx=index\">\r\n                            <td><strong>{{idx + 1}}.</strong></td>\r\n                            <td><strong><a href=\"{{wODoc.FilePath}}\" target=\"_blank\">{{ wODoc.FileName }}</a></strong></td>\r\n                            <td class=\"text-center\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\"><i class=\"fa fa-close\" (click)=\"deleteWorkOrderDocuments(wODoc.ID,wODoc.WorkOrderId, wODoc.WorkOrderNo, wODoc.FileName)\"></i></td>\r\n                        </tr>\r\n                        <tr *ngFor=\"let item of uploader.queue\">\r\n                            <td><strong></strong></td>\r\n                            <td><strong>{{ item?.file?.name }}</strong></td>\r\n                            <td class=\"text-center\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\"><i class=\"fa fa-close\" (click)=\"item.remove()\"></i></td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n                <div class=\"progress\" style=\"\">\r\n                    <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\r\n                </div>\r\n                <div class=\"pull-left\">\r\n                    <button class=\"btn btn-info btn-round\" (click)=\"addWorkOrderDocument();\" [disabled]=\"!uploader.getNotUploadedItems().length\">\r\n                        Save\r\n                    </button>\r\n                </div>\r\n                <div class=\"pull-right\">\r\n                    <div class=\"picture-container\">\r\n                        <div class=\"picture\">\r\n                            <label for=\"woDocs\">\r\n                                <i class=\"material-icons btn btn-info\">add_circle</i>\r\n                            </label>\r\n                            <input type=\"file\" style=\"display:none\" id=\"woDocs\" (change)=\"handleUpload($event)\" ng2FileSelect [uploader]=\"uploader\" multiple /><!--accept=\".pdf,.doc,.docx\"-->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- Classic Modal -->\r\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"wizard-container\">\r\n            <div class=\"wizard-card\" data-color=\"rose\" id=\"wizardProfile\">\r\n                <form [formGroup]=\"workOrdAssPage\">\r\n\r\n                    <div class=\"modal-content\">\r\n                        <div class=\"modal-header\">\r\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\r\n                                <i class=\"material-icons\">clear</i>\r\n                            </button>\r\n                            <h4 class=\"modal-title\">Assign User</h4>\r\n                        </div>\r\n                        <div class=\"modal-body\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-12\">\r\n                                    <div class=\"form-group label-floating cntEmpty\" [ngClass]=\"displayFieldCss(workOrdAssPage, 'userName')\">\r\n                                        <label class=\"control-label\">Start typing to select user</label>\r\n                                        <input ngui-auto-complete formControlName=\"userName\" name=\"userName\" [source]=\"autoUsers\" value-property-name=\"ID\"\r\n                                               display-property-name=\"UserName\" [list-formatter]=\"myListFormatter\" class=\"form-control\"\r\n                                               (valueChanged)=\"valueChanged($event)\" />\r\n                                        <app-field-error-display [displayError]=\"isFieldValid(workOrdAssPage, 'userName')\" errorMsg=\"Select username.\">\r\n                                        </app-field-error-display>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-12\">\r\n                                    <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(workOrdAssPage, 'description')\">\r\n                                        <label class=\"control-label\">Add notes or information here</label>\r\n                                        <input type=\"text\" formControlName=\"description\" name=\"description\" class=\"form-control\" />\r\n                                        <app-field-error-display [displayError]=\"isFieldValid(workOrdAssPage, 'description')\" errorMsg=\"Notes is required.\">\r\n                                        </app-field-error-display>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-6\">\r\n                                    <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(workOrdAssPage, 'ratetype')\">\r\n                                        <label class=\"control-label\">RateType</label>\r\n                                        <select placeholder=\"Assign rate\" formControlName=\"ratetype\" name=\"ratetype\" class=\"form-control dropdownview\">\r\n                                            <option value=\"1\" selected>Hourly</option>\r\n                                            <option value=\"2\">Fixed</option>\r\n                                            <option value=\"3\">Boxed</option>\r\n                                        </select>\r\n                                        <app-field-error-display [displayError]=\"isFieldValid(workOrdAssPage, 'ratetype')\" errorMsg=\"RateType is required.\">\r\n                                        </app-field-error-display>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-lg-6\">\r\n                                    <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(workOrdAssPage, 'rate')\">\r\n                                        <label class=\"control-label\">Rate</label>\r\n                                        <input type=\"number\" formControlName=\"rate\" name=\"rate\" class=\"form-control\" />\r\n                                        <app-field-error-display [displayError]=\"isFieldValid(workOrdAssPage, 'rate')\" errorMsg=\"Rate is required.\">\r\n                                        </app-field-error-display>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-6\">\r\n                                    <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(workOrdAssPage, 'fromdate')\">\r\n                                        <br />\r\n                                        <mat-datepicker-toggle matSuffix [for]=\"datepickerYear1\">\r\n                                        </mat-datepicker-toggle>\r\n                                        <mat-input-container>\r\n                                            <input matInput\r\n                                                   [matDatepicker]=\"datepickerYear1\" name=\"fromdate\"\r\n                                                   placeholder=\"From Date\" formControlName=\"fromdate\">\r\n                                        </mat-input-container>\r\n                                        <mat-datepicker #datepickerYear1\r\n                                                        [startView]=\"'year'\">\r\n                                        </mat-datepicker>\r\n                                        <app-field-error-display [displayError]=\"isFieldValid(workOrdAssPage, 'fromdate')\" errorMsg=\"From Date is required.\">\r\n                                        </app-field-error-display>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-lg-6\">\r\n                                    <div class=\"form-group label-floating\" [ngClass]=\"displayFieldCss(workOrdAssPage, 'todate')\">\r\n                                        <br />\r\n                                        <mat-datepicker-toggle matSuffix [for]=\"datepickerYear\">\r\n                                        </mat-datepicker-toggle>\r\n                                        <mat-input-container>\r\n                                            <input matInput\r\n                                                   [matDatepicker]=\"datepickerYear\" name=\"todate\"\r\n                                                   placeholder=\"To Date\" formControlName=\"todate\">\r\n                                        </mat-input-container>\r\n                                        <mat-datepicker #datepickerYear\r\n                                                        [startView]=\"'year'\">\r\n                                        </mat-datepicker>\r\n                                        <app-field-error-display [displayError]=\"isFieldValid(workOrdAssPage, 'todate')\" errorMsg=\"To date should be greater than From date\">\r\n                                        </app-field-error-display>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <br />\r\n                                <div class=\"pull-right\">\r\n                                    <button type=\"submit\" id=\"btnSubmit\" class=\"btn btn-rose\" (click)=\"createWorkOrderAssignment()\">Submit</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--  End Modal -->\r\n\r\n\r\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\r\n<script>\r\n    $(document).ready(function () {\r\n        $('.loader').hide();\r\n    });\r\n    function toggleIcon(e) {\r\n        $(e.target)\r\n            .prev('.panel-heading')\r\n            .find(\".more-less\")\r\n            .toggleClass('glyphicon-plus glyphicon-minus');\r\n    }\r\n    $('.panel-group').on('hidden.bs.collapse', toggleIcon);\r\n    $('.panel-group').on('shown.bs.collapse', toggleIcon);\r\n</script>\r\n"

/***/ }),

/***/ "./src/app/job-assignment/job-assignment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobAssignmentComponent; });
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














var JobAssignmentComponent = /** @class */ (function () {
    function JobAssignmentComponent(mapsAPILoader, ngZone, http, router, activatedRoute, commonService, workOrderService, activityService, userService, _sanitizer, formBuilder, dateAdapter) {
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
    JobAssignmentComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    JobAssignmentComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    JobAssignmentComponent.prototype.isFieldValid = function (form, field) {
        return !form.get(field).valid && form.get(field).touched;
    };
    JobAssignmentComponent.prototype.displayFieldCss = function (form, field) {
        return {
            'has-error': this.isFieldValid(form, field),
            'has-feedback': this.isFieldValid(form, field)
        };
    };
    JobAssignmentComponent.prototype.showSwal = function (text) {
        __WEBPACK_IMPORTED_MODULE_11_sweetalert2___default()({
            type: 'success',
            text: text,
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-success'
        }).catch(__WEBPACK_IMPORTED_MODULE_11_sweetalert2___default.a.noop);
    };
    JobAssignmentComponent.prototype.showConfirmSwal = function (text) {
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
    JobAssignmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            if (params['workID'] == undefined) {
                _this.router.navigate(['jobs']);
            }
            else {
                var workOrdID = params['workID'];
                _this.getWorkOrdersByWorkOrdID(workOrdID);
                _this.getAutocompleteUser();
                _this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
                _this.uploader.onBuildItemForm = function (fileItem, form) {
                    form.append('WorkOrderId', _this.workOrderDetail["ID"]);
                    form.append('OldWorkOrderId', _this.workOrderDetail["OldWorkOrderId"]);
                    form.append('WorkOrderNo', _this.workOrderDetail["WorkOrderNo"]);
                };
                _this.uploader.onSuccessItem = function (item, response, status, headers) {
                    _this.getWorkOrderDocuments(_this.workOrderDetail["ID"]);
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
    };
    JobAssignmentComponent.prototype.getAutocompleteUser = function () {
        var _this = this;
        $('.loader').show();
        this.userService.GetAutocompleteUser(this.commonService.baseApiUrl).subscribe(function (data) {
            var dataUsers = JSON.stringify(data);
            var userParse = JSON.parse(dataUsers);
            var userInfo = JSON.parse(userParse["_body"]);
            if (userInfo != null) {
                _this.autoUsers = userInfo;
                $('.loader').hide();
            }
        });
    };
    JobAssignmentComponent.prototype.activityDocShow = function () {
        this.isActivity = true;
        this.getActivityTracker(this.workOrderDetail["WorkOrderNo"]);
    };
    JobAssignmentComponent.prototype.activityDocHide = function () {
        this.isActivity = false;
    };
    JobAssignmentComponent.prototype.sendEmailWorkOrderAssignment = function () {
        var _this = this;
        $('.loader').show();
        if (this.workOrderAssignmentList != null) {
            this.workOrderService.SendEmailWorkOrderAssignment(this.commonService.baseApiUrl, this.workOrderAssignmentList).subscribe(function (data) {
                var dataUsers = JSON.stringify(data);
                var userParse = JSON.parse(dataUsers);
                var userInfo = JSON.parse(userParse["_body"]);
                if (userInfo != null) {
                    _this.autoUsers = userInfo;
                    $('.loader').hide();
                }
            });
        }
    };
    JobAssignmentComponent.prototype.deleteWorkOrderAssignment = function (workAsgId) {
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
                    _this.getWorkOrderAssignment(localStorage.getItem("WorkOrderID"));
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
    JobAssignmentComponent.prototype.getWorkOrderAssignment = function (workOrdId) {
        var _this = this;
        $('.loader').show();
        this.workOrderService.GetWorkOrderAssignment(this.commonService.baseApiUrl, workOrdId).subscribe(function (data) {
            var datawAsg = JSON.stringify(data);
            var wAsgParse = JSON.parse(datawAsg);
            var wAsgList = JSON.parse(wAsgParse["_body"]);
            _this.workOrderAssignmentList = null;
            if (wAsgList != null) {
                _this.workOrderAssignmentList = wAsgList;
                $('.loader').hide();
            }
        });
    };
    JobAssignmentComponent.prototype.getActivityTracker = function (workOrdNo) {
        var _this = this;
        $('.loader').show();
        this.activityService.GetActivityTracker(this.commonService.baseApiUrl, workOrdNo).subscribe(function (data) {
            var datawAct = JSON.stringify(data);
            var actParse = JSON.parse(datawAct);
            var actList = JSON.parse(actParse["_body"]);
            _this.workOrdActTrackerList = null;
            if (actList != null) {
                _this.workOrdActTrackerList = actList;
                $('.loader').hide();
            }
        });
    };
    JobAssignmentComponent.prototype.createWorkOrderAssignment = function () {
        var _this = this;
        $('.loader').show();
        if (this.workOrdAssPage.valid) {
            var contact = {
                UserId: this.assUserID,
                WorkOrderId: this.workOrderDetail["ID"],
                OldWorkOrderId: this.workOrderDetail["OldWorkOrderId"],
                Description: this.workOrdAssPage.controls["description"].value,
                RateType: this.workOrdAssPage.controls["ratetype"].value,
                Rate: this.workOrdAssPage.controls["rate"].value,
                FromDate: this.workOrdAssPage.controls["fromdate"].value,
                ToDate: this.workOrdAssPage.controls["todate"].value
            };
            this.workOrderService.CreateWorkOrderAssignment(this.commonService.baseApiUrl, contact).subscribe(function (data) {
                var dataUsers = JSON.stringify(data);
                var userParse = JSON.parse(dataUsers);
                var userInfo = JSON.parse(userParse["_body"]);
                $('#myModal').modal('toggle');
                if (userInfo == "Ok") {
                    _this.getWorkOrderAssignment(localStorage.getItem("WorkOrderID"));
                    _this.showSwal("WorkOrder successfully assign!!");
                }
                else if (userInfo == "already") {
                    _this.showSwal("WorkOrder already assigned!!");
                }
                _this.workOrdAssPage.reset();
                $('.loader').hide();
            });
        }
        else {
            this.validateAllFormFields(this.workOrdAssPage);
        }
    };
    JobAssignmentComponent.prototype.validateAllFormFields = function (formGroup) {
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
    JobAssignmentComponent.prototype.valueChanged = function (newVal) {
        this.assUserID = newVal.ID;
    };
    JobAssignmentComponent.prototype.myListFormatter = function (data) {
        return data['UserName'];
    };
    JobAssignmentComponent.prototype.getWorkOrdersByWorkOrdID = function (workOrdID) {
        var _this = this;
        $('.loader').show();
        this.workOrderService.GetWorkOrdersByWorkOrdID(this.commonService.baseApiUrl, workOrdID).subscribe(function (data) {
            var dataWorkOrders = JSON.stringify(data);
            var workParse = JSON.parse(dataWorkOrders);
            var workOrderInfo = JSON.parse(workParse["_body"]);
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
                localStorage.setItem("WorkOrderID", workOrderInfo.ID);
                _this.getWorkOrderAssignment(workOrderInfo.ID);
                _this.getWorkOrderDocuments(workOrderInfo.ID);
                $('.loader').hide();
                _this.getLocation(_this.wrokOrdAddress);
                _this.getLocation(_this.wrokOrdAddress);
            }
        });
    };
    JobAssignmentComponent.prototype.getLocation = function (address) {
        var _this = this;
        this.http.get("https://maps.google.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyDvC4D3B6FJvtMZLOfUsIUnpUxpET_uc-w").subscribe(function (data) {
            var dataMap = JSON.stringify(data);
            var mapParse = JSON.parse(dataMap);
            var mapList = JSON.parse(mapParse["_body"]);
            if (mapList != null) {
                console.log(mapList);
                _this.latitude = mapList["results"][0]["geometry"]["location"]["lat"];
                _this.longitude = mapList["results"][0]["geometry"]["location"]["lng"];
                _this.zoom = 8;
            }
        });
    };
    JobAssignmentComponent.prototype.addWorkOrderDocument = function () {
        this.uploader.uploadAll();
    };
    JobAssignmentComponent.prototype.getWorkOrderDocuments = function (workOrdId) {
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
    JobAssignmentComponent.prototype.deleteWorkOrderDocuments = function (workDocsID, workOrdId, workOrderNo, fileName) {
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
    JobAssignmentComponent.prototype.handleUpload = function (data) {
        if (data && data.response) {
            data = JSON.parse(data.response);
            this.uploadedFiles.push(data);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], JobAssignmentComponent.prototype, "searchElementRef", void 0);
    JobAssignmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-job-assignment',
            template: __webpack_require__("./src/app/job-assignment/job-assignment.component.html"),
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
    ], JobAssignmentComponent);
    return JobAssignmentComponent;
}());



/***/ }),

/***/ "./src/app/job-assignment/job-assignment.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobAssignmentModule", function() { return JobAssignmentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__job_assignment_routing__ = __webpack_require__("./src/app/job-assignment/job-assignment.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__job_assignment_component__ = __webpack_require__("./src/app/job-assignment/job-assignment.component.ts");
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












var JobAssignmentModule = /** @class */ (function () {
    function JobAssignmentModule() {
    }
    JobAssignmentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__job_assignment_routing__["a" /* JobAssignmentRoutes */]),
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
                __WEBPACK_IMPORTED_MODULE_5__job_assignment_component__["a" /* JobAssignmentComponent */]
            ]
        })
    ], JobAssignmentModule);
    return JobAssignmentModule;
}());



/***/ }),

/***/ "./src/app/job-assignment/job-assignment.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobAssignmentRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__job_assignment_component__ = __webpack_require__("./src/app/job-assignment/job-assignment.component.ts");

var JobAssignmentRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__job_assignment_component__["a" /* JobAssignmentComponent */]
            }]
    }
];


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



/***/ })

});
//# sourceMappingURL=job-assignment.module.chunk.js.map
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/bottleboxescanvas.js":
/*!*********************************!*\
  !*** ./js/bottleboxescanvas.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nexports.__esModule = true;\nvar bottleimage_1 = __webpack_require__(/*! ./bottleimage */ \"./js/bottleimage.js\");\nvar util_1 = __webpack_require__(/*! ./util */ \"./js/util.js\");\nvar padding = 2;\nvar BottleBoxesCanvas = /** @class */ (function () {\n    function BottleBoxesCanvas() {\n        this.element = (0, util_1.h)('canvas', { style: 'background-color: white' });\n        this.element.width = (bottleimage_1.BottleImage.width + 2 * padding) * 15;\n        this.element.height = bottleimage_1.BottleImage.height + 2 * padding;\n        this.bottlesCount = 0;\n        this.context = this.element.getContext('2d');\n        this.context.fillStyle = 'white';\n    }\n    BottleBoxesCanvas.prototype.setBottlesCount = function (value) {\n        this.bottlesCount = value;\n        this.paint();\n    };\n    BottleBoxesCanvas.prototype.paint = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            var filledBottleImage, i;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        this.context.clearRect(0, 0, this.element.width, this.element.height);\n                        return [4 /*yield*/, bottleimage_1.BottleImage.filledBottleImage];\n                    case 1:\n                        filledBottleImage = _a.sent();\n                        for (i = 0; i < this.bottlesCount; i++)\n                            this.context.drawImage(filledBottleImage, padding + i * (bottleimage_1.BottleImage.width + padding), padding);\n                        return [2 /*return*/];\n                }\n            });\n        });\n    };\n    return BottleBoxesCanvas;\n}());\nexports[\"default\"] = BottleBoxesCanvas;\n\n\n//# sourceURL=webpack://bottlesjs/./js/bottleboxescanvas.js?");

/***/ }),

/***/ "./js/bottleimage.js":
/*!***************************!*\
  !*** ./js/bottleimage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nexports.__esModule = true;\nexports.BottleImage = void 0;\nvar util_1 = __webpack_require__(/*! ./util */ \"./js/util.js\");\nexports.BottleImage = {\n    width: 32,\n    height: 80,\n    emptyBottleImage: (0, util_1.loadImage)('emptybottle.gif'),\n    filledBottleImage: (0, util_1.loadImage)('filledbottle.gif')\n};\n\n\n//# sourceURL=webpack://bottlesjs/./js/bottleimage.js?");

/***/ }),

/***/ "./js/bottlescanvas.js":
/*!*****************************!*\
  !*** ./js/bottlescanvas.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nexports.__esModule = true;\nvar bottleimage_1 = __webpack_require__(/*! ./bottleimage */ \"./js/bottleimage.js\");\nvar util_1 = __webpack_require__(/*! ./util */ \"./js/util.js\");\nvar waterTankLeft = 26;\nvar tanksY = 55;\nvar waterTankRight = 38;\nvar tanksHeight = 133 - 55;\nvar co2TankLeft = 190;\nvar co2TankRight = 203;\nvar bottleY = 193;\nvar bottleXEntry = 34;\nvar bottleXFilled = 113;\nvar bottleXExit = 516;\nvar bottlesDistance = 60;\nvar bottleSpeed = 10; // In milliseconds per pixel.\nvar tanksSpeed = 1000; // In milliseconds per pixel.\nvar thermometerLeft = 375.5;\nvar thermometerTop = 16;\nvar thermometerRight = 383.25;\nvar thermometerBottom = 91;\nvar thermometerSpeed = 5000; // In milliseconds per pixel.\nfunction getTemperature(t) {\n    return Math.min(t / 15 / thermometerSpeed, 1);\n}\nfunction getTanksLevel(t) {\n    return t / tanksSpeed % (tanksHeight + 1) / (tanksHeight + 1);\n}\nfunction createBottlesCanvas(listener) {\n    return __awaiter(this, void 0, void 0, function () {\n        function paint() {\n            ctxt.drawImage(backgroundImage, 0, 0);\n            var millis = Date.now();\n            var dt = millis - startTimeMillis;\n            var firstBottleX = bottleXEntry + dt / bottleSpeed;\n            var x = bottleXEntry + dt / bottleSpeed % bottlesDistance;\n            while (x < bottleXExit && x <= firstBottleX) {\n                var image = x < bottleXFilled ? emptyBottleImage : filledBottleImage;\n                ctxt.drawImage(image, x, bottleY);\n                x += bottlesDistance;\n            }\n            ctxt.fillStyle = 'blue';\n            var tanksLevel = dt / tanksSpeed % (tanksHeight + 1);\n            ctxt.fillRect(waterTankLeft, tanksY + tanksLevel, waterTankRight - waterTankLeft, tanksHeight - tanksLevel);\n            ctxt.fillStyle = 'gray';\n            ctxt.fillRect(co2TankLeft, tanksY + tanksLevel, co2TankRight - co2TankLeft, tanksHeight - tanksLevel);\n            ctxt.fillStyle = '#da251d';\n            var thermLevel = Math.max(thermometerTop, thermometerBottom - 50 - dt / thermometerSpeed);\n            ctxt.fillRect(thermometerLeft, thermLevel, thermometerRight - thermometerLeft, thermometerBottom - thermLevel);\n        }\n        var bottlesCanvas, backgroundImage, emptyBottleImage, filledBottleImage, ctxt, startTimeMillis;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    bottlesCanvas = document.createElement('canvas');\n                    bottlesCanvas.width = 593;\n                    bottlesCanvas.height = 300;\n                    return [4 /*yield*/, (0, util_1.loadImage)('background.gif')];\n                case 1:\n                    backgroundImage = _a.sent();\n                    return [4 /*yield*/, (0, util_1.loadImage)('emptybottle.gif')];\n                case 2:\n                    emptyBottleImage = _a.sent();\n                    return [4 /*yield*/, (0, util_1.loadImage)('filledbottle.gif')];\n                case 3:\n                    filledBottleImage = _a.sent();\n                    ctxt = bottlesCanvas.getContext('2d');\n                    startTimeMillis = Date.now();\n                    bottlesCanvas.onclick = function (e) {\n                        var x = e.x;\n                        var y = e.y;\n                        var millis = Date.now();\n                        var dt = millis - startTimeMillis;\n                        var firstBottleX = bottleXEntry + dt / bottleSpeed;\n                        var startX = bottleXEntry + dt / bottleSpeed % bottlesDistance;\n                        if (bottleY <= y && y <= bottleY + bottleimage_1.BottleImage.height &&\n                            bottleXFilled <= x && x <= Math.min(bottleXExit, firstBottleX) + bottleimage_1.BottleImage.width) {\n                            x -= startX;\n                            var bottleNumber = x / bottlesDistance;\n                            if (x % bottlesDistance < bottleimage_1.BottleImage.width) {\n                                if (listener != null) {\n                                    var clickedBottleX = startX + bottleNumber * bottlesDistance;\n                                    var distanceTravelled = clickedBottleX - bottleXFilled;\n                                    var bottleFilledTime = dt - distanceTravelled * bottleSpeed;\n                                    listener.bottleClicked(getTanksLevel(bottleFilledTime), getTemperature(bottleFilledTime));\n                                }\n                            }\n                        }\n                    };\n                    setInterval(paint, 100);\n                    return [2 /*return*/, bottlesCanvas];\n            }\n        });\n    });\n}\nexports[\"default\"] = createBottlesCanvas;\n\n\n//# sourceURL=webpack://bottlesjs/./js/bottlescanvas.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nexports.__esModule = true;\nvar bottlescanvas_1 = __webpack_require__(/*! ./bottlescanvas */ \"./js/bottlescanvas.js\");\nvar bottleboxescanvas_1 = __webpack_require__(/*! ./bottleboxescanvas */ \"./js/bottleboxescanvas.js\");\nvar util_1 = __webpack_require__(/*! ./util */ \"./js/util.js\");\nfunction justifyLeft(width, text) {\n    return text + ' '.repeat(Math.max(0, width - text.length));\n}\nfunction justifyRight(width, text) {\n    return ' '.repeat(Math.max(0, width - text.length)) + text;\n}\nfunction getPH(tanksLevel, temperature) {\n    var ph = (6.75 + Math.pow(tanksLevel - 0.5, 3)) * (20.0 + temperature) / 20.0;\n    return justifyRight(5, ph.toFixed(2));\n}\n(function () { return __awaiter(void 0, void 0, void 0, function () {\n    function updateCounterLabel() {\n        counterLabel.innerText = 'Number of bottles in current sample: ' + bottlesCount;\n        bottleBoxesCanvas.setBottlesCount(bottlesCount);\n    }\n    function startNewAnalysis() {\n        bottlesCount = 0;\n        updateCounterLabel();\n        sampling = true;\n        ++sampleNumber;\n        resultsTextArea.value = '';\n        analysis = 'Analysis of sample number ' + sampleNumber + '\\n';\n        analysis += 'Bottle   pH\\n';\n    }\n    var history, bottlesCount, analysis, sampleNumber, sampling, counterLabel, resultsTextArea, historyTextArea, bottlesCanvas, bottleBoxesCanvas, analyzeButton, counterPanel, topPanel, historyButton, newSampleButton, buttonsPanel;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                history = \"\";\n                bottlesCount = 0;\n                analysis = \"\";\n                sampleNumber = 0;\n                sampling = false;\n                counterLabel = (0, util_1.h)('span', ['Number of bottles in current sample: 0']);\n                resultsTextArea = (0, util_1.h)('textarea', { style: 'width: 100%; padding: 0; box-sizing: border-box', rows: 10, readonly: true });\n                historyTextArea = (0, util_1.h)('textarea', { style: 'width: 100%; padding: 0; box-sizing: border-box; display: none', rows: 50, readonly: true });\n                return [4 /*yield*/, (0, bottlescanvas_1[\"default\"])({\n                        bottleClicked: function (tanksLevel, temperature) {\n                            if (sampling) {\n                                ++bottlesCount;\n                                analysis += justifyLeft(9, bottlesCount.toString());\n                                analysis += getPH(tanksLevel, temperature);\n                                analysis += '\\n';\n                                updateCounterLabel();\n                                analyzeButton.disabled = false;\n                            }\n                        }\n                    })];\n            case 1:\n                bottlesCanvas = _a.sent();\n                bottleBoxesCanvas = new bottleboxescanvas_1[\"default\"]();\n                startNewAnalysis();\n                analyzeButton = (0, util_1.h)('button', { style: 'width: 100%; height: 100%' }, [(0, util_1.h)('span', ['Analyze'])]);\n                analyzeButton.onclick = function () {\n                    history += analysis + '\\n';\n                    historyTextArea.value = history;\n                    resultsTextArea.value = analysis;\n                    analyzeButton.disabled = true;\n                    sampling = false;\n                };\n                counterPanel = (0, util_1.h)('table', [\n                    (0, util_1.h)('tr', [(0, util_1.h)('td', { colspan: 2 }, [counterLabel])]),\n                    (0, util_1.h)('tr', [\n                        (0, util_1.h)('td', [bottleBoxesCanvas.element]),\n                        (0, util_1.h)('td', { style: 'height: 100%' }, [analyzeButton])\n                    ])\n                ]);\n                topPanel = (0, util_1.h)('table', [\n                    (0, util_1.h)('tr', [(0, util_1.h)('td', { align: 'center' }, [bottlesCanvas])]),\n                    (0, util_1.h)('tr', [(0, util_1.h)('td', [counterPanel])])\n                ]);\n                historyButton = (0, util_1.h)('button', ['History']);\n                historyButton.onclick = function () {\n                    if (historyTextArea.style.display === 'none')\n                        historyTextArea.style.display = 'inline';\n                    else\n                        historyTextArea.style.display = 'none';\n                };\n                newSampleButton = (0, util_1.h)('button', ['New Sample']);\n                newSampleButton.onclick = function () {\n                    startNewAnalysis();\n                };\n                buttonsPanel = (0, util_1.h)('table', { width: '100%' }, [\n                    (0, util_1.h)('tr', [\n                        (0, util_1.h)('td', { width: '50%', align: 'center' }, [historyButton]),\n                        (0, util_1.h)('td', { width: '50%', align: 'center' }, [newSampleButton])\n                    ])\n                ]);\n                document.body.appendChild((0, util_1.h)('table', [\n                    (0, util_1.h)('tr', [(0, util_1.h)('td', [topPanel])]),\n                    (0, util_1.h)('tr', [(0, util_1.h)('td', [resultsTextArea])]),\n                    (0, util_1.h)('tr', [(0, util_1.h)('td', [buttonsPanel])]),\n                    (0, util_1.h)('tr', [(0, util_1.h)('td', [historyTextArea])])\n                ]));\n                return [2 /*return*/];\n        }\n    });\n}); })();\n\n\n//# sourceURL=webpack://bottlesjs/./js/main.js?");

/***/ }),

/***/ "./js/util.js":
/*!********************!*\
  !*** ./js/util.js ***!
  \********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.__esModule = true;\nexports.h = exports.loadImage = void 0;\nfunction loadImage(url) {\n    var imgElement = document.createElement('img');\n    imgElement.src = url;\n    imgElement.style.display = 'none';\n    document.body.appendChild(imgElement);\n    return new Promise(function (resolve, reject) { return imgElement.onload = function () { resolve(imgElement); }; });\n}\nexports.loadImage = loadImage;\n//export function h(tag: string, children: (HTMLElement|string)[]): HTMLElement;\n//export function h(tag: string, attributes: object, children?: (HTMLElement|string)[]): HTMLElement;\nfunction h(tag, arg1, arg2) {\n    var result = document.createElement(tag);\n    var attributes;\n    var children;\n    if (!arg2 && arg1 && arg1 instanceof Array) {\n        children = arg1;\n    }\n    else {\n        attributes = arg1;\n        children = arg2;\n    }\n    if (attributes)\n        for (var _i = 0, _a = Object.entries(attributes); _i < _a.length; _i++) {\n            var _b = _a[_i], key = _b[0], value = _b[1];\n            result.setAttribute(key, value);\n        }\n    if (children)\n        for (var _c = 0, children_1 = children; _c < children_1.length; _c++) {\n            var child = children_1[_c];\n            if (typeof (child) == 'string')\n                result.appendChild(document.createTextNode(child));\n            else\n                result.appendChild(child);\n        }\n    return result;\n}\nexports.h = h;\n\n\n//# sourceURL=webpack://bottlesjs/./js/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;
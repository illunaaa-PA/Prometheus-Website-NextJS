"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_photos_PrometheusLogo_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/photos/PrometheusLogo.webp */ \"./public/photos/PrometheusLogo.webp\");\n\n\n\nfunction HomePage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        class: \"text-gray-100 body-font bg-gradient-to-b from-black w-full max-sm:z-10 relative\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            animate: {\n                scale: [\n                    0.8,\n                    1\n                ]\n            },\n            transition: {\n                ease: [\n                    0.4,\n                    0.0,\n                    0.2,\n                    1\n                ],\n                duration: 0.4\n            },\n            class: \"py-2 md:py-4\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Hello World\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: _public_photos_PrometheusLogo_webp__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                        alt: \"Picture of logo\",\n                        width: \"500px\",\n                        height: 350\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\illuna\\\\Documents\\\\GitHub\\\\Prometheus-Website-NextJS\\\\pages\\\\index.js\",\n                        lineNumber: 16,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\illuna\\\\Documents\\\\GitHub\\\\Prometheus-Website-NextJS\\\\pages\\\\index.js\",\n                lineNumber: 13,\n                columnNumber: 3\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\illuna\\\\Documents\\\\GitHub\\\\Prometheus-Website-NextJS\\\\pages\\\\index.js\",\n            lineNumber: 8,\n            columnNumber: 8\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\illuna\\\\Documents\\\\GitHub\\\\Prometheus-Website-NextJS\\\\pages\\\\index.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUE4QjtBQUMwQjtBQUd4RCxTQUFTRSxRQUFRLEdBQUc7SUFDbEIscUJBQ0UsOERBQUNDLFFBQU07UUFBQ0MsS0FBSyxFQUFDLGlGQUFpRjtrQkFDNUYsNEVBQUNDLEtBQUc7WUFDREMsT0FBTyxFQUFFO2dCQUFFQyxLQUFLLEVBQUU7QUFBQyx1QkFBRztBQUFFLHFCQUFDO2lCQUFDO2FBQUU7WUFDNUJDLFVBQVUsRUFBRTtnQkFBRUMsSUFBSSxFQUFFO0FBQUMsdUJBQUc7QUFBRSx1QkFBRztBQUFFLHVCQUFHO0FBQUUscUJBQUM7aUJBQUM7Z0JBQUVDLFFBQVEsRUFBRSxHQUFHO2FBQUU7WUFDdkROLEtBQUssRUFBQyxjQUFjO3NCQUU1Qiw0RUFBQ08sS0FBRzs7b0JBQUMsYUFHSDtrQ0FBQSw4REFBQ1gsbURBQUs7d0JBQ05ZLEdBQUcsRUFBRVgsMEVBQUk7d0JBQ1RZLEdBQUcsRUFBQyxpQkFBaUI7d0JBQ3JCQyxLQUFLLEVBQUMsT0FBTzt3QkFDYkMsTUFBTSxFQUFFLEdBQUc7Ozs7OzRCQUNUOzs7Ozs7b0JBQ0E7Ozs7O2dCQUNBOzs7OztZQUNHLENBQ047Q0FDRjtBQXJCUWIsS0FBQUEsUUFBUTtBQXdCakIsK0RBQWVBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4uL3B1YmxpYy9waG90b3MvUHJvbWV0aGV1c0xvZ28ud2VicFwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gIHJldHVybihcclxuICAgIDxoZWFkZXIgY2xhc3M9XCJ0ZXh0LWdyYXktMTAwIGJvZHktZm9udCBiZy1ncmFkaWVudC10by1iIGZyb20tYmxhY2sgdy1mdWxsIG1heC1zbTp6LTEwIHJlbGF0aXZlXCI+XHJcbiAgICAgICA8bmF2XHJcbiAgICAgICAgICBhbmltYXRlPXt7IHNjYWxlOiBbMC44LCAxXSB9fVxyXG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBlYXNlOiBbMC40LCAwLjAsIDAuMiwgMV0sIGR1cmF0aW9uOiAwLjQgfX1cclxuICAgICAgICAgIGNsYXNzPVwicHktMiBtZDpweS00XCJcclxuICAgICAgICA+XHJcbiAgPGRpdj5cclxuICBIZWxsbyBXb3JsZFxyXG4gIFxyXG4gICAgPEltYWdlXHJcbiAgICBzcmM9e0xvZ299XHJcbiAgICBhbHQ9XCJQaWN0dXJlIG9mIGxvZ29cIlxyXG4gICAgd2lkdGg9XCI1MDBweFwiXHJcbiAgICBoZWlnaHQ9ezM1MH1cclxuICAgIC8+XHJcbjwvZGl2PlxyXG48L25hdj5cclxuPC9oZWFkZXI+XHJcbiAgKVxyXG59XHJcbiAgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZSJdLCJuYW1lcyI6WyJJbWFnZSIsIkxvZ28iLCJIb21lUGFnZSIsImhlYWRlciIsImNsYXNzIiwibmF2IiwiYW5pbWF0ZSIsInNjYWxlIiwidHJhbnNpdGlvbiIsImVhc2UiLCJkdXJhdGlvbiIsImRpdiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});
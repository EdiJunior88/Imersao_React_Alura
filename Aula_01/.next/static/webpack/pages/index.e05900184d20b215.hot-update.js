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

/***/ "./src/components/Timeline.js":
/*!************************************!*\
  !*** ./src/components/Timeline.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StyledTimeline\": function() { return /* binding */ StyledTimeline; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  flex: 1;\\n  width: 100%;\\n  padding: 16px;\\n  overflow: hidden;\\n\\n  h2 {\\n    font-size: 16px;\\n    margin-bottom: 16px;\\n    text-transform: capitalize;\\n  }\\n\\n  img {\\n    aspect-ratio: 16/9;\\n    font-weight: 500;\\n    object-fit: cover;\\n    width: 100%;\\n    max-width: 210px;\\n    height: auto;\\n  }\\n\\n  section {\\n    width: 100%;\\n    padding: 0;\\n    overflow: hidden;\\n    padding: 16px;\\n\\n    div {\\n      width: calc(100vw - 16px * 4);\\n      display: grid;\\n      grid-gap: 16px;\\n      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\\n      grid-auto-flow: column;\\n      grid-auto-columns: minmax(200px, 1fr);\\n      overflow-x: scroll;\\n      scroll-snap-type: x mandatory;\\n      &::-webkit-slider-thumb {\\n        width: 15px;\\n        height: 15px;\\n        border: 1px solid #000;\\n        border-radius: 5px;\\n        background: #d9d9d9;\\n        scroll\\n      }\\n\\n      a {\\n        scroll-snap-align: start;\\n        span {\\n          padding-top: 8px;\\n          display: block;\\n          padding-right: 24px;\\n          color: \",\n        \";\\n        }\\n      }\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\nvar StyledTimeline = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"Timeline__StyledTimeline\",\n    componentId: \"sc-2fed3750-0\"\n})(_templateObject(), function(param) {\n    var theme = param.theme;\n    return theme.textColorBase || \"#222222\";\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UaW1lbGluZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUFBdUM7QUFFaEMsSUFBTUMsY0FBYyxHQUFHRCx3RUFBVTs7O3NCQW1EckI7UUFBR0csS0FBSyxTQUFMQSxLQUFLO1dBQU9BLEtBQUssQ0FBQ0MsYUFBYSxJQUFJLFNBQVM7Q0FBQSxDQUtqRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RpbWVsaW5lLmpzP2EyZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRUaW1lbGluZSA9IHN0eWxlZC5kaXZgXHJcbiAgZmxleDogMTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICBhc3BlY3QtcmF0aW86IDE2Lzk7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMjEwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICBzZWN0aW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMTZweCAqIDQpO1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLWdhcDogMTZweDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjAwcHgsIDFmcikpO1xyXG4gICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xyXG4gICAgICBncmlkLWF1dG8tY29sdW1uczogbWlubWF4KDIwMHB4LCAxZnIpO1xyXG4gICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICAgIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xyXG4gICAgICAmOjotd2Via2l0LXNsaWRlci10aHVtYiB7XHJcbiAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNkOWQ5ZDk7XHJcbiAgICAgICAgc2Nyb2xsXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0Q29sb3JCYXNlIHx8IFwiIzIyMjIyMlwifTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJTdHlsZWRUaW1lbGluZSIsImRpdiIsInRoZW1lIiwidGV4dENvbG9yQmFzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Timeline.js\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst register = ()=>{\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        username: \"\",\n        email: \"\",\n        password: \"\",\n        password2: \"\",\n        successMsg: false,\n        errorMsg: false,\n        loading: false\n    });\n    const { username , email , password , password2 , successMsg , errorMsg , loading  } = formData;\n    const handleChange = (evt)=>{\n        setFormData({\n            ...formData,\n            [evt.target.name]: evt.target.value\n        });\n    };\n    const handleSubmit = (evt)=>{\n        evt.preventDefault();\n        console.log(formDA);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"signup-box\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-box\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-md-6 col-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"\",\n                                children: \"Registration Form\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                onSubmit: handleSubmit,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"form-group\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            className: \"form-control\",\n                                            id: \"exampleInputfirstname\",\n                                            name: \"username\",\n                                            value: username,\n                                            placeholder: \"Username\",\n                                            onChange: handleChange\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                            lineNumber: 44,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"form-group\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"email\",\n                                            className: \"form-control\",\n                                            id: \"exampleInputEmail1\",\n                                            \"aria-describedby\": \"emailHelp\",\n                                            name: \"email\",\n                                            value: email,\n                                            placeholder: \"Email Address\",\n                                            onChange: handleChange\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"form-group\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"password\",\n                                            className: \"form-control\",\n                                            id: \"exampleInputPassword\",\n                                            name: \"password\",\n                                            value: password,\n                                            placeholder: \"Password\",\n                                            onChange: handleChange\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                            lineNumber: 68,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"form-group\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"confirm-password\",\n                                            className: \"form-control\",\n                                            id: \"exampleInputPassword\",\n                                            name: \"password2\",\n                                            value: password2,\n                                            placeholder: \"Confirm Password\",\n                                            onChange: handleChange\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        className: \"btn btn-primary sign-up-btn\",\n                                        name: \"create\",\n                                        children: \"Sign up\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                        lineNumber: 89,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"login-link\",\n                                        children: [\n                                            \"Have an accout?\",\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                        href: \"sign-in\",\n                                                        children: \"Sign In\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                                        lineNumber: 99,\n                                                        columnNumber: 21\n                                                    }, undefined),\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                                lineNumber: 98,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                        lineNumber: 96,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                lineNumber: 42,\n                                columnNumber: 15\n                            }, undefined),\n                            JSON.stringify(formData)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(register, \"yBENYahCyts9tQ1/YrA/pgUM9Xg=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (register);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDWDtBQUU3QixNQUFNRyxXQUFXLElBQU07O0lBQ3JCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSiwrQ0FBUUEsQ0FBQztRQUN2Q0ssVUFBVTtRQUNWQyxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsV0FBVztRQUNYQyxZQUFZLEtBQUs7UUFDakJDLFVBQVUsS0FBSztRQUNmQyxTQUFTLEtBQUs7SUFDaEI7SUFFQSxNQUFNLEVBQ0pOLFNBQVEsRUFDUkMsTUFBSyxFQUNMQyxTQUFRLEVBQ1JDLFVBQVMsRUFDVEMsV0FBVSxFQUNWQyxTQUFRLEVBQ1JDLFFBQU8sRUFDUixHQUFHUjtJQUVKLE1BQU1TLGVBQWUsQ0FBQ0MsTUFBTTtRQUMxQlQsWUFBWTtZQUNWLEdBQUdELFFBQVE7WUFDWCxDQUFDVSxJQUFJQyxNQUFNLENBQUNDLElBQUksQ0FBQyxFQUFDRixJQUFJQyxNQUFNLENBQUNFLEtBQUs7UUFDcEM7SUFDRjtJQUNBLE1BQU1DLGVBQWFKLENBQUFBLE1BQUs7UUFDdEJBLElBQUlLLGNBQWM7UUFDbEJDLFFBQVFDLEdBQUcsQ0FBQ0M7SUFDZDtJQUNBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0M7Z0NBQUdELFdBQVU7MENBQUc7Ozs7OzswQ0FDakIsOERBQUNFO2dDQUFLQyxVQUFVVDs7a0RBQ2QsOERBQUNLO3dDQUFJQyxXQUFVO2tEQUNiLDRFQUFDSTs0Q0FDQ0MsTUFBSzs0Q0FDTEwsV0FBVTs0Q0FDVk0sSUFBRzs0Q0FDSGQsTUFBSzs0Q0FDTEMsT0FBT1g7NENBQ1B5QixhQUFZOzRDQUNaQyxVQUFVbkI7Ozs7Ozs7Ozs7O2tEQUlkLDhEQUFDVTt3Q0FBSUMsV0FBVTtrREFDYiw0RUFBQ0k7NENBQ0NDLE1BQUs7NENBQ0xMLFdBQVU7NENBQ1ZNLElBQUc7NENBQ0hHLG9CQUFpQjs0Q0FDakJqQixNQUFLOzRDQUNMQyxPQUFPVjs0Q0FDUHdCLGFBQVk7NENBQ1pDLFVBQVVuQjs7Ozs7Ozs7Ozs7a0RBR2QsOERBQUNVO3dDQUFJQyxXQUFVO2tEQUNiLDRFQUFDSTs0Q0FDQ0MsTUFBSzs0Q0FDTEwsV0FBVTs0Q0FDVk0sSUFBRzs0Q0FDSGQsTUFBSzs0Q0FDTEMsT0FBT1Q7NENBQ1B1QixhQUFZOzRDQUNaQyxVQUFVbkI7Ozs7Ozs7Ozs7O2tEQUdkLDhEQUFDVTt3Q0FBSUMsV0FBVTtrREFDYiw0RUFBQ0k7NENBQ0NDLE1BQUs7NENBQ0xMLFdBQVU7NENBQ1ZNLElBQUc7NENBQ0hkLE1BQUs7NENBQ0xDLE9BQU9SOzRDQUNQc0IsYUFBWTs0Q0FDWkMsVUFBVW5COzs7Ozs7Ozs7OztrREFHZCw4REFBQ3FCO3dDQUNDTCxNQUFLO3dDQUNMTCxXQUFVO3dDQUNWUixNQUFLO2tEQUNOOzs7Ozs7a0RBR0QsOERBQUNtQjt3Q0FBRVgsV0FBVTs7NENBQWE7NENBQ1I7MERBQ2hCLDhEQUFDWTs7a0VBQ0MsOERBQUNsQyxrREFBSUE7d0RBQUNtQyxNQUFLO2tFQUFVOzs7Ozs7b0RBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBSXpDQyxLQUFLQyxTQUFTLENBQUNuQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzlCO0dBMUdNRDtBQTRHTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZWdpc3Rlci5qcz9hMDk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCByZWdpc3RlciA9ICgpID0+IHtcclxuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBwYXNzd29yZDogXCJcIixcclxuICAgIHBhc3N3b3JkMjogXCJcIixcclxuICAgIHN1Y2Nlc3NNc2c6IGZhbHNlLFxyXG4gICAgZXJyb3JNc2c6IGZhbHNlLFxyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIHVzZXJuYW1lLFxyXG4gICAgZW1haWwsXHJcbiAgICBwYXNzd29yZCxcclxuICAgIHBhc3N3b3JkMixcclxuICAgIHN1Y2Nlc3NNc2csXHJcbiAgICBlcnJvck1zZyxcclxuICAgIGxvYWRpbmcsXHJcbiAgfSA9IGZvcm1EYXRhO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZ0KT0+e1xyXG4gICAgc2V0Rm9ybURhdGEoe1xyXG4gICAgICAuLi5mb3JtRGF0YSxcclxuICAgICAgW2V2dC50YXJnZXQubmFtZV06ZXZ0LnRhcmdldC52YWx1ZVxyXG4gICAgfSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlU3VibWl0PWV2dD0+e1xyXG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhmb3JtREEpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzaWdudXAtYm94XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ib3hcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBjb2wtOFwiPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJcIj5SZWdpc3RyYXRpb24gRm9ybTwvaDI+XHJcbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJleGFtcGxlSW5wdXRmaXJzdG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZXhhbXBsZUlucHV0RW1haWwxXCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxIZWxwXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJleGFtcGxlSW5wdXRQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjb25maXJtLXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZXhhbXBsZUlucHV0UGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZDJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZDJ9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgc2lnbi11cC1idG5cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiY3JlYXRlXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgU2lnbiB1cFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsb2dpbi1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgIEhhdmUgYW4gYWNjb3V0P3tcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cInNpZ24taW5cIj5TaWduIEluPC9MaW5rPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMaW5rIiwicmVnaXN0ZXIiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwidXNlcm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwicGFzc3dvcmQyIiwic3VjY2Vzc01zZyIsImVycm9yTXNnIiwibG9hZGluZyIsImhhbmRsZUNoYW5nZSIsImV2dCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImZvcm1EQSIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYXJpYS1kZXNjcmliZWRieSIsImJ1dHRvbiIsInAiLCJzcGFuIiwiaHJlZiIsIkpTT04iLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/register.js\n"));

/***/ })

});
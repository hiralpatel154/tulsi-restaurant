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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! validator/lib/isEmail */ \"./node_modules/validator/lib/isEmail.js\");\n/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var validator_lib_isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! validator/lib/isEmpty */ \"./node_modules/validator/lib/isEmpty.js\");\n/* harmony import */ var validator_lib_isEmpty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isEmpty__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var validator_lib_equals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! validator/lib/equals */ \"./node_modules/validator/lib/equals.js\");\n/* harmony import */ var validator_lib_equals__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(validator_lib_equals__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n// import validator from \"validator\";\n\n\n\nconst register = ()=>{\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        username: \"\",\n        email: \"\",\n        password: \"\",\n        password2: \"\",\n        successMsg: false,\n        errorMsg: false,\n        loading: false\n    });\n    const { username , email , password , password2 , successMsg , errorMsg , loading  } = formData;\n    const handleChange = (evt)=>{\n        setFormData({\n            ...formData,\n            [evt.target.name]: evt.target.value\n        });\n    };\n    const handleSubmit = (evt)=>{\n        evt.preventDefault();\n        // console.log(formData);\n        // Validation\n        if (validator_lib_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(username) || validator_lib_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(email) || validator_lib_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(password) || validator_lib_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(password2)) {\n            setFormData({\n                ...formData,\n                errorMsg: \"All Fields are required\"\n            });\n        } else if (!validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_4___default()(email)) {\n            setFormData({\n                ...formData,\n                errorMsg: \"Invalid Email\"\n            });\n        } else if (!validator_lib_equals__WEBPACK_IMPORTED_MODULE_5___default()(password, password2)) {\n            setFormData({\n                ...formData,\n                errorMsg\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"signup-box\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-box\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-md-6 col-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"\",\n                                children: \"Registration Form\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                lineNumber: 67,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                onSubmit: handleSubmit,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"form-group\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            className: \"form-control\",\n                                            id: \"exampleInputfirstname\",\n                                            name: \"username\",\n                                            value: username,\n                                            placeholder: \"Username\",\n                                            onChange: handleChange\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"form-group\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"email\",\n                                            className: \"form-control\",\n                                            id: \"exampleInputEmail1\",\n                                            \"aria-describedby\": \"emailHelp\",\n                                            name: \"email\",\n                                            value: email,\n                                            placeholder: \"Email Address\",\n                                            onChange: handleChange\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                            lineNumber: 82,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"form-group\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"password\",\n                                            className: \"form-control\",\n                                            id: \"exampleInputPassword\",\n                                            name: \"password\",\n                                            value: password,\n                                            placeholder: \"Password\",\n                                            onChange: handleChange\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                            lineNumber: 94,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                        lineNumber: 93,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"form-group\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"confirm-password\",\n                                            className: \"form-control\",\n                                            id: \"exampleInputPassword\",\n                                            name: \"password2\",\n                                            value: password2,\n                                            placeholder: \"Confirm Password\",\n                                            onChange: handleChange\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                            lineNumber: 105,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                        lineNumber: 104,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        className: \"btn btn-primary sign-up-btn\",\n                                        name: \"create\",\n                                        children: \"Sign up\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                        lineNumber: 115,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"login-link\",\n                                        children: [\n                                            \"Have an accout?\",\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                        href: \"sign-in\",\n                                                        children: \"Sign In\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                                        lineNumber: 125,\n                                                        columnNumber: 21\n                                                    }, undefined),\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                                lineNumber: 124,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                        lineNumber: 122,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                lineNumber: 68,\n                                columnNumber: 15\n                            }, undefined),\n                            JSON.stringify(formData)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                        lineNumber: 66,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                    lineNumber: 65,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n            lineNumber: 63,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, undefined);\n};\n_s(register, \"yBENYahCyts9tQ1/YrA/pgUM9Xg=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (register);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDWDtBQUM3QixxQ0FBcUM7QUFDTztBQUNBO0FBQ0Y7QUFFMUMsTUFBTU0sV0FBVyxJQUFNOztJQUNyQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7UUFDdkNRLFVBQVU7UUFDVkMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLFdBQVc7UUFDWEMsWUFBWSxLQUFLO1FBQ2pCQyxVQUFVLEtBQUs7UUFDZkMsU0FBUyxLQUFLO0lBQ2hCO0lBRUEsTUFBTSxFQUNKTixTQUFRLEVBQ1JDLE1BQUssRUFDTEMsU0FBUSxFQUNSQyxVQUFTLEVBQ1RDLFdBQVUsRUFDVkMsU0FBUSxFQUNSQyxRQUFPLEVBQ1IsR0FBR1I7SUFFSixNQUFNUyxlQUFlLENBQUNDLE1BQVE7UUFDNUJULFlBQVk7WUFDVixHQUFHRCxRQUFRO1lBQ1gsQ0FBQ1UsSUFBSUMsTUFBTSxDQUFDQyxJQUFJLENBQUMsRUFBRUYsSUFBSUMsTUFBTSxDQUFDRSxLQUFLO1FBQ3JDO0lBQ0Y7SUFDQSxNQUFNQyxlQUFlLENBQUNKLE1BQVE7UUFDNUJBLElBQUlLLGNBQWM7UUFDbEIseUJBQXlCO1FBQ3pCLGFBQWE7UUFDYixJQUNFbEIsNERBQU9BLENBQUNLLGFBQ1JMLDREQUFPQSxDQUFDTSxVQUNSTiw0REFBT0EsQ0FBQ08sYUFDUlAsNERBQU9BLENBQUNRLFlBQ1I7WUFDQUosWUFBWTtnQkFDVixHQUFHRCxRQUFRO2dCQUNYTyxVQUFVO1lBQ1o7UUFDRixPQUFPLElBQUksQ0FBQ1gsNERBQU9BLENBQUNPLFFBQVE7WUFDMUJGLFlBQVk7Z0JBQ1YsR0FBR0QsUUFBUTtnQkFDWE8sVUFBVTtZQUNaO1FBQ0YsT0FDSyxJQUFHLENBQUNULDJEQUFNQSxDQUFDTSxVQUFVQyxZQUFXO1lBQ25DSixZQUFZO2dCQUNWLEdBQUdELFFBQVE7Z0JBQUNPO1lBQ2Q7UUFDRixDQUFDO0lBQ0g7SUFDQSxxQkFDRSw4REFBQ1M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFHRCxXQUFVOzBDQUFHOzs7Ozs7MENBQ2pCLDhEQUFDRTtnQ0FBS0MsVUFBVU47O2tEQUNkLDhEQUFDRTt3Q0FBSUMsV0FBVTtrREFDYiw0RUFBQ0k7NENBQ0NDLE1BQUs7NENBQ0xMLFdBQVU7NENBQ1ZNLElBQUc7NENBQ0hYLE1BQUs7NENBQ0xDLE9BQU9YOzRDQUNQc0IsYUFBWTs0Q0FDWkMsVUFBVWhCOzs7Ozs7Ozs7OztrREFJZCw4REFBQ087d0NBQUlDLFdBQVU7a0RBQ2IsNEVBQUNJOzRDQUNDQyxNQUFLOzRDQUNMTCxXQUFVOzRDQUNWTSxJQUFHOzRDQUNIRyxvQkFBaUI7NENBQ2pCZCxNQUFLOzRDQUNMQyxPQUFPVjs0Q0FDUHFCLGFBQVk7NENBQ1pDLFVBQVVoQjs7Ozs7Ozs7Ozs7a0RBR2QsOERBQUNPO3dDQUFJQyxXQUFVO2tEQUNiLDRFQUFDSTs0Q0FDQ0MsTUFBSzs0Q0FDTEwsV0FBVTs0Q0FDVk0sSUFBRzs0Q0FDSFgsTUFBSzs0Q0FDTEMsT0FBT1Q7NENBQ1BvQixhQUFZOzRDQUNaQyxVQUFVaEI7Ozs7Ozs7Ozs7O2tEQUdkLDhEQUFDTzt3Q0FBSUMsV0FBVTtrREFDYiw0RUFBQ0k7NENBQ0NDLE1BQUs7NENBQ0xMLFdBQVU7NENBQ1ZNLElBQUc7NENBQ0hYLE1BQUs7NENBQ0xDLE9BQU9SOzRDQUNQbUIsYUFBWTs0Q0FDWkMsVUFBVWhCOzs7Ozs7Ozs7OztrREFHZCw4REFBQ2tCO3dDQUNDTCxNQUFLO3dDQUNMTCxXQUFVO3dDQUNWTCxNQUFLO2tEQUNOOzs7Ozs7a0RBR0QsOERBQUNnQjt3Q0FBRVgsV0FBVTs7NENBQWE7NENBQ1I7MERBQ2hCLDhEQUFDWTs7a0VBQ0MsOERBQUNsQyxrREFBSUE7d0RBQUNtQyxNQUFLO2tFQUFVOzs7Ozs7b0RBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBSXpDQyxLQUFLQyxTQUFTLENBQUNoQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzlCO0dBaElNRDtBQWtJTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZWdpc3Rlci5qcz9hMDk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbi8vIGltcG9ydCB2YWxpZGF0b3IgZnJvbSBcInZhbGlkYXRvclwiO1xyXG5pbXBvcnQgaXNFbWFpbCBmcm9tIFwidmFsaWRhdG9yL2xpYi9pc0VtYWlsXCI7XHJcbmltcG9ydCBpc0VtcHR5IGZyb20gXCJ2YWxpZGF0b3IvbGliL2lzRW1wdHlcIjtcclxuaW1wb3J0IGVxdWFscyBmcm9tIFwidmFsaWRhdG9yL2xpYi9lcXVhbHNcIjtcclxuXHJcbmNvbnN0IHJlZ2lzdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQyOiBcIlwiLFxyXG4gICAgc3VjY2Vzc01zZzogZmFsc2UsXHJcbiAgICBlcnJvck1zZzogZmFsc2UsXHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICB9KTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgdXNlcm5hbWUsXHJcbiAgICBlbWFpbCxcclxuICAgIHBhc3N3b3JkLFxyXG4gICAgcGFzc3dvcmQyLFxyXG4gICAgc3VjY2Vzc01zZyxcclxuICAgIGVycm9yTXNnLFxyXG4gICAgbG9hZGluZyxcclxuICB9ID0gZm9ybURhdGE7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldnQpID0+IHtcclxuICAgIHNldEZvcm1EYXRhKHtcclxuICAgICAgLi4uZm9ybURhdGEsXHJcbiAgICAgIFtldnQudGFyZ2V0Lm5hbWVdOiBldnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZ0KSA9PiB7XHJcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcclxuICAgIC8vIFZhbGlkYXRpb25cclxuICAgIGlmIChcclxuICAgICAgaXNFbXB0eSh1c2VybmFtZSkgfHxcclxuICAgICAgaXNFbXB0eShlbWFpbCkgfHxcclxuICAgICAgaXNFbXB0eShwYXNzd29yZCkgfHxcclxuICAgICAgaXNFbXB0eShwYXNzd29yZDIpXHJcbiAgICApIHtcclxuICAgICAgc2V0Rm9ybURhdGEoe1xyXG4gICAgICAgIC4uLmZvcm1EYXRhLFxyXG4gICAgICAgIGVycm9yTXNnOiBcIkFsbCBGaWVsZHMgYXJlIHJlcXVpcmVkXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmICghaXNFbWFpbChlbWFpbCkpIHtcclxuICAgICAgc2V0Rm9ybURhdGEoe1xyXG4gICAgICAgIC4uLmZvcm1EYXRhLFxyXG4gICAgICAgIGVycm9yTXNnOiBcIkludmFsaWQgRW1haWxcIixcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKCFlcXVhbHMocGFzc3dvcmQsIHBhc3N3b3JkMikpe1xyXG4gICAgICBzZXRGb3JtRGF0YSh7XHJcbiAgICAgICAgLi4uZm9ybURhdGEsZXJyb3JNc2dcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ251cC1ib3hcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWJveFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC04XCI+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIlwiPlJlZ2lzdHJhdGlvbiBGb3JtPC9oMj5cclxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImV4YW1wbGVJbnB1dGZpcnN0bmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJleGFtcGxlSW5wdXRFbWFpbDFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJlbWFpbEhlbHBcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImV4YW1wbGVJbnB1dFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNvbmZpcm0tcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJleGFtcGxlSW5wdXRQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkMn1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBzaWduLXVwLWJ0blwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjcmVhdGVcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBTaWduIHVwXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxvZ2luLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgSGF2ZSBhbiBhY2NvdXQ/e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwic2lnbi1pblwiPlNpZ24gSW48L0xpbms+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShmb3JtRGF0YSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJpc0VtYWlsIiwiaXNFbXB0eSIsImVxdWFscyIsInJlZ2lzdGVyIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsInVzZXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInBhc3N3b3JkMiIsInN1Y2Nlc3NNc2ciLCJlcnJvck1zZyIsImxvYWRpbmciLCJoYW5kbGVDaGFuZ2UiLCJldnQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYXJpYS1kZXNjcmliZWRieSIsImJ1dHRvbiIsInAiLCJzcGFuIiwiaHJlZiIsIkpTT04iLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/register.js\n"));

/***/ })

});
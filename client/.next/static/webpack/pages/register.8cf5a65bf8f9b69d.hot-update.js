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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! validator/lib/isEmail */ \"./node_modules/validator/lib/isEmail.js\");\n/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var validator_lib_isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! validator/lib/isEmpty */ \"./node_modules/validator/lib/isEmpty.js\");\n/* harmony import */ var validator_lib_isEmpty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isEmpty__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var validator_lib_equals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! validator/lib/equals */ \"./node_modules/validator/lib/equals.js\");\n/* harmony import */ var validator_lib_equals__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(validator_lib_equals__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n// import validator from \"validator\";\n\n\n\nconst register = ()=>{\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        username: \"\",\n        email: \"\",\n        password: \"\",\n        password2: \"\",\n        successMsg: false,\n        errorMsg: false,\n        loading: false\n    });\n    const { username , email , password , password2 , successMsg , errorMsg , loading  } = formData;\n    const handleChange = (evt)=>{\n        setFormData({\n            ...formData,\n            [evt.target.name]: evt.target.value\n        });\n    };\n    const handleSubmit = (evt)=>{\n        evt.preventDefault();\n        // console.log(formData);\n        // Validation\n        if (validator_lib_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(username) || validator_lib_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(email) || validator_lib_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(password) || validator_lib_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(password2)) {\n            setFormData({\n                ...formData,\n                errorMsg: \"All Fields are required\"\n            });\n        } else if (!validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_4___default()(email)) {\n            setFormData({\n                ...formData,\n                errorMsg: \"Invalid Email\"\n            });\n        } else if (!validator_lib_equals__WEBPACK_IMPORTED_MODULE_5___default()(password, password2)) {}\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"signup-box\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-box\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-md-6 col-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"\",\n                                children: \"Registration Form\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                lineNumber: 65,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                onSubmit: handleSubmit,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"form-group\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            className: \"form-control\",\n                                            id: \"exampleInputfirstname\",\n                                            name: \"username\",\n                                            value: username,\n                                            placeholder: \"Username\",\n                                            onChange: handleChange\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                            lineNumber: 68,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"form-group\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"email\",\n                                            className: \"form-control\",\n                                            id: \"exampleInputEmail1\",\n                                            \"aria-describedby\": \"emailHelp\",\n                                            name: \"email\",\n                                            value: email,\n                                            placeholder: \"Email Address\",\n                                            onChange: handleChange\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                            lineNumber: 80,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"form-group\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"password\",\n                                            className: \"form-control\",\n                                            id: \"exampleInputPassword\",\n                                            name: \"password\",\n                                            value: password,\n                                            placeholder: \"Password\",\n                                            onChange: handleChange\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                            lineNumber: 92,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                        lineNumber: 91,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"form-group\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"confirm-password\",\n                                            className: \"form-control\",\n                                            id: \"exampleInputPassword\",\n                                            name: \"password2\",\n                                            value: password2,\n                                            placeholder: \"Confirm Password\",\n                                            onChange: handleChange\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                            lineNumber: 103,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                        lineNumber: 102,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        className: \"btn btn-primary sign-up-btn\",\n                                        name: \"create\",\n                                        children: \"Sign up\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                        lineNumber: 113,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"login-link\",\n                                        children: [\n                                            \"Have an accout?\",\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                        href: \"sign-in\",\n                                                        children: \"Sign In\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                                        lineNumber: 123,\n                                                        columnNumber: 21\n                                                    }, undefined),\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                                lineNumber: 122,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                        lineNumber: 120,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                                lineNumber: 66,\n                                columnNumber: 15\n                            }, undefined),\n                            JSON.stringify(formData)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                    lineNumber: 63,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\tulsi-restaurant\\\\client\\\\pages\\\\register.js\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, undefined);\n};\n_s(register, \"yBENYahCyts9tQ1/YrA/pgUM9Xg=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (register);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDWDtBQUM3QixxQ0FBcUM7QUFDTztBQUNBO0FBQ0Y7QUFFMUMsTUFBTU0sV0FBVyxJQUFNOztJQUNyQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7UUFDdkNRLFVBQVU7UUFDVkMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLFdBQVc7UUFDWEMsWUFBWSxLQUFLO1FBQ2pCQyxVQUFVLEtBQUs7UUFDZkMsU0FBUyxLQUFLO0lBQ2hCO0lBRUEsTUFBTSxFQUNKTixTQUFRLEVBQ1JDLE1BQUssRUFDTEMsU0FBUSxFQUNSQyxVQUFTLEVBQ1RDLFdBQVUsRUFDVkMsU0FBUSxFQUNSQyxRQUFPLEVBQ1IsR0FBR1I7SUFFSixNQUFNUyxlQUFlLENBQUNDLE1BQVE7UUFDNUJULFlBQVk7WUFDVixHQUFHRCxRQUFRO1lBQ1gsQ0FBQ1UsSUFBSUMsTUFBTSxDQUFDQyxJQUFJLENBQUMsRUFBRUYsSUFBSUMsTUFBTSxDQUFDRSxLQUFLO1FBQ3JDO0lBQ0Y7SUFDQSxNQUFNQyxlQUFlLENBQUNKLE1BQVE7UUFDNUJBLElBQUlLLGNBQWM7UUFDbEIseUJBQXlCO1FBQ3pCLGFBQWE7UUFDYixJQUNFbEIsNERBQU9BLENBQUNLLGFBQ1JMLDREQUFPQSxDQUFDTSxVQUNSTiw0REFBT0EsQ0FBQ08sYUFDUlAsNERBQU9BLENBQUNRLFlBQ1I7WUFDQUosWUFBWTtnQkFDVixHQUFHRCxRQUFRO2dCQUNYTyxVQUFVO1lBQ1o7UUFDRixPQUFPLElBQUksQ0FBQ1gsNERBQU9BLENBQUNPLFFBQVE7WUFDMUJGLFlBQVk7Z0JBQ1YsR0FBR0QsUUFBUTtnQkFDWE8sVUFBVTtZQUNaO1FBQ0YsT0FDSyxJQUFHLENBQUNULDJEQUFNQSxDQUFDTSxVQUFVQyxZQUFXLENBRXJDLENBQUM7SUFDSDtJQUNBLHFCQUNFLDhEQUFDVztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0M7Z0NBQUdELFdBQVU7MENBQUc7Ozs7OzswQ0FDakIsOERBQUNFO2dDQUFLQyxVQUFVTjs7a0RBQ2QsOERBQUNFO3dDQUFJQyxXQUFVO2tEQUNiLDRFQUFDSTs0Q0FDQ0MsTUFBSzs0Q0FDTEwsV0FBVTs0Q0FDVk0sSUFBRzs0Q0FDSFgsTUFBSzs0Q0FDTEMsT0FBT1g7NENBQ1BzQixhQUFZOzRDQUNaQyxVQUFVaEI7Ozs7Ozs7Ozs7O2tEQUlkLDhEQUFDTzt3Q0FBSUMsV0FBVTtrREFDYiw0RUFBQ0k7NENBQ0NDLE1BQUs7NENBQ0xMLFdBQVU7NENBQ1ZNLElBQUc7NENBQ0hHLG9CQUFpQjs0Q0FDakJkLE1BQUs7NENBQ0xDLE9BQU9WOzRDQUNQcUIsYUFBWTs0Q0FDWkMsVUFBVWhCOzs7Ozs7Ozs7OztrREFHZCw4REFBQ087d0NBQUlDLFdBQVU7a0RBQ2IsNEVBQUNJOzRDQUNDQyxNQUFLOzRDQUNMTCxXQUFVOzRDQUNWTSxJQUFHOzRDQUNIWCxNQUFLOzRDQUNMQyxPQUFPVDs0Q0FDUG9CLGFBQVk7NENBQ1pDLFVBQVVoQjs7Ozs7Ozs7Ozs7a0RBR2QsOERBQUNPO3dDQUFJQyxXQUFVO2tEQUNiLDRFQUFDSTs0Q0FDQ0MsTUFBSzs0Q0FDTEwsV0FBVTs0Q0FDVk0sSUFBRzs0Q0FDSFgsTUFBSzs0Q0FDTEMsT0FBT1I7NENBQ1BtQixhQUFZOzRDQUNaQyxVQUFVaEI7Ozs7Ozs7Ozs7O2tEQUdkLDhEQUFDa0I7d0NBQ0NMLE1BQUs7d0NBQ0xMLFdBQVU7d0NBQ1ZMLE1BQUs7a0RBQ047Ozs7OztrREFHRCw4REFBQ2dCO3dDQUFFWCxXQUFVOzs0Q0FBYTs0Q0FDUjswREFDaEIsOERBQUNZOztrRUFDQyw4REFBQ2xDLGtEQUFJQTt3REFBQ21DLE1BQUs7a0VBQVU7Ozs7OztvREFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFJekNDLEtBQUtDLFNBQVMsQ0FBQ2hDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPOUI7R0E5SE1EO0FBZ0lOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3JlZ2lzdGVyLmpzP2EwOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuLy8gaW1wb3J0IHZhbGlkYXRvciBmcm9tIFwidmFsaWRhdG9yXCI7XHJcbmltcG9ydCBpc0VtYWlsIGZyb20gXCJ2YWxpZGF0b3IvbGliL2lzRW1haWxcIjtcclxuaW1wb3J0IGlzRW1wdHkgZnJvbSBcInZhbGlkYXRvci9saWIvaXNFbXB0eVwiO1xyXG5pbXBvcnQgZXF1YWxzIGZyb20gXCJ2YWxpZGF0b3IvbGliL2VxdWFsc1wiO1xyXG5cclxuY29uc3QgcmVnaXN0ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB1c2VybmFtZTogXCJcIixcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICBwYXNzd29yZDI6IFwiXCIsXHJcbiAgICBzdWNjZXNzTXNnOiBmYWxzZSxcclxuICAgIGVycm9yTXNnOiBmYWxzZSxcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICB1c2VybmFtZSxcclxuICAgIGVtYWlsLFxyXG4gICAgcGFzc3dvcmQsXHJcbiAgICBwYXNzd29yZDIsXHJcbiAgICBzdWNjZXNzTXNnLFxyXG4gICAgZXJyb3JNc2csXHJcbiAgICBsb2FkaW5nLFxyXG4gIH0gPSBmb3JtRGF0YTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2dCkgPT4ge1xyXG4gICAgc2V0Rm9ybURhdGEoe1xyXG4gICAgICAuLi5mb3JtRGF0YSxcclxuICAgICAgW2V2dC50YXJnZXQubmFtZV06IGV2dC50YXJnZXQudmFsdWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldnQpID0+IHtcclxuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gY29uc29sZS5sb2coZm9ybURhdGEpO1xyXG4gICAgLy8gVmFsaWRhdGlvblxyXG4gICAgaWYgKFxyXG4gICAgICBpc0VtcHR5KHVzZXJuYW1lKSB8fFxyXG4gICAgICBpc0VtcHR5KGVtYWlsKSB8fFxyXG4gICAgICBpc0VtcHR5KHBhc3N3b3JkKSB8fFxyXG4gICAgICBpc0VtcHR5KHBhc3N3b3JkMilcclxuICAgICkge1xyXG4gICAgICBzZXRGb3JtRGF0YSh7XHJcbiAgICAgICAgLi4uZm9ybURhdGEsXHJcbiAgICAgICAgZXJyb3JNc2c6IFwiQWxsIEZpZWxkcyBhcmUgcmVxdWlyZWRcIixcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKCFpc0VtYWlsKGVtYWlsKSkge1xyXG4gICAgICBzZXRGb3JtRGF0YSh7XHJcbiAgICAgICAgLi4uZm9ybURhdGEsXHJcbiAgICAgICAgZXJyb3JNc2c6IFwiSW52YWxpZCBFbWFpbFwiLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoIWVxdWFscyhwYXNzd29yZCwgcGFzc3dvcmQyKSl7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2lnbnVwLWJveFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tYm94XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLThcIj5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiXCI+UmVnaXN0cmF0aW9uIEZvcm08L2gyPlxyXG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZXhhbXBsZUlucHV0Zmlyc3RuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImV4YW1wbGVJbnB1dEVtYWlsMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImVtYWlsSGVscFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZXhhbXBsZUlucHV0UGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY29uZmlybS1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImV4YW1wbGVJbnB1dFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmQyXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmQyfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IHNpZ24tdXAtYnRuXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNyZWF0ZVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFNpZ24gdXBcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibG9naW4tbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICBIYXZlIGFuIGFjY291dD97XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJzaWduLWluXCI+U2lnbiBJbjwvTGluaz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KGZvcm1EYXRhKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGluayIsImlzRW1haWwiLCJpc0VtcHR5IiwiZXF1YWxzIiwicmVnaXN0ZXIiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwidXNlcm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwicGFzc3dvcmQyIiwic3VjY2Vzc01zZyIsImVycm9yTXNnIiwibG9hZGluZyIsImhhbmRsZUNoYW5nZSIsImV2dCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJpZCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJhcmlhLWRlc2NyaWJlZGJ5IiwiYnV0dG9uIiwicCIsInNwYW4iLCJocmVmIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/register.js\n"));

/***/ }),

/***/ "./node_modules/validator/lib/equals.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/equals.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = equals;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction equals(str, comparison) {\n  (0, _assertString.default)(str);\n  return str === comparison;\n}\n\nmodule.exports = exports.default;\nmodule.exports[\"default\"] = exports.default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9lcXVhbHMuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7O0FBRWYsMkNBQTJDLG1CQUFPLENBQUMsOEVBQXFCOztBQUV4RSx1Q0FBdUMsdUNBQXVDOztBQUU5RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUFzQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9lcXVhbHMuanM/YTczYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGVxdWFscztcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZXF1YWxzKHN0ciwgY29tcGFyaXNvbikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gc3RyID09PSBjb21wYXJpc29uO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/validator/lib/equals.js\n"));

/***/ })

});
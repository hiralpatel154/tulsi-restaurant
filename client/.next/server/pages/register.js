"use strict";
(() => {
var exports = {};
exports.id = 495;
exports.ids = [495];
exports.modules = {

/***/ 9577:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ signup)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const signup = async (data)=>{
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("/api/auth/register", data, config);
    return response;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ showLoading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const showLoading = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "spinner-grow text-primary mx-1",
                role: "status",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "visually-hidden",
                    children: "Loading..."
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "spinner-grow text-secondary mx-1",
                role: "status",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "visually-hidden",
                    children: "Loading..."
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "spinner-grow text-success mx-1",
                role: "status",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "visually-hidden",
                    children: "Loading..."
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "spinner-grow text-danger mx-1",
                role: "status",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "visually-hidden",
                    children: "Loading..."
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "spinner-grow text-warning mx-1",
                role: "status",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "visually-hidden",
                    children: "Loading..."
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "spinner-grow text-info mx-1",
                role: "status",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "visually-hidden",
                    children: "Loading..."
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "spinner-grow text-light mx-1",
                role: "status",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "visually-hidden",
                    children: "Loading..."
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "spinner-grow text-dark mx-1",
                role: "status",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "visually-hidden",
                    children: "Loading..."
                })
            })
        ]
    });


/***/ }),

/***/ 5579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ showSuccessMsg),
/* harmony export */   "o": () => (/* binding */ showErrorMsg)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const showErrorMsg = (msg)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "alert alert-danger",
        role: "alert",
        children: msg
    });
const showSuccessMsg = (msg)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "alert alert-success",
        role: "alert",
        children: msg
    });


/***/ }),

/***/ 3187:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7379);
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var validator_lib_isEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7179);
/* harmony import */ var validator_lib_isEmpty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isEmpty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var validator_lib_equals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(557);
/* harmony import */ var validator_lib_equals__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(validator_lib_equals__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5579);
/* harmony import */ var _helpers_loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1715);
/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9577);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_auth__WEBPACK_IMPORTED_MODULE_8__]);
_api_auth__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// import validator from "validator";






const register = ()=>{
    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        username: "",
        email: "",
        password: "",
        password2: "",
        successMsg: false,
        errorMsg: false,
        loading: false
    });
    const { username , email , password , password2 , successMsg , errorMsg , loading  } = formData;
    const handleChange = (evt)=>{
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
            successMsg: "",
            errorMsg: ""
        });
    };
    const handleSubmit = (evt)=>{
        evt.preventDefault();
        // console.log(formData);
        // Validation
        if (validator_lib_isEmpty__WEBPACK_IMPORTED_MODULE_4___default()(username) || validator_lib_isEmpty__WEBPACK_IMPORTED_MODULE_4___default()(email) || validator_lib_isEmpty__WEBPACK_IMPORTED_MODULE_4___default()(password) || validator_lib_isEmpty__WEBPACK_IMPORTED_MODULE_4___default()(password2)) {
            setFormData({
                ...formData,
                errorMsg: "All Fields are required"
            });
        } else if (!validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_3___default()(email)) {
            setFormData({
                ...formData,
                errorMsg: "Invalid Email"
            });
        } else if (!validator_lib_equals__WEBPACK_IMPORTED_MODULE_5___default()(password, password2)) {
            setFormData({
                ...formData,
                errorMsg: "Password do not Match"
            });
        } else {
            const { username , email , password  } = formData;
            const data = {
                username,
                email,
                password
            };
            setFormData({
                ...formData,
                loading: true
            });
            (0,_api_auth__WEBPACK_IMPORTED_MODULE_8__/* .signup */ .I)(data).then((response)=>{
                console.log("Axios signup success", response);
                setFormData({
                    username: "",
                    email: "",
                    password: "",
                    password2: "",
                    loading: false,
                    successMsg: response.data.successMessage
                });
            }).catch((err)=>{
                console.log("Axios signup error:", err);
                setFormData({
                    ...formData,
                    loading: false
                });
            });
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "signup-box",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "form-box",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-md-6 col-8",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "",
                                children: "Registration Form"
                            }),
                            successMsg && (0,_helpers_message__WEBPACK_IMPORTED_MODULE_6__/* .showSuccessMsg */ .C)(successMsg),
                            errorMsg && (0,_helpers_message__WEBPACK_IMPORTED_MODULE_6__/* .showErrorMsg */ .o)(errorMsg),
                            loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-center pb-4",
                                children: (0,_helpers_loading__WEBPACK_IMPORTED_MODULE_7__/* .showLoading */ .Q)()
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                onSubmit: handleSubmit,
                                noValidate: true,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "form-group",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            className: "form-control",
                                            id: "exampleInputfirstname",
                                            name: "username",
                                            value: username,
                                            placeholder: "Username",
                                            onChange: handleChange
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "form-group",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "email",
                                            className: "form-control",
                                            id: "exampleInputEmail1",
                                            "aria-describedby": "emailHelp",
                                            name: "email",
                                            value: email,
                                            placeholder: "Email Address",
                                            onChange: handleChange
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "form-group",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "password",
                                            className: "form-control",
                                            id: "exampleInputPassword",
                                            name: "password",
                                            value: password,
                                            placeholder: "Password",
                                            onChange: handleChange
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "form-group",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "confirm-password",
                                            className: "form-control",
                                            id: "exampleInputPassword",
                                            name: "password2",
                                            value: password2,
                                            placeholder: "Confirm Password",
                                            onChange: handleChange
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "submit",
                                        className: "btn btn-primary sign-up-btn",
                                        name: "create",
                                        children: "Sign up"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "login-link",
                                        children: [
                                            "Have an accout?",
                                            " ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: "sign-in",
                                                        children: "Sign In"
                                                    }),
                                                    " "
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            JSON.stringify(formData)
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (register);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 557:
/***/ ((module) => {

module.exports = require("validator/lib/equals");

/***/ }),

/***/ 7379:
/***/ ((module) => {

module.exports = require("validator/lib/isEmail");

/***/ }),

/***/ 7179:
/***/ ((module) => {

module.exports = require("validator/lib/isEmpty");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664], () => (__webpack_exec__(3187)));
module.exports = __webpack_exports__;

})();
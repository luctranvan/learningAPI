(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/login.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/login.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'login',
  metaInfo: function metaInfo() {
    return {
      title: "「ログイン/Login」",
      meta: [{
        name: 'description',
        content: 'description'
      }, {
        property: 'og:title',
        content: "「ログイン/Login」"
      }, {
        property: 'og:type',
        content: 'website'
      }, {
        name: 'robots',
        content: 'index,follow'
      }]
    };
  },
  data: function data() {
    return {
      model: {
        email: '',
        password: ''
      },
      errors: [],
      loading: false
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      var _this = this;

      this.$store.dispatch('login', this.model).then(function () {
        _this.loading = false;

        _this.$router.push({
          path: 'home'
        });
      })["catch"](function (errors) {
        _this.errors = errors.response.data.errors;
        _this.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/login.vue?vue&type=template&id=c8f9cd0c&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/login.vue?vue&type=template&id=c8f9cd0c& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-md-8" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header" }, [_vm._v("Login")]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "form-group row" }, [
              _c(
                "label",
                {
                  staticClass: "col-md-4 col-form-label text-md-right",
                  attrs: { for: "email" }
                },
                [_vm._v("E-Mail Address")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.model.email,
                      expression: "model.email"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "email",
                    type: "email",
                    name: "email",
                    autocomplete: "email",
                    autofocus: ""
                  },
                  domProps: { value: _vm.model.email },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.model, "email", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  { staticClass: "invalid-feedback", attrs: { role: "alert" } },
                  [_c("strong", [_vm._v(_vm._s(_vm.errors.email))])]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c(
                "label",
                {
                  staticClass: "col-md-4 col-form-label text-md-right",
                  attrs: { for: "password" }
                },
                [_vm._v("Password")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.model.password,
                      expression: "model.password"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "password",
                    type: "password",
                    name: "password",
                    autocomplete: "current-password"
                  },
                  domProps: { value: _vm.model.password },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.model, "password", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  { staticClass: "invalid-feedback", attrs: { role: "alert" } },
                  [_c("strong", [_vm._v(_vm._s(_vm.errors.password))])]
                )
              ])
            ]),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row mb-0" }, [
              _c("div", { staticClass: "col-md-8 offset-md-4" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { type: "submit" },
                    on: { click: _vm.onSubmit }
                  },
                  [
                    _vm._v(
                      "\n                                Login\n                            "
                    )
                  ]
                ),
                _vm._v(" "),
                _c("a", { staticClass: "btn btn-link" }, [
                  _vm._v(
                    "\n                                Forgot Your Password?\n                            "
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", [
              _c("p", [_vm._v("Error output")]),
              _vm._v(" "),
              _c("pre", [
                _vm._v(
                  "                            " +
                    _vm._s(_vm._f("json")(_vm.errors)) +
                    "\n                        "
                )
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group row" }, [
      _c("div", { staticClass: "col-md-6 offset-md-4" }, [
        _c("div", { staticClass: "form-check" }, [
          _c("input", {
            staticClass: "form-check-input",
            attrs: { type: "checkbox", name: "remember", id: "remember" }
          }),
          _vm._v(" "),
          _c(
            "label",
            { staticClass: "form-check-label", attrs: { for: "remember" } },
            [
              _vm._v(
                "\n                                    Remember Me\n                                "
              )
            ]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/login.vue":
/*!**************************************!*\
  !*** ./resources/js/views/login.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_c8f9cd0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=c8f9cd0c& */ "./resources/js/views/login.vue?vue&type=template&id=c8f9cd0c&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./resources/js/views/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_c8f9cd0c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_c8f9cd0c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/login.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/views/login.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/login.vue?vue&type=template&id=c8f9cd0c&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/login.vue?vue&type=template&id=c8f9cd0c& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_c8f9cd0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=template&id=c8f9cd0c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/login.vue?vue&type=template&id=c8f9cd0c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_c8f9cd0c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_c8f9cd0c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
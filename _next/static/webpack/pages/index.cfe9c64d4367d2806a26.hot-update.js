webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_construct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/construct */ \"./node_modules/@babel/runtime/helpers/esm/construct.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\nvar _jsxFileName = \"/home/thomas/repos/demo-flux-cnaf/pages/index.js\",\n    _s2 = $RefreshSig$();\n\n\n\n\nfunction Home() {\n  _s2();\n\n  var _s = $RefreshSig$();\n\n  var defaultColor = 'white';\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(defaultColor),\n      color = _useState[0],\n      setColor = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null),\n      file = _useState2[0],\n      setFile = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])('?'),\n      total = _useState3[0],\n      setTotal = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])('?'),\n      countWithEmail = _useState4[0],\n      setCountWithEmail = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])('?'),\n      countWithUsableEmail = _useState5[0],\n      setCountWithUsableEmail = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      hasError = _useState6[0],\n      setHasError = _useState6[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    if (!file) {\n      return;\n    }\n\n    var items = Object(_babel_runtime_helpers_esm_construct__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Array, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(file.getElementsByTagName('InfoDemandeRSA')));\n\n    setTotal(items.length);\n    var withEmail = items.filter(function (i) {\n      return i.getElementsByTagName('ADRELEC').length;\n    });\n    setCountWithEmail(withEmail.length);\n    var withUsableEmail = items.filter(function (i) {\n      var ok = i.getElementsByTagName('AUTORUTIADRELEC')[0];\n      return i.getElementsByTagName('ADRELEC').length && ok && ok.innerHTML == \"A\";\n    });\n    setCountWithUsableEmail(withUsableEmail.length);\n  }, [file]); // useEffect(() => {\n  //   fetch('/test.xml').then(response => {\n  //     const parser = new DOMParser();\n  //     response.text().then(text => {\n  //       const dom = parser.parseFromString(text, \"application/xml\");\n  //       setFile(dom)\n  //     })\n  //   })\n  // }, [])\n\n  var dragHandler = function dragHandler(color) {\n    _s();\n\n    return Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useCallback\"])(function (event) {\n      setColor(color);\n      event.preventDefault(); // Prevent file from being open on drop\n    });\n  };\n\n  _s(dragHandler, \"epj4qY15NHsef74wNqHIp5fdZmg=\");\n\n  var dropHandler = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useCallback\"])(function (event) {\n    event.preventDefault();\n    setColor(defaultColor);\n    var reader = new FileReader();\n\n    reader.onload = function (event) {\n      var parser = new DOMParser();\n      var dom = parser.parseFromString(event.target.result, \"application/xml\");\n      setFile(dom);\n      setHasError(dom.activeElement.nodeName == \"parsererror\");\n    };\n\n    reader.readAsText(event.dataTransfer.files[0]);\n  });\n  var selectHandler = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useCallback\"])(function (event) {\n    var reader = new FileReader();\n\n    reader.onload = function (event) {\n      var parser = new DOMParser();\n      var dom = parser.parseFromString(event.target.result, \"application/xml\");\n      setFile(dom);\n      setHasError(dom.activeElement.nodeName == \"parsererror\");\n    };\n\n    reader.readAsText(event.target.files[0]);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.container,\n    style: {\n      backgroundColor: color\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Testeur de fichier CNAF\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.main,\n      onDragOver: dragHandler('#0070f3'),\n      onDragLeave: dragHandler(defaultColor),\n      onDrop: dropHandler,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.title,\n        children: \"Testeur de fichier CNAF\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.description,\n        children: [\"Glissez et d\\xE9posez le fichier CNAF \\xE0 analyser ou s\\xE9lectionnez le.\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 76\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"file\",\n          onChange: selectHandler\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.description,\n        children: [\"Les op\\xE9rations sont toutes r\\xE9alis\\xE9es sur votre ordinateur.\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 69\n        }, this), \"Aucune donn\\xE9e n'est transf\\xE9r\\xE9e.\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 9\n      }, this), hasError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.grid,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"mailto:data.insertion@beta.gouv.fr?subject=[Flux CNAF]\",\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.card,\n          style: {\n            borderColor: 'red'\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n            children: \"Oups... Une erreur s'est produite.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"Essayez-vous d'ouvrir un fichier XML ?\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"Contactez-nous \\xE0 data.insertion@beta.gouv.fr\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 22\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.grid,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.card,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n            children: total\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 102,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"dossiers\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 103,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.card,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n            children: countWithEmail\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 107,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"dossiers avec email\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.card,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n            children: countWithUsableEmail\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 112,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"dossiers avec email et autorisation de l'utiliser\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 113,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"mailto:data.insertion@beta.gouv.fr?subject=[Flux CNAF]\",\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.card,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 117,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"Et si ces personnes pouvaient prendre leur 1er RDV d\\xE8s aujourd'hui\\xA0?\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 118,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.description,\n        children: [\"Un probl\\xE8me, une question ? Contactez-nous \\xE0 \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"mailto:data.insertion@beta.gouv.fr?subject=[Flux CNAF]\",\n          children: \"data.insertion@beta.gouv.fr\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 123,\n          columnNumber: 56\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.subtitle,\n        children: \"Testeur de fichier CNAF\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.description,\n        children: [\"Les op\\xE9rations sont toutes r\\xE9alis\\xE9es sur votre ordinateur.\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 132,\n          columnNumber: 69\n        }, this), \"Aucune donn\\xE9e n'est transf\\xE9r\\xE9e.\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 131,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.footer,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n        target: \"_blank\",\n        rel: \"noopener noreferrer\",\n        children: \"Propuls\\xE9 par data.insertion\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 140,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 72,\n    columnNumber: 5\n  }, this);\n}\n\n_s2(Home, \"JgQvDAH9NpckhiGQNSgi4L6vEXM=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiZGVmYXVsdENvbG9yIiwidXNlU3RhdGUiLCJjb2xvciIsInNldENvbG9yIiwiZmlsZSIsInNldEZpbGUiLCJ0b3RhbCIsInNldFRvdGFsIiwiY291bnRXaXRoRW1haWwiLCJzZXRDb3VudFdpdGhFbWFpbCIsImNvdW50V2l0aFVzYWJsZUVtYWlsIiwic2V0Q291bnRXaXRoVXNhYmxlRW1haWwiLCJoYXNFcnJvciIsInNldEhhc0Vycm9yIiwidXNlRWZmZWN0IiwiaXRlbXMiLCJBcnJheSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibGVuZ3RoIiwid2l0aEVtYWlsIiwiZmlsdGVyIiwiaSIsIndpdGhVc2FibGVFbWFpbCIsIm9rIiwiaW5uZXJIVE1MIiwiZHJhZ0hhbmRsZXIiLCJ1c2VDYWxsYmFjayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkcm9wSGFuZGxlciIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJkb20iLCJwYXJzZUZyb21TdHJpbmciLCJ0YXJnZXQiLCJyZXN1bHQiLCJhY3RpdmVFbGVtZW50Iiwibm9kZU5hbWUiLCJyZWFkQXNUZXh0IiwiZGF0YVRyYW5zZmVyIiwiZmlsZXMiLCJzZWxlY3RIYW5kbGVyIiwic3R5bGVzIiwiY29udGFpbmVyIiwiYmFja2dyb3VuZENvbG9yIiwibWFpbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJncmlkIiwiY2FyZCIsImJvcmRlckNvbG9yIiwic3VidGl0bGUiLCJmb290ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQzdCLE1BQU1DLFlBQVksR0FBRyxPQUFyQjs7QUFENkIsa0JBRUhDLHNEQUFRLENBQUNELFlBQUQsQ0FGTDtBQUFBLE1B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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBbUVFO0FBQVEsZUFBUyxFQUFFTCw4REFBTSxDQUFDVSxNQUExQjtBQUFBLDZCQUNFO0FBQ0UsWUFBSSxFQUFDLHdHQURQO0FBRUUsY0FBTSxFQUFDLFFBRlQ7QUFHRSxXQUFHLEVBQUMscUJBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBK0VEOztJQWpKdUJ4RCxJOztLQUFBQSxJIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgZGVmYXVsdENvbG9yID0gJ3doaXRlJ1xuICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKGRlZmF1bHRDb2xvcilcbiAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZSgnPycpXG4gIGNvbnN0IFtjb3VudFdpdGhFbWFpbCwgc2V0Q291bnRXaXRoRW1haWxdID0gdXNlU3RhdGUoJz8nKVxuICBjb25zdCBbY291bnRXaXRoVXNhYmxlRW1haWwsIHNldENvdW50V2l0aFVzYWJsZUVtYWlsXSA9IHVzZVN0YXRlKCc/JylcbiAgY29uc3QgW2hhc0Vycm9yLCBzZXRIYXNFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZmlsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IGl0ZW1zID0gbmV3IEFycmF5KC4uLmZpbGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0luZm9EZW1hbmRlUlNBJykpXG4gICAgc2V0VG90YWwoaXRlbXMubGVuZ3RoKVxuXG4gICAgY29uc3Qgd2l0aEVtYWlsID0gaXRlbXMuZmlsdGVyKGkgPT4gaS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnQURSRUxFQycpLmxlbmd0aClcbiAgICBzZXRDb3VudFdpdGhFbWFpbCh3aXRoRW1haWwubGVuZ3RoKVxuXG4gICAgY29uc3Qgd2l0aFVzYWJsZUVtYWlsID0gaXRlbXMuZmlsdGVyKGkgPT4ge1xuICAgICAgY29uc3Qgb2sgPSBpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdBVVRPUlVUSUFEUkVMRUMnKVswXVxuICAgICAgcmV0dXJuIGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0FEUkVMRUMnKS5sZW5ndGggJiYgb2sgJiYgb2suaW5uZXJIVE1MID09IFwiQVwiXG4gICAgfSlcbiAgICBzZXRDb3VudFdpdGhVc2FibGVFbWFpbCh3aXRoVXNhYmxlRW1haWwubGVuZ3RoKVxuICB9LCBbZmlsZV0pXG5cblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGZldGNoKCcvdGVzdC54bWwnKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgLy8gICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgLy8gICAgIHJlc3BvbnNlLnRleHQoKS50aGVuKHRleHQgPT4ge1xuICAvLyAgICAgICBjb25zdCBkb20gPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHRleHQsIFwiYXBwbGljYXRpb24veG1sXCIpO1xuICAvLyAgICAgICBzZXRGaWxlKGRvbSlcbiAgLy8gICAgIH0pXG4gIC8vICAgfSlcbiAgLy8gfSwgW10pXG5cbiAgY29uc3QgZHJhZ0hhbmRsZXIgPSBjb2xvciA9PiB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcbiAgICBzZXRDb2xvcihjb2xvcilcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBQcmV2ZW50IGZpbGUgZnJvbSBiZWluZyBvcGVuIG9uIGRyb3BcbiAgfSlcblxuICBjb25zdCBkcm9wSGFuZGxlciA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBzZXRDb2xvcihkZWZhdWx0Q29sb3IpXG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAgIGNvbnN0IGRvbSA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoZXZlbnQudGFyZ2V0LnJlc3VsdCwgXCJhcHBsaWNhdGlvbi94bWxcIik7XG4gICAgICBzZXRGaWxlKGRvbSlcbiAgICAgIHNldEhhc0Vycm9yKGRvbS5hY3RpdmVFbGVtZW50Lm5vZGVOYW1lID09IFwicGFyc2VyZXJyb3JcIilcbiAgICB9XG4gICAgcmVhZGVyLnJlYWRBc1RleHQoZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzWzBdKVxuICB9KVxuXG4gIGNvbnN0IHNlbGVjdEhhbmRsZXIgPSB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgICAgY29uc3QgZG9tID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhldmVudC50YXJnZXQucmVzdWx0LCBcImFwcGxpY2F0aW9uL3htbFwiKTtcbiAgICAgIHNldEZpbGUoZG9tKVxuICAgICAgc2V0SGFzRXJyb3IoZG9tLmFjdGl2ZUVsZW1lbnQubm9kZU5hbWUgPT0gXCJwYXJzZXJlcnJvclwiKVxuICAgIH1cbiAgICByZWFkZXIucmVhZEFzVGV4dChldmVudC50YXJnZXQuZmlsZXNbMF0pXG4gIH0pXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOmNvbG9yfX0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlRlc3RldXIgZGUgZmljaGllciBDTkFGPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufSBvbkRyYWdPdmVyPXtkcmFnSGFuZGxlcignIzAwNzBmMycpfSBvbkRyYWdMZWF2ZT17ZHJhZ0hhbmRsZXIoZGVmYXVsdENvbG9yKX0gb25Ecm9wPXtkcm9wSGFuZGxlcn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgVGVzdGV1ciBkZSBmaWNoaWVyIENOQUZcbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgR2xpc3NleiBldCBkw6lwb3NleiBsZSBmaWNoaWVyIENOQUYgw6AgYW5hbHlzZXIgb3Ugc8OpbGVjdGlvbm5leiBsZS48YnIvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtzZWxlY3RIYW5kbGVyfS8+XG4gICAgICAgIDwvcD5cblxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgTGVzIG9ww6lyYXRpb25zIHNvbnQgdG91dGVzIHLDqWFsaXPDqWVzIHN1ciB2b3RyZSBvcmRpbmF0ZXVyLjxici8+QXVjdW5lIGRvbm7DqWUgbidlc3QgdHJhbnNmw6lyw6llLlxuICAgICAgICA8L3A+XG5cbiAgICAgICAge2hhc0Vycm9yICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XG4gICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpkYXRhLmluc2VydGlvbkBiZXRhLmdvdXYuZnI/c3ViamVjdD1bRmx1eCBDTkFGXVwiIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9IHN0eWxlPXt7Ym9yZGVyQ29sb3I6ICdyZWQnfX0+XG4gICAgICAgICAgICA8aDM+T3Vwcy4uLiBVbmUgZXJyZXVyIHMnZXN0IHByb2R1aXRlLjwvaDM+XG4gICAgICAgICAgICA8cD5Fc3NheWV6LXZvdXMgZCdvdXZyaXIgdW4gZmljaGllciBYTUwgPzwvcD5cbiAgICAgICAgICAgIDxwPkNvbnRhY3Rlei1ub3VzIMOgIGRhdGEuaW5zZXJ0aW9uQGJldGEuZ291di5mcjwvcD5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2Pn1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgICA8aDM+e3RvdGFsfTwvaDM+XG4gICAgICAgICAgICA8cD5kb3NzaWVyczwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgICA8aDM+e2NvdW50V2l0aEVtYWlsfTwvaDM+XG4gICAgICAgICAgICA8cD5kb3NzaWVycyBhdmVjIGVtYWlsPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgICAgICAgIDxoMz57Y291bnRXaXRoVXNhYmxlRW1haWx9PC9oMz5cbiAgICAgICAgICAgIDxwPmRvc3NpZXJzIGF2ZWMgZW1haWwgZXQgYXV0b3Jpc2F0aW9uIGRlIGwndXRpbGlzZXI8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOmRhdGEuaW5zZXJ0aW9uQGJldGEuZ291di5mcj9zdWJqZWN0PVtGbHV4IENOQUZdXCIgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgICA8aDM+PC9oMz5cbiAgICAgICAgICAgIDxwPkV0IHNpIGNlcyBwZXJzb25uZXMgcG91dmFpZW50IHByZW5kcmUgbGV1ciAxZXIgUkRWIGTDqHMgYXVqb3VyZCdodWkmbmJzcDs/PC9wPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgIFVuIHByb2Jsw6htZSwgdW5lIHF1ZXN0aW9uID8gQ29udGFjdGV6LW5vdXMgw6AgPGEgaHJlZj1cIm1haWx0bzpkYXRhLmluc2VydGlvbkBiZXRhLmdvdXYuZnI/c3ViamVjdD1bRmx1eCBDTkFGXVwiPmRhdGEuaW5zZXJ0aW9uQGJldGEuZ291di5mcjwvYT5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0aXRsZX0+XG4gICAgICAgICAgVGVzdGV1ciBkZSBmaWNoaWVyIENOQUZcbiAgICAgICAgPC9oMj5cblxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICBMZXMgb3DDqXJhdGlvbnMgc29udCB0b3V0ZXMgcsOpYWxpc8OpZXMgc3VyIHZvdHJlIG9yZGluYXRldXIuPGJyLz5BdWN1bmUgZG9ubsOpZSBuJ2VzdCB0cmFuc2bDqXLDqWUuXG4gICAgICAgIDwvcD5cblxuXG5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICBQcm9wdWxzw6kgcGFyIGRhdGEuaW5zZXJ0aW9uXG4gICAgICAgIDwvYT5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
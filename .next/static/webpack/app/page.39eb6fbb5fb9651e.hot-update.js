"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/lib/firebase.ts":
/*!*****************************!*\
  !*** ./src/lib/firebase.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: function() { return /* binding */ auth; },\n/* harmony export */   db: function() { return /* binding */ db; }\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"(app-pages-browser)/./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dotenv */ \"(app-pages-browser)/./node_modules/dotenv/lib/main.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_3__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\n\n\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_3___default().config();\nconsole.log(\"API Key:\", process.env.FIREBASE_API_KEY);\nconst firebaseConfig = {\n    apiKey: process.env.FIREBASE_API_KEY,\n    authDomain: \"ap-students-32bbe.firebaseapp.com\",\n    projectId: \"ap-students-32bbe\",\n    storageBucket: \"ap-students-32bbe.appspot.com\",\n    messagingSenderId: \"938772062823\",\n    appId: \"1:938772062823:web:32f0b7460df2193e146ac2\",\n    measurementId: \"G-MLXZEHB999\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvZmlyZWJhc2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNkM7QUFDTDtBQUNVO0FBQ3RCO0FBRTVCRyxvREFBYTtBQUViRSxRQUFRQyxHQUFHLENBQUMsWUFBWUMsT0FBT0EsQ0FBQ0MsR0FBRyxDQUFDQyxnQkFBZ0I7QUFHcEQsTUFBTUMsaUJBQWlCO0lBQ3JCQyxRQUFRSixPQUFPQSxDQUFDQyxHQUFHLENBQUNDLGdCQUFnQjtJQUNwQ0csWUFBWTtJQUNaQyxXQUFXO0lBQ1hDLGVBQWU7SUFDZkMsbUJBQW1CO0lBQ25CQyxPQUFPO0lBQ1BDLGVBQWU7QUFDakI7QUFFQSxNQUFNQyxNQUFNbEIsMkRBQWFBLENBQUNVO0FBQzFCLE1BQU1TLEtBQUtqQixnRUFBWUEsQ0FBQ2dCO0FBQ3hCLE1BQU1FLE9BQU9uQixzREFBT0EsQ0FBQ2lCO0FBRUQ7QUFDcEIsK0RBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpYi9maXJlYmFzZS50cz8xNTQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCBkb3RlbnYgZnJvbSBcImRvdGVudlwiO1xuXG5kb3RlbnYuY29uZmlnKCk7XG5cbmNvbnNvbGUubG9nKCdBUEkgS2V5OicsIHByb2Nlc3MuZW52LkZJUkVCQVNFX0FQSV9LRVkpO1xuXG5cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FQSV9LRVksXG4gIGF1dGhEb21haW46IFwiYXAtc3R1ZGVudHMtMzJiYmUuZmlyZWJhc2VhcHAuY29tXCIsXG4gIHByb2plY3RJZDogXCJhcC1zdHVkZW50cy0zMmJiZVwiLFxuICBzdG9yYWdlQnVja2V0OiBcImFwLXN0dWRlbnRzLTMyYmJlLmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjkzODc3MjA2MjgyM1wiLFxuICBhcHBJZDogXCIxOjkzODc3MjA2MjgyMzp3ZWI6MzJmMGI3NDYwZGYyMTkzZTE0NmFjMlwiLFxuICBtZWFzdXJlbWVudElkOiBcIkctTUxYWkVIQjk5OVwiXG59O1xuXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbmNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XG5jb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xuXG5leHBvcnQgeyBkYiwgYXV0aCB9O1xuZXhwb3J0IGRlZmF1bHQgYXBwO1xuIl0sIm5hbWVzIjpbImluaXRpYWxpemVBcHAiLCJnZXRBdXRoIiwiZ2V0RmlyZXN0b3JlIiwiZG90ZW52IiwiY29uZmlnIiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJlbnYiLCJGSVJFQkFTRV9BUElfS0VZIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYXBwIiwiZGIiLCJhdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/firebase.ts\n"));

/***/ })

});
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/getUser/handler.ts":
/*!******************************************!*\
  !*** ./src/functions/getUser/handler.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"main\": () => (/* binding */ main)\n/* harmony export */ });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @libs/apiGateway */ \"./src/libs/apiGateway.ts\");\n/* harmony import */ var _libs_lambda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @libs/lambda */ \"./src/libs/lambda.ts\");\n/* harmony import */ var _libs_mainDynamodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @libs/mainDynamodb */ \"./src/libs/mainDynamodb.ts\");\n\r\n\r\n\r\n\r\nconst getUser = async (event) => {\r\n    const userId = event.pathParameters.id;\r\n    const user = await _libs_mainDynamodb__WEBPACK_IMPORTED_MODULE_3__.UserDynamodb.GetUser(userId);\r\n    if (user) {\r\n        console.log(user);\r\n        return (0,_libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__.formatResponse)({\r\n            status: 200,\r\n            message: `Hello ${user.username}, welcome to the exciting Serverless world!`,\r\n            event,\r\n        });\r\n    }\r\n    else {\r\n        return (0,_libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__.formatResponse)({\r\n            status: 404,\r\n            message: `User: ${userId}, not found!`,\r\n            event,\r\n        });\r\n    }\r\n};\r\nconst main = (0,_libs_lambda__WEBPACK_IMPORTED_MODULE_2__.middyfy)(getUser);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2dldFVzZXIvaGFuZGxlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFHQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXJ2ZXJsZXNzLy4vc3JjL2Z1bmN0aW9ucy9nZXRVc2VyL2hhbmRsZXIudHM/ZDk2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XHJcbmltcG9ydCB0eXBlIHsgVmFsaWRhdGVkRXZlbnRBUElHYXRld2F5UHJveHlFdmVudCB9IGZyb20gJ0BsaWJzL2FwaUdhdGV3YXknO1xyXG5pbXBvcnQgeyBmb3JtYXRSZXNwb25zZSB9IGZyb20gJ0BsaWJzL2FwaUdhdGV3YXknO1xyXG5pbXBvcnQgeyBtaWRkeWZ5IH0gZnJvbSAnQGxpYnMvbGFtYmRhJztcclxuaW1wb3J0IHNjaGVtYSBmcm9tICcuL3NjaGVtYSc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICdAZnVuY3Rpb25zL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBVc2VyRHluYW1vZGIgfSBmcm9tICdAbGlicy9tYWluRHluYW1vZGInO1xyXG5cclxuLyoqXHJcbiAqIEdldHMgYSB1c2VyLlxyXG4gKiBAcGFyYW0geyBWYWxpZGF0ZWRBUElHYXRld2F5UHJveHlFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRvIGJlIHByb2Nlc3NlZC5cclxuICogQHJldHVybnMgW3tSZXNwb25zZX1dIGEgZm9ybWF0dGVkIHJlc3BvbnNlIG9mIHN1Y2Nlc3MgLyBmYWlsdXJlLlxyXG4gKi9cclxuY29uc3QgZ2V0VXNlcjogVmFsaWRhdGVkRXZlbnRBUElHYXRld2F5UHJveHlFdmVudDx0eXBlb2Ygc2NoZW1hPiA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gIGNvbnN0IHVzZXJJZDogc3RyaW5nID0gZXZlbnQucGF0aFBhcmFtZXRlcnMuaWQ7XHJcbiAgY29uc3QgdXNlcjpVc2VyID0gYXdhaXQgVXNlckR5bmFtb2RiLkdldFVzZXIodXNlcklkKTtcclxuXHJcbiAgaWYgKHVzZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKHVzZXIpXHJcbiAgICByZXR1cm4gZm9ybWF0UmVzcG9uc2Uoe1xyXG4gICAgICBzdGF0dXM6IDIwMCxcclxuICAgICAgbWVzc2FnZTogYEhlbGxvICR7dXNlci51c2VybmFtZX0sIHdlbGNvbWUgdG8gdGhlIGV4Y2l0aW5nIFNlcnZlcmxlc3Mgd29ybGQhYCxcclxuICAgICAgZXZlbnQsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICByZXR1cm4gZm9ybWF0UmVzcG9uc2Uoe1xyXG4gICAgICBzdGF0dXM6IDQwNCxcclxuICAgICAgbWVzc2FnZTogYFVzZXI6ICR7dXNlcklkfSwgbm90IGZvdW5kIWAsXHJcbiAgICAgIGV2ZW50LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWFpbiA9IG1pZGR5ZnkoZ2V0VXNlcik7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/functions/getUser/handler.ts\n");

/***/ }),

/***/ "./src/libs/apiGateway.ts":
/*!********************************!*\
  !*** ./src/libs/apiGateway.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatResponse\": () => (/* binding */ formatResponse)\n/* harmony export */ });\nconst formatResponse = (response) => {\r\n    return {\r\n        statusCode: response.status,\r\n        body: JSON.stringify(response.message)\r\n    };\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9hcGlHYXRld2F5LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VydmVybGVzcy8uL3NyYy9saWJzL2FwaUdhdGV3YXkudHM/NjI1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFQSUdhdGV3YXlQcm94eUV2ZW50LCBBUElHYXRld2F5UHJveHlSZXN1bHQsIEhhbmRsZXIgfSBmcm9tIFwiYXdzLWxhbWJkYVwiXHJcbmltcG9ydCB0eXBlIHsgRnJvbVNjaGVtYSB9IGZyb20gXCJqc29uLXNjaGVtYS10by10c1wiO1xyXG5cclxudHlwZSBWYWxpZGF0ZWRBUElHYXRld2F5UHJveHlFdmVudDxTPiA9IE9taXQ8QVBJR2F0ZXdheVByb3h5RXZlbnQsICdib2R5Jz4gJiB7IGJvZHk6IEZyb21TY2hlbWE8Uz4gfVxyXG5leHBvcnQgdHlwZSBWYWxpZGF0ZWRFdmVudEFQSUdhdGV3YXlQcm94eUV2ZW50PFM+ID0gSGFuZGxlcjxWYWxpZGF0ZWRBUElHYXRld2F5UHJveHlFdmVudDxTPiwgQVBJR2F0ZXdheVByb3h5UmVzdWx0PlxyXG5cclxuaW50ZXJmYWNlIFJlc3BvbnNlICB7XHJcbiAgc3RhdHVzQ29kZTogbnVtYmVyLFxyXG4gIGJvZHk6IHN0cmluZ1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUmF3UmVzcG9uc2Uge1xyXG4gIHN0YXR1czogbnVtYmVyLFxyXG4gIG1lc3NhZ2U6IHN0cmluZyxcclxuICBldmVudFxyXG59XHJcblxyXG4vKipcclxuICogRm9ybWF0cyBhIHJlc3BvbnNlIHRvIGJlIHJldHVybmVkLlxyXG4gKiBAcGFyYW0ge1Jhd1Jlc3BvbnNlfSByZXNwb25zZSBUaGUgcmVzcG9uc2UgdG8gYmUgZm9ybWF0dGVkLlxyXG4gKiBAcmV0dXJucyB7UmVzcG9uc2V9IEEgZm9ybWF0dGVkIHJlc3BvbnNlLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGZvcm1hdFJlc3BvbnNlID0gKHJlc3BvbnNlOiBSYXdSZXNwb25zZSk6IFJlc3BvbnNlICA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHN0YXR1c0NvZGU6IHJlc3BvbnNlLnN0YXR1cyxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLm1lc3NhZ2UpXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/libs/apiGateway.ts\n");

/***/ }),

/***/ "./src/libs/lambda.ts":
/*!****************************!*\
  !*** ./src/libs/lambda.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middyfy\": () => (/* binding */ middyfy)\n/* harmony export */ });\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @middy/core */ \"@middy/core\");\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_middy_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @middy/http-json-body-parser */ \"@middy/http-json-body-parser\");\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\nconst middyfy = (handler) => {\r\n    return _middy_core__WEBPACK_IMPORTED_MODULE_0___default()(handler).use(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default()());\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9sYW1iZGEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VydmVybGVzcy8uL3NyYy9saWJzL2xhbWJkYS50cz82YjI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtaWRkeSBmcm9tIFwiQG1pZGR5L2NvcmVcIlxyXG5pbXBvcnQgbWlkZHlKc29uQm9keVBhcnNlciBmcm9tIFwiQG1pZGR5L2h0dHAtanNvbi1ib2R5LXBhcnNlclwiXHJcbmltcG9ydCB7Q29udGV4dH0gZnJvbSBcImF3cy1sYW1iZGFcIjtcclxuaW1wb3J0IE1pZGR5ID0gbWlkZHkuTWlkZHk7XHJcbmltcG9ydCB7VmFsaWRhdGVkRXZlbnRBUElHYXRld2F5UHJveHlFdmVudH0gZnJvbSBcIkBsaWJzL2FwaUdhdGV3YXlcIjtcclxuaW1wb3J0IHNjaGVtYSBmcm9tIFwiQGZ1bmN0aW9ucy9nZXRVc2VyL3NjaGVtYVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1pZGR5ZnkgPSAoaGFuZGxlcjpWYWxpZGF0ZWRFdmVudEFQSUdhdGV3YXlQcm94eUV2ZW50PHR5cGVvZiBzY2hlbWE+KTpNaWRkeTx1bmtub3duLCB1bmtub3duLCBDb250ZXh0PiAgPT4ge1xyXG4gIHJldHVybiBtaWRkeShoYW5kbGVyKS51c2UobWlkZHlKc29uQm9keVBhcnNlcigpKVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/libs/lambda.ts\n");

/***/ }),

/***/ "./src/libs/mainDynamodb.ts":
/*!**********************************!*\
  !*** ./src/libs/mainDynamodb.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserDynamodb\": () => (/* binding */ UserDynamodb)\n/* harmony export */ });\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\r\nconsole.log(`Env local: ${process.env.IS_LOCAL}`);\r\nconst DbClient = new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient({\r\n    region: process.env.IS_LOCAL ? 'localhost' : 'eu-west-1',\r\n    endpoint: process.env.IS_LOCAL ? 'http://localhost:10000' : '',\r\n    accessKeyId: process.env.IS_LOCAL ? 'DEFAULT_ACCESS_KEY' : '',\r\n    secretAccessKey: process.env.IS_LOCAL ? 'DEFAULT_SECRET' : ''\r\n});\r\nclass UserDynamodb {\r\n}\r\nUserDynamodb.AddUser = (user) => {\r\n    return new Promise((resolve, reject) => {\r\n        console.log(user);\r\n        const params = {\r\n            TableName: 'users',\r\n            Item: user\r\n        };\r\n        DbClient.put(params, (err, res) => {\r\n            if (err) {\r\n                console.log(err);\r\n                reject(`Failed to add user: ${user.id}`);\r\n            }\r\n            console.log(res);\r\n            resolve('success');\r\n        });\r\n    });\r\n};\r\nUserDynamodb.GetUser = (id) => new Promise((resolve, reject) => {\r\n    const params = {\r\n        TableName: 'users',\r\n        Key: {\r\n            id,\r\n        }\r\n    };\r\n    DbClient.get(params, (err, res) => {\r\n        if (err) {\r\n            console.log(err);\r\n            reject(err);\r\n        }\r\n        const user = res.Item;\r\n        resolve(user);\r\n    });\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9tYWluRHluYW1vZGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlcnZlcmxlc3MvLi9zcmMvbGlicy9tYWluRHluYW1vZGIudHM/NDdjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEeW5hbW9EQiB9ICBmcm9tICdhd3Mtc2RrJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJ0BmdW5jdGlvbnMvaW50ZXJmYWNlcyc7XHJcblxyXG5jb25zb2xlLmxvZyhgRW52IGxvY2FsOiAke3Byb2Nlc3MuZW52LklTX0xPQ0FMfWApXHJcblxyXG5jb25zdCBEYkNsaWVudCAgPSBuZXcgRHluYW1vREIuRG9jdW1lbnRDbGllbnQoe1xyXG4gICAgcmVnaW9uOiBwcm9jZXNzLmVudi5JU19MT0NBTD8gJ2xvY2FsaG9zdCcgOiAnZXUtd2VzdC0xJyxcclxuICAgIGVuZHBvaW50OiBwcm9jZXNzLmVudi5JU19MT0NBTD8gJ2h0dHA6Ly9sb2NhbGhvc3Q6MTAwMDAnIDogJycsXHJcbiAgICAvLyBuZWVkZWQgaWYgeW91IGRvbid0IGhhdmUgYXdzIGNyZWRlbnRpYWxzIGF0IGFsbCBpbiBlbnZcclxuICAgIGFjY2Vzc0tleUlkOiBwcm9jZXNzLmVudi5JU19MT0NBTD8gJ0RFRkFVTFRfQUNDRVNTX0tFWScgOiAnJyxcclxuICAgIC8vIG5lZWRlZCBpZiB5b3UgZG9uJ3QgaGF2ZSBhd3MgY3JlZGVudGlhbHMgYXQgYWxsIGluIGVudlxyXG4gICAgc2VjcmV0QWNjZXNzS2V5OiBwcm9jZXNzLmVudi5JU19MT0NBTD8gJ0RFRkFVTFRfU0VDUkVUJyA6ICcnXHJcbn0pXHJcblxyXG4vL2NvbnNvbGUubG9nKERiQ2xpZW50KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyRHluYW1vZGIge1xyXG5cclxuICAgIHN0YXRpYyBBZGRVc2VyID0gKHVzZXI6VXNlcik6UHJvbWlzZTxzdHJpbmc+ID0+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIpXHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIFRhYmxlTmFtZTogJ3VzZXJzJyxcclxuICAgICAgICAgICAgICAgIEl0ZW06IHVzZXJcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIERiQ2xpZW50LnB1dChwYXJhbXMsIChlcnIsIHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGBGYWlsZWQgdG8gYWRkIHVzZXI6ICR7dXNlci5pZH1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCdzdWNjZXNzJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBHZXRVc2VyID0gKGlkOiBzdHJpbmcpOiBQcm9taXNlPFVzZXI+ID0+IG5ldyBQcm9taXNlPFVzZXI+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIFRhYmxlTmFtZTogJ3VzZXJzJyxcclxuICAgICAgICAgICAgS2V5OiB7XHJcbiAgICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBEYkNsaWVudC5nZXQocGFyYW1zLCAoZXJyLCByZXMpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgY29uc3QgdXNlcjpVc2VyID0gPFVzZXI+cmVzLkl0ZW07XHJcbiAgICAgICAgICAgIHJlc29sdmUodXNlcilcclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/libs/mainDynamodb.ts\n");

/***/ }),

/***/ "@middy/core":
/*!******************************!*\
  !*** external "@middy/core" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@middy/core");

/***/ }),

/***/ "@middy/http-json-body-parser":
/*!***********************************************!*\
  !*** external "@middy/http-json-body-parser" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@middy/http-json-body-parser");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("source-map-support/register");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/getUser/handler.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
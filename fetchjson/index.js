"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'http://jsonplaceholder.typicode.com/todos';
axios_1["default"].get(url).then(function (res) { return console.log(res.data); });

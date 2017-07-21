'use strict';

var Curry                   = require("bs-platform/lib/js/curry.js");
var Js_json                 = require("bs-platform/lib/js/js_json.js");
var Bs_fetch                = require("../src/bs_fetch.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

function unwrapUnsafely(param) {
  if (param) {
    return param[0];
  } else {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "unwrapUnsafely called on None"
        ];
  }
}

var Option = /* module */[/* unwrapUnsafely */unwrapUnsafely];

fetch("/api/hellos/1").then((function (prim) {
          return prim.text();
        })).then((function (text) {
        return Promise.resolve((console.log(text), /* () */0));
      }));

fetch("/api/hello", Curry.app(Bs_fetch.RequestInit[/* make */0], [
              /* Some */[/* Post */2],
              /* None */0,
              /* None */0,
              /* None */0,
              /* None */0,
              /* None */0,
              /* None */0,
              /* None */0,
              /* None */0,
              /* None */0,
              /* None */0,
              /* () */0
            ])).then((function (prim) {
          return prim.text();
        })).then((function (text) {
        return Promise.resolve((console.log(text), /* () */0));
      }));

fetch("/api/fruit").then((function (prim) {
              return prim.json();
            })).then((function (json) {
            return Promise.resolve(Js_json.decodeArray(json));
          })).then((function (opt) {
          return Promise.resolve(unwrapUnsafely(opt));
        })).then((function (items) {
        return Promise.resolve(items.map((function (item) {
                          return unwrapUnsafely(Js_json.decodeString(item));
                        })));
      }));

exports.Option = Option;
/*  Not a pure module */
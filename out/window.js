"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lit_html_1 = require("@rxdi/lit-html");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const router_slot_1 = require("router-slot");
window["html"] = lit_html_1.html;
window["async"] = lit_html_1.async;
window["render"] = lit_html_1.render;
window["Component"] = function (options) {
    return function (cls) {
        Object.defineProperty(cls.prototype, "params", {
            get: function myProperty() {
                return router_slot_1.queryParentRouterSlot(this).match.params;
            }
        });
        lit_html_1.Component(options)(cls);
        return cls;
    };
};
window["query"] = lit_html_1.query;
window["queryParentRouterSlot"] = router_slot_1.queryParentRouterSlot;
window["queryAll"] = lit_html_1.queryAll;
window["LitElement"] = lit_html_1.LitElement;
window["css"] = lit_html_1.css;
window["of"] = rxjs_1.of;
window["from"] = rxjs_1.from;
window["fromEvent"] = rxjs_1.fromEvent;
window["Observable"] = rxjs_1.Observable;
window["BehaviorSubject"] = rxjs_1.BehaviorSubject;
window["Subject"] = rxjs_1.Subject;
window["ReplaySubject"] = rxjs_1.ReplaySubject;
// Operators
window["tap"] = operators_1.tap;
window["map"] = operators_1.map;
window["switchMap"] = operators_1.switchMap;
window["concatAll"] = operators_1.concatAll;
window["startWith"] = operators_1.startWith;
window["concatMap"] = operators_1.concatMap;
window["concat"] = operators_1.concat;
window["switchMapTo"] = operators_1.switchMapTo;
window["combineLatest"] = operators_1.combineLatest;
window["combineAll"] = operators_1.combineAll;
window["debounce"] = operators_1.debounce;
window["debounceTime"] = operators_1.debounceTime;
window["zip"] = operators_1.zip;
window["zipAll"] = operators_1.zipAll;
//# sourceMappingURL=window.js.map
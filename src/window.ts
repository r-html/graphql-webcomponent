import {
  Component,
  LitElement,
  html,
  query,
  queryAll,
  css,
  async,
  render
} from "@rxdi/lit-html";
import {
  of,
  from,
  fromEvent,
  Observable,
  BehaviorSubject,
  Subject,
  ReplaySubject
} from "rxjs";

import {
  tap,
  map,
  startWith,
  switchMap,
  concatAll,
  concatMap,
  concat,
  switchMapTo,
  combineLatest,
  combineAll,
  debounce,
  debounceTime,
  zip,
  zipAll
} from "rxjs/operators";
import { queryParentRouterSlot } from "router-slot";

window["html"] = html;
window["async"] = async;
window["render"] = render;
window["Component"] = function(options) {
  return function(cls) {
    Object.defineProperty(cls.prototype, "params", {
      get: function myProperty() {
        return queryParentRouterSlot(this)!.match!.params;
      }
    });
    Component(options)(cls);
    return cls;
  };
};
window["query"] = query;
window["queryParentRouterSlot"] = queryParentRouterSlot;
window["queryAll"] = queryAll;
window["LitElement"] = LitElement;
window["css"] = css;
window["of"] = of;
window["from"] = from;
window["fromEvent"] = fromEvent;
window["Observable"] = Observable;
window["BehaviorSubject"] = BehaviorSubject;
window["Subject"] = Subject;
window["ReplaySubject"] = ReplaySubject;

// Operators
window["tap"] = tap;
window["map"] = map;
window["switchMap"] = switchMap;
window["concatAll"] = concatAll;
window["startWith"] = startWith;
window["concatMap"] = concatMap;
window["concat"] = concat;
window["switchMapTo"] = switchMapTo;
window["combineLatest"] = combineLatest;
window["combineAll"] = combineAll;
window["debounce"] = debounce;
window["debounceTime"] = debounceTime;
window["zip"] = zip;
window["zipAll"] = zipAll;

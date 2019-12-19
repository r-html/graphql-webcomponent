"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const lit_html_1 = require("@rxdi/lit-html");
const router_slot_1 = require("router-slot");
require("router-slot");
let RouterOutlet = class RouterOutlet extends lit_html_1.LitElement {
    constructor() {
        super(...arguments);
        this.routes = [];
    }
    OnUpdateFirst() {
        this.routerSlot.add(this.routes);
    }
};
__decorate([
    lit_html_1.property(),
    __metadata("design:type", Array)
], RouterOutlet.prototype, "routes", void 0);
__decorate([
    lit_html_1.query('router-slot'),
    __metadata("design:type", router_slot_1.RouterSlot)
], RouterOutlet.prototype, "routerSlot", void 0);
RouterOutlet = __decorate([
    lit_html_1.Component({
        selector: 'router-outlet',
        template() {
            return lit_html_1.html `
      <router-slot></router-slot>
    `;
        }
    })
], RouterOutlet);
exports.RouterOutlet = RouterOutlet;
//# sourceMappingURL=router-outlet.js.map
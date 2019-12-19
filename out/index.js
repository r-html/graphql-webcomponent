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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const lit_html_1 = require("@rxdi/lit-html");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
require("@rhtml/hooks");
require("@rhtml/components");
require("@rhtml/operators");
let GraphQLComponent = class GraphQLComponent extends lit_html_1.LitElement {
    constructor() {
        super(...arguments);
        this.uri = "https://countries.trevorblades.com/";
        this.pubsub = "wss://pubsub.youvolio.com/subscriptions";
        this.onRequest = () => __awaiter(this, void 0, void 0, function* () { return new Headers(); });
        this.error = e => lit_html_1.html `
      ${e}
    `;
        this.loading = () => lit_html_1.html ``;
        this.init = new rxjs_1.Subject();
    }
    ready() {
        this.init.next();
    }
};
__decorate([
    lit_html_1.property(),
    __metadata("design:type", String)
], GraphQLComponent.prototype, "uri", void 0);
__decorate([
    lit_html_1.property(),
    __metadata("design:type", String)
], GraphQLComponent.prototype, "pubsub", void 0);
__decorate([
    lit_html_1.property(),
    __metadata("design:type", Function)
], GraphQLComponent.prototype, "onRequest", void 0);
__decorate([
    lit_html_1.property(),
    __metadata("design:type", Function)
], GraphQLComponent.prototype, "error", void 0);
__decorate([
    lit_html_1.property(),
    __metadata("design:type", Function)
], GraphQLComponent.prototype, "loading", void 0);
GraphQLComponent = __decorate([
    lit_html_1.Component({
        selector: "setup-graphql",
        template() {
            return lit_html_1.html `
      <r-part>
        <r-state
          .value=${this.init.pipe(operators_1.switchMap(() => rxjs_1.from(Promise.resolve().then(() => __importStar(require("@rhtml/graphql/settings")))).pipe(operators_1.map(m => m.setConfig({
                config: {
                    uri: this.uri,
                    pubsub: this.pubsub,
                    onRequest: this.onRequest
                },
                defaults: {
                    error: this.error,
                    loading: this.loading
                }
            })), operators_1.switchMap(() => Promise.resolve().then(() => __importStar(require("@rhtml/graphql/index")))), operators_1.tap(() => this.remove()))))}
        >
        </r-state>
        <r-render></r-render>
      </r-part>
    `;
        }
    })
], GraphQLComponent);
exports.GraphQLComponent = GraphQLComponent;
__export(require("./route-outlet"));
//# sourceMappingURL=index.js.map
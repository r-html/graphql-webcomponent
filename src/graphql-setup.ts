import {
  Component,
  LitElement,
  html,
  property,
  TemplateResult
} from "@rxdi/lit-html";
import { from, Subject, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { tap, map, switchMap } from "rxjs/operators";

import "@rhtml/hooks";
import "@rhtml/components";
import "@rhtml/operators";

type OnRequestType = () => Promise<Headers>;
type OnErrorType = (e) => TemplateResult;
type OnLoadingType = () => TemplateResult;

@Component({
  selector: "setup-graphql",
  template(this: GraphQLComponent) {
    return html`
      <r-part>
        <r-state
          .value=${this.init.pipe(
            switchMap(() =>
              from(import("@rhtml/graphql/settings")).pipe(
                map(m =>
                  m.setConfig({
                    config: {
                      uri: this.uri,
                      pubsub: this.pubsub,
                      onRequest: this.onRequest
                    },
                    defaults: {
                      error: this.error,
                      loading: this.loading
                    }
                  })
                ),
                switchMap(() => import("@rhtml/graphql/index")),
                tap(() => this.remove()),
                catchError(e => {
                  return of(e);
                })
              )
            )
          )}
        >
        </r-state>
        <r-render></r-render>
      </r-part>
    `;
  }
})
export class GraphQLComponent extends LitElement {
  @property()
  uri: string = "https://countries.trevorblades.com/";

  @property()
  pubsub: string = "wss://pubsub.youvolio.com/subscriptions";

  @property()
  onRequest: OnRequestType = async () => new Headers();

  @property()
  error: OnErrorType = e =>
    html`
      ${e}
    `;

  @property()
  loading: OnLoadingType = () => html``;

  init: Subject<any> = new Subject();

  ready() {
    this.init.next();
  }
}

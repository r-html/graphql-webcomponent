import { property, html, Component, LitElement } from "@rxdi/lit-html";
import { IRoute, RouterSlot } from "router-slot";
import "router-slot";

@Component({
  selector: "router-outlet",
  template(this: RouterOutlet) {
    return html`
      <router-slot></router-slot>
    `;
  }
})
export class RouterOutlet extends LitElement {
  @property()
  public routes: IRoute[] = [];

  OnUpdateFirst() {
    const routerSlot = this.shadowRoot.querySelector(
      "router-slot"
    ) as RouterSlot;
    routerSlot.add(this.routes);
  }
}

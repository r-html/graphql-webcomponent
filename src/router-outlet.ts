import { property, html, Component, LitElement, query } from '@rxdi/lit-html';
import { IRoute, RouterSlot } from 'router-slot';

import 'router-slot';

@Component({
  selector: 'router-outlet',
  template(this: RouterOutlet) {
    return html`
      <router-slot></router-slot>
    `;
  }
})
export class RouterOutlet extends LitElement {
  @property({ type: Array })
  public routes: IRoute[] = [];

  @query('router-slot')
  private routerSlot: RouterSlot;

  OnUpdate() {
    this.routerSlot.add(this.routes);
  }
}

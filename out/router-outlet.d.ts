import { LitElement } from '@rxdi/lit-html';
import { IRoute } from 'router-slot';
import 'router-slot';
export declare class RouterOutlet extends LitElement {
    routes: IRoute[];
    private routerSlot;
    OnUpdate(): void;
}

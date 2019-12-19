import { RouterOutlet } from './router-outlet';

export * from "./graphql-setup";
export * from "./router-outlet";
export * from './window';


declare global {
  interface HTMLElementTagNameMap {
    'router-outlet': RouterOutlet;
  }
}

# Reactive Graphql Component

## Usage via NPM
```
npm i @rxdi/graphql-webcomponent
```

## Usage via CDN

```html
<script
  type="text/javascript"
  src="https://raw.githack.com/rxdi/graphql-webcomponent/master/dist/ui-kit/0.0.15.js"
></script>

<script>
  Component({
    selector: 'app-component',
    template: () => html`
      <r-part>
        <r-settings .value=${{ fetchPolicy: 'cache-first' }}></r-settings>
        <r-fetch .query=${`{ continents { name } }`}></r-fetch>
        <r-render
          .state=${({ data: { continents } }) => html`
            <r-for .of=${continents}>
              <r-let .item=${({ name }) => name}></r-let>
            </r-for>
          `}
        >
        </r-render>
      </r-part>
    `,
  })(class AppComponent extends LitElement {});
</script>

<app-component></app-component>

<setup-graphql
  uri="https://countries.trevorblades.com/"
  pubsub="wss://pubsub.youvolio.com/subscriptions"
></setup-graphql>

<script>
  const el = document.querySelector('setup-graphql');
  el.onRequest = async function () {
    return new Headers();
  };
  el.loading = () => {
    return 'Loading...';
  };
  el.error = (e) => {
    return e;
  };
  el.ready();
</script>

```

### Usage via NPM with `Typescript`
```typescript

import { Component, LitElement, html } from '@rxdi/lit-html';

import '@rxdi/graphql-webcomponent';

@Component({
  selector: 'app-component',
  template(this: AppComponent) {
    return html`
      <r-part>
        <r-settings .value=${{ fetchPolicy: 'cache-first' }}></r-settings>
        <r-fetch query="{ continents { name } }"></r-fetch>
        <r-render .state=${({ data: { continents } }) => html`
          <r-for .of=${continents}>
            <r-let .item=${({ name }) => name}></r-let>
          </r-for>
        `}>
        </r-render>
      </r-part>
    `;
  }
})
export class AppComponent extends LitElement {}
```

## Composing multiple `Partial application functional components` thanks to @zdrr
```ts
import { Component, LitElement, html } from "@rxdi/lit-html";

import "@rxdi/graphql-webcomponent";

// Partial application functional components

enum ListTypes {
  OL = "ol",
  UL = "ul"
}

const ListMonad = fn => value => html`
  <r-part>
    <r-state .value=${value}></r-state>
    <r-render .state=${fn}> </r-render>
  </r-part>
`;

const userListType = (type: ListTypes) => value =>
  type === ListTypes.OL
    ? html`
        <ol>
          ${value}
        </ol>
      `
    : html`
        <ul>
          ${value}
        </ul>
      `;

const usersList = (type: ListTypes) => state =>
  ListMonad(s =>
    userListType(type)(html`
      <r-for .of=${s.data.continents}>
        <r-let
          .item=${({ name }) =>
            html`
              <li>${name}</li>
            `}
        ></r-let>
      </r-for>
    `)
  )(state);

@Component({
  selector: "list-monad-component",
  template(this: ListMonadComponent) {
    return html`
      <r-part>
        <r-settings .value=${{ fetchPolicy: "cache-first" }}></r-settings>
        <r-fetch .query=${`{ continents { name } }`}></r-fetch>
        <r-render .state=${listMapComponents.get(this.type)}> </r-render>
      </r-part>
    `;
  }
})
export class ListMonadComponent extends LitElement {
  private listMapComponents = new Map<ListTypes, Function>([
    [ListTypes.OL, usersList(ListTypes.OL)],
    [ListTypes.UL, usersList(ListTypes.UL)]
  ]);

  @property() public type: ListTypes;
}
```


## Baremetal html

```html
<script
  type="text/javascript"
  src="https://raw.githack.com/rxdi/graphql-webcomponent/master/dist/index.js"
></script>
<!-- <script type="text/javascript" src="./index.js"></script> -->

<setup-graphql
  uri="https://countries.trevorblades.com/"
  pubsub="wss://pubsub.youvolio.com/subscriptions"
></setup-graphql>

<script>
  const el = document.querySelector("setup-graphql");
  el.onRequest = async function() {
    return new Headers();
  };
  el.loading = () => {
    return "Loading...";
  };
  el.error = e => {
    return e;
  };
  el.ready();
</script>

<script>
  const ListMonad = fn => value => html`
    <r-part>
      <r-state .value=${value}></r-state>
      <r-render .state=${fn}> </r-render>
    </r-part>
  `;

  const ListTypes = { OL: "ol", UL: "ul" };

  const listMapTypes = new Map([
    [
      ListTypes.OL,
      value => html`
        <ol>
          ${value}
        </ol>
      `
    ],
    [
      ListTypes.UL,
      value => html`
        <ul>
          ${value}
        </ul>
      `
    ]
  ]);

  const userListType = type => value => listMapTypes.get(type)(value);

  const usersList = type => fn => state =>
    ListMonad(state =>
      userListType(type)(html`
        <r-for .of=${state}>
          <r-let .item=${fn}></r-let>
        </r-for>
      `)
    )(state);

  const userOLList = usersList(ListTypes.OL);
  const userULList = usersList(ListTypes.UL);

  Component({
    selector: "list-monad-component",
    template() {
      return html`
        <r-part>
          <r-state .value=${this.state}></r-state>
          <r-render .state=${this.templates.get(this.type) || (() => html``)}>
          </r-render>
        </r-part>
      `;
    }
  })(
    class ListMonadComponent extends LitElement {
      static get properties() {
        return {
          templates: { type: Object },
          type: { type: Object },
          state: { type: Object },
          select: { type: Object }
        };
      }
      constructor() {
        super();
        this.listMapTemplates = new Map([
          [
            ListTypes.OL,
            userOLList(
              value =>
                html`
                  <li>${this.select(value)}</li>
                `
            )
          ],
          [
            ListTypes.UL,
            userULList(
              value =>
                html`
                  <li>${this.select(value)}</li>
                `
            )
          ]
        ]);
        this.state = {};
        this.templates = this.listMapTemplates;
        this.select = () => null;
      }
    }
  );

  Component({
    selector: "app-component",
    template() {
      return html`
        <r-part>
          <r-settings .value=${{ fetchPolicy: "cache-first" }}></r-settings>
          <r-fetch .query=${`{ continents { name } }`}></r-fetch>
          <r-render
            .state=${({ data: { continents } }) =>
              html`
                <list-monad-component
                  .templates=${this.listMapTemplates}
                  .state=${continents}
                  .select=${s => s.name}
                  .type=${this.type}
                ></list-monad-component>
              `}
          >
          </r-render>
        </r-part>
      `;
    }
  })(
    class AppComponent extends LitElement {
      constructor() {
        super();
        this.type = "ul";
        this.listMapTemplates = new Map([
          [
            ListTypes.OL,
            userOLList(
              ({ name }) =>
                html`
                  <li><b>${name}</b></li>
                `
            )
          ],
          [
            ListTypes.UL,
            userULList(
              ({ name }) =>
                html`
                  <li><i>${name}</i></li>
                `
            )
          ]
        ]);
      }
    }
  );
</script>

<app-component></app-component>
```

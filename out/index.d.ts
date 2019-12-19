import { LitElement, TemplateResult } from "@rxdi/lit-html";
import { Subject } from "rxjs";
import "@rhtml/hooks";
import "@rhtml/components";
import "@rhtml/operators";
declare type OnRequestType = () => Promise<Headers>;
declare type OnErrorType = (e: any) => TemplateResult;
declare type OnLoadingType = () => TemplateResult;
export declare class GraphQLComponent extends LitElement {
    uri: string;
    pubsub: string;
    onRequest: OnRequestType;
    error: OnErrorType;
    loading: OnLoadingType;
    init: Subject<any>;
    ready(): void;
}
export * from "./route-outlet";
export * from './window';

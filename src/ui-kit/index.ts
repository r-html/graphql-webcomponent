import '../index';
// export * from '@rxdi/ui-kit/accordion';
export * from '@rxdi/ui-kit/alert';
export * from '@rxdi/ui-kit/animation';
export * from '@rxdi/ui-kit/article';
export * from '@rxdi/ui-kit/badge';
export * from '@rxdi/ui-kit/button';
export * from '@rxdi/ui-kit/card';
export * from '@rxdi/ui-kit/close';
export * from '@rxdi/ui-kit/description-list';
export * from '@rxdi/ui-kit/divider';
export * from '@rxdi/ui-kit/dotnav';
export * from '@rxdi/ui-kit/dropdown';
export * from '@rxdi/ui-kit/grid';
export * from '@rxdi/ui-kit/image';
export * from '@rxdi/ui-kit/label';
export * from '@rxdi/ui-kit/loading';
export * from '@rxdi/ui-kit/loading-screen';
// export * from '@rxdi/ui-kit/markdown-reader';
export * from '@rxdi/ui-kit/modal';
export * from '@rxdi/ui-kit/modals';
export * from '@rxdi/ui-kit/nav';
export * from '@rxdi/ui-kit/progress';
export * from '@rxdi/ui-kit/spinner';
export * from '@rxdi/ui-kit/table';
export * from '@rxdi/ui-kit/tabs';
import { ReactiveUiModule } from '@rxdi/ui-kit';
import { Bootstrap } from '@rxdi/core';




window.addEventListener('load', () => Bootstrap(ReactiveUiModule.forRoot()).subscribe())

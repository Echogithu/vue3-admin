import { App } from 'vue';

declare global {
  interface AnyObject {
    [index: string]: any;
  }

  type VueApp = App<Element>;
}

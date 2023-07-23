export {};

declare global {
  interface Document {
    startViewTransition?: (func: () => void) => ViewTransition;
  }
}
class ViewTransition {
  finished: Promise<void>;
  ready: Promise<void>;
  updateCallbackDone: Promise<void>;
}

import { flushSync } from "react-dom";

export async function withViewTransition(
  func: () => void,
  opts?: { before?: () => void; after?: () => void }
) {
  if (document.startViewTransition) {
    if (opts?.before) {
      flushSync(opts.before);
    }
    const transition = document.startViewTransition(() => {
      flushSync(func);
    });
    await transition.finished;
    opts?.after?.();
  } else {
    func();
  }
}

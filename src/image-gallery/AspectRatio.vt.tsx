import React from "react";
import styles from "./AspectRatio.vt.module.css";
import { cn } from "../utils";

type Props = {
  aspectRatio: number;
  originalAspectRatio: number;
  parentClassName?: string;
  children: React.ReactNode;
};
export function AspectRatio({
  aspectRatio,
  children,
  originalAspectRatio,
  parentClassName,
}: Props) {
  const maxStyle =
    originalAspectRatio > 1
      ? {
          height: "100%",
        }
      : { width: "100%" };
  return (
    <div className={cn(styles.main, parentClassName)} style={{ aspectRatio }}>
      <div
        className={styles.abs}
        style={{ aspectRatio: originalAspectRatio, ...maxStyle }}
      >
        {children}
      </div>
    </div>
  );
}

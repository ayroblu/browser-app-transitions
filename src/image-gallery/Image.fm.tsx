import { motion } from "framer-motion";
import { cn } from "../utils";
import styles from "./Image.module.css";

export type Props = {
  imageSrc: string;
  aspectRatio?: number;
  customClassName?: string;
  customStyle?: React.CSSProperties;
};
export function Image({
  imageSrc,
  aspectRatio,
  customClassName,
  customStyle,
}: Props) {
  return (
    <motion.img
      src={imageSrc}
      className={cn(styles.image, customClassName)}
      style={{ aspectRatio, ...customStyle }}
    />
  );
}

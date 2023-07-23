import { cn } from "../utils";
import styles from "./Image.module.css";

export type Props = {
  imageSrc: string;
  aspectRatio?: number;
  customClassName?: string;
  customStyle?: React.CSSProperties;
} & React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;
export function Image({
  imageSrc,
  aspectRatio,
  customClassName,
  customStyle,
  ...props
}: Props) {
  return (
    <img
      src={imageSrc}
      className={cn(styles.image, customClassName)}
      style={{ aspectRatio, ...customStyle }}
      {...props}
    />
  );
}

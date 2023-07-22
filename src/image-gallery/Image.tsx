import styles from "./Image.module.css";

export type Props = {
  imageSrc: string;
  aspectRatio?: number;
} & React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;
export function Image({ imageSrc, aspectRatio, ...props }: Props) {
  return (
    <img
      src={imageSrc}
      className={styles.image}
      style={{ aspectRatio }}
      {...props}
    />
  );
}

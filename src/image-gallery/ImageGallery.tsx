import styles from "./ImageGallery.module.css";
import stylingPng from "../stories/assets/styling.png";
import { Image } from "./Image";
import React from "react";

export const ImageGallery = () => {
  const [selectedIndex, setSelectedIndex] = React.useState<null | number>(null);
  const dialogRef = React.useRef<HTMLDialogElement>(null);
  const images = React.useMemo(
    () =>
      Array(100)
        .fill(null)
        .map((_, i) => {
          return (
            <Image
              imageSrc={stylingPng}
              aspectRatio={1}
              onClick={() => setSelectedIndex(i)}
              key={i}
            />
          );
        }),
    []
  );
  React.useEffect(() => {
    if (selectedIndex === null) {
      if (dialogRef.current?.open) {
        dialogRef.current?.close();
      }
    } else {
      if (!dialogRef.current?.open) {
        dialogRef.current?.showModal();
      }
    }
  }, [selectedIndex]);
  const onClose = React.useCallback(() => {
    setSelectedIndex(null);
  }, []);
  return (
    <div>
      <div className={styles.galleryGrid}>{images}</div>
      <dialog ref={dialogRef} className={styles.modal} onClose={onClose}>
        <div className={styles.modalTop}>
          <button
            className={styles.closeButton}
            onClick={() => setSelectedIndex(null)}
          >
            Close
          </button>
        </div>
        <Image imageSrc={stylingPng} />
        <div className={styles.modalBottom}>
          <div className={styles.modalDescription}>
            <p>Opened {selectedIndex}</p>
          </div>
        </div>
      </dialog>
    </div>
  );
};

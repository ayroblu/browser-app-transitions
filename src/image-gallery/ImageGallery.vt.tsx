import styles from "./ImageGallery.module.css";
import vtStyles from "./ImageGallery.vt.module.css";
import stylingPng from "../stories/assets/styling.png";
import { Image } from "./Image";
import React from "react";
import { withViewTransition } from "./transition-helper";

export const ImageGallery = () => {
  const [selectedIndex, setSelectedIndex] = React.useState<null | number>(null);
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const images = React.useMemo(
    () =>
      Array(100)
        .fill(null)
        .map((_, i) => {
          return (
            <Image
              imageSrc={stylingPng}
              aspectRatio={1}
              onClick={() =>
                withViewTransition(() => setIsModalVisible(true), {
                  before: () => setSelectedIndex(i),
                })
              }
              customClassName={
                selectedIndex === i && !isModalVisible
                  ? vtStyles.imageTransition
                  : undefined
              }
              key={i}
            />
          );
        }),
    [isModalVisible, selectedIndex]
  );
  const onClose = React.useCallback(() => {
    withViewTransition(
      () => {
        setIsModalVisible(false);
      },
      { after: () => setSelectedIndex(null) }
    );
  }, []);
  return (
    <div>
      <div className={styles.galleryGrid}>{images}</div>
      {isModalVisible && (
        <div className={vtStyles.modal}>
          <div className={vtStyles.modalTop}>
            <button className={styles.closeButton} onClick={onClose}>
              Close
            </button>
          </div>
          <Image
            imageSrc={stylingPng}
            customClassName={
              selectedIndex !== null ? vtStyles.imageTransition : undefined
            }
          />
          <div className={vtStyles.modalBottom}>
            <div className={styles.modalDescription}>
              <p>Opened {selectedIndex}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

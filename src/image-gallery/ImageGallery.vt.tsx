import styles from "./ImageGallery.module.css";
import vtStyles from "./ImageGallery.vt.module.css";
import { Image } from "./Image";
import React from "react";
import { withViewTransition } from "./transition-helper";
import { AspectRatio } from "./AspectRatio.vt";
import { styling } from "./images";

export const ImageGallery = () => {
  const [selectedIndex, setSelectedIndex] = React.useState<null | number>(null);
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const images = React.useMemo(
    () =>
      Array(100)
        .fill(null)
        .map((_, i) => {
          return (
            <AspectRatio
              aspectRatio={1}
              originalAspectRatio={styling.width / styling.height}
              parentClassName={
                selectedIndex === i && !isModalVisible
                  ? vtStyles.imageTransition
                  : undefined
              }
            >
              <Image
                imageSrc={styling.path}
                onClick={() =>
                  withViewTransition(() => setIsModalVisible(true), {
                    before: () => setSelectedIndex(i),
                  })
                }
                // customClassName={
                //   selectedIndex === i && !isModalVisible
                //     ? vtStyles.imageTransition
                //     : undefined
                // }
                style={{ objectFit: "initial" }}
                key={i}
              />
            </AspectRatio>
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
          <AspectRatio
            aspectRatio={styling.width / styling.height}
            originalAspectRatio={styling.width / styling.height}
            parentClassName={
              selectedIndex !== null ? vtStyles.imageTransition : undefined
            }
          >
            <Image
              imageSrc={styling.path}
              // customClassName={
              //   selectedIndex !== null ? vtStyles.imageTransition : undefined
              // }
            />
          </AspectRatio>
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

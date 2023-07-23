import styles from "./ImageGallery.module.css";
import fmStyles from "./ImageGallery.fm.module.css";
import { Image } from "./Image";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { styling } from "./images";

export const ImageGallery = () => {
  const [selectedIndex, setSelectedIndex] = React.useState<null | number>(null);
  const onClose = React.useCallback(() => {
    setSelectedIndex(null);
  }, []);
  const windowWidth = window.innerWidth;
  return (
    <div>
      <div className={styles.galleryGrid}>
        {Array(100)
          .fill(null)
          .map((_, i) => {
            return (
              <motion.div
                layoutId={`image-${i}`}
                key={i}
                style={{ display: "flex" }}
                onClick={() => setSelectedIndex(i)}
              >
                <Image imageSrc={styling.path} aspectRatio={1} />
              </motion.div>
            );
          })}
      </div>
      <AnimatePresence>
        {selectedIndex !== null &&
          (() => {
            const divHeight = (windowWidth / styling.width) * styling.height;
            return (
              <motion.div
                animate={{ background: "rgba(0,0,0,0.5)" }}
                exit={{ background: "rgba(0,0,0,0)" }}
                className={fmStyles.modal}
                onClick={onClose}
              >
                <motion.div
                  style={{ background: "white", height: `${divHeight}px` }}
                  layoutId={`image-${selectedIndex}`}
                >
                  <Image imageSrc={styling.path} style={{ width: "100%" }} />
                </motion.div>
              </motion.div>
            );
          })()}
      </AnimatePresence>
    </div>
  );
};

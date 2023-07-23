import styles from "./ImageGallery.module.css";
import fmStyles from "./ImageGallery.fm.module.css";
import { Image } from "./Image";
import React from "react";
import { AnimatePresence, DragHandlers, motion } from "framer-motion";
import { styling } from "./images";

export const ImageGallery = () => {
  const [selectedIndex, setSelectedIndex] = React.useState<null | number>(null);
  const onClose = React.useCallback(() => {
    setSelectedIndex(null);
  }, []);
  const windowWidth = window.innerWidth;
  const [isDragging, setIsDragging] = React.useState(false);
  const onDragStart = () => setIsDragging(true);
  const onDragEnd: NonNullable<DragHandlers["onDragEnd"]> = (_, info) => {
    setIsDragging(false);
    const distance = Math.sqrt(
      Math.pow(info.offset.x, 2) + Math.pow(info.offset.y, 2)
    );
    if (distance > 50) {
      setSelectedIndex(null);
    }
  };
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
                transition={{ duration: 0.1 }}
                onClick={() => setSelectedIndex(i)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
              <div className={fmStyles.modal} onClick={onClose}>
                <motion.div
                  className={styles.modalTop}
                  initial={{ background: "rgba(0,0,0,0)" }}
                  animate={{ background: "rgba(0,0,0,0.5)" }}
                  exit={{ background: "rgba(0,0,0,0)" }}
                  transition={{ duration: 0.1 }}
                  style={{
                    transition: "opacity 0.2s",
                    ...(isDragging ? { opacity: 0 } : { opacity: 1 }),
                  }}
                >
                  <button
                    className={styles.closeButton}
                    onClick={() => setSelectedIndex(null)}
                  >
                    Close
                  </button>
                </motion.div>
                <motion.div
                  style={{ background: "white", height: `${divHeight}px` }}
                  transition={{ duration: 0.1 }}
                  layoutId={`image-${selectedIndex}`}
                  drag
                  dragSnapToOrigin
                  dragConstraints={{ left: 1, right: 1, top: 1, bottom: 1 }}
                  onDragStart={onDragStart}
                  onDragEnd={onDragEnd}
                >
                  <Image imageSrc={styling.path} style={{ width: "100%" }} />
                </motion.div>
                <motion.div
                  className={styles.modalBottom}
                  style={{
                    overflow: "hidden",
                    transition: "opacity 0.2s",
                    ...(isDragging ? { opacity: 0 } : { opacity: 1 }),
                  }}
                  initial={{ background: "rgba(0,0,0,0)" }}
                  animate={{ background: "rgba(0,0,0,0.5)" }}
                  exit={{ background: "rgba(0,0,0,0)" }}
                  transition={{ duration: 0.1 }}
                >
                  <motion.div
                    className={styles.modalDescription}
                    initial={{ opacity: 0, transform: "translateY(-100%)" }}
                    animate={{ opacity: 1, transform: "translateY(0)" }}
                    transition={{ delay: 0.1 }}
                  >
                    <p>Opened {selectedIndex}</p>
                  </motion.div>
                </motion.div>
              </div>
            );
          })()}
      </AnimatePresence>
    </div>
  );
};

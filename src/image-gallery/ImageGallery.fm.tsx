import styles from "./ImageGallery.module.css";
import fmStyles from "./ImageGallery.fm.module.css";
import stylingPng from "../stories/assets/styling.png";
import { Image } from "./Image.fm";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

// export const ImageGallery = () => {
//   const [selectedIndex, setSelectedIndex] = React.useState<null | number>(null);
//   const images = React.useMemo(
//     () =>
//       Array(100)
//         .fill(null)
//         .map((_, i) => {
//           return (
//             <motion.div
//               layoutId={`image-${i}`}
//               key={i}
//               onClick={() => setSelectedIndex(i)}
//             >
//               <Image imageSrc={stylingPng} aspectRatio={1} />
//             </motion.div>
//           );
//         }),
//     []
//   );
//   const onClose = React.useCallback(() => {
//     setSelectedIndex(null);
//   }, []);
//   return (
//     <div>
//       <div className={styles.galleryGrid}>{images}</div>
//       <AnimatePresence>
//         {selectedIndex !== null && (
//           <motion.div
//             className={fmStyles.modal}
//             onClick={onClose}
//             layoutId={`image-${selectedIndex}`}
//           >
//             <motion.div className={styles.modalTop}>
//               <button
//                 className={styles.closeButton}
//                 onClick={() => setSelectedIndex(null)}
//               >
//                 Close
//               </button>
//             </motion.div>
//             <motion.div className={fmStyles.image}>
//               <Image imageSrc={stylingPng} />
//             </motion.div>
//             <motion.div className={styles.modalBottom}>
//               <div className={styles.modalDescription}>
//                 <p>Opened {selectedIndex}</p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };
export const ImageGallery = () => {
  const [show, setShow] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState<null | number>(null);
  const images = React.useMemo(
    () =>
      Array(100)
        .fill(null)
        .map((_, i) => {
          return (
            <motion.div
              layoutId={`image-${i}`}
              key={i}
              onClick={() => setSelectedIndex(i)}
            >
              num-{i}
            </motion.div>
          );
        }),
    []
  );
  const onClose = React.useCallback(() => {
    setSelectedIndex(null);
  }, []);
  return (
    <div>
      <div className={styles.galleryGrid}>
        <motion.div layoutId={`image`} onClick={() => setShow(true)}>
          <Image imageSrc={stylingPng} aspectRatio={1} />
        </motion.div>
        <motion.div
          style={{ height: "77px", width: "77px" }}
          layoutId={`image-1`}
          onClick={() => setShow(true)}
        >
          <Image imageSrc={stylingPng} aspectRatio={1} />
        </motion.div>
        <motion.div layoutId={`image-2`} onClick={() => setShow(true)}>
          <Image imageSrc={stylingPng} aspectRatio={1} />
        </motion.div>
      </div>
      <AnimatePresence>
        {show && (
          <motion.div
            animate={{ background: "rgba(0,0,0,0.5)" }}
            exit={{ background: "rgba(0,0,0,0)" }}
            className={fmStyles.modal}
            onClick={() => setShow(false)}
          >
            <motion.div
              style={{ background: "white", height: "147px" }}
              layoutId={`image-1`}
            >
              <Image imageSrc={stylingPng} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

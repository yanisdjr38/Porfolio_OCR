export const sectionViewport = { once: true, amount: 0.1 };

export const createStaggerContainer = (
  staggerChildren = 0.12,
  delayChildren = 0.08,
) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const revealUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: index * 0.06,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const revealSide = {
  hidden: (direction = 1) => ({ opacity: 0, x: direction * 28 }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const hoverLift = {
  y: -8,
  scale: 1.015,
  transition: { type: "spring", stiffness: 280, damping: 18 },
};

export const tapPress = { scale: 0.985 };

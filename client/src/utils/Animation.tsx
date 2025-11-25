import { type Transition } from "framer-motion";

export const floatingAnimation1 = {
  x: [0, 30, 0],
  y: [0, -30, 0],
  scale: [1, 1.2, 1],
};

export const floatingAnimation2 = {
  x: [0, -40, 0],
  y: [0, 40, 0],
  scale: [1, 1.3, 1],
};

export const floatingTransition1: Transition = {
  duration: 8,
  repeat: Infinity,
  repeatType: "loop",
  ease: "easeInOut",
};

export const floatingTransition2: Transition = {
  duration: 10,
  repeat: Infinity,
  repeatType: "loop",
  ease: "easeInOut",
};

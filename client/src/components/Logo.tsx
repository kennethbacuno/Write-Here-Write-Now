import { motion } from "framer-motion";
import { Pen, Sparkles } from "lucide-react";

const Logo = () => {
  return (
    <motion.div
      className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-xl sm:h-24 sm:w-24 dark:bg-stone-700"
      initial={{ rotate: -10, scale: 0.8 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{
        rotate: [0, -5, 5, -5, 0],
        transition: { duration: 0.5 },
      }}
    >
      <Pen
        className="h-10 w-10 text-rose-500 sm:h-12 sm:w-12 dark:text-stone-300"
        strokeWidth={2}
      />
      <Sparkles className="absolute -top-1 -right-1 h-6 w-6 text-rose-400 dark:text-stone-400" />
    </motion.div>
  );
};

export default Logo;

import { motion, type HTMLMotionProps } from "framer-motion";
import { tv, type VariantProps } from "tailwind-variants";

const cardStyles = tv({
  base: "flex flex-col items-center text-center rounded-2xl p-4 space-y-3 transition-all duration-500 backdrop-blur-lg",
  variants: {
    active: {
      true: "scale-100 sm:scale-105 z-30 border-2 border-rose-500 bg-rose-200/80 shadow-xl dark:bg-stone-400/70",
      false: "scale-75 opacity-40 z-20 bg-rose-200/40 dark:bg-stone-400/40",
    },
  },
  defaultVariants: {
    active: false,
  },
});

type FeatureCardProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  isActive: boolean;
} & VariantProps<typeof cardStyles> &
  HTMLMotionProps<"div"> &
  React.HTMLAttributes<HTMLDivElement>;

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  isActive,
  className,
  ...props
}: FeatureCardProps) => {
  return (
    <motion.div
      {...props}
      className={cardStyles({ active: isActive, className })}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isActive ? 1 : 0.4, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      layout
    >
      <motion.div
        className="flex h-20 w-20 items-center justify-center rounded-full bg-white/50 shadow-md sm:h-28 sm:w-28 dark:bg-stone-700/50"
        animate={
          isActive ? { rotate: [0, -5, 5, -5, 0], scale: [1, 1.05, 1] } : {}
        }
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
      >
        <Icon className="h-10 w-10 text-rose-600 sm:h-14 sm:w-14 dark:text-stone-300" />
      </motion.div>

      <h3 className="text-lg font-bold text-stone-800 sm:text-xl dark:text-stone-100">
        {title}
      </h3>
      <p className="text-sm font-light text-stone-700 dark:text-stone-200">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;

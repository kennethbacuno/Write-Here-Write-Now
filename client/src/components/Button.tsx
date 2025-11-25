import { motion, type HTMLMotionProps } from "framer-motion";
import { tv, type VariantProps } from "tailwind-variants";

const buttonStyles = tv({
  base: "font-semibold rounded-full flex items-center gap-2 justify-center transition-all duration-300",
  variants: {
    variant: {
      primary:
        "bg-rose-500 text-white hover:bg-rose-600 dark:bg-stone-600 dark:hover:bg-stone-500",
      secondary:
        "text-rose-500 hover:text-rose-700 dark:text-stone-400 dark:hover:text-stone-300",
      icon: "p-2 border border-rose-300 bg-rose-500 text-white hover:bg-rose-600 dark:border-stone-400 dark:bg-stone-600",
      // NEW: outline variant
      outline:
        "border border-rose-300 bg-transparent text-rose-500 hover:bg-rose-50 dark:border-stone-400 dark:text-stone-200 dark:hover:bg-stone-700",
    },
    size: {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-2.5 text-base",
      lg: "px-8 py-3 text-lg",
      icon: "p-2",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles> &
  HTMLMotionProps<"button">;

const Button = ({
  variant,
  size,
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <motion.button
      {...props}
      className={buttonStyles({ variant, size, className })}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;

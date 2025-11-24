import { AnimatePresence, motion, type HTMLMotionProps } from "framer-motion";
import { tv, type VariantProps } from "tailwind-variants";
import { Eye, EyeOff, type LucideProps } from "lucide-react";

const inputStyles = tv({
  base: "w-full rounded-xl bg-white/50 text-stone-800 placeholder-stone-400 backdrop-blur-lg transition-all duration-300 focus:outline-none",
  variants: {
    error: {
      true: "ring-2 ring-red-400 dark:ring-red-500",
      false: "focus:ring-2 focus:ring-rose-400 dark:focus:ring-stone-500",
    },
    size: {
      sm: "px-10 py-2 text-sm",
      md: "px-12 py-3 text-base",
      lg: "px-14 py-4 text-lg",
    },
  },
  defaultVariants: {
    error: false,
    size: "md",
  },
});

type InputProps = {
  /** Icon component rendered inside the input (left) */
  icon: React.ComponentType<LucideProps>;
  /** Show a password toggle button on the right */
  showPasswordToggle?: boolean;
  /** Callback for toggling password visibility */
  onTogglePassword?: () => void;
  /** Error text (renders an animated error message when present) */
  errorMessage?: string;
} & VariantProps<typeof inputStyles> &
  HTMLMotionProps<"input">; // includes native input props + motion props

const Input = ({
  icon: Icon,
  type = "text",
  showPasswordToggle = false,
  onTogglePassword,
  errorMessage: error = "",
  size,
  className,
  ...props
}: InputProps) => {
  return (
    <div className="w-full">
      <div className="relative">
        {/* left icon */}
        <div className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-stone-400 dark:text-stone-500">
          <Icon size={20} />
        </div>

        {/* motion-enabled input — accepts motion props (initial/animate/whileHover/etc) */}
        <motion.input
          {...props}
          type={type}
          className={inputStyles({ error: Boolean(error), size, className })}
        />

        {/* password toggle (right) */}
        {showPasswordToggle && (
          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute top-1/2 right-4 -translate-y-1/2 text-stone-400 transition-colors hover:text-stone-600 dark:text-stone-500 dark:hover:text-stone-300"
          >
            {type === "password" ? <Eye size={20} /> : <EyeOff size={20} />}
          </button>
        )}
      </div>

      {/* animated error message */}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="mt-1 text-xs text-red-500 dark:text-red-400"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Input;

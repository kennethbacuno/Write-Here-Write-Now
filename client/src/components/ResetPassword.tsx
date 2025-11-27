import { AnimatePresence, motion, type HTMLMotionProps } from "framer-motion";
import { ArrowRight, CheckCircle2, Lock } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";
import Button from "./Button";
import { useNavigate, useParams } from "react-router";

type ResetPasswordPageProps = HTMLMotionProps<"div">;

const ResetPassword: React.FC<ResetPasswordPageProps> = ({
  ...motionProps
}) => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const { token } = useParams<{ token: string }>();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const passwordStrength = (password: string) => {
    if (password.length === 0) return { strength: 0, label: "", color: "" };
    if (password.length < 6)
      return { strength: 1, label: "Weak", color: "bg-red-500" };
    if (password.length < 10)
      return { strength: 2, label: "Medium", color: "bg-yellow-500" };
    return { strength: 3, label: "Strong", color: "bg-green-500" };
  };

  const strength = passwordStrength(formData.password);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // TODO: Replace with actual API call
      console.log("Password reset successful with token:", token);
      setIsSuccess(true);
      setTimeout(
        () => navigate("/authenticate/login", { replace: true }),
        2000,
      );
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        {...motionProps}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="w-full max-w-md"
      >
        <div className="flex flex-col items-center text-center">
          <motion.div
            className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-400" />
          </motion.div>

          <h1 className="mb-2 text-3xl font-bold text-stone-800 sm:text-4xl dark:text-stone-100">
            Password Reset!
          </h1>

          <p className="mb-8 text-sm text-stone-600 dark:text-stone-400">
            Your password has been successfully reset. Redirecting to login...
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      {...motionProps}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md"
    >
      <div className="flex flex-col items-center">
        <Logo />

        <motion.h1
          className="mb-2 text-3xl font-bold text-stone-800 sm:text-4xl dark:text-stone-100"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Reset Password
        </motion.h1>

        <motion.p
          className="mb-8 text-sm text-stone-600 dark:text-stone-400"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Please enter your new password
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="w-full space-y-5"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div>
            <div className="relative">
              <div className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-stone-400 dark:text-stone-500">
                <Lock className="h-5 w-5" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="New password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className={`w-full rounded-xl bg-white/50 px-12 py-3 text-base text-stone-800 placeholder-stone-400 backdrop-blur-lg transition-all duration-300 focus:outline-none ${
                  errors.password
                    ? "ring-2 ring-red-400 dark:ring-red-500"
                    : "focus:ring-2 focus:ring-rose-400 dark:focus:ring-stone-500"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-4 -translate-y-1/2 text-stone-400 transition-colors hover:text-stone-600 dark:text-stone-500 dark:hover:text-stone-300"
              >
                {showPassword ? (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>

            <AnimatePresence>
              {errors.password && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="mt-1 text-xs text-red-500 dark:text-red-400"
                >
                  {errors.password}
                </motion.p>
              )}
            </AnimatePresence>

            {formData.password && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-2 space-y-1"
              >
                <div className="flex gap-1">
                  {[1, 2, 3].map((level) => (
                    <div
                      key={level}
                      className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                        level <= strength.strength
                          ? strength.color
                          : "bg-stone-300 dark:bg-stone-600"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-400">
                  Password strength:{" "}
                  <span className="font-semibold">{strength.label}</span>
                </p>
              </motion.div>
            )}
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-stone-400 dark:text-stone-500">
              <Lock className="h-5 w-5" />
            </div>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm new password"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              className={`w-full rounded-xl bg-white/50 px-12 py-3 text-base text-stone-800 placeholder-stone-400 backdrop-blur-lg transition-all duration-300 focus:outline-none ${
                errors.confirmPassword
                  ? "ring-2 ring-red-400 dark:ring-red-500"
                  : "focus:ring-2 focus:ring-rose-400 dark:focus:ring-stone-500"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute top-1/2 right-4 -translate-y-1/2 text-stone-400 transition-colors hover:text-stone-600 dark:text-stone-500 dark:hover:text-stone-300"
            >
              {showConfirmPassword ? (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              )}
            </button>

            <AnimatePresence>
              {errors.confirmPassword && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="mt-1 text-xs text-red-500 dark:text-red-400"
                >
                  {errors.confirmPassword}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <Button variant="primary" size="lg" className="w-full" type="submit">
            Reset Password
            <ArrowRight className="h-5 w-5" />
          </Button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default ResetPassword;

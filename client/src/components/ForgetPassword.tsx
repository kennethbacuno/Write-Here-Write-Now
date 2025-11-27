import { motion, type HTMLMotionProps } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { useState } from "react";
import Button from "../components/Button";
import Logo from "../components/Logo";
import Input from "../components/Input";
import { useNavigate } from "react-router";

type ForgetPasswordProps = HTMLMotionProps<"div">;

const ForgetPassword: React.FC<ForgetPasswordProps> = ({ ...motionProps }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Email is required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Email is invalid");
      return;
    }

    // TODO: Replace with actual API call
    console.log("Password reset requested for:", email);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
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
            Check Your Email
          </h1>

          <p className="mb-8 text-sm text-stone-600 dark:text-stone-400">
            We've sent a password reset link to <strong>{email}</strong>. Please
            check your inbox and follow the instructions.
          </p>

          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate("/authenticate/login")}
            className="w-full"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Login
          </Button>
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
          Forgot Password?
        </motion.h1>

        <motion.p
          className="mb-8 text-sm text-stone-600 dark:text-stone-400"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          No worries! Enter your email and we'll send you reset instructions
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="w-full space-y-5"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Input
            icon={Mail}
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            errorMessage={error}
          />

          <Button variant="primary" size="lg" className="w-full" type="submit">
            Send Reset Link
            <ArrowRight className="h-5 w-5" />
          </Button>
        </motion.form>

        <motion.div
          className="mt-6 text-center text-sm text-stone-600 dark:text-stone-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button
            onClick={() => navigate("/authenticate/login")}
            className="flex items-center gap-2 font-semibold text-rose-500 transition-colors hover:text-rose-700 dark:text-stone-300 dark:hover:text-stone-100"
            type="button"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Login
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ForgetPassword;

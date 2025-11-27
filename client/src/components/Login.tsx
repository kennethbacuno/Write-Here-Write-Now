import React, { useState } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { Mail, Lock, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import Input from "./Input";
import Button from "./Button";
import { useNavigate } from "react-router";

type LoginPageProps = HTMLMotionProps<"div">;

type LoginForm = {
  email: string;
  password: string;
};

type LoginErrors = Partial<Record<keyof LoginForm, string>>;

const LoginPage: React.FC<LoginPageProps> = ({ ...motionProps }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginForm>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<LoginErrors>({});

  const handleChange =
    (key: keyof LoginForm) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setFormData((s) => ({ ...s, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: LoginErrors = {};

    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";

    if (!formData.password) newErrors.password = "Password is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // TODO: replace with API call
      console.log("Login success:", formData);
    }
  };

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
          Welcome back
        </motion.h1>

        <motion.p
          className="mb-8 text-sm text-stone-600 dark:text-stone-400"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Sign in to continue
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
            value={formData.email}
            onChange={handleChange("email")}
            errorMessage={errors.email}
          />

          <Input
            icon={Lock}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={formData.password}
            onChange={handleChange("password")}
            errorMessage={errors.password}
            showPasswordToggle
            onTogglePassword={() => setShowPassword((s) => !s)}
          />

          <div className="flex items-center justify-between text-sm text-stone-600 dark:text-stone-400">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-stone-300 text-rose-500 focus:ring-rose-400"
              />
              <span>Remember me</span>
            </label>

            <button
              type="button"
              onClick={() => navigate("/authenticate/forgot-password")}
              className="font-semibold text-rose-500 hover:text-rose-700 dark:text-stone-300"
            >
              Forgot password?
            </button>
          </div>

          <Button variant="primary" size="lg" className="w-full" type="submit">
            Sign in
            <ArrowRight size={18} />
          </Button>
        </motion.form>

        <motion.div
          className="mt-6 text-center text-sm text-stone-600 dark:text-stone-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/authenticate/signup")}
            className="font-semibold text-rose-500 transition-colors hover:text-rose-700 dark:text-stone-300 dark:hover:text-stone-100"
            type="button"
          >
            Create account
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoginPage;

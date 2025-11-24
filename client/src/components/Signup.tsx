import React, { useState } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { User, Mail, Lock, CheckCircle2, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import Input from "./Input";
import Button from "./Button";

type SignupPageProps = {
  onSwitchToLogin?: () => void;
} & HTMLMotionProps<"div">;

type SignupForm = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type SignupErrors = Partial<Record<keyof SignupForm, string>>;

const passwordStrength = (password: string) => {
  if (password.length === 0) return { strength: 0, label: "", color: "" };
  if (password.length < 6)
    return { strength: 1, label: "Weak", color: "bg-red-500" };
  if (password.length < 10)
    return { strength: 2, label: "Medium", color: "bg-yellow-500" };
  return { strength: 3, label: "Strong", color: "bg-green-500" };
};

const SignupPage: React.FC<SignupPageProps> = ({
  onSwitchToLogin,
  ...motionProps
}) => {
  const [formData, setFormData] = useState<SignupForm>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<SignupErrors>({});

  const strength = passwordStrength(formData.password);

  const handleChange =
    (key: keyof SignupForm) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setFormData((s) => ({ ...s, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: SignupErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Please confirm your password";
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // TODO: replace with API call
      console.log("Signup successful:", formData);
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
          Create Account
        </motion.h1>

        <motion.p
          className="mb-8 text-sm text-stone-600 dark:text-stone-400"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Start your writing journey today
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="w-full space-y-5"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Input
            icon={User}
            type="text"
            placeholder="Full name"
            value={formData.name}
            onChange={handleChange("name")}
            errorMessage={errors.name}
          />

          <Input
            icon={Mail}
            type="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange("email")}
            errorMessage={errors.email}
          />

          <div>
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

          <Input
            icon={Lock}
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleChange("confirmPassword")}
            errorMessage={errors.confirmPassword}
            showPasswordToggle
            onTogglePassword={() => setShowConfirmPassword((s) => !s)}
          />

          <div className="flex items-start gap-2 text-xs text-stone-600 dark:text-stone-400">
            <CheckCircle2
              size={16}
              className="mt-0.5 shrink-0 text-rose-500 dark:text-stone-400"
            />
            <p>
              By signing up, you agree to our{" "}
              <button
                type="button"
                className="font-semibold text-rose-500 hover:text-rose-700 dark:text-stone-300"
              >
                Terms of Service
              </button>{" "}
              and{" "}
              <button
                type="button"
                className="font-semibold text-rose-500 hover:text-rose-700 dark:text-stone-300"
              >
                Privacy Policy
              </button>
            </p>
          </div>

          <Button variant="primary" size="lg" className="w-full" type="submit">
            Create Account
            <ArrowRight size={18} />
          </Button>
        </motion.form>

        <motion.div
          className="mt-6 text-center text-sm text-stone-600 dark:text-stone-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Already have an account?{" "}
          <button
            onClick={onSwitchToLogin}
            className="font-semibold text-rose-500 transition-colors hover:text-rose-700 dark:text-stone-300 dark:hover:text-stone-100"
            type="button"
          >
            Sign in
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SignupPage;

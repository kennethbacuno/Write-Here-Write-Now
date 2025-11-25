import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoginPage from "../components/Login";
import SignupPage from "../components/Signup";
import {
  floatingAnimation1,
  floatingAnimation2,
  floatingTransition1,
  floatingTransition2,
} from "../utils/Animation";

// --------------------
// Types
// --------------------
// interface AuthPageProps {}

// ------------------------------------------------------
// MAIN AUTH COMPONENT (Typed + Consistent + Clean)
// ------------------------------------------------------
const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-linear-to-br from-rose-50 via-stone-50 to-rose-100 p-4 dark:from-stone-900 dark:via-stone-800 dark:to-stone-900">
      {/* Background Floating Element 1 */}
      <motion.div
        className="absolute top-20 left-10 h-32 w-32 rounded-full bg-rose-300/20 blur-3xl dark:bg-stone-600/20"
        animate={floatingAnimation1}
        transition={floatingTransition1}
      />

      {/* Background Floating Element 2 */}
      <motion.div
        className="absolute right-10 bottom-20 h-40 w-40 rounded-full bg-rose-400/20 blur-3xl dark:bg-stone-700/20"
        animate={floatingAnimation2}
        transition={floatingTransition2}
      />

      {/* Main Content */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {isLogin ? (
            <LoginPage key="login" onSwitchToSignup={() => setIsLogin(false)} />
          ) : (
            <SignupPage key="signup" onSwitchToLogin={() => setIsLogin(true)} />
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <motion.footer
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-stone-400 dark:text-stone-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        All Rights Reserved © 2025
      </motion.footer>
    </div>
  );
};

export default AuthPage;

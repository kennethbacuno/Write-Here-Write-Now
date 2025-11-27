import { motion, AnimatePresence } from "framer-motion";
import {
  floatingAnimation1,
  floatingAnimation2,
  floatingTransition1,
  floatingTransition2,
} from "../utils/Animation";
import { useLocation, useOutlet } from "react-router";
import React from "react";

const AuthPage: React.FC = () => {
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-linear-to-br from-rose-50 via-stone-50 to-rose-100 p-4 dark:from-stone-900 dark:via-stone-800 dark:to-stone-900">
      {/* Background Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 h-32 w-32 rounded-full bg-rose-300/20 blur-3xl dark:bg-stone-600/20"
        animate={floatingAnimation1}
        transition={floatingTransition1}
      />
      <motion.div
        className="absolute right-10 bottom-20 h-40 w-40 rounded-full bg-rose-400/20 blur-3xl dark:bg-stone-700/20"
        animate={floatingAnimation2}
        transition={floatingTransition2}
      />

      {/* Main Content */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {outlet && React.cloneElement(outlet, { key: location.pathname })}
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

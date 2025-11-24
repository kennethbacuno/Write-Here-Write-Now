import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckSquare,
  BookOpen,
  FolderTree,
} from "lucide-react";
import Logo from "../components/Logo";
import Button from "../components/Button";
import FeatureCard from "../components/FeatureCard";
import { Link } from "react-router";

// ============ MAIN COMPONENT ============
const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const features = [
    {
      icon: CheckSquare,
      title: "Instant To-Dos",
      description:
        "Capture tasks and track your progress right alongside your notes. Stop juggling apps.",
    },
    {
      icon: BookOpen,
      title: "Unlimited Notepads",
      description:
        "Whether it's a novel draft or a quick memo, create dedicated spaces for every project.",
    },
    {
      icon: FolderTree,
      title: "Shelves & Categories",
      description:
        "Organize your vast library of notes into digital shelves for instant recall and browsing.",
    },
  ];

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % features.length);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const visibleIndices = [
    (activeIndex - 1 + features.length) % features.length,
    activeIndex,
    (activeIndex + 1) % features.length,
  ];

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 via-stone-50 to-rose-100 p-4 sm:p-8 dark:from-stone-900 dark:via-stone-800 dark:to-stone-900">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 h-32 w-32 rounded-full bg-rose-300/20 blur-3xl dark:bg-stone-600/20"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-10 bottom-20 h-40 w-40 rounded-full bg-rose-400/20 blur-3xl dark:bg-stone-700/20"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Container */}
      <motion.div
        className="relative z-10 flex w-full max-w-7xl flex-col items-center justify-between gap-8 lg:flex-row lg:gap-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* LEFT: TEXT SECTION */}
        <motion.div
          className="flex max-w-2xl flex-col items-center space-y-4 text-center lg:items-start lg:space-y-6 lg:text-left"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Logo />

          <motion.h1
            className="text-4xl leading-tight font-bold text-stone-800 sm:text-5xl lg:text-6xl dark:text-stone-100"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Write Here <br className="hidden sm:block" />
            Write <span className="text-rose-500 dark:text-rose-400">Now</span>
          </motion.h1>

          <motion.p
            className="max-w-xl text-base leading-relaxed font-light text-stone-600 sm:text-lg lg:text-xl dark:text-stone-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Feeling creative? Needed to vent? A grocery list or an idea?
            Whatever it is, come and write your next story with us!
          </motion.p>

          <motion.div
            className="flex flex-col items-center gap-4 pt-4 sm:flex-row"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/authenticate">
              <Button variant="primary" size="lg">
                Get Started
              </Button>
            </Link>
            <Button variant="secondary" size="lg">
              Learn More
              <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>

        {/* RIGHT: FEATURE CAROUSEL */}
        <motion.div
          className="relative flex w-full max-w-md items-center justify-center lg:max-w-lg"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Navigation Buttons */}
          <Button
            variant="icon"
            className="absolute -left-2 z-40 sm:-left-4"
            onClick={goToPrev}
          >
            <ChevronLeft size={24} />
          </Button>

          {/* Feature Cards */}
          <div className="flex items-center justify-center gap-2 px-12 sm:gap-4 sm:px-16">
            <AnimatePresence mode="wait">
              {visibleIndices.map((featureIndex, displayIndex) => (
                <FeatureCard
                  key={featureIndex}
                  icon={features[featureIndex].icon}
                  title={features[featureIndex].title}
                  description={features[featureIndex].description}
                  isActive={displayIndex === 1}
                />
              ))}
            </AnimatePresence>
          </div>

          <Button
            variant="icon"
            className="absolute -right-2 z-40 sm:-right-4"
            onClick={goToNext}
          >
            <ChevronRight size={24} />
          </Button>

          {/* Carousel Indicators */}
          <div className="absolute -bottom-8 flex gap-2">
            {features.map((_, index) => (
              <motion.button
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-8 bg-rose-500 dark:bg-stone-400"
                    : "w-2 bg-rose-300 dark:bg-stone-600"
                }`}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* FOOTER */}
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

export default HomePage;

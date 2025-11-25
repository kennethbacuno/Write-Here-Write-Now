import React from "react";
import { motion, type HTMLMotionProps, type Transition } from "framer-motion";
import {
  Code,
  Layers,
  Heart,
  Github,
  Mail,
  ArrowRight,
  Palette,
} from "lucide-react";
import Logo from "../components/Logo";
import Button from "../components/Button";
import {
  floatingAnimation1,
  floatingAnimation2,
  floatingTransition1,
  floatingTransition2,
} from "../utils/Animation";
import { features } from "../utils/Features";
import { Link } from "react-router";

// -----------------------------
// Types
// -----------------------------

type FeatureCardProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  status?: string | null;
} & HTMLMotionProps<"div">;

type TechBadgeProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name: string;
  category: string;
} & HTMLMotionProps<"div">;

type SectionProps = {
  title: string;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
} & HTMLMotionProps<"section">;

type AboutPageProps = HTMLMotionProps<"div">;

const sectionTransition: Transition = { duration: 0.6 };

// -----------------------------
// Small presentational components
// -----------------------------

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  status,
  className = "",
  ...motionProps
}) => {
  return (
    <motion.div
      {...motionProps}
      className={`flex flex-col items-start gap-3 rounded-2xl bg-white/50 p-5 backdrop-blur-lg transition-all duration-300 hover:shadow-lg dark:bg-stone-700/50 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-100 dark:bg-stone-600">
        <Icon
          className="h-6 w-6 text-rose-600 dark:text-stone-300"
          strokeWidth={2}
        />
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-bold text-stone-800 dark:text-stone-100">
            {title}
          </h3>
          {status && (
            <span className="rounded-full bg-rose-100 px-2 py-0.5 text-xs font-semibold text-rose-600 dark:bg-stone-600 dark:text-stone-300">
              {status}
            </span>
          )}
        </div>
        <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export const TechBadge: React.FC<TechBadgeProps> = ({
  icon: Icon,
  name,
  category,
  className = "",
  ...motionProps
}) => {
  return (
    <motion.div
      {...motionProps}
      className={`flex items-center gap-3 rounded-xl bg-white/50 px-4 py-3 backdrop-blur-lg dark:bg-stone-700/50 ${className}`}
      whileHover={{ scale: 1.05, y: -2 }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      <Icon className="h-5 w-5 text-rose-500 dark:text-stone-400" />
      <div>
        <p className="text-sm font-semibold text-stone-800 dark:text-stone-200">
          {name}
        </p>
        <p className="text-xs text-stone-500 dark:text-stone-500">{category}</p>
      </div>
    </motion.div>
  );
};

export const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  children,
  className = "",
  ...motionProps
}) => {
  return (
    <motion.section
      {...motionProps}
      className={`w-full ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={sectionTransition}
    >
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-3xl font-bold text-stone-800 sm:text-4xl dark:text-stone-100">
          {title}
        </h2>
        {subtitle && (
          <p className="text-base text-stone-600 dark:text-stone-400">
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </motion.section>
  );
};

// -----------------------------
// Main AboutPage
// -----------------------------

const AboutPage: React.FC<AboutPageProps> = (props) => {
  const frontendTech = [
    { icon: Code, name: "React + Vite", category: "Framework" },
    { icon: Code, name: "TypeScript", category: "Language" },
    { icon: Palette, name: "Tailwind CSS", category: "Styling" },
  ];

  const backendTech = [
    { icon: Code, name: "Node.js", category: "Runtime" },
    { icon: Code, name: "Express.js", category: "Framework" },
    { icon: Layers, name: "MongoDB", category: "Database" },
  ];

  return (
    <motion.div
      {...props}
      className="relative min-h-screen w-full overflow-hidden bg-linear-to-br from-rose-50 via-stone-50 to-rose-100 dark:from-stone-900 dark:via-stone-800 dark:to-stone-900"
    >
      {/* Animated Background Elements */}
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
      <div className="relative z-10 mx-auto max-w-6xl space-y-16 px-4 py-12 sm:px-8 sm:py-16">
        {/* Hero Section */}
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Logo />
          <h1 className="mb-4 text-4xl leading-tight font-bold text-stone-800 sm:text-5xl lg:text-6xl dark:text-stone-100">
            About{" "}
            <span className="text-rose-500 dark:text-rose-400">
              Write Here Write Now
            </span>
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-stone-600 sm:text-lg lg:text-xl dark:text-stone-300">
            An online note-taking and task management web application designed
            for creativity, productivity, and personalization. Write, organize,
            and manage your ideas through a beautifully designed interface that
            goes beyond simple note-taking.
          </p>
        </motion.div>

        {/* Vision Section */}
        <Section title="Our Vision">
          <motion.div
            className="mx-auto max-w-3xl rounded-2xl bg-white/50 p-8 backdrop-blur-lg dark:bg-stone-700/50"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-center text-base leading-relaxed text-stone-700 sm:text-lg dark:text-stone-300">
              The goal of{" "}
              <span className="font-semibold text-rose-600 dark:text-rose-400">
                Write Here Write Now
              </span>{" "}
              is to provide an all-in-one digital workspace where users can
              freely write, plan, and reflect — with an interface that feels
              both{" "}
              <span className="font-semibold">intuitive and inspiring</span>.
              This project is built to explore and demonstrate modern full-stack
              development practices using React, TypeScript, and Node.js.
            </p>
          </motion.div>
        </Section>

        {/* Features Section */}
        <Section
          title="Features"
          subtitle="Everything you need to capture, organize, and bring your ideas to life"
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                status={feature.status}
              />
            ))}
          </div>
        </Section>

        {/* Tech Stack Section */}
        <Section
          title="Tech Stack"
          subtitle="Built with modern, powerful technologies"
        >
          <div className="space-y-8">
            {/* Frontend */}
            <div>
              <h3 className="mb-4 text-center text-xl font-bold text-stone-800 dark:text-stone-200">
                Frontend
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {frontendTech.map((tech, index) => (
                  <TechBadge
                    key={index}
                    icon={tech.icon}
                    name={tech.name}
                    category={tech.category}
                  />
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <h3 className="mb-4 text-center text-xl font-bold text-stone-800 dark:text-stone-200">
                Backend
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {backendTech.map((tech, index) => (
                  <TechBadge
                    key={index}
                    icon={tech.icon}
                    name={tech.name}
                    category={tech.category}
                  />
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Roadmap Section */}
        <Section title="Roadmap" subtitle="Exciting features coming soon">
          <div className="mx-auto max-w-2xl space-y-3">
            {[
              "Note sharing via link or collaboration",
              "Drag-and-drop folder organization",
              "Voice notes or speech-to-text support",
              "Cross-device sync",
              "Dark mode customization",
              "Mobile-friendly PWA version",
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 rounded-xl bg-white/50 p-4 backdrop-blur-lg dark:bg-stone-700/50"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-rose-500 dark:border-stone-400" />
                <p className="text-sm text-stone-700 sm:text-base dark:text-stone-300">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Author Section */}
        <Section title="About the Developer">
          <motion.div
            className="mx-auto max-w-2xl rounded-2xl bg-white/50 p-8 text-center backdrop-blur-lg dark:bg-stone-700/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 dark:bg-stone-600">
                <Heart
                  className="h-8 w-8 text-rose-500 dark:text-stone-300"
                  fill="currentColor"
                />
              </div>
            </div>
            <h3 className="mb-2 text-2xl font-bold text-stone-800 dark:text-stone-100">
              Abner Kenneth Y. Bacuño
            </h3>
            <p className="mb-6 text-sm text-stone-600 italic dark:text-stone-400">
              "One at a time."
            </p>
            <p className="mb-6 text-base text-stone-700 dark:text-stone-300">
              Developer and maintainer of Write Here Write Now. Passionate about
              creating beautiful, functional web experiences.
            </p>
            <div className="flex justify-center gap-4">
              <a href="https://github.com/kennethbacuno">
                <Button variant="secondary" size="md">
                  <Github className="h-5 w-5" />
                  GitHub
                </Button>
              </a>
              <a href="mailto:bacunoabnerkenneth@gmail.com">
                <Button variant="secondary" size="md">
                  <Mail className="h-5 w-5" />
                  Contact
                </Button>
              </a>
            </div>
          </motion.div>
        </Section>

        {/* CTA Section */}
        <motion.div
          className="flex flex-col items-center gap-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-stone-800 sm:text-4xl dark:text-stone-100">
            Ready to Start Writing?
          </h2>
          <p className="max-w-2xl text-base text-stone-600 dark:text-stone-400">
            Join us today and experience a new way to capture your thoughts,
            organize your tasks, and bring your creative ideas to life.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link to="/authenticate">
              <Button variant="primary" size="lg">
                Get Started
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        className="relative z-10 pt-16 pb-8 text-center text-xs text-stone-400 dark:text-stone-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        All Rights Reserved © 2025
      </motion.footer>
    </motion.div>
  );
};

export default AboutPage;

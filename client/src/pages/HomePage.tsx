import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// local imports
import FeatureCard from "../components/FeatureCard";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import NavBar from "../components/NavBar";

const features = [
  {
    icon: (
      <img
        src="../src/assets/gifs/to-do-list.gif" // Replace with your actual path
        alt="Animated to-do list"
        className="size-20 rounded-lg object-cover" // Style the GIF
      />
    ),
    title: "Instant To-Dos",
    description:
      "Capture tasks and track your progress right alongside your notes. Stop juggling apps.",
  },
  {
    icon: (
      <img
        src="../src/assets/gifs/scroll-with-quill.gif" // Replace with your actual path
        alt="Animated to-do list"
        className="size-20 rounded-lg object-cover" // Style the GIF
      />
    ),
    title: "Unlimited Notepads",
    description:
      "Whether it's a novel draft or a quick memo, create dedicated spaces for every project.",
  },
  {
    icon: (
      <img
        src="../src/assets/gifs/shelves.gif" // Replace with your actual path
        alt="Animated to-do list"
        className="size-20 rounded-lg object-cover" // Style the GIF
      />
    ),
    title: "Shelves & Categories",
    description:
      "Organize your vast library of notes into digital shelves for instant recall and browsing.",
  },
];

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1);

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % features.length);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const visibleIndices = [
    (activeIndex - 1 + features.length) % features.length, // Previous
    activeIndex, // Current (Active)
    (activeIndex + 1) % features.length, // Next
  ];

  const visibleCards = visibleIndices.map((index) => features[index]);

  return (
    <>
      <NavBar />
      <div
        className="w-screen h-screen max-h-190 p-6 flex items-center justify-center bg-stone-100 dark:bg-slate-800
        "
      >
        {/* Marketing Section */}
        <div className="max-w-xl flex flex-col col-span-1 gap-6 justify-start items-start">
          <img
            className="size-25 shadow-xl rounded-xl"
            src="../src/assets/logo.png"
            alt="Write here Write Now Logo"
          />
          <h1 className="text-5xl text-stone-900 font-semibold tracking-tight text-balance dark:text-stone-400">
            Write Here Write Now
          </h1>
          <h3 className="text-lg font-thin text-stone-600 tracking-wide text-balance dark:text-stone-200">
            Feeling creative? Needed to vent? The grocery list or just want to
            jot down some ideas? Whatever it is, come and write your next story
            with us!
          </h3>
          <div className="flex gap-4">
            <PrimaryButton text="Get Started" />

            <button className="text-rose-500 font-semibold cursor-pointer transition duration-300 hover:text-rose-600 hover:scale-105 transform flex items-center gap-2 p-2 dark:text-stone-400 dark:hover:text-stone-300">
              Learn More
              <span>
                <ArrowRight className="size-5" />
              </span>
            </button>
          </div>
        </div>
        {/* Feature Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={goToPrev}
            className="absolute -left-10 z-40 p-2 border-2 rounded-full border-rose-300 bg-rose-500 text-stone-200 cursor-pointer hover:scale-105 transition duration-300 dark:bg-stone-600 dark:border-stone-400 dark:text-stone-200"
            aria-label="Previous Feature"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Feature Card - Renders the current active feature */}
          <div className="flex space-x-6 w-120 h-100 items-center justify-center">
            {visibleCards.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                isActive={index === 1}
              ></FeatureCard>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute -right-10 z-40 p-2 border-2 rounded-full border-rose-300 bg-rose-500 text-stone-200 cursor-pointer hover:scale-105 transition duration-300 dark:bg-stone-600 dark:border-stone-400 dark:text-stone-200"
            aria-label="Next Feature"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;

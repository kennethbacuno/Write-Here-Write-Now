import { Home, Settings, User } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const AppRail = () => {
  const [activeTab, setActiveTab] = useState("home");

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "settings", icon: Settings, label: "Settings" },
    { id: "profile", icon: User, label: "Profile" },
  ];

  return (
    <motion.div
      className="flex h-full w-16 flex-col items-center border-r border-stone-200 bg-white py-4 dark:border-stone-700 dark:bg-stone-900"
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveTab(item.id)}
          className={`group relative mb-2 flex h-12 w-12 items-center justify-center rounded-xl transition-all ${
            activeTab === item.id
              ? "bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400"
              : "text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-800"
          }`}
          title={item.label}
        >
          <item.icon size={22} strokeWidth={2} />
          {activeTab === item.id && (
            <motion.div
              layoutId="activeTab"
              className="absolute left-0 h-8 w-1 rounded-r-full bg-rose-600 dark:bg-rose-400"
            />
          )}
        </button>
      ))}
    </motion.div>
  );
};

export default AppRail;

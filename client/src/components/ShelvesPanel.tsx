import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Plus, FolderOpen, CheckSquare, Lock, X } from "lucide-react";
import type { Shelf } from "../utils/CustomTypes";

const ShelvesPanel = ({
  isOpen,
  onClose,
  onSelectShelf,
  activeShelf,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSelectShelf: (id: string) => void;
  activeShelf: string;
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const sampleShelves: Shelf[] = [
    { id: "1", name: "Personal", noteCount: 12, createdAt: new Date() },
    { id: "2", name: "Work", noteCount: 8, createdAt: new Date() },
    {
      id: "3",
      name: "Ideas",
      noteCount: 24,
      isLocked: true,
      createdAt: new Date(),
    },
  ];

  return (
    <motion.div
      className={`flex h-full w-full flex-col border-r border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900 ${
        isOpen ? "block" : "md-wide:flex hidden"
      } md-wide:w-72`}
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-stone-200 p-4 dark:border-stone-700">
        <h2 className="text-lg font-semibold text-stone-800 dark:text-stone-100">
          My Workspace
        </h2>
        <button
          onClick={onClose}
          className="md-wide:hidden rounded-lg p-1.5 transition-colors hover:bg-stone-100 dark:hover:bg-stone-800"
        >
          <X size={20} />
        </button>
      </div>

      {/* Search */}
      <div className="p-4">
        <div className="relative">
          <Search
            className="pointer-events-none absolute top-3 left-3 text-stone-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search notes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-stone-200 bg-stone-50 py-2 pr-4 pl-10 text-sm transition-all focus:border-rose-400 focus:ring-2 focus:ring-rose-100 focus:outline-none dark:border-stone-700 dark:bg-stone-800 dark:focus:border-rose-600 dark:focus:ring-rose-900/20"
          />
        </div>
      </div>

      {/* New Note Button */}
      <div className="px-4 pb-4">
        <motion.button
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-rose-500 py-3 text-sm font-semibold text-white transition-all hover:bg-rose-600 dark:bg-rose-600 dark:hover:bg-rose-700"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Plus size={18} strokeWidth={2.5} />
          New Note
        </motion.button>
      </div>

      {/* Shelves List */}
      <div className="flex-1 space-y-1 overflow-y-auto px-3">
        <p className="px-3 py-2 text-xs font-semibold tracking-wide text-stone-500 uppercase dark:text-stone-400">
          Shelves
        </p>
        {sampleShelves.map((shelf) => (
          <motion.button
            key={shelf.id}
            onClick={() => onSelectShelf(shelf.id)}
            className={`group relative flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-all ${
              activeShelf === shelf.id
                ? "bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400"
                : "text-stone-700 hover:bg-stone-50 dark:text-stone-300 dark:hover:bg-stone-800"
            }`}
            whileHover={{ x: 2 }}
          >
            {activeShelf === shelf.id && (
              <motion.div
                layoutId="activeShelf"
                className="absolute left-0 h-8 w-1 rounded-r-full bg-rose-600 dark:bg-rose-400"
              />
            )}
            <div className="flex shrink-0 items-center gap-1">
              <FolderOpen size={20} strokeWidth={2} />
              {shelf.isLocked && <Lock size={14} className="text-stone-400" />}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{shelf.name}</p>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                {shelf.noteCount} notes
              </p>
            </div>
          </motion.button>
        ))}

        <div className="pt-4">
          <p className="px-3 py-2 text-xs font-semibold tracking-wide text-stone-500 uppercase dark:text-stone-400">
            Lists
          </p>
          <motion.button
            className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-stone-700 hover:bg-stone-50 dark:text-stone-300 dark:hover:bg-stone-800"
            whileHover={{ x: 2 }}
          >
            <CheckSquare size={20} strokeWidth={2} className="shrink-0" />
            <span className="text-sm font-medium">To-Do List</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ShelvesPanel;

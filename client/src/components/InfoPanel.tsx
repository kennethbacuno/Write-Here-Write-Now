import { motion } from "framer-motion";
import {
  Clock,
  FileDown,
  FileText,
  Paperclip,
  Tag,
  Trash2,
} from "lucide-react";

const InfoPanel = ({ isOpen }: { isOpen: boolean }) => {
  const noteInfo = {
    createdAt: "2 hours ago",
    wordCount: 342,
    tags: ["work", "meeting notes"],
  };

  return (
    <motion.div
      className={`flex h-full w-full flex-col border-l border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900 ${
        isOpen ? "block" : "md-wide:flex hidden"
      } md-wide:w-72`}
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="border-b border-stone-200 p-4 dark:border-stone-700">
        <h3 className="text-lg font-semibold text-stone-800 dark:text-stone-100">
          Note Info
        </h3>
      </div>

      {/* Metadata */}
      <div className="space-y-4 p-4">
        <div className="flex items-center gap-3 text-sm text-stone-600 dark:text-stone-400">
          <Clock size={16} strokeWidth={2} />
          <span>Created {noteInfo.createdAt}</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-stone-600 dark:text-stone-400">
          <FileText size={16} strokeWidth={2} />
          <span>{noteInfo.wordCount} words</span>
        </div>

        <div>
          <div className="mb-2 flex items-center gap-2 text-sm font-medium text-stone-700 dark:text-stone-300">
            <Tag size={16} strokeWidth={2} />
            <span>Tags</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {noteInfo.tags.map((tag, idx) => (
              <span
                key={idx}
                className="rounded-full bg-rose-50 px-3 py-1 text-xs font-medium text-rose-600 dark:bg-rose-900/20 dark:text-rose-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center gap-2 text-sm font-medium text-stone-700 dark:text-stone-300">
            <Paperclip size={16} strokeWidth={2} />
            <span>Attachments</span>
          </div>
          <p className="text-xs text-stone-500 dark:text-stone-400">
            No attachments
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-auto space-y-2 border-t border-stone-200 p-4 dark:border-stone-700">
        <motion.button
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-rose-600 bg-rose-50 py-2.5 text-sm font-semibold text-rose-600 transition-all hover:bg-rose-100 dark:border-rose-500 dark:bg-rose-900/20 dark:text-rose-400 dark:hover:bg-rose-900/30"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <FileDown size={18} strokeWidth={2} />
          Export PDF
        </motion.button>
        <motion.button
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 py-2.5 text-sm font-semibold text-red-600 transition-all hover:bg-red-100 dark:border-red-900/50 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Trash2 size={18} strokeWidth={2} />
          Delete Note
        </motion.button>
      </div>
    </motion.div>
  );
};

export default InfoPanel;

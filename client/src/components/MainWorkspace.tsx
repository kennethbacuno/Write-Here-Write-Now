import { motion } from "framer-motion";
import { Bold, Heading1, Heading2, Italic, List } from "lucide-react";
import { useState } from "react";

const MainWorkspace = () => {
  const [title, setTitle] = useState("Untitled Note");
  const [content, setContent] = useState("");

  const editorTools = [
    { icon: Bold, label: "Bold" },
    { icon: Italic, label: "Italic" },
    { icon: Heading1, label: "H1" },
    { icon: Heading2, label: "H2" },
    { icon: List, label: "List" },
  ];

  return (
    <motion.div
      className="flex h-full flex-1 flex-col bg-white dark:bg-stone-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      {/* Editor Toolbar */}
      <div className="flex items-center gap-1 border-b border-stone-200 px-4 py-3 dark:border-stone-700">
        {editorTools.map((tool, idx) => (
          <motion.button
            key={idx}
            className="rounded-lg p-2 text-stone-600 transition-all hover:bg-stone-50 hover:text-stone-900 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-stone-100"
            title={tool.label}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <tool.icon size={18} strokeWidth={2} />
          </motion.button>
        ))}
      </div>

      {/* Editor Content */}
      <div className="flex-1 overflow-y-auto p-8">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Untitled"
          className="mb-4 w-full border-0 bg-transparent text-3xl font-bold text-stone-900 outline-none placeholder:text-stone-300 dark:text-stone-100 dark:placeholder:text-stone-600"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Start writing..."
          className="min-h-[500px] w-full resize-none border-0 bg-transparent text-base leading-relaxed text-stone-700 outline-none placeholder:text-stone-400 dark:text-stone-300 dark:placeholder:text-stone-600"
        />
      </div>
    </motion.div>
  );
};

export default MainWorkspace;

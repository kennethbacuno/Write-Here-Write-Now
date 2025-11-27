import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, FileText } from "lucide-react";
import AppRail from "../components/AppRail";
import ShelvesPanel from "../components/ShelvesPanel";
import MainWorkspace from "../components/MainWorkSpace";
import InfoPanel from "../components/InfoPanel";

export default function WorkspaceLayout() {
  const [leftPanelOpen, setLeftPanelOpen] = useState(false);
  const [rightPanelOpen, setRightPanelOpen] = useState(false);
  const [activeShelf, setActiveShelf] = useState("1");

  return (
    <div className="flex h-screen w-full overflow-hidden bg-stone-50 dark:bg-stone-950">
      {/* Zone A: App Rail */}
      <AppRail />

      {/* Mobile Menu Toggle */}
      <div className="md-wide:hidden absolute top-4 left-20 z-50">
        <motion.button
          onClick={() => setLeftPanelOpen(!leftPanelOpen)}
          className="rounded-xl bg-white p-2.5 shadow-lg dark:bg-stone-800"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Menu size={22} />
        </motion.button>
      </div>

      {/* Zone B: Shelves Panel */}
      <ShelvesPanel
        isOpen={leftPanelOpen}
        onClose={() => setLeftPanelOpen(false)}
        onSelectShelf={setActiveShelf}
        activeShelf={activeShelf}
      />

      {/* Zone C: Main Workspace */}
      <MainWorkspace />

      {/* Zone D: Info Panel */}
      <InfoPanel isOpen={rightPanelOpen} />

      {/* Mobile Right Panel Toggle */}
      <div className="md-wide:hidden absolute top-4 right-4 z-50">
        <motion.button
          onClick={() => setRightPanelOpen(!rightPanelOpen)}
          className="rounded-xl bg-white p-2.5 shadow-lg dark:bg-stone-800"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FileText size={22} />
        </motion.button>
      </div>
    </div>
  );
}

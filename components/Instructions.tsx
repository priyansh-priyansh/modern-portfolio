'use client';

import React, { useState, useEffect } from 'react';
import { FiCornerDownLeft } from "react-icons/fi"; // Return key icon
import { VscChromeClose } from "react-icons/vsc"; // Changed to a valid VSCode icon
import { motion, AnimatePresence } from 'framer-motion';

const Instructions = () => {
  const [showInstructions, setShowInstructions] = useState(true);

  useEffect(() => {
    const handleKeyPress = () => {
      setShowInstructions(false);
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const handleClick = () => {
    setShowInstructions(false);
  };

  return (
    <AnimatePresence>
      {showInstructions && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="fixed inset-0 hidden md:flex items-center justify-center z-50"
          onClick={handleClick}
          role="button"
          tabIndex={0}
        >
          <div className="bg-black/80 backdrop-blur-md rounded-2xl p-6 text-white shadow-2xl border border-white/10 max-w-md mx-auto cursor-pointer hover:bg-black/90 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FiCornerDownLeft className="w-5 h-5 text-blue-400" />
                <span>Press Return to start chatting</span>
              </div>
              <div className="flex items-center gap-3">
                <VscChromeClose className="w-5 h-5 text-red-400" />
                <span>Press Esc to exit</span>
              </div>
              <div className="pt-3 border-t border-white/10">
                <p className="text-sm text-gray-400">
                  🎮 Hover around to discover Easter Eggs clues...
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Note: Cursor tracking is active in the hero section only
                </p>
              </div>
              <div className="text-xs text-center text-gray-500">
                Press any key or click anywhere to continue
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Instructions; 
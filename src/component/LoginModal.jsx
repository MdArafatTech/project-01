// src/components/LoginModal.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { motion, AnimatePresence } from "framer-motion";

const LoginModal = () => {
  const { setShowLoginModal } = useAuth();
  const navigate = useNavigate();

  const handleSignInClick = () => {
    setShowLoginModal(false);
    navigate("/login");
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-xl px-4">
        {/* Backdrop glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 via-pink-600/10 to-purple-600/10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 40 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative bg-white/80 dark:bg-gray-900/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50 overflow-hidden max-w-md w-full"
        >
          {/* Premium top gradient bar */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600" />

          <div className="p-10 sm:p-12 text-center">
            {/* Icon with glow */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-orange-500 to-pink-600 rounded-3xl flex items-center justify-center shadow-2xl ring-8 ring-orange-500/20"
            >
              <span className="text-5xl">🔒</span>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-4"
            >
              Access Restricted
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-sm mx-auto"
            >
              Sign in to unlock premium tools, exclusive features, and personalized experience.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              {/* Primary Sign In Button */}
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSignInClick}
                className="w-full cursor-pointer py-5 px-8 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold text-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <span>Sign In</span>
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </motion.button>

              {/* Cancel Button */}
              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: "rgba(156, 163, 175, 0.2)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowLoginModal(false)}
                className="w-full cursor-pointer py-5 px-8 bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-gray-200 font-semibold text-lg rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:bg-gray-200/70 dark:hover:bg-gray-700/70 transition-all duration-300"
              >
                Maybe Later
              </motion.button>
            </motion.div>

            {/* Subtle footer text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-xs text-gray-500 dark:text-gray-500 mt-8"
            >
              Your data is secure • No spam • Instant access
            </motion.p>
          </div>

          {/* Bottom glow effect */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange-500/5 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default LoginModal;
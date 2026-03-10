import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete?: () => void;
  duration?: number;
  developerName?: string;
  logoSrc?: string;
}

const Preloader: React.FC<PreloaderProps> = ({
  onComplete,
  duration = 3000,
  developerName = "Yefta Febrianto",
  logoSrc = "src/images/LogoYefta-noBG.png",

}) => {
  const [isComplete, setIsComplete] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 30;
      });
    }, 200);

    // Complete preloader after duration
    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsComplete(true);
        onComplete?.();
      }, 300);
    }, duration);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, [duration, onComplete]);

  const loadingTexts = [
    "Initializing Portfolio…",
    "Loading Experience…",
    "Crafting Excellence…",
    "Finalizing Details…",
  ];

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 bg-slate-950 z-50 flex items-center justify-center"
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(circle at 30% -10%, rgba(37, 99, 235, 0.1) 0%, transparent 50%)",
              }}
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(circle at 70% 110%, rgba(79, 70, 229, 0.1) 0%, transparent 50%)",
              }}
              animate={{
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Content Container */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-8">
            {/* Initials Circle */}
            <motion.div
              className="relative"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              {/* Outer Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-blue-500/30"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  width: 120,
                  height: 120,
                }}
              />

              {/* Inner Glow Circle */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  width: 120,
                  height: 120,
                  background: "radial-gradient(circle, rgba(37, 99, 235, 0.2) 0%, transparent 70%)",
                }}
              />

              {/* Initials Text */}
              <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-xl overflow-hidden">
                <motion.img
                  src={logoSrc}
                  alt="Logo"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="w-20 h-20 object-contain"
                />
              </div>

            </motion.div>

            {/* Developer Name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <h1 className="text-2xl font-bold text-white mb-2">
                {developerName}
              </h1>
              <p className="text-blue-400 text-sm font-medium">
                Full Stack Developer
              </p>
            </motion.div>

            {/* Loading Text Animation */}
            <motion.div
              className="h-6 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.p
                className="text-slate-400 text-sm"
                animate={{
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {loadingTexts[Math.floor((progress / 100) * loadingTexts.length)]}
              </motion.p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              className="w-64 h-1 bg-slate-800 rounded-full overflow-hidden mt-4"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 256 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div
                className="h-full bg-linear-to-r from-blue-500 to-indigo-500 rounded-full"
                animate={{
                  width: `${Math.min(progress, 100)}%`,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
              />
            </motion.div>

            {/* Loading Dots */}
            <div className="flex gap-2 mt-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-blue-500"
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;

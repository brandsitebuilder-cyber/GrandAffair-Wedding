import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const togglePlay = () => {
    setPlaying(!playing);
    setHasInteracted(true);
  };

  return (
    <>
      <div className="fixed bottom-0 right-0 opacity-0 pointer-events-none -z-50">
        <ReactPlayer
          src="https://youtu.be/4Wxi4sVCeo0?list=RD4Wxi4sVCeo0"
          playing={playing}
          loop={true}
          volume={0.5}
          width="10px"
          height="10px"
          playsInline={true}
          onReady={() => setIsReady(true)}
        />
      </div>

      <AnimatePresence>
        {isReady && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            onClick={togglePlay}
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-brand-bg border border-brand-accent text-brand-accent shadow-lg hover:bg-brand-accent hover:text-brand-bg transition-all duration-300 group"
            aria-label={playing ? "Pause background music" : "Play background music"}
          >
            {playing ? (
              <Volume2 className="w-5 h-5" />
            ) : (
              <VolumeX className="w-5 h-5" />
            )}
            
            {/* Tooltip */}
            {!hasInteracted && (
              <span className="absolute right-full mr-4 whitespace-nowrap bg-brand-bg border border-brand-accent/30 text-brand-text text-xs uppercase tracking-widest px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Play Music
              </span>
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

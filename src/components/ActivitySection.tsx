import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { DollarSign } from "lucide-react";
import SVGAudience from "./SVGAudience";
import SVGStamp from "./SVGStamp";

const ActivitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="activity" ref={ref} className="relative py-12 md:py-20 px-4 overflow-hidden flex items-center justify-center max-w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-squid-charcoal to-black" />
      
      {/* Floating currency animations */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: `${Math.random() * 90}%`, 
              y: -50,
              rotate: 0,
              opacity: 0.3
            }}
            animate={{ 
              y: "100vh",
              rotate: 360,
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          >
            <DollarSign className="w-12 h-12 text-primary/40" />
          </motion.div>
        ))}
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-bebas text-3xl sm:text-5xl md:text-8xl mb-4 sm:mb-8 animate-flicker"
        >
          <span className="text-primary text-glow-intense">PITCH.</span>{" "}
          <span className="text-accent text-glow-intense">COMPETE.</span>{" "}
          <span className="text-primary text-glow-intense">CONQUER.</span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-card border-2 border-primary/30 p-4 sm:p-8 md:p-12 rounded-lg box-glow mb-6 sm:mb-12"
        >
          <h3 className="font-orbitron text-lg sm:text-3xl text-primary mb-3 sm:mb-6">INVESTMENT SIMULATION</h3>
          <p className="text-sm sm:text-xl text-foreground/90 leading-relaxed mb-4 sm:mb-8">
            In this high-stakes game, your startup's survival depends on your ability to secure investment.
            Judges and audience members hold the power with their Ventura currency.
          </p>

          {/* Professional Victory Pyramid */}
          <div className="relative w-full max-w-4xl mx-auto mt-12 sm:mt-16">
            {/* Podium Structure */}
            <div className="flex items-end justify-center gap-2 sm:gap-4 md:gap-8 mb-8">
              {/* 2nd Place - Left */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col items-center"
              >
                <motion.div
                  animate={{
                    y: [0, -8, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="mb-4"
                >
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500 rounded-lg flex items-center justify-center border-4 border-slate-200 shadow-2xl shadow-slate-400/50">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                    <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-slate-100 rounded-full flex items-center justify-center border-2 border-slate-300 font-bebas text-lg sm:text-xl text-slate-700">
                      2
                    </div>
                  </div>
                </motion.div>
                <div className="w-24 sm:w-32 md:w-40 h-32 sm:h-36 md:h-40 bg-gradient-to-b from-slate-700 to-slate-900 border-t-4 border-slate-400 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-600/30 to-transparent" />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-bebas text-2xl sm:text-3xl md:text-4xl text-slate-300">
                    2nd
                  </div>
                </div>
              </motion.div>

              {/* 1st Place - Center (Tallest) */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col items-center"
              >
                <motion.div
                  animate={{
                    y: [0, -12, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="mb-4"
                >
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center border-4 border-yellow-200 shadow-2xl shadow-yellow-500/70 animate-pulse-glow">
                    <svg className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                    <div className="absolute -top-3 -right-3 w-10 h-10 sm:w-12 sm:h-12 bg-yellow-100 rounded-full flex items-center justify-center border-3 border-yellow-300 font-bebas text-2xl sm:text-3xl text-yellow-700 shadow-lg">
                      1
                    </div>
                  </div>
                </motion.div>
                <div className="w-28 sm:w-36 md:w-48 h-48 sm:h-52 md:h-56 bg-gradient-to-b from-yellow-600 to-yellow-800 border-t-4 border-yellow-400 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/40 to-transparent" />
                  <div className="absolute top-4 left-1/2 -translate-x-1/2">
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                      </svg>
                    </motion.div>
                  </div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-bebas text-3xl sm:text-4xl md:text-5xl text-yellow-200">
                    1st
                  </div>
                </div>
              </motion.div>

              {/* 3rd Place - Right */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col items-center"
              >
                <motion.div
                  animate={{
                    y: [0, -6, 0]
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="mb-4"
                >
                  <div className="relative w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-lg flex items-center justify-center border-4 border-orange-300 shadow-2xl shadow-orange-500/50">
                    <svg className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                    <div className="absolute -top-2 -right-2 w-7 h-7 sm:w-9 sm:h-9 bg-orange-100 rounded-full flex items-center justify-center border-2 border-orange-300 font-bebas text-base sm:text-lg text-orange-700">
                      3
                    </div>
                  </div>
                </motion.div>
                <div className="w-20 sm:w-28 md:w-36 h-24 sm:h-28 md:h-32 bg-gradient-to-b from-orange-600 to-orange-800 border-t-4 border-orange-400 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-transparent" />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-bebas text-xl sm:text-2xl md:text-3xl text-orange-300">
                    3rd
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 2 }}
              className="text-center mt-8 sm:mt-12"
            >
              <p className="font-orbitron text-sm sm:text-base md:text-lg text-foreground/80 tracking-wide">
                <span className="text-accent font-semibold">CLIMB THE RANKS</span> •
                <span className="mx-2 text-primary">SECURE INVESTMENT</span> •
                <span className="text-accent font-semibold">CLAIM VICTORY</span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ActivitySection;

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

          {/* Victory Pyramid */}
          <div className="flex flex-col items-center gap-6 sm:gap-8 mt-8 sm:mt-12">
            {/* Winner at the top */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center border-4 border-yellow-300 shadow-2xl shadow-yellow-500/50">
                  <span className="text-2xl sm:text-4xl">🏆</span>
                </div>
                <div className="mt-4 px-6 py-2 bg-accent/20 border-2 border-accent rounded-lg">
                  <span className="font-bebas text-xl sm:text-3xl text-accent">WINNER</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Pyramid structure */}
            <div className="relative w-full max-w-md">
              {/* Top level - 2nd & 3rd place */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex justify-center gap-8 sm:gap-12 mb-6"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full flex items-center justify-center border-4 border-gray-200 shadow-lg">
                    <span className="text-lg sm:text-2xl">🥈</span>
                  </div>
                  <span className="mt-2 font-orbitron text-xs sm:text-sm text-muted-foreground">2nd</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center border-4 border-orange-300 shadow-lg">
                    <span className="text-lg sm:text-2xl">🥉</span>
                  </div>
                  <span className="mt-2 font-orbitron text-xs sm:text-sm text-muted-foreground">3rd</span>
                </div>
              </motion.div>

              {/* Bottom level - participants */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex justify-center gap-3 sm:gap-6"
              >
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -5, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2
                    }}
                    className="w-8 h-8 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center border-2 border-primary/40"
                  >
                    <span className="text-sm sm:text-lg">👤</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-xs sm:text-base text-foreground/70 text-center font-orbitron max-w-md"
            >
              Compete to reach the top and claim victory
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ActivitySection;

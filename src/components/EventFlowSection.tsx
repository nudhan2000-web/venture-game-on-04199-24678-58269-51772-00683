import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mic, Briefcase, Scale, DollarSign, BarChart3, Trophy } from "lucide-react";

const EventFlowSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const steps = [
    { icon: Mic, title: "Opening & Introduction", description: "Welcome to the game" },
    { icon: Briefcase, title: "Presentation Round", description: "Pitch your vision" },
    { icon: Scale, title: "Judge Interaction", description: "Face the investors" },
    { icon: DollarSign, title: "Audience Investment", description: "Win the crowd" },
    { icon: BarChart3, title: "Calculation & Result", description: "The verdict awaits" },
    { icon: Trophy, title: "Result & Closing", description: "Champions crowned" },
  ];

  return (
    <section id="flow" ref={ref} className="relative py-12 md:py-20 px-4 flex items-center justify-center overflow-hidden max-w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-squid-charcoal/50 to-black" />
      
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-bebas text-4xl sm:text-6xl md:text-8xl text-primary text-glow text-center mb-8 sm:mb-20"
        >
          EVENT FLOW
        </motion.h2>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary opacity-30" />
          
          <div className="space-y-6 md:space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'} gap-4 md:gap-8`}
                  style={{ willChange: 'transform, opacity' }}
                >
                  {/* Left/Right content */}
                  <div className={`flex ${isEven ? 'justify-end' : 'justify-start'} w-1/2`}>
                    <div className="bg-card border border-primary/30 p-3 md:p-6 rounded-lg max-w-sm hover:border-primary hover:box-glow transition-all duration-300">
                      <h3 className="font-orbitron text-sm sm:text-base md:text-xl text-primary mb-1 md:mb-2">{step.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Center icon */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-black border-2 border-primary rounded-full p-2 md:p-4 animate-pulse-glow">
                      <Icon className="w-5 h-5 md:w-8 md:h-8 text-primary" />
                    </div>
                  </div>
                  
                  <div className="w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventFlowSection;

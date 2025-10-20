import { motion } from "framer-motion";

const FloatingShapes = () => {
  // Squid Game inspired shapes - more variety and presence
  const shapes = [
    { type: "triangle", delay: 0, duration: 8, x: "15%", y: "15%", size: 70, isGold: true },
    { type: "circle", delay: 1, duration: 10, x: "85%", y: "25%", size: 80, isGold: false },
    { type: "square", delay: 2, duration: 12, x: "10%", y: "75%", size: 65, isGold: true },
    { type: "triangle", delay: 1.5, duration: 9, x: "80%", y: "70%", size: 75, isGold: false },
    { type: "circle", delay: 0.5, duration: 11, x: "50%", y: "10%", size: 60, isGold: true },
    { type: "square", delay: 1.8, duration: 10, x: "30%", y: "50%", size: 70, isGold: false },
    { type: "triangle", delay: 0.8, duration: 13, x: "70%", y: "45%", size: 55, isGold: true },
    { type: "circle", delay: 2.2, duration: 9, x: "25%", y: "35%", size: 85, isGold: false },
    { type: "dollar", delay: 1.2, duration: 10, x: "20%", y: "60%", size: 50, isGold: true },
    { type: "dollar", delay: 2.5, duration: 11, x: "75%", y: "15%", size: 55, isGold: true },
    { type: "dollar", delay: 0.3, duration: 9, x: "40%", y: "80%", size: 45, isGold: true },
    { type: "dollar", delay: 1.8, duration: 12, x: "90%", y: "50%", size: 60, isGold: true },
    { type: "dollar", delay: 0.7, duration: 10, x: "5%", y: "40%", size: 50, isGold: true },
    { type: "dollar", delay: 2.0, duration: 11, x: "60%", y: "30%", size: 55, isGold: true },
  ];

  const renderShape = (type: string, size: number, isGold: boolean) => {
    const colorClass = isGold ? "text-[hsl(45,100%,51%)]" : "text-primary";
    const shadowClass = isGold ? "drop-shadow-[0_0_10px_rgba(255,215,0,0.4)]" : "drop-shadow-[0_0_10px_rgba(255,10,84,0.4)]";
    
    switch (type) {
      case "triangle":
        return (
          <svg width={size} height={size} viewBox="0 0 60 60" className={`opacity-40 ${shadowClass}`}>
            <polygon 
              points="30,10 50,50 10,50" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5"
              className="animate-pulse"
            />
          </svg>
        );
      case "circle":
        return (
          <svg width={size} height={size} viewBox="0 0 60 60" className={`opacity-40 ${shadowClass}`}>
            <circle 
              cx="30" 
              cy="30" 
              r="20" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5"
              className="animate-pulse"
            />
          </svg>
        );
      case "square":
        return (
          <svg width={size} height={size} viewBox="0 0 60 60" className={`opacity-40 ${shadowClass}`}>
            <rect 
              x="15" 
              y="15" 
              width="30" 
              height="30" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5"
              className="animate-pulse"
            />
          </svg>
        );
      case "dollar":
        return (
          <svg width={size} height={size} viewBox="0 0 60 60" className={`opacity-40 ${shadowClass}`}>
            <text 
              x="50%" 
              y="50%" 
              dominantBaseline="middle" 
              textAnchor="middle" 
              fill="currentColor" 
              fontSize="36" 
              fontWeight="bold"
              className="animate-pulse"
            >
              $
            </text>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Cinematic fog layers */}
      <motion.div
        animate={{ 
          x: [0, 50, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-0 w-80 h-80 cinematic-fog opacity-30"
      />
      <motion.div
        animate={{ 
          x: [0, -50, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 right-0 w-80 h-80 cinematic-fog opacity-30"
      />
      
      {/* Squid Game shapes */}
      {shapes.map((shape, index) => {
        // Reduce shapes on mobile for better performance
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
        const shouldRender = !isMobile || index % 2 === 0; // Show every other shape on mobile
        
        if (!shouldRender) return null;
        
        return (
          <motion.div
            key={index}
            className={`absolute ${shape.isGold ? 'text-[hsl(45,100%,51%)]' : 'text-primary'}`}
            style={{ 
              left: shape.x, 
              top: shape.y,
              willChange: 'transform, opacity'
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 360],
              opacity: [0.4, 0.6, 0.4],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              delay: shape.delay,
              ease: "easeInOut",
            }}
          >
            {renderShape(shape.type, shape.size, shape.isGold)}
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingShapes;

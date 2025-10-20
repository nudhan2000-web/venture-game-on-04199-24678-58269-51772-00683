import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const BackButton = () => {
  const handleClick = () => {
    window.location.href = "https://intemstellar-nu.vercel.app/";
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed top-4 md:top-6 left-4 md:left-6 z-50"
    >
      <Button
        onClick={handleClick}
        variant="outline"
        className="gap-1 md:gap-2 font-orbitron tracking-wider border-2 border-primary/50 hover:border-primary box-glow bg-card/80 backdrop-blur-sm text-xs md:text-sm px-2 md:px-4 py-1 md:py-2"
      >
        <ArrowLeft className="w-3 h-3 md:w-4 md:h-4" />
        BACK
      </Button>
    </motion.div>
  );
};

export default BackButton;
